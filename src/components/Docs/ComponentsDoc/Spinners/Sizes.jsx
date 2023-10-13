import React from 'react'
import { CodeBlock } from '../../../../assets/CodeBlock/CodeBlock'
import { DefaultSpinner, ExtraLargeSpinner, LargeSpinner, MediumSpinner, SmallSpinner } from '../../../UI/Spinners/Spinners'

const SpinnerSize = () => {
    const spinnerSize = "<div className='w-4 h-4 rounded-full border-2 border-neutral-200 border-l-blue-700 dark:border-l-blue-700 dark:border-neutral-700 animate-spin'></div>\n<div className='w-8 h-8 rounded-full border-4 border-neutral-200 border-l-blue-700 dark:border-l-blue-700 dark:border-neutral-700 animate-spin'></div>\n<div className='w-10 h-10 rounded-full border-4 border-neutral-200 border-l-blue-700 dark:border-l-blue-700 dark:border-neutral-700 animate-spin'></div>\n<div className='w-12 h-12 rounded-full border-4 border-neutral-200 border-l-blue-700 dark:border-l-blue-700 dark:border-neutral-700 animate-spin'></div>\n<div className='w-16 h-16 rounded-full border-8 border-neutral-200 border-l-blue-700 dark:border-l-blue-700 dark:border-neutral-700 animate-spin'></div>"
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
                        <SmallSpinner />
                    </div>
                    <div>
                        <h3 className='font-medium pb-1'>Default</h3>
                        <DefaultSpinner />
                    </div>
                    <div>
                        <h3 className='font-medium pb-1'>Medium</h3>
                        <MediumSpinner />
                    </div>
                    <div>
                        <h3 className='font-medium pb-1'>Large</h3>
                        <LargeSpinner />
                    </div>
                    <div>
                        <h3 className='font-medium pb-1'>Extra Large</h3>
                        <ExtraLargeSpinner />
                    </div>
                </section>
                <CodeBlock name={"Size"} code={spinnerSize} language={"javascript"} />
            </div>
        </article>
    )
}

export default SpinnerSize