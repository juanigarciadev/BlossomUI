import { useEffect, useId, useMemo, useRef, useState, type KeyboardEvent, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { accentStyle } from '../accent'
import { useOverlay } from '../overlay'

export interface Command {
    id: string
    label: string
    /** Section the command is listed under. */
    group?: string
    icon?: ReactNode
    /** Text shown at the right, for example a shortcut. */
    hint?: string
    /** Extra words that also match the search. */
    keywords?: string[]
    onSelect: () => void
}

export interface CommandPaletteProps {
    /** Accessible name of the dialog. */
    label?: string
    /** Accent color of this component: any CSS color. Without it the component uses `--blossom-accent`, which is pink by default. */
    color?: string
    open: boolean
    onClose: () => void
    commands: Command[]
    placeholder?: string
    emptyText?: string
}

export const CommandPalette = ({ label = 'Command palette', color, open, onClose, commands, placeholder = 'Type a command or search...', emptyText = 'No results found.' }: CommandPaletteProps) => {
    const id = useId()
    const input = useRef<HTMLInputElement>(null)
    const [query, setQuery] = useState('')
    const [active, setActive] = useState(0)

    const results = useMemo(() => {
        const text = query.trim().toLowerCase()
        if (!text) return commands
        return commands.filter((command) => [command.label, command.group ?? '', ...(command.keywords ?? [])].join(' ').toLowerCase().includes(text))
    }, [commands, query])

    // Scroll lock, Escape, Tab inside the panel and focus restore are shared with the other overlays.
    const panel = useRef<HTMLDivElement>(null)
    useOverlay(open, onClose, panel)

    // Start from a clean palette every time it opens.
    useEffect(() => {
        if (!open) return
        setQuery('')
        setActive(0)
        input.current?.focus()
    }, [open])

    useEffect(() => setActive(0), [query])

    useEffect(() => {
        if (open) document.getElementById(`${id}-option-${active}`)?.scrollIntoView({ block: 'nearest' })
    }, [open, active, id])

    if (!open) return null

    const run = (command?: Command) => {
        if (!command) return
        onClose()
        command.onSelect()
    }

    const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'ArrowDown') {
            event.preventDefault()
            setActive((index) => Math.min(index + 1, results.length - 1))
        } else if (event.key === 'ArrowUp') {
            event.preventDefault()
            setActive((index) => Math.max(index - 1, 0))
        } else if (event.key === 'Enter') {
            event.preventDefault()
            run(results[active])
        }
    }

    return createPortal(
        <div
            className='fixed inset-0 z-[70] flex items-start justify-center bg-black/50 p-4 pt-[15vh] backdrop-blur-sm'
            style={accentStyle(color)}
            onMouseDown={(event) => event.target === event.currentTarget && onClose()}
        >
            <div
                ref={panel}
                role='dialog'
                aria-modal='true'
                aria-label={label}
                tabIndex={-1}
                onKeyDown={onKeyDown}
                className='w-full max-w-lg overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xl dark:border-neutral-700 dark:bg-neutral-900'
            >
                <input
                    ref={input}
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder={placeholder}
                    role='combobox'
                    aria-expanded='true'
                    aria-controls={`${id}-list`}
                    aria-activedescendant={results[active] ? `${id}-option-${active}` : undefined}
                    className='w-full border-b border-neutral-200 bg-transparent px-4 py-3.5 text-sm text-neutral-900 outline-none placeholder:text-neutral-400 dark:border-neutral-700 dark:text-white'
                />
                <ul id={`${id}-list`} role='listbox' className='max-h-72 overflow-y-auto p-2'>
                    {results.length === 0 && <li className='px-3 py-6 text-center text-sm text-neutral-500'>{emptyText}</li>}
                    {results.map((command, index) => (
                        <li key={command.id} role='presentation'>
                            {command.group && command.group !== results[index - 1]?.group && (
                                <div className='px-3 pb-1 pt-2 text-xs font-medium uppercase text-neutral-400'>{command.group}</div>
                            )}
                            <div
                                id={`${id}-option-${index}`}
                                role='option'
                                aria-selected={index === active}
                                onPointerEnter={() => setActive(index)}
                                onClick={() => run(command)}
                                className={`flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm ${index === active ? 'bg-[color-mix(in_srgb,var(--blossom-accent,#f472b6)_10%,transparent)] text-[color-mix(in_srgb,var(--blossom-accent,#f472b6)_75%,black)] dark:text-[color-mix(in_srgb,var(--blossom-accent,#f472b6)_60%,white)]' : 'text-neutral-700 dark:text-neutral-200'}`}
                            >
                                {command.icon}
                                <span className='flex-1'>{command.label}</span>
                                {command.hint && <span className='text-xs text-neutral-400'>{command.hint}</span>}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>,
        document.body
    )
}
