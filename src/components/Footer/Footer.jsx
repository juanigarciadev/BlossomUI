import React from 'react'
import { components, customization, introduction } from '../../mocks/docs'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='w-full bg-neutral-200 h-auto my-8 pb-4 pl-4 rounded-lg dark:bg-neutral-800'>
            <section className='py-4'>
                <Link to="/" className='font-bold text-xl text-neutral-900 cursor-pointer dark:text-white' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Blossom UI</Link>
            </section>
            <section className='flex flex-wrap gap-32 lg:flex-col lg:gap-4'>
                <article>
                    <span className='font-medium text-lg dark:text-white'>Getting started</span>
                    <ul className='flex flex-col gap-2'>
                        {introduction.map((intro) => {
                            return (
                                <Link to={intro.url} key={intro.name} className='text-sm text-neutral-500 cursor-pointer hover:text-black duration-100 dark:hover:text-white' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>{intro.name}</Link>
                            )
                        })}
                    </ul>
                </article>
                <article>
                    <span className='font-medium text-lg dark:text-white'>Customization</span>
                    <ul className='flex flex-col gap-2'>
                        {customization.map((customize) => {
                            return (
                                <Link to={customize.url} key={customize.name} className='text-sm text-neutral-500 cursor-pointer hover:text-black duration-100 dark:hover:text-white' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>{customize.name}</Link>
                            )
                        })}
                    </ul>
                </article>
                <article>
                    <span className='font-medium text-lg dark:text-white'>Components</span>
                    <ul className='grid grid-cols-2 gap-2 2xl:grid-cols-3 xs:grid-cols-1'>
                        {components.map((component) => {
                            return (
                                <Link to={component.url} key={component.name} className='mr-16 text-sm text-neutral-500 cursor-pointer hover:text-black duration-100 dark:hover:text-white' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>{component.name}</Link>
                            )
                        })}
                    </ul>
                </article>
            </section>
        </footer>
    )
}

export default Footer