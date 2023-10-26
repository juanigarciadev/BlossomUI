import React, { useState } from 'react'
import { CodeBlock } from '../../../CodeBlock/CodeBlock'
import { BiCode } from 'react-icons/bi'
import EditInGithub from '../../../EditInGithub/EditInGithub'
import { CircularAvatarDoNotDisturbBottom, CircularAvatarDoNotDisturbTop, CircularAvatarOnlineBottom, CircularAvatarOnlineTop, RoundedEdgesAvatar, RoundedEdgesAvatarDoNotDisturbBottom, RoundedEdgesAvatarDoNotDisturbTop, RoundedEdgesAvatarOnlineBottom, RoundedEdgesAvatarOnlineTop, StackedAvatar } from '../../../UI/Avatar/Avatar'

const DotStatusIndicatorAvatar = () => {

    const [showCode, setShowCode] = useState(false)

    const circularAvatar = "<img className='bg-neutral-200 w-10 h-10 rounded-full' src='https://res.cloudinary.com/diruiumfk/image/upload/v1698155370/person-image-1_mqb6ut.jpg' alt='Circular avatar'></img>\n<img className='bg-neutral-200 w-10 h-10 rounded-lg' src='https://res.cloudinary.com/diruiumfk/image/upload/v1698155370/person-image-1_mqb6ut.jpg' alt='Rounded edges avatar'></img>"

    return (
        <article>
            <div className='pb-4'>
                <h3 className='text-lg font-medium'>Dot status indicator</h3>
                <p className='dark:text-neutral-300'>Shows the user's activity status with a colored circle in the avatar.</p>
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
                        <CodeBlock name={"Avatar"} code={circularAvatar} language={"javascript"} />
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