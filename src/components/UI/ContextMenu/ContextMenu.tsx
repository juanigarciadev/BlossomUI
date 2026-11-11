import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState, type KeyboardEvent, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { accentStyle } from '../accent'

export interface ContextMenuItem {
    id: string
    label: string
    icon?: ReactNode
    /** Keyboard shortcut shown on the right, for example "Ctrl+C". It is only a hint: you handle the key yourself. */
    shortcut?: string
    /** Called when the item is chosen with the mouse or the keyboard. */
    onSelect?: () => void
    /** Shows the item in red, useful for destructive actions. */
    danger?: boolean
    disabled?: boolean
    /** Draws a line above this item. */
    separator?: boolean
}

export interface ContextMenuProps {
    items: ContextMenuItem[]
    /** The area that opens the menu with a right click, a long press on a phone, or the context menu key. */
    children: ReactNode
    /** Accent color of the highlighted item: any CSS color. Without it the component uses `--blossom-accent`. */
    color?: string
    /** Accessible name of the menu. */
    label?: string
    disabled?: boolean
    className?: string
}

const nextEnabled = (items: ContextMenuItem[], from: number, step: 1 | -1) => {
    for (let index = from + step; index >= 0 && index < items.length; index += step) {
        if (!items[index].disabled) return index
    }
    return from
}

