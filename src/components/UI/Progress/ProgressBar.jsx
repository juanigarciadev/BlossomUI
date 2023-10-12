import React from 'react'

export const DefaultProgressBar = () => {
    return (
        <div className='w-full h-4 rounded-full bg-neutral-100 dark:bg-neutral-700'>
            <div className='flex justify-center items-center w-[75%] h-full rounded-full bg-blue-700'></div>
        </div>
    )
}

export const PercentageInsideProgressBar = () => {
    return (
        <div className='w-full h-4 rounded-full bg-neutral-100 dark:bg-neutral-700'>
            <div className='flex justify-center items-center w-[75%] h-full rounded-full bg-blue-700'>
                <span className='text-white font-medium text-sm'>75%</span>
            </div>
        </div>
    )
}

export const PercentageAboveWithInfo = () => {
    return (
        <div className='w-full'>
            <div className='flex justify-between pb-1'>
                <span className='font-medium'>Loading Blossom UI</span>
                <span className='font-medium'>75%</span>
            </div>
            <div className='w-full h-4 rounded-full bg-neutral-100 dark:bg-neutral-700'>
                <div className='flex justify-center items-center w-[75%] h-full rounded-full bg-blue-700'></div>
            </div>
        </div>
    )
}