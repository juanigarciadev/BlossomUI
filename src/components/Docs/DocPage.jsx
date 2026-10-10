import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'
import DocNav from './DocNav'
import InlineCode from './InlineCode'
import Footer from '../Footer/Footer'
import { Appear, FadeIn } from '../Motion/Motion'
import { introduction, customization, components } from '../../mocks/docs'

const allPages = [
    ...introduction.map((p) => ({ ...p, group: 'Getting started' })),
    ...customization.map((p) => ({ ...p, group: 'Customization' })),
    ...components.map((p) => ({ ...p, group: 'Components' })),
]

/** Shared shell for every documentation page: header, variant index, prev/next links and footer. */
const DocPage = ({ title, description, children }) => {
    const [docNav, setDocNav] = useState(false)
    const [sections, setSections] = useState([])
    const content = useRef(null)
    const { pathname } = useLocation()

    const index = allPages.findIndex((p) => p.url === pathname)
    const current = allPages[index]
    const prev = allPages[index - 1]
    const next = allPages[index + 1]

    // Index of the variants on the page, built from the headings CompVersionTitle renders.
    useEffect(() => {
        const headings = content.current?.querySelectorAll('h2[id]') ?? []
        setSections([...headings].map((h) => ({ id: h.id, label: h.textContent })))
    }, [pathname, children])

    useEffect(() => {
        setDocNav(false)
    }, [pathname])

    return (
        <div className='w-full min-w-0 relative pl-8 pt-4 lg:pl-0 dark:text-white'>
            <Appear className='relative z-20 mb-10 border-b border-neutral-200 pb-8 dark:border-neutral-800'>
                {current && <span className='inline-block mb-3 rounded-full border border-corporative/40 bg-corporative/10 px-3 py-1 text-xs font-medium text-corporativeHover dark:text-corporative'>{current.group}</span>}
                <div className='flex gap-4 items-center'>
                    <h1 className='text-5xl font-bold tracking-tight text-neutral-800 dark:text-white xs:text-4xl'>{title}</h1>
                    <button
                        type='button'
                        aria-label='Open documentation menu'
                        aria-expanded={docNav}
                        className='hidden items-center justify-center cursor-pointer h-8 w-8 rounded-xl bg-neutral-200 hover:bg-neutral-300 duration-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 lg:flex'
                        onClick={() => setDocNav((prevNav) => !prevNav)}
                    >
                        <ChevronDown size={18} className={`duration-200 ${docNav ? 'rotate-180' : ''}`} />
                    </button>
                </div>
                {docNav && <DocNav />}
                {description && <p className='pt-2 text-lg text-neutral-600 dark:text-neutral-300'><InlineCode text={description} /></p>}
                {sections.length > 1 && (
                    <nav aria-label='Variants on this page' className='flex flex-wrap items-center gap-2 pt-4'>
                        <span className='text-sm text-neutral-500'>On this page:</span>
                        {sections.map((section) => (
                            <a
                                key={section.id}
                                href={`#${section.id}`}
                                className='text-sm px-3 py-1 rounded-full border border-neutral-300 text-neutral-600 hover:border-corporative hover:text-corporative duration-200 dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-corporative dark:hover:text-corporative'
                            >
                                {section.label}
                            </a>
                        ))}
                    </nav>
                )}
            </Appear>

            <div ref={content} className='flex flex-col pb-16 gap-16'>{children}</div>

            {current && (prev || next) && (
                <FadeIn as='nav' aria-label='Pagination' className='grid grid-cols-2 gap-4 pb-4 sm:grid-cols-1'>
                    {prev ? (
                        <Link to={prev.url} className='group flex flex-col gap-1 p-4 rounded-xl border border-neutral-200 hover:border-corporative duration-200 dark:border-neutral-700 dark:hover:border-corporative'>
                            <span className='flex items-center text-sm text-neutral-500'><ChevronLeft size={18} />Previous</span>
                            <span className='font-medium group-hover:text-corporative duration-200'>{prev.name}</span>
                        </Link>
                    ) : <span />}
                    {next && (
                        <Link to={next.url} className='group flex flex-col items-end gap-1 p-4 rounded-xl border border-neutral-200 hover:border-corporative duration-200 dark:border-neutral-700 dark:hover:border-corporative'>
                            <span className='flex items-center text-sm text-neutral-500'>Next<ChevronRight size={18} /></span>
                            <span className='font-medium group-hover:text-corporative duration-200'>{next.name}</span>
                        </Link>
                    )}
                </FadeIn>
            )}
            <Footer />
        </div>
    )
}

export default DocPage
