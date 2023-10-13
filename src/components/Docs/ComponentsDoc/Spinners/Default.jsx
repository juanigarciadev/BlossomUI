import React from 'react'
import { CodeBlock } from '../../../../assets/CodeBlock/CodeBlock'
import { DefaultSpinner } from '../../../UI/Spinners/Spinners'

const DefaultSpinnerDoc = () => {
    const defaultSpinner = "<div className='w-8 h-8 rounded-full border-4 border-neutral-200 border-l-blue-700 dark:border-l-blue-700 dark:border-neutral-700 animate-spin'></div>"
    return (
        <article>
            <div className='pb-4'>
                <h3 className='text-lg font-medium'>Default spinner</h3>
                <p className='dark:text-neutral-300'>No, the component is not loading, the spinner is what you see behind this text.</p>
            </div>
            <div className='flex flex-col'>
                <section className='flex flex-wrap gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                    <DefaultSpinner />
                </section>
                <CodeBlock name={"Default"} code={defaultSpinner} language={"javascript"} />
            </div>
        </article>
    )
}

export default DefaultSpinnerDoc