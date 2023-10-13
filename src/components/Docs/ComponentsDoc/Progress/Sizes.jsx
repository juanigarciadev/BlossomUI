import React from 'react'
import { CodeBlock } from '../../../../assets/CodeBlock/CodeBlock'
import { DefaultProgressBar, ExtraLargeProgressBar, LargeProgressBar, MediumProgressBar, SmallProgressBar } from '../../../UI/Progress/ProgressBar'

const ProgressSize = () => {
    const progressSize = "<div className='w-full h-2 rounded-full bg-neutral-100 dark:bg-neutral-700'><div className='flex justify-center items-center w-[75%] h-full rounded-full bg-blue-700'></div></div>\n<div className='w-full h-4 rounded-full bg-neutral-100 dark:bg-neutral-700'><div className='flex justify-center items-center w-[75%] h-full rounded-full bg-blue-700'></div></div>\n<div className='w-full h-6 rounded-full bg-neutral-100 dark:bg-neutral-700'><div className='flex justify-center items-center w-[75%] h-full rounded-full bg-blue-700'></div></div>\n<div className='w-full h-8 rounded-full bg-neutral-100 dark:bg-neutral-700'><div className='flex justify-center items-center w-[75%] h-full rounded-full bg-blue-700'></div></div>\n<div className='w-full h-10 rounded-full bg-neutral-100 dark:bg-neutral-700'><div className='flex justify-center items-center w-[75%] h-full rounded-full bg-blue-700'></div></div>"
    return (
        <article>
            <div className='pb-4'>
                <h3 className='text-lg font-medium'>Size</h3>
                <p className='dark:text-neutral-300'>
                    Try different sizes.</p>
            </div>
            <div className='flex flex-col'>
                <section className='flex flex-col flex-wrap gap-4 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                    <div>
                        <h3 className='font-medium pb-1'>Small</h3>
                        <SmallProgressBar />
                    </div>
                    <div>
                        <h3 className='font-medium pb-1'>Default</h3>
                        <DefaultProgressBar />
                    </div>
                    <div>
                        <h3 className='font-medium pb-1'>Medium</h3>
                        <MediumProgressBar />
                    </div>
                    <div>
                        <h3 className='font-medium pb-1'>Large</h3>
                        <LargeProgressBar />
                    </div>
                    <div>
                        <h3 className='font-medium pb-1'>Extra Large</h3>
                        <ExtraLargeProgressBar />
                    </div>
                </section>
                <CodeBlock name={"Size"} code={progressSize} language={"javascript"} />
            </div>
        </article>
    )
}

export default ProgressSize