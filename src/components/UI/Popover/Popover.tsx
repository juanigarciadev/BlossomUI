import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState, type ReactNode } from 'react'
import { createPortal } from 'react-dom'

export interface PopoverProps {
    /** Content of the button that toggles the popover. */
    trigger: ReactNode
    /** Content of the popover. */
    children: ReactNode
    title?: string
    placement?: 'bottom' | 'top'
    align?: 'start' | 'end'
    /** Width of the panel, as a Tailwind class. */
    width?: string
}

export const Popover = ({ trigger, children, title, placement = 'bottom', align = 'start', width = 'w-72' }: PopoverProps) => {
    const id = useId()
    const button = useRef<HTMLButtonElement>(null)
    const panel = useRef<HTMLDivElement>(null)
    const [open, setOpen] = useState(false)
    const [box, setBox] = useState<{ top: number; left: number } | null>(null)

    const close = useCallback((restoreFocus = true) => {
        setOpen(false)
        if (restoreFocus) button.current?.focus()
    }, [])

    useLayoutEffect(() => {
        if (!open || !button.current || !panel.current) return
        const rect = button.current.getBoundingClientRect()
        const { offsetWidth, offsetHeight } = panel.current
        const left = align === 'end' ? rect.right - offsetWidth : rect.left
        const top = placement === 'top' ? rect.top - offsetHeight - 8 : rect.bottom + 8
        setBox({ top, left: Math.min(Math.max(8, left), window.innerWidth - offsetWidth - 8) })
    }, [open, placement, align])

    useEffect(() => {
        if (!open) {
            setBox(null)
            return
        }
        const onPointer = (event: MouseEvent) => {
            const target = event.target as Node
            if (!panel.current?.contains(target) && !button.current?.contains(target)) close(false)
        }
        const onKey = (event: KeyboardEvent) => event.key === 'Escape' && close()
        const onScroll = () => close(false)
        document.addEventListener('mousedown', onPointer)
        document.addEventListener('keydown', onKey)
        window.addEventListener('resize', onScroll)
        window.addEventListener('scroll', onScroll, true)
        return () => {
            document.removeEventListener('mousedown', onPointer)
            document.removeEventListener('keydown', onKey)
            window.removeEventListener('resize', onScroll)
            window.removeEventListener('scroll', onScroll, true)
        }
    }, [open, close])

    return (
        <>
            <button
                ref={button}
                type='button'
                aria-haspopup='dialog'
                aria-expanded={open}
                aria-controls={open ? id : undefined}
                onClick={() => setOpen((current) => !current)}
                className='flex w-fit select-none items-center justify-center gap-2 rounded-xl border border-neutral-300 px-4 py-2.5 text-sm font-medium text-neutral-800 outline-none transition-colors hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-pink-400 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800'
            >
                {trigger}
            </button>
            {open && createPortal(
                <div
                    ref={panel}
                    id={id}
                    role='dialog'
                    aria-label={title}
                    style={{ position: 'fixed', top: box?.top ?? 0, left: box?.left ?? 0, visibility: box ? 'visible' : 'hidden' }}
                    className={`z-[80] max-w-[calc(100vw-1rem)] rounded-xl border border-neutral-200 bg-white p-4 text-sm text-neutral-600 shadow-lg dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 ${width}`}
                >
                    {title && <h3 className='pb-2 font-medium text-neutral-900 dark:text-white'>{title}</h3>}
                    {children}
                </div>,
                document.body
            )}
        </>
    )
}
