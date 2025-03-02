import React, { useState } from 'react'
import { CircularAvatar, RoundedEdgesAvatar } from '../../../UI/Avatar/Avatar'
import CodeBlock from '@codeBlock'
import EditInGithub from '@editInGithub'
import {HideCodeIcon, ShowCodeIcon} from '@icons'

const Avatar = () => {

    const [showCode, setShowCode] = useState(false)

    const circularAvatar = "<img className='bg-neutral-200 w-10 h-10 rounded-full' src='https://res.cloudinary.com/diruiumfk/image/upload/v1698155370/person-image-1_mqb6ut.jpg' alt='Circular avatar'></img>\n<img className='bg-neutral-200 w-10 h-10 rounded-lg' src='https://res.cloudinary.com/diruiumfk/image/upload/v1698155370/person-image-1_mqb6ut.jpg' alt='Rounded edges avatar'></img>"

    const githubUrl = 'https://github.com/juanigarciadev/BlossomUI/blob/main/src/components/UI/Avatar/Avatar.jsx'

    return (
        <article>
            <div className='pb-4'>
                <h3 className='text-lg font-medium'>Avatar</h3>
                <p className='dark:text-neutral-300'>Shows the user's profile image with different rounded edges.</p>
            </div>
            <div className='flex pb-2 gap-2 select-none lg:flex-col'>
                <button className='bg-neutral-200 px-5 py-3 rounded-lg dark:bg-neutral-800 lg:w-full lg:flex lg:justify-center' onClick={() => setShowCode(!showCode)}>{showCode ? <div className='flex items-center gap-1'><HideCodeIcon/><span>Hide code</span></div> : <div className='flex items-center gap-1'><ShowCodeIcon/><span>Show code</span></div>}</button>
                <EditInGithub url={githubUrl} />
            </div>
            <div className='flex flex-col'>
                {showCode ?
                    <div>
                        <section className='flex flex-wrap rounded-lg gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                            <CircularAvatar />
                            <RoundedEdgesAvatar />
                        </section>
                        <CodeBlock name={"Avatar"} code={circularAvatar} language={"javascript"} />
                    </div>
                    :
                    <section className='flex flex-wrap rounded-lg gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                        <CircularAvatar />
                        <RoundedEdgesAvatar />
                    </section>}

            </div>
        </article>
    )
}

export default Avatar