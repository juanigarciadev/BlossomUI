import React from 'react'
import Aside from './Aside'
import { BiRightArrowAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { installation } from '../../mocks/installation'

const Installation = () => {
    return (
        <div className='flex pt-[70px] w-full h-screen relative'>
            <Aside />
            <section className='absolute left-[22%] w-[78%] pl-8 pt-4 xl:left-[18%] lg:w-[100%] lg:left-0 lg:px-0 dark:text-white'>
                <h1 className='text-4xl font-bold pb-4 text-neutral-800 dark:text-white'>Installation</h1>
                <div className='grid grid-cols-3 gap-4'>
                    {installation.map((technologie) => {
                        return (
                            <article className='group flex flex-col gap-4 h-auto p-4 border border-neutral-300 rounded-xl bg-neutral-200 cursor-pointer shadow-sm hover:shadow-md duration-300 dark:bg-neutral-800 dark:border-neutral-600'>
                                <div className='flex items-center gap-2'>
                                    {<technologie.img />}
                                    <span className='font-medium'>{technologie.name}</span>
                                    <BiRightArrowAlt className='text-neutral-800 opacity-0 text-xl group-hover:opacity-100 duration-200 dark:text-neutral-300' />
                                </div>
                                <div className='flex items-center text-neutral-800'>
                                    <span className='dark:text-neutral-300'>
                                        {technologie.span}
                                    </span>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

export default Installation