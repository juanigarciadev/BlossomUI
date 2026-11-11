import { useId, useRef, useState, type ClipboardEvent, type KeyboardEvent } from 'react'

export interface ChipInputProps {
    /** Texts of the component. Pass only the ones you want to change, for example to translate it. */
    labels?: { remove?: (chip: string) => string; duplicate?: (chip: string) => string }
    value?: string[]
    defaultValue?: string[]
    onChange?: (value: string[]) => void
    label?: string
    hint?: string
    placeholder?: string
    /** Maximum number of chips. */
    max?: number
    /** Return an error message to reject a chip, or nothing to accept it. */
    validate?: (chip: string) => string | undefined
    disabled?: boolean
    /** Values offered while typing. The user can pick one with the arrow keys and Enter, or with the mouse, and can still type anything else. */
    suggestions?: string[]
    /** Most suggestions shown at once. */
    maxSuggestions?: number
}

export const ChipInput = ({ labels, value, defaultValue = [], onChange, label, hint, placeholder = 'Type and press Enter', max, validate, disabled = false, suggestions = [], maxSuggestions = 6 }: ChipInputProps) => {
    const id = useId()
    const input = useRef<HTMLInputElement>(null)
    const [internal, setInternal] = useState<string[]>(defaultValue)
    const [draft, setDraft] = useState('')
    const [error, setError] = useState('')
    const [focused, setFocused] = useState(false)
    const [active, setActive] = useState(-1)
    const chips = value ?? internal
    const full = max !== undefined && chips.length >= max

    // Suggestions that are not chips yet and match what is typed
    const matches = suggestions
        .filter((suggestion) => !chips.some((chip) => chip.toLowerCase() === suggestion.toLowerCase()) && suggestion.toLowerCase().includes(draft.trim().toLowerCase()))
        .slice(0, maxSuggestions)
    const listOpen = focused && !disabled && !full && matches.length > 0
    const activeIndex = Math.min(active, matches.length - 1)

    const update = (next: string[]) => {
        if (value === undefined) setInternal(next)
        onChange?.(next)
    }

    const add = (raw: string) => {
        const chip = raw.trim()
        if (!chip) return false
        if (chips.some((item) => item.toLowerCase() === chip.toLowerCase())) {
            setError(labels?.duplicate ? labels.duplicate(chip) : `"${chip}" is already added`)
            return false
        }
        const problem = validate?.(chip)
        if (problem) {
            setError(problem)
            return false
        }
        if (full) return false
        setError('')
        update([...chips, chip])
        return true
    }

    const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (listOpen && (event.key === 'ArrowDown' || event.key === 'ArrowUp')) {
            event.preventDefault()
            setActive((index) => (event.key === 'ArrowDown' ? (index + 1) % matches.length : (index - 1 + matches.length) % matches.length))
        } else if (listOpen && event.key === 'Escape') {
            event.preventDefault()
            setFocused(false)
        } else if (event.key === 'Enter' && listOpen && activeIndex >= 0) {
            event.preventDefault()
            if (add(matches[activeIndex])) {
                setDraft('')
                setActive(-1)
            }
        } else if (event.key === 'Enter' || event.key === ',') {
            event.preventDefault()
            if (add(draft)) setDraft('')
        } else if (event.key === 'Backspace' && !draft && chips.length > 0) {
            update(chips.slice(0, -1))
        }
    }

    const onPaste = (event: ClipboardEvent<HTMLInputElement>) => {
        const parts = event.clipboardData.getData('text').split(/[,\n]/)
        if (parts.length < 2) return
        event.preventDefault()
        let next = chips
        parts.map((part) => part.trim()).filter(Boolean).forEach((part) => {
            if (!next.some((item) => item.toLowerCase() === part.toLowerCase()) && !validate?.(part) && (max === undefined || next.length < max)) next = [...next, part]
        })
        update(next)
    }

    return (
        <div className='relative flex w-full flex-col gap-1'>
            {label && <label htmlFor={id} className='text-sm font-medium text-neutral-800 dark:text-white'>{label}</label>}
            <div
                onClick={() => input.current?.focus()}
                className={`flex min-h-[44px] w-full flex-wrap items-center gap-2 rounded-xl border bg-transparent px-3 py-2 focus-within:ring-2 ${error ? 'border-red-500 focus-within:ring-red-500/30' : 'border-neutral-300 focus-within:border-[var(--blossom-accent,#f472b6)] focus-within:ring-[color-mix(in_srgb,var(--blossom-accent,#f472b6)_30%,transparent)] dark:border-neutral-700'} ${disabled ? 'cursor-not-allowed opacity-60' : ''}`}
            >
                {chips.map((chip) => (
                    <span key={chip} className='flex items-center gap-1 rounded-lg bg-[color-mix(in_srgb,var(--blossom-accent,#f472b6)_18%,transparent)] py-1 pl-2 pr-1 text-xs font-medium text-[color-mix(in_srgb,var(--blossom-accent,#f472b6)_45%,black)] dark:bg-[color-mix(in_srgb,var(--blossom-accent,#f472b6)_20%,transparent)] dark:text-[color-mix(in_srgb,var(--blossom-accent,#f472b6)_45%,white)]'>
                        {chip}
                        <button
                            type='button'
                            aria-label={labels?.remove ? labels.remove(chip) : `Remove ${chip}`}
                            disabled={disabled}
                            onClick={() => update(chips.filter((item) => item !== chip))}
                            className='rounded p-0.5 hover:bg-[color-mix(in_srgb,var(--blossom-accent,#f472b6)_28%,transparent)] dark:hover:bg-[color-mix(in_srgb,var(--blossom-accent,#f472b6)_30%,transparent)]'
                        >
                            <svg className='h-3 w-3' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='3'><path strokeLinecap='round' strokeLinejoin='round' d='M6 6l12 12M18 6 6 18' /></svg>
                        </button>
                    </span>
                ))}
                <input
                    ref={input}
                    id={id}
                    value={draft}
                    disabled={disabled || full}
                    placeholder={chips.length || full ? '' : placeholder}
                    onChange={(event) => { setDraft(event.target.value); setActive(-1); setFocused(true); if (error) setError('') }}
                    onFocus={() => setFocused(true)}
                    role={suggestions.length ? 'combobox' : undefined}
                    aria-expanded={suggestions.length ? listOpen : undefined}
                    aria-controls={listOpen ? `${id}-suggestions` : undefined}
                    aria-autocomplete={suggestions.length ? 'list' : undefined}
                    aria-activedescendant={listOpen && activeIndex >= 0 ? `${id}-suggestion-${activeIndex}` : undefined}
                    onKeyDown={onKeyDown}
                    onPaste={onPaste}
                    onBlur={() => { setFocused(false); setActive(-1); if (draft && add(draft)) setDraft('') }}
                    aria-invalid={Boolean(error)}
                    className='min-w-[80px] flex-1 bg-transparent py-0.5 text-sm text-neutral-900 outline-none placeholder:text-neutral-400 dark:text-white'
                />
            </div>
            {listOpen && (
                <ul
                    id={`${id}-suggestions`}
                    role='listbox'
                    // Pressing a suggestion must not take the focus from the field, or the typed text would be added first.
                    onMouseDown={(event) => event.preventDefault()}
                    className='absolute left-0 right-0 top-full z-20 mt-1 max-h-56 overflow-auto rounded-xl border border-neutral-200 bg-white p-1 text-sm shadow-lg dark:border-neutral-700 dark:bg-neutral-900'
                >
                    {matches.map((suggestion, index) => (
                        <li
                            key={suggestion}
                            id={`${id}-suggestion-${index}`}
                            role='option'
                            aria-selected={index === activeIndex}
                            onPointerEnter={() => setActive(index)}
                            onClick={() => { if (add(suggestion)) { setDraft(''); setActive(-1); input.current?.focus() } }}
                            className={`cursor-pointer rounded-lg px-3 py-2 text-neutral-800 dark:text-white ${index === activeIndex ? 'bg-neutral-100 dark:bg-neutral-800' : ''}`}
                        >
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}
            {(error || hint || max !== undefined) && (
                <span className={`text-xs ${error ? 'text-red-700 dark:text-red-400' : 'text-neutral-500'}`}>
                    {error || hint}{!error && max !== undefined ? `${hint ? ' · ' : ''}${chips.length}/${max}` : ''}
                </span>
            )}
        </div>
    )
}
