import React from 'react'
import { CodeBlock } from '../../../../assets/CodeBlock/CodeBlock'
import { DarkRounded, DefaultRounded, GreenRounded, PinkRounded, PurpleRounded, RedRounded, YellowRounded } from '../../../UI/Badges/Rounded/Default'

const DefaultRoundedBadges = () => {
    const defaultRoundedBadges = "<span className='flex items-center font-medium h-fit w-fit text-sm px-4 py-2 bg-blue-100 text-blue-900 rounded-full cursor-default dark:bg-blue-900 dark:text-blue-300'>This is the filled version of the badge</span>\n<span className='flex items-center font-medium h-fit w-fit text-sm px-4 py-2 bg-neutral-100 text-neutral-900 rounded-full cursor-default dark:bg-neutral-700 dark:text-neutral-300'>This is the filled version of the badge</span>\n<span className='flex items-center font-medium h-fit w-fit text-sm px-4 py-2 bg-neutral-100 text-neutral-900 rounded-full cursor-default dark:bg-neutral-700 dark:text-neutral-300'>This is the filled version of the badge</span>\n<span className='flex items-center font-medium h-fit w-fit text-sm px-4 py-2 bg-green-100 text-green-900 rounded-full cursor-default dark:bg-green-900 dark:text-green-300'>This is the filled version of the badge</span>\n<span className='flex items-center font-medium h-fit w-fit text-sm px-4 py-2 bg-yellow-100 text-yellow-900 rounded-full cursor-default dark:bg-yellow-900 dark:text-yellow-300'>This is the filled version of the badge</span>\n<span className='flex items-center font-medium h-fit w-fit text-sm px-4 py-2 bg-purple-100 text-purple-900 rounded-full cursor-default dark:bg-purple-900 dark:text-purple-300'>This is the filled version of the badge</span>\n<span className='flex items-center font-medium h-fit w-fit text-sm px-4 py-2 bg-pink-100 text-pink-900 rounded-full cursor-default dark:bg-pink-900 dark:text-pink-300'>This is the filled version of the badge</span>"
    return (
        <article>
            <div className='pb-4'>
                <h3 className='text-lg font-medium'>Default rounded badges</h3>
                <p className='dark:text-neutral-300'>Use badges to highlight some important characteristic of an element or set of elements.</p>
            </div>
            <div className='flex flex-col'>
                <section className='flex flex-wrap gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                    <DefaultRounded />
                    <DarkRounded />
                    <RedRounded />
                    <GreenRounded />
                    <YellowRounded />
                    <PurpleRounded />
                    <PinkRounded />
                </section>
                <CodeBlock name={"Default rounded"} code={defaultRoundedBadges} language={"javascript"} />
            </div>
        </article>
    )
}

export default DefaultRoundedBadges