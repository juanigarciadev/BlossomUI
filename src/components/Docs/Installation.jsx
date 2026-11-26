import { useState } from 'react'
import { installation } from '../../mocks/installation'
import ViteInstallation from './InstallationContent/ViteInstallation'
import NextJSInstallation from './InstallationContent/NextJSInstallation'
import { ArrowRight } from 'lucide-react'
import DocPage from './DocPage'
import CodeBlock from '@codeBlock'
import { SITE } from '../../mocks/seo'
import InstallCommand from '../InstallCommand/InstallCommand'

const iconsCode = `npm install lucide-react

import { Heart } from 'lucide-react'
import { Button } from './components/ui/Button'

<Button icon={<Heart size={16} />}>Like</Button>`

const tailwindFourCode = `@import 'tailwindcss';
@source '../node_modules/${SITE.package}/dist';
@custom-variant dark (&:is(.dark *));`

const addCode = `npx ${SITE.package} add button modal
npx ${SITE.package} list`

const importCode = `import { Button } from '${SITE.package}'

// Every component also has its own entry
import { Modal } from '${SITE.package}/modal'`

const heading = 'text-2xl font-bold tracking-tight scroll-mt-24'
const text = 'text-neutral-600 dark:text-neutral-300'

const Installation = () => {
    const [content, setContent] = useState("Next.js")
    return (
        <DocPage title='Installation' description='Blossom UI is for React. Install the package, point Tailwind CSS at it and import your first component.'>
                <section aria-labelledby='install-title' className='flex flex-col gap-4'>
                    <h2 id='install-title' className={heading}>Install the package</h2>
                    <p className={text}>
                        One command gives you every component, typed and ready to import.
                    </p>
                    <InstallCommand />
                    <CodeBlock name='Import what you need' code={importCode} language='tsx' />
                </section>
                <section aria-labelledby='setup-title' className='flex flex-col gap-4'>
                    <h2 id='setup-title' className={heading}>Set up your project</h2>
                    <p className={text}>
                        Choose your framework and follow the steps. The components need React 18 or newer and Tailwind CSS. These steps use Tailwind CSS 3; for another setup visit the <a href="https://tailwindcss.com/docs/installation/framework-guides" target='_blank' rel='noreferrer' className='text-corporative hover:text-corporativeHover'>full Tailwind documentation</a>.
                    </p>
                <div className='grid grid-cols-2 gap-4 pb-4 sm:grid-cols-1'>
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
                    {content === "Vite" ? <ViteInstallation /> : null}
                    {content === "Next.js" ? <NextJSInstallation /> : null}
                    <p className={text}>
                        Using Tailwind CSS 4? Skip the config file and add these lines to your CSS. The path is relative to that file.
                    </p>
                    <CodeBlock name='Tailwind CSS 4' code={tailwindFourCode} language='css' />
                </section>
                <section aria-labelledby='other-title' className='flex flex-col gap-3'>
                    <h2 id='other-title' className={heading}>Other ways to use it</h2>
                    <p className={text}>
                        Prefer to own the code? Add only the components you want. The command copies their files into your project, without adding a dependency.
                    </p>
                    <CodeBlock name='Add single components' code={addCode} language='bash' />
                    <p className={text}>
                        You can also copy and paste: every component page shows the full file under <b className='font-medium'>Get the component</b>.
                    </p>
                </section>
                <section aria-labelledby='icons-title' className='flex flex-col gap-3'>
                    <h2 id='icons-title' className={heading}>Icons</h2>
                    <p className='text-neutral-600 dark:text-neutral-300'>
                        Blossom UI does not depend on an icon library. Components that show an icon, such as Button, Badge, Tabs or Dropdown, receive it as a React element in the <code className='rounded-md border border-neutral-200 bg-neutral-100 px-1.5 py-0.5 font-mono text-[0.85em] font-medium text-pink-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-pink-300'>icon</code> prop, so you can use the one you prefer: <a href='https://lucide.dev' target='_blank' rel='noreferrer' className='text-corporative hover:text-corporativeHover'>Lucide</a> (used in these docs), React Icons, Heroicons, Phosphor or your own inline SVG.
                    </p>
                    <CodeBlock name='Using Lucide' code={iconsCode} language='tsx' />
                </section>
        </DocPage>
    )
}

export default Installation
