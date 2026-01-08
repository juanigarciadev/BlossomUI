// components/Docs/DocsLayout.jsx
import React from 'react'
import Aside from './Aside'
import { Outlet } from 'react-router-dom'

const DocsLayout = () => {
    return (
        <div className='relative min-h-screen w-full flex pt-[70px] lg:pt-4'>
            <Aside />
            
            <section className='w-[78%] ml-[24%] pt-4 lg:w-[100%] lg:ml-0'>
                <Outlet />
            </section>

        </div>
    )
}

export default DocsLayout