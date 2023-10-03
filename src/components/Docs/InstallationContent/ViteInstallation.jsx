import React from 'react'

const ViteInstallation = () => {
    return (
        <div>
            <section className='flex flex-col gap-6'>
                <div className='grid grid-cols-2'>
                    <section className='flex flex-col'>
                        <h3 className='text-4xl font-bold pb-4 text-neutral-800 dark:text-white'>With Vite</h3>
                        <h3 className='font-medium pb-2'>Create your project</h3>
                        <p className='dark:text-neutral-300'>Start by creating a new Vite project if you don't have one set up already. The most common aproach is to use Create Vite.</p>
                    </section>
                    <section className='flex flex-col'></section>
                </div>
                <div className='grid grid-cols-2'>
                    <section className='flex flex-col'>
                        <h3 className='font-medium pb-2'>Install Tailwind CSS</h3>
                        <p className='dark:text-neutral-300'>Install `tailwindcss` and its peer dependencies, then generate your `tailwind.config.js` and `postcss.config.js` files.</p>
                    </section>
                    <section className='flex flex-col'></section>
                </div>
            </section>
        </div>
    )
}

export default ViteInstallation