import React from 'react'
import componentsCard from '../../mocks/componentsCard'
import { introduction, components } from '../../mocks/docs'

const Docs = () => {
    return (
        <div className='flex pt-[70px] w-full h-screen relative'>
            <aside className='flex flex-col gap-12 pt-4 h-screen w-[15%] fixed left-64 xl:left-32 md:left-16 sm:left-8 overflow-y-scroll lg:hidden'>
                <section className='flex flex-col gap-4'>
                    <h3 className='font-medium text-lg dark:text-white'>Getting started</h3>
                    {introduction.map((docs) => {
                        return (
                            <div key={docs.name}>
                                <article className='text-neutral-500 cursor-pointer hover:text-black duration-100 dark:hover:text-white'>{docs.name}</article>
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
            <section className='absolute left-[22%] w-[85%] px-8 pt-4 xl:left-[18%] lg:w-[100%] lg:left-0 lg:px-0'>
                <h1 className='text-4xl font-bold text-neutral-800 dark:text-white'>Introduction</h1>
            </section>
        </div>
    )
}

export default Docs