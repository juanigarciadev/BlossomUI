import { useEffect } from 'react'
import { introduction, customization, components } from '../../mocks/docs'
import { NavLink } from 'react-router-dom'

const sections = [
    { title: 'Getting started', items: introduction },
    { title: 'Customization', items: customization },
    { title: 'Components', items: components },
]

const linkClass = ({ isActive }) =>
    `block border-l-2 pl-3 py-1 duration-100 ${isActive
        ? 'border-corporative text-corporative font-medium'
        : 'border-transparent text-neutral-500 hover:text-black dark:hover:text-white'}`

const Aside = () => {

    useEffect(() => {
        document.title = "Blossom UI - Docs"
    }, [])

    return (
        <aside className='flex flex-col gap-10 pb-32 pt-4 h-screen w-[15%] fixed left-64 xl:left-32 md:left-16 sm:left-8 overflow-y-auto lg:hidden'>
            {sections.map(({ title, items }) => (
                <nav key={title} aria-label={title} className='flex flex-col gap-2'>
                    <h3 className='font-medium text-lg dark:text-white'>{title}</h3>
                    {items.map((item) => (
                        <NavLink key={item.name} to={item.url} className={linkClass}>{item.name}</NavLink>
                    ))}
                </nav>
            ))}
        </aside >
    )
}

export default Aside
