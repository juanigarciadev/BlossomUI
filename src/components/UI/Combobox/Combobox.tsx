import { useEffect, useId, useLayoutEffect, useRef, useState, type CSSProperties, type KeyboardEvent, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { accentStyle } from '../accent'

type State = 'default' | 'success' | 'error'

export interface ComboboxOption {
    value: string
    label: string
    /** Second line under the label, for example an email. */
    description?: string
    /** Element shown before the label, for example an avatar or an icon. */
    icon?: ReactNode
    disabled?: boolean
}

export interface ComboboxLabels {
    /** Text shown when nothing matches what was typed. */
    empty: string
    /** Accessible name of the button that clears the value. */
    clear: string
    /** Accessible name of the button that opens the list. */
    toggle: string
    /** Text of the option that creates a new value, with `allowCustom`. */
    create: (text: string) => string
}

const defaultLabels: ComboboxLabels = {
    empty: 'No results',
    clear: 'Clear',
    toggle: 'Show options',
    create: (text) => `Use "${text}"`,
}

export interface ComboboxProps {
    /** Texts of the component. Pass only the ones you want to change, for example to translate it. */
    labels?: Partial<ComboboxLabels>
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
    options: ComboboxOption[]
    /** Controlled value (the `value` of an option, or the typed text with `allowCustom`). Use together with `onChange`. */
    value?: string
    /** Initial value when the field is not controlled. */
    defaultValue?: string
    /** Called with the `value` of the chosen option, or an empty string when the field is cleared. */
    onChange?: (value: string) => void
    /** Called every time the user types, useful to search on a server. */
    onInputChange?: (text: string) => void
    placeholder?: string
    /** Let the user keep a text that is not in the list. It is offered as the last option. */
    allowCustom?: boolean
    /** Show a button that clears the value. */
    clearable?: boolean
    /** Own filter. By default the options that contain the typed text are shown, ignoring case and accents. Pass `false` to show all of them, for example when you filter on a server. */
    filter?: ((option: ComboboxOption, text: string) => boolean) | false
    /** Adds a hidden input with this name so the value is sent with native forms. */
    name?: string
    disabled?: boolean
}

const normalize = (text: string) => text.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()

const defaultFilter = (option: ComboboxOption, text: string) => normalize(`${option.label} ${option.description ?? ''}`).includes(normalize(text))

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

interface Position {
    top: number
    left: number
    width: number
    /** Open upwards when there is not enough room below. */
    up: boolean
}

const checkMark = (
    <svg className='h-4 w-4 shrink-0 text-[color-mix(in_srgb,var(--blossom-accent,#f472b6)_85%,black)]' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='3'>
        <path strokeLinecap='round' strokeLinejoin='round' d='m5 12 5 5L20 7' />
    </svg>
)

/** A text field with a list of suggestions that narrows while the user types. */
export const Combobox = ({ labels, required, color, label, hint, error, success, options, value, defaultValue = '', onChange, onInputChange, placeholder = 'Search…', allowCustom = false, clearable = false, filter, name, disabled = false }: ComboboxProps) => {
    const id = useId()
    const text = { ...defaultLabels, ...labels }
    const state: State = error ? 'error' : success ? 'success' : 'default'
    const note = error ?? success ?? hint
    const anchor = useRef<HTMLDivElement>(null)
    const input = useRef<HTMLInputElement>(null)
    const list = useRef<HTMLDivElement>(null)

    const [internal, setInternal] = useState(defaultValue)
    const current = value ?? internal
    const selected = options.find((option) => option.value === current)
    const shownValue = selected ? selected.label : allowCustom ? current : ''

    const [open, setOpen] = useState(false)
    // What the user is typing. While it is `null` the field shows the chosen option.
    const [query, setQuery] = useState<string | null>(null)
    const [active, setActive] = useState(0)
    const [position, setPosition] = useState<Position | null>(null)

    const typed = query ?? ''
    const matches = filter === false || query === null || query === '' ? options : options.filter((option) => (filter ?? defaultFilter)(option, typed))
    const custom = allowCustom && typed.trim() !== '' && !options.some((option) => normalize(option.label) === normalize(typed.trim()))
    const rows: ComboboxOption[] = custom ? [...matches, { value: typed.trim(), label: text.create(typed.trim()) }] : matches
    const activeIndex = Math.min(active, rows.length - 1)

    const choose = (option: ComboboxOption) => {
        if (option.disabled) return
        if (value === undefined) setInternal(option.value)
        onChange?.(option.value)
        setQuery(null)
        setOpen(false)
    }

    const clear = () => {
        if (value === undefined) setInternal('')
        onChange?.('')
        setQuery(null)
        onInputChange?.('')
        input.current?.focus()
    }

    useLayoutEffect(() => {
        if (!open) return
        const place = () => {
            const rect = anchor.current?.getBoundingClientRect()
            if (!rect) return
            const height = Math.min(list.current?.scrollHeight ?? 240, 240)
            const up = window.innerHeight - rect.bottom < height + 8 && rect.top > height + 8
            setPosition({ top: up ? rect.top - 4 : rect.bottom + 4, left: rect.left, width: rect.width, up })
        }
        place()
        window.addEventListener('resize', place)
        window.addEventListener('scroll', place, true)
        return () => {
            window.removeEventListener('resize', place)
            window.removeEventListener('scroll', place, true)
        }
    }, [open, rows.length])

    // Keep the highlighted option in view while moving with the arrows.
    useEffect(() => {
        if (open) list.current?.querySelector<HTMLElement>(`[data-index="${activeIndex}"]`)?.scrollIntoView({ block: 'nearest' })
    }, [open, activeIndex])

    const move = (step: 1 | -1) => {
        if (rows.length === 0) return
        let next = activeIndex
        for (let tries = 0; tries < rows.length; tries++) {
            next = (next + step + rows.length) % rows.length
            if (!rows[next].disabled) break
        }
        setActive(next)
    }

    const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        switch (event.key) {
            case 'ArrowDown':
                event.preventDefault()
                if (!open) {
                    setOpen(true)
                    setActive(Math.max(0, rows.findIndex((option) => option.value === current)))
                } else move(1)
                break
            case 'ArrowUp':
                event.preventDefault()
                if (!open) setOpen(true)
                else move(-1)
                break
            case 'Home':
                if (open) {
                    event.preventDefault()
                    setActive(0)
                }
                break
            case 'End':
                if (open) {
                    event.preventDefault()
                    setActive(rows.length - 1)
                }
                break
            case 'Enter':
                if (open && rows[activeIndex]) {
                    event.preventDefault()
                    choose(rows[activeIndex])
                }
                break
            case 'Escape':
                if (open) {
                    event.preventDefault()
                    setOpen(false)
                    setQuery(null)
                }
                break
            case 'Tab':
                setOpen(false)
                break
        }
    }

    const onBlur = () => {
        setOpen(false)
        // Leaving the field with text that is not an option: keep it with `allowCustom`, drop it otherwise.
        if (allowCustom && query !== null && query.trim() !== '') {
            const same = options.find((option) => normalize(option.label) === normalize(query.trim()))
            const next = same ? same.value : query.trim()
            if (next !== current) {
                if (value === undefined) setInternal(next)
                onChange?.(next)
            }
        }
        setQuery(null)
    }

    const listStyle: CSSProperties | undefined = position
        ? { left: position.left, width: position.width, ...(position.up ? { bottom: window.innerHeight - position.top } : { top: position.top }) }
        : undefined

    return (
        <div className='flex w-full flex-col gap-1' style={accentStyle(color)}>
            {label && <label htmlFor={id} className='text-sm font-medium text-neutral-800 dark:text-white'>{label}{required && <span aria-hidden='true' className='ml-0.5 text-red-600 dark:text-red-400'>*</span>}</label>}
            <div ref={anchor} className={`flex w-full items-center gap-2 rounded-xl border bg-transparent px-3 focus-within:ring-2 ${control[state]} ${disabled ? 'cursor-not-allowed opacity-60' : ''}`}>
                {selected?.icon && query === null && <span className='shrink-0'>{selected.icon}</span>}
                <input
                    ref={input}
                    id={id}
                    type='text'
                    role='combobox'
                    autoComplete='off'
                    value={query ?? shownValue}
                    placeholder={placeholder}
                    disabled={disabled}
                    required={required}
                    aria-expanded={open}
                    aria-controls={open ? `${id}-list` : undefined}
                    aria-autocomplete='list'
                    aria-activedescendant={open && rows[activeIndex] ? `${id}-option-${activeIndex}` : undefined}
                    aria-invalid={state === 'error'}
                    aria-describedby={note ? `${id}-message` : undefined}
                    onChange={(event) => {
                        setQuery(event.target.value)
                        setActive(0)
                        setOpen(true)
                        onInputChange?.(event.target.value)
                    }}
                    onFocus={(event) => {
                        event.target.select()
                    }}
                    onClick={() => !disabled && setOpen(true)}
                    onKeyDown={onKeyDown}
                    onBlur={onBlur}
                    className='min-w-0 flex-1 bg-transparent py-2.5 text-sm outline-none placeholder:text-neutral-400 disabled:cursor-not-allowed'
                />
                {clearable && current !== '' && !disabled && (
                    <button type='button' aria-label={text.clear} onMouseDown={(event) => event.preventDefault()} onClick={clear} className='rounded-lg p-1 text-neutral-400 hover:text-neutral-700 dark:hover:text-white'>
                        <svg className='h-4 w-4' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'><path strokeLinecap='round' strokeLinejoin='round' d='M6 6l12 12M18 6 6 18' /></svg>
                    </button>
                )}
                <button type='button' tabIndex={-1} aria-label={text.toggle} disabled={disabled} onMouseDown={(event) => event.preventDefault()} onClick={() => { setOpen((isOpen) => !isOpen); input.current?.focus() }} className='rounded-lg p-1 text-neutral-400'>
                    <svg className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'><path strokeLinecap='round' strokeLinejoin='round' d='m6 9 6 6 6-6' /></svg>
                </button>
            </div>
            {name && <input type='hidden' name={name} value={current} />}
            {note && <span id={`${id}-message`} className={`text-xs ${message[state]}`}>{note}</span>}
            {open && createPortal(
                <div
                    ref={list}
                    id={`${id}-list`}
                    role='listbox'
                    aria-label={label}
                    // Pressing an option must not take the focus from the field, or the list would close before the click.
                    onMouseDown={(event) => event.preventDefault()}
                    style={accentStyle(color, { position: 'fixed', visibility: position ? 'visible' : 'hidden', ...listStyle })}
                    className='z-[80] max-h-60 overflow-auto rounded-xl border border-neutral-200 bg-white p-1 text-sm shadow-lg dark:border-neutral-700 dark:bg-neutral-900'
                >
                    {rows.length === 0 && <div className='px-3 py-2 text-neutral-500'>{text.empty}</div>}
                    {rows.map((option, index) => {
                        const isSelected = option.value === current && !(custom && index === rows.length - 1)
                        return (
                            <div
                                key={`${option.value}-${index}`}
                                id={`${id}-option-${index}`}
                                data-index={index}
                                role='option'
                                aria-selected={isSelected}
                                aria-disabled={option.disabled}
                                onPointerEnter={() => !option.disabled && setActive(index)}
                                onClick={() => choose(option)}
                                className={`flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 ${option.disabled ? 'cursor-not-allowed opacity-40' : ''} ${index === activeIndex ? 'bg-neutral-100 dark:bg-neutral-800' : ''} ${isSelected ? 'text-[color-mix(in_srgb,var(--blossom-accent,#f472b6)_85%,black)] dark:text-[var(--blossom-accent,#f472b6)]' : 'text-neutral-800 dark:text-white'}`}
                            >
                                {option.icon}
                                <span className='flex min-w-0 flex-1 flex-col'>
                                    <span className='truncate'>{option.label}</span>
                                    {option.description && <span className='truncate text-xs text-neutral-500'>{option.description}</span>}
                                </span>
                                {isSelected && checkMark}
                            </div>
                        )
                    })}
                </div>,
                document.body
            )}
        </div>
    )
}
