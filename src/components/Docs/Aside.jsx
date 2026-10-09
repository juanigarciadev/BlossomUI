import { introduction, customization, components } from '../../mocks/docs'
import { NavLink } from 'react-router-dom'

const sections = [
    { title: 'Getting started', items: introduction },
    { title: 'Customization', items: customization },
    { title: 'Components', items: components },
]

const linkClass = ({ isActive }) =>
    `block rounded-xl px-3 py-1.5 text-sm duration-150 ${isActive
        ? 'bg-corporative/10 text-corporative font-medium'
        : 'text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-white'}`

const Aside = () => {

    return (
        <aside className='thin-scroll flex flex-col gap-10 pb-32 pt-4 pr-4 h-[calc(100vh-70px)] w-52 fixed left-64 xl:left-32 md:left-16 sm:left-8 overflow-y-auto lg:hidden'>
            {sections.map(({ title, items }) => (
                <nav key={title} aria-label={title} className='flex flex-col gap-0.5'>
                    <h3 className='px-3 pb-1 text-xs font-medium uppercase tracking-wide text-neutral-400'>{title}</h3>
                    {items.map((item) => (
                        <NavLink key={item.name} to={item.url} className={linkClass}>{item.name}</NavLink>
                    ))}
                </nav>
            ))}
        </aside >
    )
}

export default Aside
