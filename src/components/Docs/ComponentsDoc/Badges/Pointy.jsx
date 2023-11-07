import React, { useState } from 'react'
import { CodeBlock } from '../../../CodeBlock/CodeBlock'
import { BiCode } from 'react-icons/bi'
import EditInGithub from '../../../EditInGithub/EditInGithub'
import { DarkPointy, DefaultPointy, GreenPointy, PinkPointy, PurplePointy, RedPointy, YellowPointy } from '../../../UI/Badges/Normal/Pointy'

const PointyBadges = () => {

    const [showCode, setShowCode] = useState(false)

    const pointyBadges = `<span className='flex items-center font-medium h-fit w-fit text-xs px-2.5 py-1 bg-blue-100 text-blue-900 cursor-default dark:bg-blue-900 dark:text-blue-300'>This is the filled version of the badge</span>\n<span className='flex items-center font-medium h-fit w-fit text-xs px-2.5 py-1 bg-neutral-100 text-neutral-900 cursor-default dark:bg-neutral-700 dark:text-neutral-300'>This is the filled version of the badge</span>\n<span className='flex items-center font-medium h-fit w-fit text-xs px-2.5 py-1 bg-red-100 text-red-900 cursor-default dark:bg-red-900 dark:text-red-300'>This is the filled version of the badge</span>\n<span className='flex items-center font-medium h-fit w-fit text-xs px-2.5 py-1 bg-green-100 text-green-900 cursor-default dark:bg-green-900 dark:text-green-300'>This is the filled version of the badge</span>\n<span className='flex items-center font-medium h-fit w-fit text-xs px-2.5 py-1 bg-yellow-100 text-yellow-900 cursor-default dark:bg-yellow-900 dark:text-yellow-300'>This is the filled version of the badge</span>\n<span className='flex items-center font-medium h-fit w-fit text-xs px-2.5 py-1 bg-purple-100 text-purple-900 cursor-default dark:bg-purple-900 dark:text-purple-300'>This is the filled version of the badge</span>\n<span className='flex items-center font-medium h-fit w-fit text-xs px-2.5 py-1 bg-pink-100 text-pink-900 cursor-default dark:bg-pink-900 dark:text-pink-300'>This is the filled version of the badge</span>`

    return (
        <article>
            <div className='pb-4'>
                <h3 className='text-lg font-medium'>Pointy</h3>
                <p className='dark:text-neutral-300'>Use pointed badges in case you don't like the rounded one.</p>
            </div>
            <div className='flex pb-2 gap-2 select-none lg:flex-col'>
                <button className='bg-neutral-200 px-5 py-3 rounded-lg dark:bg-neutral-800 lg:w-full' onClick={() => setShowCode(!showCode)}>{showCode ? <div className='flex items-center gap-1'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 19c.946 0 1.81-.103 2.598-.281l-1.757-1.757c-.273.021-.55.038-.841.038c-5.351 0-7.424-3.846-7.926-5a8.642 8.642 0 0 1 1.508-2.297L4.184 8.305c-1.538 1.667-2.121 3.346-2.132 3.379a.994.994 0 0 0 0 .633C2.073 12.383 4.367 19 12 19zm0-14c-1.837 0-3.346.396-4.604.981L3.707 2.293L2.293 3.707l18 18l1.414-1.414l-3.319-3.319c2.614-1.951 3.547-4.615 3.561-4.657a.994.994 0 0 0 0-.633C21.927 11.617 19.633 5 12 5zm4.972 10.558l-2.28-2.28c.19-.39.308-.819.308-1.278c0-1.641-1.359-3-3-3c-.459 0-.888.118-1.277.309L8.915 7.501A9.26 9.26 0 0 1 12 7c5.351 0 7.424 3.846 7.926 5c-.302.692-1.166 2.342-2.954 3.558z" /></svg><span>Hide code</span></div> : <div className='flex items-center gap-1'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3c1.641 0 3-1.358 3-3c0-1.641-1.359-3-3-3z" /><path fill="currentColor" d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316l-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5c-.504 1.158-2.578 5-7.926 5z" /></svg><span>Show code</span></div>}</button>
                <EditInGithub url={'https://github.com/juanigarciadev/BlossomUI/blob/main/src/components/UI/Badges/Normal/Default.jsx'} />
            </div>
            <div className='flex flex-col'>
                {showCode ?
                    <div>
                        <section className='flex flex-wrap rounded-lg gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                            <DefaultPointy />
                            <DarkPointy />
                            <RedPointy />
                            <GreenPointy />
                            <YellowPointy />
                            <PurplePointy />
                            <PinkPointy />
                        </section>
                        <CodeBlock name={"Pointy"} code={pointyBadges} language={"javascript"} />
                    </div>
                    :
                    <section className='flex flex-wrap rounded-lg gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                        <DefaultPointy />
                        <DarkPointy />
                        <RedPointy />
                        <GreenPointy />
                        <YellowPointy />
                        <PurplePointy />
                        <PinkPointy />
                    </section>}

            </div>
        </article>
    )
}

export default PointyBadges