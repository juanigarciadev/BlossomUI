import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { BiSearch, BiMenu } from 'react-icons/bi'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'

const Navbar = () => {

    const [theme, setTheme] = useState("")

    useEffect(() => {
        if (theme === "dark") {
            document.querySelector('html').classList.add('dark')
        } else {
            document.querySelector('html').classList.remove('dark')
        }
    }, [theme])

    const handleChangeTheme = () => {
        setTheme((prevTheme) => (prevTheme === "" ? "dark" : ""))
    }

    return (
        <>
            <header className='w-full h-10 mt-6 flex items-center justify-between z-10'>
                <Link className='font-bold text-xl text-neutral-900 dark:text-white' to="/">Blossom UI</Link>
                <section className='flex items-center justify-center relative h-full w-2/4 xl:w-4/12 lg:hidden'>
                    <input type='text' placeholder='Search docs' className='flex items-center w-full h-full pl-10 placeholder:text-neutral-700 border border-neutral-300 rounded-lg shadow-md shadow-neutral-100 hover:shadow-neutral-200 duration-300 dark:bg-neutral-800 dark:border-0 dark:shadow-black dark:text-white' />
                    <BiSearch className='text-neutral-700 text-xl absolute left-3 top-2.5 dark:text-neutral-300 dark:placeholder:text-neutral-300' />
                </section>
                <section className='lg:hidden'>
                    <ul className='flex items-center gap-8'>
                        <Link className='cursor-pointer dark:text-white' to="/components">Components</Link>
                        <Link className='cursor-pointer dark:text-white' to="/docs">Docs</Link>
                        <a href="https://www.buymeacoffee.com/juanigarciadev" target='_blank' className='flex justify-center items-center bg-corporative text-white min-w-fit max-w-[200px] max-h-[50px] gap-2 px-4 py-3 rounded-lg cursor-pointer font-medium select-none hover:bg-corporativeHover '>Sponsor</a>
                        <button onClick={handleChangeTheme} className='flex justify-center items-center border border-neutral-300 bg-transparent max-w-[200px] max-h-[50px] gap-2 px-4 py-3 rounded-lg cursor-pointer font-medium select-none hover:bg-neutral-200 hover:bg-opacity-40 hover:backdrop-blur-md dark:text-white'>{theme === "" ? (<BsFillMoonFill />) : (<BsFillSunFill />)}</button>
                    </ul>
                </section>
                <BiMenu className='text-3xl hidden lg:block' />
            </header>
            <Outlet />
        </>
    )
}

export default Navbar