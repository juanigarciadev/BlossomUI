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

const Panel = ({ className = '', children }) => (
    <div className={`flex flex-col gap-4 rounded-2xl border border-neutral-200 bg-white/70 p-5 shadow-xl shadow-neutral-200/50 backdrop-blur-md dark:border-neutral-700 dark:bg-neutral-800/60 dark:shadow-none ${className}`}>
        {children}
    </div>
)

const HeroComponents = () => {
    return (
        <section className='fade-up relative flex w-full flex-col gap-4 lg:items-start' style={{ animationDelay: '0.15s' }}>
            <Panel className='float-slow'>
                <div className='flex flex-wrap gap-4'>
                    <Red />
                    <PurpleOutlinedRounded />
                </div>
                <div className='flex flex-wrap gap-4'>
                    <PurpleButton />
                    <YellowButtonRounded />
                    <Apple />
                    <GoogleIcon />
                    <GithubIconRounded />
                </div>
            </Panel>
            <Panel className='float-slower ml-10 lg:ml-0'>
                <div className='flex flex-wrap items-center gap-4'>
                    <PercentageInsideProgressBar />
                    <StackedAvatar />
                    <InformationAvatar />
                    <DefaultSpinner />
                </div>
            </Panel>
        </section>
    )
}

export default HeroComponents
