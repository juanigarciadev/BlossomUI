import React, { useState } from 'react'
import { useContext } from 'react';
import { BsClipboard2, BsCheck2Circle } from 'react-icons/bs'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ThemeContext } from './../../../context/ThemeContext';
import { arta, lightfair } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const AstroInstallation = () => {
    const { theme } = useContext(ThemeContext)
    const [copy, setCopy] = useState(false)

    const createVite = 'npm create astro@latest my-project\ncd my-project'
    const installTailwind = 'npx astro add tailwind'
    const build = 'npm run dev'
    const start = '<h1 class="text-3xl font-bold underline">\n  Hello world!\n</h1>'
    return (
        <div>
            <h3 className='text-4xl font-bold pb-4 text-neutral-800 dark:text-white'>With Astro</h3>
            <ol className='flex flex-col gap-8 pb-8'>
                <li className='grid grid-cols-2 xl:flex xl:flex-col'>
                    <section className='flex gap-2'>
                        <div>
                            <div className='flex gap-2'>
                                <p className='flex items-center justify-center w-6 h-6 bg-neutral-200 dark:bg-neutral-800 rounded-md text-sm'>1</p>
                                <h3 className='font-medium pb-2'>Create your project</h3>
                            </div>
                            <p className='dark:text-neutral-300 pb-4'>Start by creating a new Astro project if you don't have one set up already. The most common aproach is to use <a href="https://docs.astro.build/en/getting-started/#start-your-first-project" target='_blank' className='text-corporative hover:text-corporativeHover'>create Astro</a>.</p>
                        </div>
                    </section>
                    <section className='ml-2 xl:ml-8 shadow-md'>
                        <article className='flex justify-between items-center w-full h-8 bg-corporative rounded-t-md'>
                            <div className='relative flex items-center bg-[#bd4c86] h-8 px-4'>
                                <span className='cursor-default text-white'>Terminal</span>
                                <div className='absolute bg-black h-[2px] w-full bottom-0 left-0 dark:bg-white'></div>
                            </div>
                            <div className='text-sm pr-4 cursor-pointer'>
                                {copy ? (
                                    <div className='flex items-center gap-1'>
                                        <BsCheck2Circle />
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
                    <section className='flex gap-2'>
                        <div>
                            <div className='flex gap-2'>
                                <p className='flex items-center justify-center w-6 h-6 bg-neutral-200 dark:bg-neutral-800 rounded-md text-sm'>2</p>
                                <h3 className='font-medium pb-2'>Install Tailwind CSS</h3>
                            </div>
                            <p className='dark:text-neutral-300 pb-4'>Run the `astro add` command to install both `tailwindcss` and `@astro/tailwind` as well as generate a `tailwind.config.cjs` file.</p>
                        </div>
                    </section>
                    <section className='ml-2 xl:ml-8 shadow-md'>
                        <article className='flex justify-between items-center w-full h-8 bg-corporative rounded-t-md'>
                            <div className='relative flex items-center bg-[#bd4c86] h-8 px-4'>
                                <span className='cursor-default text-white'>Terminal</span>
                                <div className='absolute bg-black h-[2px] w-full bottom-0 left-0 dark:bg-white'></div>
                            </div>
                            <div className='text-sm pr-4 cursor-pointer'>
                                {copy ? (
                                    <div className='flex items-center gap-1'>
                                        <BsCheck2Circle />
                                    </div>
                                ) :
                                    (
                                        <div className='flex items-center gap-1' onClick={() => {
                                            navigator.clipboard.writeText(installTailwind);
                                            setCopy(true)
                                            setTimeout(() => {
                                                setCopy(false)
                                            }, 3000)
                                        }}>
                                            <BsClipboard2 />
                                        </div>
                                    )}
                            </div>
                        </article>

                        <SyntaxHighlighter language="" style={theme === "dark" ? arta : lightfair}>
                            {installTailwind}
                        </SyntaxHighlighter>
                    </section >
                </li>

                <li className='grid grid-cols-2 xl:flex xl:flex-col'>
                    <section className='flex gap-2'>
                        <div>
                            <div className='flex gap-2'>
                                <p className='flex items-center justify-center w-6 h-6 bg-neutral-200 dark:bg-neutral-800 rounded-md text-sm'>5</p>
                                <h3 className='font-medium pb-2'>Start your build process</h3>
                            </div>
                            <p className='dark:text-neutral-300 pb-4'>Run your build process with `npm run dev`.</p>
                        </div>
                    </section>
                    <section className='ml-2 xl:ml-8 shadow-md'>
                        <article className='flex justify-between items-center w-full h-8 bg-corporative rounded-t-md'>
                            <div className='relative flex items-center bg-[#bd4c86] h-8 px-4'>
                                <span className='cursor-default text-white'>Terminal</span>
                                <div className='absolute bg-black h-[2px] w-full bottom-0 left-0 dark:bg-white'></div>
                            </div>
                            <div className='text-sm pr-4 cursor-pointer'>
                                {copy ? (
                                    <div className='flex items-center gap-1'>
                                        <BsCheck2Circle />
                                    </div>
                                ) :
                                    (
                                        <div className='flex items-center gap-1' onClick={() => {
                                            navigator.clipboard.writeText(build);
                                            setCopy(true)
                                            setTimeout(() => {
                                                setCopy(false)
                                            }, 3000)
                                        }}>
                                            <BsClipboard2 />
                                        </div>
                                    )}
                            </div>
                        </article>

                        <SyntaxHighlighter language="" style={theme === "dark" ? arta : lightfair}>
                            {build}
                        </SyntaxHighlighter>
                    </section >
                </li>

                <li className='grid grid-cols-2 xl:flex xl:flex-col'>
                    <section className='flex gap-2'>
                        <div>
                            <div className='flex gap-2'>
                                <p className='flex items-center justify-center w-6 h-6 bg-neutral-200 dark:bg-neutral-800 rounded-md text-sm'>6</p>
                                <h3 className='font-medium pb-2'>Start using Tailwind in your project</h3>
                            </div>
                            <p className='dark:text-neutral-300 pb-4'>Start using Tailwind’s utility classes to style your content.</p>
                        </div>
                    </section>
                    <section className='ml-2 xl:ml-8 shadow-md'>
                        <article className='flex justify-between items-center w-full h-8 bg-corporative rounded-t-md'>
                            <div className='relative flex items-center bg-[#bd4c86] h-8 px-4'>
                                <span className='cursor-default text-white'>index.astro</span>
                                <div className='absolute bg-black h-[2px] w-full bottom-0 left-0 dark:bg-white'></div>
                            </div>
                            <div className='text-sm pr-4 cursor-pointer'>
                                {copy ? (
                                    <div className='flex items-center gap-1'>
                                        <BsCheck2Circle />
                                    </div>
                                ) :
                                    (
                                        <div className='flex items-center gap-1' onClick={() => {
                                            navigator.clipboard.writeText(start);
                                            setCopy(true)
                                            setTimeout(() => {
                                                setCopy(false)
                                            }, 3000)
                                        }}>
                                            <BsClipboard2 />
                                        </div>
                                    )}
                            </div>
                        </article>

                        <SyntaxHighlighter language="javascript" style={theme === "dark" ? arta : lightfair}>
                            {start}
                        </SyntaxHighlighter>
                    </section >
                </li>
            </ol>
        </div>
    )
}

export default AstroInstallation