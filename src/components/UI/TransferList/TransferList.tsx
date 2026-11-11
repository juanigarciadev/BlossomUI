import { useId, useMemo, useState, type KeyboardEvent } from 'react'
import { accentStyle } from '../accent'

export interface TransferItem {
    id: string
    label: string
    disabled?: boolean
}

export interface TransferListLabels {
    /** Title of the list of items that were not chosen. */
    available: string
    /** Title of the list of chosen items. */
    selected: string
    /** Accessible name of the button that moves the checked items to the chosen list. */
    moveRight: string
    /** Accessible name of the button that moves the checked items back. */
    moveLeft: string
    moveAllRight: string
    moveAllLeft: string
    search: string
    /** Text of a list without items. */
    empty: string
    /** Text under the title of each list, for example "2 of 5 selected". */
    count: (checked: number, total: number) => string
}

const defaultLabels: TransferListLabels = {
    available: 'Available',
    selected: 'Selected',
    moveRight: 'Move checked items to the selected list',
    moveLeft: 'Move checked items back',
    moveAllRight: 'Move all items to the selected list',
    moveAllLeft: 'Move all items back',
    search: 'Search',
    empty: 'No items',
    count: (checked, total) => `${checked} of ${total} checked`,
}

export interface TransferListProps {
    /** Texts of the component. Pass only the ones you want to change, for example to translate it. */
    labels?: Partial<TransferListLabels>
    /** Every item, in both lists. */
    items: TransferItem[]
    /** Controlled ids of the chosen items. Use together with `onChange`. */
    value?: string[]
    /** Ids of the chosen items when the component is not controlled. */
    defaultValue?: string[]
    onChange?: (value: string[]) => void
    /** Show a search field over each list. */
    searchable?: boolean
    /** Accent color of the checks: any CSS color. Without it the component uses `--blossom-accent`. */
    color?: string
    /** Height of each list in pixels. */
    height?: number
    className?: string
}

const arrow = (path: string) => (
    <svg className='h-4 w-4' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'><path strokeLinecap='round' strokeLinejoin='round' d={path} /></svg>
)

const transferButton = 'grid h-9 w-9 place-items-center rounded-xl border border-neutral-300 text-neutral-700 outline-none transition-colors hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-[var(--blossom-accent,#f472b6)] disabled:cursor-not-allowed disabled:opacity-40 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800'

interface ListProps {
    title: string
    items: TransferItem[]
    checked: string[]
    onToggle: (id: string) => void
    onToggleAll: () => void
    searchable: boolean
    labels: TransferListLabels
    height: number
}

