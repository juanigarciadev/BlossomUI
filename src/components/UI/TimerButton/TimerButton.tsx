import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { accentStyle } from '../accent'

export interface TimerButtonLabels {
    /** Accessible name of the button while it counts. */
    pause: string
    /** Accessible name of the button while it is paused. */
    play: string
    /** Text with the time that is left, for example "4s". */
    remaining: (seconds: number) => string
}

const defaultLabels: TimerButtonLabels = {
    pause: 'Pause the timer',
    play: 'Start the timer',
    remaining: (seconds) => `${seconds}s`,
}

export interface TimerButtonProps {
    /** Texts of the component. Pass only the ones you want to change, for example to translate it. */
    labels?: Partial<TimerButtonLabels>
    /** Milliseconds the bar takes to fill. */
    duration?: number
    /** Called every time the bar is full. Use it to go to the next slide, the next step, to submit... */
    onComplete?: () => void
    /** Start again after it is full. With `false` it stops and waits for the user. */
    loop?: boolean
    /** Controlled state. Use together with `onRunningChange`. */
    running?: boolean
    /** Initial state when the button is not controlled. Autoplay should not start by itself for people who asked for less motion, so check `prefers-reduced-motion` before you pass `true`. */
    defaultRunning?: boolean
    onRunningChange?: (running: boolean) => void
    /** When this value changes the bar starts from zero, for example the number of the current slide. */
    resetKey?: unknown
    /** Show the seconds that are left. */
    showTime?: boolean
    /** Text of the button, for example "Auto". */
    children?: ReactNode
    size?: 'sm' | 'md' | 'lg'
    /** Accent color of the bar: any CSS color. Without it the component uses `--blossom-accent`, which is pink by default. */
    color?: string
    className?: string
}

const sizes = { sm: 'px-3 py-1.5 text-xs', md: 'px-4 py-2 text-sm', lg: 'px-5 py-2.5 text-base' }

const play = (
    <svg className='h-3.5 w-3.5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'><path d='M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z' /></svg>
)

const pause = (
    <svg className='h-3.5 w-3.5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'><rect x='6' y='5' width='4' height='14' rx='1' /><rect x='14' y='5' width='4' height='14' rx='1' /></svg>
)

/** A button with a bar that fills while time passes. When it is full it calls `onComplete`, so it can move a carousel or a tour by itself. Pressing it pauses it. */
export const TimerButton = ({ labels, duration = 5000, onComplete, loop = true, running, defaultRunning = false, onRunningChange, resetKey, showTime = true, children, size = 'md', color, className = '' }: TimerButtonProps) => {
    const text = { ...defaultLabels, ...labels }
    const [internal, setInternal] = useState(defaultRunning)
    const active = running ?? internal
    const bar = useRef<HTMLSpanElement>(null)
    const elapsed = useRef(0)
    const [seconds, setSeconds] = useState(Math.ceil(duration / 1000))

    // The latest callbacks, without restarting the timer every time the parent renders
    const complete = useRef(onComplete)
    const change = useRef(onRunningChange)
    useEffect(() => {
        complete.current = onComplete
        change.current = onRunningChange
    })

    const paint = useCallback((time: number) => {
        if (bar.current) bar.current.style.transform = `scaleX(${Math.min(time / duration, 1)})`
        setSeconds(Math.max(Math.ceil((duration - time) / 1000), 0))
    }, [duration])

    // A new `resetKey` or a new duration starts again from zero.
    useEffect(() => {
        elapsed.current = 0
        paint(0)
    }, [resetKey, duration, paint])

    useEffect(() => {
        if (!active) return
        let frame = 0
        let last = performance.now()
        const tick = (now: number) => {
            // A long gap (a hidden tab) counts as a short one, so the bar never jumps to the end by itself
            elapsed.current += Math.min(now - last, 100)
            last = now
            if (elapsed.current >= duration) {
                elapsed.current = 0
                paint(0)
                complete.current?.()
                if (!loop) {
                    if (running === undefined) setInternal(false)
                    change.current?.(false)
                    return
                }
            } else paint(elapsed.current)
            frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(frame)
    }, [active, duration, loop, paint, running])

    const toggle = () => {
        if (running === undefined) setInternal(!active)
        onRunningChange?.(!active)
    }

    return (
        <button
            type='button'
            aria-pressed={active}
            aria-label={children ? undefined : active ? text.pause : text.play}
            onClick={toggle}
            style={accentStyle(color)}
            className={`group relative flex w-fit select-none items-center justify-center gap-2 overflow-hidden rounded-xl border border-neutral-300 font-medium text-neutral-800 outline-none transition-colors hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-[var(--blossom-accent,#f472b6)] dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 ${sizes[size]} ${className}`}
        >
            {/* The bar grows from the left behind the content */}
            <span
                ref={bar}
                aria-hidden='true'
                className='absolute inset-0 origin-left bg-[color-mix(in_srgb,var(--blossom-accent,#f472b6)_28%,transparent)]'
                style={{ transform: 'scaleX(0)' }}
            />
            <span className='relative flex items-center gap-2'>
                {active ? pause : play}
                {children}
                {showTime && <span className='min-w-[1.5ch] text-right tabular-nums text-neutral-500 dark:text-neutral-400'>{text.remaining(seconds)}</span>}
            </span>
        </button>
    )
}
