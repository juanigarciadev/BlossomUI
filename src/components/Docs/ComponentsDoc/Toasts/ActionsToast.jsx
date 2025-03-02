import React, { useState } from 'react'
import { CodeBlock } from '../../../CodeBlock/CodeBlock'
import EditInGithub from '../../../EditInGithub/EditInGithub'
import { ShowToasts, UndoToasts, UpdateToasts } from '../../../UI/Toasts/Toasts'
import {HideCodeIcon, ShowCodeIcon} from '@icons'

const ActionToast = () => {

    const [showCode, setShowCode] = useState(false)

    const actionToast = `<div className='inline-flex items-center gap-4 w-fit h-fit px-4 py-4 bg-green-600 rounded-lg'> <section className="bg-green-500 rounded p-1"> <svg className="text-green-100" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15.586l-3.293-3.293l-1.414 1.414L10 18.414l9.707-9.707l-1.414-1.414z"/></svg> </section> <span className='text-white'>Email succesfully sent</span> <section className="inline-flex gap-2"> <button className='flex justify-center items-center text-center text-white border border-green-500 bg-transparent w-fit h-fit text-sm gap-2 px-4 py-[7px] rounded-full cursor-pointer font-medium select-none hover:bg-green-700 hover:border-green-700'>View</button> <div className="w-[1px] bg-white"></div> <div className="group hover:bg-green-700 rounded cursor-pointer p-2"> <svg className="text-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m16.192 6.344l-4.243 4.242l-4.242-4.242l-1.414 1.414L10.535 12l-4.242 4.242l1.414 1.414l4.242-4.242l4.243 4.242l1.414-1.414L13.364 12l4.242-4.242z"/></svg> </div> </section> </div>
<div className='inline-flex items-center gap-4 w-fit h-fit px-4 py-4 bg-red-600 rounded-lg'> <section className="bg-red-500 rounded p-1"> <svg className="text-red-100 dark:text-red-100" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m16.192 6.344l-4.243 4.242l-4.242-4.242l-1.414 1.414L10.535 12l-4.242 4.242l1.414 1.414l4.242-4.242l4.243 4.242l1.414-1.414L13.364 12l4.242-4.242z"/></svg> </section> <span className='text-white'>2 errors found</span> <section className="inline-flex gap-2"> <button className='flex justify-center items-center text-center text-white border border-red-500 bg-transparent w-fit h-fit text-sm gap-2 px-4 py-[7px] rounded-full cursor-pointer font-medium select-none hover:bg-red-700 hover:border-red-700'>Show</button> <div className="w-[1px] bg-white"></div> <div className="group hover:bg-red-700 rounded cursor-pointer p-2"> <svg className="text-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m16.192 6.344l-4.243 4.242l-4.242-4.242l-1.414 1.414L10.535 12l-4.242 4.242l1.414 1.414l4.242-4.242l4.243 4.242l1.414-1.414L13.364 12l4.242-4.242z"/></svg> </div> </section> </div>
<div className='inline-flex items-center gap-4 w-fit h-fit px-4 py-4 bg-blue-600 rounded-lg'> <section className="bg-blue-500 rounded p-1"> <svg className="text-blue-100 dark:text-blue-100" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="40" d="M196 220h64v172m-73 4h138"/><path fill="currentColor" d="M256 160a32 32 0 1 1 32-32a32 32 0 0 1-32 32"/></svg> </section> <span className='text-white'>An update is available</span> <section className="inline-flex gap-2"> <button className='flex justify-center items-center text-center text-white border border-blue-500 bg-transparent w-fit h-fit text-sm gap-2 px-4 py-[7px] rounded-full cursor-pointer font-medium select-none hover:bg-blue-700 hover:border-blue-700'>Update</button> <div className="w-[1px] bg-white"></div> <div className="group hover:bg-blue-700 rounded cursor-pointer p-2"> <svg className="text-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m16.192 6.344l-4.243 4.242l-4.242-4.242l-1.414 1.414L10.535 12l-4.242 4.242l1.414 1.414l4.242-4.242l4.243 4.242l1.414-1.414L13.364 12l4.242-4.242z"/></svg> </div> </section> </div>`

    const githubUrl = 'https://github.com/juanigarciadev/BlossomUI/blob/main/src/components/UI/Toasts/Toasts.jsx'

    return (
        <article>
            <div className='pb-4'>
                <h3 className='text-lg font-medium'>Actions</h3>
                <p className='dark:text-neutral-300'>Use these pop-up information blocks to give the user feedback on their action.</p>
            </div>
            <div className='flex gap-2 pb-2 select-none lg:flex-col'>
                <button className='bg-neutral-200 px-5 py-3 rounded-lg dark:bg-neutral-800 lg:w-full lg:flex lg:justify-center' onClick={() => setShowCode(!showCode)}>{showCode ? <div className='flex items-center gap-1'><HideCodeIcon/><span>Hide code</span></div> : <div className='flex items-center gap-1'><ShowCodeIcon/><span>Show code</span></div>}</button>
                <EditInGithub url={githubUrl} />
            </div>
            <div className='flex flex-col'>
                {showCode ?
                    <div>
                        <section className='flex flex-col flex-wrap rounded-lg gap-1 p-4 pt-6 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                            <UndoToasts/>
                            <ShowToasts/>
                            <UpdateToasts/>
                        </section>
                        <CodeBlock name={"Actions"} code={actionToast} language={"javascript"} />
                    </div>
                    :
                    <section className='flex flex-col flex-wrap rounded-lg gap-1 p-4 pt-6 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                        <UndoToasts/>
                        <ShowToasts/>
                        <UpdateToasts/>
                    </section>}
            </div>
        </article>
    )
}

export default ActionToast