import React from 'react'
import ColorBlock from '../../../../ColorBlock/ColorBlock'

const Fuchsia = () => {
    return (
        <div className='flex flex-col'>
            <span className='font-medium pb-2'>Fuchsia</span>
            <section className='flex gap-2 lg:flex-col'>
                <ColorBlock color={'bg-fuchsia-50'} number={'50'} hex={'#fdf4ff'} />
                <ColorBlock color={'bg-fuchsia-100'} number={'100'} hex={'#fae8ff'} />
                <ColorBlock color={'bg-fuchsia-200'} number={'200'} hex={'#f5d0fe'} />
                <ColorBlock color={'bg-fuchsia-300'} number={'300'} hex={'#f0abfc'} />
                <ColorBlock color={'bg-fuchsia-400'} number={'400'} hex={'#e879f9'} />
                <ColorBlock color={'bg-fuchsia-500'} number={'500'} hex={'#d946ef'} />
                <ColorBlock color={'bg-fuchsia-600'} number={'600'} hex={'#c026d3'} />
                <ColorBlock color={'bg-fuchsia-700'} number={'700'} hex={'#a21caf'} />
                <ColorBlock color={'bg-fuchsia-800'} number={'800'} hex={'#86198f'} />
                <ColorBlock color={'bg-fuchsia-900'} number={'900'} hex={'#701a75'} />
                <ColorBlock color={'bg-fuchsia-950'} number={'950'} hex={'#4a044e'} />
            </section>
        </div>
    )
}

export default Fuchsia