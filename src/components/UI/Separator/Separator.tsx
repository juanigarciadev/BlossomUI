import type { ReactNode } from 'react'

export interface SeparatorProps {
    orientation?: 'horizontal' | 'vertical'
    /** Line style. */
    variant?: 'solid' | 'dashed' | 'dotted'
    /** Text or element shown in the line, for example "or". Only in horizontal separators. */
    children?: ReactNode
    /** Where the content sits in the line. */
    align?: 'start' | 'center' | 'end'
    /** Use it when the line is only decoration: screen readers skip it. */
    decorative?: boolean
    className?: string
}

const styles = { solid: 'border-solid', dashed: 'border-dashed', dotted: 'border-dotted' }

const line = 'border-neutral-300 dark:border-neutral-700'

/** A thin line that splits content. It can hold a label, such as "or". */
export const Separator = ({ orientation = 'horizontal', variant = 'solid', children, align = 'center', decorative = false, className = '' }: SeparatorProps) => {
    const role = decorative ? { role: 'none' } : { role: 'separator', 'aria-orientation': orientation }

    if (orientation === 'vertical') {
        return <div {...role} className={`inline-block h-full min-h-4 self-stretch border-l ${styles[variant]} ${line} ${className}`} />
    }

    if (children === undefined || children === null || children === false) {
        return <div {...role} className={`w-full border-t ${styles[variant]} ${line} ${className}`} />
    }

    return (
        <div {...role} className={`flex w-full items-center gap-3 text-xs font-medium uppercase tracking-wide text-neutral-500 ${className}`}>
            <span aria-hidden='true' className={`border-t ${styles[variant]} ${line} ${align === 'start' ? 'w-6' : 'flex-1'}`} />
            <span>{children}</span>
            <span aria-hidden='true' className={`border-t ${styles[variant]} ${line} ${align === 'end' ? 'w-6' : 'flex-1'}`} />
        </div>
    )
}
