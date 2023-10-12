import React from 'react'
import { CodeBlock } from '../../../../assets/CodeBlock/CodeBlock'
import { DefaultProgressBar } from '../../../UI/Progress/ProgressBar'

const DefaultProgress = () => {
    const defaultProgress = "<div className='w-full h-4 rounded-full bg-neutral-100 dark:bg-neutral-700'><div className='flex justify-center items-center w-[75%] h-full rounded-full bg-blue-700'></div></div>"
    return (
        <article>
            <div className='pb-4'>
                <h3 className='text-lg font-medium'>Default progress bar</h3>
                <p className='dark:text-neutral-300'>Use progress bars to show the progress of actions or work progress.</p>
            </div>
            <div className='flex flex-col'>
                <section className='flex flex-wrap gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                    <DefaultProgressBar />
                </section>
                <CodeBlock name={"Default"} code={defaultProgress} language={"javascript"} />
            </div>
        </article>
    )
}

export default DefaultProgress