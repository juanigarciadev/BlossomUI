import { useState, type ReactNode } from 'react'
import { readableOn } from '../accent'

export type BannerColor = 'default' | 'dark' | 'blue' | 'green' | 'yellow' | 'red'

export interface BannerProps {
    /** Accessible name of the region. */
    label?: string
    /** Accessible name of the close button. */
    dismissLabel?: string
    children: ReactNode
    /** Icon shown inside the round badge. */
    icon?: ReactNode
    /** Color of the banner: a preset, `accent` for the brand color (`--blossom-accent`) or any CSS color such as `#0f766e`. */
    color?: BannerColor | (string & {})
    /** Adds a close button; the banner hides itself when it is pressed. */
    dismissible?: boolean
    onDismiss?: () => void
}

const presets: Record<BannerColor, { box: string; text: string; icon: string; close: string }> = {
    default: {
        box: 'border-y border-neutral-300 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800',
        text: 'text-neutral-500 dark:text-neutral-400',
        icon: 'bg-neutral-200 text-neutral-600 dark:bg-neutral-700 dark:text-neutral-400',
        close: 'text-neutral-500 hover:bg-neutral-200 hover:text-neutral-800 dark:hover:bg-neutral-700 dark:hover:text-white',
    },
    dark: {
        box: 'bg-neutral-900 dark:bg-neutral-700',
        text: 'text-white',
        icon: 'bg-white/15 text-white',
        close: 'text-white/80 hover:bg-white/15 hover:text-white',
    },
    blue: { box: 'bg-blue-600', text: 'text-white', icon: 'bg-white/15 text-white', close: 'text-white/80 hover:bg-white/15 hover:text-white' },
    green: { box: 'bg-green-600', text: 'text-white', icon: 'bg-white/15 text-white', close: 'text-white/80 hover:bg-white/15 hover:text-white' },
    red: { box: 'bg-red-600', text: 'text-white', icon: 'bg-white/15 text-white', close: 'text-white/80 hover:bg-white/15 hover:text-white' },
    yellow: { box: 'bg-yellow-400', text: 'text-neutral-900', icon: 'bg-black/10 text-neutral-900', close: 'text-neutral-900/70 hover:bg-black/10 hover:text-neutral-900' },
}

// Custom colors fill the banner and the text takes the color that reads better on top of it.
const custom = { box: '', text: '', icon: 'bg-black/15', close: 'opacity-80 hover:bg-black/15 hover:opacity-100' }

export const Banner = ({ label = 'Announcement', dismissLabel = 'Dismiss banner', children, icon, color = 'default', dismissible = true, onDismiss }: BannerProps) => {
    const [visible, setVisible] = useState(true)
    if (!visible) return null

    const preset = color in presets ? presets[color as BannerColor] : null
    const paint = color === 'accent' ? 'var(--blossom-accent,#f472b6)' : color
    const style = preset ? undefined : { backgroundColor: paint, color: readableOn(paint) }
    const look = preset ?? custom

    return (
        <div role='region' aria-label={label} className={`relative flex w-full items-center justify-center gap-2 p-6 ${look.box}`} style={style}>
            {icon && <span className={`rounded-full p-1.5 ${look.icon}`}>{icon}</span>}
            <p className={look.text}>{children}</p>
            {dismissible && (
                <button
                    type='button'
                    aria-label={dismissLabel}
                    onClick={() => {
                        setVisible(false)
                        onDismiss?.()
                    }}
                    className={`absolute right-4 rounded-lg p-2 ${look.close}`}
                >
                    <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' aria-hidden='true'><path fill='currentColor' d='m16.192 6.344l-4.243 4.242l-4.242-4.242l-1.414 1.414L10.535 12l-4.242 4.242l1.414 1.414l4.242-4.242l4.243 4.242l1.414-1.414L13.364 12l4.242-4.242z' /></svg>
                </button>
            )}
        </div>
    )
}
