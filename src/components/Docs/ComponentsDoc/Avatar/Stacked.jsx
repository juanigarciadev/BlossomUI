import React, { useState } from 'react'
import { CodeBlock } from '../../../CodeBlock/CodeBlock'
import { BiCode } from 'react-icons/bi'
import EditInGithub from '../../../EditInGithub/EditInGithub'
import { StackedAvatar } from '../../../UI/Avatar/Avatar'

const Stacked = () => {

    const [showCode, setShowCode] = useState(false)

    const stackedAvatar = "<div className='flex -space-x-4'>\n    <img className='bg-neutral-200 w-10 h-10 rounded-full shadow-sm border-2 border-neutral-300 dark:bg-neutral-800 dark:border-neutral-700' src='https://res.cloudinary.com/diruiumfk/image/upload/v1698155370/person-image-1_mqb6ut.jpg'></img>\n    <img className='bg-neutral-200 w-10 h-10 rounded-full shadow-sm border-2 border-neutral-300 dark:bg-neutral-800 dark:border-neutral-700' src='https://res.cloudinary.com/diruiumfk/image/upload/v1698155371/person-image-4_usvfxg.jpg'></img>\n    <img className='bg-neutral-200 w-10 h-10 rounded-full shadow-sm border-2 border-neutral-300 dark:bg-neutral-800 dark:border-neutral-700' src='https://res.cloudinary.com/diruiumfk/image/upload/v1698155370/person-image-3_fstmzw.jpg'></img>\n    <img className='bg-neutral-200 w-10 h-10 rounded-full shadow-sm border-2 border-neutral-300 dark:bg-neutral-800 dark:border-neutral-700' src='https://res.cloudinary.com/diruiumfk/image/upload/v1698155370/person-image-2_sjyoj5.jpg'></img>\n    <a className='flex items-center justify-center text-sm font-medium bg-neutral-200 w-10 h-10 rounded-full shadow-sm border-2 border-neutral-300 cursor-pointer select-none hover:bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 dark:hover:bg-neutral-600'>+99</a>\n</div>"

    return (
        <article>
            <div className='pb-4'>
                <h3 className='text-lg font-medium'>Stacked avatar</h3>
                <p className='dark:text-neutral-300'>Use the stacked variant to display a group of users.</p>
            </div>
            <div className='flex pb-2 gap-2 select-none lg:flex-col'>
                <div className='flex items-center bg-neutral-200 p-[5px] rounded-lg dark:bg-neutral-800 lg:w-full'>
                    <span className={showCode ? 'flex items-center gap-2 px-4 py-1 rounded-lg cursor-pointer bg-neutral-400 dark:bg-neutral-900 lg:w-full lg:justify-center' : 'flex items-center gap-2 px-4 py-1 rounded-lg cursor-pointer hover:bg-neutral-400 dark:hover:bg-neutral-900 lg:w-full lg:justify-center'} onClick={() => setShowCode(!showCode)}><BiCode />Show code</span>
                </div>
                <EditInGithub url={'https://github.com/juanigarciadev/BlossomUI/blob/main/src/components/UI/Badges/Normal/Default.jsx'} />
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