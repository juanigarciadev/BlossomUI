import { Link, useLocation } from 'react-router-dom'
import { components, customization, introduction } from '../../mocks/docs'

const groups = [
    { title: 'Getting started', items: introduction, columns: 'grid-cols-1' },
    { title: 'Customization', items: customization, columns: 'grid-cols-1' },
    { title: 'Components', items: components, columns: 'grid-cols-2' },
]

/** Index of the documentation for narrow screens: opens under the title of the page and highlights the current one. */
const DocNav = () => {
    const { pathname } = useLocation()

    return (
        <nav
            aria-label='Documentation pages'
            className='mt-4 hidden max-h-[60vh] flex-col gap-1 overflow-y-auto rounded-2xl border border-neutral-200 bg-neutral-50 p-2 dark:border-neutral-800 dark:bg-neutral-900/70 lg:flex'
        >
            {groups.map((group) => (
                <section key={group.title} className='p-2'>
                    <h3 className='px-3 pb-2 text-xs font-medium uppercase tracking-wide text-neutral-400'>{group.title}</h3>
                    <ul className={`grid gap-1 ${group.columns}`}>
                        {group.items.map((item) => {
                            const active = pathname === item.url
                            return (
                                <li key={item.url} className='min-w-0'>
                                    <Link
                                        to={item.url}
                                        aria-current={active ? 'page' : undefined}
                                        className={`block truncate rounded-xl px-3 py-2 text-sm duration-150 ${active ? 'bg-corporative/10 font-medium text-corporative' : 'text-neutral-600 hover:bg-neutral-200/70 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-white'}`}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </section>
            ))}
        </nav>
    )
}

export default DocNav
