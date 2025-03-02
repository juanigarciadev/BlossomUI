import React, { useState } from 'react'
import { CodeBlock } from '../../../CodeBlock/CodeBlock'
import EditInGithub from '../../../EditInGithub/EditInGithub'
import { Initials } from '../../../UI/Avatar/Avatar'
import {HideCodeIcon, ShowCodeIcon} from '@icons'

const InitialsAvatar = () => {

    const [showCode, setShowCode] = useState(false)

    const initialsAvatar = `<div className='relative flex items-center justify-center bg-neutral-200 w-10 h-10 rounded-full dark:bg-neutral-600'>\n    <span className='font-medium text-neutral-600 dark:text-neutral-300'>UI</span>\n</div>`

    const githubUrl = 'https://github.com/juanigarciadev/BlossomUI/blob/main/src/components/UI/Avatar/Avatar.jsx'

    return (
        <article>
            <div className='pb-4'>
                <h3 className='text-lg font-medium'>With initials</h3>
                <p className='dark:text-neutral-300'>Show the user's initials if they have not added a profile image and you do not like the placeholder variant.</p>
            </div>
            <div className='flex pb-2 gap-2 select-none lg:flex-col'>
                <button className='bg-neutral-200 px-5 py-3 rounded-lg dark:bg-neutral-800 lg:w-full lg:flex lg:justify-center' onClick={() => setShowCode(!showCode)}>{showCode ? <div className='flex items-center gap-1'><HideCodeIcon/><span>Hide code</span></div> : <div className='flex items-center gap-1'><ShowCodeIcon/><span>Show code</span></div>}</button>
                <EditInGithub url={githubUrl} />
            </div>
            <div className='flex flex-col'>
                {showCode ?
                    <div>
                        <section className='flex flex-wrap rounded-lg gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                            <Initials />
                        </section>
                        <CodeBlock name={"With initials"} code={initialsAvatar} language={"javascript"} />
                    </div>
                    :
                    <section className='flex flex-wrap rounded-lg gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                        <Initials />
                    </section>}

            </div>
        </article>
    )
}

export default InitialsAvatar