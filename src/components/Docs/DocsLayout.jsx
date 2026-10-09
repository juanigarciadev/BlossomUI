import Aside from './Aside'
import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const DocsLayout = () => {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo({ top: 0 })
    }, [pathname])

    return (
        <div className='relative min-h-screen w-full flex pt-[70px] lg:pt-4'>
            <div aria-hidden className='pointer-events-none absolute inset-x-0 top-0 z-0 h-[420px] overflow-hidden'>
                <div className='absolute -top-32 right-1/4 h-80 w-80 rounded-full bg-corporative opacity-[0.12] blur-3xl dark:opacity-10' />
                <div className='absolute -top-20 left-1/3 h-72 w-72 rounded-full bg-purple-400 opacity-[0.08] blur-3xl dark:opacity-10' />
            </div>
            <Aside />

            <section className='relative z-10 w-[78%] min-w-0 ml-[24%] pt-4 lg:w-[100%] lg:ml-0 lg:pt-[70px]'>
                <Outlet />
            </section>
        </div>
    )
}

export default DocsLayout
