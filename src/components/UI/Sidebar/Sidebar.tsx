import { useId, useState, type ReactNode } from 'react'
import { accentStyle } from '../accent'
import { Tooltip } from '../Tooltip/Tooltip'

export interface SidebarItem {
    id: string
    label: string
    /** Icon of the item. It is the only thing shown when the sidebar is collapsed, so give every item one. */
    icon?: ReactNode
    /** Makes the item a link. Without it the item is a button that calls `onSelect`. */
    href?: string
    /** Small text on the right, for example a counter. */
    badge?: ReactNode
    /** Sub items. The item opens and closes them instead of being chosen. */
    children?: SidebarItem[]
    disabled?: boolean
    onSelect?: () => void
}

export interface SidebarSection {
    /** Title of the group, shown over its items. */
    title?: string
    items: SidebarItem[]
}

export interface SidebarLabels {
    /** Accessible name of the button that collapses the sidebar. */
    collapse: string
    /** Accessible name of the button that expands the sidebar. */
    expand: string
}

const defaultLabels: SidebarLabels = { collapse: 'Collapse sidebar', expand: 'Expand sidebar' }

export interface SidebarProps {
    /** Texts of the component. Pass only the ones you want to change, for example to translate it. */
    labels?: Partial<SidebarLabels>
    sections: SidebarSection[]
    /** Id of the item that is the current page. */
    activeId?: string
    /** Called with the id of the item the user chose. */
    onNavigate?: (id: string) => void
    /** Content at the top, for example the logo. */
    header?: ReactNode | ((collapsed: boolean) => ReactNode)
    /** Content at the bottom, for example the user. */
    footer?: ReactNode | ((collapsed: boolean) => ReactNode)
    /** Controlled collapsed state. Use together with `onCollapsedChange`. */
    collapsed?: boolean
    defaultCollapsed?: boolean
    onCollapsedChange?: (collapsed: boolean) => void
    /** Show the button that collapses the sidebar to icons. */
    collapsible?: boolean
    /** Accent color of the active item: any CSS color. Without it the component uses `--blossom-accent`. */
    color?: string
    /** Accessible name of the navigation. */
    label?: string
    /** Give it a height, for example `h-[32rem]`. */
    className?: string
}

