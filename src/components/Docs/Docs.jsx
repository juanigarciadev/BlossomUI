import React from 'react'
import componentsCard from '../../mocks/componentsCard'
import { introduction, components } from '../../mocks/docs'

const Docs = () => {
    return (
        <div className='flex pt-[70px] w-full h-screen relative'>
            <aside className='flex flex-col gap-12 pt-4 h-screen w-[15%] fixed left-64 xl:left-32 md:left-16 sm:left-8 overflow-y-scroll'>
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
            <section className='absolute left-72 w-[70%] px-8 pt-4'>
                <h1 className='text-4xl font-bold text-neutral-800 dark:text-white'>Getting started</h1>
            </section>
            <aside className='flex flex-col gap-4 h-screen w-[15%] fixed right-64 xl:right-32 md:right-16 sm:right-8 overflow-y-scroll'>
                <h3 className='font-medium dark:text-white'>On this page</h3>
            </aside>
        </div>
    )
}

export default Docs