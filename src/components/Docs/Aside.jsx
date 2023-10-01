import React from 'react'

import componentsCard from '../../mocks/componentsCard'
import { introduction, components } from '../../mocks/docs'
import { Link } from 'react-router-dom'

const Aside = () => {
    return (
        <aside className='flex flex-col gap-12 pt-4 h-screen w-[15%] fixed left-64 xl:left-32 md:left-16 sm:left-8 overflow-y-scroll lg:hidden'>
            <section className='flex flex-col gap-4'>
                <h3 className='font-medium text-lg dark:text-white'>Getting started</h3>
                {introduction.map((docs) => {
                    return (
                        <div key={docs.name}>
                            <Link to={docs.url} className='text-neutral-500 cursor-pointer hover:text-black duration-100 dark:hover:text-white'>{docs.name}</Link>
                        </div>
                    )
                })}
            </section>
            <section className='flex flex-col gap-4'>
                <h3 className='font-medium text-lg dark:text-white'>Components</h3>
                {componentsCard.map((components) => {
                    return (
                        <div key={components.name}>
                            <article className='text-neutral-500 cursor-pointer hover:text-black duration-100 dark:hover:text-white'>{components.name}</article>
                        </div>
                    )
                })}
            </section>
        </aside>
    )
}

export default Aside