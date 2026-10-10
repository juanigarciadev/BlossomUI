import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { components, customization, introduction } from '../../mocks/docs'

const groups = [
    { title: 'Getting started', items: introduction, columns: 'grid-cols-1' },
    { title: 'Customization', items: customization, columns: 'grid-cols-1' },
    { title: 'Components', items: components, columns: 'grid-cols-2' },
]

const MARGIN = 16

/**
 * Index of the documentation for narrow screens. It floats under the title of the page and never
 * gets taller than the space that is left below it, so it cannot go out of the screen: it scrolls.
 */
const DocNav = ({ onClose }) => {
    const { pathname } = useLocation()
    const panel = useRef(null)
    const [maxHeight, setMaxHeight] = useState(320)

    // Space between the top of the panel and the bottom of the screen
    useLayoutEffect(() => {
        const update = () => {
            const top = panel.current?.getBoundingClientRect().top ?? 0
            setMaxHeight(Math.max(160, Math.floor(window.innerHeight - top - MARGIN)))
        }
        update()
        window.addEventListener('resize', update)
        window.addEventListener('scroll', update, { passive: true })
        return () => {
            window.removeEventListener('resize', update)
            window.removeEventListener('scroll', update)
        }
    }, [])

    // Close with Escape or with a press outside of the panel and of the button that opens it
    useEffect(() => {
        const row = panel.current?.parentElement
        const onPointer = (event) => {
            if (!row?.contains(event.target)) onClose?.()
        }
        const onKey = (event) => event.key === 'Escape' && onClose?.()
        document.addEventListener('mousedown', onPointer)
        document.addEventListener('touchstart', onPointer, { passive: true })
        document.addEventListener('keydown', onKey)
        return () => {
            document.removeEventListener('mousedown', onPointer)
            document.removeEventListener('touchstart', onPointer)
            document.removeEventListener('keydown', onKey)
        }
    }, [onClose])

    return (
        <nav
            ref={panel}
            aria-label='Documentation pages'
            style={{ maxHeight }}
            className='absolute left-0 top-full z-30 mt-3 hidden w-full max-w-sm flex-col gap-1 overflow-y-auto overscroll-contain rounded-2xl border border-neutral-200 bg-white p-2 shadow-2xl dark:border-neutral-700 dark:bg-neutral-900 lg:flex'
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
                                        className={`block truncate rounded-xl px-3 py-2 text-sm duration-150 ${active ? 'bg-corporative/10 font-medium text-corporative' : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-white'}`}
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
