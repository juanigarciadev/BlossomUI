import React from 'react'

export const PercentageInsideProgressBar = () => {
    return (
        <div className='w-full h-4 rounded-full bg-neutral-100 dark:bg-neutral-700'>
            <div className='flex justify-center items-center w-[75%] h-full rounded-full bg-blue-700'>
                <span className='text-white font-medium text-sm'>75%</span>
            </div>
        </div>
    )
}
