import React from 'react'
import Aside from './Aside'
import { Link } from 'react-router-dom'
import { BiRightArrowAlt } from 'react-icons/bi'

const Introduction = () => {
    return (
        <div className='flex pt-[70px] w-full h-screen relative'>
            <Aside />
            <section className='absolute left-[22%] w-[78%] pl-8 pt-4 xl:left-[18%] lg:w-[100%] lg:left-0 lg:px-0 dark:text-white'>
                <h1 className='text-4xl font-bold pb-4 text-neutral-800 dark:text-white'>Introduction</h1>
                <article className='flex flex-col gap-2'>
                    <p className='w-full'>Blossom UI is a library of components created with <a href="https://tailwindcss.com/" target='_blank' className='text-corporative cursor-pointer hover:text-corporativeHover'>Tailwind CSS</a>. Their use is completely free, the only requirement is to have Tailwind installed in the project.</p>
                    <Link to="/docs/getting-started/quickstart" className='flex text-corporative cursor-pointer hover:text-corporativeHover'>How to install Tailwind CSS in my project<BiRightArrowAlt className='text-2xl' /></Link>
                </article>
                <h2 className='text-2xl font-bold pt-6 text-neutral-800 dark:text-white'>How to use?</h2>
                <p>Very simple, just copy and paste our components code in your project.</p>
                <h2 className='text-2xl font-bold pt-6 text-neutral-800 dark:text-white'>How Tailwind works?</h2>
                <p>Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.</p>

            </section>
        </div>
    )
}

export default Introduction