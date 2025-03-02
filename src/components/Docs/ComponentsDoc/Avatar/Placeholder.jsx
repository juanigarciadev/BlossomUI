import React, { useState } from 'react'
import { Placeholder } from '../../../UI/Avatar/Avatar'
import CodeBlock from '@codeBlock'
import EditInGithub from '@editInGithub'
import {HideCodeIcon, ShowCodeIcon} from '@icons'

const PlaceholderAvatar = () => {

    const [showCode, setShowCode] = useState(false)

    const placeholderAvatar = "<div className='relative overflow-hidden bg-neutral-200 w-10 h-10 rounded-full dark:bg-neutral-600'>\n    <svg class='absolute w-12 h-12 text-gray-400 -left-1' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z' clip-rule='evenodd'></path></svg>\n</div>"

    const githubUrl = 'https://github.com/juanigarciadev/BlossomUI/blob/main/src/components/UI/Avatar/Avatar.jsx'

    return (
        <article>
            <div className='pb-4'>
                <h3 className='text-lg font-medium'>Placeholder</h3>
                <p className='dark:text-neutral-300'>Use this variant for users who do not have a profile image.</p>
            </div>
            <div className='flex pb-2 gap-2 select-none lg:flex-col'>
                <button className='bg-neutral-200 px-5 py-3 rounded-lg dark:bg-neutral-800 lg:w-full lg:flex lg:justify-center' onClick={() => setShowCode(!showCode)}>{showCode ? <div className='flex items-center gap-1'><HideCodeIcon/><span>Hide code</span></div> : <div className='flex items-center gap-1'><ShowCodeIcon/><span>Show code</span></div>}</button>
                <EditInGithub url={githubUrl} />
            </div>
            <div className='flex flex-col'>
                {showCode ?
                    <div>
                        <section className='flex flex-wrap rounded-lg gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                            <Placeholder />
                        </section>
                        <CodeBlock name={"Placeholder"} code={placeholderAvatar} language={"javascript"} />
                    </div>
                    :
                    <section className='flex flex-wrap rounded-lg gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                        <Placeholder />
                    </section>}

            </div>
        </article>
    )
}

export default PlaceholderAvatar