/** Side navigation with groups, nested items, badges and a collapsed mode that keeps only the icons. */
export const Sidebar = ({ labels, sections, activeId, onNavigate, header, footer, collapsed, defaultCollapsed = false, onCollapsedChange, collapsible = true, color, label = 'Sidebar', className = '' }: SidebarProps) => {
    const id = useId()
    const text = { ...defaultLabels, ...labels }
    const [internalCollapsed, setInternalCollapsed] = useState(defaultCollapsed)
    const isCollapsed = collapsed ?? internalCollapsed

    // A group that holds the active item starts open.
    const hasActive = (item: SidebarItem): boolean => item.id === activeId || Boolean(item.children?.some(hasActive))
    const [open, setOpen] = useState<string[]>(() => sections.flatMap((section) => section.items).filter((item) => item.children && hasActive(item)).map((item) => item.id))

    const toggleCollapsed = () => {
        if (collapsed === undefined) setInternalCollapsed(!isCollapsed)
        onCollapsedChange?.(!isCollapsed)
    }

    const row = 'flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[var(--blossom-accent,#f472b6)] disabled:cursor-not-allowed disabled:opacity-40'

    const rowClass = (active: boolean) =>
        `${row} ${isCollapsed ? 'justify-center px-0' : ''} ${active ? 'bg-[color-mix(in_srgb,var(--blossom-accent,#f472b6)_16%,transparent)] font-medium text-[color-mix(in_srgb,var(--blossom-accent,#f472b6)_85%,black)] dark:text-[var(--blossom-accent,#f472b6)]' : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-white'}`

    const renderItem = (item: SidebarItem, level = 0): ReactNode => {
        const active = item.id === activeId
        const hasChildren = Boolean(item.children?.length)
        const expanded = open.includes(item.id)
        const content = (
            <>
                {item.icon ? <span className='flex h-5 w-5 shrink-0 items-center justify-center'>{item.icon}</span> : level > 0 ? <span aria-hidden='true' className='h-1 w-1 shrink-0 rounded-full bg-current opacity-50' /> : null}
                {!isCollapsed && <span className='flex-1 truncate text-left'>{item.label}</span>}
                {!isCollapsed && item.badge !== undefined && <span className='rounded-full bg-neutral-200 px-2 py-0.5 text-xs font-medium text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200'>{item.badge}</span>}
                {!isCollapsed && hasChildren && (
                    <svg className={`h-3.5 w-3.5 shrink-0 transition-transform duration-150 ${expanded ? 'rotate-90' : ''}`} aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2.5'><path strokeLinecap='round' strokeLinejoin='round' d='m9 6 6 6-6 6' /></svg>
                )}
            </>
        )

        const choose = () => {
            if (hasChildren) {
                // A collapsed sidebar has no room for sub items: open it first.
                if (isCollapsed) toggleCollapsed()
                setOpen((ids) => (ids.includes(item.id) ? ids.filter((entry) => entry !== item.id) : [...ids, item.id]))
                return
            }
            item.onSelect?.()
            onNavigate?.(item.id)
        }

        const control = item.href && !hasChildren ? (
            <a href={item.href} aria-current={active ? 'page' : undefined} aria-label={isCollapsed ? item.label : undefined} onClick={choose} className={rowClass(active)}>{content}</a>
        ) : (
            <button type='button' disabled={item.disabled} aria-current={active ? 'page' : undefined} aria-expanded={hasChildren ? expanded : undefined} aria-controls={hasChildren ? `${id}-${item.id}` : undefined} aria-label={isCollapsed ? item.label : undefined} onClick={choose} className={rowClass(active || (isCollapsed && hasActive(item)))}>{content}</button>
        )

        return (
            <li key={item.id}>
                {isCollapsed ? <Tooltip content={item.label} placement='right' className='flex w-full'>{control}</Tooltip> : control}
                {hasChildren && !isCollapsed && expanded && (
                    <ul id={`${id}-${item.id}`} className='ml-5 mt-0.5 flex flex-col gap-0.5 border-l border-neutral-200 pl-2 dark:border-neutral-700'>
                        {item.children!.map((child) => renderItem(child, level + 1))}
                    </ul>
                )}
            </li>
        )
    }

    const slot = (value: SidebarProps['header']) => (typeof value === 'function' ? value(isCollapsed) : value)

    return (
        <nav
            aria-label={label}
            style={accentStyle(color)}
            className={`flex shrink-0 flex-col rounded-xl border border-neutral-200 bg-white transition-[width] duration-200 motion-reduce:transition-none dark:border-neutral-700 dark:bg-neutral-900 ${isCollapsed ? 'w-[4.5rem]' : 'w-64'} ${className}`}
        >
            {(header || collapsible) && (
                <div className={`flex items-center gap-2 border-b border-neutral-200 p-3 dark:border-neutral-700 ${isCollapsed ? 'flex-col' : 'justify-between'}`}>
                    <div className='min-w-0 flex-1 overflow-hidden'>{slot(header)}</div>
                    {collapsible && (
                        <button
                            type='button'
                            aria-label={isCollapsed ? text.expand : text.collapse}
                            aria-expanded={!isCollapsed}
                            onClick={toggleCollapsed}
                            className='grid h-8 w-8 shrink-0 place-items-center rounded-lg text-neutral-500 outline-none hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-[var(--blossom-accent,#f472b6)] dark:hover:bg-neutral-800'
                        >
                            <svg className={`h-4 w-4 transition-transform duration-200 ${isCollapsed ? 'rotate-180' : ''}`} aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'><path strokeLinecap='round' strokeLinejoin='round' d='m15 6-6 6 6 6' /></svg>
                        </button>
                    )}
                </div>
            )}
            <div className='thin-scroll flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto overflow-x-hidden p-3'>
                {sections.map((section, index) => (
                    <div key={section.title ?? index} className='flex flex-col gap-1'>
                        {section.title && !isCollapsed && <h3 className='px-3 pb-1 text-xs font-medium uppercase tracking-wide text-neutral-400'>{section.title}</h3>}
                        {section.title && isCollapsed && index > 0 && <div aria-hidden='true' className='mx-2 h-px bg-neutral-200 dark:bg-neutral-700' />}
                        <ul className='flex flex-col gap-0.5'>{section.items.map((item) => renderItem(item))}</ul>
                    </div>
                ))}
            </div>
            {footer && <div className='border-t border-neutral-200 p-3 dark:border-neutral-700'>{slot(footer)}</div>}
        </nav>
    )
}
