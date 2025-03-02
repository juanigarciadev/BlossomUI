import React, { useState } from 'react'
import { SizeAccentPricing } from '../../../UI/Pricing/Pricing'
import CodeBlock from '@codeBlock'
import EditInGithub from '@editInGithub'
import {HideCodeIcon, ShowCodeIcon} from '@icons'

const SizeAccent = () => {

    const [showCode, setShowCode] = useState(false)

    const sizeAccent = `<div className="flex w-full justify-center p-8 gap-4 bg-neutral-200 dark:bg-neutral-900 md:flex-col md:items-center"> <article className="flex flex-col gap-6 items-center justify-start w-64 h-auto py-6 bg-white rounded-lg shadow-md dark:bg-neutral-800"> <div className="flex flex-col w-full items-center gap-2 pb-6 border-b-[1px] border-neutral-300 dark:border-neutral-700"> <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">FREE</span> <div className="inline-flex items-end"> <h3 className="text-5xl font-bold">$0</h3> <span className="text-xs font-medium">/month</span> </div> </div> <div className="w-full px-6"> <ul className="flex flex-col gap-2"> <li className="inline-flex gap-1 text-sm"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15.586l-3.293-3.293l-1.414 1.414L10 18.414l9.707-9.707l-1.414-1.414z" /></svg> <span>Single user</span> </li> <li className="inline-flex gap-1 text-sm"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15.586l-3.293-3.293l-1.414 1.414L10 18.414l9.707-9.707l-1.414-1.414z" /></svg> <span>5GB Storage</span> </li> <li className="inline-flex gap-1 text-sm"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15.586l-3.293-3.293l-1.414 1.414L10 18.414l9.707-9.707l-1.414-1.414z" /></svg> <span>Unlimited Public Projects</span> </li> <li className="inline-flex gap-1 text-sm"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15.586l-3.293-3.293l-1.414 1.414L10 18.414l9.707-9.707l-1.414-1.414z" /></svg> <span>Community Access</span> </li> <li className="flex gap-1 text-sm text-neutral-500 line-through"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m16.192 6.344l-4.243 4.242l-4.242-4.242l-1.414 1.414L10.535 12l-4.242 4.242l1.414 1.414l4.242-4.242l4.243 4.242l1.414-1.414L13.364 12l4.242-4.242z" /></svg> <span>Unlimited Private Projects</span> </li> <li className="flex gap-1 text-sm text-neutral-500 line-through"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m16.192 6.344l-4.243 4.242l-4.242-4.242l-1.414 1.414L10.535 12l-4.242 4.242l1.414 1.414l4.242-4.242l4.243 4.242l1.414-1.414L13.364 12l4.242-4.242z" /></svg> <span>Dedicated Phone Support</span> </li> <li className="flex gap-1 text-sm text-neutral-500 line-through"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m16.192 6.344l-4.243 4.242l-4.242-4.242l-1.414 1.414L10.535 12l-4.242 4.242l1.414 1.414l4.242-4.242l4.243 4.242l1.414-1.414L13.364 12l4.242-4.242z" /></svg> <span>Free Subdomain</span> </li> <li className="flex gap-1 text-sm text-neutral-500 line-through"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m16.192 6.344l-4.243 4.242l-4.242-4.242l-1.414 1.414L10.535 12l-4.242 4.242l1.414 1.414l4.242-4.242l4.243 4.242l1.414-1.414L13.364 12l4.242-4.242z" /></svg> <span>Monthly Status Reports</span> </li> </ul> </div> <div className="w-full px-4"> <button className='flex justify-center w-full h-fit text-sm items-center text-center bg-blue-700 text-white gap-2 px-4 py-3 rounded-full cursor-pointer font-medium select-none hover:bg-blue-800'>Subscribe</button> </div> </article> <article className="flex flex-col gap-6 items-center justify-start w-64 h-auto py-10 -my-4 bg-white rounded-lg shadow-md dark:bg-neutral-800"> <div className="flex flex-col w-full items-center gap-2 pb-6 border-b-[1px] border-neutral-300 dark:border-neutral-700"> <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">PLUS</span> <div className="inline-flex items-end"> <h3 className="text-5xl font-bold">$5</h3> <span className="text-xs font-medium">/month</span> </div> </div> <div className="w-full px-6"> <ul className="flex flex-col gap-2"> <li className="inline-flex gap-1 text-sm"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15.586l-3.293-3.293l-1.414 1.414L10 18.414l9.707-9.707l-1.414-1.414z" /></svg> <span>Single user</span> </li> <li className="inline-flex gap-1 text-sm"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15.586l-3.293-3.293l-1.414 1.414L10 18.414l9.707-9.707l-1.414-1.414z" /></svg> <span>5GB Storage</span> </li> <li className="inline-flex gap-1 text-sm"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15.586l-3.293-3.293l-1.414 1.414L10 18.414l9.707-9.707l-1.414-1.414z" /></svg> <span>Unlimited Public Projects</span> </li> <li className="inline-flex gap-1 text-sm"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15.586l-3.293-3.293l-1.414 1.414L10 18.414l9.707-9.707l-1.414-1.414z" /></svg> <span>Community Access</span> </li> <li className="flex gap-1 text-sm"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15.586l-3.293-3.293l-1.414 1.414L10 18.414l9.707-9.707l-1.414-1.414z" /></svg> <span>Unlimited Private Projects</span> </li> <li className="flex gap-1 text-sm"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15.586l-3.293-3.293l-1.414 1.414L10 18.414l9.707-9.707l-1.414-1.414z" /></svg> <span>Dedicated Phone Support</span> </li> <li className="flex gap-1 text-sm text-neutral-500 line-through"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m16.192 6.344l-4.243 4.242l-4.242-4.242l-1.414 1.414L10.535 12l-4.242 4.242l1.414 1.414l4.242-4.242l4.243 4.242l1.414-1.414L13.364 12l4.242-4.242z" /></svg> <span>Free Subdomain</span> </li> <li className="flex gap-1 text-sm text-neutral-500 line-through"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m16.192 6.344l-4.243 4.242l-4.242-4.242l-1.414 1.414L10.535 12l-4.242 4.242l1.414 1.414l4.242-4.242l4.243 4.242l1.414-1.414L13.364 12l4.242-4.242z" /></svg> <span>Monthly Status Reports</span> </li> </ul> </div> <div className="w-full px-4"> <button className='flex justify-center w-full h-fit text-sm items-center text-center bg-blue-700 text-white gap-2 px-4 py-3 rounded-full cursor-pointer font-medium select-none hover:bg-blue-800'>Subscribe</button> </div> </article> <article className="flex flex-col gap-6 items-center justify-start w-64 h-auto py-6 bg-white rounded-lg shadow-md dark:bg-neutral-800"> <div className="flex flex-col w-full items-center gap-2 pb-6 border-b-[1px] border-neutral-300 dark:border-neutral-700"> <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">PRO</span> <div className="inline-flex items-end"> <h3 className="text-5xl font-bold">$15</h3> <span className="text-xs font-medium">/month</span> </div> </div> <div className="w-full px-6"> <ul className="flex flex-col gap-2"> <li className="inline-flex gap-1 text-sm"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15.586l-3.293-3.293l-1.414 1.414L10 18.414l9.707-9.707l-1.414-1.414z" /></svg> <span>Single user</span> </li> <li className="inline-flex gap-1 text-sm"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15.586l-3.293-3.293l-1.414 1.414L10 18.414l9.707-9.707l-1.414-1.414z" /></svg> <span>5GB Storage</span> </li> <li className="inline-flex gap-1 text-sm"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15.586l-3.293-3.293l-1.414 1.414L10 18.414l9.707-9.707l-1.414-1.414z" /></svg> <span>Unlimited Public Projects</span> </li> <li className="inline-flex gap-1 text-sm"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15.586l-3.293-3.293l-1.414 1.414L10 18.414l9.707-9.707l-1.414-1.414z" /></svg> <span>Community Access</span> </li> <li className="flex gap-1 text-sm"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15.586l-3.293-3.293l-1.414 1.414L10 18.414l9.707-9.707l-1.414-1.414z" /></svg> <span>Unlimited Private Projects</span> </li> <li className="flex gap-1 text-sm"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15.586l-3.293-3.293l-1.414 1.414L10 18.414l9.707-9.707l-1.414-1.414z" /></svg> <span>Dedicated Phone Support</span> </li> <li className="flex gap-1 text-sm"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15.586l-3.293-3.293l-1.414 1.414L10 18.414l9.707-9.707l-1.414-1.414z" /></svg> <span>Free Subdomain</span> </li> <li className="flex gap-1 text-sm"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15.586l-3.293-3.293l-1.414 1.414L10 18.414l9.707-9.707l-1.414-1.414z" /></svg> <span>Monthly Status Reports</span> </li> </ul> </div> <div className="w-full px-4"> <button className='flex justify-center w-full h-fit text-sm items-center text-center bg-blue-700 text-white gap-2 px-4 py-3 rounded-full cursor-pointer font-medium select-none hover:bg-blue-800'>Subscribe</button> </div></article></div>`

    const githubUrl = 'https://github.com/juanigarciadev/BlossomUI/blob/main/src/components/UI/Pricing/Pricing.jsx'

    return (
        <article>
            <div className='pb-4'>
                <h3 className='text-lg font-medium'>Size accent</h3>
                <p className='dark:text-neutral-300'>Use this variant with a size accent to attract the user's attention and make them buy a more expensive subscription.</p>
            </div>
            <div className='flex gap-2 pb-2 select-none lg:flex-col'>
                <button className='bg-neutral-200 px-5 py-3 rounded-lg dark:bg-neutral-800 lg:w-full lg:flex lg:justify-center' onClick={() => setShowCode(!showCode)}>{showCode ? <div className='flex items-center gap-1'><HideCodeIcon/><span>Hide code</span></div> : <div className='flex items-center gap-1'><ShowCodeIcon/><span>Show code</span></div>}</button>
                <EditInGithub url={githubUrl} />
            </div>
            <div className='flex flex-col'>
                {showCode ?
                    <div>
                        <section className='flex flex-wrap rounded-lg gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                            <SizeAccentPricing />
                        </section>
                        <CodeBlock name={'Size accent'} code={sizeAccent} language={'javascript'} />
                    </div>
                    :
                    <section className='flex flex-wrap rounded-lg gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                        <SizeAccentPricing />
                    </section>}
            </div>
        </article>
    )
}

export default SizeAccent