import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='w-full h-1 mt-6 flex justify-between z-10'>
                <Link className='font-bold text-xl text-neutral-900' to="/">Blossom UI</Link>
                <section>
                    <ul className='flex gap-8'>
                        <Link className='cursor-pointer' to="">Components</Link>
                        <Link className='cursor-pointer' to="">Templates</Link>
                        <Link className='cursor-pointer' to="">Docs</Link>
                    </ul>
                </section>
            </div>
            <Outlet />
        </>
    )
}

export default Navbar