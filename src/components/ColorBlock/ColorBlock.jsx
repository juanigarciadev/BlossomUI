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
        <Tooltip content={copied ? 'Copied!' : 'Click to copy'} arrow className='flex justify-center'>
            <button type='button' onClick={copy} aria-label={`Copy ${hex}`} className='text-left outline-none focus-visible:ring-2 focus-visible:ring-pink-400 rounded-xl'>
                <article className='flex flex-col w-16 cursor-pointer lg:w-full xs:flex-row xs:w-full xs:items-center xs:gap-2 xxs:flex-col xxs:items-start'>
                    <div className={`${color} flex items-center justify-center w-full h-10 rounded-xl border lg:h-12 xs:w-12`}></div>
                    <div className='flex flex-col'>
                        <span className='font-medium'>{number}</span>
                        <span className='text-neutral-500 text-sm'>{hex}</span>
                    </div>
                </article>
            </button>
        </Tooltip>
    )
}

export default ColorBlock
