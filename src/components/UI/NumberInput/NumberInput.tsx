import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react'
import { accentStyle } from '../accent'

type State = 'default' | 'success' | 'error'

export interface NumberInputLabels {
    /** Accessible name of the button that lowers the number. */
    decrease: string
    /** Accessible name of the button that raises the number. */
    increase: string
}

const defaultLabels: NumberInputLabels = { decrease: 'Decrease', increase: 'Increase' }

export interface NumberInputProps {
    /** Texts of the component. Pass only the ones you want to change, for example to translate it. */
    labels?: Partial<NumberInputLabels>
    /** Marks the field as required: an asterisk is shown next to the label. */
    required?: boolean
    /** Accent color of this component: any CSS color. Without it the component uses `--blossom-accent`, which is pink by default. */
    color?: string
    label?: string
    /** Helper text shown under the field. */
    hint?: string
    /** Error message. Turns the field red. */
    error?: string
    /** Success message. Turns the field green. */
    success?: string
    /** Controlled value, `null` when the field is empty. Use together with `onChange`. */
    value?: number | null
    /** Initial value when the field is not controlled. */
    defaultValue?: number | null
    /** Called with the number, or `null` when the field is emptied. */
    onChange?: (value: number | null) => void
    min?: number
    max?: number
    /** How much the buttons and the arrow keys add or remove. Shift + arrow moves ten steps. */
    step?: number
    /** Decimals to show. By default they follow the decimals of `step`. */
    precision?: number
    /** Text shown before the number, such as "$". */
    prefix?: string
    /** Text shown after the number, such as "kg". */
    suffix?: string
    /** Format the number with the thousands separator of this locale when the field loses focus. */
    locale?: string
    placeholder?: string
    /** Adds a name to the input so the number is sent with native forms. */
    name?: string
    disabled?: boolean
    readOnly?: boolean
}

const base = 'w-full rounded-xl border bg-transparent text-sm outline-none placeholder:text-neutral-400 focus-within:ring-2'

const control: Record<State, string> = {
    default: 'border-neutral-300 text-neutral-900 focus-within:border-[var(--blossom-accent,#f472b6)] focus-within:ring-[color-mix(in_srgb,var(--blossom-accent,#f472b6)_30%,transparent)] dark:border-neutral-700 dark:text-white',
    success: 'border-green-500 bg-green-50 text-green-900 focus-within:ring-green-500/30 dark:bg-green-900/20 dark:text-green-200',
    error: 'border-red-500 bg-red-50 text-red-900 focus-within:ring-red-500/30 dark:bg-red-900/20 dark:text-red-200',
}

const message: Record<State, string> = {
    default: 'text-neutral-500',
    success: 'text-green-700 dark:text-green-400',
    error: 'text-red-700 dark:text-red-400',
}

const decimalsOf = (number: number) => (String(number).split('.')[1] ?? '').length

const parse = (text: string) => {
    if (text.trim() === '' || text === '-' || text === '.' || text === '-.') return null
    const number = Number(text)
    return Number.isNaN(number) ? null : number
}

const stepButton = 'grid w-9 shrink-0 place-items-center text-neutral-500 outline-none transition-colors hover:bg-neutral-100 hover:text-neutral-900 focus-visible:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-40 dark:hover:bg-neutral-800 dark:hover:text-white dark:focus-visible:bg-neutral-800'

