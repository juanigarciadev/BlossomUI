import React, { useState } from 'react'
import { CodeBlock } from '../../../CodeBlock/CodeBlock'
import EditInGithub from '../../../EditInGithub/EditInGithub'
import { CircularAvatarDoNotDisturbBottom, CircularAvatarDoNotDisturbTop, CircularAvatarOnlineBottom, CircularAvatarOnlineTop, RoundedEdgesAvatar, RoundedEdgesAvatarDoNotDisturbBottom, RoundedEdgesAvatarDoNotDisturbTop, RoundedEdgesAvatarOnlineBottom, RoundedEdgesAvatarOnlineTop, StackedAvatar } from '../../../UI/Avatar/Avatar'
import {HideCodeIcon, ShowCodeIcon} from '@icons'

const DotStatusIndicatorAvatar = () => {

    const [showCode, setShowCode] = useState(false)

    const circularAvatar = `<div className="relative"><img className='bg-neutral-200 w-10 h-10 rounded-full' src='https://res.cloudinary.com/diruiumfk/image/upload/v1698155370/person-image-1_mqb6ut.jpg' alt="Circular avatar"></img><span className="absolute w-3.5 h-3.5 bg-green-600 rounded-full border-2 border-white top-0 -right-1 dark:border-neutral-700"></span></div>\n<div className="relative"><img className='bg-neutral-200 w-10 h-10 rounded-full' src='https://res.cloudinary.com/diruiumfk/image/upload/v1698155370/person-image-1_mqb6ut.jpg' alt="Circular avatar"></img><span className="absolute w-3.5 h-3.5 bg-green-600 rounded-full border-2 border-white bottom-0 -right-1 dark:border-neutral-700"></span></div>\n<div className="relative"><img className='bg-neutral-200 w-10 h-10 rounded-full' src='https://res.cloudinary.com/diruiumfk/image/upload/v1698155370/person-image-1_mqb6ut.jpg' alt="Circular avatar"></img><span className="absolute w-3.5 h-3.5 bg-red-600 rounded-full border-2 border-white top-0 -right-1 dark:border-neutral-700"></span></div>\n<div className="relative"><img className='bg-neutral-200 w-10 h-10 rounded-full' src='https://res.cloudinary.com/diruiumfk/image/upload/v1698155370/person-image-1_mqb6ut.jpg' alt="Circular avatar"></img><span className="absolute w-3.5 h-3.5 bg-red-600 rounded-full border-2 border-white bottom-0 -right-1 dark:border-neutral-700"></span></div>\n\n<div className="relative"><img className='bg-neutral-200 w-10 h-10 rounded-lg' src='https://res.cloudinary.com/diruiumfk/image/upload/v1698155370/person-image-1_mqb6ut.jpg' alt="Online"></img><span className="absolute w-3.5 h-3.5 bg-green-600 rounded-full border-2 border-white top-0 -right-1 dark:border-neutral-700"></span></div>\n<div className="relative"><img className='bg-neutral-200 w-10 h-10 rounded-lg' src='https://res.cloudinary.com/diruiumfk/image/upload/v1698155370/person-image-1_mqb6ut.jpg' alt="Online"></img><span className="absolute w-3.5 h-3.5 bg-green-600 rounded-full border-2 border-white bottom-0 -right-1 dark:border-neutral-700"></span></div>\n<div className="relative"><img className='bg-neutral-200 w-10 h-10 rounded-lg' src='https://res.cloudinary.com/diruiumfk/image/upload/v1698155370/person-image-1_mqb6ut.jpg' alt="Do not disturb"></img><span className="absolute w-3.5 h-3.5 bg-red-600 rounded-full border-2 border-white top-0 -right-1 dark:border-neutral-700"></span></div>\n<div className="relative"><img className='bg-neutral-200 w-10 h-10 rounded-lg' src='https://res.cloudinary.com/diruiumfk/image/upload/v1698155370/person-image-1_mqb6ut.jpg' alt="Do not disturb"></img><span className="absolute w-3.5 h-3.5 bg-red-600 rounded-full border-2 border-white bottom-0 -right-1 dark:border-neutral-700"></span></div>\n`

    const githubUrl = 'https://github.com/juanigarciadev/BlossomUI/blob/main/src/components/UI/Avatar/Avatar.jsx'

    return (
        <article>
            <div className='pb-4'>
                <h3 className='text-lg font-medium'>Dot status indicator</h3>
                <p className='dark:text-neutral-300'>Shows the user's activity status with a colored circle in the avatar.</p>
            </div>
            <div className='flex pb-2 gap-2 select-none lg:flex-col'>
                <button className='bg-neutral-200 px-5 py-3 rounded-lg dark:bg-neutral-800 lg:w-full lg:flex lg:justify-center' onClick={() => setShowCode(!showCode)}>{showCode ? <div className='flex items-center gap-1'><HideCodeIcon/><span>Hide code</span></div> : <div className='flex items-center gap-1'><ShowCodeIcon/><span>Show code</span></div>}</button>
                <EditInGithub url={githubUrl} />
            </div>
            <div className='flex flex-col'>
                {showCode ?
                    <div>
                        <section className='flex flex-col flex-wrap rounded-lg gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                            <div className='flex gap-4'>
                                <CircularAvatarOnlineTop />
                                <CircularAvatarOnlineBottom />
                                <CircularAvatarDoNotDisturbTop />
                                <CircularAvatarDoNotDisturbBottom />
                            </div>
                            <div className='flex gap-4'>
                                <RoundedEdgesAvatarOnlineTop />
                                <RoundedEdgesAvatarOnlineBottom />
                                <RoundedEdgesAvatarDoNotDisturbTop />
                                <RoundedEdgesAvatarDoNotDisturbBottom />
                            </div>
                        </section>
                        <CodeBlock name={"Dot status indicator"} code={circularAvatar} language={"javascript"} />
                    </div>
                    :
                    <section className='flex flex-col flex-wrap rounded-lg gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                        <div className='flex gap-4'>
                            <CircularAvatarOnlineTop />
                            <CircularAvatarOnlineBottom />
                            <CircularAvatarDoNotDisturbTop />
                            <CircularAvatarDoNotDisturbBottom />
                        </div>
                        <div className='flex gap-4'>
                            <RoundedEdgesAvatarOnlineTop />
                            <RoundedEdgesAvatarOnlineBottom />
                            <RoundedEdgesAvatarDoNotDisturbTop />
                            <RoundedEdgesAvatarDoNotDisturbBottom />
                        </div>
                    </section>}

            </div>
        </article>
    )
}

export default DotStatusIndicatorAvatar