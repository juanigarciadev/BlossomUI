import React from 'react'
import Aside from '../../Aside'

const ToastsDocumentation = () => {
    return (
        <div className='flex pt-[70px] w-full h-screen relative'>
            <Aside />
            <section className='absolute left-[22%] w-[78%] pl-8 pt-4 xl:w-[82%] xl:left-[18%] lg:w-[100%] lg:left-0 lg:px-0 dark:text-white'>
                <h1 className='text-4xl font-bold pb-4 text-neutral-800 dark:text-white'>Toasts</h1>
                <p className='text-lg font-medium pb-4'>Normal Toasts</p>
                <div className='grid grid-cols-2'>
                </div>
            </section>
        </div>
    )
}

export default ToastsDocumentation