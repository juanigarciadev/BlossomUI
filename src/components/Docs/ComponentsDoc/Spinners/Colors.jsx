import React from 'react'
import { CodeBlock } from '../../../../assets/CodeBlock/CodeBlock'
import { DefaultSpinner, GreenSpinner, PinkSpinner, PurpleSpinner, RedSpinner, YellowSpinner } from '../../../UI/Spinners/Spinners'

const SpinnerColor = () => {
    const spinnerColor = "<div className='w-8 h-8 rounded-full border-4 border-neutral-200 border-l-blue-700 dark:border-l-blue-700 dark:border-neutral-700 animate-spin'></div>\n<div className='w-8 h-8 rounded-full border-4 border-neutral-200 border-l-red-700 dark:border-l-red-700 dark:border-neutral-700 animate-spin'></div>\n<div className='w-8 h-8 rounded-full border-4 border-neutral-200 border-l-green-700 dark:border-l-green-700 dark:border-neutral-700 animate-spin'></div>\n<div className='w-8 h-8 rounded-full border-4 border-neutral-200 border-l-yellow-400 dark:border-l-yellow-400 dark:border-neutral-700 animate-spin'></div>\n<div className='w-8 h-8 rounded-full border-4 border-neutral-200 border-l-purple-600 dark:border-l-purple-600 dark:border-neutral-700 animate-spin'></div>\n<div className='w-8 h-8 rounded-full border-4 border-neutral-200 border-l-pink-700 dark:border-l-pink-700 dark:border-neutral-700 animate-spin'></div>"
    return (
        <article>
            <div className='pb-4'>
                <h3 className='text-lg font-medium'>Colors</h3>
                <p className='dark:text-neutral-300'>
                    Try different colors.</p>
            </div>
            <div className='flex flex-col'>
                <section className='flex flex-col flex-wrap gap-4 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                    <div>
                        <h3 className='font-medium pb-1'>Default</h3>
                        <DefaultSpinner />
                    </div>
                    <div>
                        <h3 className='font-medium pb-1'>Red</h3>
                        <RedSpinner />
                    </div>
                    <div>
                        <h3 className='font-medium pb-1'>Green</h3>
                        <GreenSpinner />
                    </div>
                    <div>
                        <h3 className='font-medium pb-1'>Yellow</h3>
                        <YellowSpinner />
                    </div>
                    <div>
                        <h3 className='font-medium pb-1'>Purple</h3>
                        <PurpleSpinner />
                    </div>
                    <div>
                        <h3 className='font-medium pb-1'>Pink</h3>
                        <PinkSpinner />
                    </div>
                </section>
                <CodeBlock name={"Colors"} code={spinnerColor} language={"javascript"} />
            </div>
        </article>
    )
}

export default SpinnerColor