import React, { useState } from 'react'
import { CodeBlock } from '../../../../assets/CodeBlock/CodeBlock'
import { DefaultSpinner } from '../../../UI/Spinners/Spinners'
import { BiCode } from 'react-icons/bi'

const DefaultSpinnerDoc = () => {

    const [showCode, setShowCode] = useState(false)

    const defaultSpinner = "<div className='w-8 h-8 rounded-full border-4 border-neutral-200 border-l-blue-700 dark:border-l-blue-700 dark:border-neutral-700 animate-spin'></div>"

    return (
        <article>
            <div className='pb-4'>
                <h3 className='text-lg font-medium'>Default spinner</h3>
                <p className='dark:text-neutral-300'>No, the component is not loading, the spinner is what you see behind this text.</p>
            </div>
            <div className='flex pb-2 select-none'>
                <div className='flex items-center bg-neutral-200 p-[5px] rounded-lg dark:bg-neutral-800 lg:w-full'>
                    <span className={showCode ? 'flex items-center gap-2 px-4 py-1 rounded-lg cursor-pointer bg-neutral-400 dark:bg-neutral-900 lg:w-full lg:justify-center' : 'flex items-center gap-2 px-4 py-1 rounded-lg cursor-pointer hover:bg-neutral-400 dark:hover:bg-neutral-900 lg:w-full lg:justify-center'} onClick={() => setShowCode(!showCode)}><BiCode />Show code</span>
                </div>
            </div>
            <div className='flex flex-col'>
                {showCode ?
                    <div>
                        <section className='flex flex-wrap gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                            <DefaultSpinner />
                        </section>
                        <CodeBlock name={"Default"} code={defaultSpinner} language={"javascript"} />
                    </div>
                    :
                    <section className='flex flex-wrap gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                        <DefaultSpinner />
                    </section>}
            </div>
        </article>
    )
}

export default DefaultSpinnerDoc