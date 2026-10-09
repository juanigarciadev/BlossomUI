import { useState } from 'react'
import { installation } from '../../mocks/installation'
import ViteInstallation from './InstallationContent/ViteInstallation'
import AngularInstallation from './InstallationContent/AngularInstallation'
import NuxtInstallation from './InstallationContent/NuxtInstallation'
import AstroInstallation from './InstallationContent/AstroInstallation'
import SvelteKitInstallation from './InstallationContent/SvelteKitInstallation'
import NextJSInstallation from './InstallationContent/NextJSInstallation'
import { ArrowRight } from 'lucide-react'
import DocPage from './DocPage'

const Installation = () => {
    const [content, setContent] = useState("Vite")
    return (
        <DocPage title='Installation'>
                <div className='grid grid-cols-3 gap-4 lg:grid-cols-2 pb-8 md:grid-cols-3 sm:grid-cols-2'>
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
                        If you don&apos;t see your framework, you can visit the <a href="https://tailwindcss.com/docs/installation/framework-guides" target='_blank' rel='noreferrer' className='text-corporative hover:text-corporativeHover'>full Tailwind documentation</a>.
                    </p>
                </div>
                <div>
                    {content === "Vite" ? <ViteInstallation /> : null}
                    {content === "Angular" ? <AngularInstallation /> : null}
                    {content === "Nuxt" ? <NuxtInstallation /> : null}
                    {content === "SvelteKit" ? <SvelteKitInstallation /> : null}
                    {content === "Astro" ? <AstroInstallation /> : null}
                    {content === "Next.js" ? <NextJSInstallation /> : null}
                </div>
        </DocPage>
    )
}

export default Installation
