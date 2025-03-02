import React from 'react'
import { Red } from '../UI/Badges/Normal/Default'
import { PurpleOutlinedRounded } from '../UI/Badges/Rounded/Outlined'
import { PurpleButton } from '../UI/Buttons/Normal/Default'
import { YellowButtonRounded } from '../UI/Buttons/Rounded/Default'
import { Apple } from '../UI/Buttons/Normal/Social'
import { GoogleIcon } from '../UI/Buttons/IconsOnly/Default'
import { GithubIconRounded } from '../UI/Buttons/IconsOnly/Rounded'
import { PercentageInsideProgressBar } from '../UI/Progress/ProgressBar'
import { InformationAvatar, StackedAvatar } from '../UI/Avatar/Avatar'
import { DefaultSpinner } from '../UI/Spinners/Spinners'

const HeroComponents = () => {
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
            <div className='flex flex-wrap items-center gap-4 w-8/12'>
                <PercentageInsideProgressBar />
                <StackedAvatar/>
                <InformationAvatar/>
                <DefaultSpinner/>
            </div>
        </section>
    )
}

export default HeroComponents