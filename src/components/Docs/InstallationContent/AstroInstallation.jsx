import React, { useState } from 'react'
import { useContext } from 'react';
import { BsClipboard2, BsCheck2Circle } from 'react-icons/bs'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { arta, lightfair } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { ThemeContext } from '../../../context/ThemeContext';

const AstroInstallation = () => {
    const { theme } = useContext(ThemeContext)
    const [copy, setCopy] = useState(false)

    const createVite = 'npm create vite@latest my-project -- --template react cd my-project'
    return (
        <div>
            <h3 className='text-4xl font-bold pb-4 text-neutral-800 dark:text-white'>With Astro</h3>
            <ol className='flex flex-col gap-2'>
                <li className='grid grid-cols-2 xl:flex xl:flex-col'>
                    <section className='flex gap-2 '>
                        <div className='flex flex-col items-center'>
                            <p className='flex items-center justify-center w-6 h-6 bg-neutral-200 dark:bg-neutral-800 rounded-md text-sm'>1</p>
                            <div className='w-[3px] h-full mt-2 bg-neutral-200 dark:bg-neutral-800'></div>
                        </div>
                        <div>
                            <h3 className='font-medium pb-2'>Create your project</h3>
                            <p className='dark:text-neutral-300 pb-4'>Start by creating a new Vite project if you don't have one set up already. The most common aproach is to use Create Vite.</p>
                        </div>
                    </section>
                    <section className='pl-2 xl:pl-8'>
                        <article className='flex justify-end items-center pl-4 w-full h-8 bg-corporative rounded-t-md'>
                            <div className='text-sm pr-4 cursor-pointer'>
                                {copy ? (
                                    <div className='flex items-center gap-1'>
                                        <BsCheck2Circle />
                                        Copied!
                                    </div>
                                ) :
                                    (
                                        <div className='flex items-center gap-1' onClick={() => {
                                            navigator.clipboard.writeText(createVite);
                                            setCopy(true)
                                            setTimeout(() => {
                                                setCopy(false)
                                            }, 3000)
                                        }}>
                                            <BsClipboard2 />
                                            Copy code
                                        </div>
                                    )}
                            </div>
                        </article>

                        <SyntaxHighlighter language="bash" style={theme === "dark" ? arta : lightfair}>
                            {createVite}
                        </SyntaxHighlighter>
                    </section >
                </li>
                <li className='grid grid-cols-2 xl:flex xl:flex-col'>
                    <section className='flex gap-2 '>
                        <div className='flex flex-col items-center'>
                            <p className='flex items-center justify-center w-6 h-6 bg-neutral-200 dark:bg-neutral-800 rounded-md text-sm'>2</p>
                            <div className='w-[3px] h-full mt-2 bg-neutral-200 dark:bg-neutral-800'></div>
                        </div>
                        <div>
                            <h3 className='font-medium pb-2'>Install Tailwind CSS</h3>
                            <p className='dark:text-neutral-300 pb-4'>Install `tailwindcss` and its peer dependencies, then generate your `tailwind.config.js` and `postcss.config.js` files.</p>
                        </div>
                    </section>
                    <section className='flex flex-col'></section>
                </li>
                <li className='grid grid-cols-2 xl:flex xl:flex-col'>
                    <section className='flex gap-2 '>
                        <div className='flex flex-col items-center'>
                            <p className='flex items-center justify-center w-6 h-6 bg-neutral-200 dark:bg-neutral-800 rounded-md text-sm'>3</p>
                            <div className='w-[3px] h-full mt-2 bg-neutral-200 dark:bg-neutral-800'></div>
                        </div>
                        <div>
                            <h3 className='font-medium pb-2'>Configure your template paths</h3>
                            <p className='dark:text-neutral-300 pb-4'>Add the paths to all of your template files in your `tailwind.config.js` file.</p>
                        </div>
                    </section>
                    <section className='flex flex-col'></section>
                </li>
                <li className='grid grid-cols-2 xl:flex xl:flex-col'>
                    <section className='flex gap-2 '>
                        <div className='flex flex-col items-center'>
                            <p className='flex items-center justify-center w-6 h-6 bg-neutral-200 dark:bg-neutral-800 rounded-md text-sm'>4</p>
                            <div className='w-[3px] h-full mt-2 bg-neutral-200 dark:bg-neutral-800'></div>
                        </div>
                        <div>
                            <h3 className='font-medium pb-2'>Add the Tailwind directives to your CSS</h3>
                            <p className='dark:text-neutral-300 pb-4'>Add the `@tailwind` directives for each of Tailwind’s layers to your `./src/index.css` file.</p>
                        </div>
                    </section>
                    <section className='flex flex-col'></section>
                </li>
                <li className='grid grid-cols-2 xl:flex xl:flex-col'>
                    <section className='flex gap-2 '>
                        <div className='flex flex-col items-center'>
                            <p className='flex items-center justify-center w-6 h-6 bg-neutral-200 dark:bg-neutral-800 rounded-md text-sm'>5</p>
                            <div className='w-[3px] h-full mt-2 bg-neutral-200 dark:bg-neutral-800'></div>
                        </div>
                        <div>
                            <h3 className='font-medium pb-2'>Start your build process</h3>
                            <p className='dark:text-neutral-300 pb-4'>Run your build process with `npm run dev`.</p>
                        </div>
                    </section>
                    <section className='flex flex-col'></section>
                </li>
                <li className='grid grid-cols-2 xl:flex xl:flex-col'>
                    <section className='flex gap-2 '>
                        <div className='flex flex-col items-center'>
                            <p className='flex items-center justify-center w-6 h-6 bg-neutral-200 dark:bg-neutral-800 rounded-md text-sm'>5</p>
                            <div className='w-[3px] h-full mt-2 bg-neutral-200 dark:bg-neutral-800'></div>
                        </div>
                        <div>
                            <h3 className='font-medium pb-2'>Start using Tailwind in your project</h3>
                            <p className='dark:text-neutral-300 pb-4'>Start using Tailwind’s utility classes to style your content.</p>
                        </div>
                    </section>
                    <section className='flex flex-col'></section>
                </li>
            </ol>
        </div>
    )
}

export default AstroInstallation