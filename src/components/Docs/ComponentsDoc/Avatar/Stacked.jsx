import React, { useState } from 'react'
import { StackedAvatar } from '../../../UI/Avatar/Avatar'
import CodeBlock from '@codeBlock'
import EditInGithub from '@editInGithub'
import {HideCodeIcon, ShowCodeIcon} from '@icons'
import CompVersionTitle from '../../../CompVersionTitle/CompVersionTitle'

const Stacked = () => {

    const [showCode, setShowCode] = useState(false)

    const stackedAvatar = "<div className='flex -space-x-4'>\n    <img className='bg-neutral-200 w-10 h-10 rounded-full shadow-sm border-2 border-neutral-300 dark:bg-neutral-800 dark:border-neutral-700' src='https://res.cloudinary.com/diruiumfk/image/upload/v1698155370/person-image-1_mqb6ut.jpg'></img>\n    <img className='bg-neutral-200 w-10 h-10 rounded-full shadow-sm border-2 border-neutral-300 dark:bg-neutral-800 dark:border-neutral-700' src='https://res.cloudinary.com/diruiumfk/image/upload/v1698155371/person-image-4_usvfxg.jpg'></img>\n    <img className='bg-neutral-200 w-10 h-10 rounded-full shadow-sm border-2 border-neutral-300 dark:bg-neutral-800 dark:border-neutral-700' src='https://res.cloudinary.com/diruiumfk/image/upload/v1698155370/person-image-3_fstmzw.jpg'></img>\n    <img className='bg-neutral-200 w-10 h-10 rounded-full shadow-sm border-2 border-neutral-300 dark:bg-neutral-800 dark:border-neutral-700' src='https://res.cloudinary.com/diruiumfk/image/upload/v1698155370/person-image-2_sjyoj5.jpg'></img>\n    <a className='flex items-center justify-center text-sm font-medium bg-neutral-200 w-10 h-10 rounded-full shadow-sm border-2 border-neutral-300 cursor-pointer select-none hover:bg-neutral-100 dark:text-white dark:bg-neutral-800 dark:border-neutral-700 dark:hover:bg-neutral-600'>+99</a>\n</div>"

    const githubUrl = 'https://github.com/juanigarciadev/BlossomUI/blob/main/src/components/UI/Avatar/Avatar.jsx'

    return (
        <article>
            <CompVersionTitle title={"Stacked"} paragraph={"Use the stacked variant to display a group of users."}/>
            <div className='flex pb-2 gap-2 select-none lg:flex-col'>
                <button className='bg-neutral-200 px-5 py-3 rounded-lg dark:bg-neutral-800 lg:w-full lg:flex lg:justify-center' onClick={() => setShowCode(!showCode)}>{showCode ? <div className='flex items-center gap-1'><HideCodeIcon/><span>Hide code</span></div> : <div className='flex items-center gap-1'><ShowCodeIcon/><span>Show code</span></div>}</button>
                <EditInGithub url={githubUrl} />
            </div>
            <div className='flex flex-col'>
                {showCode ?
                    <div>
                        <section className='flex flex-wrap rounded-lg gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                            <StackedAvatar />
                        </section>
                        <CodeBlock name={"Stacked"} code={stackedAvatar} language={"javascript"} />
                    </div>
                    :
                    <section className='flex flex-wrap rounded-lg gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                        <StackedAvatar />
                    </section>}

            </div>
        </article>
    )
}

export default Stacked