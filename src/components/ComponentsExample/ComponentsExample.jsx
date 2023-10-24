import React from 'react'
import { Red } from '../UI/Badges/Normal/Default'
import { PurpleOutlinedRounded } from '../UI/Badges/Rounded/Outlined'
import { PurpleButton } from '../UI/Buttons/Normal/Default'
import { YellowButtonRounded } from '../UI/Buttons/Rounded/Default'
import { Apple } from '../UI/Buttons/Normal/Social'
import { GoogleIcon } from '../UI/Buttons/IconsOnly/Default'
import { GithubIconRounded } from '../UI/Buttons/IconsOnly/Rounded'
import { PercentageInsideProgressBar } from '../UI/Progress/ProgressBar'

const ComponentsExample = () => {
    return (
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
                <PercentageInsideProgressBar />
            </div>
        </section>
    )
}

export default ComponentsExample