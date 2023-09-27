import React, { useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'
import { BsClipboard2, BsCheck2Circle } from 'react-icons/bs'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { lightfair } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Explanation = ({ copy, setCopy, codeString }) => {

    return (
        <div div className='grid grid-cols-2 w-full pt-64 pb-32 lg:flex lg:flex-col-reverse lg:gap-12 lg:pt-32 lg:pb-0' >
            <section>
                <div className='flex justify-between items-center pl-4 w-full h-8 bg-corporative rounded-t-md'>
                    <div className='flex'>
                        <svg viewBox="0 0 120 120">
                            <circle cx="20" cy="60" r="20" className='transition-colors duration-200 dark:fill-white' />
                        </svg>
                        <svg viewBox="0 0 120 120">
                            <circle cx="20" cy="60" r="20" className='transition-colors duration-200 dark:fill-white' />
                        </svg>
                        <svg viewBox="0 0 120 120">
                            <circle cx="20" cy="60" r="20" className='transition-colors duration-200 dark:fill-white' />
                        </svg>
                    </div>
                    <div className='text-sm pr-4 cursor-pointer'>
                        {copy ? (
                            <div className='flex items-center gap-1'>
                                <BsCheck2Circle />
                                Copied!
                            </div>
                        ) :
                            (
                                <div className='flex items-center gap-1' onClick={() => {
                                    navigator.clipboard.writeText(codeString);
                                    setCopy(true)
                                    setTimeout(() => {
                                        setCopy(false)
                                    }, 3000)
                                }}>
                                    <BsClipboard2 />
                                    Copy code
                                </div>
                            )}
                    </div>
                </div>

                <SyntaxHighlighter language="javascript" style={lightfair}>
                    {codeString}
                </SyntaxHighlighter>

                <section className="flex justify-center w-full">
                    <BiChevronDown className='text-3xl my-4 dark:text-white' />
                </section>
                <section className='flex justify-center'>
                    <a className='flex justify-center w-fit h-fit text-sm items-center bg-black text-white gap-2 px-4 py-3 rounded-lg cursor-pointer font-medium select-none hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200'>Example button</a>
                </section>
            </section >
            <section className='text-right lg:text-left'>
                <h3 className='text-6xl font-bold text-neutral-800 tracking-tight dark:text-white'>Extremely <span className='text-corporative'>easy</span> to use. Just <span className='text-corporative'>copy</span> and <span className='text-corporative'>paste</span>.</h3>
            </section>
        </div >
    )
}

export default Explanation