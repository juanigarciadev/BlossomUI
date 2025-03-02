import React, { useState } from 'react'
import { DefaultJumbotron } from '../../../UI/Jumbotron/Jumbotron'
import CodeBlock from '@codeBlock'
import EditInGithub from '@editInGithub'
import {HideCodeIcon, ShowCodeIcon} from '@icons'

const DefaultJumbotronDoc = () => {

    const [showCode, setShowCode] = useState(false)

    const defaultJumbotron = `<div className="w-full h-full"><section className="grid gap-6 py-32"><h1 className="text-5xl font-bold text-center md:text-4xl">Completely free and easy to use.<h1><h3 className="text-center text-neutral-700 dark:text-neutral-300">Customizable, reusable and beautiful components made with Tailwind.</h3><div className="flex justify-center gap-2 md:flex-col"><button className='flex justify-center w-fit h-fit text-sm items-center text-center bg-blue-700 text-white gap-1 px-4 py-3 rounded-lg cursor-pointer font-medium select-none hover:bg-blue-800 md:w-full'>Get started<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707l-1.414 1.414L15.586 11H6v2h9.586z"/></svg></button><button className='flex justify-center items-center text-center border border-neutral-300 bg-transparent w-fit h-fit text-sm gap-2 px-4 py-[11px] rounded-lg cursor-pointer font-medium select-none hover:bg-neutral-200 hover:bg-opacity-40 hover:backdrop-blur-md md:w-full dark:text-white dark:hover:bg-neutral-800'>Learn more</button></div></section></div>`

    const githubUrl = 'https://github.com/juanigarciadev/BlossomUI/blob/main/src/components/UI/Jumbotron/Jumbotron.jsx'

    return (
        <article>
            <div className='pb-4'>
                <h3 className='text-lg font-medium'>Default</h3>
                <p className='dark:text-neutral-300'>Display a catchy title, overview, and two CTA buttons.</p>
            </div>
            <div className='flex gap-2 pb-2 select-none lg:flex-col'>
                <button className='bg-neutral-200 px-5 py-3 rounded-lg dark:bg-neutral-800 lg:w-full lg:flex lg:justify-center' onClick={() => setShowCode(!showCode)}>{showCode ? <div className='flex items-center gap-1'><HideCodeIcon/><span>Hide code</span></div> : <div className='flex items-center gap-1'><ShowCodeIcon/><span>Show code</span></div>}</button>
                <EditInGithub url={githubUrl} />
            </div>
            <div className='flex flex-col'>
                {showCode ?
                    <div>
                        <section className='flex flex-wrap rounded-lg gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                            <DefaultJumbotron />
                        </section>
                        <CodeBlock name={"Default"} code={defaultJumbotron} language={"jsx"} />
                    </div>
                    :
                    <section className='flex flex-wrap rounded-lg gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                        <DefaultJumbotron />
                    </section>}
            </div>
        </article>
    )
}

export default DefaultJumbotronDoc