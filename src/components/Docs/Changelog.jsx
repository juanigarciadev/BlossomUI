import React from 'react'
import Aside from './Aside'

const Changelog = () => {
    return (
        <div className='flex pt-[70px] w-full h-screen relative'>
            <Aside />
            <section className='absolute left-[22%] w-[78%] pl-8 pt-4 xl:w-[82%] xl:left-[18%] lg:w-[100%] lg:left-0 lg:px-0 dark:text-white'>
                <h1 className='text-4xl font-bold pb-4 text-neutral-800 dark:text-white'>Changelog</h1>
                <div>
                    <h3 className='text-lg font-medium'>v1.0.0</h3>
                    <span className='text-neutral-600 dark:text-neutral-500'>Released on October 9th, 2023.</span>
                    <ol className='list-disc pt-4 pl-4'>
                        <li className='text-neutral-600 dark:text-neutral-500'>Blossom UI now available, completely free and open source.</li>
                    </ol>
                </div>
            </section>
        </div>
    )
}

export default Changelog