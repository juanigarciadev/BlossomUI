import React, { useState } from 'react'
import Aside from '../../Aside'
import { BiChevronDown } from 'react-icons/bi'
import DocNav from '../../DocNav'
import Footer from '../../../Footer/Footer'
import Default from './Default'
import AlertsWithIcons from './WithIcons'
import DefaultOutlined from './DefaultOutlined'
import AlertsWithList from './WithList'
import AlertsWithActions from './WithActions'
import DarkAlerts from './Dark'
import SurveyAlert from './Survey'

const AlertsDocumentation = () => {
    const [docNav, setDocNav] = useState(false)
    return (
        <div className='flex pt-[70px] w-full h-screen relative'>
            <Aside />
            <section className='absolute left-[22%] w-[78%] pl-8 pt-4 xl:w-[82%] xl:left-[18%] lg:w-[100%] lg:left-0 lg:px-0 dark:text-white'>
                <div className='flex gap-4 items-center pb-4'>
                    <h1 className='text-4xl font-bold text-neutral-800 dark:text-white'>Alerts</h1>
                    <div className='hidden items-center justify-center cursor-pointer h-8 w-8 rounded-lg bg-neutral-200 dark:bg-neutral-800 lg:flex' onClick={() => setDocNav(!docNav)}>
                        <BiChevronDown />
                    </div>
                </div>
                {docNav && (
                    <DocNav />
                )}
                <div className='flex flex-col pb-16 gap-16'>
                    <Default />
                    <AlertsWithIcons />
                    <DefaultOutlined />
                    <AlertsWithList />
                    <AlertsWithActions />
                    <DarkAlerts />
                    <SurveyAlert />
                </div>
                <Footer />
            </section>
        </div>
    )
}

export default AlertsDocumentation