import React, { useState } from 'react'
import { CodeBlock } from '../../../CodeBlock/CodeBlock'
import { DarkOutlined, DefaultOutlined, GreenOutlined, PinkOutlined, PurpleOutlined, RedOutlined, YellowOutlined } from '../../../UI/Badges/Normal/Outlined'
import EditInGithub from '../../../EditInGithub/EditInGithub'
import { HideCodeIcon, ShowCodeIcon } from '../../../../assets/Icons/Icons'

const OutlinedBadges = () => {

    const [showCode, setShowCode] = useState(false)

    const outlinedBadges = `<span className='flex items-center h-fit w-fit text-xs px-2.5 py-1 font-medium border bg-blue-100 border-blue-900 text-blue-900 rounded-lg cursor-default dark:bg-neutral-700 dark:text-blue-400 dark:border-blue-400'>And this is the outlined version</span>\n<span className='flex items-center h-fit w-fit text-xs px-2.5 py-1 font-medium border bg-neutral-100 border-neutral-900 text-neutral-900 rounded-lg cursor-default dark:bg-neutral-700 dark:text-neutral-400 dark:border-neutral-500'>And this is the outlined version</span>\n<span className='flex items-center h-fit w-fit text-xs px-2.5 py-1 font-medium border bg-red-100 border-red-900 text-red-900 rounded-lg cursor-default dark:bg-neutral-700 dark:text-red-400 dark:border-red-400'>And this is the outlined version</span>\n<span className='flex items-center h-fit w-fit text-xs px-2.5 py-1 font-medium border bg-green-100 border-green-900 text-green-900 rounded-lg cursor-default dark:bg-neutral-700 dark:text-green-400 dark:border-green-400'>And this is the outlined version</span>\n<span className='flex items-center h-fit w-fit text-xs px-2.5 py-1 font-medium border bg-yellow-100 border-yellow-900 text-yellow-900 rounded-lg cursor-default dark:bg-neutral-700 dark:text-yellow-400 dark:border-yellow-300'>And this is the outlined version</span>\n<span className='flex items-center h-fit w-fit text-xs px-2.5 py-1 font-medium border bg-purple-100 border-purple-900 text-purple-900 rounded-lg cursor-default dark:bg-neutral-700 dark:text-purple-400 dark:border-purple-400'>And this is the outlined version</span>\n<span className='flex items-center h-fit w-fit text-xs px-2.5 py-1 font-medium border bg-pink-100 border-pink-900 text-pink-900 rounded-lg cursor-default dark:bg-neutral-700 dark:text-pink-400 dark:border-pink-400'>And this is the outlined version</span>`

    const githubUrl = 'https://github.com/juanigarciadev/BlossomUI/blob/main/src/components/UI/Badges/Normal/Outlined.jsx'

    return (
        <article>
            <div className='pb-4'>
                <h3 className='text-lg font-medium'>Outlined</h3>
                <p className='dark:text-neutral-300'>You can also use outlined variant for better contrast.</p>
            </div>
            <div className='flex pb-2 gap-2 select-none lg:flex-col'>
                <button className='bg-neutral-200 px-5 py-3 rounded-lg dark:bg-neutral-800 lg:w-full lg:flex lg:justify-center' onClick={() => setShowCode(!showCode)}>{showCode ? <div className='flex items-center gap-1'><HideCodeIcon/><span>Hide code</span></div> : <div className='flex items-center gap-1'><ShowCodeIcon/><span>Show code</span></div>}</button>
                <EditInGithub url={githubUrl} />
            </div>
            <div className='flex flex-col'>
                {showCode ?
                    <div>
                        <section className='flex flex-wrap rounded-lg gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                            <DefaultOutlined />
                            <DarkOutlined />
                            <RedOutlined />
                            <GreenOutlined />
                            <YellowOutlined />
                            <PurpleOutlined />
                            <PinkOutlined />
                        </section>
                        <CodeBlock name={"Outlined"} code={outlinedBadges} language={"javascript"} />
                    </div>
                    :
                    <section className='flex flex-wrap rounded-lg gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                        <DefaultOutlined />
                        <DarkOutlined />
                        <RedOutlined />
                        <GreenOutlined />
                        <YellowOutlined />
                        <PurpleOutlined />
                        <PinkOutlined />
                    </section>}
            </div>
        </article>
    )
}

export default OutlinedBadges