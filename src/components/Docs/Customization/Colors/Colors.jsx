import React, { useState } from 'react'
import Aside from '../../Aside'
import { BiChevronDown } from 'react-icons/bi'
import DocNav from '../../DocNav'
import Slate from './Slate/Slate'
import Gray from './Gray/Gray'
import Zinc from './Zinc/Zinc'
import Neutral from './Neutral/Neutral'
import Stone from './Stone/Stone'
import Red from './Red/Red'
import Orange from './Orange/Orange'
import Amber from './Amber/Amber'
import Yellow from './Yellow/Yellow'
import Lime from './Lime/Lime'
import Green from './Green/Green'
import Emerald from './Emerald/Emerald'
import Teal from './Teal/Teal'
import Cyan from './Cyan/Cyan'
import Sky from './Sky/Sky'
import Blue from './Blue/Blue'
import Indigo from './Indigo/Indigo'
import Violet from './Violet/Violet'
import Purple from './Purple/Purple'
import Fuchsia from './Fuchsia/Fuchsia'
import Pink from './Pink/Pink'
import Rose from './Rose/Rose'

const Colors = () => {
    const [docNav, setDocNav] = useState(false)
    return (
        <div className='flex pt-[70px] w-full h-screen relative'>
            <Aside />
            <section className='absolute left-[22%] w-[78%] pl-8 pt-4 xl:w-[82%] xl:left-[18%] lg:w-[100%] lg:left-0 lg:px-0 dark:text-white'>
                <div className='flex gap-4 items-center pb-4'>
                    <h1 className='text-4xl font-bold text-neutral-800 dark:text-white'>Colors</h1>
                    <div className='hidden items-center justify-center cursor-pointer h-8 w-8 rounded-lg bg-neutral-200 dark:bg-neutral-800 lg:flex' onClick={() => setDocNav(!docNav)}>
                        <BiChevronDown />
                    </div>
                </div>
                {docNav && (
                    <DocNav />
                )}
                <div className='flex flex-col pb-16 gap-10 w-full 2xl:flex-col lg:grid lg:grid-cols-5 lg:gap-4 xs:grid-cols-2 xxs:grid-cols-1'>
                    <Slate />
                    <Gray />
                    <Zinc />
                    <Neutral />
                    <Stone />
                    <Red />
                    <Orange />
                    <Amber />
                    <Yellow />
                    <Lime />
                    <Green />
                    <Emerald />
                    <Teal />
                    <Cyan />
                    <Sky />
                    <Blue />
                    <Indigo />
                    <Violet />
                    <Purple />
                    <Fuchsia />
                    <Pink />
                    <Rose />
                </div>
            </section>
        </div>
    )
}

export default Colors