import { useRef, useState, type KeyboardEvent, type PointerEvent, type ReactNode } from 'react'
import { accentStyle } from '../accent'

export interface ResizablePanel {
    id: string
    content: ReactNode
    /** Starting size, as a percentage of the space. Panels without it share what is left. */
    defaultSize?: number
    /** Smallest size, as a percentage. */
    minSize?: number
    /** Largest size, as a percentage. */
    maxSize?: number
}

export interface ResizablePanelsProps {
    panels: ResizablePanel[]
    /** `horizontal` puts the panels side by side, `vertical` stacks them. */
    direction?: 'horizontal' | 'vertical'
    /** Called with the size of every panel, in percentage, while the user resizes. */
    onResize?: (sizes: number[]) => void
    /** Show a small grip in the middle of each handle. */
    withHandle?: boolean
    /** Accent color of the handle when it is used: any CSS color. Without it the component uses `--blossom-accent`. */
    color?: string
    /** Accessible name of the handles. */
    handleLabel?: string
    /** Give it a height, for example `h-72`. The panels fill it. */
    className?: string
}

const STEP = 2

/** Initial sizes: the ones that were given, and the rest of the space shared by the other panels. */
const initialSizes = (panels: ResizablePanel[]) => {
    const given = panels.reduce((sum, panel) => sum + (panel.defaultSize ?? 0), 0)
    const free = panels.filter((panel) => panel.defaultSize === undefined).length
    return panels.map((panel) => panel.defaultSize ?? Math.max(0, (100 - given) / free))
}

/** Panels separated by handles that can be dragged, or moved with the arrow keys. */
export const ResizablePanels = ({ panels, direction = 'horizontal', onResize, withHandle = true, color, handleLabel = 'Resize', className = '' }: ResizablePanelsProps) => {
    const box = useRef<HTMLDivElement>(null)
    const drag = useRef<{ index: number; pointer: number; sizes: number[] } | null>(null)
    const [sizes, setSizes] = useState(() => initialSizes(panels))
    const [dragging, setDragging] = useState<number | null>(null)
    const horizontal = direction === 'horizontal'

    /** Move the border between panel `index` and the next one by `delta` percent, respecting both limits. */
    const shift = (base: number[], index: number, delta: number) => {
        const before = panels[index]
        const after = panels[index + 1]
        const low = Math.max((before.minSize ?? 5) - base[index], base[index + 1] - (after.maxSize ?? 100))
        const high = Math.min((before.maxSize ?? 100) - base[index], base[index + 1] - (after.minSize ?? 5))
        const moved = Math.min(Math.max(delta, low), Math.max(low, high))
        const next = [...base]
        next[index] = base[index] + moved
        next[index + 1] = base[index + 1] - moved
        return next
    }

    const apply = (next: number[]) => {
        setSizes(next)
        onResize?.(next)
    }

    const onPointerDown = (index: number) => (event: PointerEvent<HTMLDivElement>) => {
        event.preventDefault()
        event.currentTarget.setPointerCapture(event.pointerId)
        drag.current = { index, pointer: horizontal ? event.clientX : event.clientY, sizes }
        setDragging(index)
    }

    const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
        const state = drag.current
        const rect = box.current?.getBoundingClientRect()
        if (!state || !rect) return
        const total = horizontal ? rect.width : rect.height
        const delta = (((horizontal ? event.clientX : event.clientY) - state.pointer) / total) * 100
        apply(shift(state.sizes, state.index, delta))
    }

    const endDrag = () => {
        drag.current = null
        setDragging(null)
    }

    const onKeyDown = (index: number) => (event: KeyboardEvent<HTMLDivElement>) => {
        const back = horizontal ? 'ArrowLeft' : 'ArrowUp'
        const forward = horizontal ? 'ArrowRight' : 'ArrowDown'
        if (event.key === back || event.key === forward) {
            event.preventDefault()
            apply(shift(sizes, index, (event.key === forward ? 1 : -1) * STEP * (event.shiftKey ? 5 : 1)))
        } else if (event.key === 'Home') {
            event.preventDefault()
            apply(shift(sizes, index, -100))
        } else if (event.key === 'End') {
            event.preventDefault()
            apply(shift(sizes, index, 100))
        }
    }

    return (
        <div ref={box} style={accentStyle(color)} className={`flex w-full overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-700 ${horizontal ? 'flex-row' : 'flex-col'} ${dragging !== null ? 'select-none' : ''} ${className}`}>
            {panels.map((panel, index) => (
                <div key={panel.id} className='contents'>
                    <div style={{ flexBasis: `${sizes[index]}%` }} className='min-h-0 min-w-0 grow-0 overflow-auto'>{panel.content}</div>
                    {index < panels.length - 1 && (
                        <div
                            role='separator'
                            tabIndex={0}
                            aria-label={handleLabel}
                            aria-orientation={horizontal ? 'vertical' : 'horizontal'}
                            aria-valuenow={Math.round(sizes[index])}
                            aria-valuemin={panel.minSize ?? 5}
                            aria-valuemax={panel.maxSize ?? 100}
                            onPointerDown={onPointerDown(index)}
                            onPointerMove={onPointerMove}
                            onPointerUp={endDrag}
                            onPointerCancel={endDrag}
                            onKeyDown={onKeyDown(index)}
                            className={`group relative flex shrink-0 touch-none items-center justify-center bg-neutral-200 outline-none transition-colors hover:bg-[var(--blossom-accent,#f472b6)] focus-visible:bg-[var(--blossom-accent,#f472b6)] dark:bg-neutral-700 ${dragging === index ? 'bg-[var(--blossom-accent,#f472b6)]' : ''} ${horizontal ? 'w-px cursor-col-resize' : 'h-px cursor-row-resize'}`}
                        >
                            {/* A wider invisible area makes the one pixel line easy to grab */}
                            <span aria-hidden='true' className={`absolute ${horizontal ? '-inset-x-1.5 inset-y-0' : '-inset-y-1.5 inset-x-0'}`} />
                            {withHandle && (
                                <span aria-hidden='true' className={`z-10 flex items-center justify-center rounded-md border border-neutral-300 bg-white shadow-sm dark:border-neutral-600 dark:bg-neutral-800 ${horizontal ? 'h-6 w-3' : 'h-3 w-6'}`}>
                                    <span className={`flex gap-0.5 ${horizontal ? 'flex-col' : 'flex-row'}`}>
                                        {[0, 1, 2].map((dot) => <span key={dot} className='h-0.5 w-0.5 rounded-full bg-neutral-400' />)}
                                    </span>
                                </span>
                            )}
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}
