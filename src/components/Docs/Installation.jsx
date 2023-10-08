import React, { useState } from 'react'
import Aside from './Aside'
import { BiRightArrowAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { installation } from '../../mocks/installation'
import ViteInstallation from './InstallationContent/ViteInstallation'
import AngularInstallation from './InstallationContent/AngularInstallation'
import NuxtInstallation from './InstallationContent/NuxtInstallation'
import AstroInstallation from './InstallationContent/AstroInstallation'
import SolidJSInstallation from './InstallationContent/SolidJSInstallation'
import SvelteKitInstallation from './InstallationContent/SvelteKitInstallation'

const Installation = () => {
    const [content, setContent] = useState("Vite")
    return (
        <div className='flex pt-[70px] w-full h-screen relative'>
            <Aside />
            <section className='absolute left-[22%] w-[78%] pl-8 pt-4 xl:left-[18%] lg:w-[100%] lg:left-0 lg:px-0 dark:text-white'>
                <h1 className='text-4xl font-bold pb-4 text-neutral-800 dark:text-white'>Installation</h1>
                <div className='grid grid-cols-3 gap-4 lg:grid-cols-2 pb-8 md:grid-cols-3'>
                    {installation.map((technologie) => {
                        return (
                            <article key={technologie.name} className='group flex flex-col gap-4 h-auto p-4 border border-neutral-300 rounded-xl bg-neutral-200 cursor-pointer shadow-sm md:w-auto hover:shadow-md duration-300 dark:bg-neutral-800 dark:border-neutral-600 hover:border-corporative dark:hover:border-corporative' onClick={() => setContent(`${technologie.name}`)}>
                                <div className='flex items-center gap-2 md:justify-center'>
                                    {<technologie.img />}
                                    <span className='font-medium md:hidden'>{technologie.name}</span>
                                    <BiRightArrowAlt className='text-neutral-800 opacity-0 text-xl group-hover:opacity-100 duration-200 md:hidden dark:text-neutral-300' />
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
                        If you don't see your framework, you can visit the full Tailwind documentation <a href="https://tailwindcss.com/docs/installation/framework-guides" target='_blank' className='text-corporative hover:text-corporativeHover'>here</a>.
                    </p>
                </div>
                <div>
                    {content === "Vite" ? <ViteInstallation /> : null}
                    {content === "Angular" ? <AngularInstallation /> : null}
                    {content === "Nuxt" ? <NuxtInstallation /> : null}
                    {content === "SvelteKit" ? <SvelteKitInstallation /> : null}
                    {content === "Astro" ? <AstroInstallation /> : null}
                    {content === "SolidJS" ? <SolidJSInstallation /> : null}
                </div>
            </section>
        </div>
    )
}

export default Installation