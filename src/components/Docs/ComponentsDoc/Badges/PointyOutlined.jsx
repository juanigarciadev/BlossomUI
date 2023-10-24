import React, { useState } from 'react'
import { CodeBlock } from '../../../CodeBlock/CodeBlock'
import { BiCode } from 'react-icons/bi'
import EditInGithub from '../../../EditInGithub/EditInGithub'
import { DarkPointyOutlined, DefaultPointyOutlined, GreenPointyOutlined, PinkPointyOutlined, PurplePointyOutlined, RedPointyOutlined, YellowPointyOutlined } from '../../../UI/Badges/Normal/PointyOutlined'

const PointyOutlinedBadges = () => {

    const [showCode, setShowCode] = useState(false)

    const pointyBadges = "<span className='flex items-center font-medium h-fit w-fit text-sm px-4 py-2 bg-blue-100 text-blue-900 border border-blue-900 cursor-default dark:bg-blue-900 dark:text-blue-300 dark:border-blue-400'>This is the filled version of the badge</span>\n<span className='flex items-center font-medium h-fit w-fit text-sm px-4 py-2 bg-neutral-100 text-neutral-900 border border-neutral-900 cursor-default dark:bg-neutral-700 dark:text-neutral-300 dark:border-neutral-500'>This is the filled version of the badge</span>\n<span className='flex items-center font-medium h-fit w-fit text-sm px-4 py-2 bg-red-100 text-red-900 border border-red-900 cursor-default dark:bg-red-900 dark:text-red-300 dark:border-red-400'>This is the filled version of the badge</span>\n<span className='flex items-center font-medium h-fit w-fit text-sm px-4 py-2 bg-green-100 text-green-900 border border-green-900 cursor-default dark:bg-green-900 dark:text-green-300 dark:border-green-400'>This is the filled version of the badge</span>\n<span className='flex items-center font-medium h-fit w-fit text-sm px-4 py-2 bg-yellow-100 text-yellow-900 border border-yellow-900 cursor-default dark:bg-yellow-900 dark:text-yellow-300 dark:border-yellow-300'>This is the filled version of the badge</span>\n<span className='flex items-center font-medium h-fit w-fit text-sm px-4 py-2 bg-purple-100 text-purple-900 border border-purple-900 cursor-default dark:bg-purple-900 dark:text-purple-300 dark:border-purple-400'>This is the filled version of the badge</span>\n<span className='flex items-center font-medium h-fit w-fit text-sm px-4 py-2 bg-pink-100 text-pink-900 border border-pink-900 cursor-default dark:bg-pink-900 dark:text-pink-300 dark:border-pink-400'>This is the filled version of the badge</span>"

    return (
        <article>
            <div className='pb-4'>
                <h3 className='text-lg font-medium'>Pointy outlined badges</h3>
                <p className='dark:text-neutral-300'>Use badges to highlight some important characteristic of an element or set of elements.</p>
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
                            <DefaultPointyOutlined />
                            <DarkPointyOutlined />
                            <RedPointyOutlined />
                            <GreenPointyOutlined />
                            <YellowPointyOutlined />
                            <PurplePointyOutlined />
                            <PinkPointyOutlined />
                        </section>
                        <CodeBlock name={"Pointy outlined"} code={pointyBadges} language={"javascript"} />
                    </div>
                    :
                    <section className='flex flex-wrap rounded-lg gap-1 p-4 bg-white border border-neutral-200 w-full dark:bg-[#222222] dark:border-neutral-700'>
                        <DefaultPointyOutlined />
                        <DarkPointyOutlined />
                        <RedPointyOutlined />
                        <GreenPointyOutlined />
                        <YellowPointyOutlined />
                        <PurplePointyOutlined />
                        <PinkPointyOutlined />
                    </section>}

            </div>
        </article>
    )
}

export default PointyOutlinedBadges