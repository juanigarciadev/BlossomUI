import React, { useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'
import DocNav from '../../DocNav'
import Footer from '../../../Footer/Footer'

const FormsDocumentation = () => {
    const [docNav, setDocNav] = useState(false)
    return (
        <div className='flex lg:pt-[70px] w-full h-screen relative'>
            <section className='absolute pl-8 pt-4 lg:w-[100%] lg:left-0 lg:px-0 dark:text-white'>
                <div className='flex gap-4 items-center pb-4'>
                    <h1 className='text-4xl font-bold text-neutral-800 dark:text-white'>Forms</h1>
                    <div className='hidden items-center justify-center cursor-pointer h-8 w-8 rounded-lg bg-neutral-200 dark:bg-neutral-800 lg:flex' onClick={() => setDocNav(!docNav)}>
                        <BiChevronDown />
                    </div>
                </div>
                {docNav && (
                    <DocNav />
                )}
                <div className='flex flex-col pb-16 gap-16'>
                    <h3 className='animate-pulse'>Working in...</h3>
                </div>
                <Footer />
            </section>
        </div>
    )
}

export default FormsDocumentation