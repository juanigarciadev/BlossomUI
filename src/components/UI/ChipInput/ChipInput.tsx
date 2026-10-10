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
}

export const ChipInput = ({ labels, value, defaultValue = [], onChange, label, hint, placeholder = 'Type and press Enter', max, validate, disabled = false }: ChipInputProps) => {
    const id = useId()
    const input = useRef<HTMLInputElement>(null)
    const [internal, setInternal] = useState<string[]>(defaultValue)
    const [draft, setDraft] = useState('')
    const [error, setError] = useState('')
    const chips = value ?? internal
    const full = max !== undefined && chips.length >= max

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
        if (event.key === 'Enter' || event.key === ',') {
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
        <div className='flex w-full flex-col gap-1'>
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
                    onChange={(event) => { setDraft(event.target.value); if (error) setError('') }}
                    onKeyDown={onKeyDown}
                    onPaste={onPaste}
                    onBlur={() => { if (draft && add(draft)) setDraft('') }}
                    aria-invalid={Boolean(error)}
                    className='min-w-[80px] flex-1 bg-transparent py-0.5 text-sm text-neutral-900 outline-none placeholder:text-neutral-400 dark:text-white'
                />
            </div>
            {(error || hint || max !== undefined) && (
                <span className={`text-xs ${error ? 'text-red-700 dark:text-red-400' : 'text-neutral-500'}`}>
                    {error || hint}{!error && max !== undefined ? `${hint ? ' · ' : ''}${chips.length}/${max}` : ''}
                </span>
            )}
        </div>
    )
}
