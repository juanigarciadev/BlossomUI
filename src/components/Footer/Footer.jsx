import React from 'react'
import { components, customization, introduction } from '../../mocks/docs'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='w-full bg-neutral-100 h-auto my-8 rounded-lg dark:bg-neutral-800'>
            <section className='flex flex-col py-2 pl-4 gap-2'>
                <Link to="/" className='font-bold text-xl text-neutral-900 cursor-pointer dark:text-white' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Blossom UI</Link>
                <div>
                    <a href='https://github.com/juanigarciadev' target='_blank' className='text-white bg-[#24292F] hover:bg-[#24292F]/90 font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center dark:hover:bg-[#050708]/30 mr-2 mb-2'><svg className='w-4 h-4 mr-2' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 20 20'><path fillRule='evenodd' d='M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z' clipRule='evenodd' /></svg>Github</a>
                </div>
            </section>
            <section className='flex flex-wrap gap-32 pb-4 pl-4 lg:flex-col lg:gap-4'>
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
            <section className='w-full flex justify-center text-sm py-2 rounded-b-lg bg-neutral-200 dark:bg-neutral-700'>
                <p className='text-center text-black dark:text-white'>&copy; 2023 Blossom UI &#124; All Rights Reserved</p>
            </section>
        </footer>
    )
}

export default Footer