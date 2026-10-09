import { Link } from 'react-router-dom'
import { ArrowUp, Heart } from 'lucide-react'
import { BsGithub } from 'react-icons/bs'
import { FadeIn } from '../Motion/Motion'
import { components, customization, introduction } from '../../mocks/docs'

const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

const linkClass = 'text-sm text-neutral-500 hover:text-corporative duration-150'

const Column = ({ title, items, className = '' }) => (
    <nav aria-label={title} className={className}>
        <h4 className='mb-3 font-medium dark:text-white'>{title}</h4>
        <ul className='flex flex-col gap-2'>
            {items.map((item) => (
                <li key={item.name}>
                    <Link to={item.url} className={linkClass} onClick={scrollTop}>{item.name}</Link>
                </li>
            ))}
        </ul>
    </nav>
)

const Footer = () => {
    return (
        <FadeIn as='footer' className='my-8 w-full overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 sm:-mx-8 sm:mb-0 sm:w-[calc(100%+4rem)] sm:rounded-b-none sm:border-x-0 sm:border-b-0'>
            <div className='grid grid-cols-[1.4fr_1fr_1fr_2fr] gap-8 p-8 lg:grid-cols-2 sm:grid-cols-1 sm:p-6'>
                <section className='flex flex-col items-start gap-3'>
                    <Link to='/' className='text-xl font-bold text-neutral-900 dark:text-white' onClick={scrollTop}>
                        Blossom <span className='text-corporative'>UI</span>
                    </Link>
                    <p className='text-sm text-neutral-500'>
                        Free and open source components made with Tailwind CSS. Copy, paste and ship.
                    </p>
                    <a
                        href='https://github.com/juanigarciadev/BlossomUI'
                        target='_blank'
                        rel='noreferrer'
                        className='inline-flex items-center gap-2 rounded-xl bg-[#24292F] px-4 py-2 text-sm font-medium text-white hover:bg-[#24292F]/90 duration-200'
                    >
                        <BsGithub /> Star on GitHub
                    </a>
                </section>
                <Column title='Getting started' items={introduction} />
                <Column title='Customization' items={customization} />
                <nav aria-label='Components'>
                    <h4 className='mb-3 font-medium dark:text-white'>Components</h4>
                    <ul className='grid grid-cols-3 gap-x-4 gap-y-2 md:grid-cols-2'>
                        {components.map((item) => (
                            <li key={item.name}>
                                <Link to={item.url} className={linkClass} onClick={scrollTop}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className='flex items-center justify-between gap-4 border-t border-neutral-200 px-8 py-4 text-sm text-neutral-500 dark:border-neutral-700 sm:flex-col sm:px-6'>
                <p className='flex items-center gap-1'>
                    &copy; {new Date().getFullYear()} Blossom UI. Made with <Heart size={14} className='fill-corporative text-corporative' /> by
                    <a href='https://github.com/juanigarciadev' target='_blank' rel='noreferrer' className='hover:text-corporative duration-150'>juanigarciadev</a>
                </p>
                <button
                    type='button'
                    onClick={scrollTop}
                    className='flex items-center gap-1 rounded-xl px-3 py-1.5 hover:bg-neutral-200 hover:text-corporative duration-200 dark:hover:bg-neutral-700'
                >
                    Back to top <ArrowUp size={14} />
                </button>
            </div>
        </FadeIn>
    )
}

export default Footer
