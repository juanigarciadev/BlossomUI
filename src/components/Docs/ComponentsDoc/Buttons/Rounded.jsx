import React from 'react'
import { CodeBlock } from '../../../../assets/CodeBlock/CodeBlock'
import { DefaultButtonRounded, GreenButtonRounded, PinkButtonRounded, PrimaryButtonRounded, PurpleButtonRounded, RedButtonRounded, SecondaryButtonRounded, YellowButtonRounded } from '../../../UI/Buttons/Rounded/Default'

const Rounded = () => {
    const roundedButtons = "<button className='flex justify-center w-fit h-fit text-sm items-center text-center bg-black text-white gap-2 px-4 py-3 rounded-full cursor-pointer font-medium select-none hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200'>Primary</button>\n<button className='flex justify-center items-center text-center border border-neutral-300 bg-transparent w-fit h-fit text-sm gap-2 px-4 py-3 rounded-full cursor-pointer font-medium select-none hover:bg-neutral-200 hover:bg-opacity-40 hover:backdrop-blur-md dark:text-white dark:hover:bg-neutral-800'>Secondary</button>\n<button className='flex justify-center w-fit h-fit text-sm items-center text-center bg-blue-700 text-white gap-2 px-4 py-3 rounded-full cursor-pointer font-medium select-none hover:bg-blue-800'>Default</button>\n<button className='flex justify-center w-fit h-fit text-sm items-center text-center bg-red-700 text-white gap-2 px-4 py-3 rounded-full cursor-pointer font-medium select-none hover:bg-red-800'>Red</button>\n<button className='flex justify-center w-fit h-fit text-sm items-center text-center bg-green-700 text-white gap-2 px-4 py-3 rounded-full cursor-pointer font-medium select-none hover:bg-green-800'>Green</button>\n<button className='flex justify-center w-fit h-fit text-sm items-center text-center bg-yellow-400 text-white gap-2 px-4 py-3 rounded-full cursor-pointer font-medium select-none hover:bg-yellow-500'>Yellow</button>"
    return (
        <article>
            <div className='pb-4'>
                <h3 className='text-lg font-medium'>Rounded buttons</h3>
                <p className='dark:text-neutral-300'>You can also use this fully rounded edges variant.</p>
            </div>
            <div className='flex flex-col'>
                <section className='flex flex-wrap gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
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
        </article>
    )
}

export default Rounded