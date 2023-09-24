import React from 'react'
import { BiRightArrowAlt, BiLinkExternal } from 'react-icons/bi'
import { Link } from 'react-router-dom'

import Explanation from '../Explanation.jsx/Explanation'
import Characteristics from '../Characteristics/Characteristics'
import ComponentsSection from '../ComponentsSection/ComponentsSection'

import { PrimaryButtonRounded } from '../UI/Buttons/Rounded/PrimaryButton'
import { SecondaryButton } from '../UI/Buttons/Normal/SecondaryButton'
import { Red } from '../UI/Badges/Normal/Default'
import { PurpleOutlinedRounded } from '../UI/Badges/Rounded/Outlined'

const Home = () => {
  return (
    <>
      <main className='grid grid-cols-2 pt-64 lg:flex lg:flex-col lg:gap-12 home'>

        <section className='flex flex-col gap-6'>
          <span id='badge-dismiss-default' className='flex items-center font-medium h-fit w-fit px-4 py-2 bg-neutral-100 text-neutral-900 rounded-full cursor-default dark:bg-neutral-700 dark:text-neutral-300'>Now with dark mode! 🌙</span >
          <h1 className='text-6xl font-bold text-neutral-800 tracking-tight dark:text-white'>Your next project, in record time with <span className='text-corporative'>Blossom UI</span>.</h1>
          <h3 className='text-lg text-neutral-700 dark:text-neutral-300'>Customizable, reusable and beautiful components made with Tailwind.</h3>
          <section className='flex gap-4'>
            <Link to="/docs" className='flex justify-center items-center bg-black text-white max-w-[200px] max-h-[50px] gap-2 px-4 py-3 rounded-lg cursor-pointer font-medium select-none hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200'>
              Get started <BiRightArrowAlt className='text-2xl' /></Link>

            <Link to="/components" className='flex justify-center items-center border border-neutral-300 bg-transparent w-fit max-h-[50px] gap-2 px-4 py-3 rounded-lg cursor-pointer font-medium select-none hover:bg-neutral-200 hover:bg-opacity-40 hover:backdrop-blur-md dark:text-white'>Explore components <BiRightArrowAlt className='text-2xl' /></Link>
          </section>
        </section>
        <section className='flex flex-col gap-4 items-end lg:items-start'>
          <div className='flex flex-wrap justify-end gap-2 lg:justify-start'>
            <Red />
            <PurpleOutlinedRounded />
          </div>
          <div className='flex gap-4'>
            <PrimaryButtonRounded />
            <SecondaryButton />
          </div>

        </section>
      </main>
      <Characteristics />
      <Explanation />
      <ComponentsSection />
    </>
  )
}

export default Home