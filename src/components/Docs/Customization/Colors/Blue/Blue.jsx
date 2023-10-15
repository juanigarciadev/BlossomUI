import React from 'react'
import ColorBlock from '../../../../ColorBlock/ColorBlock'

const Blue = () => {
    return (
        <div className='flex flex-col'>
            <span className='font-medium pb-2'>Blue</span>
            <section className='flex flex-wrap gap-2 lg:flex-col'>
                <ColorBlock color={'bg-blue-50'} number={'50'} hex={'#eff6ff'} />
                <ColorBlock color={'bg-blue-100'} number={'100'} hex={'#dbeafe'} />
                <ColorBlock color={'bg-blue-200'} number={'200'} hex={'#bfdbfe'} />
                <ColorBlock color={'bg-blue-300'} number={'300'} hex={'#93c5fd'} />
                <ColorBlock color={'bg-blue-400'} number={'400'} hex={'#60a5fa'} />
                <ColorBlock color={'bg-blue-500'} number={'500'} hex={'#3b82f6'} />
                <ColorBlock color={'bg-blue-600'} number={'600'} hex={'#2563eb'} />
                <ColorBlock color={'bg-blue-700'} number={'700'} hex={'#1d4ed8'} />
                <ColorBlock color={'bg-blue-800'} number={'800'} hex={'#1e40af'} />
                <ColorBlock color={'bg-blue-900'} number={'900'} hex={'#1e3a8a'} />
                <ColorBlock color={'bg-blue-950'} number={'950'} hex={'#172554'} />
            </section>
        </div>
    )
}

export default Blue