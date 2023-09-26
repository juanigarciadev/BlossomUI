import React from 'react'
import componentsCard from '../../mocks/componentsCard'

const Docs = () => {
    return (
        <div className='flex pt-[70px] w-full h-screen'>
            <aside className='flex flex-col gap-4 pt-4 h-screen w-[15%] overflow-y-scroll'>
                {componentsCard.map((docs) => {
                    return (
                        <div>
                            <article className='text-neutral-500 cursor-pointer hover:text-black duration-100 dark:hover:text-white'>{docs.name}</article>
                        </div>
                    )
                })}
            </aside>
            <section className='w-[70%] px-8 pt-4'>
                <h1 className='text-4xl font-bold text-neutral-800 dark:text-white'>Getting started</h1>
            </section>
            <aside className='flex flex-col gap-4 h-screen w-[15%] overflow-y-scroll'>
                <h3 className='font-medium dark:text-white'>On this page</h3>
            </aside>
        </div>
    )
}

export default Docs