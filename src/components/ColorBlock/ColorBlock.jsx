import React from 'react'

const ColorBlock = ({ color, number, hex }) => {
    return (
        <article className='flex flex-col w-16 cursor-pointer lg:w-12 xs:flex-row xs:w-full xs:items-center xs:gap-2 xxs:flex-col xxs:items-start'>
            <div className={`${color} flex items-center justify-center w-full h-10 rounded-lg border lg:h-12 md:w-12`}></div>
            <div className='flex flex-col'>
                <span className='font-medium'>{number}</span>
                <span className='text-neutral-500 text-sm'>{hex}</span>
            </div>
        </article>
    )
}

export default ColorBlock