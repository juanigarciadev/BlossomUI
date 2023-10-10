import React from 'react'
import { DefaultButton, GreenButton, PinkButton, PrimaryButton, PurpleButton, RedButton, SecondaryButton, YellowButton } from '../../../UI/Buttons/Normal/Default'

const Normal = () => {
    return (
        <div className='flex flex-wrap gap-2'>
            <PrimaryButton />
            <SecondaryButton />
            <DefaultButton />
            <RedButton />
            <GreenButton />
            <YellowButton />
            <PurpleButton />
            <PinkButton />
        </div>
    )
}

export default Normal