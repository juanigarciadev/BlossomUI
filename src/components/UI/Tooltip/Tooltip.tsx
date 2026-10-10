import { useEffect, useId, useRef, useState, type ReactNode } from 'react'
import { createPortal } from 'react-dom'

export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right'

export interface TooltipProps {
    /** Text shown inside the tooltip. */
    content: ReactNode
    placement?: TooltipPlacement
    /** Milliseconds to wait before showing it on hover. */
    delay?: number
    /** Show a small arrow that points to the element the tooltip belongs to. */
    arrow?: boolean
    /** Classes of the element that wraps the trigger. It is `inline-flex` by default. */
    className?: string
    /** The element that triggers the tooltip. It receives the hover and focus listeners. */
    children: ReactNode
}

interface Position {
    top: number
    left: number
}

const GAP = 8
const ARROW_GAP = 11

const arrows: Record<TooltipPlacement, string> = {
    top: '-bottom-1 left-1/2 -translate-x-1/2',
    bottom: '-top-1 left-1/2 -translate-x-1/2',
    left: '-right-1 top-1/2 -translate-y-1/2',
    right: '-left-1 top-1/2 -translate-y-1/2',
}

const place = (rect: DOMRect, placement: TooltipPlacement, GAP: number): { position: Position; transform: string } => {
    switch (placement) {
        case 'bottom':
            return { position: { top: rect.bottom + GAP, left: rect.left + rect.width / 2 }, transform: 'translateX(-50%)' }
        case 'left':
            return { position: { top: rect.top + rect.height / 2, left: rect.left - GAP }, transform: 'translate(-100%, -50%)' }
        case 'right':
            return { position: { top: rect.top + rect.height / 2, left: rect.right + GAP }, transform: 'translateY(-50%)' }
        default:
            return { position: { top: rect.top - GAP, left: rect.left + rect.width / 2 }, transform: 'translate(-50%, -100%)' }
    }
}

export const Tooltip = ({ content, placement = 'top', delay = 100, arrow = false, className = 'inline-flex', children }: TooltipProps) => {
    const id = useId()
    const anchor = useRef<HTMLSpanElement>(null)
    const timer = useRef(0)
    const [target, setTarget] = useState<{ position: Position; transform: string } | null>(null)

    const show = () => {
        window.clearTimeout(timer.current)
        timer.current = window.setTimeout(() => {
            if (anchor.current) setTarget(place(anchor.current.getBoundingClientRect(), placement, arrow ? ARROW_GAP : GAP))
        }, delay)
    }

    const hide = () => {
        window.clearTimeout(timer.current)
        setTarget(null)
    }

    // The tooltip is fixed, so it would drift away from its trigger while scrolling.
    useEffect(() => {
        if (!target) return
        const onKey = (event: KeyboardEvent) => event.key === 'Escape' && hide()
        window.addEventListener('scroll', hide, true)
        window.addEventListener('keydown', onKey)
        return () => {
            window.removeEventListener('scroll', hide, true)
            window.removeEventListener('keydown', onKey)
        }
    }, [target])

    useEffect(() => () => window.clearTimeout(timer.current), [])

    return (
        <>
            <span
                ref={anchor}
                aria-describedby={target ? id : undefined}
                onMouseEnter={show}
                onMouseLeave={hide}
                onFocus={show}
                onBlur={hide}
                className={className}
            >
                {children}
            </span>
            {target && createPortal(
                <div
                    id={id}
                    role='tooltip'
                    style={{ position: 'fixed', top: target.position.top, left: target.position.left, transform: target.transform }}
                    className='pointer-events-none z-[90] max-w-xs rounded-lg bg-neutral-900 px-3 py-1.5 text-xs font-medium text-white shadow-lg dark:bg-white dark:text-neutral-900'
                >
                    {content}
                    {arrow && <span aria-hidden='true' className={`absolute h-2 w-2 rotate-45 bg-neutral-900 dark:bg-white ${arrows[placement]}`} />}
                </div>,
                document.body
            )}
        </>
    )
}