/** A field for numbers with buttons, arrow keys, limits and decimals. Only valid numbers can be typed. */
export const NumberInput = ({ labels, required, color, label, hint, error, success, value, defaultValue = null, onChange, min, max, step = 1, precision, prefix, suffix, locale, placeholder, name, disabled = false, readOnly = false }: NumberInputProps) => {
    const id = useId()
    const text = { ...defaultLabels, ...labels }
    const state: State = error ? 'error' : success ? 'success' : 'default'
    const note = error ?? success ?? hint
    const decimals = precision ?? Math.max(decimalsOf(step), decimalsOf(min ?? 0))
    const [internal, setInternal] = useState<number | null>(defaultValue)
    const current = value === undefined ? internal : value
    const focused = useRef(false)
    const format = (number: number | null) =>
        number === null ? '' : locale ? new Intl.NumberFormat(locale, { minimumFractionDigits: decimals, maximumFractionDigits: decimals }).format(number) : String(number)
    const [draft, setDraft] = useState(() => format(current))

    const clamp = (number: number) => {
        const limited = Math.min(max ?? Infinity, Math.max(min ?? -Infinity, number))
        return Number(limited.toFixed(decimals))
    }

    // While the user is in the field the number is plain, so it can be edited. Out of it, it is formatted.
    const show = (number: number | null) => (focused.current ? (number === null ? '' : String(number)) : format(number))

    // Follow the value when the parent changes it, but never rewrite what the user is typing.
    useEffect(() => {
        if (parse(draft) !== current && !(locale && draft === format(current))) setDraft(show(current))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [current])

    const commit = (next: number | null) => {
        if (value === undefined) setInternal(next)
        if (next !== current) onChange?.(next)
    }

    const stepBy = (direction: 1 | -1, times = 1) => {
        if (disabled || readOnly) return
        const from = current ?? (direction === 1 ? (min ?? 0) - step : (max ?? 0) + step)
        const next = clamp(from + direction * step * times)
        setDraft(String(next))
        commit(next)
    }

    const onType = (raw: string) => {
        const allowNegative = min === undefined || min < 0
        const pattern = decimals === 0 ? (allowNegative ? /^-?\d*$/ : /^\d*$/) : allowNegative ? /^-?\d*\.?\d*$/ : /^\d*\.?\d*$/
        const normalized = raw.replace(',', '.')
        if (!pattern.test(normalized)) return
        setDraft(normalized)
        const number = parse(normalized)
        if (number === null) {
            if (normalized === '') commit(null)
            return
        }
        commit(number)
    }

    const onBlur = () => {
        focused.current = false
        const number = parse(draft)
        if (number === null) {
            setDraft('')
            commit(null)
            return
        }
        const fixed = clamp(number)
        setDraft(show(fixed))
        commit(fixed)
    }

    const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
            event.preventDefault()
            stepBy(event.key === 'ArrowUp' ? 1 : -1, event.shiftKey ? 10 : 1)
        } else if (event.key === 'Home' && min !== undefined) {
            event.preventDefault()
            setDraft(String(min))
            commit(min)
        } else if (event.key === 'End' && max !== undefined) {
            event.preventDefault()
            setDraft(String(max))
            commit(max)
        } else if (event.key === 'Enter') onBlur()
    }

    const atMin = current !== null && min !== undefined && current <= min
    const atMax = current !== null && max !== undefined && current >= max

    return (
        <div className='flex w-full flex-col gap-1' style={accentStyle(color)}>
            {label && <label htmlFor={id} className='text-sm font-medium text-neutral-800 dark:text-white'>{label}{required && <span aria-hidden='true' className='ml-0.5 text-red-600 dark:text-red-400'>*</span>}</label>}
            <div className={`${base} flex items-stretch overflow-hidden ${control[state]} ${disabled ? 'cursor-not-allowed opacity-60' : ''}`}>
                <button type='button' tabIndex={-1} aria-label={text.decrease} disabled={disabled || readOnly || atMin} onClick={() => stepBy(-1)} className={`${stepButton} border-r border-neutral-200 dark:border-neutral-700`}>
                    <svg className='h-4 w-4' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'><path strokeLinecap='round' strokeLinejoin='round' d='M5 12h14' /></svg>
                </button>
                <div className='flex min-w-0 flex-1 items-center gap-1 px-3'>
                    {prefix && <span className='text-neutral-400'>{prefix}</span>}
                    <input
                        id={id}
                        name={name}
                        type='text'
                        role='spinbutton'
                        inputMode={decimals === 0 ? 'numeric' : 'decimal'}
                        autoComplete='off'
                        value={draft}
                        placeholder={placeholder}
                        disabled={disabled}
                        readOnly={readOnly}
                        required={required}
                        aria-valuenow={current ?? undefined}
                        aria-valuemin={min}
                        aria-valuemax={max}
                        aria-invalid={state === 'error'}
                        aria-describedby={note ? `${id}-message` : undefined}
                        onChange={(event) => onType(event.target.value)}
                        onFocus={() => {
                            focused.current = true
                            setDraft(current === null ? '' : String(current))
                        }}
                        onBlur={onBlur}
                        onKeyDown={onKeyDown}
                        className='w-full min-w-0 bg-transparent py-2.5 text-center outline-none placeholder:text-neutral-400'
                    />
                    {suffix && <span className='text-neutral-400'>{suffix}</span>}
                </div>
                <button type='button' tabIndex={-1} aria-label={text.increase} disabled={disabled || readOnly || atMax} onClick={() => stepBy(1)} className={`${stepButton} border-l border-neutral-200 dark:border-neutral-700`}>
                    <svg className='h-4 w-4' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'><path strokeLinecap='round' strokeLinejoin='round' d='M12 5v14M5 12h14' /></svg>
                </button>
            </div>
            {note && <span id={`${id}-message`} className={`text-xs ${message[state]}`}>{note}</span>}
        </div>
    )
}
