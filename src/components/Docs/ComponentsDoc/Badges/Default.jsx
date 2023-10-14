import React, { useState } from 'react'
import { CodeBlock } from '../../../../assets/CodeBlock/CodeBlock'
import { Dark, Default, Green, Pink, Purple, Red, Yellow } from '../../../UI/Badges/Normal/Default'
import { BiCode } from 'react-icons/bi'
import EditInGithub from '../../../EditInGithub/EditInGithub'

const DefaultBadges = () => {

    const [showCode, setShowCode] = useState(false)

    const defaultBadges = "<span className='flex items-center font-medium h-fit w-fit text-sm px-4 py-2 bg-blue-100 text-blue-900 rounded-lg cursor-default dark:bg-blue-900 dark:text-blue-300'>This is the filled version of the badge</span>\n<span className='flex items-center font-medium h-fit w-fit text-sm px-4 py-2 bg-neutral-100 text-neutral-900 rounded-lg cursor-default dark:bg-neutral-700 dark:text-neutral-300'>This is the filled version of the badge</span>\n<span className='flex items-center font-medium h-fit w-fit text-sm px-4 py-2 bg-red-100 text-red-900 rounded-lg cursor-default dark:bg-red-900 dark:text-red-300'>This is the filled version of the badge</span>\n<span className='flex items-center font-medium h-fit w-fit text-sm px-4 py-2 bg-green-100 text-green-900 rounded-lg cursor-default dark:bg-green-900 dark:text-green-300'>This is the filled version of the badge</span>\n<span className='flex items-center font-medium h-fit w-fit text-sm px-4 py-2 bg-yellow-100 text-yellow-900 rounded-lg cursor-default dark:bg-yellow-900 dark:text-yellow-300'>This is the filled version of the badge</span>\n<span className='flex items-center font-medium h-fit w-fit text-sm px-4 py-2 bg-purple-100 text-purple-900 rounded-lg cursor-default dark:bg-purple-900 dark:text-purple-300'>This is the filled version of the badge</span>\n<span className='flex items-center font-medium h-fit w-fit text-sm px-4 py-2 bg-pink-100 text-pink-900 rounded-lg cursor-default dark:bg-pink-900 dark:text-pink-300'>This is the filled version of the badge</span>"

    return (
        <article>
            <div className='pb-4'>
                <h3 className='text-lg font-medium'>Default badges</h3>
                <p className='dark:text-neutral-300'>Use badges to highlight some important characteristic of an element or set of elements.</p>
            </div>
            <div className='flex pb-2 gap-2 select-none lg:flex-col'>
                <div className='flex items-center bg-neutral-200 p-[5px] rounded-lg dark:bg-neutral-800 lg:w-full'>
                    <span className={showCode ? 'flex items-center gap-2 px-4 py-1 rounded-lg cursor-pointer bg-neutral-400 dark:bg-neutral-900 lg:w-full lg:justify-center' : 'flex items-center gap-2 px-4 py-1 rounded-lg cursor-pointer hover:bg-neutral-400 dark:hover:bg-neutral-900 lg:w-full lg:justify-center'} onClick={() => setShowCode(!showCode)}><BiCode />Show code</span>
                </div>
                <EditInGithub url={'https://github.com/juanigarciadev/BlossomUI/blob/main/src/components/UI/Badges/Normal/Default.jsx'} />
            </div>
            <div className='flex flex-col'>
                {showCode ?
                    <div>
                        <section className='flex flex-wrap rounded-lg gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                            <Default />
                            <Dark />
                            <Red />
                            <Green />
                            <Yellow />
                            <Purple />
                            <Pink />
                        </section>
                        <CodeBlock name={"Default"} code={defaultBadges} language={"javascript"} />
                    </div>
                    :
                    <section className='flex flex-wrap rounded-lg gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                        <Default />
                        <Dark />
                        <Red />
                        <Green />
                        <Yellow />
                        <Purple />
                        <Pink />
                    </section>}

            </div>
        </article>
    )
}

export default DefaultBadges