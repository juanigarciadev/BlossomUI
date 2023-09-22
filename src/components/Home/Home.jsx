import React from 'react'
import Explanation from '../Explanation.jsx/Explanation'
import { BiRightArrowAlt, BiLinkExternal } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { FilledBadge } from '../UI/Badges/FilledBadge'
import { OutlinedBadge } from '../UI/Badges/OutlinedBadge'
import { PrimaryButton } from '../UI/Buttons/PrimaryButton'
import { SecondaryButton } from '../UI/Buttons/SecondaryButton'
import Characteristics from '../Characteristics/Characteristics'

const Home = () => {
  return (
    <>
      <main className='grid grid-cols-2 pt-64 lg:flex lg:flex-col lg:gap-12 home'>

        <section className='flex flex-col gap-6'>
          <h1 className='text-6xl font-bold text-neutral-800 tracking-tight'>Your next project, in record time with <span className='text-corporative'>Blossom UI.</span></h1>
          <h3 className='text-lg text-neutral-700'>Customizable, reusable and beautiful components made with Tailwind.</h3>
          <section className='flex gap-4'>
            <Link to="/docs" className='flex justify-center items-center bg-black text-white max-w-[200px] max-h-[50px] gap-2 px-4 py-3 rounded-lg cursor-pointer font-medium select-none hover:bg-neutral-800'>
              Get started <BiRightArrowAlt className='text-2xl' /></Link>

            <a href='https://github.com/juanigarciadev/BlossomUI' target='_blank' className='flex justify-center items-center border border-neutral-300 bg-transparent max-w-[200px] max-h-[50px] gap-2 px-4 py-3 rounded-lg cursor-pointer font-medium select-none	 hover:bg-neutral-200 hover:bg-opacity-40 hover:backdrop-blur-md'>View source code <BiLinkExternal className='text-xl' /></a>
          </section>
        </section>
        <section className='flex flex-col gap-4 items-end'>
          <div className='flex gap-2'>
            <FilledBadge />
            <OutlinedBadge />
          </div>
          <div className='flex gap-4'>
            <PrimaryButton />
            <SecondaryButton />
          </div>

        </section>
      </main>
      <Characteristics />
      <Explanation />
    </>
  )
}

export default Home