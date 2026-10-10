import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState, type KeyboardEvent, type ReactNode } from 'react'
import { createPortal } from 'react-dom'

export interface DropdownItem {
    id: string
    label: string
    icon?: ReactNode
    /** Called when the item is chosen with the mouse or the keyboard. */
    onSelect?: () => void
    /** Shows the item in red, useful for destructive actions. */
    danger?: boolean
    disabled?: boolean
    /** Draws a line above this item. */
    separator?: boolean
}

export interface DropdownProps {
    /** Content of the button that opens the menu. */
    label: ReactNode
    items: DropdownItem[]
    /** Which edge of the button the menu lines up with. */
    align?: 'start' | 'end'
    className?: string
}

const nextEnabled = (items: DropdownItem[], from: number, step: 1 | -1) => {
    for (let index = from + step; index >= 0 && index < items.length; index += step) {
        if (!items[index].disabled) return index
    }
    return from
}

export const Dropdown = ({ label, items, align = 'start', className = '' }: DropdownProps) => {
    const id = useId()
    const trigger = useRef<HTMLButtonElement>(null)
    const menu = useRef<HTMLDivElement>(null)
    const [open, setOpen] = useState(false)
    const [active, setActive] = useState(-1)
    const [box, setBox] = useState<{ top: number; left: number; minWidth: number } | null>(null)

    const close = useCallback((restoreFocus = true) => {
        setOpen(false)
        if (restoreFocus) trigger.current?.focus()
    }, [])

    useLayoutEffect(() => {
        if (!open || !trigger.current) return
        const rect = trigger.current.getBoundingClientRect()
        const width = menu.current?.offsetWidth ?? rect.width
        const left = align === 'end' ? rect.right - Math.max(width, rect.width) : rect.left
        setBox({ top: rect.bottom + 6, left: Math.max(8, left), minWidth: rect.width })
    }, [open, align])

    useEffect(() => {
        if (!open) {
            setBox(null)
            return
        }
        const onPointer = (event: MouseEvent) => {
            const target = event.target as Node
            if (!menu.current?.contains(target) && !trigger.current?.contains(target)) close(false)
        }
        const onScroll = () => close(false)
        document.addEventListener('mousedown', onPointer)
        window.addEventListener('resize', onScroll)
        window.addEventListener('scroll', onScroll, true)
        return () => {
            document.removeEventListener('mousedown', onPointer)
            window.removeEventListener('resize', onScroll)
            window.removeEventListener('scroll', onScroll, true)
        }
    }, [open, close])

    const positioned = box !== null
    useEffect(() => {
        if (open) menu.current?.focus()
    }, [open, positioned])

    const openMenu = (index?: number) => {
        setActive(index ?? nextEnabled(items, -1, 1))
        setOpen(true)
    }

    const choose = (item: DropdownItem) => {
        if (item.disabled) return
        item.onSelect?.()
        close()
    }

    const onTriggerKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
        if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            event.preventDefault()
            openMenu(event.key === 'ArrowUp' ? nextEnabled(items, items.length, -1) : undefined)
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
            case 'Escape':
                event.preventDefault()
                close()
                break
            case 'Tab':
                close(false)
                break
        }
    }

    return (
        <>
            <button
                ref={trigger}
                type='button'
                aria-haspopup='menu'
                aria-expanded={open}
                aria-controls={open ? `${id}-menu` : undefined}
                onClick={() => (open ? close(false) : openMenu())}
                onKeyDown={onTriggerKeyDown}
                className={`flex w-fit select-none items-center justify-center gap-2 rounded-xl border border-neutral-300 px-4 py-2.5 text-sm font-medium text-neutral-800 outline-none transition-colors hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-pink-400 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 ${className}`}
            >
                {label}
                <svg className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'><path strokeLinecap='round' strokeLinejoin='round' d='m6 9 6 6 6-6' /></svg>
            </button>
            {open && createPortal(
                <div
                    ref={menu}
                    id={`${id}-menu`}
                    role='menu'
                    tabIndex={-1}
                    aria-activedescendant={active >= 0 ? `${id}-item-${active}` : undefined}
                    onKeyDown={onMenuKeyDown}
                    style={{ position: 'fixed', top: box?.top ?? 0, left: box?.left ?? 0, minWidth: box?.minWidth, visibility: box ? 'visible' : 'hidden' }}
                    className='z-[80] w-max max-w-[calc(100vw-1rem)] rounded-xl border border-neutral-200 bg-white p-1 text-sm shadow-lg outline-none dark:border-neutral-700 dark:bg-neutral-900'
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
                                {item.label}
                            </div>
                        </div>
                    ))}
                </div>,
                document.body
            )}
        </>
    )
}
