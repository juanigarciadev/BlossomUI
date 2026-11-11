import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState, type CSSProperties, type KeyboardEvent, type PointerEvent } from 'react'
import { createPortal } from 'react-dom'
import { accentStyle } from '../accent'

export interface ColorPickerLabels {
    /** Accessible name of the panel. */
    choose: string
    /** Accessible name of the area that sets saturation and brightness. */
    area: string
    hue: string
    hex: string
}

const defaultLabels: ColorPickerLabels = { choose: 'Choose a color', area: 'Saturation and brightness', hue: 'Hue', hex: 'Hex color' }

export interface ColorPickerProps {
    /** Texts of the component. Pass only the ones you want to change, for example to translate it. */
    labels?: Partial<ColorPickerLabels>
    /** Controlled color as a hex string, for example `#f472b6`. Use together with `onChange`. */
    value?: string
    /** Initial color when the picker is not controlled. */
    defaultValue?: string
    /** Called with the color as `#rrggbb`. */
    onChange?: (color: string) => void
    label?: string
    /** Helper text shown under the field. */
    hint?: string
    /** Error message. It is shown in red under the field. */
    error?: string
    /** Ready-made colors shown under the picker. */
    presets?: string[]
    /** Show the panel in the page instead of in a popover opened by a field. */
    inline?: boolean
    /** Show the area for saturation and brightness. Turn it off for a compact picker with only the hue bar, the hex field and the presets. */
    area?: boolean
    disabled?: boolean
}

interface Hsv {
    h: number
    s: number
    v: number
}

const clamp = (number: number, min = 0, max = 1) => Math.min(max, Math.max(min, number))

const hexToRgb = (hex: string): [number, number, number] | null => {
    const clean = hex.trim().replace('#', '')
    const full = clean.length === 3 ? clean.split('').map((char) => char + char).join('') : clean
    if (!/^[0-9a-f]{6}$/i.test(full)) return null
    return [0, 2, 4].map((index) => parseInt(full.slice(index, index + 2), 16)) as [number, number, number]
}

const rgbToHex = (r: number, g: number, b: number) => `#${[r, g, b].map((channel) => Math.round(channel).toString(16).padStart(2, '0')).join('')}`

const rgbToHsv = ([r, g, b]: [number, number, number]): Hsv => {
    const [red, green, blue] = [r / 255, g / 255, b / 255]
    const max = Math.max(red, green, blue)
    const delta = max - Math.min(red, green, blue)
    let h = 0
    if (delta) {
        if (max === red) h = ((green - blue) / delta) % 6
        else if (max === green) h = (blue - red) / delta + 2
        else h = (red - green) / delta + 4
    }
    return { h: (h * 60 + 360) % 360, s: max === 0 ? 0 : delta / max, v: max }
}

const hsvToHex = ({ h, s, v }: Hsv) => {
    const channel = (offset: number) => {
        const k = (offset + h / 60) % 6
        return (v - v * s * Math.max(0, Math.min(k, 4 - k, 1))) * 255
    }
    return rgbToHex(channel(5), channel(3), channel(1))
}

const toHsv = (hex: string): Hsv => {
    const rgb = hexToRgb(hex)
    return rgb ? rgbToHsv(rgb) : { h: 0, s: 1, v: 1 }
}

const normalize = (hex: string) => {
    const rgb = hexToRgb(hex)
    return rgb ? rgbToHex(...rgb) : null
}

const defaultPresets = ['#f472b6', '#a78bfa', '#60a5fa', '#34d399', '#fbbf24', '#f87171', '#171717', '#e5e5e5']

