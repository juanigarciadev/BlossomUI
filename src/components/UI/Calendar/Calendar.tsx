import { useEffect, useRef, useState, type KeyboardEvent } from 'react'
import { accentStyle } from '../accent'

export interface CalendarLabels {
    previousMonth: string
    nextMonth: string
}

const defaultLabels: CalendarLabels = { previousMonth: 'Previous month', nextMonth: 'Next month' }

export interface DateRange {
    start: Date | null
    end: Date | null
}

interface CalendarBase {
    /** Texts of the component. Pass only the ones you want to change, for example to translate it. */
    labels?: Partial<CalendarLabels>
    /** Accent color of this component: any CSS color. Without it the component uses `--blossom-accent`, which is pink by default. */
    color?: string
    /** Dates before this one cannot be chosen. */
    min?: Date
    /** Dates after this one cannot be chosen. */
    max?: Date
    /** Return `true` for the dates that cannot be chosen, for example weekends or days without availability. */
    isDisabled?: (date: Date) => boolean
    /** Locale used for the month and the weekday names. */
    locale?: string
    /** First day of the week: 0 is Sunday, 1 is Monday. */
    weekStartsOn?: 0 | 1
    /** Month that is shown first when there is no value. Today by default. */
    defaultMonth?: Date
    className?: string
}

export interface CalendarSingleProps extends CalendarBase {
    /** `single` chooses one day, `range` chooses a first and a last day. */
    mode?: 'single'
    value?: Date | null
    defaultValue?: Date | null
    onChange?: (date: Date) => void
}

export interface CalendarRangeProps extends CalendarBase {
    mode: 'range'
    value?: DateRange
    defaultValue?: DateRange
    /** Called once both days are chosen. */
    onChange?: (range: { start: Date; end: Date }) => void
}

export type CalendarProps = CalendarSingleProps | CalendarRangeProps

const startOfDay = (date: Date) => new Date(date.getFullYear(), date.getMonth(), date.getDate())
const sameDay = (a: Date, b: Date) => a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
const addDays = (date: Date, days: number) => new Date(date.getFullYear(), date.getMonth(), date.getDate() + days)

const emptyRange: DateRange = { start: null, end: null }

