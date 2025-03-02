import React, { useState } from 'react'
import { ProductAddedToast, ProductRemovedToast } from '../../../UI/Toasts/Toasts'
import CodeBlock from '@codeBlock'
import EditInGithub from '@editInGithub'
import {HideCodeIcon, ShowCodeIcon} from '@icons'

const ProductToast = () => {

    const [showCode, setShowCode] = useState(false)

    const addedToast = `<div className='inline-flex items-center gap-4 w-fit h-fit px-4 py-4 bg-white border rounded-lg dark:bg-neutral-800 dark:border-neutral-700'> <div className="bg-green-100 dark:bg-green-500 rounded p-1"> <svg className="text-green-500 dark:text-green-100" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15.586l-3.293-3.293l-1.414 1.414L10 18.414l9.707-9.707l-1.414-1.414z"/></svg> </div> <span className='text-black dark:text-white'>Product added to cart.</span> <div className="group hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded cursor-pointer p-2"> <svg className="text-neutral-500 group-hover:text-neutral-800 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m16.192 6.344l-4.243 4.242l-4.242-4.242l-1.414 1.414L10.535 12l-4.242 4.242l1.414 1.414l4.242-4.242l4.243 4.242l1.414-1.414L13.364 12l4.242-4.242z"/></svg> </div> </div>
<div className='inline-flex items-center gap-4 w-fit h-fit px-4 py-4 bg-white border rounded-lg dark:bg-neutral-800 dark:border-neutral-700'> <div className="bg-red-100 dark:bg-red-500 rounded p-1"> <svg className="text-red-500 dark:text-red-100" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m16.192 6.344l-4.243 4.242l-4.242-4.242l-1.414 1.414L10.535 12l-4.242 4.242l1.414 1.414l4.242-4.242l4.243 4.242l1.414-1.414L13.364 12l4.242-4.242z"/></svg> </div> <span className='text-black dark:text-white'>Product removed from cart.</span> <div className="group hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded cursor-pointer p-2"> <svg className="text-neutral-500 group-hover:text-neutral-800 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m16.192 6.344l-4.243 4.242l-4.242-4.242l-1.414 1.414L10.535 12l-4.242 4.242l1.414 1.414l4.242-4.242l4.243 4.242l1.414-1.414L13.364 12l4.242-4.242z"/></svg> </div> </div>`

    const githubUrl = 'https://github.com/juanigarciadev/BlossomUI/blob/main/src/components/UI/Toasts/Toasts.jsx'

    return (
        <article>
            <div className='pb-4'>
                <h3 className='text-lg font-medium'>Products</h3>
                <p className='dark:text-neutral-300'>Used to show the user that the product was added to cart.</p>
            </div>
            <div className='flex gap-2 pb-2 select-none lg:flex-col'>
                <button className='bg-neutral-200 px-5 py-3 rounded-lg dark:bg-neutral-800 lg:w-full lg:flex lg:justify-center' onClick={() => setShowCode(!showCode)}>{showCode ? <div className='flex items-center gap-1'><HideCodeIcon/><span>Hide code</span></div> : <div className='flex items-center gap-1'><ShowCodeIcon/><span>Show code</span></div>}</button>
                <EditInGithub url={githubUrl} />
            </div>
            <div className='flex flex-col'>
                {showCode ?
                    <div>
                        <section className='flex flex-col flex-wrap rounded-lg gap-1 p-4 pt-6 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                            <ProductAddedToast/>
                            <ProductRemovedToast/>
                        </section>
                        <CodeBlock name={"Products"} code={addedToast} language={"javascript"} />
                    </div>
                    :
                    <section className='flex flex-col flex-wrap rounded-lg gap-1 p-4 pt-6 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                        <ProductAddedToast/>
                        <ProductRemovedToast/>
                    </section>}
            </div>
        </article>
    )
}

export default ProductToast