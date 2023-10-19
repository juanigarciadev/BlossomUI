import React from 'react'

export const Spacebar = () => {
    return (
        <kbd className='text-sm select-none bg-neutral-200 px-2 py-1.5 rounded-lg border border-neutral-400 dark:bg-neutral-600 dark:border-neutral-400' title='Spacebar'>Spacebar</kbd>
    )
}

export const Ctrl = () => {
    return (
        <kbd className='text-sm select-none bg-neutral-200 px-2 py-1.5 rounded-lg border border-neutral-400 dark:bg-neutral-600 dark:border-neutral-400' title='Ctrl'>Ctrl</kbd>
    )
}

export const Alt = () => {
    return (
        <kbd className='text-sm select-none bg-neutral-200 px-2 py-1.5 rounded-lg border border-neutral-400 dark:bg-neutral-600 dark:border-neutral-400' title='Alt'>Alt</kbd>
    )
}

export const Shift = () => {
    return (
        <kbd className='text-sm select-none bg-neutral-200 px-6 py-1.5 rounded-lg border border-neutral-400 dark:bg-neutral-600 dark:border-neutral-400' title='Shift'>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M8 18v-5H3l9-11l9 11h-5v5H8Zm2-2h4v-5h2.775L12 5.15L7.225 11H10v5Zm2-5.425ZM4 22v-2h16v2H4Z" /></svg>
        </kbd>
    )
}
