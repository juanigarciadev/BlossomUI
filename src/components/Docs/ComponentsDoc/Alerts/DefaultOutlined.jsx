import React, { useState } from 'react'
import { CodeBlock } from '../../../CodeBlock/CodeBlock'
import { BiCode } from 'react-icons/bi'
import EditInGithub from '../../../EditInGithub/EditInGithub'
import { DefaultOutlinedAlert, DefaultOutlinedErrorAlert, DefaultOutlinedSuccessfulAlert, DefaultOutlinedWarningAlert } from '../../../UI/Alerts/Default/DefaultOutlined'

const DefaultOutlined = () => {

    const [showCode, setShowCode] = useState(false)

    const defaultOutlinedButtons = "<div className='w-full h-fit px-4 py-4 bg-blue-100 border border-blue-900 rounded-lg dark:bg-blue-900 dark:border-blue-500'><span className='text-blue-900 dark:text-blue-300'>Info alert! Change a few things up and try submitting again.</span></div>\n<div className='w-full h-fit px-4 py-4 bg-green-100 border border-green-900 rounded-lg dark:bg-green-900 dark:border-green-500'><span className='text-green-900 dark:text-green-300'>Successful alert! Change a few things up and try submitting again.</span></div>\n<div className='w-full h-fit px-4 py-4 bg-red-100 border border-red-900 rounded-lg dark:bg-red-900 dark:border-red-500'><span className='text-red-900 dark:text-red-300'>Error alert! Change a few things up and try submitting again.</span></div>\n<div className='w-full h-fit px-4 py-4 bg-yellow-100 border border-yellow-600 rounded-lg dark:bg-yellow-600 dark:border-yellow-200'><span className='text-yellow-600 dark:text-yellow-200'>Warning alert! Change a few things up and try submitting again.</span></div>"

    return (
        <article>
            <div className='pb-4'>
                <h3 className='text-lg font-medium'>Default outlined alerts</h3>
                <p className='dark:text-neutral-300'>Use default alerts with multiple colors to correct user inputs.</p>
            </div>
            <div className='flex gap-2 pb-2 select-none lg:flex-col'>
                <div className='flex items-center bg-neutral-200 p-[5px] rounded-lg dark:bg-neutral-800 lg:w-full'>
                    <span className={showCode ? 'flex items-center gap-2 px-4 py-1 rounded-lg cursor-pointer bg-neutral-400 dark:bg-neutral-900 lg:w-full lg:justify-center' : 'flex items-center gap-2 px-4 py-1 rounded-lg cursor-pointer hover:bg-neutral-400 dark:hover:bg-neutral-900 lg:w-full lg:justify-center'} onClick={() => setShowCode(!showCode)}><BiCode />Show code</span>
                </div>
                <EditInGithub url={'https://github.com/juanigarciadev/BlossomUI/blob/main/src/components/UI/Buttons/Normal/Default.jsx'} />
            </div>
            <div className='flex flex-col'>
                {showCode ?
                    <div>
                        <section className='flex flex-wrap rounded-lg gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                            <DefaultOutlinedAlert />
                            <DefaultOutlinedSuccessfulAlert />
                            <DefaultOutlinedErrorAlert />
                            <DefaultOutlinedWarningAlert />
                        </section>
                        <CodeBlock name={"Default"} code={defaultOutlinedButtons} language={"javascript"} />
                    </div>
                    :
                    <section className='flex flex-wrap rounded-lg gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                        <DefaultOutlinedAlert />
                        <DefaultOutlinedSuccessfulAlert />
                        <DefaultOutlinedErrorAlert />
                        <DefaultOutlinedWarningAlert />
                    </section>}
            </div>
        </article>
    )
}

export default DefaultOutlined