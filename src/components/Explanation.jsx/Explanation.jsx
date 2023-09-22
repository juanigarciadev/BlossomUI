import React from 'react'
import { BiChevronDown } from 'react-icons/bi'

const Explanation = () => {
    return (
        <div className='grid grid-cols-2 w-full py-64 lg:flex lg:flex-col-reverse lg:gap-12'>
            <section>
                <pre className='w-full bg-neutral-200 bg-opacity-40 backdrop-blur-md border rounded-md border-neutral-300 px-2 py-2'>
                    <code>
                        <article className='flex flex-col lg:overflow-x-scroll h-full overflow-y-hidden'>
                            <div>
                                <span>{"<"}</span>
                                <span className='tag'>a&nbsp;</span>
                                <span>className="</span>
                                <span className='attribute'>flex justify-center gap-2 bg-black text-white max-w-[200px]</span>
                            </div>
                            <div>
                                <span className='attribute'>max-h-[50px] px-4 py-3 rounded-lg cursor-pointer font-medium select-none</span>
                            </div>
                            <div>
                            <span className='attribute'>hover:bg-neutral-800</span>
                                <span>"</span>
                                <span>{">"}</span>
                            </div>
                            <div>
                                <span className='pl-4'>{"Example button"}</span>
                            </div>
                            <div>
                                <span>{"</"}</span>
                                <span className='tag'>a</span>
                                <span>{">"}</span>
                            </div>
                        </article>
                    </code>
                </pre>
                <section className="flex justify-center w-full">
                    <BiChevronDown className='text-3xl mt-4' />
                </section>
                <section className='flex justify-center'>
                    <a className="flex justify-center gap-2 bg-black text-white max-w-[200px] max-h-[50px] px-4 py-3 rounded-lg cursor-pointer font-medium select-none hover:bg-neutral-800 mt-4">Example button</a>
                </section>
            </section>
            <section className='text-right lg:text-left'>
                <h3 className='text-6xl font-bold text-neutral-800 tracking-tight'>Extremely easy to use. Just copy and paste.</h3>
            </section>
        </div>
    )
}

export default Explanation