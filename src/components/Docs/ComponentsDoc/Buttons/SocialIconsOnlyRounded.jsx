import React, { useState } from 'react'
import { CodeBlock } from '../../../../assets/CodeBlock/CodeBlock'
import { BiLogoTailwindCss } from 'react-icons/bi'
import { AppleIconRounded, FacebookIconRounded, GithubIconRounded, GoogleIconRounded, TwitterIconRounded } from '../../../UI/Buttons/IconsOnly/Rounded'
import { BiCode } from 'react-icons/bi'
import EditInGithub from '../../../EditInGithub/EditInGithub'

const SocialIconOnlyRounded = () => {

    const [showCode, setShowCode] = useState(false)

    const socialButtonsIconsOnlyRounded = "<button type='button' className='w-fit h-fit text-white bg-[#3b5998] hover:bg-[#3b5998]/90 font-medium rounded-full text-sm px-3 py-3 text-center inline-flex items-center'><svg className='w-5 h-5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 8 19'><path fillRule='evenodd' d='M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z' clipRule='evenodd' /></svg></button>\n<button type='button' className='w-fit h-fit text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 font-medium rounded-full text-sm px-3 py-3 text-center inline-flex items-center'><svg className='w-5 h-5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 20 17'><path fillRule='evenodd' d='M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z' clipRule='evenodd' /></svg></button>\n<button type='button' className='w-fit h-fit text-white bg-[#24292F] hover:bg-[#24292F]/90 font-medium rounded-full text-sm px-3 py-3 text-center inline-flex items-center dark:hover:bg-[#050708]/30'><svg className='w-5 h-5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 20 20'><path fillRule='evenodd' d='M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z' clipRule='evenodd' /></svg></button>\n<button type='button' className='w-fit h-fit text-white bg-[#4285F4] hover:bg-[#4285F4]/90 font-medium rounded-full text-sm px-3 py-3 text-center inline-flex items-center'><svg className='w-5 h-5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 18 19'><path fillRule='evenodd' d='M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z' clipRule='evenodd' /></svg></button>\n<button type='button' className='w-fit h-fit text-white bg-[#050708] hover:bg-[#050708]/90 font-medium rounded-full text-sm px-3 py-3 text-center inline-flex items-center dark:hover:bg-[#050708]/30'><svg className='w-5 h-5' aria-hidden='true' focusable='false' data-prefix='fab' data-icon='apple' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'><path fill='currentColor' d='M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z'></path></svg></button>"

    return (
        <article>
            <div className='pb-4'>
                <article id='badge-dismiss-default' className='flex gap-2 mb-2 items-center font-medium h-fit w-fit text-sm px-4 py-2 bg-blue-100 text-blue-900 rounded-full cursor-default dark:bg-blue-900 dark:text-blue-300'><BiLogoTailwindCss className='text-xl' />Tailwind CSS v3.0 required.</article>
                <h3 className='text-lg font-medium'>Social icons only rounded buttons</h3>
                <p className='dark:text-neutral-300'>You don't like buttons with text? Here is a icons only version. This component use the bg-[#hex] class from Tailwind CSS v.3.0.</p>
            </div>
            <div className='flex pb-2 gap-2 select-none lg:flex-col'>
                <div className='flex items-center bg-neutral-200 p-[5px] rounded-lg dark:bg-neutral-800 lg:w-full'>
                    <span className={showCode ? 'flex items-center gap-2 px-4 py-1 rounded-lg cursor-pointer bg-neutral-400 dark:bg-neutral-900 lg:w-full lg:justify-center' : 'flex items-center gap-2 px-4 py-1 rounded-lg cursor-pointer hover:bg-neutral-400 dark:hover:bg-neutral-900 lg:w-full lg:justify-center'} onClick={() => setShowCode(!showCode)}><BiCode />Show code</span>
                </div>
                <EditInGithub url={'https://github.com/juanigarciadev/BlossomUI/blob/main/src/components/UI/Buttons/IconsOnly/Rounded.jsx'} />
            </div>
            <div className='flex flex-col'>
                {showCode ?
                    <div className='flex flex-col'>
                        <section className='flex flex-wrap rounded-lg gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                            <FacebookIconRounded />
                            <TwitterIconRounded />
                            <GithubIconRounded />
                            <GoogleIconRounded />
                            <AppleIconRounded />
                        </section>
                        <CodeBlock name={"Social icons only rounded"} code={socialButtonsIconsOnlyRounded} language={"javascript"} />
                    </div>
                    :
                    <section className='flex flex-wrap rounded-lg gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                        <FacebookIconRounded />
                        <TwitterIconRounded />
                        <GithubIconRounded />
                        <GoogleIconRounded />
                        <AppleIconRounded />
                    </section>}
            </div>
        </article>
    )
}

export default SocialIconOnlyRounded