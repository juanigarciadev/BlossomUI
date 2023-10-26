import React, { useState } from 'react'
import { BiCode } from 'react-icons/bi'
import EditInGithub from '../../../EditInGithub/EditInGithub'
import { Alt, Ctrl, Shift, Spacebar } from '../../../UI/KBD/Default/SpecialKey'
import { CodeBlock } from '../../../CodeBlock/CodeBlock'

const SpecialKeys = () => {

    const [showCode, setShowCode] = useState(false)

    const specialKeys = "<kbd className='text-sm select-none bg-neutral-200 px-2 py-1.5 rounded-lg border border-neutral-400 dark:bg-neutral-600 dark:border-neutral-400' title='Spacebar'>Spacebar</kbd>\n<kbd className='text-sm select-none bg-neutral-200 px-2 py-1.5 rounded-lg border border-neutral-400 dark:bg-neutral-600 dark:border-neutral-400' title='Ctrl'>Ctrl</kbd>\n<kbd className='text-sm select-none bg-neutral-200 px-2 py-1.5 rounded-lg border border-neutral-400 dark:bg-neutral-600 dark:border-neutral-400' title='Alt'>Alt</kbd>\n<kbd className='text-sm select-none bg-neutral-200 px-6 py-1.5 rounded-lg border border-neutral-400 dark:bg-neutral-600 dark:border-neutral-400' title='Shift'><svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24'><path fill='currentColor' d='M8 18v-5H3l9-11l9 11h-5v5H8Zm2-2h4v-5h2.775L12 5.15L7.225 11H10v5Zm2-5.425ZM4 22v-2h16v2H4Z' /></svg></kbd>"

    return (
        <article>
            <div className='pb-4'>
                <h3 className='text-lg font-medium'>Default special keys</h3>
                <p className='dark:text-neutral-300'>Use default to specify to the user a combination of keys.</p>
            </div>
            <div className='flex gap-2 pb-2 select-none lg:flex-col'>
                <div className='flex items-center bg-neutral-200 p-[5px] rounded-lg dark:bg-neutral-800 lg:w-full'>
                    <span className={showCode ? 'flex items-center gap-2 px-4 py-1 rounded-lg cursor-pointer bg-neutral-400 dark:bg-neutral-900 lg:w-full lg:justify-center' : 'flex items-center gap-2 px-4 py-1 rounded-lg cursor-pointer hover:bg-neutral-400 dark:hover:bg-neutral-900 lg:w-full lg:justify-center'} onClick={() => setShowCode(!showCode)}><BiCode />Show code</span>
                </div>
                <EditInGithub url={'https://github.com/juanigarciadev/BlossomUI/blob/main/src/components/UI/KBD/Default/SpecialKey.jsx'} />
            </div>
            <div className='flex flex-col'>
                {showCode ?
                    <div>
                        <section className='flex flex-wrap rounded-lg gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                            <Spacebar />
                            <Ctrl />
                            <Alt />
                            <Shift />
                        </section>
                        <CodeBlock name={'Default special keys'} code={specialKeys} language={'javascript'} />
                    </div>
                    :
                    <section className='flex flex-wrap rounded-lg gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                        <Spacebar />
                        <Ctrl />
                        <Alt />
                        <Shift />
                    </section>}
            </div>
        </article>
    )
}

export default SpecialKeys