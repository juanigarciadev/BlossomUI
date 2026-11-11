import { useEffect, useRef, useState, type ReactNode } from 'react'
import { accentStyle } from '../accent'

export interface CopyButtonProps {
    /** The text that goes to the clipboard. */
    text: string
    /** Text of the button, or the accessible name when it is `icon` only. */
    label?: string
    /** Text shown for a moment after copying. */
    copiedLabel?: string
    /** Milliseconds the copied state lasts. */
    timeout?: number
    /** `button` shows the text, `icon` only the icon. */
    variant?: 'button' | 'icon'
    size?: 'sm' | 'md' | 'lg'
    /** Accent color of the copied state: any CSS color. Without it the component uses `--blossom-accent`. */
    color?: string
    /** Called after the text was copied. */
    onCopy?: (text: string) => void
    /** Custom icons: the one shown before copying and the one shown after. */
    icon?: ReactNode
    copiedIcon?: ReactNode
    className?: string
}

const sizes = { sm: 'px-3 py-1.5 text-xs', md: 'px-4 py-2 text-sm', lg: 'px-5 py-2.5 text-base' }
const iconSizes = { sm: 'h-8 w-8', md: 'h-10 w-10', lg: 'h-12 w-12' }

const copyIcon = (
    <svg className='h-4 w-4' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
        <rect x='9' y='9' width='11' height='11' rx='2' />
        <path strokeLinecap='round' strokeLinejoin='round' d='M5 15V6a2 2 0 0 1 2-2h9' />
    </svg>
)

const checkIcon = (
    <svg className='h-4 w-4' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2.5'>
        <path strokeLinecap='round' strokeLinejoin='round' d='m5 12 5 5L20 7' />
    </svg>
)

/** Copy with the Clipboard API, and with a fallback for pages that are not secure. */
const writeClipboard = async (text: string) => {
    try {
        await navigator.clipboard.writeText(text)
        return true
    } catch {
        const area = document.createElement('textarea')
        area.value = text
        area.setAttribute('readonly', '')
        area.style.cssText = 'position:fixed;opacity:0;pointer-events:none'
        document.body.appendChild(area)
        area.select()
        let done = false
        try {
            done = document.execCommand('copy')
        } catch {
            done = false
        }
        area.remove()
        return done
    }
}

/** A button that copies a text and confirms it. The confirmation is also announced to screen readers. */
export const CopyButton = ({ text, label = 'Copy', copiedLabel = 'Copied', timeout = 2000, variant = 'button', size = 'md', color, onCopy, icon = copyIcon, copiedIcon = checkIcon, className = '' }: CopyButtonProps) => {
    const [copied, setCopied] = useState(false)
    const timer = useRef<number>()

    useEffect(() => () => window.clearTimeout(timer.current), [])

    const copy = async () => {
        if (!(await writeClipboard(text))) return
        setCopied(true)
        onCopy?.(text)
        window.clearTimeout(timer.current)
        timer.current = window.setTimeout(() => setCopied(false), timeout)
    }

    return (
        <button
            type='button'
            onClick={copy}
            aria-label={variant === 'icon' ? (copied ? copiedLabel : label) : undefined}
            style={accentStyle(color)}
            className={`relative flex shrink-0 select-none items-center justify-center gap-2 rounded-xl border font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[var(--blossom-accent,#f472b6)] ${variant === 'icon' ? iconSizes[size] : `w-fit ${sizes[size]}`} ${copied ? 'border-[var(--blossom-accent,#f472b6)] bg-[color-mix(in_srgb,var(--blossom-accent,#f472b6)_14%,transparent)] text-[color-mix(in_srgb,var(--blossom-accent,#f472b6)_85%,black)] dark:text-[var(--blossom-accent,#f472b6)]' : 'border-neutral-300 text-neutral-800 hover:bg-neutral-100 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800'} ${className}`}
        >
            {copied ? copiedIcon : icon}
            {variant === 'button' && <span>{copied ? copiedLabel : label}</span>}
            <span role='status' aria-live='polite' className='sr-only'>{copied ? copiedLabel : ''}</span>
        </button>
    )
}
