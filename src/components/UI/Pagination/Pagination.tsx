export interface PaginationProps {
    /** Current page, starting at 1. */
    page: number
    /** Total number of pages. */
    total: number
    onChange: (page: number) => void
    /** Pages shown on each side of the current one. */
    siblings?: number
    rounded?: boolean
}

type Item = number | 'ellipsis-start' | 'ellipsis-end'

/** Builds [1, '…', 4, 5, 6, '…', 20] style lists. */
export const getPages = (page: number, total: number, siblings = 1): Item[] => {
    const range = (from: number, to: number) => Array.from({ length: Math.max(0, to - from + 1) }, (_, index) => from + index)
    const visible = siblings * 2 + 5
    if (total <= visible) return range(1, total)

    const left = Math.max(page - siblings, 2)
    const right = Math.min(page + siblings, total - 1)
    const items: Item[] = [1]
    if (left > 2) items.push('ellipsis-start')
    items.push(...range(left, right))
    if (right < total - 1) items.push('ellipsis-end')
    items.push(total)
    return items
}

const arrow = (direction: 'prev' | 'next') => (
    <svg className='h-4 w-4' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
        <path strokeLinecap='round' strokeLinejoin='round' d={direction === 'prev' ? 'm15 18-6-6 6-6' : 'm9 18 6-6-6-6'} />
    </svg>
)

export const Pagination = ({ page, total, onChange, siblings = 1, rounded = false }: PaginationProps) => {
    const shape = rounded ? 'rounded-full' : 'rounded-xl'
    const item = `flex h-10 min-w-10 items-center justify-center px-3 text-sm ${shape}`
    const idle = rounded
        ? 'text-neutral-600 hover:bg-neutral-200 dark:text-neutral-300 dark:hover:bg-neutral-800'
        : 'border border-neutral-300 text-neutral-600 hover:bg-neutral-200 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800'
    const disabled = 'pointer-events-none opacity-40'

    return (
        <nav aria-label='Pagination'>
            <ul className='flex items-center gap-1'>
                <li>
                    <button type='button' aria-label='Previous page' disabled={page <= 1} onClick={() => onChange(page - 1)} className={`${item} ${idle} ${page <= 1 ? disabled : ''}`}>
                        {arrow('prev')}
                        {!rounded && <span className='ml-1 max-[640px]:hidden'>Previous</span>}
                    </button>
                </li>
                {getPages(page, total, siblings).map((entry) => (
                    <li key={entry}>
                        {typeof entry === 'string' ? (
                            <span className={`${item} text-neutral-500`}>…</span>
                        ) : (
                            <button
                                type='button'
                                aria-label={`Page ${entry}`}
                                aria-current={entry === page ? 'page' : undefined}
                                onClick={() => onChange(entry)}
                                className={`${item} ${entry === page ? 'border border-pink-400 bg-pink-400 font-medium text-white' : idle}`}
                            >
                                {entry}
                            </button>
                        )}
                    </li>
                ))}
                <li>
                    <button type='button' aria-label='Next page' disabled={page >= total} onClick={() => onChange(page + 1)} className={`${item} ${idle} ${page >= total ? disabled : ''}`}>
                        {!rounded && <span className='mr-1 max-[640px]:hidden'>Next</span>}
                        {arrow('next')}
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export interface SimplePaginationProps {
    page: number
    total: number
    onChange: (page: number) => void
}

export const SimplePagination = ({ page, total, onChange }: SimplePaginationProps) => (
    <nav aria-label='Pagination' className='flex items-center gap-4 text-sm'>
        <button type='button' disabled={page <= 1} onClick={() => onChange(page - 1)} className='rounded-xl border border-neutral-300 px-4 py-2 font-medium text-neutral-700 hover:bg-neutral-200 disabled:pointer-events-none disabled:opacity-40 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800'>
            Previous
        </button>
        <span className='text-neutral-600 dark:text-neutral-300'>
            Page <b className='font-medium text-neutral-900 dark:text-white'>{page}</b> of <b className='font-medium text-neutral-900 dark:text-white'>{total}</b>
        </span>
        <button type='button' disabled={page >= total} onClick={() => onChange(page + 1)} className='rounded-xl bg-pink-400 px-4 py-2 font-medium text-white hover:bg-pink-500 disabled:pointer-events-none disabled:opacity-40'>
            Next
        </button>
    </nav>
)
