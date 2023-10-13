import React from 'react'
import { CodeBlock } from '../../../../assets/CodeBlock/CodeBlock'
import { TransparentSpinner } from '../../../UI/Spinners/Spinners'

const TransparentSpinnerDoc = () => {
    const transparentSpinner = "<div className='w-8 h-8 rounded-full border-4 border-neutral-200 border-l-transparent dark:border-l-transparent dark:border-neutral-700 animate-spin'></div>"
    return (
        <article>
            <div className='pb-4'>
                <h3 className='text-lg font-medium'>Transparent indicator spinner</h3>
                <p className='dark:text-neutral-300'>If you don't like colors, we have a variant with a transparent indicator.</p>
            </div>
            <div className='flex flex-col'>
                <section className='flex flex-wrap gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                    <TransparentSpinner />
                </section>
                <CodeBlock name={"Transparent"} code={transparentSpinner} language={"javascript"} />
            </div>
        </article>
    )
}

export default TransparentSpinnerDoc