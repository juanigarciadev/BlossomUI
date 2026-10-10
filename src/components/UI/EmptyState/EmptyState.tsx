import type { ReactNode } from 'react'
import { accentStyle } from '../accent'

export interface EmptyStateProps {
    /** Accent color of this component: any CSS color. Without it the component uses `--blossom-accent`, which is pink by default. */
    color?: string
    title: string
    description?: ReactNode
    /** Illustration or icon shown above the title. */
    icon?: ReactNode
    /** Button or link that suggests what to do next. */
    action?: ReactNode
    /** Draw a dashed border around the state. */
    bordered?: boolean
}

export const EmptyState = ({ color, title, description, icon, action, bordered = false }: EmptyStateProps) => (
    <div className={`flex w-full flex-col items-center gap-3 px-6 py-10 text-center ${bordered ? 'rounded-2xl border-2 border-dashed border-neutral-300 dark:border-neutral-700' : ''}`} style={accentStyle(color)}>
        {icon && <div className='grid h-12 w-12 place-items-center rounded-full bg-[color-mix(in_srgb,var(--blossom-accent,#f472b6)_20%,transparent)] text-[var(--blossom-accent,#f472b6)]'>{icon}</div>}
        <h3 className='text-lg font-medium text-neutral-900 dark:text-white'>{title}</h3>
        {description && <p className='max-w-sm text-sm text-neutral-600 dark:text-neutral-300'>{description}</p>}
        {action && <div className='pt-2'>{action}</div>}
    </div>
)