/** The panel: an area for saturation and brightness, a hue bar, a hex field and ready-made colors. */
const Panel = ({ color, onColor, labels, presets, area: showArea }: { color: string; onColor: (hex: string) => void; labels: ColorPickerLabels; presets: string[]; area: boolean }) => {
    const area = useRef<HTMLDivElement>(null)
    const [hsv, setHsv] = useState<Hsv>(() => toHsv(color))
    const [text, setText] = useState(color)
    const own = useRef(color)

    // Follow the color when the parent changes it. A grey has no hue, so keep the hue the user chose.
    useEffect(() => {
        if (color.toLowerCase() === own.current.toLowerCase()) return
        own.current = color
        setHsv((previous) => {
            const next = toHsv(color)
            return next.s === 0 || next.v === 0 ? { ...next, h: previous.h } : next
        })
        setText(color)
    }, [color])

    const update = (next: Hsv) => {
        const hex = hsvToHex(next)
        own.current = hex
        setHsv(next)
        setText(hex)
        onColor(hex)
    }

    const fromPointer = (event: PointerEvent<HTMLDivElement>) => {
        const rect = area.current?.getBoundingClientRect()
        if (!rect) return
        update({ ...hsv, s: clamp((event.clientX - rect.left) / rect.width), v: 1 - clamp((event.clientY - rect.top) / rect.height) })
    }

    const onAreaKey = (event: KeyboardEvent<HTMLDivElement>) => {
        const step = event.shiftKey ? 0.1 : 0.02
        const moves: Record<string, Partial<Hsv>> = {
            ArrowLeft: { s: clamp(hsv.s - step) },
            ArrowRight: { s: clamp(hsv.s + step) },
            ArrowUp: { v: clamp(hsv.v + step) },
            ArrowDown: { v: clamp(hsv.v - step) },
        }
        if (moves[event.key]) {
            event.preventDefault()
            update({ ...hsv, ...moves[event.key] })
        }
    }

    const commitText = (value: string) => {
        setText(value)
        const hex = normalize(value)
        if (hex) {
            own.current = hex
            setHsv(toHsv(hex))
            onColor(hex)
        }
    }

    const hex = hsvToHex(hsv)

    return (
        <div className='flex w-64 max-w-full flex-col gap-3'>
            {showArea && (
                <div
                    ref={area}
                    role='slider'
                    tabIndex={0}
                    aria-label={labels.area}
                    aria-valuetext={`Saturation ${Math.round(hsv.s * 100)}%, brightness ${Math.round(hsv.v * 100)}%`}
                    aria-valuenow={Math.round(hsv.s * 100)}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    onPointerDown={(event) => {
                        event.currentTarget.setPointerCapture(event.pointerId)
                        fromPointer(event)
                    }}
                    onPointerMove={(event) => event.buttons === 1 && fromPointer(event)}
                    onKeyDown={onAreaKey}
                    style={{ backgroundColor: `hsl(${hsv.h} 100% 50%)`, backgroundImage: 'linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, transparent)' }}
                    className='relative h-40 w-full cursor-crosshair touch-none rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-[var(--blossom-accent,#f472b6)] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-900'
                >
                    <span
                        aria-hidden='true'
                        style={{ left: `${hsv.s * 100}%`, top: `${(1 - hsv.v) * 100}%`, backgroundColor: hex }}
                        className='pointer-events-none absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow-[0_0_0_1px_rgba(0,0,0,0.3)]'
                    />
                </div>
            )}
            <input
                type='range'
                min={0}
                max={360}
                value={Math.round(hsv.h)}
                aria-label={labels.hue}
                onChange={(event) => update({ ...hsv, h: Number(event.target.value) })}
                style={{ backgroundImage: 'linear-gradient(to right, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00)', '--thumb': `hsl(${hsv.h} 100% 50%)` } as CSSProperties}
                className='h-3 w-full cursor-pointer appearance-none rounded-full outline-none focus-visible:ring-2 focus-visible:ring-[var(--blossom-accent,#f472b6)] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-900 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-[3px] [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:bg-[var(--thumb)] [&::-moz-range-thumb]:shadow-[0_0_0_1px_rgba(0,0,0,0.35),0_1px_3px_rgba(0,0,0,0.45)] [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-[3px] [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:bg-[var(--thumb)] [&::-webkit-slider-thumb]:shadow-[0_0_0_1px_rgba(0,0,0,0.35),0_1px_3px_rgba(0,0,0,0.45)]'
            />
            <div className='flex items-center gap-2'>
                <span aria-hidden='true' style={{ backgroundColor: hex }} className='h-9 w-9 shrink-0 rounded-lg border border-neutral-300 dark:border-neutral-600' />
                <input
                    value={text}
                    aria-label={labels.hex}
                    aria-invalid={!normalize(text)}
                    spellCheck={false}
                    maxLength={7}
                    onChange={(event) => commitText(event.target.value)}
                    onBlur={() => setText(hex)}
                    className={`w-full rounded-xl border bg-transparent px-3 py-2 font-mono text-sm uppercase outline-none focus:ring-2 ${normalize(text) ? 'border-neutral-300 text-neutral-900 focus:border-[var(--blossom-accent,#f472b6)] focus:ring-[color-mix(in_srgb,var(--blossom-accent,#f472b6)_30%,transparent)] dark:border-neutral-700 dark:text-white' : 'border-red-500 text-red-700 focus:ring-red-500/30 dark:text-red-400'}`}
                />
            </div>
            {presets.length > 0 && (
                <div className='flex flex-wrap gap-2'>
                    {presets.map((preset) => (
                        <button
                            key={preset}
                            type='button'
                            aria-label={preset}
                            aria-pressed={normalize(preset) === hex}
                            onClick={() => commitText(preset)}
                            style={{ backgroundColor: preset }}
                            className={`h-6 w-6 rounded-lg border outline-none focus-visible:ring-2 focus-visible:ring-[var(--blossom-accent,#f472b6)] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-900 ${normalize(preset) === hex ? 'border-neutral-900 ring-2 ring-neutral-900 ring-offset-1 dark:border-white dark:ring-white dark:ring-offset-neutral-900' : 'border-black/15 dark:border-white/20'}`}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

/** A field that opens a color panel. The value is always a `#rrggbb` string. */
export const ColorPicker = ({ labels, value, defaultValue = '#f472b6', onChange, label, hint, error, presets = defaultPresets, inline = false, area = true, disabled = false }: ColorPickerProps) => {
    const id = useId()
    const text = { ...defaultLabels, ...labels }
    const trigger = useRef<HTMLButtonElement>(null)
    const panel = useRef<HTMLDivElement>(null)
    const [internal, setInternal] = useState(normalize(defaultValue) ?? '#f472b6')
    const color = normalize(value ?? internal) ?? internal
    const [open, setOpen] = useState(false)
    const [box, setBox] = useState<{ top: number; left: number } | null>(null)

    const change = (hex: string) => {
        if (value === undefined) setInternal(hex)
        onChange?.(hex)
    }

    const close = useCallback((restoreFocus = true) => {
        setOpen(false)
        if (restoreFocus) trigger.current?.focus()
    }, [])

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
        const onResize = () => close(false)
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
        window.addEventListener('resize', onResize)
        window.addEventListener('scroll', onScroll, true)
        return () => {
            document.removeEventListener('mousedown', onPointer)
            document.removeEventListener('keydown', onEscape, true)
            window.removeEventListener('resize', onResize)
            window.removeEventListener('scroll', onScroll, true)
        }
    }, [open, close])

    // Focus the area when the panel opens.
    useEffect(() => {
        if (open && box) panel.current?.querySelector<HTMLElement>('[role="slider"], input[type="range"]')?.focus({ preventScroll: true })
    }, [open, box])

    if (inline) {
        return (
            <div className='flex w-fit flex-col gap-2'>
                {label && <span className='text-sm font-medium text-neutral-800 dark:text-white'>{label}</span>}
                <Panel color={color} onColor={change} labels={text} presets={presets} area={area} />
            </div>
        )
    }

    return (
        <div className='flex w-full flex-col gap-1'>
            {label && <label htmlFor={id} className='text-sm font-medium text-neutral-800 dark:text-white'>{label}</label>}
            <button
                ref={trigger}
                id={id}
                type='button'
                disabled={disabled}
                aria-haspopup='dialog'
                aria-expanded={open}
                aria-invalid={Boolean(error)}
                aria-describedby={error ?? hint ? `${id}-message` : undefined}
                onClick={() => (open ? close(false) : setOpen(true))}
                className={`flex w-full items-center gap-3 rounded-xl border bg-transparent px-3 py-2.5 text-left text-sm outline-none focus:border-[var(--blossom-accent,#f472b6)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--blossom-accent,#f472b6)_30%,transparent)] disabled:cursor-not-allowed disabled:opacity-60 ${error ? 'border-red-500' : 'border-neutral-300 dark:border-neutral-700'}`}
            >
                <span aria-hidden='true' style={{ backgroundColor: color }} className='h-5 w-5 shrink-0 rounded-md border border-black/15 dark:border-white/20' />
                <span className='font-mono uppercase text-neutral-900 dark:text-white'>{color}</span>
            </button>
            {(error ?? hint) && <span id={`${id}-message`} className={`text-xs ${error ? 'text-red-700 dark:text-red-400' : 'text-neutral-500'}`}>{error ?? hint}</span>}
            {open && createPortal(
                <div
                    ref={panel}
                    role='dialog'
                    aria-label={text.choose}
                    style={accentStyle(undefined, { position: 'fixed', top: box?.top ?? 0, left: box?.left ?? 0, visibility: box ? 'visible' : 'hidden' })}
                    className='z-[80] rounded-xl border border-neutral-200 bg-white p-3 shadow-lg dark:border-neutral-700 dark:bg-neutral-900'
                >
                    <Panel color={color} onColor={change} labels={text} presets={presets} area={area} />
                </div>,
                document.body
            )}
        </div>
    )
}
