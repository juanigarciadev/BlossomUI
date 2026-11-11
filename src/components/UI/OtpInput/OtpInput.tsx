import { useId, useRef, useState, type ClipboardEvent, type KeyboardEvent } from 'react'
import { accentStyle } from '../accent'

type State = 'default' | 'success' | 'error'

export interface OtpInputProps {
    /** Number of boxes. */
    length?: number
    /** Controlled value. Use together with `onChange`. */
    value?: string
    /** Initial value when the component is not controlled. */
    defaultValue?: string
    /** Called every time a character is typed, deleted or pasted. */
    onChange?: (value: string) => void
    /** Called once, when every box is filled. */
    onComplete?: (value: string) => void
    /** `numeric` accepts digits and opens the numeric keyboard on a phone, `alphanumeric` also accepts letters. */
    type?: 'numeric' | 'alphanumeric'
    /** Hide the characters, like a password. */
    mask?: boolean
    /** Draws a dash after these boxes, for example `[3]` shows 123 - 456. */
    separatorAfter?: number[]
    /** Accent color of this component: any CSS color. Without it the component uses `--blossom-accent`, which is pink by default. */
    color?: string
    label?: string
    /** Helper text shown under the boxes. */
    hint?: string
    /** Error message. Turns the boxes red. */
    error?: string
    /** Success message. Turns the boxes green. */
    success?: string
    size?: 'sm' | 'md' | 'lg'
    disabled?: boolean
    /** Focus the first empty box when the component is shown. */
    autoFocus?: boolean
    /** Adds a hidden input with this name so the code is sent with native forms. */
    name?: string
    /** Accessible name of each box, for example "Character 2 of 6". */
    boxLabel?: (position: number, length: number) => string
}

const sizes = { sm: 'h-10 w-9 text-base', md: 'h-12 w-11 text-lg', lg: 'h-14 w-12 text-xl' }

const box: Record<State, string> = {
    default: 'border-neutral-300 text-neutral-900 focus:border-[var(--blossom-accent,#f472b6)] focus:ring-[color-mix(in_srgb,var(--blossom-accent,#f472b6)_30%,transparent)] dark:border-neutral-700 dark:text-white',
    success: 'border-green-500 bg-green-50 text-green-900 focus:ring-green-500/30 dark:bg-green-900/20 dark:text-green-200',
    error: 'border-red-500 bg-red-50 text-red-900 focus:ring-red-500/30 dark:bg-red-900/20 dark:text-red-200',
}

const message: Record<State, string> = {
    default: 'text-neutral-500',
    success: 'text-green-700 dark:text-green-400',
    error: 'text-red-700 dark:text-red-400',
}

const patterns = { numeric: /[^0-9]/g, alphanumeric: /[^a-zA-Z0-9]/g }

/** One box for every character of a verification code. It accepts a pasted code and one-time code autofill. */
export const OtpInput = ({ length = 6, value, defaultValue = '', onChange, onComplete, type = 'numeric', mask = false, separatorAfter = [], color, label, hint, error, success, size = 'md', disabled = false, autoFocus = false, name, boxLabel = (position, total) => `Character ${position} of ${total}` }: OtpInputProps) => {
    const id = useId()
    const inputs = useRef<(HTMLInputElement | null)[]>([])
    const clean = (text: string) => text.replace(patterns[type], '').slice(0, length)
    const [internal, setInternal] = useState(() => clean(defaultValue))
    const current = clean(value ?? internal)
    const state: State = error ? 'error' : success ? 'success' : 'default'
    const text = error ?? success ?? hint

    const update = (next: string) => {
        if (value === undefined) setInternal(next)
        onChange?.(next)
        if (next.length === length && next !== current) onComplete?.(next)
    }

    const focusBox = (index: number) => {
        const target = inputs.current[Math.max(0, Math.min(length - 1, index))]
        target?.focus()
        target?.select()
    }

    /** Write `chars` from box `index` on, replacing what was there, and move after them. */
    const write = (index: number, chars: string) => {
        update((current.slice(0, index) + chars + current.slice(index + chars.length)).slice(0, length))
        focusBox(Math.min(index + chars.length, length - 1))
    }

    const typed = (index: number, raw: string) => {
        // A box that already had a character: the text is the old one plus the new one, keep what was added.
        const old = current[index]
        const added = clean(old && raw.length > 1 ? raw.replace(old, '') || raw : raw)
        if (added) write(index, added)
        else if (raw === '') update(current.slice(0, index) + current.slice(index + 1))
    }

    const onKeyDown = (index: number, event: KeyboardEvent<HTMLInputElement>) => {
        switch (event.key) {
            case 'Backspace':
                if (!current[index]) {
                    event.preventDefault()
                    update(current.slice(0, Math.max(0, index - 1)) + current.slice(index))
                    focusBox(index - 1)
                }
                break
            case 'Delete':
                event.preventDefault()
                update(current.slice(0, index) + current.slice(index + 1))
                break
            case 'ArrowLeft':
                event.preventDefault()
                focusBox(index - 1)
                break
            case 'ArrowRight':
                event.preventDefault()
                focusBox(index + 1)
                break
            case 'Home':
                event.preventDefault()
                focusBox(0)
                break
            case 'End':
                event.preventDefault()
                focusBox(length - 1)
                break
        }
    }

    const onPaste = (index: number, event: ClipboardEvent<HTMLInputElement>) => {
        event.preventDefault()
        const pasted = clean(event.clipboardData.getData('text'))
        if (pasted) write(index, pasted)
    }

    // The box that receives the focus when the group is entered with Tab: the first empty one.
    const first = Math.min(current.length, length - 1)

    return (
        <div className='flex w-fit max-w-full flex-col gap-1' style={accentStyle(color)}>
            {label && <span id={`${id}-label`} className='text-sm font-medium text-neutral-800 dark:text-white'>{label}</span>}
            <div role='group' aria-labelledby={label ? `${id}-label` : undefined} aria-describedby={text ? `${id}-message` : undefined} className='flex items-center gap-2 xs:gap-1.5'>
                {Array.from({ length }, (_, index) => (
                    <span key={index} className='flex items-center gap-2 xs:gap-1.5'>
                        <input
                            ref={(element) => { inputs.current[index] = element }}
                            type={mask ? 'password' : 'text'}
                            inputMode={type === 'numeric' ? 'numeric' : 'text'}
                            autoComplete={index === 0 ? 'one-time-code' : 'off'}
                            autoFocus={autoFocus && index === first}
                            value={current[index] ?? ''}
                            disabled={disabled}
                            aria-label={boxLabel(index + 1, length)}
                            aria-invalid={state === 'error'}
                            tabIndex={index === first ? 0 : -1}
                            onChange={(event) => typed(index, event.target.value)}
                            onKeyDown={(event) => onKeyDown(index, event)}
                            onPaste={(event) => onPaste(index, event)}
                            onFocus={(event) => event.target.select()}
                            className={`${sizes[size]} rounded-xl border bg-transparent text-center font-medium caret-transparent outline-none focus:ring-2 disabled:cursor-not-allowed disabled:opacity-60 ${box[state]}`}
                        />
                        {separatorAfter.includes(index + 1) && index < length - 1 && <span aria-hidden='true' className='h-0.5 w-2 rounded-full bg-neutral-400' />}
                    </span>
                ))}
            </div>
            {name && <input type='hidden' name={name} value={current} />}
            {text && <span id={`${id}-message`} className={`text-xs ${message[state]}`}>{text}</span>}
        </div>
    )
}
