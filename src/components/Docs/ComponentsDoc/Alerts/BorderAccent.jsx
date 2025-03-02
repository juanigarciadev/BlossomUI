import React, { useState } from 'react'
import { CodeBlock } from '../../../CodeBlock/CodeBlock'
import EditInGithub from '../../../EditInGithub/EditInGithub'
import { BorderAccentAlert, BorderAccentErrorAlert, BorderAccentSuccessfulAlert, BorderAccentWarningAlert } from '../../../UI/Alerts/BorderAccent'
import {HideCodeIcon, ShowCodeIcon} from '@icons'

const BorderAccentAlerts = () => {

    const [showCode, setShowCode] = useState(false)

    const borderAccentAlerts = `<div className='w-full h-fit px-4 py-4 bg-blue-100 rounded-r-lg border-l-4 border-blue-900 dark:border-blue-300 dark:bg-blue-900'><span className='text-blue-900 dark:text-blue-300'>Info alert! Change a few things up and try submitting again.</span></div>\n<div className='w-full h-fit px-4 py-4 bg-green-100 rounded-r-lg border-l-4 border-green-900 dark:border-green-300 dark:bg-green-900'><span className='text-green-900 dark:text-green-300'>Successful alert! Change a few things up and try submitting again.</span></div>\n<div className='w-full h-fit px-4 py-4 bg-red-100 rounded-r-lg border-l-4 border-red-900 dark:border-red-300 dark:bg-red-900'><span className='text-red-900 dark:text-red-300'>Error alert! Change a few things up and try submitting again.</span></div>\n<div className='w-full h-fit px-4 py-4 bg-yellow-100 rounded-r-lg border-l-4 border-yellow-900 dark:border-yellow-300 dark:bg-yellow-600'><span className='text-yellow-600 dark:text-yellow-200'>Warning alert! Change a few things up and try submitting again.</span></div>`

    const githubUrl = 'https://github.com/juanigarciadev/BlossomUI/blob/main/src/components/UI/Alerts/BorderAccent.jsx'

    return (
        <article>
            <div className='pb-4'>
                <h3 className='text-lg font-medium'>Border accent</h3>
                <p className='dark:text-neutral-300'>Use this version with a small accent at the beginning of the alert to draw the user's attention.</p>
            </div>
            <div className='flex gap-2 pb-2 select-none lg:flex-col'>
                <button className='bg-neutral-200 px-5 py-3 rounded-lg dark:bg-neutral-800 lg:w-full lg:flex lg:justify-center' onClick={() => setShowCode(!showCode)}>{showCode ? <div className='flex items-center gap-1'><HideCodeIcon/><span>Hide code</span></div> : <div className='flex items-center gap-1'><ShowCodeIcon/><span>Show code</span></div>}</button>
                <EditInGithub url={githubUrl} />
            </div>
            <div className='flex flex-col'>
                {showCode ?
                    <div>
                        <section className='flex flex-wrap rounded-lg gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                            <BorderAccentAlert />
                            <BorderAccentSuccessfulAlert />
                            <BorderAccentErrorAlert />
                            <BorderAccentWarningAlert />
                        </section>
                        <CodeBlock name={"Border accent"} code={borderAccentAlerts} language={"javascript"} />
                    </div>
                    :
                    <section className='flex flex-wrap rounded-lg gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                        <BorderAccentAlert />
                        <BorderAccentSuccessfulAlert />
                        <BorderAccentErrorAlert />
                        <BorderAccentWarningAlert />
                    </section>}
            </div>
        </article>
    )
}

export default BorderAccentAlerts