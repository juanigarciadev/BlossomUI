import React from 'react'
import Explanation from '../Explanation.jsx/Explanation'
import { BiRightArrowAlt, BiLinkExternal } from 'react-icons/bi'

const Home = () => {
  return (
    <>
      <div className='grid grid-cols-2 pt-64 lg:flex'>
        <section className='flex flex-col gap-6'>
          <h1 className='text-6xl font-bold text-neutral-800 tracking-tight'>Create faster your next project with <span className='text-pink-400'>Blossom UI.</span></h1>
          <h3 className='text-lg text-neutral-700'>Customizable, reusable and beautiful components made with Tailwind.</h3>
          <section className='flex gap-4'>
            <a className='flex justify-center items-center bg-black text-white gap-2 px-4 py-3 rounded-lg cursor-pointer font-medium select-none hover:bg-neutral-800'>Get started <BiRightArrowAlt /></a>
            
            <a href='https://github.com/juanigarciadev/BlossomUI' target='_blank' className='flex justify-center items-center border border-neutral-300 bg-transparent gap-2 px-4 py-3 rounded-lg cursor-pointer font-medium select-none	 hover:bg-neutral-200 hover:bg-opacity-40 hover:backdrop-blur-md'>View source code <BiLinkExternal /></a>
          </section>
        </section>
      </div>
      <Explanation />
    </>
  )
}

export default Home