import { useEffect, useId, useRef, useState, type KeyboardEvent, type ReactNode } from 'react'
import { accentStyle } from '../accent'

export interface NavigationLink {
    label: string
    /** Small text under the label. */
    description?: string
    href: string
    icon?: ReactNode
}

export interface NavigationGroup {
    /** Title of the column. */
    title?: string
    links: NavigationLink[]
}

export interface NavigationItem {
    id: string
    label: string
    /** Makes the item a plain link, without a panel. */
    href?: string
    /** Columns of links shown in the panel. */
    groups?: NavigationGroup[]
    /** Anything you want in the panel, for example a featured card. It is shown before the columns. */
    featured?: ReactNode
}

export interface NavigationMenuProps {
    items: NavigationItem[]
    /** Id of the item that is the current page. */
    activeId?: string
    /** Milliseconds to wait before opening a panel on hover, so crossing the bar does not flash the panels. */
    hoverDelay?: number
    /** Accent color of the active item: any CSS color. Without it the component uses `--blossom-accent`. */
    color?: string
    /** Accessible name of the navigation. */
    label?: string
    className?: string
}

const link = 'flex items-center rounded-xl px-3 py-2 text-sm font-medium outline-none focus-visible:ring-2 focus-visible:ring-[var(--blossom-accent,#f472b6)]'

/** The main menu of a site. An item can open a panel with columns of links, a mega menu, on hover, focus or click. */
export const NavigationMenu = ({ items, activeId, hoverDelay = 120, color, label = 'Main', className = '' }: NavigationMenuProps) => {
    const id = useId()
    const root = useRef<HTMLElement>(null)
    const triggers = useRef<Record<string, HTMLElement | null>>({})
    const timer = useRef<number>()
    const [open, setOpen] = useState<string | null>(null)
    const current = items.find((item) => item.id === open)

    const close = (restoreFocus = false) => {
        window.clearTimeout(timer.current)
        if (restoreFocus && open) triggers.current[open]?.focus()
        setOpen(null)
    }

    useEffect(() => () => window.clearTimeout(timer.current), [])

    useEffect(() => {
        if (!open) return
        const onPointer = (event: MouseEvent) => {
            if (!root.current?.contains(event.target as Node)) setOpen(null)
        }
        const onEscape = (event: globalThis.KeyboardEvent) => {
            if (event.key !== 'Escape') return
            event.preventDefault()
            close(true)
        }
        document.addEventListener('mousedown', onPointer)
        document.addEventListener('keydown', onEscape, true)
        return () => {
            document.removeEventListener('mousedown', onPointer)
            document.removeEventListener('keydown', onEscape, true)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open])

    const hoverOpen = (itemId: string) => {
        window.clearTimeout(timer.current)
        timer.current = window.setTimeout(() => setOpen(itemId), open ? 0 : hoverDelay)
    }

    const onKeyDown = (event: KeyboardEvent<HTMLElement>, index: number) => {
        const move = (to: number) => {
            event.preventDefault()
            const target = items[(to + items.length) % items.length]
            triggers.current[target.id]?.focus()
            if (open && target.groups) setOpen(target.id)
            else if (open) setOpen(null)
        }
        if (event.key === 'ArrowRight') move(index + 1)
        else if (event.key === 'ArrowLeft') move(index - 1)
        else if (event.key === 'Home') move(0)
        else if (event.key === 'End') move(items.length - 1)
        else if (event.key === 'ArrowDown' && items[index].groups) {
            event.preventDefault()
            setOpen(items[index].id)
            // Move the focus into the panel once it is there.
            window.setTimeout(() => document.querySelector<HTMLElement>(`#${CSS.escape(`${id}-panel`)} a`)?.focus(), 0)
        }
    }

    return (
        <nav ref={root} aria-label={label} style={accentStyle(color)} onPointerLeave={() => { window.clearTimeout(timer.current); if (open) timer.current = window.setTimeout(() => setOpen(null), 200) }} className={`relative w-fit max-w-full ${className}`}>
            <ul className='flex items-center gap-1'>
                {items.map((item, index) => {
                    const active = item.id === activeId
                    const tone = active ? 'text-[color-mix(in_srgb,var(--blossom-accent,#f472b6)_85%,black)] dark:text-[var(--blossom-accent,#f472b6)]' : 'text-neutral-700 dark:text-neutral-200'
                    return (
                        <li key={item.id}>
                            {item.groups ? (
                                <button
                                    ref={(element) => { triggers.current[item.id] = element }}
                                    type='button'
                                    aria-expanded={open === item.id}
                                    aria-controls={open === item.id ? `${id}-panel` : undefined}
                                    onClick={() => (open === item.id ? setOpen(null) : setOpen(item.id))}
                                    onPointerEnter={(event) => event.pointerType === 'mouse' && hoverOpen(item.id)}
                                    onKeyDown={(event) => onKeyDown(event, index)}
                                    className={`${link} gap-1.5 ${tone} ${open === item.id ? 'bg-neutral-100 dark:bg-neutral-800' : 'hover:bg-neutral-100 dark:hover:bg-neutral-800'}`}
                                >
                                    {item.label}
                                    <svg className={`h-3.5 w-3.5 transition-transform duration-200 ${open === item.id ? 'rotate-180' : ''}`} aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2.5'><path strokeLinecap='round' strokeLinejoin='round' d='m6 9 6 6 6-6' /></svg>
                                </button>
                            ) : (
                                <a
                                    ref={(element) => { triggers.current[item.id] = element }}
                                    href={item.href}
                                    aria-current={active ? 'page' : undefined}
                                    onPointerEnter={() => { window.clearTimeout(timer.current); if (open) setOpen(null) }}
                                    onKeyDown={(event) => onKeyDown(event, index)}
                                    className={`${link} ${tone} hover:bg-neutral-100 dark:hover:bg-neutral-800`}
                                >
                                    {item.label}
                                </a>
                            )}
                        </li>
                    )
                })}
            </ul>
            {current?.groups && (
                <div
                    id={`${id}-panel`}
                    role='region'
                    aria-label={current.label}
                    onPointerEnter={() => window.clearTimeout(timer.current)}
                    className='absolute left-0 top-full z-50 mt-2 flex w-max max-w-[calc(100vw-2rem)] gap-6 rounded-xl border border-neutral-200 bg-white p-4 shadow-lg dark:border-neutral-700 dark:bg-neutral-900'
                >
                    {current.featured && <div className='w-48 shrink-0'>{current.featured}</div>}
                    {current.groups.map((group, index) => (
                        <div key={group.title ?? index} className='flex min-w-44 flex-col gap-1'>
                            {group.title && <h3 className='px-3 pb-1 text-xs font-medium uppercase tracking-wide text-neutral-400'>{group.title}</h3>}
                            {group.links.map((entry) => (
                                <a key={entry.href + entry.label} href={entry.href} onClick={() => setOpen(null)} className='flex items-start gap-3 rounded-lg px-3 py-2 outline-none hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-[var(--blossom-accent,#f472b6)] dark:hover:bg-neutral-800'>
                                    {entry.icon && <span className='mt-0.5 shrink-0 text-neutral-500'>{entry.icon}</span>}
                                    <span className='flex flex-col'>
                                        <span className='text-sm font-medium text-neutral-900 dark:text-white'>{entry.label}</span>
                                        {entry.description && <span className='max-w-[14rem] text-xs text-neutral-500'>{entry.description}</span>}
                                    </span>
                                </a>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </nav>
    )
}
