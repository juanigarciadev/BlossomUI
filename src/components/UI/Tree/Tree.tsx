import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from 'react'
import { accentStyle } from '../accent'

export interface TreeNode {
    id: string
    label: string
    /** Element shown before the label, for example a file or folder icon. */
    icon?: ReactNode
    /** Child nodes. A node with children can be opened and closed. */
    children?: TreeNode[]
    disabled?: boolean
}

export interface TreeProps {
    nodes: TreeNode[]
    /** Controlled selected node. Use together with `onSelect`. */
    selected?: string | null
    /** Node that starts selected when the tree is not controlled. */
    defaultSelected?: string | null
    onSelect?: (id: string, node: TreeNode) => void
    /** Controlled list of open nodes. Use together with `onExpandedChange`. */
    expanded?: string[]
    /** Open nodes when the tree is not controlled. */
    defaultExpanded?: string[]
    onExpandedChange?: (ids: string[]) => void
    /** Accent color of the selected node: any CSS color. Without it the component uses `--blossom-accent`. */
    color?: string
    /** Accessible name of the tree. */
    label?: string
    className?: string
}

interface Row {
    node: TreeNode
    level: number
    parent: string | null
}

const chevron = (open: boolean) => (
    <svg className={`h-3.5 w-3.5 shrink-0 transition-transform duration-150 ${open ? 'rotate-90' : ''}`} aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2.5'>
        <path strokeLinecap='round' strokeLinejoin='round' d='m9 6 6 6-6 6' />
    </svg>
)

/** A hierarchy that opens and closes, for files, categories or an organization. It follows the keyboard model of a native tree. */
export const Tree = ({ nodes, selected, defaultSelected = null, onSelect, expanded, defaultExpanded = [], onExpandedChange, color, label, className = '' }: TreeProps) => {
    const id = useId()
    const root = useRef<HTMLUListElement>(null)
    const [internalSelected, setInternalSelected] = useState<string | null>(defaultSelected)
    const [internalExpanded, setInternalExpanded] = useState<string[]>(defaultExpanded)
    const current = selected === undefined ? internalSelected : selected
    const open = expanded ?? internalExpanded

    // The nodes that can be seen, in order: the closed ones hide their children.
    const rows: Row[] = []
    const walk = (list: TreeNode[], level: number, parent: string | null) => {
        list.forEach((node) => {
            rows.push({ node, level, parent })
            if (node.children?.length && open.includes(node.id)) walk(node.children, level + 1, node.id)
        })
    }
    walk(nodes, 0, null)

    // Only one node is in the tab order: the selected one, or the first.
    const [focused, setFocused] = useState<string | null>(null)
    const tabStop = rows.find((row) => row.node.id === focused)?.node.id ?? rows.find((row) => row.node.id === current)?.node.id ?? rows[0]?.node.id

    const setOpen = (ids: string[]) => {
        if (expanded === undefined) setInternalExpanded(ids)
        onExpandedChange?.(ids)
    }

    const toggle = (nodeId: string) => setOpen(open.includes(nodeId) ? open.filter((entry) => entry !== nodeId) : [...open, nodeId])

    const select = (node: TreeNode) => {
        if (node.disabled) return
        if (selected === undefined) setInternalSelected(node.id)
        onSelect?.(node.id, node)
    }

    const focusRow = (nodeId: string | undefined) => {
        if (!nodeId) return
        setFocused(nodeId)
        root.current?.querySelector<HTMLElement>(`[data-node="${CSS.escape(nodeId)}"]`)?.focus()
    }

    const onKeyDown = (event: KeyboardEvent<HTMLElement>, row: Row, index: number) => {
        const { node } = row
        const hasChildren = Boolean(node.children?.length)
        const isOpen = open.includes(node.id)
        switch (event.key) {
            case 'ArrowDown':
                event.preventDefault()
                focusRow(rows[index + 1]?.node.id)
                break
            case 'ArrowUp':
                event.preventDefault()
                focusRow(rows[index - 1]?.node.id)
                break
            case 'ArrowRight':
                event.preventDefault()
                if (hasChildren && !isOpen) toggle(node.id)
                else if (hasChildren) focusRow(rows[index + 1]?.node.id)
                break
            case 'ArrowLeft':
                event.preventDefault()
                if (hasChildren && isOpen) toggle(node.id)
                else focusRow(row.parent ?? undefined)
                break
            case 'Home':
                event.preventDefault()
                focusRow(rows[0]?.node.id)
                break
            case 'End':
                event.preventDefault()
                focusRow(rows[rows.length - 1]?.node.id)
                break
            case 'Enter':
            case ' ':
                event.preventDefault()
                select(node)
                if (hasChildren) toggle(node.id)
                break
            case '*':
                // Open every node on the same level
                event.preventDefault()
                setOpen([...new Set([...open, ...rows.filter((entry) => entry.parent === row.parent && entry.node.children?.length).map((entry) => entry.node.id)])])
                break
        }
    }

    const siblings = (row: Row) => rows.filter((entry) => entry.parent === row.parent)

    return (
        <ul ref={root} role='tree' aria-label={label} style={accentStyle(color)} className={`flex w-full flex-col gap-0.5 text-sm ${className}`}>
            {rows.map((row, index) => {
                const { node, level } = row
                const hasChildren = Boolean(node.children?.length)
                const isOpen = open.includes(node.id)
                const isSelected = node.id === current
                const group = siblings(row)
                return (
                    <li
                        key={node.id}
                        role='treeitem'
                        id={`${id}-${node.id}`}
                        data-node={node.id}
                        aria-level={level + 1}
                        aria-setsize={group.length}
                        aria-posinset={group.findIndex((entry) => entry.node.id === node.id) + 1}
                        aria-expanded={hasChildren ? isOpen : undefined}
                        aria-selected={isSelected}
                        aria-disabled={node.disabled}
                        tabIndex={node.id === tabStop ? 0 : -1}
                        onFocus={(event) => event.target === event.currentTarget && setFocused(node.id)}
                        onKeyDown={(event) => onKeyDown(event, row, index)}
                        onClick={(event) => {
                            event.stopPropagation()
                            select(node)
                            if (hasChildren && !node.disabled) toggle(node.id)
                        }}
                        style={{ paddingLeft: `${level * 1.25 + 0.5}rem` }}
                        className={`flex cursor-pointer select-none items-center gap-2 rounded-lg py-1.5 pr-2 outline-none focus-visible:ring-2 focus-visible:ring-[var(--blossom-accent,#f472b6)] ${node.disabled ? 'cursor-not-allowed opacity-40' : ''} ${isSelected ? 'bg-[color-mix(in_srgb,var(--blossom-accent,#f472b6)_16%,transparent)] font-medium text-[color-mix(in_srgb,var(--blossom-accent,#f472b6)_85%,black)] dark:text-[var(--blossom-accent,#f472b6)]' : 'text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800'}`}
                    >
                        <span className='flex h-4 w-4 shrink-0 items-center justify-center text-neutral-400'>{hasChildren ? chevron(isOpen) : null}</span>
                        {node.icon && <span className='shrink-0'>{node.icon}</span>}
                        <span className='truncate'>{node.label}</span>
                    </li>
                )
            })}
        </ul>
    )
}
