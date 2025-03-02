import React, { useState } from 'react'
import { CodeBlock } from '../../../CodeBlock/CodeBlock'
import EditInGithub from '../../../EditInGithub/EditInGithub'
import { ReviewsNumber } from '../../../UI/Rating/Rating'
import {HideCodeIcon, ShowCodeIcon} from '@icons'

const Reviews = () => {

    const [showCode, setShowCode] = useState(false)

    const ratingWithText = `<div className='inline-flex gap-2 items-center'> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><path fill="#ffaf39" d="m234.5 114.38l-45.1 39.36l13.51 58.6a16 16 0 0 1-23.84 17.34l-51.11-31l-51 31a16 16 0 0 1-23.84-17.34l13.49-58.54l-45.11-39.42a16 16 0 0 1 9.11-28.06l59.46-5.15l23.21-55.36a15.95 15.95 0 0 1 29.44 0L166 81.17l59.44 5.15a16 16 0 0 1 9.11 28.06Z" /></svg> <p className="text-neutral-6700 text-sm dark:text-neutral-300">3.67</p> <span className="w-1 h-1 rounded-full bg-black dark:bg-white"></span> <a href="#" className="text-neutral-700 text-sm underline hover:no-underline dark:text-neutral-300">127 reviews</a></div>`

    const githubUrl = 'https://github.com/juanigarciadev/BlossomUI/tree/main/src/components/UI/Rating/Rating.jsx'

    return (
        <article>
            <div className='pb-4'>
                <h3 className='text-lg font-medium'>With reviews number</h3>
                <p className='dark:text-neutral-300'>Shows the exact rating so that the user knows exactly the opinion of other users.</p>
            </div>
            <div className='flex pb-2 gap-2 select-none lg:flex-col'>
                <button className='bg-neutral-200 px-5 py-3 rounded-lg dark:bg-neutral-800 lg:w-full lg:flex lg:justify-center' onClick={() => setShowCode(!showCode)}>{showCode ? <div className='flex items-center gap-1'><HideCodeIcon/><span>Hide code</span></div> : <div className='flex items-center gap-1'><ShowCodeIcon/><span>Show code</span></div>}</button>
                <EditInGithub url={githubUrl} />
            </div>
            <div className='flex flex-col'>
                {showCode ?
                    <div>
                        <section className='flex flex-wrap rounded-lg gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                            <ReviewsNumber />
                        </section>
                        <CodeBlock name={"With reviews number"} code={ratingWithText} language={"javascript"} />
                    </div>
                    :
                    <section className='flex flex-wrap rounded-lg gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                        <ReviewsNumber />
                    </section>}
            </div>
        </article>
    )
}

export default Reviews