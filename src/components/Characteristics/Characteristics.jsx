import React from 'react'
import characteristics from '../../mocks/characteristics'

const Characteristics = () => {
    return (
        <div className='grid grid-cols-3 gap-4 w-full h-auto pt-64 lg:flex lg:flex-col lg:pt-32'>
            {characteristics.map(item => {
                const Icon = item.icon
                return (
                    <div key={item.title} className='flex flex-col gap-4 w-full h-auto bg-neutral-200 bg-opacity-40 border border-neutral-300 rounded-lg p-8 shadow-sm dark:bg-neutral-800 dark:border-neutral-600'>
                        <div className='flex justify-center items-center bg-corporative rounded-full w-10 h-10'>
                            <Icon className='text-white text-3xl' />
                        </div>
                        <h3 className='text-black text-2xl font-bold dark:text-white'>{item.title}</h3>
                        <p className='text-neutral-800 text-sm dark:text-neutral-300'>{item.subtitle}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Characteristics