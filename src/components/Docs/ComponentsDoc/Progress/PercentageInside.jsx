import React, { useState } from 'react'
import { CodeBlock } from '../../../../assets/CodeBlock/CodeBlock'
import { PercentageInsideProgressBar } from '../../../UI/Progress/ProgressBar'
import { BiCode } from 'react-icons/bi'
import EditInGithub from '../../../EditInGithub/EditInGithub'

const PercentageInside = () => {

    const [showCode, setShowCode] = useState(false)

    const percentageInside = "<div className='w-full h-4 rounded-full bg-neutral-100 dark:bg-neutral-700'><div className='flex justify-center items-center w-[75%] h-full rounded-full bg-blue-700'><span className='text-white font-medium text-sm'>75%</span></div></div>"

    return (
        <article>
            <div className='pb-4'>
                <h3 className='text-lg font-medium'>Progress bar with percentage inside</h3>
                <p className='dark:text-neutral-300'>You can also add the progress percentage for impatient users.</p>
            </div>
            <div className='flex pb-2 gap-2 select-none lg:flex-col'>
                <div className='flex items-center bg-neutral-200 p-[5px] rounded-lg dark:bg-neutral-800 lg:w-full'>
                    <span className={showCode ? 'flex items-center gap-2 px-4 py-1 rounded-lg cursor-pointer bg-neutral-400 dark:bg-neutral-900 lg:w-full lg:justify-center' : 'flex items-center gap-2 px-4 py-1 rounded-lg cursor-pointer hover:bg-neutral-400 dark:hover:bg-neutral-900 lg:w-full lg:justify-center'} onClick={() => setShowCode(!showCode)}><BiCode />Show code</span>
                </div>
                <EditInGithub url={'https://github.com/juanigarciadev/BlossomUI/blob/main/src/components/UI/Progress/ProgressBar.jsx'} />
            </div>
            <div className='flex flex-col'>
                {showCode ?
                    <div>
                        <section className='flex flex-wrap rounded-lg gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                            <PercentageInsideProgressBar />
                        </section>
                        <CodeBlock name={"Percentage inside"} code={percentageInside} language={"javascript"} />
                    </div>
                    :
                    <section className='flex flex-wrap rounded-lg gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                        <PercentageInsideProgressBar />
                    </section>}
            </div>
        </article>
    )
}

export default PercentageInside