import React, { useState } from 'react'
import { CodeBlock } from '../../../CodeBlock/CodeBlock'
import { DefaultProgressBar, ExtraLargeProgressBar, LargeProgressBar, MediumProgressBar, SmallProgressBar } from '../../../UI/Progress/ProgressBar'
import EditInGithub from '../../../EditInGithub/EditInGithub'
import {HideCodeIcon, ShowCodeIcon} from '@icons'

const ProgressSize = () => {

    const [showCode, setShowCode] = useState(false)

    const progressSize = "<div className='w-full h-2 rounded-full bg-neutral-100 dark:bg-neutral-700'><div className='flex justify-center items-center w-[75%] h-full rounded-full bg-blue-700'></div></div><div className='w-full h-4 rounded-full bg-neutral-100 dark:bg-neutral-700'><div className='flex justify-center items-center w-[75%] h-full rounded-full bg-blue-700'></div></div><div className='w-full h-6 rounded-full bg-neutral-100 dark:bg-neutral-700'><div className='flex justify-center items-center w-[75%] h-full rounded-full bg-blue-700'></div></div><div className='w-full h-8 rounded-full bg-neutral-100 dark:bg-neutral-700'><div className='flex justify-center items-center w-[75%] h-full rounded-full bg-blue-700'></div></div><div className='w-full h-10 rounded-full bg-neutral-100 dark:bg-neutral-700'><div className='flex justify-center items-center w-[75%] h-full rounded-full bg-blue-700'></div></div>"

    const githubUrl = 'https://github.com/juanigarciadev/BlossomUI/blob/main/src/components/UI/Progress/ProgressBar.jsx'

    return (
        <article>
            <div className='pb-4'>
                <h3 className='text-lg font-medium'>Size</h3>
                <p className='dark:text-neutral-300'>Try different sizes.</p>
            </div>
            <div className='flex pb-2 gap-2 select-none lg:flex-col'>
                <button className='bg-neutral-200 px-5 py-3 rounded-lg dark:bg-neutral-800 lg:w-full lg:flex lg:justify-center' onClick={() => setShowCode(!showCode)}>{showCode ? <div className='flex items-center gap-1'><HideCodeIcon/><span>Hide code</span></div> : <div className='flex items-center gap-1'><ShowCodeIcon/><span>Show code</span></div>}</button>
                <EditInGithub url={githubUrl} />
            </div>
            <div className='flex flex-col'>
                {showCode ?
                    <div>
                        <section className='flex flex-col flex-wrap rounded-lg gap-4 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
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
                    :
                    <section className='flex flex-col flex-wrap rounded-lg gap-4 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
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
                    </section>}
            </div>
        </article>
    )
}

export default ProgressSize