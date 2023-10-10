import React, { useState } from 'react'
import { useContext } from 'react';
import { BsClipboard2, BsCheck2Circle } from 'react-icons/bs'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ThemeContext } from '../../../context/ThemeContext';
import { arta, lightfair } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const NextJSInstallation = () => {
    const { theme } = useContext(ThemeContext)
    const [copy, setCopy] = useState(false)

    const createVite = 'npx create-next-app@latest my-project --typescript --eslint\ncd my-project'
    const installTailwind = 'npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p'
    const configurePaths = '/** @type {import("tailwindcss").Config} */\nmodule.exports = {\n  content: [\n    "./app/**/*.{js,ts,jsx,tsx,mdx}",\n    "./pages/**/*.{js,ts,jsx,tsx,mdx}",\n    "./components/**/*.{js,ts,jsx,tsx,mdx}",\n\n    // Or if using `src` directory:\n    "./src/**/*.{js,ts,jsx,tsx,mdx}",\n  ],\n  theme: {\n    extend: {},\n  },\n  plugins: [],\n}'
    const directives = '@tailwind base;\n@tailwind components;\n@tailwind utilities;'
    const build = 'npm run dev'
    const start = 'export default function Home() {\n  return (\n    <h1 className="text-3xl font-bold underline">\n      Hello world!\n    </h1>\n  )\n}'
    return (
        <div>
            <h3 className='text-4xl font-bold pb-4 text-neutral-800 dark:text-white'>With Next.js</h3>
            <ol className='flex flex-col gap-8 pb-8'>
                <li className='grid grid-cols-2 xl:flex xl:flex-col'>
                    <section className='flex gap-2'>
                        <div>
                            <div className='flex gap-2'>
                                <p className='flex items-center justify-center w-6 h-6 bg-neutral-200 dark:bg-neutral-800 rounded-md text-sm'>1</p>
                                <h3 className='font-medium pb-2'>Create your project</h3>
                            </div>
                            <p className='dark:text-neutral-300 pb-4'>Start by creating a new Next.js project if you don't have one set up already. The most common aproach is to use <a href="https://nextjs.org/docs/pages/api-reference/create-next-app" target='_blank' className='text-corporative hover:text-corporativeHovear'>Create Next App</a>.</p>
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
                            <p className='dark:text-neutral-300 pb-4'>Install `tailwindcss` and its peer dependencies via npm, and then run the init command to generate both `tailwind.config.js` and `postcss.config.js`.</p>
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
                                <p className='flex items-center justify-center w-6 h-6 bg-neutral-200 dark:bg-neutral-800 rounded-md text-sm'>3</p>
                                <h3 className='font-medium pb-2'>Configure your templates paths</h3>
                            </div>
                            <p className='dark:text-neutral-300 pb-4'>Add the paths to all of your template files in your `tailwind.config.js` file.</p>
                        </div>
                    </section>
                    <section className='ml-2 xl:ml-8 shadow-md'>
                        <article className='flex justify-between items-center w-full h-8 bg-corporative rounded-t-md'>
                            <div className='relative flex items-center bg-[#bd4c86] h-8 px-4'>
                                <span className='cursor-default text-white'>tailwind.config.js</span>
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
                                            navigator.clipboard.writeText(configurePaths);
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
                            {configurePaths}
                        </SyntaxHighlighter>
                    </section >

                </li>

                <li className='grid grid-cols-2 xl:flex xl:flex-col'>
                    <section className='flex gap-2'>
                        <div>
                            <div className='flex gap-2'>
                                <p className='flex items-center justify-center w-6 h-6 bg-neutral-200 dark:bg-neutral-800 rounded-md text-sm'>4</p>
                                <h3 className='font-medium pb-2'>Add the Tailwind directives to your CSS</h3>
                            </div>
                            <p className='dark:text-neutral-300 pb-4'>Add the `@tailwind` directives for each of Tailwind’s layers to your `globals.css` file.</p>
                        </div>
                    </section>
                    <section className='ml-2 xl:ml-8 shadow-md'>
                        <article className='flex justify-between items-center w-full h-8 bg-corporative rounded-t-md'>
                            <div className='relative flex items-center bg-[#bd4c86] h-8 px-4'>
                                <span className='cursor-default text-white'>globals.css</span>
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
                                            navigator.clipboard.writeText(directives);
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

                        <SyntaxHighlighter language="css" style={theme === "dark" ? arta : lightfair}>
                            {directives}
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
                                <span className='cursor-default text-white'>index.tsx</span>
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

export default NextJSInstallation