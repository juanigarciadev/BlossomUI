import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState, type KeyboardEvent, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { accentStyle } from '../accent'

export interface MenubarItem {
    id: string
    label: string
    icon?: ReactNode
    /** Keyboard shortcut shown on the right, for example "Ctrl+S". It is only a hint: you handle the key yourself. */
    shortcut?: string
    onSelect?: () => void
    /** Shows a check before the item. Use it for options that are on or off. */
    checked?: boolean
    danger?: boolean
    disabled?: boolean
    /** Draws a line above this item. */
    separator?: boolean
}

export interface MenubarMenu {
    id: string
    label: string
    items: MenubarItem[]
}

export interface MenubarProps {
    menus: MenubarMenu[]
    /** Accent color of the highlighted item: any CSS color. Without it the component uses `--blossom-accent`. */
    color?: string
    /** Accessible name of the bar. */
    label?: string
    className?: string
}

const nextEnabled = (items: MenubarItem[], from: number, step: 1 | -1) => {
    for (let index = from + step; index >= 0 && index < items.length; index += step) {
        if (!items[index].disabled) return index
    }
    return from
}

/** A row of menus like the top of a desktop app: File, Edit, View. Once one is open, hovering another switches to it. */
export const Menubar = ({ menus, color, label = 'Menu bar', className = '' }: MenubarProps) => {
    const id = useId()
    const bar = useRef<HTMLDivElement>(null)
    const list = useRef<HTMLDivElement>(null)
    const triggers = useRef<(HTMLButtonElement | null)[]>([])
    const [openIndex, setOpenIndex] = useState<number | null>(null)
    const [active, setActive] = useState(-1)
    const [stop, setStop] = useState(0)
    const [box, setBox] = useState<{ top: number; left: number } | null>(null)

    const close = useCallback((restoreFocus = true) => {
        if (restoreFocus && openIndex !== null) triggers.current[openIndex]?.focus()
        setOpenIndex(null)
        setBox(null)
    }, [openIndex])

    const openMenu = (index: number, first = true) => {
        setStop(index)
        setActive(first ? nextEnabled(menus[index].items, -1, 1) : nextEnabled(menus[index].items, menus[index].items.length, -1))
        setOpenIndex(index)
        setBox(null)
    }

    useLayoutEffect(() => {
        if (openIndex === null) return
        const rect = triggers.current[openIndex]?.getBoundingClientRect()
        if (!rect) return
        const width = list.current?.offsetWidth ?? 0
        setBox({ top: rect.bottom + 6, left: Math.min(Math.max(8, rect.left), window.innerWidth - width - 8) })
    }, [openIndex])

    useEffect(() => {
        if (openIndex === null) return
        const onPointer = (event: MouseEvent) => {
            const target = event.target as Node
            if (!list.current?.contains(target) && !bar.current?.contains(target)) close(false)
        }
        const dismiss = () => close(false)
        const onEscape = (event: globalThis.KeyboardEvent) => {
            if (event.key !== 'Escape') return
            event.preventDefault()
            close()
        }
        document.addEventListener('mousedown', onPointer)
        document.addEventListener('keydown', onEscape, true)
        window.addEventListener('resize', dismiss)
        window.addEventListener('scroll', dismiss, true)
        return () => {
            document.removeEventListener('mousedown', onPointer)
            document.removeEventListener('keydown', onEscape, true)
            window.removeEventListener('resize', dismiss)
            window.removeEventListener('scroll', dismiss, true)
        }
    }, [openIndex, close])

    useEffect(() => {
        if (openIndex !== null && box) list.current?.focus()
    }, [openIndex, box])

    const moveBar = (index: number) => {
        const target = (index + menus.length) % menus.length
        setStop(target)
        if (openIndex !== null) openMenu(target)
        else triggers.current[target]?.focus()
    }

    const onBarKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
        if (event.key === 'ArrowRight') {
            event.preventDefault()
            moveBar(index + 1)
        } else if (event.key === 'ArrowLeft') {
            event.preventDefault()
            moveBar(index - 1)
        } else if (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            openMenu(index)
        } else if (event.key === 'ArrowUp') {
            event.preventDefault()
            openMenu(index, false)
        }
    }

    const menu = openIndex === null ? null : menus[openIndex]

    const choose = (item: MenubarItem) => {
        if (item.disabled) return
        item.onSelect?.()
        close()
    }

    const onListKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        if (!menu || openIndex === null) return
        switch (event.key) {
            case 'ArrowDown':
                event.preventDefault()
                setActive((index) => nextEnabled(menu.items, index, 1))
                break
            case 'ArrowUp':
                event.preventDefault()
                setActive((index) => nextEnabled(menu.items, index, -1))
                break
            case 'Home':
                event.preventDefault()
                setActive(nextEnabled(menu.items, -1, 1))
                break
            case 'End':
                event.preventDefault()
                setActive(nextEnabled(menu.items, menu.items.length, -1))
                break
            case 'ArrowRight':
                event.preventDefault()
                moveBar(openIndex + 1)
                break
            case 'ArrowLeft':
                event.preventDefault()
                moveBar(openIndex - 1)
                break
            case 'Enter':
            case ' ':
                event.preventDefault()
                if (active >= 0) choose(menu.items[active])
                break
            case 'Tab':
                close(false)
                break
        }
    }

    return (
        <>
            <div ref={bar} role='menubar' aria-label={label} style={accentStyle(color)} className={`inline-flex w-fit max-w-full gap-1 rounded-xl border border-neutral-200 bg-white p-1 dark:border-neutral-700 dark:bg-neutral-900 ${className}`}>
                {menus.map((entry, index) => (
                    <button
                        key={entry.id}
                        ref={(element) => { triggers.current[index] = element }}
                        type='button'
                        role='menuitem'
                        aria-haspopup='menu'
                        aria-expanded={openIndex === index}
                        aria-controls={openIndex === index ? `${id}-menu` : undefined}
                        tabIndex={index === stop ? 0 : -1}
                        onClick={() => (openIndex === index ? close(false) : openMenu(index))}
                        onPointerEnter={() => openIndex !== null && openIndex !== index && openMenu(index)}
                        onFocus={() => setStop(index)}
                        onKeyDown={(event) => onBarKeyDown(event, index)}
                        className={`rounded-lg px-3 py-1.5 text-sm font-medium outline-none focus-visible:ring-2 focus-visible:ring-[var(--blossom-accent,#f472b6)] ${openIndex === index ? 'bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-white' : 'text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800'}`}
                    >
                        {entry.label}
                    </button>
                ))}
            </div>
            {menu && createPortal(
                <div
                    ref={list}
                    id={`${id}-menu`}
                    role='menu'
                    aria-label={menu.label}
                    tabIndex={-1}
                    aria-activedescendant={active >= 0 ? `${id}-item-${active}` : undefined}
                    onKeyDown={onListKeyDown}
                    style={accentStyle(color, { position: 'fixed', top: box?.top ?? 0, left: box?.left ?? 0, visibility: box ? 'visible' : 'hidden' })}
                    className='z-[80] w-max min-w-48 max-w-[calc(100vw-1rem)] rounded-xl border border-neutral-200 bg-white p-1 text-sm shadow-lg outline-none dark:border-neutral-700 dark:bg-neutral-900'
                >
                    {menu.items.map((item, index) => (
                        <div key={item.id}>
                            {item.separator && <div role='separator' className='my-1 h-px bg-neutral-200 dark:bg-neutral-700' />}
                            <div
                                id={`${id}-item-${index}`}
                                role={item.checked === undefined ? 'menuitem' : 'menuitemcheckbox'}
                                aria-checked={item.checked}
                                aria-disabled={item.disabled}
                                onPointerEnter={() => !item.disabled && setActive(index)}
                                onClick={() => choose(item)}
                                className={`flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 ${item.disabled ? 'cursor-not-allowed opacity-40' : ''} ${item.danger ? 'text-red-600 dark:text-red-400' : 'text-neutral-800 dark:text-white'} ${index === active ? (item.danger ? 'bg-red-50 dark:bg-red-950' : 'bg-neutral-100 dark:bg-neutral-800') : ''}`}
                            >
                                <span className='flex h-4 w-4 shrink-0 items-center justify-center'>
                                    {item.checked ? <svg className='h-4 w-4 text-[color-mix(in_srgb,var(--blossom-accent,#f472b6)_85%,black)]' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='3'><path strokeLinecap='round' strokeLinejoin='round' d='m5 12 5 5L20 7' /></svg> : item.icon}
                                </span>
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
