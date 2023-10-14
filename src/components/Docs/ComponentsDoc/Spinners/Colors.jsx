import React, { useState } from 'react'
import { CodeBlock } from '../../../../assets/CodeBlock/CodeBlock'
import { DefaultSpinner, GreenSpinner, PinkSpinner, PurpleSpinner, RedSpinner, YellowSpinner } from '../../../UI/Spinners/Spinners'
import { BiCode } from 'react-icons/bi'

const SpinnerColor = () => {

    const [showCode, setShowCode] = useState(false)

    const spinnerColor = "<div className='w-8 h-8 rounded-full border-4 border-neutral-200 border-l-blue-700 dark:border-l-blue-700 dark:border-neutral-700 animate-spin'></div>\n<div className='w-8 h-8 rounded-full border-4 border-neutral-200 border-l-red-700 dark:border-l-red-700 dark:border-neutral-700 animate-spin'></div>\n<div className='w-8 h-8 rounded-full border-4 border-neutral-200 border-l-green-700 dark:border-l-green-700 dark:border-neutral-700 animate-spin'></div>\n<div className='w-8 h-8 rounded-full border-4 border-neutral-200 border-l-yellow-400 dark:border-l-yellow-400 dark:border-neutral-700 animate-spin'></div>\n<div className='w-8 h-8 rounded-full border-4 border-neutral-200 border-l-purple-600 dark:border-l-purple-600 dark:border-neutral-700 animate-spin'></div>\n<div className='w-8 h-8 rounded-full border-4 border-neutral-200 border-l-pink-700 dark:border-l-pink-700 dark:border-neutral-700 animate-spin'></div>"

    return (
        <article>
            <div className='pb-4'>
                <h3 className='text-lg font-medium'>Colors</h3>
                <p className='dark:text-neutral-300'>
                    Try different colors.</p>
            </div>
            <div className='flex pb-2 select-none'>
                <div className='flex items-center bg-neutral-200 p-[5px] rounded-lg dark:bg-neutral-800 lg:w-full'>
                    <span className={showCode ? 'flex items-center gap-2 px-4 py-1 rounded-lg cursor-pointer bg-neutral-400 dark:bg-neutral-900 lg:w-full lg:justify-center' : 'flex items-center gap-2 px-4 py-1 rounded-lg cursor-pointer hover:bg-neutral-400 dark:hover:bg-neutral-900 lg:w-full lg:justify-center'} onClick={() => setShowCode(!showCode)}><BiCode />Show code</span>
                </div>
            </div>
            <div className='flex flex-col'>
                {showCode ?
                    <div>
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
                    :
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
                    </section>}
            </div>
        </article>
    )
}

export default SpinnerColor