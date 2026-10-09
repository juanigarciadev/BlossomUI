import { Link } from 'react-router-dom'

const NotFound = () => (
    <main className='flex w-full flex-col items-center gap-4 pt-52 text-center'>
        <p className='text-sm font-medium text-corporative'>404</p>
        <h1 className='text-5xl font-bold tracking-tight text-neutral-800 dark:text-white'>Page not found</h1>
        <p className='max-w-md text-neutral-600 dark:text-neutral-300'>The page you are looking for does not exist or was moved. Try one of these instead.</p>
        <div className='flex flex-wrap justify-center gap-3 pt-2'>
            <Link to='/' className='rounded-lg bg-corporative px-4 py-3 text-sm font-medium text-white hover:bg-corporativeHover'>Go home</Link>
            <Link to='/components' className='rounded-lg border border-neutral-300 px-4 py-3 text-sm font-medium hover:border-corporative hover:text-corporative dark:border-neutral-700 dark:text-white'>Browse components</Link>
        </div>
    </main>
)

export default NotFound
