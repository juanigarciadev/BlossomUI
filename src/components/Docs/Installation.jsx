import { useState } from 'react'
import { installation } from '../../mocks/installation'
import ViteInstallation from './InstallationContent/ViteInstallation'
import NextJSInstallation from './InstallationContent/NextJSInstallation'
import { ArrowRight } from 'lucide-react'
import DocPage from './DocPage'
import CodeBlock from '@codeBlock'

const iconsCode = `npm install lucide-react

import { Heart } from 'lucide-react'
import { Button } from './components/ui/Button'

<Button icon={<Heart size={16} />}>Like</Button>`

const Installation = () => {
    const [content, setContent] = useState("Next.js")
    return (
        <DocPage title='Installation' description='Blossom UI is for React. Set up Tailwind CSS in your project and copy the components you need, there is no package to install.'>
                <div className='grid grid-cols-2 gap-4 pb-8 sm:grid-cols-1'>
                    {installation.map((technologie) => {
                        return (
                            <article key={technologie.name} role='button' tabIndex={0} aria-pressed={content === technologie.name} onKeyDown={(e) => e.key === 'Enter' && setContent(technologie.name)} className={`${content === technologie.name ? 'border-corporative dark:border-corporative ring-1 ring-corporative ' : ''}group flex flex-col gap-4 h-auto p-4 border border-neutral-300 rounded-xl bg-neutral-200 bg-opacity-40 cursor-pointer shadow-sm md:w-auto hover:shadow-md duration-300 dark:bg-neutral-800 dark:border-neutral-600 hover:border-corporative dark:hover:border-corporative` } onClick={() => setContent(`${technologie.name}`)}>
                                <div className='flex items-center gap-2 md:justify-center'>
                                    {<technologie.img />}
                                    <span className='font-medium md:hidden'>{technologie.name}</span>
                                    <ArrowRight size={18} className='text-neutral-800 opacity-0 group-hover:opacity-100 duration-200 md:hidden dark:text-neutral-300' />
                                </div>
                                <div className='flex items-center text-neutral-800 md:hidden'>
                                    <span className='dark:text-neutral-300'>
                                        {technologie.span}
                                    </span>
                                </div>
                            </article>
                        )
                    })}
                </div>
                <div>
                    <p className='pb-6'>
                        Components are written for Tailwind CSS 3 and React 18. Using another React setup? Visit the <a href="https://tailwindcss.com/docs/installation/framework-guides" target='_blank' rel='noreferrer' className='text-corporative hover:text-corporativeHover'>full Tailwind documentation</a>.
                    </p>
                </div>
                <div>
                    {content === "Vite" ? <ViteInstallation /> : null}
                    {content === "Next.js" ? <NextJSInstallation /> : null}
                </div>
                <section aria-labelledby='icons-title' className='flex flex-col gap-3 pt-10'>
                    <h2 id='icons-title' className='text-2xl font-bold tracking-tight scroll-mt-24'>Icons</h2>
                    <p className='text-neutral-600 dark:text-neutral-300'>
                        Blossom UI does not depend on an icon library. Components that show an icon, such as Button, Badge, Tabs or Dropdown, receive it as a React element in the <code className='rounded-md border border-neutral-200 bg-neutral-100 px-1.5 py-0.5 font-mono text-[0.85em] font-medium text-pink-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-pink-300'>icon</code> prop, so you can use the one you prefer: <a href='https://lucide.dev' target='_blank' rel='noreferrer' className='text-corporative hover:text-corporativeHover'>Lucide</a> (used in these docs), React Icons, Heroicons, Phosphor or your own inline SVG.
                    </p>
                    <CodeBlock name='Using Lucide' code={iconsCode} language='tsx' />
                </section>
        </DocPage>
    )
}

export default Installation
