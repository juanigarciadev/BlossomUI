import React from 'react'
import ColorBlock from '../../../../ColorBlock/ColorBlock'

const Gray = () => {
    return (
        <div className='flex flex-col'>
            <span className='font-medium pb-2'>Gray</span>
            <section className='flex gap-2 lg:flex-col'>
                <ColorBlock color={'bg-gray-50'} number={'50'} hex={'#f9fafb'} />
                <ColorBlock color={'bg-gray-100'} number={'100'} hex={'#f3f4f6'} />
                <ColorBlock color={'bg-gray-200'} number={'200'} hex={'#e5e7eb'} />
                <ColorBlock color={'bg-gray-300'} number={'300'} hex={'#d1d5db'} />
                <ColorBlock color={'bg-gray-400'} number={'400'} hex={'#9ca3af'} />
                <ColorBlock color={'bg-gray-500'} number={'500'} hex={'#6b7280'} />
                <ColorBlock color={'bg-gray-600'} number={'600'} hex={'#4b5563'} />
                <ColorBlock color={'bg-gray-700'} number={'700'} hex={'#374151'} />
                <ColorBlock color={'bg-gray-800'} number={'800'} hex={'#1f2937'} />
                <ColorBlock color={'bg-gray-900'} number={'900'} hex={'#111827'} />
                <ColorBlock color={'bg-gray-950'} number={'950'} hex={'#030712'} />
            </section>
        </div>
    )
}

export default Gray