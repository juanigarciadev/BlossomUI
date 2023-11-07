import React, { useState } from 'react'
import { CodeBlock } from '../../../CodeBlock/CodeBlock'
import { BiCode } from 'react-icons/bi'
import EditInGithub from '../../../EditInGithub/EditInGithub'
import { DarkBadgeWithIcon, DefaultBadgeWithIcon, GreenBadgeWithIcon, RedBadgeWithIcon } from '../../../UI/Badges/Normal/WithIcons'

const BadgesWithIcons = () => {

    const [showCode, setShowCode] = useState(false)

    const badgesWithIcons = `<span className='flex items-center font-medium h-fit w-fit text-xs px-2.5 py-1 gap-1 bg-blue-100 text-blue-900 rounded-lg cursor-default dark:bg-blue-900 dark:text-blue-300'><svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24'><path fill='currentColor' d='M12.79 21L3 11.21v2c0 .53.21 1.04.59 1.41l7.79 7.79c.78.78 2.05.78 2.83 0l6.21-6.21c.78-.78.78-2.05 0-2.83L12.79 21z' /><path fill='currentColor' d='M11.38 17.41c.78.78 2.05.78 2.83 0l6.21-6.21c.78-.78.78-2.05 0-2.83L12.63.58A2.04 2.04 0 0 0 11.21 0H5C3.9 0 3 .9 3 2v6.21c0 .53.21 1.04.59 1.41l7.79 7.79zM7.25 3a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5z' /></svg>40% OFF</span>\n<span className='flex items-center font-medium h-fit w-fit text-xs px-2.5 py-1 gap-1 bg-neutral-100 text-neutral-900 rounded-lg cursor-default dark:bg-neutral-700 dark:text-neutral-300'><svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24'><path fill='#737373' d='M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m4.2 14.2L11 13V7h1.5v5.2l4.5 2.7l-.8 1.3Z' /></svg>3 minutes ago</span>\n<span className='flex items-center font-medium h-fit w-fit text-xs px-2.5 py-1 gap-1 bg-green-100 text-green-900 rounded-lg cursor-default dark:bg-green-900 dark:text-green-300'><svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24'><path fill='currentColor' d='M11 8.414V18h2V8.414l4.293 4.293l1.414-1.414L12 4.586l-6.707 6.707l1.414 1.414z' /></svg>37%</span>\n<span className='flex items-center font-medium h-fit w-fit text-xs px-2.5 py-1 gap-1 bg-red-100 text-red-900 rounded-lg cursor-default dark:bg-red-900 dark:text-red-300'><svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24'><path fill='currentColor' d='m18.707 12.707l-1.414-1.414L13 15.586V6h-2v9.586l-4.293-4.293l-1.414 1.414L12 19.414z' /></svg>18%</span>`

    return (
        <article>
            <div className='pb-4'>
                <h3 className='text-lg font-medium'>With icons</h3>
                <p className='dark:text-neutral-300'>Use this variant in cards for discounts, statistics and more.</p>
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
                            <DefaultBadgeWithIcon />
                            <DarkBadgeWithIcon />
                            <GreenBadgeWithIcon />
                            <RedBadgeWithIcon />
                        </section>
                        <CodeBlock name={"With icons"} code={badgesWithIcons} language={"javascript"} />
                    </div>
                    :
                    <section className='flex flex-wrap rounded-lg gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                        <DefaultBadgeWithIcon />
                        <DarkBadgeWithIcon />
                        <GreenBadgeWithIcon />
                        <RedBadgeWithIcon />
                    </section>}

            </div>
        </article>
    )
}

export default BadgesWithIcons