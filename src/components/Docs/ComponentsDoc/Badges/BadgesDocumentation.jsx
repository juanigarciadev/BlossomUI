import React from 'react'
import Aside from '../../Aside'
import DefaultBadges from './Default'
import OutlinedBadges from './Outlined'
import DefaultRoundedBadges from './DefaultRounded'
import OutlinedRoundedBadges from './OutlinedRounded'

const BadgesDocumentation = () => {
    return (
        <div className='flex pt-[70px] w-full h-screen relative'>
            <Aside />
            <section className='absolute left-[22%] w-[78%] pl-8 pt-4 xl:w-[82%] xl:left-[18%] lg:w-[100%] lg:left-0 lg:px-0 dark:text-white'>
                <h1 className='text-4xl font-bold pb-4 text-neutral-800 dark:text-white'>Badges</h1>
                <div className='flex flex-col pb-16 gap-16'>
                    <DefaultBadges />
                    <OutlinedBadges />
                    <DefaultRoundedBadges />
                    <OutlinedRoundedBadges />
                </div>
            </section>
        </div>
    )
}

export default BadgesDocumentation