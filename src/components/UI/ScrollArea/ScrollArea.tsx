import { useCallback, useEffect, useRef, useState, type PointerEvent, type ReactNode } from 'react'
import { accentStyle } from '../accent'

export interface ScrollAreaProps {
    children: ReactNode
    /** Which directions scroll. */
    orientation?: 'vertical' | 'horizontal' | 'both'
    /** When the bars are visible: `hover` while the pointer is over the area, `scroll` while it moves, `always` all the time. */
    visibility?: 'hover' | 'scroll' | 'always'
    /** Accent color of the bar when it is dragged: any CSS color. Without it the component uses `--blossom-accent`. */
    color?: string
    /** Accessible name of the scrollable region. */
    label?: string
    /** Give it a size here, for example `h-64`. The content scrolls inside it. */
    className?: string
}

interface Bar {
    /** Size of the thumb and distance from the start, as a share of the track. */
    size: number
    start: number
}

const MIN_THUMB = 0.08

/** A scrollable box with slim bars drawn by the library, so they look the same in every browser and system. */
export const ScrollArea = ({ children, orientation = 'vertical', visibility = 'hover', color, label, className = '' }: ScrollAreaProps) => {
    const viewport = useRef<HTMLDivElement>(null)
    const content = useRef<HTMLDivElement>(null)
    const drag = useRef<{ axis: 'y' | 'x'; pointer: number; scroll: number } | null>(null)
    const idle = useRef<number>()
    const [bars, setBars] = useState<{ y: Bar | null; x: Bar | null }>({ y: null, x: null })
    const [active, setActive] = useState(false)
    const [hover, setHover] = useState(false)

    const measure = useCallback(() => {
        const element = viewport.current
        if (!element) return
        const make = (client: number, total: number, position: number): Bar | null => {
            if (total <= client + 1) return null
            const size = Math.max(client / total, MIN_THUMB)
            return { size, start: (position / (total - client)) * (1 - size) }
        }
        setBars({
            y: orientation === 'horizontal' ? null : make(element.clientHeight, element.scrollHeight, element.scrollTop),
            x: orientation === 'vertical' ? null : make(element.clientWidth, element.scrollWidth, element.scrollLeft),
        })
    }, [orientation])

    useEffect(() => {
        measure()
        const observer = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(measure)
        if (viewport.current) observer?.observe(viewport.current)
        if (content.current) observer?.observe(content.current)
        return () => observer?.disconnect()
    }, [measure])

    useEffect(() => () => window.clearTimeout(idle.current), [])

    const onScroll = () => {
        measure()
        setActive(true)
        window.clearTimeout(idle.current)
        idle.current = window.setTimeout(() => setActive(false), 900)
    }

    const startDrag = (axis: 'y' | 'x') => (event: PointerEvent<HTMLDivElement>) => {
        const element = viewport.current
        if (!element) return
        event.preventDefault()
        event.currentTarget.setPointerCapture(event.pointerId)
        drag.current = { axis, pointer: axis === 'y' ? event.clientY : event.clientX, scroll: axis === 'y' ? element.scrollTop : element.scrollLeft }
        setActive(true)
    }

    const moveDrag = (event: PointerEvent<HTMLDivElement>) => {
        const element = viewport.current
        const state = drag.current
        if (!element || !state) return
        const bar = bars[state.axis]
        if (!bar) return
        const vertical = state.axis === 'y'
        const client = vertical ? element.clientHeight : element.clientWidth
        const total = vertical ? element.scrollHeight : element.scrollWidth
        const delta = (vertical ? event.clientY : event.clientX) - state.pointer
        // Moving the thumb the whole free part of the track scrolls the whole content.
        const scroll = state.scroll + (delta / (client * (1 - bar.size))) * (total - client)
        if (vertical) element.scrollTop = scroll
        else element.scrollLeft = scroll
    }

    const endDrag = () => {
        drag.current = null
        window.clearTimeout(idle.current)
        idle.current = window.setTimeout(() => setActive(false), 900)
    }

    // A click on the empty track scrolls one page towards it.
    const page = (axis: 'y' | 'x') => (event: PointerEvent<HTMLDivElement>) => {
        const element = viewport.current
        if (!element || event.target !== event.currentTarget) return
        const rect = event.currentTarget.getBoundingClientRect()
        const bar = bars[axis]
        if (!bar) return
        const ratio = axis === 'y' ? (event.clientY - rect.top) / rect.height : (event.clientX - rect.left) / rect.width
        const forward = ratio > bar.start + bar.size / 2
        const amount = (axis === 'y' ? element.clientHeight : element.clientWidth) * 0.9 * (forward ? 1 : -1)
        element.scrollBy({ [axis === 'y' ? 'top' : 'left']: amount, behavior: 'smooth' })
    }

    const shown = visibility === 'always' || active || hover || drag.current !== null

    const track = (axis: 'y' | 'x', bar: Bar | null) =>
        bar && (
            <div
                aria-hidden='true'
                onPointerDown={page(axis)}
                className={`absolute z-10 transition-opacity duration-200 ${axis === 'y' ? 'bottom-0 right-0 top-0 w-2.5 p-0.5' : 'bottom-0 left-0 right-0 h-2.5 p-0.5'} ${bars.y && bars.x && axis === 'y' ? 'bottom-2.5' : ''} ${bars.y && bars.x && axis === 'x' ? 'right-2.5' : ''} ${shown ? 'opacity-100' : 'opacity-0'}`}
            >
                <div className='relative h-full w-full'>
                    <div
                        onPointerDown={startDrag(axis)}
                        onPointerMove={moveDrag}
                        onPointerUp={endDrag}
                        onPointerCancel={endDrag}
                        style={axis === 'y' ? { top: `${bar.start * 100}%`, height: `${bar.size * 100}%` } : { left: `${bar.start * 100}%`, width: `${bar.size * 100}%` }}
                        className={`absolute touch-none rounded-full bg-neutral-400/60 hover:bg-neutral-500/80 active:bg-[var(--blossom-accent,#f472b6)] dark:bg-neutral-500/60 dark:hover:bg-neutral-400/80 ${axis === 'y' ? 'left-0 right-0' : 'bottom-0 top-0'}`}
                    />
                </div>
            </div>
        )

    return (
        <div
            style={accentStyle(color)}
            onPointerEnter={() => setHover(true)}
            onPointerLeave={() => setHover(false)}
            className={`relative overflow-hidden rounded-xl ${className}`}
        >
            <div
                ref={viewport}
                role='region'
                aria-label={label}
                tabIndex={0}
                onScroll={onScroll}
                className={`h-full w-full rounded-[inherit] outline-none [-ms-overflow-style:none] [scrollbar-width:none] focus-visible:ring-2 focus-visible:ring-[var(--blossom-accent,#f472b6)] [&::-webkit-scrollbar]:hidden ${orientation === 'vertical' ? 'overflow-x-hidden overflow-y-auto' : orientation === 'horizontal' ? 'overflow-x-auto overflow-y-hidden' : 'overflow-auto'}`}
            >
                <div ref={content} className={orientation === 'vertical' ? '' : 'w-max min-w-full'}>{children}</div>
            </div>
            {track('y', bars.y)}
            {track('x', bars.x)}
        </div>
    )
}
