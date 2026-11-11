import { useLayoutEffect, useRef, useState, type KeyboardEvent, type ReactNode } from 'react'
import { accentStyle } from '../accent'

const sizes = { sm: 'px-3 py-1.5 text-xs', md: 'px-4 py-2 text-sm', lg: 'px-5 py-2.5 text-base' }

/** Index of the next enabled item starting after `from` in the direction of `step`. */
const nextEnabled = (items: { disabled?: boolean }[], from: number, step: 1 | -1) => {
    for (let index = from + step; index >= 0 && index < items.length; index += step) {
        if (!items[index].disabled) return index
    }
    return from
}

export interface SegmentedOption {
    value: string
    label?: string
    icon?: ReactNode
    disabled?: boolean
    /** Accessible name when the option only has an icon. */
    ariaLabel?: string
}

export interface SegmentedControlProps {
    options: SegmentedOption[]
    /** Controlled value. Use together with `onChange`. */
    value?: string
    /** Initial value when the control is not controlled. */
    defaultValue?: string
    onChange?: (value: string) => void
    size?: 'sm' | 'md' | 'lg'
    /** Make every option take the same share of the width. */
    fullWidth?: boolean
    /** `boxed` slides a white card, `filled` slides the brand color. */
    variant?: 'boxed' | 'filled'
    /** Accent color of this component: any CSS color. Without it the component uses `--blossom-accent`, which is pink by default. */
    color?: string
    disabled?: boolean
    /** Accessible name of the group. */
    label?: string
}

/** Switch between a few exclusive options, like a view mode. The selected one slides. */
export const SegmentedControl = ({ options, value, defaultValue, onChange, size = 'md', fullWidth = false, variant = 'boxed', color, disabled = false, label }: SegmentedControlProps) => {
    const [internal, setInternal] = useState(defaultValue ?? options.find((option) => !option.disabled)?.value ?? '')
    const current = value ?? internal
    const group = useRef<HTMLDivElement>(null)
    const buttons = useRef<Record<string, HTMLButtonElement | null>>({})
    const [thumb, setThumb] = useState<{ left: number; width: number } | null>(null)

    // Measure the selected option so the thumb can slide to it, and again whenever the control changes size.
    useLayoutEffect(() => {
        const measure = () => {
            const button = buttons.current[current]
            setThumb((previous) => {
                if (!button) return null
                const next = { left: button.offsetLeft, width: button.offsetWidth }
                return previous && previous.left === next.left && previous.width === next.width ? previous : next
            })
        }
        measure()
        const observer = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(measure)
        if (group.current) observer?.observe(group.current)
        return () => observer?.disconnect()
    }, [current, options, size, fullWidth])

    const select = (next: string) => {
        if (value === undefined) setInternal(next)
        onChange?.(next)
    }

    const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        const index = options.findIndex((option) => option.value === current)
        let next = index
        if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = nextEnabled(options, index, 1)
        else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = nextEnabled(options, index, -1)
        else if (event.key === 'Home') next = nextEnabled(options, -1, 1)
        else if (event.key === 'End') next = nextEnabled(options, options.length, -1)
        else return
        event.preventDefault()
        if (next === index) return
        select(options[next].value)
        buttons.current[options[next].value]?.focus()
    }

    return (
        <div
            ref={group}
            role='radiogroup'
            aria-label={label}
            aria-disabled={disabled || undefined}
            onKeyDown={onKeyDown}
            style={accentStyle(color)}
            className={`relative gap-1 rounded-xl bg-neutral-100 p-1 dark:bg-neutral-800 ${fullWidth ? 'flex w-full' : 'inline-flex max-w-full overflow-x-auto'} ${disabled ? 'pointer-events-none opacity-60' : ''}`}
        >
            {thumb && (
                <span
                    aria-hidden='true'
                    style={{ left: thumb.left, width: thumb.width }}
                    className={`absolute inset-y-1 rounded-lg transition-[left,width] duration-200 ease-out motion-reduce:transition-none ${variant === 'filled' ? 'bg-[var(--blossom-accent,#f472b6)]' : 'bg-white shadow-sm dark:bg-neutral-700'}`}
                />
            )}
            {options.map((option) => {
                const selected = option.value === current
                return (
                    <button
                        key={option.value}
                        ref={(element) => { buttons.current[option.value] = element }}
                        type='button'
                        role='radio'
                        aria-checked={selected}
                        aria-label={option.ariaLabel}
                        tabIndex={selected ? 0 : -1}
                        disabled={option.disabled}
                        onClick={() => select(option.value)}
                        className={`relative z-10 flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[var(--blossom-accent,#f472b6)] disabled:cursor-not-allowed disabled:opacity-40 ${sizes[size]} ${fullWidth ? 'flex-1' : ''} ${selected ? (variant === 'filled' ? 'text-[var(--blossom-accent-contrast,#fff)]' : 'text-neutral-900 dark:text-white') : 'text-neutral-500 hover:text-neutral-800 dark:hover:text-white'}`}
                    >
                        {option.icon}
                        {option.label}
                    </button>
                )
            })}
        </div>
    )
}

