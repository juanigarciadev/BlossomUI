import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from 'react'
import { accentStyle } from '../accent'

export interface Tab {
    id: string
    label: string
    content: ReactNode
    icon?: ReactNode
    disabled?: boolean
}

export interface TabsProps {
    /** Accent color of this component: any CSS color. Without it the component uses `--blossom-accent`, which is pink by default. */
    color?: string
    tabs: Tab[]
    /** Id of the tab that starts selected when the component is not controlled. */
    defaultValue?: string
    /** Controlled selected tab. Use together with `onChange`. */
    value?: string
    onChange?: (id: string) => void
    /** `underline` draws a line under the active tab, `pills` fills it and `boxed` puts the tabs in a container. */
    variant?: 'underline' | 'pills' | 'boxed'
    /** Make every tab take the same share of the width. */
    fullWidth?: boolean
}

const list = {
    underline: '',
    pills: 'gap-1',
    boxed: 'gap-1 rounded-xl bg-neutral-100 p-1 dark:bg-neutral-800',
}

const tab = {
    underline: (active: boolean) => `border-b-2 px-4 py-2.5 ${active ? 'border-[var(--blossom-accent,#f472b6)] text-[color-mix(in_srgb,var(--blossom-accent,#f472b6)_85%,black)]' : 'border-transparent text-neutral-500 hover:border-neutral-300 hover:text-neutral-800 dark:hover:border-neutral-600 dark:hover:text-white'}`,
    pills: (active: boolean) => `rounded-xl px-4 py-2 ${active ? 'bg-[var(--blossom-accent,#f472b6)] text-[var(--blossom-accent-contrast,#fff)]' : 'text-neutral-600 hover:bg-neutral-200 dark:text-neutral-300 dark:hover:bg-neutral-800'}`,
    boxed: (active: boolean) => `rounded-lg px-4 py-2 ${active ? 'bg-white text-neutral-900 shadow-sm dark:bg-neutral-700 dark:text-white' : 'text-neutral-500 hover:text-neutral-800 dark:hover:text-white'}`,
}

export const Tabs = ({ color, tabs, defaultValue, value, onChange, variant = 'underline', fullWidth = false }: TabsProps) => {
    const id = useId()
    const [internal, setInternal] = useState(defaultValue ?? tabs.find((item) => !item.disabled)?.id ?? '')
    const buttons = useRef<Record<string, HTMLButtonElement | null>>({})
    const current = value ?? internal

    const select = (tabId: string) => {
        if (value === undefined) setInternal(tabId)
        onChange?.(tabId)
    }

    const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        const enabled = tabs.filter((item) => !item.disabled)
        const index = enabled.findIndex((item) => item.id === current)
        let next = -1
        if (event.key === 'ArrowRight') next = (index + 1) % enabled.length
        else if (event.key === 'ArrowLeft') next = (index - 1 + enabled.length) % enabled.length
        else if (event.key === 'Home') next = 0
        else if (event.key === 'End') next = enabled.length - 1
        if (next < 0) return
        event.preventDefault()
        select(enabled[next].id)
        buttons.current[enabled[next].id]?.focus()
    }

    const active = tabs.find((item) => item.id === current)

    return (
        <div className='w-full' style={accentStyle(color)}>
            <div className={variant === 'underline' ? 'border-b border-neutral-200 dark:border-neutral-700' : ''}>
            <div role='tablist' onKeyDown={onKeyDown} className={`flex overflow-x-auto overflow-y-hidden ${fullWidth ? '' : 'w-fit max-w-full'} ${list[variant]}`}>
                {tabs.map((item) => {
                    const selected = item.id === current
                    return (
                        <button
                            key={item.id}
                            ref={(element) => { buttons.current[item.id] = element }}
                            id={`${id}-tab-${item.id}`}
                            type='button'
                            role='tab'
                            aria-selected={selected}
                            aria-controls={`${id}-panel-${item.id}`}
                            tabIndex={selected ? 0 : -1}
                            disabled={item.disabled}
                            onClick={() => select(item.id)}
                            className={`flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[var(--blossom-accent,#f472b6)] disabled:cursor-not-allowed disabled:opacity-40 ${fullWidth ? 'flex-1' : ''} ${tab[variant](selected)}`}
                        >
                            {item.icon}
                            {item.label}
                        </button>
                    )
                })}
            </div>
            </div>
            {active && active.content != null && (
                <div id={`${id}-panel-${active.id}`} role='tabpanel' aria-labelledby={`${id}-tab-${active.id}`} tabIndex={0} className='pt-4 text-sm text-neutral-600 outline-none dark:text-neutral-300'>
                    {active.content}
                </div>
            )}
        </div>
    )
}
