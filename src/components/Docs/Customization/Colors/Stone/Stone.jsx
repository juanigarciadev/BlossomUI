import React from 'react'
import ColorBlock from '../../../../ColorBlock/ColorBlock'

const Stone = () => {
    return (
        <div className='flex flex-col'>
            <span className='font-medium pb-2'>Stone</span>
            <section className='flex flex-wrap gap-2 lg:flex-col'>
                <ColorBlock color={'bg-stone-50'} number={'50'} hex={'#fafaf9'} />
                <ColorBlock color={'bg-stone-100'} number={'100'} hex={'#f5f5f4'} />
                <ColorBlock color={'bg-stone-200'} number={'200'} hex={'#e7e5e4'} />
                <ColorBlock color={'bg-stone-300'} number={'300'} hex={'#d6d3d1'} />
                <ColorBlock color={'bg-stone-400'} number={'400'} hex={'#a8a29e'} />
                <ColorBlock color={'bg-stone-500'} number={'500'} hex={'#78716c'} />
                <ColorBlock color={'bg-stone-600'} number={'600'} hex={'#57534e'} />
                <ColorBlock color={'bg-stone-700'} number={'700'} hex={'#44403c'} />
                <ColorBlock color={'bg-stone-800'} number={'800'} hex={'#292524'} />
                <ColorBlock color={'bg-stone-900'} number={'900'} hex={'#1c1917'} />
                <ColorBlock color={'bg-stone-950'} number={'950'} hex={'#0c0a09'} />
            </section>
        </div>
    )
}

export default Stone