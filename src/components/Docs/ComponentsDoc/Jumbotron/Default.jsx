import React, { useState } from 'react'
import { CodeBlock } from '../../../CodeBlock/CodeBlock'
import { BiCode } from 'react-icons/bi'
import EditInGithub from '../../../EditInGithub/EditInGithub'
import { DefaultJumbotron } from '../../../UI/Jumbotron/Jumbotron'

const DefaultJumbotronDoc = () => {

    const [showCode, setShowCode] = useState(false)

    const defaultJumbotron = 
    `<div className="w-full h-full">\n  <section className="grid gap-6 py-32">\n       <h1 className="text-5xl font-bold text-center md:text-4xl">Completely free and easy to use.</h1>\n       <h3 className="text-center text-neutral-700 dark:text-neutral-300">Customizable, reusable and beautiful components made with Tailwind.</h3>\n       <div className="flex justify-center gap-2 md:flex-col">\n           <button className='flex justify-center w-fit h-fit text-sm items-center text-center bg-blue-700 text-white gap-1 px-4 py-3 rounded-lg cursor-pointer font-medium select-none hover:bg-blue-800 md:w-full'>Get started<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707l-1.414 1.414L15.586 11H6v2h9.586z"/></svg></button>\n           <button className='flex justify-center items-center text-center border border-neutral-300 bg-transparent w-fit h-fit text-sm gap-2 px-4 py-[11px] rounded-lg cursor-pointer font-medium select-none hover:bg-neutral-200 hover:bg-opacity-40 hover:backdrop-blur-md md:w-full dark:text-white dark:hover:bg-neutral-800'>Learn more</button>\n   </div>\n </section>\n</div>`

    return (
        <article>
            <div className='pb-4'>
                <h3 className='text-lg font-medium'>Default</h3>
                <p className='dark:text-neutral-300'>Display a catchy title, overview, and two CTA buttons.</p>
            </div>
            <div className='flex gap-2 pb-2 select-none lg:flex-col'>
                <div className='flex items-center bg-neutral-200 p-[5px] rounded-lg dark:bg-neutral-800 lg:w-full'>
                    <span className={showCode ? 'flex items-center gap-2 px-4 py-1 rounded-lg cursor-pointer bg-neutral-400 dark:bg-neutral-900 lg:w-full lg:justify-center' : 'flex items-center gap-2 px-4 py-1 rounded-lg cursor-pointer hover:bg-neutral-400 dark:hover:bg-neutral-900 lg:w-full lg:justify-center'} onClick={() => setShowCode(!showCode)}><BiCode />Show code</span>
                </div>
                <EditInGithub url={'https://github.com/juanigarciadev/BlossomUI/blob/main/src/components/UI/Jumbotron/Jumbotron.jsx'} />
            </div>
            <div className='flex flex-col'>
                {showCode ?
                    <div>
                        <section className='flex flex-wrap rounded-lg gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                            <DefaultJumbotron/>
                        </section>
                        <CodeBlock name={"Default"} code={defaultJumbotron} language={"jsx"} />
                    </div>
                    :
                    <section className='flex flex-wrap rounded-lg gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                       <DefaultJumbotron/>
                    </section>}
            </div>
        </article>
    )
}

export default DefaultJumbotronDoc