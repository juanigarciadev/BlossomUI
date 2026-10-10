import { Fragment, type ReactNode } from 'react'

export type KbdColor = 'default' | 'dark' | 'pink' | 'purple' | 'blue' | 'green' | 'yellow' | 'red'

export interface KbdProps {
    children: ReactNode
    /** Color of the key. `default` is a neutral gray. */
    color?: KbdColor
    /** Adds a thicker bottom border so the key looks pressable. */
    relief?: boolean
    /** Highlights the key, useful to show that it is being pressed. Uses the color of the key, or pink for `default`. */
    active?: boolean
}

const idle: Record<KbdColor, string> = {
    default: 'border-neutral-400 bg-neutral-200 text-neutral-900 dark:border-neutral-400 dark:bg-neutral-600 dark:text-white',
    dark: 'border-neutral-900 bg-neutral-800 text-white dark:border-neutral-300 dark:bg-white dark:text-neutral-900',
    pink: 'border-pink-300 bg-pink-100 text-pink-900 dark:border-pink-700 dark:bg-pink-950 dark:text-pink-200',
    purple: 'border-purple-300 bg-purple-100 text-purple-900 dark:border-purple-700 dark:bg-purple-950 dark:text-purple-200',
    blue: 'border-blue-300 bg-blue-100 text-blue-900 dark:border-blue-700 dark:bg-blue-950 dark:text-blue-200',
    green: 'border-green-300 bg-green-100 text-green-900 dark:border-green-700 dark:bg-green-950 dark:text-green-200',
    yellow: 'border-yellow-400 bg-yellow-100 text-yellow-900 dark:border-yellow-600 dark:bg-yellow-950 dark:text-yellow-200',
    red: 'border-red-300 bg-red-100 text-red-900 dark:border-red-700 dark:bg-red-950 dark:text-red-200',
}

// Pressed keys are filled with the color, so they stand out from the idle ones.
const pressed: Record<KbdColor, string> = {
    default: 'border-pink-500 bg-pink-400 text-white dark:border-pink-300 dark:bg-pink-500',
    dark: 'border-neutral-900 bg-neutral-950 text-white dark:border-white dark:bg-neutral-200 dark:text-neutral-900',
    pink: 'border-pink-600 bg-pink-400 text-white dark:border-pink-300 dark:bg-pink-500',
    purple: 'border-purple-700 bg-purple-500 text-white dark:border-purple-300 dark:bg-purple-500',
    blue: 'border-blue-700 bg-blue-500 text-white dark:border-blue-300 dark:bg-blue-500',
    green: 'border-green-700 bg-green-500 text-white dark:border-green-300 dark:bg-green-500',
    yellow: 'border-yellow-600 bg-yellow-400 text-yellow-950 dark:border-yellow-300 dark:bg-yellow-400',
    red: 'border-red-700 bg-red-500 text-white dark:border-red-300 dark:bg-red-500',
}

export const Kbd = ({ children, color = 'default', relief = false, active = false }: KbdProps) => (
    <kbd
        className={`select-none rounded-xl border px-2 py-1.5 text-sm transition-colors ${relief ? 'border-b-4' : ''} ${active ? pressed[color] : idle[color]}`}
    >
        {children}
    </kbd>
)

export interface KbdShortcutProps {
    keys: string[]
    color?: KbdColor
    relief?: boolean
}

/** Renders a keyboard shortcut such as Ctrl + K. */
export const KbdShortcut = ({ keys, color = 'default', relief = false }: KbdShortcutProps) => (
    <span className='flex items-center gap-1'>
        {keys.map((key, index) => (
            <Fragment key={key}>
                {index > 0 && <span className='text-neutral-500'>+</span>}
                <Kbd color={color} relief={relief}>{key}</Kbd>
            </Fragment>
        ))}
    </span>
)
