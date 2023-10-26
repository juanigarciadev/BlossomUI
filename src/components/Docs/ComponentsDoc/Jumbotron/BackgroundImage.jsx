import React, { useState } from 'react'
import { CodeBlock } from '../../../CodeBlock/CodeBlock'
import { BiCode } from 'react-icons/bi'
import EditInGithub from '../../../EditInGithub/EditInGithub'
import { BackgroundImageJumbotron } from '../../../UI/Jumbotron/Jumbotron'

const BackgroundJumbotron = () => {

    const [showCode, setShowCode] = useState(false)

    const withBackgroundImage = `<div className="w-full h-full">
    <section className="grid gap-6 py-32 bg-neutral-500 bg-[url('https://res.cloudinary.com/diruiumfk/image/upload/v1698362153/lake_zmcuam.jpg')] bg-center bg-no-repeat bg-blend-multiply">
        <h1 className="text-5xl font-bold text-center text-white md:text-4xl">Completely free and easy to use.</h1>
        <h3 className="text-center text-neutral-300">Customizable, reusable and beautiful components made with Tailwind.</h3>
        <div className="flex justify-center gap-2 md:flex-col">
            <button className='flex justify-center w-fit h-fit text-sm items-center text-center bg-blue-700 text-white gap-1 px-4 py-3 rounded-lg cursor-pointer font-medium select-none hover:bg-blue-800 md:w-full'>Get started<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707l-1.414 1.414L15.586 11H6v2h9.586z"/></svg></button>
            <button className='flex justify-center items-center text-center text-white border border-neutral-300 bg-transparent w-fit h-fit text-sm gap-2 px-4 py-[11px] rounded-lg cursor-pointer font-medium select-none hover:bg-white hover:text-black md:w-full'>Learn more</button>
        </div>
    </section>
</div>`

    return (
        <article>
            <div className='pb-4'>
                <h3 className='text-lg font-medium'>With background image</h3>
                <p className='dark:text-neutral-300'>Use this variant to apply a background image with an opacity effect to improve readability.</p>
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
                            <BackgroundImageJumbotron/>
                        </section>
                        <CodeBlock name={"With background image"} code={withBackgroundImage} language={"jsx"} />
                    </div>
                    :
                    <section className='flex flex-wrap rounded-lg gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                       <BackgroundImageJumbotron/>
                    </section>}
            </div>
        </article>
    )
}

export default BackgroundJumbotron