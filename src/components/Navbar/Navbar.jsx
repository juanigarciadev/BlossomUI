import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { BiSearch, BiMenu } from 'react-icons/bi'

const Navbar = () => {
    return (
        <>
            <header className='w-full h-10 mt-6 flex items-center justify-between z-10'>
                <Link className='font-bold text-xl text-neutral-900' to="/">Blossom UI</Link>
                <section className='flex items-center w-2/4 h-full border relative border-neutral-300 rounded-lg shadow-md shadow-neutral-100 hover:shadow-neutral-200 duration-300 xl:w-4/12 lg:hidden'>
                    <h3 className='pl-4'>Search docs</h3>
                    <BiSearch className='text-xl absolute right-3 top-2' />
                </section>
                <section className='lg:hidden'>
                    <ul className='flex items-center gap-8'>
                        <Link className='cursor-pointer' to="/components">Components</Link>
                        <Link className='cursor-pointer' to="/templates">Templates</Link>
                        <Link className='cursor-pointer' to="/docs">Docs</Link>
                    </ul>
                </section>
                <BiMenu className='text-3xl hidden lg:block'/>
            </header>
            <Outlet />
        </>
    )
}

export default Navbar