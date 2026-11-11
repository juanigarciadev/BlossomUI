import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { accentStyle } from '../accent'

export interface HoverCardProps {
    /** The rich content of the card: an avatar, a bio, a button... Unlike a Tooltip it can be pointed at and used. */
    content: ReactNode
    /** The element that opens the card when it is hovered or focused. */
    children: ReactNode
    /** Preferred side. It flips to the other one when there is no room. */
    placement?: 'top' | 'bottom'
    /** Milliseconds to wait before opening. */
    openDelay?: number
    /** Milliseconds to wait before closing, so the pointer can travel from the trigger to the card. */
    closeDelay?: number
    /** Width of the card in pixels. */
    width?: number
    /** Accessible name of the card. */
    label?: string
    /** Accent color of the card: any CSS color. Without it the component uses `--blossom-accent`. */
    color?: string
    /** Classes of the element that wraps the trigger. It is `inline-flex` by default. */
    className?: string
}

const GAP = 8

/** A card with rich content that appears when you hover or focus a link or an avatar. */
export const HoverCard = ({ content, children, placement = 'bottom', openDelay = 300, closeDelay = 150, width = 288, label, color, className = '' }: HoverCardProps) => {
    const id = useId()
    const trigger = useRef<HTMLSpanElement>(null)
    const card = useRef<HTMLDivElement>(null)
    const timer = useRef<number>()
    const [open, setOpen] = useState(false)
    const [box, setBox] = useState<{ top: number; left: number } | null>(null)

    const show = useCallback(() => {
        window.clearTimeout(timer.current)
        timer.current = window.setTimeout(() => setOpen(true), openDelay)
    }, [openDelay])

    const hide = useCallback((delay = closeDelay) => {
        window.clearTimeout(timer.current)
        timer.current = window.setTimeout(() => setOpen(false), delay)
    }, [closeDelay])

    // The card stays open while the pointer is over it, and closes with Escape.
    const keep = () => window.clearTimeout(timer.current)

    useEffect(() => () => window.clearTimeout(timer.current), [])

    useLayoutEffect(() => {
        if (!open || !trigger.current || !card.current) return
        const rect = trigger.current.getBoundingClientRect()
        const { offsetWidth, offsetHeight } = card.current
        const below = rect.bottom + GAP
        const above = rect.top - offsetHeight - GAP
        const wantsTop = placement === 'top'
        const top = wantsTop ? (above >= 8 ? above : below) : below + offsetHeight > window.innerHeight - 8 && above >= 8 ? above : below
        setBox({ top, left: Math.min(Math.max(8, rect.left + rect.width / 2 - offsetWidth / 2), window.innerWidth - offsetWidth - 8) })
    }, [open, placement])

    useEffect(() => {
        if (!open) {
            setBox(null)
            return
        }
        const onKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setOpen(false)
        }
        const dismiss = () => setOpen(false)
        document.addEventListener('keydown', onKey)
        window.addEventListener('scroll', dismiss, true)
        window.addEventListener('resize', dismiss)
        return () => {
            document.removeEventListener('keydown', onKey)
            window.removeEventListener('scroll', dismiss, true)
            window.removeEventListener('resize', dismiss)
        }
    }, [open])

    return (
        <>
            <span
                ref={trigger}
                aria-describedby={open ? id : undefined}
                onPointerEnter={(event) => event.pointerType === 'mouse' && show()}
                onPointerLeave={(event) => event.pointerType === 'mouse' && hide()}
                onFocus={show}
                onBlur={() => hide()}
                className={`inline-flex ${className}`}
            >
                {children}
            </span>
            {open && createPortal(
                <div
                    ref={card}
                    id={id}
                    role='dialog'
                    aria-label={label}
                    onPointerEnter={keep}
                    onPointerLeave={() => hide()}
                    onFocus={keep}
                    onBlur={() => hide()}
                    style={accentStyle(color, { position: 'fixed', top: box?.top ?? 0, left: box?.left ?? 0, width, visibility: box ? 'visible' : 'hidden' })}
                    className='z-[80] max-w-[calc(100vw-1rem)] rounded-xl border border-neutral-200 bg-white p-4 text-sm text-neutral-700 shadow-lg dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200'
                >
                    {content}
                </div>,
                document.body
            )}
        </>
    )
}
