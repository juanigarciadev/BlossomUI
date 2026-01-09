import React, { useState } from 'react'
import { DefaultAlert, DefaultErrorAlert, DefaultSuccessfulAlert, DefaultWarningAlert } from '../../../UI/Alerts/Default'
import CodeBlock from '@codeBlock'
import EditInGithub from '@editInGithub'
import {HideCodeIcon, ShowCodeIcon} from '@icons'
import CompVersionTitle from '../../../CompVersionTitle/CompVersionTitle'
import ToggleCode from '../../../ToggleCode/ToggleCode'

const Default = () => {

    const [showCode, setShowCode] = useState(false)

    const defaultAlerts =`<div className='w-full h-fit px-4 py-4 bg-blue-100 rounded-lg dark:bg-blue-900'><span className='text-blue-900 dark:text-blue-300'>Info alert! Change a few things up and try submitting again.</span></div>\n<div className='w-full h-fit px-4 py-4 bg-green-100 rounded-lg dark:bg-green-900'><span className='text-green-900 dark:text-green-300'>Successful alert! Change a few things up and try submitting again.</span></div>\n<div className='w-full h-fit px-4 py-4 bg-red-100 rounded-lg dark:bg-red-900'><span className='text-red-900 dark:text-red-300'>Error alert! Change a few things up and try submitting again.</span></div>\n<div className='w-full h-fit px-4 py-4 bg-yellow-100 rounded-lg dark:bg-yellow-600'><span className='text-yellow-600 dark:text-yellow-200'>Warning alert! Change a few things up and try submitting again.</span></div>`

    const githubUrl = 'https://github.com/juanigarciadev/BlossomUI/blob/main/src/components/UI/Alerts/Default.jsxxx'

    return (
        <article>
            <CompVersionTitle title={"Default"} paragraph={"Use default alerts with multiple colors to correct user inputs."}/>
            <div className='flex gap-2 pb-2 select-none lg:flex-col'>
                <button className='bg-neutral-200 px-5 py-3 rounded-lg dark:bg-neutral-800 lg:w-full lg:flex lg:justify-center' onClick={() => setShowCode(!showCode)}>{showCode ? <div className='flex items-center gap-1'><HideCodeIcon/><span>Hide code</span></div> : <div className='flex items-center gap-1'><ShowCodeIcon/><span>Show code</span></div>}</button>
                <EditInGithub url={githubUrl} />
            </div>
            <div className='flex flex-col'>
                {showCode ?
                    <div>
                        <section className='flex flex-wrap rounded-lg gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                            <DefaultAlert />
                            <DefaultSuccessfulAlert />
                            <DefaultErrorAlert />
                            <DefaultWarningAlert />
                        </section>
                        <CodeBlock name={"Default"} code={defaultAlerts} language={"javascript"} />
                    </div>
                    :
                    <section className='flex flex-wrap rounded-lg gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                        <DefaultAlert />
                        <DefaultSuccessfulAlert />
                        <DefaultErrorAlert />
                        <DefaultWarningAlert />
                    </section>}
            </div>
        </article>
    )
}

export default Default