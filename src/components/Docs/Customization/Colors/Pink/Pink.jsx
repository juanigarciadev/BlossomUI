import React from 'react'
import ColorBlock from '../../../../ColorBlock/ColorBlock'

const Pink = () => {
    return (
        <div className='flex flex-col'>
            <span className='font-medium pb-2'>Pink</span>
            <section className='flex flex-wrap gap-2 lg:flex-col'>
                <ColorBlock color={'bg-pink-50'} number={'50'} hex={'#fdf2f8'} />
                <ColorBlock color={'bg-pink-100'} number={'100'} hex={'#fce7f3'} />
                <ColorBlock color={'bg-pink-200'} number={'200'} hex={'#fbcfe8'} />
                <ColorBlock color={'bg-pink-300'} number={'300'} hex={'#f9a8d4'} />
                <ColorBlock color={'bg-pink-400'} number={'400'} hex={'#f472b6'} />
                <ColorBlock color={'bg-pink-500'} number={'500'} hex={'#ec4899'} />
                <ColorBlock color={'bg-pink-600'} number={'600'} hex={'#db2777'} />
                <ColorBlock color={'bg-pink-700'} number={'700'} hex={'#be185d'} />
                <ColorBlock color={'bg-pink-800'} number={'800'} hex={'#9d174d'} />
                <ColorBlock color={'bg-pink-900'} number={'900'} hex={'#831843'} />
                <ColorBlock color={'bg-pink-950'} number={'950'} hex={'#500724'} />
            </section>
        </div>
    )
}

export default Pink