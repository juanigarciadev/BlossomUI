import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState, type KeyboardEvent } from 'react'
import { createPortal } from 'react-dom'
import { accentStyle } from '../accent'

export interface TimePickerLabels {
    /** Accessible name of the panel. */
    choose: string
    hours: string
    minutes: string
    period: string
    /** Button that closes the panel. */
    done: string
}

const defaultLabels: TimePickerLabels = { choose: 'Choose a time', hours: 'Hours', minutes: 'Minutes', period: 'AM or PM', done: 'Done' }

export interface TimePickerProps {
    /** Texts of the component. Pass only the ones you want to change, for example to translate it. */
    labels?: Partial<TimePickerLabels>
    /** Marks the field as required: an asterisk is shown next to the label. */
    required?: boolean
    /** Accent color of this component: any CSS color. Without it the component uses `--blossom-accent`, which is pink by default. */
    color?: string
    label?: string
    /** Helper text shown under the field. */
    hint?: string
    /** Error message. It is shown in red under the field and marks it as invalid. */
    error?: string
    /** Controlled time as "HH:mm" in 24 hours, for example "14:30". Use together with `onChange`. */
    value?: string
    /** Initial time when the field is not controlled. */
    defaultValue?: string
    /** Called with the time as "HH:mm" in 24 hours, whatever `hour12` is. */
    onChange?: (time: string) => void
    /** Show the hours from 1 to 12 with AM and PM. */
    hour12?: boolean
    /** Gap between the minutes in the list. */
    minuteStep?: number
    /** Earliest time that can be chosen, as "HH:mm". */
    min?: string
    /** Latest time that can be chosen, as "HH:mm". */
    max?: string
    placeholder?: string
    /** Adds a hidden input with this name so the time is sent with native forms. */
    name?: string
    disabled?: boolean
}

const pad = (number: number) => String(number).padStart(2, '0')

const parse = (time?: string) => {
    const match = /^(\d{1,2}):(\d{2})$/.exec(time ?? '')
    if (!match) return null
    const hours = Number(match[1])
    const minutes = Number(match[2])
    return hours < 24 && minutes < 60 ? { hours, minutes } : null
}

const toMinutes = (time?: string) => {
    const parsed = parse(time)
    return parsed ? parsed.hours * 60 + parsed.minutes : null
}

type Column = 'hours' | 'minutes' | 'period'

