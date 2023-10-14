import React, { useState } from 'react'
import { CodeBlock } from '../../../../assets/CodeBlock/CodeBlock'
import { DefaultSpinner, ExtraLargeSpinner, LargeSpinner, MediumSpinner, SmallSpinner } from '../../../UI/Spinners/Spinners'
import { BiCode } from 'react-icons/bi'

const SpinnerSize = () => {

    const [showCode, setShowCode] = useState(false)

    const spinnerSize = "<div className='w-4 h-4 rounded-full border-2 border-neutral-200 border-l-blue-700 dark:border-l-blue-700 dark:border-neutral-700 animate-spin'></div>\n<div className='w-8 h-8 rounded-full border-4 border-neutral-200 border-l-blue-700 dark:border-l-blue-700 dark:border-neutral-700 animate-spin'></div>\n<div className='w-10 h-10 rounded-full border-4 border-neutral-200 border-l-blue-700 dark:border-l-blue-700 dark:border-neutral-700 animate-spin'></div>\n<div className='w-12 h-12 rounded-full border-4 border-neutral-200 border-l-blue-700 dark:border-l-blue-700 dark:border-neutral-700 animate-spin'></div>\n<div className='w-16 h-16 rounded-full border-8 border-neutral-200 border-l-blue-700 dark:border-l-blue-700 dark:border-neutral-700 animate-spin'></div>"
    return (
        <article>
            <div className='pb-4'>
                <h3 className='text-lg font-medium'>Size</h3>
                <p className='dark:text-neutral-300'>
                    Try different sizes.</p>
            </div>
            <div className='flex pb-2 select-none'>
                <div className='flex items-center bg-neutral-200 p-[5px] rounded-lg dark:bg-neutral-800 lg:w-full'>
                    <span className={showCode ? 'flex items-center gap-2 px-4 py-1 rounded-lg cursor-pointer bg-neutral-400 dark:bg-neutral-900 lg:w-full lg:justify-center' : 'flex items-center gap-2 px-4 py-1 rounded-lg cursor-pointer hover:bg-neutral-400 dark:hover:bg-neutral-900 lg:w-full lg:justify-center'} onClick={() => setShowCode(!showCode)}><BiCode />Show code</span>
                </div>
            </div>
            <div className='flex flex-col'>
                {showCode ?
                    <div>
                        <section className='flex flex-col flex-wrap rounded-lg gap-4 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
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
                    :
                    <section className='flex flex-col flex-wrap rounded-lg gap-4 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
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
                    </section>}
            </div>
        </article>
    )
}

export default SpinnerSize