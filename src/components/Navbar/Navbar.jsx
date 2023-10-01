import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { BiSearch, BiMenu } from 'react-icons/bi'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'

const Navbar = ({ theme, mobileNavToggle, setMobileNavToggle, handleChangeTheme }) => {

    return (
        <>
            <header className='w-screen bg-white h-[70px] flex items-center justify-between z-10 fixed py-4 px-64 xl:px-32 md:px-16 sm:px-8 dark:bg-neutral-900 transition-colors duration-300'>
                <Link className='font-bold text-xl text-neutral-900 dark:text-white' to="/">Blossom UI</Link>
                <section className='flex items-center justify-center relative h-full w-2/4 xl:w-4/12 lg:hidden'>
                    <input type='text' placeholder='Search docs' className='flex items-center w-full h-full pl-10 placeholder:text-neutral-700 text-sm border border-neutral-300 rounded-lg shadow-md shadow-neutral-100 hover:shadow-neutral-200 duration-300 dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-sm dark:shadow-neutral-950 dark:hover:shadow-md dark:text-white dark:placeholder:text-neutral-300' />
                    <BiSearch className='text-neutral-700 text-xl absolute left-3 top-2.5 dark:text-neutral-300 dark:placeholder:text-neutral-300' />
                </section>
                <section className='lg:hidden'>
                    <ul className='flex items-center gap-4'>
                        <Link className='cursor-pointer dark:text-white' to="/docs/getting-started/introduction">Docs</Link>
                        <a href="https://www.buymeacoffee.com/juanigarciadev" target='_blank' className='flex justify-center items-center bg-corporative text-white w-fit h-fit text-sm gap-2 px-4 py-3 rounded-lg cursor-pointer font-medium select-none hover:bg-corporativeHover'>Sponsor</a>
                        <button onClick={handleChangeTheme} className='flex justify-center items-center border border-neutral-300 bg-transparent w-fit h-fit gap-2 px-4 py-3 rounded-lg cursor-pointer font-medium select-none hover:bg-neutral-200 hover:bg-opacity-40 hover:backdrop-blur-md dark:text-white'>{theme === "" ? (<BsFillMoonFill />) : (<BsFillSunFill />)}</button>
                    </ul>
                </section>
                <div className='hidden justify-center items-center gap-4 lg:flex 2xl:hidden'>
                    <button onClick={handleChangeTheme} className='flex justify-center items-center border border-neutral-300 bg-transparent w-fit h-fit gap-2 px-4 py-3 rounded-lg cursor-pointer font-medium select-none hover:bg-neutral-200 hover:bg-opacity-40 hover:backdrop-blur-md dark:text-white'>{theme === "" ? (<BsFillMoonFill />) : (<BsFillSunFill />)}</button>
                    <BiMenu className='text-3xl hidden cursor-pointer lg:block dark:text-white' onClick={() => setMobileNavToggle((prevToggle) => (prevToggle === false ? true : false))} />
                </div>
            </header>
            {mobileNavToggle && (<section className='side-navbar fixed z-10 right-0 bg-white border-l-[1px] border-neutral-200 w-[50%] h-screen dark:bg-neutral-900 dark:text-white dark:border-neutral-800'>
                <div className='flex justify-end px-4 py-6'>
                    <AiOutlineClose className='text-black text-xl cursor-pointer dark:text-white' onClick={() => setMobileNavToggle(false)} />
                </div>
                <div className='flex flex-col w-full'>
                    <Link to="/" className='p-4 hover:bg-neutral-200 dark:hover:bg-neutral-800' onClick={() => setMobileNavToggle(false)}>Home</Link>
                    <Link to="/docs/getting-started/introduction" className='p-4 hover:bg-neutral-200 dark:hover:bg-neutral-800' onClick={() => setMobileNavToggle(false)}>Docs</Link>
                </div>
                <div className='p-4'>
                    <a href="https://www.buymeacoffee.com/juanigarciadev" target='_blank' className='flex justify-center items-center bg-corporative text-white w-full h-fit text-sm gap-2 px-4 py-3 rounded-lg cursor-pointer font-medium select-none hover:bg-corporativeHover'>Sponsor</a>
                </div>
            </section>)}
            <Outlet context={[theme]} />
        </>
    )
}

export default Navbar