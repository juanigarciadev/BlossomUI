import { useId, useState, type ChangeEvent } from 'react'
import { accentStyle } from '../accent'

export interface SliderProps {
    /** Helper text shown under the slider. */
    hint?: string
    /** Error message. It is shown in red under the slider. */
    error?: string
    /** Accent color of this component: any CSS color. Without it the component uses `--blossom-accent`, which is pink by default. */
    color?: string
    min?: number
    max?: number
    step?: number
    value?: number
    defaultValue?: number
    onChange?: (value: number) => void
    label?: string
    /** Show the current value next to the label. */
    showValue?: boolean
    /** Text added after the value, for example "%" or "px". */
    unit?: string
    disabled?: boolean
}

export const Slider = ({ hint, error, color, min = 0, max = 100, step = 1, value, defaultValue = min, onChange, label, showValue = false, unit = '', disabled = false }: SliderProps) => {
    const id = useId()
    const [internal, setInternal] = useState(defaultValue)
    const current = value ?? internal
    const percent = ((current - min) / (max - min)) * 100

    const change = (event: ChangeEvent<HTMLInputElement>) => {
        const next = Number(event.target.value)
        if (value === undefined) setInternal(next)
        onChange?.(next)
    }

    return (
        <div className='flex w-full flex-col gap-2' style={accentStyle(color)}>
            {(label || showValue) && (
                <div className='flex items-center justify-between text-sm'>
                    {label && <label htmlFor={id} className='font-medium text-neutral-800 dark:text-white'>{label}</label>}
                    {showValue && <span className='text-neutral-500'>{current}{unit}</span>}
                </div>
            )}
            <input
                id={id}
                type='range'
                min={min}
                max={max}
                step={step}
                value={current}
                disabled={disabled}
                onChange={change}
                aria-invalid={Boolean(error) || undefined}
                aria-describedby={error ?? hint ? `${id}-message` : undefined}
                style={{ backgroundImage: `linear-gradient(to right, var(--blossom-accent,#f472b6) ${percent}%, transparent ${percent}%)` }}
                className='h-2 w-full cursor-pointer appearance-none rounded-full bg-neutral-300 outline-none disabled:cursor-not-allowed disabled:opacity-40 dark:bg-neutral-700 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[var(--blossom-accent,#f472b6)] [&::-moz-range-thumb]:bg-white [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[var(--blossom-accent,#f472b6)] [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow focus-visible:ring-2 focus-visible:ring-[var(--blossom-accent,#f472b6)] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-900'
            />
            {(error ?? hint) && <span id={`${id}-message`} className={`text-xs ${error ? 'text-red-700 dark:text-red-400' : 'text-neutral-500'}`}>{error ?? hint}</span>}
        </div>
    )
}