/** Right click on the area to open a menu at the pointer. It keeps the keyboard behavior of a native menu. */
export const ContextMenu = ({ items, children, color, label, disabled = false, className = '' }: ContextMenuProps) => {
    const id = useId()
    const area = useRef<HTMLDivElement>(null)
    const menu = useRef<HTMLDivElement>(null)
    const press = useRef<number>()
    const [point, setPoint] = useState<{ x: number; y: number } | null>(null)
    const [box, setBox] = useState<{ top: number; left: number } | null>(null)
    const [active, setActive] = useState(-1)
    const open = point !== null

    const close = useCallback((restoreFocus = true) => {
        setPoint(null)
        setBox(null)
        if (restoreFocus) area.current?.focus({ preventScroll: true })
    }, [])

    const openAt = (x: number, y: number) => {
        setActive(nextEnabled(items, -1, 1))
        setPoint({ x, y })
    }

    // Keep the menu inside the screen: it opens towards the other side when it does not fit.
    useLayoutEffect(() => {
        if (!point || !menu.current) return
        const { offsetWidth, offsetHeight } = menu.current
        setBox({
            left: Math.max(8, point.x + offsetWidth > window.innerWidth - 8 ? point.x - offsetWidth : point.x),
            top: Math.max(8, point.y + offsetHeight > window.innerHeight - 8 ? point.y - offsetHeight : point.y),
        })
    }, [point])

    useEffect(() => {
        if (!open) return
        const onPointer = (event: MouseEvent) => {
            if (!menu.current?.contains(event.target as Node)) close(false)
        }
        const dismiss = () => close(false)
        // Escape closes the menu first, and the dialog behind it does not see it.
        const onEscape = (event: globalThis.KeyboardEvent) => {
            if (event.key !== 'Escape') return
            event.preventDefault()
            close()
        }
        document.addEventListener('mousedown', onPointer)
        document.addEventListener('keydown', onEscape, true)
        window.addEventListener('resize', dismiss)
        window.addEventListener('scroll', dismiss, true)
        window.addEventListener('blur', dismiss)
        return () => {
            document.removeEventListener('mousedown', onPointer)
            document.removeEventListener('keydown', onEscape, true)
            window.removeEventListener('resize', dismiss)
            window.removeEventListener('scroll', dismiss, true)
            window.removeEventListener('blur', dismiss)
        }
    }, [open, close])

    useEffect(() => {
        if (open && box) menu.current?.focus()
    }, [open, box])

    useEffect(() => () => window.clearTimeout(press.current), [])

    const choose = (item: ContextMenuItem) => {
        if (item.disabled) return
        item.onSelect?.()
        close()
    }

    const onContextMenu = (event: React.MouseEvent) => {
        if (disabled) return
        event.preventDefault()
        openAt(event.clientX, event.clientY)
    }

    // The context menu key and Shift + F10 open it next to the area for people without a mouse.
    const onAreaKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        if (disabled || event.target !== event.currentTarget) return
        if (event.key === 'ContextMenu' || (event.shiftKey && event.key === 'F10')) {
            event.preventDefault()
            const rect = event.currentTarget.getBoundingClientRect()
            openAt(rect.left + 24, rect.top + 24)
        }
    }

    const onMenuKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        switch (event.key) {
            case 'ArrowDown':
                event.preventDefault()
                setActive((index) => nextEnabled(items, index, 1))
                break
            case 'ArrowUp':
                event.preventDefault()
                setActive((index) => nextEnabled(items, index, -1))
                break
            case 'Home':
                event.preventDefault()
                setActive(nextEnabled(items, -1, 1))
                break
            case 'End':
                event.preventDefault()
                setActive(nextEnabled(items, items.length, -1))
                break
            case 'Enter':
            case ' ':
                event.preventDefault()
                if (active >= 0) choose(items[active])
                break
            case 'Tab':
                close(false)
                break
        }
    }

    return (
        <>
            <div
                ref={area}
                tabIndex={disabled ? undefined : 0}
                aria-haspopup='menu'
                onContextMenu={onContextMenu}
                onKeyDown={onAreaKeyDown}
                // A long press opens it on touch screens, where there is no right click.
                onTouchStart={(event) => {
                    if (disabled) return
                    const touch = event.touches[0]
                    press.current = window.setTimeout(() => openAt(touch.clientX, touch.clientY), 550)
                }}
                onTouchEnd={() => window.clearTimeout(press.current)}
                onTouchMove={() => window.clearTimeout(press.current)}
                className={`rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-[var(--blossom-accent,#f472b6)] ${className}`}
                style={accentStyle(color)}
            >
                {children}
            </div>
            {point && createPortal(
                <div
                    ref={menu}
                    id={`${id}-menu`}
                    role='menu'
                    aria-label={label}
                    tabIndex={-1}
                    aria-activedescendant={active >= 0 ? `${id}-item-${active}` : undefined}
                    onKeyDown={onMenuKeyDown}
                    onContextMenu={(event) => event.preventDefault()}
                    style={accentStyle(color, { position: 'fixed', top: box?.top ?? point.y, left: box?.left ?? point.x, visibility: box ? 'visible' : 'hidden' })}
                    className='z-[80] w-max min-w-44 max-w-[calc(100vw-1rem)] rounded-xl border border-neutral-200 bg-white p-1 text-sm shadow-lg outline-none dark:border-neutral-700 dark:bg-neutral-900'
                >
                    {items.map((item, index) => (
                        <div key={item.id}>
                            {item.separator && <div role='separator' className='my-1 h-px bg-neutral-200 dark:bg-neutral-700' />}
                            <div
                                id={`${id}-item-${index}`}
                                role='menuitem'
                                aria-disabled={item.disabled}
                                onPointerEnter={() => !item.disabled && setActive(index)}
                                onClick={() => choose(item)}
                                className={`flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 ${item.disabled ? 'cursor-not-allowed opacity-40' : ''} ${item.danger ? 'text-red-600 dark:text-red-400' : 'text-neutral-800 dark:text-white'} ${index === active ? (item.danger ? 'bg-red-50 dark:bg-red-950' : 'bg-neutral-100 dark:bg-neutral-800') : ''}`}
                            >
                                {item.icon}
                                <span className='flex-1'>{item.label}</span>
                                {item.shortcut && <span className='pl-6 text-xs text-neutral-400'>{item.shortcut}</span>}
                            </div>
                        </div>
                    ))}
                </div>,
                document.body
            )}
        </>
    )
}
