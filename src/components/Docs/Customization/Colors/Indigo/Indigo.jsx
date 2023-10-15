import React from 'react'
import ColorBlock from '../../../../ColorBlock/ColorBlock'

const Indigo = () => {
    return (
        <div className='flex flex-col'>
            <span className='font-medium pb-2'>Indigo</span>
            <section className='flex flex-wrap gap-2 lg:flex-col'>
                <ColorBlock color={'bg-indigo-50'} number={'50'} hex={'#eef2ff'} />
                <ColorBlock color={'bg-indigo-100'} number={'100'} hex={'#e0e7ff'} />
                <ColorBlock color={'bg-indigo-200'} number={'200'} hex={'#c7d2fe'} />
                <ColorBlock color={'bg-indigo-300'} number={'300'} hex={'#a5b4fc'} />
                <ColorBlock color={'bg-indigo-400'} number={'400'} hex={'#818cf8'} />
                <ColorBlock color={'bg-indigo-500'} number={'500'} hex={'#6366f1'} />
                <ColorBlock color={'bg-indigo-600'} number={'600'} hex={'#4f46e5'} />
                <ColorBlock color={'bg-indigo-700'} number={'700'} hex={'#4338ca'} />
                <ColorBlock color={'bg-indigo-800'} number={'800'} hex={'#3730a3'} />
                <ColorBlock color={'bg-indigo-900'} number={'900'} hex={'#312e81'} />
                <ColorBlock color={'bg-indigo-950'} number={'950'} hex={'#1e1b4b'} />
            </section>
        </div>
    )
}

export default Indigo