import React, { useState } from 'react'
import { CodeBlock } from '../../../../assets/CodeBlock/CodeBlock'
import { DefaultRoundedButtonLoaders, GreenRoundedButtonLoaders, PinkRoundedButtonLoaders, PrimaryRoundedButtonLoaders, PurpleRoundedButtonLoaders, RedRoundedButtonLoaders, SecondaryRoundedButtonLoaders, YellowRoundedButtonLoaders } from '../../../UI/Buttons/Rounded/Loaders'
import { BiCode } from 'react-icons/bi'

const RoundedLoadersButtons = () => {

    const [showCode, setShowCode] = useState(false)

    const roundedLoadersButtons = "<button className='flex justify-center w-fit h-fit text-sm items-center text-center bg-black text-white gap-2 px-4 py-3 rounded-full cursor-progress font-medium select-none dark:bg-white dark:text-black'><div className='w-4 h-4 rounded-full border-2 border-neutral-200 border-l-neutral-500 dark:border-l-neutral-600 dark:border-neutral-400 animate-spin'></div>Primary</button>\n<button className='flex justify-center items-center text-center border border-neutral-300 bg-transparent w-fit h-fit text-sm gap-2 px-4 py-3 rounded-full cursor-progress font-medium select-none dark:text-white'><div className='w-4 h-4 rounded-full border-2 border-neutral-400 border-l-neutral-700 dark:border-l-neutral-400 dark:border-white animate-spin'></div>Secondary</button>\n<button className='flex justify-center w-fit h-fit text-sm items-center text-center bg-blue-700 text-white gap-2 px-4 py-3 rounded-full cursor-progress font-medium select-none'><div className='w-4 h-4 rounded-full border-2 border-white border-l-neutral-500 dark:border-l-neutral-500 dark:border-white animate-spin'></div>Default</button>\n<button className='flex justify-center w-fit h-fit text-sm items-center text-center bg-red-700 text-white gap-2 px-4 py-3 rounded-full cursor-progress font-medium select-none'><div className='w-4 h-4 rounded-full border-2 border-white border-l-neutral-500 dark:border-l-neutral-500 dark:border-white animate-spin'></div>Red</button>\n<button className='flex justify-center w-fit h-fit text-sm items-center text-center bg-green-700 text-white gap-2 px-4 py-3 rounded-full cursor-progress font-medium select-none'><div className='w-4 h-4 rounded-full border-2 border-white border-l-neutral-700 dark:border-l-neutral-700 dark:border-white animate-spin'></div>Green</button>\n<button className='flex justify-center w-fit h-fit text-sm items-center text-center bg-yellow-400 text-white gap-2 px-4 py-3 rounded-full cursor-progress font-medium select-none'><div className='w-4 h-4 rounded-full border-2 border-white border-l-neutral-500 dark:border-l-neutral-500 dark:border-white animate-spin'></div>Yellow</button>\n<button className='flex justify-center w-fit h-fit text-sm items-center text-center bg-purple-600 text-white gap-2 px-4 py-3 rounded-full cursor-progress font-medium select-none'><div className='w-4 h-4 rounded-full border-2 border-white border-l-neutral-700 dark:border-l-neutral-700 dark:border-white animate-spin'></div>Purple</button>\n<button className='flex justify-center w-fit h-fit text-sm items-center text-center bg-pink-700 text-white gap-2 px-4 py-3 rounded-full cursor-progress font-medium select-none'><div className='w-4 h-4 rounded-full border-2 border-white border-l-neutral-700 dark:border-l-neutral-700 dark:border-white animate-spin'></div>Pink</button>"

    return (
        <article>
            <div className='pb-4'>
                <h3 className='text-lg font-medium'>Rounded loaders buttons</h3>
                <p className='dark:text-neutral-300'>You can also use fully rounded edges variant of loaders buttons.</p>
            </div>
            <div className='flex pb-2 select-none'>
                <div className='flex items-center bg-neutral-200 p-[5px] rounded-lg dark:bg-neutral-800'>
                    <span className={showCode ? 'flex items-center gap-2 px-4 py-1 rounded-lg cursor-pointer bg-neutral-400 dark:bg-neutral-900' : 'flex items-center gap-2 px-4 py-1 rounded-lg cursor-pointer hover:bg-neutral-400 dark:hover:bg-neutral-900'} onClick={() => setShowCode(!showCode)}><BiCode />Show code</span>
                </div>
            </div>
            <div className='flex flex-col'>
                {showCode ?
                    <div className='flex flex-col'>
                        <section className='flex flex-wrap gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                            <PrimaryRoundedButtonLoaders />
                            <SecondaryRoundedButtonLoaders />
                            <DefaultRoundedButtonLoaders />
                            <RedRoundedButtonLoaders />
                            <GreenRoundedButtonLoaders />
                            <YellowRoundedButtonLoaders />
                            <PurpleRoundedButtonLoaders />
                            <PinkRoundedButtonLoaders />
                        </section>
                        <CodeBlock name={"Rounded loaders"} code={roundedLoadersButtons} language={"javascript"} />
                    </div>
                    :
                    <section className='flex flex-wrap gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                        <PrimaryRoundedButtonLoaders />
                        <SecondaryRoundedButtonLoaders />
                        <DefaultRoundedButtonLoaders />
                        <RedRoundedButtonLoaders />
                        <GreenRoundedButtonLoaders />
                        <YellowRoundedButtonLoaders />
                        <PurpleRoundedButtonLoaders />
                        <PinkRoundedButtonLoaders />
                    </section>}
            </div>
        </article>
    )
}

export default RoundedLoadersButtons