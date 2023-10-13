import React from 'react'
import Aside from '../../Aside'
import DefaultSpinnerDoc from './Default'
import SpinnerSize from './Sizes'
import SpinnerColor from './Colors'
import TransparentSpinnerDoc from './Transparent'

const SpinnersDocumentation = () => {
    return (
        <div className='flex pt-[70px] w-full h-screen relative'>
            <Aside />
            <section className='absolute left-[22%] w-[78%] pl-8 pt-4 xl:w-[82%] xl:left-[18%] lg:w-[100%] lg:left-0 lg:px-0 dark:text-white'>
                <h1 className='text-4xl font-bold pb-4 text-neutral-800 dark:text-white'>Spinners</h1>
                <div className='flex flex-col pb-16 gap-16'>
                    <DefaultSpinnerDoc />
                    <SpinnerSize />
                    <SpinnerColor />
                    <TransparentSpinnerDoc />
                </div>
            </section>
        </div>
    )
}

export default SpinnersDocumentation