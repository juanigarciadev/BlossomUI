import React from 'react'
import Aside from '../../Aside'
import Default from './Default'
import Rounded from './Rounded'
import Social from './Social'
import SocialIconOnly from './SocialIconOnly'
import SocialIconOnlyRounded from './SocialIconsOnlyRounded'
import SocialRounded from './SocialRounded'

const Buttons = () => {
    return (
        <div className='flex pt-[70px] w-full h-screen relative'>
            <Aside />
            <section className='absolute left-[22%] w-[78%] pl-8 pt-4 xl:w-[82%] xl:left-[18%] lg:w-[100%] lg:left-0 lg:px-0 dark:text-white'>
                <h1 className='text-4xl font-bold pb-4 text-neutral-800 dark:text-white'>Buttons</h1>
                <div className='flex flex-col pb-16 gap-16'>
                    <Default />
                    <Rounded />
                    <Social />
                    <SocialRounded />
                    <SocialIconOnly />
                    <SocialIconOnlyRounded />
                </div>
            </section>
        </div>
    )
}

export default Buttons