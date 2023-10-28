import React, { useState } from 'react'
import { CodeBlock } from '../../../CodeBlock/CodeBlock'
import { BiCode } from 'react-icons/bi'
import EditInGithub from '../../../EditInGithub/EditInGithub'
import { InformationAvatar } from '../../../UI/Avatar/Avatar'

const WithInformation = () => {

    const [showCode, setShowCode] = useState(false)

    const withInformation = `<div className='flex gap-3'>
    <img className='bg-neutral-200 w-10 h-10 rounded-full' src='https://res.cloudinary.com/diruiumfk/image/upload/v1698155370/person-image-1_mqb6ut.jpg' alt='Circular avatar'></img>
    <div className='flex flex-col -gap-1'>
        <p className='font-medium dark:text-white'>Katherine Hoffman</p>
        <span className='text-sm text-neutral-700 dark:text-neutral-300'>Active now</span>
    </div>
</div>`

    return (
        <article>
            <div className='pb-4'>
                <h3 className='text-lg font-medium'>With information</h3>
                <p className='dark:text-neutral-300'>Show the user's initials if they have not added a profile image and you do not like the placeholder variant.</p>
            </div>
            <div className='flex pb-2 gap-2 select-none lg:flex-col'>
                <div className='flex items-center bg-neutral-200 p-[5px] rounded-lg dark:bg-neutral-800 lg:w-full'>
                    <span className={showCode ? 'flex items-center gap-2 px-4 py-1 rounded-lg cursor-pointer bg-neutral-400 dark:bg-neutral-900 lg:w-full lg:justify-center' : 'flex items-center gap-2 px-4 py-1 rounded-lg cursor-pointer hover:bg-neutral-400 dark:hover:bg-neutral-900 lg:w-full lg:justify-center'} onClick={() => setShowCode(!showCode)}><BiCode />Show code</span>
                </div>
                <EditInGithub url={'https://github.com/juanigarciadev/BlossomUI/blob/main/src/components/UI/Avatar/Avatar.jsx'} />
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