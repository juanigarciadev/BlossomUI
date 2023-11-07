import React, { useState } from 'react'
import { CodeBlock } from '../../../CodeBlock/CodeBlock'
import { BiLogoTailwindCss } from 'react-icons/bi'
import { AppleIconRounded, FacebookIconRounded, GithubIconRounded, GoogleIconRounded, TwitterIconRounded } from '../../../UI/Buttons/IconsOnly/Rounded'
import { BiCode } from 'react-icons/bi'
import EditInGithub from '../../../EditInGithub/EditInGithub'

const SocialIconOnlyRounded = () => {

    const [showCode, setShowCode] = useState(false)

    const socialButtonsIconsOnlyRounded = `<button type='button' className='w-fit h-fit text-white bg-[#3b5998] hover:bg-[#3b5998]/90 font-medium rounded-full text-sm px-3 py-3 text-center inline-flex items-center'><svg className='w-5 h-5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 8 19'><path fillRule='evenodd' d='M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z' clipRule='evenodd' /></svg></button>\n<button type='button' className='w-fit h-fit text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 font-medium rounded-full text-sm px-3 py-3 text-center inline-flex items-center'><svg xmlns='http://www.w3.org/2000/svg' height='20px' fill='white' viewBox='0 0 512 512'><path d='M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z' /></svg></button>\n<button type='button' className='w-fit h-fit text-white bg-[#24292F] hover:bg-[#24292F]/90 font-medium rounded-full text-sm px-3 py-3 text-center inline-flex items-center dark:hover:bg-[#050708]/30'><svg className='w-5 h-5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 20 20'><path fillRule='evenodd' d='M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z' clipRule='evenodd' /></svg></button>\n<button type='button' className='w-fit h-fit text-white bg-[#4285F4] hover:bg-[#4285F4]/90 font-medium rounded-full text-sm px-3 py-3 text-center inline-flex items-center'><svg className='w-5 h-5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 18 19'><path fillRule='evenodd' d='M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z' clipRule='evenodd' /></svg></button>\n<button type='button' className='w-fit h-fit text-white bg-[#050708] hover:bg-[#050708]/90 font-medium rounded-full text-sm px-3 py-3 text-center inline-flex items-center dark:hover:bg-[#050708]/30'><svg className='w-5 h-5' aria-hidden='true' focusable='false' data-prefix='fab' data-icon='apple' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'><path fill='currentColor' d='M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z'></path></svg></button>`

    return (
        <article>
            <div className='pb-4'>
                <article id='badge-dismiss-default' className='flex gap-2 mb-2 items-center font-medium h-fit w-fit text-sm px-4 py-2 bg-blue-100 text-blue-900 rounded-full cursor-default dark:bg-blue-900 dark:text-blue-300'><BiLogoTailwindCss className='text-xl' />Tailwind CSS v3.0 required.</article>
                <h3 className='text-lg font-medium'>Rounded social icons only</h3>
                <p className='dark:text-neutral-300'>You don't like buttons with text? Here is a icons only version. This component use the bg-[#hex] class from Tailwind CSS v.3.0.</p>
            </div>
            <div className='flex pb-2 gap-2 select-none lg:flex-col'>
                <button className='bg-neutral-200 px-5 py-3 rounded-lg dark:bg-neutral-800 lg:w-full lg:flex lg:justify-center' onClick={() => setShowCode(!showCode)}>{showCode ? <div className='flex items-center gap-1'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 19c.946 0 1.81-.103 2.598-.281l-1.757-1.757c-.273.021-.55.038-.841.038c-5.351 0-7.424-3.846-7.926-5a8.642 8.642 0 0 1 1.508-2.297L4.184 8.305c-1.538 1.667-2.121 3.346-2.132 3.379a.994.994 0 0 0 0 .633C2.073 12.383 4.367 19 12 19zm0-14c-1.837 0-3.346.396-4.604.981L3.707 2.293L2.293 3.707l18 18l1.414-1.414l-3.319-3.319c2.614-1.951 3.547-4.615 3.561-4.657a.994.994 0 0 0 0-.633C21.927 11.617 19.633 5 12 5zm4.972 10.558l-2.28-2.28c.19-.39.308-.819.308-1.278c0-1.641-1.359-3-3-3c-.459 0-.888.118-1.277.309L8.915 7.501A9.26 9.26 0 0 1 12 7c5.351 0 7.424 3.846 7.926 5c-.302.692-1.166 2.342-2.954 3.558z" /></svg><span>Hide code</span></div> : <div className='flex items-center gap-1'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3c1.641 0 3-1.358 3-3c0-1.641-1.359-3-3-3z" /><path fill="currentColor" d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316l-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5c-.504 1.158-2.578 5-7.926 5z" /></svg><span>Show code</span></div>}</button>
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