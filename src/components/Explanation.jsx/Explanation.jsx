import React from 'react'
import { BiChevronDown } from 'react-icons/bi'

const Explanation = () => {
    return (
        <div className='grid grid-cols-2 w-full pt-64 pb-32 lg:flex lg:flex-col-reverse lg:gap-12 lg:pt-32 lg:pb-0'>
            <section>
                <div className='flex pl-4 w-full h-8 bg-corporative rounded-t-md'>
                    <svg viewBox="0 0 120 120">
                        <circle cx="20" cy="60" r="20" className='dark:fill-white' />
                    </svg>
                    <svg viewBox="0 0 120 120">
                        <circle cx="20" cy="60" r="20" className='dark:fill-white' />
                    </svg>
                    <svg viewBox="0 0 120 120">
                        <circle cx="20" cy="60" r="20" className='dark:fill-white' />
                    </svg>
                </div>
                <pre className='flex gap-2 w-full bg-neutral-200 bg-opacity-40 backdrop-blur-md border-x-[1px] border-b-[1px] rounded-b-md border-neutral-300 px-2 py-2 overflow-x-scroll dark:bg-neutral-800 dark:bg-opacity-100'>
                    <section className='w-4 h-full'>
                        <ul className='flex flex-col gap-[4px] pt-[3px]'>
                            <li className='text-neutral-400 text-sm font-mono'>1</li>
                            <li className='text-neutral-400 text-sm font-mono'>2</li>
                            <li className='text-neutral-400 text-sm font-mono'>3</li>
                            <li className='text-neutral-400 text-sm font-mono'>4</li>
                            <li className='text-neutral-400 text-sm font-mono'>5</li>
                        </ul>
                    </section>
                    <code>
                        <article className='flex flex-col lg:overflow-x-scroll h-full overflow-y-hidden'>
                            <div>
                                <span className='dark:text-white'>{"<"}</span>
                                <span className='tag'>a&nbsp;</span>
                                <span className='dark:text-white'>className="</span>
                                <span className='attribute'>flex justify-center gap-2 bg-black text-white max-w-[200px]</span>
                            </div>
                            <div>
                                <span className='attribute'>max-h-[50px] px-4 py-3 rounded-lg cursor-pointer font-medium select-none</span>
                            </div>
                            <div>
                                <span className='attribute'>hover:bg-neutral-800</span>
                                <span className='dark:text-white'>"</span>
                                <span className='dark:text-white'>{">"}</span>
                            </div>
                            <div>
                                <span className='pl-4 dark:text-white'>{"Example button"}</span>
                            </div>
                            <div>
                                <span className='dark:text-white'>{"</"}</span>
                                <span className='tag'>a</span>
                                <span className='dark:text-white'>{">"}</span>
                            </div>
                        </article>
                    </code>
                </pre>
                <section className="flex justify-center w-full">
                    <BiChevronDown className='text-3xl mt-4 dark:text-white' />
                </section>
                <section className='flex justify-center'>
                    <a className='flex justify-center max-w-[200px] max-h-[50px] items-center bg-black text-white gap-2 px-4 py-3 rounded-lg cursor-pointer font-medium select-none hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200'>Example button</a>
                </section>
            </section>
            <section className='text-right lg:text-left'>
                <h3 className='text-6xl font-bold text-neutral-800 tracking-tight dark:text-white'>Extremely <span className='text-corporative'>easy</span> to use. Just <span className='text-corporative'>copy</span> and <span className='text-corporative'>paste</span>.</h3>
            </section>
        </div>
    )
}

export default Explanation