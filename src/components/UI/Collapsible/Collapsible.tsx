import { useId, useState, type ReactNode } from 'react'
import { accentStyle } from '../accent'

export interface CollapsibleProps {
    /** What the user presses to open or close the content. */
    title: ReactNode
    /** Small text under the title. */
    description?: ReactNode
    /** Element shown before the title, for example an icon. */
    icon?: ReactNode
    children: ReactNode
    /** Controlled state. Use together with `onOpenChange`. */
    open?: boolean
    /** Initial state when the component is not controlled. */
    defaultOpen?: boolean
    onOpenChange?: (open: boolean) => void
    /** `plain` has no frame, `bordered` draws a card around it. */
    variant?: 'plain' | 'bordered'
    /** Accent color of this component: any CSS color. Without it the component uses `--blossom-accent`, which is pink by default. */
    color?: string
    disabled?: boolean
    className?: string
}

/** One section that opens and closes, with a smooth height animation. It is an Accordion with a single item. */
export const Collapsible = ({ title, description, icon, children, open, defaultOpen = false, onOpenChange, variant = 'bordered', color, disabled = false, className = '' }: CollapsibleProps) => {
    const id = useId()
    const [internal, setInternal] = useState(defaultOpen)
    const isOpen = open ?? internal

    const toggle = () => {
        if (disabled) return
        if (open === undefined) setInternal(!isOpen)
        onOpenChange?.(!isOpen)
    }

    return (
        <div style={accentStyle(color)} className={`w-full ${variant === 'bordered' ? 'rounded-xl border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-900' : ''} ${className}`}>
            <button
                type='button'
                id={`${id}-trigger`}
                aria-expanded={isOpen}
                aria-controls={`${id}-content`}
                disabled={disabled}
                onClick={toggle}
                className={`flex w-full items-center gap-3 rounded-xl p-4 text-left outline-none focus-visible:ring-2 focus-visible:ring-[var(--blossom-accent,#f472b6)] disabled:cursor-not-allowed disabled:opacity-50 ${variant === 'plain' ? 'px-0' : ''}`}
            >
                {icon && <span className='shrink-0 text-neutral-500'>{icon}</span>}
                <span className='flex min-w-0 flex-1 flex-col'>
                    <span className='font-medium text-neutral-900 dark:text-white'>{title}</span>
                    {description && <span className='text-sm text-neutral-500'>{description}</span>}
                </span>
                <svg className={`h-4 w-4 shrink-0 text-neutral-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'><path strokeLinecap='round' strokeLinejoin='round' d='m6 9 6 6 6-6' /></svg>
            </button>
            <div
                id={`${id}-content`}
                role='region'
                aria-labelledby={`${id}-trigger`}
                className={`grid transition-[grid-template-rows,visibility] duration-200 ease-out motion-reduce:transition-none ${isOpen ? 'visible grid-rows-[1fr]' : 'invisible grid-rows-[0fr]'}`}
            >
                <div className='min-h-0 overflow-hidden'>
                    <div className={`pb-4 text-sm text-neutral-600 dark:text-neutral-300 ${variant === 'plain' ? '' : 'px-4'}`}>{children}</div>
                </div>
            </div>
        </div>
    )
}
