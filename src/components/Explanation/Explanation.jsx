import React from 'react'
import { ChevronDown } from 'lucide-react'
import CodeBlock from '@codeBlock'

const Explanation = () => {
    const buttonCode = `<button className='flex justify-center w-fit h-fit text-sm items-center text-center bg-black text-white gap-2 px-4 py-3 rounded-lg cursor-pointer font-medium select-none hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200'>Example button</button>`
    return (
        <div div className='grid grid-cols-2 w-full pt-64 pb-32 lg:flex lg:flex-col-reverse lg:gap-12 lg:pt-32 lg:pb-0' >
            <section>
                <CodeBlock name={"Button"} code={buttonCode} language={"javascript"} />
                <section className="flex justify-center w-full">
                    <ChevronDown size={30} className='my-4 dark:text-white' />
                </section>
                <section className='flex justify-center'>
                    <button className='flex justify-center w-fit h-fit text-sm items-center text-center bg-black text-white gap-2 px-4 py-3 rounded-lg cursor-pointer font-medium select-none hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200'>Example button</button>
                </section>
            </section >
            <section className='text-right lg:text-left'>
                <h3 className='text-6xl font-bold text-neutral-800 tracking-tight dark:text-white'>Extremely <span className='text-corporative'>easy</span> to use. Just <span className='text-corporative'>copy</span> and <span className='text-corporative'>paste</span>.</h3>
            </section>
        </div >
    )
}

export default Explanation