import { useEffect, useRef, useState } from 'react'
import { Tooltip } from '../UI/Tooltip/Tooltip'

const ColorBlock = ({ color, number, hex }) => {
    const [copied, setCopied] = useState(false)
    const timer = useRef(0)

    useEffect(() => () => window.clearTimeout(timer.current), [])

    const copy = () => {
        navigator.clipboard.writeText(hex)
        setCopied(true)
        window.clearTimeout(timer.current)
        timer.current = window.setTimeout(() => setCopied(false), 1500)
    }

    return (
        <Tooltip content={copied ? 'Copied!' : 'Click to copy'} arrow className='flex w-full'>
            <button type='button' onClick={copy} aria-label={`Copy ${hex}`} className='w-full text-left outline-none focus-visible:ring-2 focus-visible:ring-pink-400 rounded-xl'>
                <article className='flex w-full cursor-pointer flex-col'>
                    <div className={`${color} flex items-center justify-center w-full h-12 rounded-xl border`}></div>
                    <div className='flex min-w-0 flex-col'>
                        <span className='font-medium'>{number}</span>
                        <span className='truncate text-neutral-500 text-sm'>{hex}</span>
                    </div>
                </article>
            </button>
        </Tooltip>
    )
}

export default ColorBlock
