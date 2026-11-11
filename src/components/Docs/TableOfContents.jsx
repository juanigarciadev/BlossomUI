import { useEffect, useState } from 'react'

// Distance from the top of the screen at which a section counts as the one being read
const OFFSET = 120

/**
 * Index of the page, fixed on the right. The section the user is reading is highlighted
 * and the list follows the scroll.
 */
const TableOfContents = ({ sections }) => {
    const [active, setActive] = useState(sections[0]?.id)

    useEffect(() => {
        let frame = 0
        const update = () => {
            frame = 0
            let current = sections[0]?.id
            for (const { id } of sections) {
                const top = document.getElementById(id)?.getBoundingClientRect().top
                if (top !== undefined && top <= OFFSET) current = id
            }
            // At the very bottom the last section wins, even when it is too short to reach the top
            if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = sections[sections.length - 1]?.id
            setActive(current)
        }
        const onScroll = () => {
            if (!frame) frame = requestAnimationFrame(update)
        }
        update()
        window.addEventListener('scroll', onScroll, { passive: true })
        window.addEventListener('resize', onScroll)
        return () => {
            cancelAnimationFrame(frame)
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', onScroll)
        }
    }, [sections])

    const go = (event, id) => {
        event.preventDefault()
        const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
        document.getElementById(id)?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
        window.history.replaceState(null, '', `#${id}`)
        setActive(id)
    }

    return (
        <aside className='w-48 shrink-0 xl:hidden'>
            <nav aria-label='On this page' className='thin-scroll sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto pb-8'>
                <h3 className='pb-3 text-xs font-medium uppercase tracking-wide text-neutral-400'>On this page</h3>
                <ul className='flex flex-col border-l border-neutral-200 dark:border-neutral-800'>
                    {sections.map((section) => {
                        const current = section.id === active
                        return (
                            <li key={section.id}>
                                <a
                                    href={`#${section.id}`}
                                    onClick={(event) => go(event, section.id)}
                                    aria-current={current ? 'location' : undefined}
                                    className={`-ml-px block border-l py-1.5 pl-4 text-sm duration-150 ${current
                                        ? 'border-corporative font-medium text-corporative'
                                        : 'border-transparent text-neutral-500 hover:border-neutral-400 hover:text-neutral-900 dark:hover:border-neutral-500 dark:hover:text-white'}`}
                                >
                                    {section.label}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </aside>
    )
}

export default TableOfContents