/** A field that opens a list of hours and minutes. It works with 24 or 12 hours. */
export const TimePicker = ({ labels, required, color, label, hint, error, value, defaultValue, onChange, hour12 = false, minuteStep = 5, min, max, placeholder = 'Select a time', name, disabled = false }: TimePickerProps) => {
    const id = useId()
    const text = { ...defaultLabels, ...labels }
    const trigger = useRef<HTMLButtonElement>(null)
    const panel = useRef<HTMLDivElement>(null)
    const [internal, setInternal] = useState(defaultValue ?? '')
    const current = value ?? internal
    const time = parse(current)
    const [open, setOpen] = useState(false)
    const [column, setColumn] = useState<Column>('hours')
    const [box, setBox] = useState<{ top: number; left: number } | null>(null)

    const close = useCallback((restoreFocus = true) => {
        setOpen(false)
        if (restoreFocus) trigger.current?.focus()
    }, [])

    const minMinutes = toMinutes(min)
    const maxMinutes = toMinutes(max)
    const outside = (hours: number, minutes: number) => {
        const total = hours * 60 + minutes
        return (minMinutes !== null && total < minMinutes) || (maxMinutes !== null && total > maxMinutes)
    }
    // An hour can be chosen when at least one of its minutes is inside the limits.
    const hourAllowed = (hours: number) => minutesList.some((minutes) => !outside(hours, minutes))

    const minutesList = Array.from({ length: Math.ceil(60 / minuteStep) }, (_, index) => index * minuteStep)
    const hours24 = Array.from({ length: 24 }, (_, hour) => hour)
    const hoursList = hour12 ? Array.from({ length: 12 }, (_, index) => (index === 0 ? 12 : index)) : hours24
    const isPm = time ? time.hours >= 12 : false

    // The hour shown in the list is the 24 hour one converted to the clock the user sees.
    const display = (hours: number) => (hour12 ? hours % 12 || 12 : hours)
    const to24 = (hour: number, pm: boolean) => (hour12 ? (hour % 12) + (pm ? 12 : 0) : hour)

    const commit = (hours: number, minutes: number) => {
        const next = `${pad(hours)}:${pad(minutes)}`
        if (value === undefined) setInternal(next)
        if (next !== current) onChange?.(next)
    }

    /** Closest minute of the list that is inside the limits, so changing the hour never lands outside them. */
    const fit = (hours: number, minutes: number) => {
        if (!outside(hours, minutes)) return minutes
        return minutesList.find((entry) => !outside(hours, entry)) ?? minutes
    }

    const pickHour = (hour: number) => {
        const hours = to24(hour, isPm)
        if (!hourAllowed(hours)) return
        commit(hours, fit(hours, time?.minutes ?? 0))
    }

    const pickMinute = (minutes: number) => {
        const hours = time?.hours ?? (minMinutes !== null ? Math.ceil(minMinutes / 60) : 0)
        if (outside(hours, minutes)) return
        commit(hours, minutes)
    }

    const pickPeriod = (pm: boolean) => {
        const hours = (time?.hours ?? 0) % 12 + (pm ? 12 : 0)
        if (!hourAllowed(hours)) return
        commit(hours, fit(hours, time?.minutes ?? 0))
    }

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
        const dismiss = () => close(false)
        // The lists of the panel scroll on their own: only a scroll of the page closes it.
        const onScroll = (event: Event) => {
            if (!panel.current?.contains(event.target as Node)) close(false)
        }
        // Escape closes the panel first, and the dialog behind it does not see it.
        const onEscape = (event: globalThis.KeyboardEvent) => {
            if (event.key !== 'Escape') return
            event.preventDefault()
            close()
        }
        document.addEventListener('mousedown', onPointer)
        document.addEventListener('keydown', onEscape, true)
        window.addEventListener('resize', dismiss)
        window.addEventListener('scroll', onScroll, true)
        return () => {
            document.removeEventListener('mousedown', onPointer)
            document.removeEventListener('keydown', onEscape, true)
            window.removeEventListener('resize', dismiss)
            window.removeEventListener('scroll', onScroll, true)
        }
    }, [open, close])

    // Focus the chosen option of the column, and scroll the lists to the chosen time.
    useEffect(() => {
        if (!open || !box) return
        panel.current?.querySelectorAll<HTMLElement>('[aria-selected="true"]').forEach((element) => element.scrollIntoView({ block: 'center' }))
        panel.current?.querySelector<HTMLElement>(`[data-column="${column}"][tabindex="0"]`)?.focus({ preventScroll: true })
    }, [open, box, column, current])

    const openPanel = () => {
        if (disabled) return
        setColumn('hours')
        setOpen(true)
    }

    const columns: Column[] = hour12 ? ['hours', 'minutes', 'period'] : ['hours', 'minutes']

    const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        const index = columns.indexOf(column)
        if (event.key === 'ArrowRight') {
            event.preventDefault()
            setColumn(columns[Math.min(columns.length - 1, index + 1)])
        } else if (event.key === 'ArrowLeft') {
            event.preventDefault()
            setColumn(columns[Math.max(0, index - 1)])
        } else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            event.preventDefault()
            const step = event.key === 'ArrowDown' ? 1 : -1
            if (column === 'hours') {
                const shown = time ? display(time.hours) : step === 1 ? hoursList[hoursList.length - 1] : hoursList[0]
                const position = hoursList.indexOf(shown)
                for (let next = position + step; next >= 0 && next < hoursList.length; next += step) {
                    if (hourAllowed(to24(hoursList[next], isPm))) {
                        pickHour(hoursList[next])
                        break
                    }
                }
            } else if (column === 'minutes') {
                const position = time ? minutesList.findIndex((entry) => entry >= time.minutes) : step === 1 ? -1 : minutesList.length
                for (let next = position + step; next >= 0 && next < minutesList.length; next += step) {
                    if (!outside(time?.hours ?? 0, minutesList[next])) {
                        pickMinute(minutesList[next])
                        break
                    }
                }
            } else pickPeriod(step === 1)
        } else if (event.key === 'Enter') {
            event.preventDefault()
            close()
        }
    }

    const shown = time
        ? hour12
            ? `${display(time.hours)}:${pad(time.minutes)} ${isPm ? 'PM' : 'AM'}`
            : `${pad(time.hours)}:${pad(time.minutes)}`
        : placeholder

    const option = (selected: boolean) =>
        `grid h-9 w-full place-items-center rounded-lg text-sm outline-none focus-visible:ring-2 focus-visible:ring-[var(--blossom-accent,#f472b6)] disabled:cursor-not-allowed disabled:opacity-30 ${selected ? 'bg-[var(--blossom-accent,#f472b6)] font-medium text-[var(--blossom-accent-contrast,#fff)]' : 'text-neutral-800 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800'}`

    const list = 'flex max-h-56 w-16 flex-col gap-0.5 overflow-y-auto pr-1'

    return (
        <div className='flex w-full flex-col gap-1' style={accentStyle(color)}>
            {label && <label htmlFor={id} className='text-sm font-medium text-neutral-800 dark:text-white'>{label}{required && <span aria-hidden='true' className='ml-0.5 text-red-600 dark:text-red-400'>*</span>}</label>}
            <button
                ref={trigger}
                id={id}
                type='button'
                disabled={disabled}
                aria-haspopup='dialog'
                aria-expanded={open}
                aria-invalid={Boolean(error)}
                aria-required={required || undefined}
                aria-describedby={error ?? hint ? `${id}-message` : undefined}
                onClick={() => (open ? close(false) : openPanel())}
                className={`flex w-full items-center justify-between gap-2 rounded-xl border bg-transparent px-3 py-2.5 text-left ${error ? 'border-red-500' : 'border-neutral-300'} text-sm outline-none focus:border-[var(--blossom-accent,#f472b6)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--blossom-accent,#f472b6)_30%,transparent)] disabled:cursor-not-allowed disabled:opacity-60 ${error ? '' : 'dark:border-neutral-700'} ${open ? 'ring-2 ring-[color-mix(in_srgb,var(--blossom-accent,#f472b6)_30%,transparent)]' : ''}`}
            >
                <span className={time ? 'text-neutral-900 dark:text-white' : 'text-neutral-400'}>{shown}</span>
                <svg className='h-4 w-4 shrink-0 text-neutral-500' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M12 7v5l3 2m6-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' />
                </svg>
            </button>
            {name && <input type='hidden' name={name} value={time ? current : ''} />}
            {(error ?? hint) && <span id={`${id}-message`} className={`text-xs ${error ? 'text-red-700 dark:text-red-400' : 'text-neutral-500'}`}>{error ?? hint}</span>}
            {open && createPortal(
                <div
                    ref={panel}
                    role='dialog'
                    aria-label={text.choose}
                    onKeyDown={onKeyDown}
                    style={accentStyle(color, { position: 'fixed', top: box?.top ?? 0, left: box?.left ?? 0, visibility: box ? 'visible' : 'hidden' })}
                    className='z-[80] rounded-xl border border-neutral-200 bg-white p-2 shadow-lg dark:border-neutral-700 dark:bg-neutral-900'
                >
                    <div className='flex gap-1'>
                        <div role='listbox' aria-label={text.hours} className={list}>
                            {hoursList.map((hour) => {
                                const selected = time ? display(time.hours) === hour : false
                                const off = !hourAllowed(to24(hour, isPm))
                                return (
                                    <button key={hour} type='button' role='option' data-column='hours' aria-selected={selected} disabled={off} tabIndex={column === 'hours' && (selected || (!time && hour === hoursList[0])) ? 0 : -1} onClick={() => { setColumn('hours'); pickHour(hour) }} className={option(selected)}>
                                        {pad(hour)}
                                    </button>
                                )
                            })}
                        </div>
                        <div role='listbox' aria-label={text.minutes} className={list}>
                            {minutesList.map((minutes, index) => {
                                const selected = time ? time.minutes === minutes : false
                                const off = outside(time?.hours ?? 0, minutes)
                                return (
                                    <button key={minutes} type='button' role='option' data-column='minutes' aria-selected={selected} disabled={off} tabIndex={column === 'minutes' && (selected || (!time && index === 0)) ? 0 : -1} onClick={() => { setColumn('minutes'); pickMinute(minutes) }} className={option(selected)}>
                                        {pad(minutes)}
                                    </button>
                                )
                            })}
                        </div>
                        {hour12 && (
                            <div role='listbox' aria-label={text.period} className='flex w-14 flex-col gap-0.5'>
                                {['AM', 'PM'].map((period) => {
                                    const selected = time ? isPm === (period === 'PM') : false
                                    return (
                                        <button key={period} type='button' role='option' data-column='period' aria-selected={selected} tabIndex={column === 'period' && (selected || (!time && period === 'AM')) ? 0 : -1} onClick={() => { setColumn('period'); pickPeriod(period === 'PM') }} className={option(selected)}>
                                            {period}
                                        </button>
                                    )
                                })}
                            </div>
                        )}
                    </div>
                    <button type='button' onClick={() => close()} className='mt-2 w-full rounded-lg py-2 text-sm font-medium text-[color-mix(in_srgb,var(--blossom-accent,#f472b6)_85%,black)] outline-none hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-[var(--blossom-accent,#f472b6)] dark:text-[var(--blossom-accent,#f472b6)] dark:hover:bg-neutral-800'>
                        {text.done}
                    </button>
                </div>,
                document.body
            )}
        </div>
    )
}
