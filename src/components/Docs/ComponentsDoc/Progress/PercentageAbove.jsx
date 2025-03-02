import React, { useState } from 'react'
import { PercentageAboveWithInfo } from '../../../UI/Progress/ProgressBar'
import CodeBlock from '@codeBlock'
import EditInGithub from '@editInGithub'
import {HideCodeIcon, ShowCodeIcon} from '@icons'

const PercentageAbove = () => {

    const [showCode, setShowCode] = useState(false)

    const percentageAbove = "<div className='w-full'><div className='flex justify-between pb-1'><span className='font-medium'>Loading Blossom UI</span><span className='font-medium'>75%</span></div><div className='w-full h-4 rounded-full bg-neutral-100 dark:bg-neutral-700'><div className='flex justify-center items-center w-[75%] h-full rounded-full bg-blue-700'></div></div></div>"

    const githubUrl = 'https://github.com/juanigarciadev/BlossomUI/blob/main/src/components/UI/Progress/ProgressBar.jsx'

    return (
        <article>
            <div className='pb-4'>
                <h3 className='text-lg font-medium'>With information and percentage above</h3>
                <p className='dark:text-neutral-300'>You can use this variant if you want to show some information.</p>
            </div>
            <div className='flex pb-2 gap-2 select-none lg:flex-col'>
                <button className='bg-neutral-200 px-5 py-3 rounded-lg dark:bg-neutral-800 lg:w-full lg:flex lg:justify-center' onClick={() => setShowCode(!showCode)}>{showCode ? <div className='flex items-center gap-1'><HideCodeIcon/><span>Hide code</span></div> : <div className='flex items-center gap-1'><ShowCodeIcon/><span>Show code</span></div>}</button>
                <EditInGithub url={githubUrl} />
            </div>
            <div className='flex flex-col'>
                {showCode ?
                    <div>
                        <section className='flex flex-wrap rounded-lg gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                            <PercentageAboveWithInfo />
                        </section>
                        <CodeBlock name={"Percentage above with information"} code={percentageAbove} language={"javascript"} />
                    </div>
                    :
                    <section className='flex flex-wrap rounded-lg gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                        <PercentageAboveWithInfo />
                    </section>}
            </div>
        </article>
    )
}

export default PercentageAbove