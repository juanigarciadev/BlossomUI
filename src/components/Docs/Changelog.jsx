import React, { useState } from 'react'
import Aside from './Aside'
import { BiChevronDown } from 'react-icons/bi'
import DocNav from './DocNav'
import Footer from '../Footer/Footer'

const Changelog = () => {
    const [docNav, setDocNav] = useState(false)
    return (
        <div className='flex lg:pt-[70px] w-full h-screen relative'>
            <section className='absolute h-[calc(100vh-70px)] flex flex-col justify-between pl-8 pt-4 lg:w-[100%] lg:left-0 lg:px-0 dark:text-white'>
                <div>
                    <div className='flex gap-4 items-center pb-4'>
                        <h1 className='text-4xl font-bold text-neutral-800 dark:text-white'>Changelog</h1>
                        <div className='hidden items-center justify-center cursor-pointer h-8 w-8 rounded-lg bg-neutral-200 dark:bg-neutral-800 lg:flex' onClick={() => setDocNav(!docNav)}>
                            <BiChevronDown />
                        </div>
                    </div>
                    {docNav && (
                        <DocNav />
                    )}
                    <div>
                        <h3 className='text-lg font-medium'>v1.0.0</h3>
                        <span className='text-neutral-600 dark:text-neutral-500'>Released on October 9th, 2023.</span>
                        <ol className='list-disc pt-4 pl-4'>
                            <li className='text-neutral-600 dark:text-neutral-500'>Blossom UI now available, completely free and open source.</li>
                        </ol>
                    </div>
                </div>
                <Footer />
            </section >
        </div >
    )
}

export default Changelog