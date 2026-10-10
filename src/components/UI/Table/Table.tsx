import { useMemo, useState, type ReactNode } from 'react'
import { accentStyle } from '../accent'

export interface TableColumn<T> {
    key: string
    header: string
    /** Custom cell. Without it the value of `row[key]` is shown. */
    render?: (row: T) => ReactNode
    /** Lets the user sort the rows by this column. */
    sortable?: boolean
    /** Value used to sort the rows when the cell is custom and `row[key]` is not what you see. */
    sortValue?: (row: T) => string | number
    align?: 'left' | 'right' | 'center'
}

export interface TableProps<T> {
    /** Texts of the component. Pass only the ones you want to change, for example to translate it. */
    labels?: { selectAll?: string; selectRow?: string; previous?: string; next?: string; showing?: (from: number, to: number, total: number) => string; page?: (page: number, total: number) => string }
    /** Rows per page. Without it all the rows are shown. */
    pageSize?: number
    /** Current page, starting at 1. Use it with `onPageChange` to control the page. */
    page?: number
    onPageChange?: (page: number) => void
    /** Accent color of this component: any CSS color. Without it the component uses `--blossom-accent`, which is pink by default. */
    color?: string
    columns: TableColumn<T>[]
    rows: T[]
    /** Returns a unique id for each row. */
    rowKey: (row: T) => string
    /** Adds a checkbox column. */
    selectable?: boolean
    onSelectionChange?: (selected: T[]) => void
    /** Shown when there are no rows. */
    empty?: ReactNode
    striped?: boolean
    caption?: string
}

type Direction = 'asc' | 'desc'

const align = { left: 'text-left', right: 'text-right', center: 'text-center' }

const box = 'h-4 w-4 cursor-pointer rounded border-neutral-300 accent-[var(--blossom-accent,#f472b6)]'

