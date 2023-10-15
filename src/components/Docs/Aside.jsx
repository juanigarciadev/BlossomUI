import React, { useEffect } from 'react'

import { introduction, customization, components } from '../../mocks/docs'
import { Link } from 'react-router-dom'

const Aside = () => {

    useEffect(() => {
        document.title = "Blossom UI - Docs"
    }, [])

    return (
        <aside className='flex flex-col gap-12 pt-4 h-screen w-[15%] fixed left-64 xl:left-32 md:left-16 sm:left-8 overflow-y-scroll lg:hidden'>
            <section className='flex flex-col gap-4'>
                <h3 className='font-medium text-lg dark:text-white'>Getting started</h3>
                {introduction.map((docs) => {
                    return (
                        <div key={docs.name} className='flex'>
                            <Link to={docs.url} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='text-neutral-500 cursor-pointer hover:text-black duration-100 dark:hover:text-white'>{docs.name}</Link>
                        </div>
                    )
                })}
            </section>
            <section className='flex flex-col gap-4'>
                <h3 className='font-medium text-lg dark:text-white'>Customization</h3>
                {customization.map((customize) => {
                    return (
                        <div key={customize.name}>
                            <Link to={customize.url} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='text-neutral-500 cursor-pointer hover:text-black duration-100 dark:hover:text-white'>{customize.name}</Link>
                        </div>
                    )
                })}
            </section>
            <section className='flex flex-col gap-4'>
                <h3 className='font-medium text-lg dark:text-white'>Components</h3>
                {components.map((components) => {
                    return (
                        <div key={components.name}>
                            <Link to={components.url} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='text-neutral-500 cursor-pointer hover:text-black duration-100 dark:hover:text-white'>{components.name}</Link>
                        </div>
                    )
                })}
            </section>
        </aside >
    )
}

export default Aside