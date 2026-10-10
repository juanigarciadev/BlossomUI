import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState, type KeyboardEvent } from 'react'
import { createPortal } from 'react-dom'

export interface DatePickerProps {
    value?: Date | null
    defaultValue?: Date | null
    onChange?: (date: Date) => void
    label?: string
    placeholder?: string
    /** Dates before this one cannot be chosen. */
    min?: Date
    /** Dates after this one cannot be chosen. */
    max?: Date
    /** Locale used for the month names and the displayed date. */
    locale?: string
    disabled?: boolean
}

const startOfDay = (date: Date) => new Date(date.getFullYear(), date.getMonth(), date.getDate())
const sameDay = (a: Date, b: Date) => a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
const addDays = (date: Date, days: number) => new Date(date.getFullYear(), date.getMonth(), date.getDate() + days)

export const DatePicker = ({ value, defaultValue = null, onChange, label, placeholder = 'Select a date', min, max, locale = 'en-US', disabled = false }: DatePickerProps) => {
    const id = useId()
    const trigger = useRef<HTMLButtonElement>(null)
    const panel = useRef<HTMLDivElement>(null)
    const [internal, setInternal] = useState<Date | null>(defaultValue)
    const selected = value === undefined ? internal : value
    const [open, setOpen] = useState(false)
    const [focused, setFocused] = useState<Date>(() => startOfDay(selected ?? new Date()))
    const [box, setBox] = useState<{ top: number; left: number } | null>(null)

    const close = useCallback((restoreFocus = true) => {
        setOpen(false)
        if (restoreFocus) trigger.current?.focus()
    }, [])

    const isDisabled = (date: Date) => (min !== undefined && date < startOfDay(min)) || (max !== undefined && date > startOfDay(max))

    useLayoutEffect(() => {
        if (!open || !trigger.current || !panel.current) return
        const rect = trigger.current.getBoundingClientRect()
        const { offsetWidth, offsetHeight } = panel.current
        const below = rect.bottom + 6
        const top = below + offsetHeight > window.innerHeight ? Math.max(8, rect.top - offsetHeight - 6) : below
        setBox({ top, left: Math.min(Math.max(8, rect.left), window.innerWidth - offsetWidth - 8) })
    }, [open])

    useEffect(() => {
        if (!open) {
            setBox(null)
            return
        }
        const onPointer = (event: MouseEvent) => {
            const target = event.target as Node
            if (!panel.current?.contains(target) && !trigger.current?.contains(target)) close(false)
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

    // Move the keyboard focus to the highlighted day.
    useEffect(() => {
        if (open && box) panel.current?.querySelector<HTMLButtonElement>('button[data-focused="true"]')?.focus()
    }, [open, box, focused])

    const openCalendar = () => {
        if (disabled) return
        setFocused(startOfDay(selected ?? new Date()))
        setOpen(true)
    }

    const choose = (date: Date) => {
        if (isDisabled(date)) return
        if (value === undefined) setInternal(date)
        onChange?.(date)
        close()
    }

    const monthStart = new Date(focused.getFullYear(), focused.getMonth(), 1)
    const offset = monthStart.getDay()
    const days = new Date(focused.getFullYear(), focused.getMonth() + 1, 0).getDate()
    const cells: (Date | null)[] = [
        ...Array.from({ length: offset }, () => null),
        ...Array.from({ length: days }, (_, day) => new Date(focused.getFullYear(), focused.getMonth(), day + 1)),
    ]

    const weekdays = Array.from({ length: 7 }, (_, day) =>
        new Intl.DateTimeFormat(locale, { weekday: 'short' }).format(new Date(2023, 0, 1 + day))
    )

    const move = (days: number) => setFocused((current) => addDays(current, days))
    const moveMonth = (step: number) =>
        setFocused((current) => {
            const target = new Date(current.getFullYear(), current.getMonth() + step, 1)
            const last = new Date(target.getFullYear(), target.getMonth() + 1, 0).getDate()
            return new Date(target.getFullYear(), target.getMonth(), Math.min(current.getDate(), last))
        })

    const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        const keys: Record<string, () => void> = {
            ArrowLeft: () => move(-1),
            ArrowRight: () => move(1),
            ArrowUp: () => move(-7),
            ArrowDown: () => move(7),
            PageUp: () => moveMonth(-1),
            PageDown: () => moveMonth(1),
            Home: () => move(-focused.getDay()),
            End: () => move(6 - focused.getDay()),
        }
        if (event.key === 'Escape') {
            event.preventDefault()
            close()
        } else if (keys[event.key]) {
            event.preventDefault()
            keys[event.key]()
        }
    }

    const today = startOfDay(new Date())
    const title = new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' }).format(monthStart)
    const navButton = 'grid h-8 w-8 place-items-center rounded-lg text-neutral-600 outline-none hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-pink-400 dark:text-neutral-300 dark:hover:bg-neutral-800'

    return (
        <div className='flex w-full flex-col gap-1'>
            {label && <label htmlFor={id} className='text-sm font-medium text-neutral-800 dark:text-white'>{label}</label>}
            <button
                ref={trigger}
                id={id}
                type='button'
                disabled={disabled}
                aria-haspopup='dialog'
                aria-expanded={open}
                onClick={() => (open ? close(false) : openCalendar())}
                className={`flex w-full items-center justify-between gap-2 rounded-xl border border-neutral-300 bg-transparent px-3 py-2.5 text-left text-sm outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-400/30 disabled:cursor-not-allowed disabled:opacity-60 dark:border-neutral-700 ${open ? 'ring-2 ring-pink-400/30' : ''}`}
            >
                <span className={selected ? 'text-neutral-900 dark:text-white' : 'text-neutral-400'}>
                    {selected ? new Intl.DateTimeFormat(locale, { dateStyle: 'long' }).format(selected) : placeholder}
                </span>
                <svg className='h-4 w-4 shrink-0 text-neutral-500' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M8 3v3m8-3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z' />
                </svg>
            </button>
            {open && createPortal(
                <div
                    ref={panel}
                    role='dialog'
                    aria-label='Choose a date'
                    onKeyDown={onKeyDown}
                    style={{ position: 'fixed', top: box?.top ?? 0, left: box?.left ?? 0, visibility: box ? 'visible' : 'hidden' }}
                    className='z-[80] w-72 rounded-xl border border-neutral-200 bg-white p-3 shadow-lg dark:border-neutral-700 dark:bg-neutral-900'
                >
                    <div className='flex items-center justify-between pb-2'>
                        <button type='button' aria-label='Previous month' onClick={() => moveMonth(-1)} className={navButton}>
                            <svg className='h-4 w-4' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'><path strokeLinecap='round' strokeLinejoin='round' d='m15 6-6 6 6 6' /></svg>
                        </button>
                        <span aria-live='polite' className='text-sm font-medium capitalize text-neutral-900 dark:text-white'>{title}</span>
                        <button type='button' aria-label='Next month' onClick={() => moveMonth(1)} className={navButton}>
                            <svg className='h-4 w-4' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'><path strokeLinecap='round' strokeLinejoin='round' d='m9 6 6 6-6 6' /></svg>
                        </button>
                    </div>
                    <div role='grid' aria-label={title} className='grid grid-cols-7 gap-y-1 text-center text-sm'>
                        {weekdays.map((day) => (
                            <span key={day} role='columnheader' className='pb-1 text-xs font-medium capitalize text-neutral-400'>{day.slice(0, 2)}</span>
                        ))}
                        {cells.map((date, position) => {
                            if (!date) return <span key={`empty-${position}`} />
                            const isSelected = selected ? sameDay(date, selected) : false
                            const isFocused = sameDay(date, focused)
                            const off = isDisabled(date)
                            return (
                                <button
                                    key={date.toISOString()}
                                    type='button'
                                    role='gridcell'
                                    data-focused={isFocused}
                                    tabIndex={isFocused ? 0 : -1}
                                    aria-selected={isSelected}
                                    aria-current={sameDay(date, today) ? 'date' : undefined}
                                    disabled={off}
                                    onClick={() => choose(date)}
                                    className={`mx-auto grid h-9 w-9 place-items-center rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-pink-400 disabled:cursor-not-allowed disabled:opacity-30 ${isSelected ? 'bg-pink-400 font-medium text-white' : sameDay(date, today) ? 'border border-pink-400 text-neutral-900 dark:text-white' : 'text-neutral-800 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800'}`}
                                >
                                    {date.getDate()}
                                </button>
                            )
                        })}
                    </div>
                </div>,
                document.body
            )}
        </div>
    )
}

export interface DateRange {
    start: Date | null
    end: Date | null
}

export interface DateRangePickerProps {
    value?: DateRange
    defaultValue?: DateRange
    /** Called once both days are chosen. */
    onChange?: (range: { start: Date; end: Date }) => void
    label?: string
    placeholder?: string
    /** Dates before this one cannot be chosen. */
    min?: Date
    /** Dates after this one cannot be chosen. */
    max?: Date
    /** Locale used for the month names and the displayed dates. */
    locale?: string
    disabled?: boolean
}

const emptyRange: DateRange = { start: null, end: null }


/** Pick two days: every day between them is highlighted. */
export const DateRangePicker = ({ value, defaultValue = emptyRange, onChange, label, placeholder = 'Select a range', min, max, locale = 'en-US', disabled = false }: DateRangePickerProps) => {
    const id = useId()
    const trigger = useRef<HTMLButtonElement>(null)
    const panel = useRef<HTMLDivElement>(null)
    const [internal, setInternal] = useState<DateRange>(defaultValue)
    const range = value ?? internal
    const [draft, setDraft] = useState<DateRange>(range)
    const [hover, setHover] = useState<Date | null>(null)
    const [open, setOpen] = useState(false)
    const [focused, setFocused] = useState<Date>(() => startOfDay(range.start ?? new Date()))
    const [box, setBox] = useState<{ top: number; left: number } | null>(null)

    const close = useCallback((restoreFocus = true) => {
        setOpen(false)
        if (restoreFocus) trigger.current?.focus()
    }, [])

    const isDisabled = (date: Date) => (min !== undefined && date < startOfDay(min)) || (max !== undefined && date > startOfDay(max))

    useLayoutEffect(() => {
        if (!open || !trigger.current || !panel.current) return
        const rect = trigger.current.getBoundingClientRect()
        const { offsetWidth, offsetHeight } = panel.current
        const below = rect.bottom + 6
        const top = below + offsetHeight > window.innerHeight ? Math.max(8, rect.top - offsetHeight - 6) : below
        setBox({ top, left: Math.min(Math.max(8, rect.left), window.innerWidth - offsetWidth - 8) })
    }, [open])

    useEffect(() => {
        if (!open) {
            setBox(null)
            return
        }
        const onPointer = (event: MouseEvent) => {
            const target = event.target as Node
            if (!panel.current?.contains(target) && !trigger.current?.contains(target)) close(false)
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

    // Move the keyboard focus to the highlighted day.
    useEffect(() => {
        if (open && box) panel.current?.querySelector<HTMLButtonElement>('button[data-focused="true"]')?.focus()
    }, [open, box, focused])

    const openCalendar = () => {
        if (disabled) return
        setDraft(range)
        setHover(null)
        setFocused(startOfDay(range.start ?? new Date()))
        setOpen(true)
    }

    const choose = (date: Date) => {
        if (isDisabled(date)) return
        // First click (or a new range): start again. Second click: finish the range.
        if (!draft.start || draft.end) {
            setDraft({ start: date, end: null })
            return
        }
        const [start, end] = date < draft.start ? [date, draft.start] : [draft.start, date]
        setDraft({ start, end })
        if (value === undefined) setInternal({ start, end })
        onChange?.({ start, end })
        close()
    }

    // While the second day is not chosen, the day under the pointer previews the range.
    const preview: DateRange =
        draft.start && !draft.end && hover
            ? hover < draft.start ? { start: hover, end: draft.start } : { start: draft.start, end: hover }
            : draft
    const hasRange = Boolean(preview.start && preview.end && !sameDay(preview.start, preview.end))

    const monthStart = new Date(focused.getFullYear(), focused.getMonth(), 1)
    const offset = monthStart.getDay()
    const days = new Date(focused.getFullYear(), focused.getMonth() + 1, 0).getDate()
    const cells: (Date | null)[] = [
        ...Array.from({ length: offset }, () => null),
        ...Array.from({ length: days }, (_, day) => new Date(focused.getFullYear(), focused.getMonth(), day + 1)),
    ]

    const weekdays = Array.from({ length: 7 }, (_, day) =>
        new Intl.DateTimeFormat(locale, { weekday: 'short' }).format(new Date(2023, 0, 1 + day))
    )

    const move = (amount: number) => setFocused((current) => addDays(current, amount))
    const moveMonth = (step: number) =>
        setFocused((current) => {
            const target = new Date(current.getFullYear(), current.getMonth() + step, 1)
            const last = new Date(target.getFullYear(), target.getMonth() + 1, 0).getDate()
            return new Date(target.getFullYear(), target.getMonth(), Math.min(current.getDate(), last))
        })

    const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        const keys: Record<string, () => void> = {
            ArrowLeft: () => move(-1),
            ArrowRight: () => move(1),
            ArrowUp: () => move(-7),
            ArrowDown: () => move(7),
            PageUp: () => moveMonth(-1),
            PageDown: () => moveMonth(1),
            Home: () => move(-focused.getDay()),
            End: () => move(6 - focused.getDay()),
        }
        if (event.key === 'Escape') {
            event.preventDefault()
            close()
        } else if (keys[event.key]) {
            event.preventDefault()
            keys[event.key]()
            setHover(null)
        }
    }

    const format = (date: Date) => new Intl.DateTimeFormat(locale, { dateStyle: 'medium' }).format(date)
    const today = startOfDay(new Date())
    const title = new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' }).format(monthStart)
    const navButton = 'grid h-8 w-8 place-items-center rounded-lg text-neutral-600 outline-none hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-pink-400 dark:text-neutral-300 dark:hover:bg-neutral-800'

    return (
        <div className='flex w-full flex-col gap-1'>
            {label && <label htmlFor={id} className='text-sm font-medium text-neutral-800 dark:text-white'>{label}</label>}
            <button
                ref={trigger}
                id={id}
                type='button'
                disabled={disabled}
                aria-haspopup='dialog'
                aria-expanded={open}
                onClick={() => (open ? close(false) : openCalendar())}
                className={`flex w-full items-center justify-between gap-2 rounded-xl border border-neutral-300 bg-transparent px-3 py-2.5 text-left text-sm outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-400/30 disabled:cursor-not-allowed disabled:opacity-60 dark:border-neutral-700 ${open ? 'ring-2 ring-pink-400/30' : ''}`}
            >
                <span className={range.start && range.end ? 'text-neutral-900 dark:text-white' : 'text-neutral-400'}>
                    {range.start && range.end ? `${format(range.start)} – ${format(range.end)}` : placeholder}
                </span>
                <svg className='h-4 w-4 shrink-0 text-neutral-500' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M8 3v3m8-3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z' />
                </svg>
            </button>
            {open && createPortal(
                <div
                    ref={panel}
                    role='dialog'
                    aria-label='Choose a date range'
                    onKeyDown={onKeyDown}
                    onMouseLeave={() => setHover(null)}
                    style={{ position: 'fixed', top: box?.top ?? 0, left: box?.left ?? 0, visibility: box ? 'visible' : 'hidden' }}
                    className='z-[80] w-72 rounded-xl border border-neutral-200 bg-white p-3 shadow-lg dark:border-neutral-700 dark:bg-neutral-900'
                >
                    <div className='flex items-center justify-between pb-2'>
                        <button type='button' aria-label='Previous month' onClick={() => moveMonth(-1)} className={navButton}>
                            <svg className='h-4 w-4' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'><path strokeLinecap='round' strokeLinejoin='round' d='m15 6-6 6 6 6' /></svg>
                        </button>
                        <span aria-live='polite' className='text-sm font-medium capitalize text-neutral-900 dark:text-white'>{title}</span>
                        <button type='button' aria-label='Next month' onClick={() => moveMonth(1)} className={navButton}>
                            <svg className='h-4 w-4' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'><path strokeLinecap='round' strokeLinejoin='round' d='m9 6 6 6-6 6' /></svg>
                        </button>
                    </div>
                    <div role='grid' aria-label={title} className='grid grid-cols-7 text-center text-sm'>
                        {weekdays.map((day) => (
                            <span key={day} role='columnheader' className='pb-1 text-xs font-medium capitalize text-neutral-400'>{day.slice(0, 2)}</span>
                        ))}
                        {cells.map((date, position) => {
                            if (!date) return <span key={`empty-${position}`} />
                            const isStart = preview.start ? sameDay(date, preview.start) : false
                            const isEnd = preview.end ? sameDay(date, preview.end) : false
                            const between = Boolean(preview.start && preview.end && date > preview.start && date < preview.end)
                            const isFocused = sameDay(date, focused)
                            const band = 'bg-pink-100 dark:bg-pink-950'
                            return (
                                <div
                                    key={date.toISOString()}
                                    className={`py-0.5 ${between ? band : ''} ${hasRange && isStart ? `rounded-l-xl ${band}` : ''} ${hasRange && isEnd ? `rounded-r-xl ${band}` : ''}`}
                                >
                                    <button
                                        type='button'
                                        role='gridcell'
                                        data-focused={isFocused}
                                        tabIndex={isFocused ? 0 : -1}
                                        aria-selected={isStart || isEnd || between}
                                        aria-current={sameDay(date, today) ? 'date' : undefined}
                                        disabled={isDisabled(date)}
                                        onClick={() => choose(date)}
                                        onPointerEnter={() => setHover(date)}
                                        className={`mx-auto grid h-9 w-9 place-items-center rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-pink-400 disabled:cursor-not-allowed disabled:opacity-30 ${isStart || isEnd ? 'bg-pink-400 font-medium text-white' : between ? 'text-pink-900 dark:text-pink-100' : sameDay(date, today) ? 'border border-pink-400 text-neutral-900 dark:text-white' : 'text-neutral-800 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800'}`}
                                    >
                                        {date.getDate()}
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                    <p className='pt-2 text-center text-xs text-neutral-500'>
                        {!draft.start || draft.end ? 'Choose the first day' : 'Choose the last day'}
                    </p>
                </div>,
                document.body
            )}
        </div>
    )
}