export interface ToggleItem {
    value: string
    label?: string
    icon?: ReactNode
    disabled?: boolean
    /** Accessible name when the item only has an icon. */
    ariaLabel?: string
}

interface ToggleGroupBase {
    items: ToggleItem[]
    size?: 'sm' | 'md' | 'lg'
    /** `outline` draws a border around the group, `ghost` only fills the pressed items. */
    variant?: 'outline' | 'ghost'
    /** Accent color of this component: any CSS color. Without it the component uses `--blossom-accent`, which is pink by default. */
    color?: string
    disabled?: boolean
    /** Accessible name of the group. */
    label?: string
}

export interface ToggleGroupSingleProps extends ToggleGroupBase {
    /** `single` lets one item be pressed at a time, `multiple` lets any number be pressed. */
    type?: 'single'
    value?: string | null
    defaultValue?: string | null
    onChange?: (value: string | null) => void
}

export interface ToggleGroupMultipleProps extends ToggleGroupBase {
    type: 'multiple'
    value?: string[]
    defaultValue?: string[]
    onChange?: (value: string[]) => void
}

export type ToggleGroupProps = ToggleGroupSingleProps | ToggleGroupMultipleProps

const toList = (value: string | string[] | null | undefined) => (Array.isArray(value) ? value : value ? [value] : [])

/** A row of toggle buttons. Unlike the segmented control they can all be off, or several on, such as bold and italic. */
export const ToggleGroup = (props: ToggleGroupProps) => {
    const { items, size = 'md', variant = 'outline', color, disabled = false, label } = props
    const [internal, setInternal] = useState<string[]>(() => toList(props.defaultValue))
    const pressed = props.value === undefined ? internal : toList(props.value)
    const buttons = useRef<(HTMLButtonElement | null)[]>([])

    const toggle = (item: string) => {
        const isOn = pressed.includes(item)
        const next = props.type === 'multiple' ? (isOn ? pressed.filter((entry) => entry !== item) : [...pressed, item]) : isOn ? [] : [item]
        if (props.value === undefined) setInternal(next)
        if (props.type === 'multiple') props.onChange?.(next)
        else props.onChange?.(next[0] ?? null)
    }

    const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        const index = buttons.current.findIndex((button) => button === document.activeElement)
        if (index < 0) return
        let next = index
        if (event.key === 'ArrowRight') next = nextEnabled(items, index, 1)
        else if (event.key === 'ArrowLeft') next = nextEnabled(items, index, -1)
        else if (event.key === 'Home') next = nextEnabled(items, -1, 1)
        else if (event.key === 'End') next = nextEnabled(items, items.length, -1)
        else return
        event.preventDefault()
        buttons.current[next]?.focus()
    }

    return (
        <div
            role='group'
            aria-label={label}
            onKeyDown={onKeyDown}
            style={accentStyle(color)}
            className={`inline-flex max-w-full overflow-x-auto rounded-xl ${variant === 'outline' ? 'border border-neutral-300 dark:border-neutral-700' : 'gap-1'} ${disabled ? 'pointer-events-none opacity-60' : ''}`}
        >
            {items.map((item, index) => {
                const on = pressed.includes(item.value)
                return (
                    <button
                        key={item.value}
                        ref={(element) => { buttons.current[index] = element }}
                        type='button'
                        aria-pressed={on}
                        aria-label={item.ariaLabel}
                        disabled={item.disabled}
                        onClick={() => toggle(item.value)}
                        className={`flex items-center justify-center gap-2 whitespace-nowrap font-medium outline-none transition-colors focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-[var(--blossom-accent,#f472b6)] disabled:cursor-not-allowed disabled:opacity-40 ${sizes[size]} ${variant === 'outline' ? 'first:rounded-l-[11px] last:rounded-r-[11px] [&:not(:first-child)]:border-l [&:not(:first-child)]:border-neutral-300 dark:[&:not(:first-child)]:border-neutral-700' : 'rounded-xl'} ${on ? 'bg-[color-mix(in_srgb,var(--blossom-accent,#f472b6)_18%,transparent)] text-[color-mix(in_srgb,var(--blossom-accent,#f472b6)_85%,black)] dark:text-[var(--blossom-accent,#f472b6)]' : 'text-neutral-600 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800'}`}
                    >
                        {item.icon}
                        {item.label}
                    </button>
                )
            })}
        </div>
    )
}
