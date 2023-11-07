import React, { useState } from 'react'
import { BiCode } from 'react-icons/bi'
import EditInGithub from '../../../EditInGithub/EditInGithub'
import { CodeBlock } from '../../../CodeBlock/CodeBlock'
import { DefaultPricing } from '../../../UI/Pricing/Pricing'
const Pricing = () => {

    const [showCode, setShowCode] = useState(false)

    const pricing = `<div className="flex w-full justify-center p-4 gap-4 bg-neutral-200 dark:bg-neutral-900">
    <article className="flex flex-col gap-6 items-center justify-start w-64 h-auto py-6 bg-white rounded-lg shadow-md dark:bg-neutral-800">
        <div className="flex flex-col w-full items-center gap-2 pb-6 border-b-[1px] border-neutral-300 dark:border-neutral-700">
            <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">FREE</span>
            <div className="inline-flex items-end">
                <h3 className="text-5xl font-bold">$0</h3>
                <span className="text-xs font-medium">/month</span>
            </div>
        </div>
        <div className="w-full px-6">
            <ul className="flex flex-col gap-2">
                <li className="inline-flex gap-1 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15.586l-3.293-3.293l-1.414 1.414L10 18.414l9.707-9.707l-1.414-1.414z" /></svg>
                    <span>Single user</span>
                </li>
                <li className="inline-flex gap-1 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15.586l-3.293-3.293l-1.414 1.414L10 18.414l9.707-9.707l-1.414-1.414z" /></svg>
                    <span>5GB Storage</span>
                </li>
                <li className="inline-flex gap-1 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15.586l-3.293-3.293l-1.414 1.414L10 18.414l9.707-9.707l-1.414-1.414z" /></svg>
                    <span>Unlimited Public Projects</span>
                </li>
                <li className="inline-flex gap-1 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15.586l-3.293-3.293l-1.414 1.414L10 18.414l9.707-9.707l-1.414-1.414z" /></svg>
                    <span>Community Access</span>
                </li>
                <li className="flex gap-1 text-sm text-neutral-500 line-through">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m16.192 6.344l-4.243 4.242l-4.242-4.242l-1.414 1.414L10.535 12l-4.242 4.242l1.414 1.414l4.242-4.242l4.243 4.242l1.414-1.414L13.364 12l4.242-4.242z" /></svg>
                    <span>Unlimited Private Projects</span>
                </li>
                <li className="flex gap-1 text-sm text-neutral-500 line-through">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m16.192 6.344l-4.243 4.242l-4.242-4.242l-1.414 1.414L10.535 12l-4.242 4.242l1.414 1.414l4.242-4.242l4.243 4.242l1.414-1.414L13.364 12l4.242-4.242z" /></svg>
                    <span>Dedicated Phone Support</span>
                </li>
                <li className="flex gap-1 text-sm text-neutral-500 line-through">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m16.192 6.344l-4.243 4.242l-4.242-4.242l-1.414 1.414L10.535 12l-4.242 4.242l1.414 1.414l4.242-4.242l4.243 4.242l1.414-1.414L13.364 12l4.242-4.242z" /></svg>
                    <span>Free Subdomain</span>
                </li>
                <li className="flex gap-1 text-sm text-neutral-500 line-through">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m16.192 6.344l-4.243 4.242l-4.242-4.242l-1.414 1.414L10.535 12l-4.242 4.242l1.414 1.414l4.242-4.242l4.243 4.242l1.414-1.414L13.364 12l4.242-4.242z" /></svg>
                    <span>Monthly Status Reports</span>
                </li>
            </ul>
        </div>
        <div className="w-full px-4">
            <button className='flex justify-center w-full h-fit text-sm items-center text-center bg-blue-700 text-white gap-2 px-4 py-3 rounded-full cursor-pointer font-medium select-none hover:bg-blue-800'>Subscribe</button>
        </div>
    </article>
    <article className="flex flex-col gap-6 items-center justify-start w-64 h-auto py-6 bg-white rounded-lg shadow-md dark:bg-neutral-800">
        <div className="flex flex-col w-full items-center gap-2 pb-6 border-b-[1px] border-neutral-300 dark:border-neutral-700">
            <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">PLUS</span>
            <div className="inline-flex items-end">
                <h3 className="text-5xl font-bold">$5</h3>
                <span className="text-xs font-medium">/month</span>
            </div>
        </div>
        <div className="w-full px-6">
            <ul className="flex flex-col gap-2">
                <li className="inline-flex gap-1 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15.586l-3.293-3.293l-1.414 1.414L10 18.414l9.707-9.707l-1.414-1.414z" /></svg>
                    <span>Single user</span>
                </li>
                <li className="inline-flex gap-1 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15.586l-3.293-3.293l-1.414 1.414L10 18.414l9.707-9.707l-1.414-1.414z" /></svg>
                    <span>5GB Storage</span>
                </li>
                <li className="inline-flex gap-1 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15.586l-3.293-3.293l-1.414 1.414L10 18.414l9.707-9.707l-1.414-1.414z" /></svg>
                    <span>Unlimited Public Projects</span>
                </li>
                <li className="inline-flex gap-1 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15.586l-3.293-3.293l-1.414 1.414L10 18.414l9.707-9.707l-1.414-1.414z" /></svg>
                    <span>Community Access</span>
                </li>
                <li className="flex gap-1 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15.586l-3.293-3.293l-1.414 1.414L10 18.414l9.707-9.707l-1.414-1.414z" /></svg>
                    <span>Unlimited Private Projects</span>
                </li>
                <li className="flex gap-1 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15.586l-3.293-3.293l-1.414 1.414L10 18.414l9.707-9.707l-1.414-1.414z" /></svg>
                    <span>Dedicated Phone Support</span>
                </li>
                <li className="flex gap-1 text-sm text-neutral-500 line-through">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m16.192 6.344l-4.243 4.242l-4.242-4.242l-1.414 1.414L10.535 12l-4.242 4.242l1.414 1.414l4.242-4.242l4.243 4.242l1.414-1.414L13.364 12l4.242-4.242z" /></svg>
                    <span>Free Subdomain</span>
                </li>
                <li className="flex gap-1 text-sm text-neutral-500 line-through">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m16.192 6.344l-4.243 4.242l-4.242-4.242l-1.414 1.414L10.535 12l-4.242 4.242l1.414 1.414l4.242-4.242l4.243 4.242l1.414-1.414L13.364 12l4.242-4.242z" /></svg>
                    <span>Monthly Status Reports</span>
                </li>
            </ul>
        </div>
        <div className="w-full px-4">
            <button className='flex justify-center w-full h-fit text-sm items-center text-center bg-blue-700 text-white gap-2 px-4 py-3 rounded-full cursor-pointer font-medium select-none hover:bg-blue-800'>Subscribe</button>
        </div>
    </article>
    <article className="flex flex-col gap-6 items-center justify-start w-64 h-auto py-6 bg-white rounded-lg shadow-md dark:bg-neutral-800">
        <div className="flex flex-col w-full items-center gap-2 pb-6 border-b-[1px] border-neutral-300 dark:border-neutral-700">
            <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">PRO</span>
            <div className="inline-flex items-end">
                <h3 className="text-5xl font-bold">$15</h3>
                <span className="text-xs font-medium">/month</span>
            </div>
        </div>
        <div className="w-full px-6">
            <ul className="flex flex-col gap-2">
                <li className="inline-flex gap-1 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15.586l-3.293-3.293l-1.414 1.414L10 18.414l9.707-9.707l-1.414-1.414z" /></svg>
                    <span>Single user</span>
                </li>
                <li className="inline-flex gap-1 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15.586l-3.293-3.293l-1.414 1.414L10 18.414l9.707-9.707l-1.414-1.414z" /></svg>
                    <span>5GB Storage</span>
                </li>
                <li className="inline-flex gap-1 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15.586l-3.293-3.293l-1.414 1.414L10 18.414l9.707-9.707l-1.414-1.414z" /></svg>
                    <span>Unlimited Public Projects</span>
                </li>
                <li className="inline-flex gap-1 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15.586l-3.293-3.293l-1.414 1.414L10 18.414l9.707-9.707l-1.414-1.414z" /></svg>
                    <span>Community Access</span>
                </li>
                <li className="flex gap-1 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15.586l-3.293-3.293l-1.414 1.414L10 18.414l9.707-9.707l-1.414-1.414z" /></svg>
                    <span>Unlimited Private Projects</span>
                </li>
                <li className="flex gap-1 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15.586l-3.293-3.293l-1.414 1.414L10 18.414l9.707-9.707l-1.414-1.414z" /></svg>
                    <span>Dedicated Phone Support</span>
                </li>
                <li className="flex gap-1 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15.586l-3.293-3.293l-1.414 1.414L10 18.414l9.707-9.707l-1.414-1.414z" /></svg>
                    <span>Free Subdomain</span>
                </li>
                <li className="flex gap-1 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15.586l-3.293-3.293l-1.414 1.414L10 18.414l9.707-9.707l-1.414-1.414z" /></svg>
                    <span>Monthly Status Reports</span>
                </li>
            </ul>
        </div>
        <div className="w-full px-4">
            <button className='flex justify-center w-full h-fit text-sm items-center text-center bg-blue-700 text-white gap-2 px-4 py-3 rounded-full cursor-pointer font-medium select-none hover:bg-blue-800'>Subscribe</button>
        </div>
    </article>
</div>`

    return (
        <article>
            <div className='pb-4'>
                <h3 className='text-lg font-medium'>Default</h3>
                <p className='dark:text-neutral-300'>Use these cards to give the user a subscription option.</p>
            </div>
            <div className='flex gap-2 pb-2 select-none lg:flex-col'>
                <button className='bg-neutral-200 px-5 py-3 rounded-lg dark:bg-neutral-800 lg:w-full' onClick={() => setShowCode(!showCode)}>{showCode ? <div className='flex items-center gap-1'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 19c.946 0 1.81-.103 2.598-.281l-1.757-1.757c-.273.021-.55.038-.841.038c-5.351 0-7.424-3.846-7.926-5a8.642 8.642 0 0 1 1.508-2.297L4.184 8.305c-1.538 1.667-2.121 3.346-2.132 3.379a.994.994 0 0 0 0 .633C2.073 12.383 4.367 19 12 19zm0-14c-1.837 0-3.346.396-4.604.981L3.707 2.293L2.293 3.707l18 18l1.414-1.414l-3.319-3.319c2.614-1.951 3.547-4.615 3.561-4.657a.994.994 0 0 0 0-.633C21.927 11.617 19.633 5 12 5zm4.972 10.558l-2.28-2.28c.19-.39.308-.819.308-1.278c0-1.641-1.359-3-3-3c-.459 0-.888.118-1.277.309L8.915 7.501A9.26 9.26 0 0 1 12 7c5.351 0 7.424 3.846 7.926 5c-.302.692-1.166 2.342-2.954 3.558z" /></svg><span>Hide code</span></div> : <div className='flex items-center gap-1'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3c1.641 0 3-1.358 3-3c0-1.641-1.359-3-3-3z" /><path fill="currentColor" d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316l-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5c-.504 1.158-2.578 5-7.926 5z" /></svg><span>Show code</span></div>}</button>
                <EditInGithub url={'https://github.com/juanigarciadev/BlossomUI/blob/main/src/components/UI/KBD/Default/SpecialKey.jsx'} />
            </div>
            <div className='flex flex-col'>
                {showCode ?
                    <div>
                        <section className='flex flex-wrap rounded-lg gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                            <DefaultPricing />
                        </section>
                        <CodeBlock name={'Default'} code={pricing} language={'javascript'} />
                    </div>
                    :
                    <section className='flex flex-wrap rounded-lg gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                        <DefaultPricing />
                    </section>}
            </div>
        </article>
    )
}

export default Pricing