/** A month grid that is always visible. It is the calendar of the date pickers, ready to place in a page or a card. */
export const Calendar = (props: CalendarProps) => {
    const { labels, color, min, max, isDisabled, locale = 'en-US', weekStartsOn = 0, defaultMonth, className = '' } = props
    const text = { ...defaultLabels, ...labels }
    const root = useRef<HTMLDivElement>(null)
    const range = props.mode === 'range'

    const [internal, setInternal] = useState<Date | null | DateRange>(props.defaultValue ?? (range ? emptyRange : null))
    const chosen = props.value === undefined ? internal : props.value
    const single = !range ? ((chosen as Date | null) ?? null) : null
    const picked = range ? ((chosen as DateRange | null) ?? emptyRange) : emptyRange
    const [hover, setHover] = useState<Date | null>(null)

    const [focused, setFocused] = useState<Date>(() => startOfDay(single ?? picked.start ?? defaultMonth ?? new Date()))

    const off = (date: Date) => (min !== undefined && date < startOfDay(min)) || (max !== undefined && date > startOfDay(max)) || Boolean(isDisabled?.(date))

    // Keep the keyboard focus on the highlighted day, but only when the user is already inside the calendar.
    useEffect(() => {
        const element = root.current
        if (element?.contains(document.activeElement)) element.querySelector<HTMLButtonElement>('button[data-focused="true"]')?.focus()
    }, [focused])

    const choose = (date: Date) => {
        if (off(date)) return
        setFocused(date)
        if (!range) {
            if (props.value === undefined) setInternal(date)
            ;(props as CalendarSingleProps).onChange?.(date)
            return
        }
        // A first click starts the range, the second one closes it. A second click before the first day swaps them.
        if (!picked.start || picked.end) {
            if (props.value === undefined) setInternal({ start: date, end: null })
            return
        }
        const [start, end] = date < picked.start ? [date, picked.start] : [picked.start, date]
        if (props.value === undefined) setInternal({ start, end })
        ;(props as CalendarRangeProps).onChange?.({ start, end })
    }

    const monthStart = new Date(focused.getFullYear(), focused.getMonth(), 1)
    const offset = (monthStart.getDay() - weekStartsOn + 7) % 7
    const days = new Date(focused.getFullYear(), focused.getMonth() + 1, 0).getDate()
    const cells: (Date | null)[] = [
        ...Array.from({ length: offset }, () => null),
        ...Array.from({ length: days }, (_, day) => new Date(focused.getFullYear(), focused.getMonth(), day + 1)),
    ]
    const weekdays = Array.from({ length: 7 }, (_, day) =>
        new Intl.DateTimeFormat(locale, { weekday: 'short' }).format(new Date(2023, 0, 1 + ((day + weekStartsOn) % 7)))
    )

    const move = (step: number) => setFocused((current) => addDays(current, step))
    const moveMonth = (step: number) =>
        setFocused((current) => {
            const target = new Date(current.getFullYear(), current.getMonth() + step, 1)
            const last = new Date(target.getFullYear(), target.getMonth() + 1, 0).getDate()
            return new Date(target.getFullYear(), target.getMonth(), Math.min(current.getDate(), last))
        })

    const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        const column = (focused.getDay() - weekStartsOn + 7) % 7
        const keys: Record<string, () => void> = {
            ArrowLeft: () => move(-1),
            ArrowRight: () => move(1),
            ArrowUp: () => move(-7),
            ArrowDown: () => move(7),
            PageUp: () => moveMonth(-1),
            PageDown: () => moveMonth(1),
            Home: () => move(-column),
            End: () => move(6 - column),
        }
        if (keys[event.key]) {
            event.preventDefault()
            keys[event.key]()
        }
    }

    const today = startOfDay(new Date())
    const title = new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' }).format(monthStart)
    const navButton = 'grid h-8 w-8 place-items-center rounded-lg text-neutral-600 outline-none hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-[var(--blossom-accent,#f472b6)] dark:text-neutral-300 dark:hover:bg-neutral-800'

    // While the second day is pending, the range follows the pointer or the keyboard focus.
    const end = picked.end ?? (picked.start ? (hover ?? focused) : null)
    const [from, to] = picked.start && end ? (end < picked.start ? [end, picked.start] : [picked.start, end]) : [null, null]

    return (
        <div ref={root} style={accentStyle(color)} className={`w-72 max-w-full rounded-xl border border-neutral-200 bg-white p-3 dark:border-neutral-700 dark:bg-neutral-900 ${className}`}>
            <div className='flex items-center justify-between pb-2'>
                <button type='button' aria-label={text.previousMonth} onClick={() => moveMonth(-1)} className={navButton}>
                    <svg className='h-4 w-4' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'><path strokeLinecap='round' strokeLinejoin='round' d='m15 6-6 6 6 6' /></svg>
                </button>
                <span aria-live='polite' className='text-sm font-medium capitalize text-neutral-900 dark:text-white'>{title}</span>
                <button type='button' aria-label={text.nextMonth} onClick={() => moveMonth(1)} className={navButton}>
                    <svg className='h-4 w-4' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'><path strokeLinecap='round' strokeLinejoin='round' d='m9 6 6 6-6 6' /></svg>
                </button>
            </div>
            <div role='grid' aria-label={title} onKeyDown={onKeyDown} onMouseLeave={() => setHover(null)} className='grid grid-cols-7 gap-y-1 text-center text-sm'>
                {weekdays.map((day) => (
                    <span key={day} role='columnheader' className='pb-1 text-xs font-medium capitalize text-neutral-400'>{day.slice(0, 2)}</span>
                ))}
                {cells.map((date, position) => {
                    if (!date) return <span key={`empty-${position}`} />
                    const isEdge = range ? Boolean((picked.start && sameDay(date, picked.start)) || (picked.end && sameDay(date, picked.end))) : Boolean(single && sameDay(date, single))
                    const inside = Boolean(from && to && date > from && date < to)
                    const isFocused = sameDay(date, focused)
                    const isToday = sameDay(date, today)
                    const disabled = off(date)
                    return (
                        <span key={date.toISOString()} className={`flex justify-center ${inside ? 'bg-[color-mix(in_srgb,var(--blossom-accent,#f472b6)_18%,transparent)]' : ''} ${range && from && to && sameDay(date, from) && !sameDay(from, to) ? 'rounded-l-xl bg-[color-mix(in_srgb,var(--blossom-accent,#f472b6)_18%,transparent)]' : ''} ${range && from && to && sameDay(date, to) && !sameDay(from, to) ? 'rounded-r-xl bg-[color-mix(in_srgb,var(--blossom-accent,#f472b6)_18%,transparent)]' : ''}`}>
                            <button
                                type='button'
                                role='gridcell'
                                data-focused={isFocused}
                                tabIndex={isFocused ? 0 : -1}
                                aria-selected={isEdge || inside}
                                aria-current={isToday ? 'date' : undefined}
                                disabled={disabled}
                                onClick={() => choose(date)}
                                onMouseEnter={() => range && picked.start && !picked.end && setHover(date)}
                                className={`grid h-9 w-9 place-items-center rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-[var(--blossom-accent,#f472b6)] disabled:cursor-not-allowed disabled:opacity-30 ${isEdge ? 'bg-[var(--blossom-accent,#f472b6)] font-medium text-[var(--blossom-accent-contrast,#fff)]' : isToday ? 'border border-[var(--blossom-accent,#f472b6)] text-neutral-900 dark:text-white' : inside ? 'text-neutral-900 dark:text-white' : 'text-neutral-800 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800'}`}
                            >
                                {date.getDate()}
                            </button>
                        </span>
                    )
                })}
            </div>
        </div>
    )
}
