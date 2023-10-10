import React from 'react'
import Aside from '../../Aside'
import Normal from './Normal'
import { CodeBlock } from '../../../../assets/CodeBlock/CodeBlock'

const Buttons = () => {
    const normalButtons = "<button className='flex justify-center w-fit h-fit text-sm items-center text-center bg-black text-white gap-2 px-4 py-3 rounded-lg cursor-pointer font-medium select-none hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200'>Primary button</button>\n<button className='flex justify-center items-center text-center border border-neutral-300 bg-transparent w-fit h-fit text-sm gap-2 px-4 py-3 rounded-lg cursor-pointer font-medium select-none hover:bg-neutral-200 hover:bg-opacity-40 hover:backdrop-blur-md dark:text-white dark:hover:bg-neutral-800'>Secondary button</button>\n<button className='flex justify-center w-fit h-fit text-sm items-center text-center bg-blue-700 text-white gap-2 px-4 py-3 rounded-lg cursor-pointer font-medium select-none hover:bg-blue-800'>Default button</button>\n<button className='flex justify-center w-fit h-fit text-sm items-center text-center bg-red-700 text-white gap-2 px-4 py-3 rounded-lg cursor-pointer font-medium select-none hover:bg-red-800'>Red button</button>\n<button className='flex justify-center w-fit h-fit text-sm items-center text-center bg-green-700 text-white gap-2 px-4 py-3 rounded-lg cursor-pointer font-medium select-none hover:bg-green-800'>Green button</button>\n<button className='flex justify-center w-fit h-fit text-sm items-center text-center bg-yellow-400 text-white gap-2 px-4 py-3 rounded-lg cursor-pointer font-medium select-none hover:bg-yellow-500'>Yellow button</button>\n<button className='flex justify-center w-fit h-fit text-sm items-center text-center bg-purple-600 text-white gap-2 px-4 py-3 rounded-lg cursor-pointer font-medium select-none hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-800'>Purple button</button>\n<button className='flex justify-center w-fit h-fit text-sm items-center text-center bg-pink-700 text-white gap-2 px-4 py-3 rounded-lg cursor-pointer font-medium select-none hover:bg-pink-800'>Pink button</button>"
    return (
        <div className='flex pt-[70px] w-full h-screen relative'>
            <Aside />
            <section className='absolute left-[22%] w-[78%] pl-8 pt-4 xl:w-[82%] xl:left-[18%] lg:w-[100%] lg:left-0 lg:px-0 dark:text-white'>
                <h1 className='text-4xl font-bold pb-4 text-neutral-800 dark:text-white'>Buttons</h1>
                <p className='text-lg font-medium pb-4'>Normal buttons</p>
                <div className='grid grid-cols-2'>
                    <section className='flex flex-col'>
                        <Normal />
                    </section>
                    <CodeBlock name={"Normal buttons"} code={normalButtons} language={"javascript"} />
                </div>
            </section>
        </div>
    )
}

export default Buttons