import React, { useState } from 'react'
import { InformationAvatar } from '../../../UI/Avatar/Avatar'
import CodeBlock from '@codeBlock'
import EditInGithub from '@editInGithub'
import {HideCodeIcon, ShowCodeIcon} from '@icons'
import CompVersionTitle from '../../../CompVersionTitle/CompVersionTitle'

const WithInformation = () => {

    const [showCode, setShowCode] = useState(false)

    const withInformation = `<div className='flex gap-3'>
    <img className='bg-neutral-200 w-10 h-10 rounded-full' src='https://res.cloudinary.com/diruiumfk/image/upload/v1698155370/person-image-1_mqb6ut.jpg' alt='Circular avatar'></img>
    <div className='flex flex-col -gap-1'>
        <p className='font-medium dark:text-white'>Katherine Hoffman</p>
        <span className='text-sm text-neutral-700 dark:text-neutral-300'>Active now</span>
    </div>
</div>`

    const githubUrl = 'https://github.com/juanigarciadev/BlossomUI/blob/main/src/components/UI/Avatar/Avatar.jsx'

    return (
        <article>
            <CompVersionTitle title={"With information"} paragraph={"Show the user's initials if they have not added a profile image and you do not like the placeholder variant."}/>
            <div className='flex pb-2 gap-2 select-none lg:flex-col'>
                <button className='bg-neutral-200 px-5 py-3 rounded-lg dark:bg-neutral-800 lg:w-full lg:flex lg:justify-center' onClick={() => setShowCode(!showCode)}>{showCode ? <div className='flex items-center gap-1'><HideCodeIcon/><span>Hide code</span></div> : <div className='flex items-center gap-1'><ShowCodeIcon/><span>Show code</span></div>}</button>
                <EditInGithub url={githubUrl} />
            </div>
            <div className='flex flex-col'>
                {showCode ?
                    <div>
                        <section className='flex flex-wrap rounded-lg gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                            <InformationAvatar />
                        </section>
                        <CodeBlock name={"With information"} code={withInformation} language={"javascript"} />
                    </div>
                    :
                    <section className='flex flex-wrap rounded-lg gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                        <InformationAvatar />
                    </section>}

            </div>
        </article>
    )
}

export default WithInformation