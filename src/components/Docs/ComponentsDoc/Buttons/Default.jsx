import React, { useState } from 'react'
import { DefaultButton, GreenButton, PinkButton, PrimaryButton, PurpleButton, RedButton, SecondaryButton, YellowButton } from '../../../UI/Buttons/Normal/Default'
import { CodeBlock } from '../../../../assets/CodeBlock/CodeBlock'
import { BiCode } from 'react-icons/bi'
import EditInGithub from '../../../EditInGithub/EditInGithub'

const Default = () => {

    const [showCode, setShowCode] = useState(false)

    const defaultButtons = "<button className='flex justify-center w-fit h-fit text-sm items-center text-center bg-black text-white gap-2 px-4 py-3 rounded-lg cursor-pointer font-medium select-none hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200'>Primary</button>\n<button className='flex justify-center items-center text-center border border-neutral-300 bg-transparent w-fit h-fit text-sm gap-2 px-4 py-3 rounded-lg cursor-pointer font-medium select-none hover:bg-neutral-200 hover:bg-opacity-40 hover:backdrop-blur-md dark:text-white dark:hover:bg-neutral-800'>Secondary</button>\n<button className='flex justify-center w-fit h-fit text-sm items-center text-center bg-blue-700 text-white gap-2 px-4 py-3 rounded-lg cursor-pointer font-medium select-none hover:bg-blue-800'>Default</button>\n<button className='flex justify-center w-fit h-fit text-sm items-center text-center bg-red-700 text-white gap-2 px-4 py-3 rounded-lg cursor-pointer font-medium select-none hover:bg-red-800'>Red</button>\n<button className='flex justify-center w-fit h-fit text-sm items-center text-center bg-green-700 text-white gap-2 px-4 py-3 rounded-lg cursor-pointer font-medium select-none hover:bg-green-800'>Green</button>\n<button className='flex justify-center w-fit h-fit text-sm items-center text-center bg-yellow-400 text-white gap-2 px-4 py-3 rounded-lg cursor-pointer font-medium select-none hover:bg-yellow-500'>Yellow</button>\n<button className='flex justify-center w-fit h-fit text-sm items-center text-center bg-purple-600 text-white gap-2 px-4 py-3 rounded-lg cursor-pointer font-medium select-none hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-800'>Purple</button>\n<button className='flex justify-center w-fit h-fit text-sm items-center text-center bg-pink-700 text-white gap-2 px-4 py-3 rounded-lg cursor-pointer font-medium select-none hover:bg-pink-800'>Pink</button>"

    return (
        <article>
            <div className='pb-4'>
                <h3 className='text-lg font-medium'>Default buttons</h3>
                <p className='dark:text-neutral-300'>Use default buttons with multiple colors to determine actions or links.</p>
            </div>
            <div className='flex gap-2 pb-2 select-none lg:flex-col'>
                <div className='flex items-center bg-neutral-200 p-[5px] rounded-lg dark:bg-neutral-800 lg:w-full'>
                    <span className={showCode ? 'flex items-center gap-2 px-4 py-1 rounded-lg cursor-pointer bg-neutral-400 dark:bg-neutral-900 lg:w-full lg:justify-center' : 'flex items-center gap-2 px-4 py-1 rounded-lg cursor-pointer hover:bg-neutral-400 dark:hover:bg-neutral-900 lg:w-full lg:justify-center'} onClick={() => setShowCode(!showCode)}><BiCode />Show code</span>
                </div>
                <EditInGithub url={'https://github.com/juanigarciadev/BlossomUI/blob/main/src/components/UI/Buttons/Normal/Default.jsx'} />
            </div>
            <div className='flex flex-col'>
                {showCode ?
                    <div>
                        <section className='flex flex-wrap rounded-lg gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                            <PrimaryButton />
                            <SecondaryButton />
                            <DefaultButton />
                            <RedButton />
                            <GreenButton />
                            <YellowButton />
                            <PurpleButton />
                            <PinkButton />
                        </section>
                        <CodeBlock name={"Default"} code={defaultButtons} language={"javascript"} />
                    </div>
                    :
                    <section className='flex flex-wrap rounded-lg gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                        <PrimaryButton />
                        <SecondaryButton />
                        <DefaultButton />
                        <RedButton />
                        <GreenButton />
                        <YellowButton />
                        <PurpleButton />
                        <PinkButton />
                    </section>}
            </div>
        </article>
    )
}

export default Default