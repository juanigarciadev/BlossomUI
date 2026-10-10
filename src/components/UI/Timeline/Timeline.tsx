import type { ReactNode } from 'react'
import { accentStyle } from '../accent'

export interface TimelineItem {
    title: string
    /** Date or time of the event. */
    date: string
    description?: string
    /** Icon shown in the marker when the variant is `icons`. */
    icon?: ReactNode
    /** Pending events are shown dimmed. */
    pending?: boolean
}

export interface TimelineProps {
    /** Accent color of this component: any CSS color. Without it the component uses `--blossom-accent`, which is pink by default. */
    color?: string
    items: TimelineItem[]
    /** `dots` is a simple marker, `icons` uses the icon of each item and `cards` wraps every event in a card. */
    variant?: 'dots' | 'icons' | 'cards'
}

export const Timeline = ({ color, items, variant = 'dots' }: TimelineProps) => {
    const icons = variant === 'icons'
    const cards = variant === 'cards'

    return (
        <ol className={`relative border-l border-neutral-300 dark:border-neutral-700 ${icons ? 'ml-4' : 'ml-3'}`} style={accentStyle(color)}>
            {items.map((item, index) => {
                const last = index === items.length - 1
                const marker = icons ? (
                    <span className={`absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full ring-4 ring-white dark:ring-[#222222] ${item.pending ? 'bg-neutral-200 text-neutral-500 dark:bg-neutral-700' : 'bg-[color-mix(in_srgb,var(--blossom-accent,#f472b6)_18%,transparent)] text-[color-mix(in_srgb,var(--blossom-accent,#f472b6)_85%,black)] dark:bg-[color-mix(in_srgb,var(--blossom-accent,#f472b6)_20%,transparent)]'}`}>
                        {item.icon}
                    </span>
                ) : (
                    <span className={`absolute -left-1.5 h-3 w-3 rounded-full border border-white dark:border-[#222222] ${cards ? 'mt-5' : 'mt-1.5'} ${item.pending ? 'bg-neutral-400 dark:bg-neutral-600' : 'bg-[var(--blossom-accent,#f472b6)]'}`} />
                )

                const body = (
                    <>
                        <div className='flex items-center justify-between gap-4'>
                            <h3 className={`font-medium ${item.pending ? 'text-neutral-500' : 'text-neutral-900 dark:text-white'}`}>{item.title}</h3>
                            <time className='text-sm text-neutral-500'>{item.date}</time>
                        </div>
                        {item.description && <p className='text-sm text-neutral-600 dark:text-neutral-300'>{item.description}</p>}
                    </>
                )

                return (
                    <li key={`${item.title}-${index}`} className={`${icons ? 'ml-8' : 'ml-6'} ${last ? '' : cards ? 'mb-6' : 'mb-8'}`}>
                        {marker}
                        {cards ? (
                            <div className='flex flex-col gap-1 rounded-xl border border-neutral-300 bg-neutral-200 bg-opacity-40 p-4 dark:border-neutral-700 dark:bg-neutral-800'>{body}</div>
                        ) : (
                            <div className='flex flex-col gap-1'>{body}</div>
                        )}
                    </li>
                )
            })}
        </ol>
    )
}
