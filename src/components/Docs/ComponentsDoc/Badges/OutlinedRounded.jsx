import React, { useState } from 'react'
import { CodeBlock } from '../../../../assets/CodeBlock/CodeBlock'
import { DarkOutlinedRounded, DefaultOutlinedRounded, GreenOutlinedRounded, PinkOutlinedRounded, PurpleOutlinedRounded, RedOutlinedRounded, YellowOutlinedRounded } from '../../../UI/Badges/Rounded/Outlined'
import { BiCode } from 'react-icons/bi'

const OutlinedRoundedBadges = () => {

    const [showCode, setShowCode] = useState(false)

    const outlinedBadges = "<span className='flex items-center h-fit w-fit text-sm px-4 py-2 font-medium border bg-blue-100 border-blue-900 text-blue-900 rounded-full cursor-default dark:bg-neutral-700 dark:text-blue-400 dark:border-blue-400'>And this is the rounded outlined version</span>\n<span className='flex items-center h-fit w-fit text-sm px-4 py-2 font-medium border bg-neutral-100 border-neutral-900 text-neutral-900 rounded-full cursor-default dark:bg-neutral-700 dark:text-neutral-400 dark:border-neutral-500'>And this is the rounded outlined version</span>\n<span className='flex items-center h-fit w-fit text-sm px-4 py-2 font-medium border bg-red-100 border-red-900 text-red-900 rounded-full cursor-default dark:bg-neutral-700 dark:text-red-400 dark:border-red-400'>And this is the rounded outlined version</span>\n<span className='flex items-center h-fit w-fit text-sm px-4 py-2 font-medium border bg-green-100 border-green-900 text-green-900 rounded-full cursor-default dark:bg-neutral-700 dark:text-green-400 dark:border-green-400'>And this is the rounded outlined version</span>\n<span className='flex items-center h-fit w-fit text-sm px-4 py-2 font-medium border bg-yellow-100 border-yellow-900 text-yellow-900 rounded-full cursor-default dark:bg-neutral-700 dark:text-yellow-400 dark:border-yellow-300'>And this is the rounded outlined version</span>\n<span className='flex items-center h-fit w-fit text-sm px-4 py-2 font-medium border bg-purple-100 border-purple-900 text-purple-900 rounded-full cursor-default dark:bg-neutral-700 dark:text-purple-400 dark:border-purple-400'>And this is the rounded outlined version</span>\n<span className='flex items-center h-fit w-fit text-sm px-4 py-2 font-medium border bg-pink-100 border-pink-900 text-pink-900 rounded-full cursor-default dark:bg-neutral-700 dark:text-pink-400 dark:border-pink-400'>And this is the rounded outlined version</span>"
    return (
        <article>
            <div className='pb-4'>
                <h3 className='text-lg font-medium'>Outlined rounded badges</h3>
                <p className='dark:text-neutral-300'>Outlined badges with fully rounded edges variant.</p>
            </div>
            <div className='flex pb-2 select-none'>
                <div className='flex items-center bg-neutral-200 p-[5px] rounded-lg dark:bg-neutral-800 lg:w-full'>
                    <span className={showCode ? 'flex items-center gap-2 px-4 py-1 rounded-lg cursor-pointer bg-neutral-400 dark:bg-neutral-900 lg:w-full lg:justify-center' : 'flex items-center gap-2 px-4 py-1 rounded-lg cursor-pointer hover:bg-neutral-400 dark:hover:bg-neutral-900 lg:w-full lg:justify-center'} onClick={() => setShowCode(!showCode)}><BiCode />Show code</span>
                </div>
            </div>
            <div className='flex flex-col'>
                {showCode ?
                    <div>
                        <section className='flex flex-wrap rounded-lg gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                            <DefaultOutlinedRounded />
                            <DarkOutlinedRounded />
                            <RedOutlinedRounded />
                            <GreenOutlinedRounded />
                            <YellowOutlinedRounded />
                            <PurpleOutlinedRounded />
                            <PinkOutlinedRounded />
                        </section>
                        <CodeBlock name={"Outlined rounded"} code={outlinedBadges} language={"javascript"} />
                    </div>
                    :
                    <section className='flex flex-wrap rounded-lg gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                        <DefaultOutlinedRounded />
                        <DarkOutlinedRounded />
                        <RedOutlinedRounded />
                        <GreenOutlinedRounded />
                        <YellowOutlinedRounded />
                        <PurpleOutlinedRounded />
                        <PinkOutlinedRounded />
                    </section>}
            </div>
        </article>
    )
}

export default OutlinedRoundedBadges