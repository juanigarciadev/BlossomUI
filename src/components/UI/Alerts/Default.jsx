export const DefaultAlert = () => {
    return (
        <div className='w-full h-fit px-4 py-4 bg-blue-100 rounded-lg dark:bg-blue-900'>
            <span className='text-blue-900 dark:text-blue-300'>Info alert! Change a few things up and try submitting again.</span>
        </div>
    )
}

export const DefaultSuccessfulAlert = () => {
    return (
        <div className='w-full h-fit px-4 py-4 bg-green-100 rounded-lg dark:bg-green-900'>
            <span className='text-green-900 dark:text-green-300'>Successful alert! Change a few things up and try submitting again.</span>
        </div>
    )
}

export const DefaultErrorAlert = () => {
    return (
        <div className='w-full h-fit px-4 py-4 bg-red-100 rounded-lg dark:bg-red-900'>
            <span className='text-red-900 dark:text-red-300'>Error alert! Change a few things up and try submitting again.</span>
        </div>
    )
}

export const DefaultWarningAlert = () => {
    return (
        <div className='w-full h-fit px-4 py-4 bg-yellow-100 rounded-lg dark:bg-yellow-600'>
            <span className='text-yellow-600 dark:text-yellow-200'>Warning alert! Change a few things up and try submitting again.</span>
        </div>
    )
}
