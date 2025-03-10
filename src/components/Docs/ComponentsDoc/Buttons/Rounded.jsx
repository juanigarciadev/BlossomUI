import React, { useState } from 'react'
import { DefaultButtonRounded, GreenButtonRounded, PinkButtonRounded, PrimaryButtonRounded, PurpleButtonRounded, RedButtonRounded, SecondaryButtonRounded, YellowButtonRounded } from '../../../UI/Buttons/Rounded/Default'
import CodeBlock from '@codeBlock'
import EditInGithub from '@editInGithub'
import {HideCodeIcon, ShowCodeIcon} from '@icons'

const Rounded = () => {

    const [showCode, setShowCode] = useState(false)

    const roundedButtons = "<button className='flex justify-center w-fit h-fit text-sm items-center text-center bg-black text-white gap-2 px-4 py-3 rounded-full cursor-pointer font-medium select-none hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200'>Primary</button>\n<button className='flex justify-center items-center text-center border border-neutral-300 bg-transparent w-fit h-fit text-sm gap-2 px-4 py-[11px] rounded-full cursor-pointer font-medium select-none hover:bg-neutral-200 dark:text-white dark:hover:bg-neutral-800'>Secondary</button>\n<button className='flex justify-center w-fit h-fit text-sm items-center text-center bg-blue-700 text-white gap-2 px-4 py-3 rounded-full cursor-pointer font-medium select-none hover:bg-blue-800'>Default</button>\n<button className='flex justify-center w-fit h-fit text-sm items-center text-center bg-red-700 text-white gap-2 px-4 py-3 rounded-full cursor-pointer font-medium select-none hover:bg-red-800'>Red</button>\n<button className='flex justify-center w-fit h-fit text-sm items-center text-center bg-green-700 text-white gap-2 px-4 py-3 rounded-full cursor-pointer font-medium select-none hover:bg-green-800'>Green</button>\n<button className='flex justify-center w-fit h-fit text-sm items-center text-center bg-yellow-400 text-white gap-2 px-4 py-3 rounded-full cursor-pointer font-medium select-none hover:bg-yellow-500'>Yellow</button>"

    const githubUrl = 'https://github.com/juanigarciadev/BlossomUI/blob/main/src/components/UI/Buttons/Rounded/Default.jsx'
    
    return (
        <article>
            <div className='pb-4'>
                <h3 className='text-lg font-medium'>Rounded</h3>
                <p className='dark:text-neutral-300'>You can also use this fully rounded edges variant.</p>
            </div>
            <div className='flex pb-2 gap-2 select-none lg:flex-col'>
                <button className='bg-neutral-200 px-5 py-3 rounded-lg dark:bg-neutral-800 lg:w-full lg:flex lg:justify-center' onClick={() => setShowCode(!showCode)}>{showCode ? <div className='flex items-center gap-1'><HideCodeIcon/><span>Hide code</span></div> : <div className='flex items-center gap-1'><ShowCodeIcon/><span>Show code</span></div>}</button>
                <EditInGithub url={githubUrl} />
            </div>
            <div className='flex flex-col'>
                {showCode ?
                    <div>
                        <section className='flex flex-wrap rounded-lg gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                            <PrimaryButtonRounded />
                            <SecondaryButtonRounded />
                            <DefaultButtonRounded />
                            <RedButtonRounded />
                            <GreenButtonRounded />
                            <YellowButtonRounded />
                            <PurpleButtonRounded />
                            <PinkButtonRounded />
                        </section>
                        <CodeBlock name={"Rounded"} code={roundedButtons} language={"javascript"} />
                    </div>
                    :
                    <section className='flex flex-wrap rounded-lg gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                        <PrimaryButtonRounded />
                        <SecondaryButtonRounded />
                        <DefaultButtonRounded />
                        <RedButtonRounded />
                        <GreenButtonRounded />
                        <YellowButtonRounded />
                        <PurpleButtonRounded />
                        <PinkButtonRounded />
                    </section>}
            </div>
        </article>
    )
}

export default Rounded