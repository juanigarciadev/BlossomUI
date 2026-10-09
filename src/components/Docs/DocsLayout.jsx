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
            <Aside />

            <section className='w-[78%] min-w-0 ml-[24%] pt-4 lg:w-[100%] lg:ml-0 lg:pt-[70px]'>
                <Outlet />
            </section>
        </div>
    )
}

export default DocsLayout
