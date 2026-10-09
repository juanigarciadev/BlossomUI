import { Fragment, type ReactNode } from 'react'

export interface KbdProps {
    children: ReactNode
    /** Adds a thicker bottom border so the key looks pressable. */
    relief?: boolean
    /** Highlights the key, useful to show that it is being pressed. */
    active?: boolean
}

export const Kbd = ({ children, relief = false, active = false }: KbdProps) => (
    <kbd
        className={`select-none rounded-lg border px-2 py-1.5 text-sm transition-colors ${relief ? 'border-b-4' : ''} ${active
            ? 'border-pink-400 bg-pink-100 text-pink-900 dark:border-pink-400 dark:bg-pink-900 dark:text-pink-300'
            : 'border-neutral-400 bg-neutral-200 dark:border-neutral-400 dark:bg-neutral-600 dark:text-white'}`}
    >
        {children}
    </kbd>
)

export interface KbdShortcutProps {
    keys: string[]
    relief?: boolean
}

/** Renders a keyboard shortcut such as Ctrl + K. */
export const KbdShortcut = ({ keys, relief = false }: KbdShortcutProps) => (
    <span className='flex items-center gap-1'>
        {keys.map((key, index) => (
            <Fragment key={key}>
                {index > 0 && <span className='text-neutral-500'>+</span>}
                <Kbd relief={relief}>{key}</Kbd>
            </Fragment>
        ))}
    </span>
)
