import React, { useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'
import DocNav from '../../DocNav'
import Footer from '../../../Footer/Footer'
import Pricing from './Default'
import BorderAccent from './BorderAccent'
import SizeAccent from './SizeAccent'

const PricingDocumentation = () => {
    const [docNav, setDocNav] = useState(false)
    return (
        <div>
            <div className='flex gap-4 items-center pb-4 lg:pt-[70px]'>
                <h1 className='text-4xl font-bold text-neutral-800 dark:text-white'>Pricing</h1>
                <div className='hidden items-center justify-center cursor-pointer h-8 w-8 rounded-lg bg-neutral-200 dark:bg-neutral-800 lg:flex' onClick={() => setDocNav(!docNav)}>
                    <BiChevronDown />
                </div>
            </div>
            {docNav && (
                <DocNav />
            )}
            <div className='flex flex-col pb-16 gap-16'>
                <Pricing />
                <BorderAccent />
                <SizeAccent />
            </div>
            <Footer />
        </div>
    )
}

export default PricingDocumentation