import { Link, useLocation } from 'react-router-dom'
import { ArrowRight, Flower, Home } from 'lucide-react'
import { Appear } from '../Motion/Motion'
import { Kbd } from '../UI/KBD/Kbd'

const popular = [
    { name: 'Buttons', url: '/docs/components/buttons' },
    { name: 'Forms', url: '/docs/components/forms' },
    { name: 'Modal', url: '/docs/components/modal' },
    { name: 'Tabs', url: '/docs/components/tabs' },
    { name: 'Table', url: '/docs/components/table' },
]

const NotFound = () => {
    const { pathname } = useLocation()

    return (
        <>
            {/* Decorative glow, the same as the home */}
            <div aria-hidden className='pointer-events-none absolute inset-x-0 top-0 z-0 h-[800px] overflow-hidden'>
                <div className='float-slow absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-corporative opacity-25 blur-3xl dark:opacity-20' />
                <div className='float-slower absolute top-40 right-1/4 h-96 w-96 rounded-full bg-purple-400 opacity-20 blur-3xl dark:opacity-15' />
            </div>

            <main className='relative z-10 flex w-full flex-col items-center gap-6 pb-24 pt-40 text-center lg:pt-32'>
                <Appear>
                    {/* The 0 of 404 is a blossom, with the same gradient as the numbers */}
                    <p aria-label='404' className='flex select-none items-center justify-center text-[10rem] font-bold leading-none tracking-tighter xs:text-8xl'>
                        <span aria-hidden='true' className='text-gradient'>4</span>
                        <svg aria-hidden='true' width='0' height='0' className='absolute'>
                            <defs>
                                <linearGradient id='blossom-404' x1='0' y1='0' x2='1' y2='1'>
                                    <stop offset='0%' stopColor='#f472b6' />
                                    <stop offset='100%' stopColor='#c084fc' />
                                </linearGradient>
                            </defs>
                        </svg>
                        <Flower aria-hidden='true' size='0.74em' strokeWidth={1.6} stroke='url(#blossom-404)' className='float-slow mx-[0.04em] shrink-0' />
                        <span aria-hidden='true' className='text-gradient -ml-[0.03em]'>4</span>
                    </p>
                </Appear>

                <Appear delay={0.05} className='flex flex-col items-center gap-3'>
                    <h1 className='text-4xl font-bold tracking-tight text-neutral-800 dark:text-white xs:text-3xl'>This page has wilted</h1>
                    <p className='max-w-md text-lg text-neutral-600 dark:text-neutral-300'>
                        We could not find <code className='rounded-lg bg-neutral-100 px-1.5 py-0.5 text-sm text-corporativeHover dark:bg-neutral-800 dark:text-corporative'>{pathname}</code>. It may have moved or never existed.
                    </p>
                </Appear>

                <Appear delay={0.1} className='flex gap-4 pt-2 sm:w-full sm:flex-col'>
                    <Link
                        to='/'
                        className='group flex h-fit w-fit select-none items-center justify-center gap-2 rounded-xl bg-corporative px-5 py-3 text-sm font-medium text-white shadow-lg shadow-corporative/30 duration-200 hover:-translate-y-0.5 hover:bg-corporativeHover sm:w-full'
                    >
                        <Home size={16} />
                        Go home
                    </Link>
                    <Link
                        to='/components'
                        className='flex h-fit w-fit select-none items-center justify-center gap-2 rounded-xl border border-neutral-300 bg-transparent px-5 py-[11px] text-center text-sm font-medium duration-200 hover:border-corporative hover:text-corporative dark:border-neutral-700 dark:text-white dark:hover:border-corporative dark:hover:text-corporative sm:w-full'
                    >
                        Browse components
                        <ArrowRight size={16} />
                    </Link>
                </Appear>

                <Appear delay={0.15} className='mt-8 flex w-full max-w-xl flex-col items-center gap-4 border-t border-neutral-200 pt-8 dark:border-neutral-800'>
                    <span className='text-sm text-neutral-500'>Or jump to a popular component</span>
                    <div className='flex flex-wrap justify-center gap-2'>
                        {popular.map((item) => (
                            <Link
                                key={item.url}
                                to={item.url}
                                className='rounded-full border border-neutral-300 px-3 py-1 text-sm text-neutral-600 duration-200 hover:border-corporative hover:text-corporative dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-corporative dark:hover:text-corporative'
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <p className='flex items-center gap-2 text-sm text-neutral-500'>
                        Or press <span className='flex gap-1'><Kbd>Ctrl</Kbd><Kbd>K</Kbd></span> to search
                    </p>
                </Appear>
            </main>
        </>
    )
}

export default NotFound
