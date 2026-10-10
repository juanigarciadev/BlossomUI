import { useId, useState, type ChangeEvent } from 'react'

export interface SliderProps {
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

export const Slider = ({ min = 0, max = 100, step = 1, value, defaultValue = min, onChange, label, showValue = false, unit = '', disabled = false }: SliderProps) => {
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
        <div className='flex w-full flex-col gap-2'>
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
                style={{ backgroundImage: `linear-gradient(to right, #f472b6 ${percent}%, transparent ${percent}%)` }}
                className='h-2 w-full cursor-pointer appearance-none rounded-full bg-neutral-300 outline-none disabled:cursor-not-allowed disabled:opacity-40 dark:bg-neutral-700 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-pink-400 [&::-moz-range-thumb]:bg-white [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-pink-400 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-900'
            />
        </div>
    )
}
