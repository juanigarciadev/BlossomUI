import React from 'react'

export const DefaultOutlinedAlert = () => {
    return (
        <div className='w-full h-fit px-4 py-4 bg-blue-100 border border-blue-900 rounded-lg dark:bg-blue-900 dark:border-blue-500'>
            <span className='text-blue-900 dark:text-blue-300'>Info alert! Change a few things up and try submitting again.</span>
        </div>
    )
}

export const DefaultOutlinedSuccessfulAlert = () => {
    return (
        <div className='w-full h-fit px-4 py-4 bg-green-100 border border-green-900 rounded-lg dark:bg-green-900 dark:border-green-500'>
            <span className='text-green-900 dark:text-green-300'>Successful alert! Change a few things up and try submitting again.</span>
        </div>
    )
}

export const DefaultOutlinedErrorAlert = () => {
    return (
        <div className='w-full h-fit px-4 py-4 bg-red-100 border border-red-900 rounded-lg dark:bg-red-900 dark:border-red-500'>
            <span className='text-red-900 dark:text-red-300'>Error alert! Change a few things up and try submitting again.</span>
        </div>
    )
}

export const DefaultOutlinedWarningAlert = () => {
    return (
        <div className='w-full h-fit px-4 py-4 bg-yellow-100 border border-yellow-600 rounded-lg dark:bg-yellow-600 dark:border-yellow-200'>
            <span className='text-yellow-600 dark:text-yellow-200'>Warning alert! Change a few things up and try submitting again.</span>
        </div>
    )
}
