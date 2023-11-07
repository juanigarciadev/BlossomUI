import React, { useState } from 'react'
import { CodeBlock } from '../../../CodeBlock/CodeBlock'
import { DefaultButtonRounded, GreenButtonRounded, PinkButtonRounded, PrimaryButtonRounded, PurpleButtonRounded, RedButtonRounded, SecondaryButtonRounded, YellowButtonRounded } from '../../../UI/Buttons/Rounded/Default'
import { BiCube, BiCode } from 'react-icons/bi'
import EditInGithub from '../../../EditInGithub/EditInGithub'

const Rounded = () => {

    const [showCode, setShowCode] = useState(false)

    const roundedButtons = "<button className='flex justify-center w-fit h-fit text-sm items-center text-center bg-black text-white gap-2 px-4 py-3 rounded-full cursor-pointer font-medium select-none hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200'>Primary</button>\n<button className='flex justify-center items-center text-center border border-neutral-300 bg-transparent w-fit h-fit text-sm gap-2 px-4 py-[11px] rounded-full cursor-pointer font-medium select-none hover:bg-neutral-200 dark:text-white dark:hover:bg-neutral-800'>Secondary</button>\n<button className='flex justify-center w-fit h-fit text-sm items-center text-center bg-blue-700 text-white gap-2 px-4 py-3 rounded-full cursor-pointer font-medium select-none hover:bg-blue-800'>Default</button>\n<button className='flex justify-center w-fit h-fit text-sm items-center text-center bg-red-700 text-white gap-2 px-4 py-3 rounded-full cursor-pointer font-medium select-none hover:bg-red-800'>Red</button>\n<button className='flex justify-center w-fit h-fit text-sm items-center text-center bg-green-700 text-white gap-2 px-4 py-3 rounded-full cursor-pointer font-medium select-none hover:bg-green-800'>Green</button>\n<button className='flex justify-center w-fit h-fit text-sm items-center text-center bg-yellow-400 text-white gap-2 px-4 py-3 rounded-full cursor-pointer font-medium select-none hover:bg-yellow-500'>Yellow</button>"

    return (
        <article>
            <div className='pb-4'>
                <h3 className='text-lg font-medium'>Rounded</h3>
                <p className='dark:text-neutral-300'>You can also use this fully rounded edges variant.</p>
            </div>
            <div className='flex pb-2 gap-2 select-none lg:flex-col'>
                <button className='bg-neutral-200 px-5 py-3 rounded-lg dark:bg-neutral-800 lg:w-full' onClick={() => setShowCode(!showCode)}>{showCode ? <div className='flex items-center gap-1'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 19c.946 0 1.81-.103 2.598-.281l-1.757-1.757c-.273.021-.55.038-.841.038c-5.351 0-7.424-3.846-7.926-5a8.642 8.642 0 0 1 1.508-2.297L4.184 8.305c-1.538 1.667-2.121 3.346-2.132 3.379a.994.994 0 0 0 0 .633C2.073 12.383 4.367 19 12 19zm0-14c-1.837 0-3.346.396-4.604.981L3.707 2.293L2.293 3.707l18 18l1.414-1.414l-3.319-3.319c2.614-1.951 3.547-4.615 3.561-4.657a.994.994 0 0 0 0-.633C21.927 11.617 19.633 5 12 5zm4.972 10.558l-2.28-2.28c.19-.39.308-.819.308-1.278c0-1.641-1.359-3-3-3c-.459 0-.888.118-1.277.309L8.915 7.501A9.26 9.26 0 0 1 12 7c5.351 0 7.424 3.846 7.926 5c-.302.692-1.166 2.342-2.954 3.558z" /></svg><span>Hide code</span></div> : <div className='flex items-center gap-1'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3c1.641 0 3-1.358 3-3c0-1.641-1.359-3-3-3z" /><path fill="currentColor" d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316l-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5c-.504 1.158-2.578 5-7.926 5z" /></svg><span>Show code</span></div>}</button>
                <EditInGithub url={'https://github.com/juanigarciadev/BlossomUI/blob/main/src/components/UI/Buttons/Rounded/Default.jsx'} />
            </div>
            <div className='flex flex-col'>
                {showCode ?
                    <div>
                        <section className='flex flex-wrap rounded-lg gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                            <PrimaryButtonRounded />
                            <SecondaryButtonRounded />
                            <DefaultButtonRounded />
                            <RedButtonRounded />
                            <GreenButtonRounded />
                            <YellowButtonRounded />
                            <PurpleButtonRounded />
                            <PinkButtonRounded />
                        </section>
                        <CodeBlock name={"Rounded"} code={roundedButtons} language={"javascript"} />
                    </div>
                    :
                    <section className='flex flex-wrap rounded-lg gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                        <PrimaryButtonRounded />
                        <SecondaryButtonRounded />
                        <DefaultButtonRounded />
                        <RedButtonRounded />
                        <GreenButtonRounded />
                        <YellowButtonRounded />
                        <PurpleButtonRounded />
                        <PinkButtonRounded />
                    </section>}
            </div>
        </article>
    )
}

export default Rounded