import React, { useState } from 'react'
import { DefaultProgressBar } from '../../../UI/Progress/ProgressBar'
import CodeBlock from '@codeBlock'
import EditInGithub from '@editInGithub'
import {HideCodeIcon, ShowCodeIcon} from '@icons'

const DefaultProgress = () => {

    const [showCode, setShowCode] = useState(false)

    const defaultProgress = "<div className='w-full h-4 rounded-full bg-neutral-100 dark:bg-neutral-700'><div className='flex justify-center items-center w-[75%] h-full rounded-full bg-blue-700'></div></div>"

    const githubUrl = 'https://github.com/juanigarciadev/BlossomUI/blob/main/src/components/UI/Progress/ProgressBar.jsx'

    return (
        <article>
            <div className='pb-4'>
                <h3 className='text-lg font-medium'>Default</h3>
                <p className='dark:text-neutral-300'>Use progress bars to show the progress of actions or work progress.</p>
            </div>
            <div className='flex pb-2 gap-2 select-none lg:flex-col'>
                <button className='bg-neutral-200 px-5 py-3 rounded-lg dark:bg-neutral-800 lg:w-full lg:flex lg:justify-center' onClick={() => setShowCode(!showCode)}>{showCode ? <div className='flex items-center gap-1'><HideCodeIcon/><span>Hide code</span></div> : <div className='flex items-center gap-1'><ShowCodeIcon/><span>Show code</span></div>}</button>
                <EditInGithub url={githubUrl} />
            </div>
            <div className='flex flex-col'>
                {showCode ?
                    <div>
                        <section className='flex flex-wrap rounded-lg gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                            <DefaultProgressBar />
                        </section>
                        <CodeBlock name={"Default"} code={defaultProgress} language={"javascript"} />
                    </div>
                    :
                    <section className='flex flex-wrap rounded-lg gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                        <DefaultProgressBar />
                    </section>}
            </div>
        </article>
    )
}

export default DefaultProgress