const List = ({ title, items, checked, onToggle, onToggleAll, searchable, labels, height }: ListProps) => {
    const id = useId()
    const [query, setQuery] = useState('')
    const [focus, setFocus] = useState(0)
    const visible = useMemo(() => items.filter((item) => item.label.toLowerCase().includes(query.trim().toLowerCase())), [items, query])
    const enabled = visible.filter((item) => !item.disabled)
    const allChecked = enabled.length > 0 && enabled.every((item) => checked.includes(item.id))
    const index = Math.min(focus, Math.max(visible.length - 1, 0))

    const onKeyDown = (event: KeyboardEvent<HTMLUListElement>) => {
        const move = (to: number) => {
            event.preventDefault()
            const next = Math.min(Math.max(to, 0), visible.length - 1)
            setFocus(next)
            event.currentTarget.querySelector<HTMLElement>(`[data-index="${next}"]`)?.focus()
        }
        if (event.key === 'ArrowDown') move(index + 1)
        else if (event.key === 'ArrowUp') move(index - 1)
        else if (event.key === 'Home') move(0)
        else if (event.key === 'End') move(visible.length - 1)
        else if (event.key.toLowerCase() === 'a' && (event.ctrlKey || event.metaKey)) {
            event.preventDefault()
            onToggleAll()
        }
    }

    return (
        <div className='flex min-w-0 flex-1 flex-col rounded-xl border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-900'>
            <div className='flex items-center gap-3 border-b border-neutral-200 p-3 dark:border-neutral-700'>
                <input
                    type='checkbox'
                    checked={allChecked}
                    disabled={enabled.length === 0}
                    onChange={onToggleAll}
                    aria-label={title}
                    className='h-4 w-4 shrink-0 cursor-pointer rounded accent-[var(--blossom-accent,#f472b6)] disabled:cursor-not-allowed'
                />
                <div className='flex min-w-0 flex-col'>
                    <span id={`${id}-title`} className='truncate text-sm font-medium text-neutral-900 dark:text-white'>{title}</span>
                    <span className='text-xs text-neutral-500'>{labels.count(checked.filter((entry) => items.some((item) => item.id === entry)).length, items.length)}</span>
                </div>
            </div>
            {searchable && (
                <div className='border-b border-neutral-200 p-2 dark:border-neutral-700'>
                    <input
                        type='search'
                        value={query}
                        placeholder={labels.search}
                        aria-label={`${labels.search}: ${title}`}
                        onChange={(event) => setQuery(event.target.value)}
                        className='w-full rounded-lg border border-neutral-300 bg-transparent px-3 py-1.5 text-sm text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-[var(--blossom-accent,#f472b6)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--blossom-accent,#f472b6)_30%,transparent)] dark:border-neutral-700 dark:text-white'
                    />
                </div>
            )}
            <ul role='listbox' aria-multiselectable='true' aria-labelledby={`${id}-title`} onKeyDown={onKeyDown} style={{ height }} className='thin-scroll overflow-y-auto p-1'>
                {visible.length === 0 && <li className='px-3 py-6 text-center text-sm text-neutral-500'>{labels.empty}</li>}
                {visible.map((item, position) => {
                    const isChecked = checked.includes(item.id)
                    return (
                        <li
                            key={item.id}
                            role='option'
                            data-index={position}
                            aria-selected={isChecked}
                            aria-disabled={item.disabled}
                            tabIndex={position === index ? 0 : -1}
                            onFocus={() => setFocus(position)}
                            onClick={() => !item.disabled && onToggle(item.id)}
                            onKeyDown={(event) => {
                                if (event.key === ' ' || event.key === 'Enter') {
                                    event.preventDefault()
                                    if (!item.disabled) onToggle(item.id)
                                }
                            }}
                            className={`flex cursor-pointer select-none items-center gap-3 rounded-lg px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[var(--blossom-accent,#f472b6)] ${item.disabled ? 'cursor-not-allowed opacity-40' : 'hover:bg-neutral-100 dark:hover:bg-neutral-800'} ${isChecked ? 'bg-[color-mix(in_srgb,var(--blossom-accent,#f472b6)_12%,transparent)]' : ''}`}
                        >
                            <input type='checkbox' tabIndex={-1} aria-hidden='true' readOnly checked={isChecked} disabled={item.disabled} className='pointer-events-none h-4 w-4 shrink-0 rounded accent-[var(--blossom-accent,#f472b6)]' />
                            <span className='truncate text-neutral-800 dark:text-neutral-200'>{item.label}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

/** Two lists to move items between, for example to choose which permissions or columns a role has. */
export const TransferList = ({ labels, items, value, defaultValue = [], onChange, searchable = false, color, height = 224, className = '' }: TransferListProps) => {
    const text = { ...defaultLabels, ...labels }
    const [internal, setInternal] = useState(defaultValue)
    const chosen = value ?? internal
    // What the user has checked in each list, before moving it.
    const [checkedLeft, setCheckedLeft] = useState<string[]>([])
    const [checkedRight, setCheckedRight] = useState<string[]>([])

    const right = items.filter((item) => chosen.includes(item.id))
    const left = items.filter((item) => !chosen.includes(item.id))

    const update = (next: string[]) => {
        if (value === undefined) setInternal(next)
        onChange?.(next)
    }

    const toggle = (setList: typeof setCheckedLeft) => (itemId: string) =>
        setList((list) => (list.includes(itemId) ? list.filter((entry) => entry !== itemId) : [...list, itemId]))

    const toggleAll = (list: TransferItem[], checked: string[], setList: typeof setCheckedLeft) => () => {
        const ids = list.filter((item) => !item.disabled).map((item) => item.id)
        setList(ids.every((entry) => checked.includes(entry)) ? checked.filter((entry) => !ids.includes(entry)) : [...new Set([...checked, ...ids])])
    }

    const moveRight = (ids: string[]) => {
        update([...chosen, ...ids.filter((entry) => !chosen.includes(entry))])
        setCheckedLeft([])
    }
    const moveLeft = (ids: string[]) => {
        update(chosen.filter((entry) => !ids.includes(entry)))
        setCheckedRight([])
    }

    const movableLeft = left.filter((item) => !item.disabled).map((item) => item.id)
    const movableRight = right.filter((item) => !item.disabled).map((item) => item.id)
    const pickedLeft = checkedLeft.filter((entry) => movableLeft.includes(entry))
    const pickedRight = checkedRight.filter((entry) => movableRight.includes(entry))

    return (
        <div style={accentStyle(color)} className={`flex w-full items-stretch gap-3 md:flex-col ${className}`}>
            <List title={text.available} items={left} checked={checkedLeft} onToggle={toggle(setCheckedLeft)} onToggleAll={toggleAll(left, checkedLeft, setCheckedLeft)} searchable={searchable} labels={text} height={height} />
            <div className='flex shrink-0 flex-col items-center justify-center gap-2 md:flex-row'>
                <button type='button' aria-label={text.moveAllRight} disabled={movableLeft.length === 0} onClick={() => moveRight(movableLeft)} className={transferButton}>
                    <span className='md:rotate-90'>{arrow('m6 17 5-5-5-5m7 10 5-5-5-5')}</span>
                </button>
                <button type='button' aria-label={text.moveRight} disabled={pickedLeft.length === 0} onClick={() => moveRight(pickedLeft)} className={transferButton}>
                    <span className='md:rotate-90'>{arrow('m9 6 6 6-6 6')}</span>
                </button>
                <button type='button' aria-label={text.moveLeft} disabled={pickedRight.length === 0} onClick={() => moveLeft(pickedRight)} className={transferButton}>
                    <span className='md:rotate-90'>{arrow('m15 6-6 6 6 6')}</span>
                </button>
                <button type='button' aria-label={text.moveAllLeft} disabled={movableRight.length === 0} onClick={() => moveLeft(movableRight)} className={transferButton}>
                    <span className='md:rotate-90'>{arrow('m18 17-5-5 5-5m-7 10-5-5 5-5')}</span>
                </button>
            </div>
            <List title={text.selected} items={right} checked={checkedRight} onToggle={toggle(setCheckedRight)} onToggleAll={toggleAll(right, checkedRight, setCheckedRight)} searchable={searchable} labels={text} height={height} />
        </div>
    )
}
