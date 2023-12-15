import React from 'react'

export const DefaultAlertWithActions = () => {
    return (
        <div className='w-full h-fit px-4 py-4 bg-blue-100 rounded-lg dark:bg-blue-900'>
            <section className='flex flex-col gap-4 md:flex-col md:items-start'>
                <div className='flex gap-1'>
                    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' className='text-blue-900 dark:text-blue-300'><path fill='currentColor' d='M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8z' /><path fill='currentColor' d='M11 11h2v6h-2zm0-4h2v2h-2z' /></svg>
                    <span className='text-blue-900 dark:text-blue-300'>Info alert! Change a few things up and try submitting again.</span>
                </div>
                <section>
                    <span className='text-blue-900 dark:text-blue-300'>Replace this text with something referring to the actions that can be performed with the buttons below.</span>
                </section>
                <section className='flex gap-2'>
                    <button className='flex justify-center w-fit h-fit text-sm items-center text-center bg-blue-700 text-white gap-2 px-4 py-1 rounded-lg cursor-pointer font-medium select-none hover:bg-blue-600'>Primary action</button>
                    <button className='flex justify-center items-center text-black text-center border border-blue-600 bg-transparent w-fit h-fit text-sm gap-2 px-4 py-[3px] rounded-lg cursor-pointer font-medium select-none hover:bg-blue-700 hover:text-white hover:backdrop-blur-md dark:text-white dark:hover:bg-blue-700'>Secondary action</button>
                </section>
            </section>
        </div>
    )
}

export const DefaultSuccessfulAlertWithActions = () => {
    return (
        <div className='w-full h-fit px-4 py-4 bg-green-100 rounded-lg dark:bg-green-900'>
            <section className='flex flex-col gap-4 md:flex-col md:items-start'>
                <div className='flex gap-1'>
                    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' className='text-green-900 dark:text-green-300'><path fill='currentColor' d='M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8z' /><path fill='currentColor' d='M9.999 13.587L7.7 11.292l-1.412 1.416l3.713 3.705l6.706-6.706l-1.414-1.414z' /></svg>
                    <span className='flex text-green-900 dark:text-green-300'>Successful alert! Change a few things up and try submitting again.</span>
                </div>
                <section>
                    <span className='text-green-900 dark:text-green-300'>Replace this text with something referring to the actions that can be performed with the buttons below.</span>
                </section>
                <section className='flex gap-2'>
                    <button className='flex justify-center w-fit h-fit text-sm items-center text-center bg-green-700 text-white gap-2 px-4 py-1 rounded-lg cursor-pointer font-medium select-none hover:bg-green-600'>Primary action</button>
                    <button className='flex justify-center items-center text-black text-center border border-green-600 bg-transparent w-fit h-fit text-sm gap-2 px-4 py-[3px] rounded-lg cursor-pointer font-medium select-none hover:bg-green-700 hover:text-white hover:backdrop-blur-md dark:text-white dark:hover:bg-green-700'>Secondary action</button>
                </section>
            </section>
        </div>
    )
}

export const DefaultErrorAlertWithActions = () => {
    return (
        <div className='w-full h-fit px-4 py-4 bg-red-100 rounded-lg dark:bg-red-900'>
            <section className='flex flex-col gap-4 md:flex-col md:items-start'>
                <div className='flex gap-1'>
                    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' className='text-red-900 dark:text-red-300'><path fill='currentColor' d='M9.172 16.242L12 13.414l2.828 2.828l1.414-1.414L13.414 12l2.828-2.828l-1.414-1.414L12 10.586L9.172 7.758L7.758 9.172L10.586 12l-2.828 2.828z' /><path fill='currentColor' d='M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2S2 6.486 2 12s4.486 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8s-8-3.589-8-8s3.589-8 8-8z' /></svg>
                    <span className='text-red-900 dark:text-red-300'>Error alert! Change a few things up and try submitting again.</span>
                </div>
                <section>
                    <span className='text-red-900 dark:text-red-300'>Replace this text with something referring to the actions that can be performed with the buttons below.</span>
                </section>
                <section className='flex gap-2'>
                    <button className='flex justify-center w-fit h-fit text-sm items-center text-center bg-red-700 text-white gap-2 px-4 py-1 rounded-lg cursor-pointer font-medium select-none hover:bg-red-600'>Primary action</button>
                    <button className='flex justify-center items-center text-black text-center border border-red-600 bg-transparent w-fit h-fit text-sm gap-2 px-4 py-[3px] rounded-lg cursor-pointer font-medium select-none hover:bg-red-700 hover:text-white hover:backdrop-blur-md dark:text-white dark:hover:bg-red-700'>Secondary action</button>
                </section>
            </section>
        </div>
    )
}

export const DefaultWarningAlertWithActions = () => {
    return (
        <div className='w-full h-fit px-4 py-4 bg-yellow-100 rounded-lg dark:bg-yellow-600'>
            <section className='flex flex-col gap-4 md:flex-col md:items-start'>
                <div className='flex gap-1'>
                    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' className='text-yellow-600 dark:text-yellow-200'><path fill='currentColor' d='M11.001 10h2v5h-2zM11 16h2v2h-2z' /><path fill='currentColor' d='M13.768 4.2C13.42 3.545 12.742 3.138 12 3.138s-1.42.407-1.768 1.063L2.894 18.064a1.986 1.986 0 0 0 .054 1.968A1.984 1.984 0 0 0 4.661 21h14.678c.708 0 1.349-.362 1.714-.968a1.989 1.989 0 0 0 .054-1.968L13.768 4.2zM4.661 19L12 5.137L19.344 19H4.661z' /></svg>
                    <span className='text-yellow-600 dark:text-yellow-200'>Warning alert! Change a few things up and try submitting again.</span>
                </div>
                <section>
                    <span className='text-yellow-600 dark:text-yellow-200'>Replace this text with something referring to the actions that can be performed with the buttons below.</span>
                </section>
                <section className='flex gap-2'>
                    <button className='flex justify-center w-fit h-fit text-sm items-center text-center bg-yellow-400 text-black gap-2 px-4 py-1 rounded-lg cursor-pointer font-medium select-none hover:bg-yellow-500'>Primary action</button>
                    <button className='flex justify-center items-center text-black text-center border border-yellow-300 bg-transparent w-fit h-fit text-sm gap-2 px-4 py-[3px] rounded-lg cursor-pointer font-medium select-none hover:bg-yellow-400 hover:backdrop-blur-md dark:text-white dark:hover:text-black dark:hover:bg-yellow-400'>Secondary action</button>
                </section>
            </section>
        </div>
    )
}
