import { useState, type ReactNode } from 'react'

export interface BannerProps {
    children: ReactNode
    /** Icon shown inside the round badge. */
    icon?: ReactNode
    /** Adds a close button; the banner hides itself when it is pressed. */
    dismissible?: boolean
    onDismiss?: () => void
}

export const Banner = ({ children, icon, dismissible = true, onDismiss }: BannerProps) => {
    const [visible, setVisible] = useState(true)
    if (!visible) return null

    return (
        <div role='region' aria-label='Announcement' className='relative flex w-full items-center justify-center gap-2 border-y border-neutral-300 bg-neutral-100 p-6 dark:border-neutral-700 dark:bg-neutral-800'>
            {icon && <span className='rounded-full bg-neutral-200 p-1.5 text-neutral-600 dark:bg-neutral-700 dark:text-neutral-400'>{icon}</span>}
            <p className='text-neutral-500 dark:text-neutral-400'>{children}</p>
            {dismissible && (
                <button
                    type='button'
                    aria-label='Dismiss banner'
                    onClick={() => {
                        setVisible(false)
                        onDismiss?.()
                    }}
                    className='absolute right-4 rounded-lg p-2 text-neutral-500 hover:bg-neutral-200 hover:text-neutral-800 dark:hover:bg-neutral-700 dark:hover:text-white'
                >
                    <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' aria-hidden='true'><path fill='currentColor' d='m16.192 6.344l-4.243 4.242l-4.242-4.242l-1.414 1.414L10.535 12l-4.242 4.242l1.414 1.414l4.242-4.242l4.243 4.242l1.414-1.414L13.364 12l4.242-4.242z' /></svg>
                </button>
            )}
        </div>
    )
}