export const Table = <T,>({ pageSize, page: pageProp, onPageChange, labels, color, columns, rows, rowKey, selectable = false, onSelectionChange, empty = 'No results', striped = false, caption }: TableProps<T>) => {
    const [sort, setSort] = useState<{ key: string; direction: Direction } | null>(null)
    const [selected, setSelected] = useState<string[]>([])
    const [internalPage, setInternalPage] = useState(1)

    const sorted = useMemo(() => {
        if (!sort) return rows
        const column = columns.find((item) => item.key === sort.key)
        if (!column) return rows
        const read = (row: T) => (column.sortValue ? column.sortValue(row) : (row as Record<string, unknown>)[column.key])
        return [...rows].sort((a, b) => {
            const left = read(a)
            const right = read(b)
            const result = typeof left === 'number' && typeof right === 'number' ? left - right : String(left ?? '').localeCompare(String(right ?? ''), undefined, { numeric: true })
            return sort.direction === 'asc' ? result : -result
        })
    }, [rows, columns, sort])

    const goTo = (page: number) => {
        if (pageProp === undefined) setInternalPage(page)
        onPageChange?.(page)
    }

    const toggleSort = (key: string) => {
        goTo(1)
        setSort((current) => {
            if (current?.key !== key) return { key, direction: 'asc' }
            return current.direction === 'asc' ? { key, direction: 'desc' } : null
        })
    }

    const update = (ids: string[]) => {
        setSelected(ids)
        onSelectionChange?.(rows.filter((row) => ids.includes(rowKey(row))))
    }

    // Pages: the header checkbox works on the rows that are on screen
    const pages = pageSize ? Math.max(1, Math.ceil(sorted.length / pageSize)) : 1
    const current = Math.min(Math.max(pageProp ?? internalPage, 1), pages)
    const visible = pageSize ? sorted.slice((current - 1) * pageSize, current * pageSize) : sorted
    const visibleIds = visible.map(rowKey)
    const allSelected = visible.length > 0 && visibleIds.every((id) => selected.includes(id))
    const someSelected = visibleIds.some((id) => selected.includes(id)) && !allSelected
    const from = visible.length ? (current - 1) * (pageSize ?? 0) + 1 : 0
    const to = (current - 1) * (pageSize ?? 0) + visible.length

    return (
        <div className='w-full overflow-x-auto rounded-xl border border-neutral-200 dark:border-neutral-700' style={accentStyle(color)}>
            <table className='w-full text-sm'>
                {caption && <caption className='sr-only'>{caption}</caption>}
                <thead className='bg-neutral-100 text-xs uppercase text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400'>
                    <tr>
                        {selectable && (
                            <th scope='col' className='w-10 px-4 py-3'>
                                <input
                                    type='checkbox'
                                    aria-label={labels?.selectAll ?? 'Select all rows'}
                                    className={box}
                                    checked={allSelected}
                                    ref={(element) => { if (element) element.indeterminate = someSelected }}
                                    onChange={() => update(allSelected ? selected.filter((id) => !visibleIds.includes(id)) : Array.from(new Set([...selected, ...visibleIds])))}
                                />
                            </th>
                        )}
                        {columns.map((column) => {
                            const direction = sort?.key === column.key ? sort.direction : undefined
                            return (
                                <th
                                    key={column.key}
                                    scope='col'
                                    aria-sort={direction ? (direction === 'asc' ? 'ascending' : 'descending') : undefined}
                                    className={`px-4 py-3 font-medium ${align[column.align ?? 'left']}`}
                                >
                                    {column.sortable ? (
                                        <button
                                            type='button'
                                            onClick={() => toggleSort(column.key)}
                                            className='inline-flex items-center gap-1 rounded uppercase outline-none hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-[var(--blossom-accent,#f472b6)] dark:hover:text-white'
                                        >
                                            {column.header}
                                            <span aria-hidden='true' className={direction ? 'text-[color-mix(in_srgb,var(--blossom-accent,#f472b6)_85%,black)]' : 'opacity-40'}>{direction === 'desc' ? '↓' : '↑'}</span>
                                        </button>
                                    ) : column.header}
                                </th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody className='divide-y divide-neutral-200 dark:divide-neutral-700'>
                    {sorted.length === 0 && (
                        <tr>
                            <td colSpan={columns.length + (selectable ? 1 : 0)} className='px-4 py-10 text-center text-neutral-500'>{empty}</td>
                        </tr>
                    )}
                    {visible.map((row, index) => {
                        const id = rowKey(row)
                        const checked = selected.includes(id)
                        return (
                            <tr
                                key={id}
                                aria-selected={selectable ? checked : undefined}
                                className={`text-neutral-700 dark:text-neutral-200 ${checked ? 'bg-[color-mix(in_srgb,var(--blossom-accent,#f472b6)_10%,transparent)] dark:bg-[color-mix(in_srgb,var(--blossom-accent,#f472b6)_40%,transparent)]' : striped && index % 2 ? 'bg-neutral-50 dark:bg-neutral-800/50' : ''}`}
                            >
                                {selectable && (
                                    <td className='px-4 py-3'>
                                        <input
                                            type='checkbox'
                                            aria-label={labels?.selectRow ?? 'Select row'}
                                            className={box}
                                            checked={checked}
                                            onChange={() => update(checked ? selected.filter((value) => value !== id) : [...selected, id])}
                                        />
                                    </td>
                                )}
                                {columns.map((column) => (
                                    <td key={column.key} className={`px-4 py-3 ${align[column.align ?? 'left']}`}>
                                        {column.render ? column.render(row) : String((row as Record<string, unknown>)[column.key] ?? '')}
                                    </td>
                                ))}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {pageSize && sorted.length > pageSize && (
                <div className='flex flex-wrap items-center justify-between gap-3 border-t border-neutral-200 px-4 py-3 text-sm dark:border-neutral-700'>
                    <span className='text-neutral-500'>{labels?.showing ? labels.showing(from, to, sorted.length) : `Showing ${from}-${to} of ${sorted.length}`}</span>
                    <div className='flex items-center gap-2'>
                        <button
                            type='button'
                            disabled={current <= 1}
                            onClick={() => goTo(current - 1)}
                            className='rounded-lg border border-neutral-300 px-3 py-1.5 font-medium outline-none hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-[var(--blossom-accent,#f472b6)] disabled:pointer-events-none disabled:opacity-40 dark:border-neutral-600 dark:hover:bg-neutral-800'
                        >
                            {labels?.previous ?? 'Previous'}
                        </button>
                        <span className='tabular-nums text-neutral-600 dark:text-neutral-300'>{labels?.page ? labels.page(current, pages) : `${current} / ${pages}`}</span>
                        <button
                            type='button'
                            disabled={current >= pages}
                            onClick={() => goTo(current + 1)}
                            className='rounded-lg border border-neutral-300 px-3 py-1.5 font-medium outline-none hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-[var(--blossom-accent,#f472b6)] disabled:pointer-events-none disabled:opacity-40 dark:border-neutral-600 dark:hover:bg-neutral-800'
                        >
                            {labels?.next ?? 'Next'}
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
