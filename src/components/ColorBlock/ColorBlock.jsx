import React, { useState } from 'react'

const ColorBlock = ({ color, number, hex }) => {
    const [tooltip, setTooltip] = useState(false)
    return (
        <div className='flex justify-center relative' onClick={() => {
            navigator.clipboard.writeText(hex);
            setTooltip(true)
            setTimeout(() => {
                setTooltip(false)
            }, 1500)
        }}>
            {tooltip ? (
                <span className='after:content-[""] after:w-[10px] after:h-[10px] after:bg-neutral-200 after:rotate-45 after:-bottom-[5px] after:left-8 after:absolute h-6 px-4 rounded-lg bg-neutral-200 absolute -top-9 text-xs font-medium z-10 flex items-center dark:bg-neutral-800 dark:after:bg-neutral-800' role='tooltip'>Copied!</span>
            ) :
                null
            }
            <article className='flex flex-col w-16 cursor-pointer lg:w-12 xs:flex-row xs:w-full xs:items-center xs:gap-2 xxs:flex-col xxs:items-start'>
                <div className={`${color} flex items-center justify-center w-full h-10 rounded-lg border lg:h-12 md:w-12`}></div>
                <div className='flex flex-col'>
                    <span className='font-medium'>{number}</span>
                    <span className='text-neutral-500 text-sm'>{hex}</span>
                </div>
            </article>
        </div >
    )
}

export default ColorBlock