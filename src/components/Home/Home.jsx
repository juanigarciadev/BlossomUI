import React from 'react'
import { BiRightArrowAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'

import Explanation from '../Explanation.jsx/Explanation'
import Characteristics from '../Characteristics/Characteristics'
import ComponentsSection from '../ComponentsSection/ComponentsSection'


import { Red } from '../UI/Badges/Normal/Default'
import { PurpleOutlinedRounded } from '../UI/Badges/Rounded/Outlined'
import { DefaultButton, GreenButton, PinkButton, PurpleButton, SecondaryButton, YellowButton } from '../UI/Buttons/Normal/Default'
import { YellowButtonRounded } from '../UI/Buttons/Rounded/Default'
import { Apple } from '../UI/Buttons/Normal/Social'
import { AppleIcon, FacebookIcon, GithubIcon, GoogleIcon, TwitterIcon } from '../UI/Buttons/IconsOnly/Default'
import { GithubIconRounded } from '../UI/Buttons/IconsOnly/Rounded'
import { ProgressBar } from '../UI/Progress/ProgressBar'
import ExplanationContainer from '../Explanation.jsx/ExplanationContainer'

const Home = () => {
  return (
    <>
      <main className='grid grid-cols-2 pt-64 lg:flex lg:flex-col lg:gap-12 home lg:pt-32'>

        <section className='flex flex-col gap-6'>
          <span id='badge-dismiss-default' className='flex items-center font-medium h-fit w-fit text-sm px-4 py-2 bg-neutral-100 text-neutral-900 rounded-full cursor-default dark:bg-neutral-700 dark:text-neutral-300'>Now with dark mode! 🌙</span >
          <h1 className='text-6xl font-bold text-neutral-800 tracking-tight dark:text-white'>Your next project, in record time with <span className='text-corporative'>Blossom UI</span>.</h1>
          <h3 className='text-lg text-neutral-700 dark:text-neutral-300'>Customizable, reusable and beautiful components made with Tailwind.</h3>
          <section className='flex gap-4'>
            <Link to="/docs/getting-started" className='flex justify-center items-center bg-black text-white w-fit h-fit text-sm gap-2 px-4 py-3 rounded-lg cursor-pointer font-medium select-none hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200'>
              Get started <BiRightArrowAlt className='text-2xl' /></Link>

            <Link to="/components" className='flex justify-center items-center border border-neutral-300 bg-transparent w-fit h-fit text-sm gap-2 px-4 py-3 rounded-lg cursor-pointer font-medium select-none hover:bg-neutral-200 hover:bg-opacity-40 hover:backdrop-blur-md dark:text-white'>Explore components <BiRightArrowAlt className='text-2xl' /></Link>
          </section>
        </section>
        <section className='flex flex-col gap-4 items-end lg:items-start'>
          <div className='flex flex-wrap justify-end gap-4 lg:justify-start'>
            <Red />
            <PurpleOutlinedRounded />
          </div>
          <div className='flex flex-wrap gap-4 justify-end lg:justify-start'>
            <PurpleButton />
            <YellowButtonRounded />
            <Apple />
            <GoogleIcon />
            <GithubIconRounded />
          </div>
          <div className='w-8/12'>
            <ProgressBar />
          </div>
        </section>
      </main>
      <Characteristics />
      <ExplanationContainer />
      <ComponentsSection />
    </>
  )
}

export default Home