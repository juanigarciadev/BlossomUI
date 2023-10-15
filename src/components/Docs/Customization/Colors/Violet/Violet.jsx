import React from 'react'
import ColorBlock from '../../../../ColorBlock/ColorBlock'

const Violet = () => {
    return (
        <div className='flex flex-col'>
            <span className='font-medium pb-2'>Violet</span>
            <section className='flex gap-2 lg:flex-col'>
                <ColorBlock color={'bg-violet-50'} number={'50'} hex={'#f5f3ff'} />
                <ColorBlock color={'bg-violet-100'} number={'100'} hex={'#ede9fe'} />
                <ColorBlock color={'bg-violet-200'} number={'200'} hex={'#ddd6fe'} />
                <ColorBlock color={'bg-violet-300'} number={'300'} hex={'#c4b5fd'} />
                <ColorBlock color={'bg-violet-400'} number={'400'} hex={'#a78bfa'} />
                <ColorBlock color={'bg-violet-500'} number={'500'} hex={'#8b5cf6'} />
                <ColorBlock color={'bg-violet-600'} number={'600'} hex={'#7c3aed'} />
                <ColorBlock color={'bg-violet-700'} number={'700'} hex={'#6d28d9'} />
                <ColorBlock color={'bg-violet-800'} number={'800'} hex={'#5b21b6'} />
                <ColorBlock color={'bg-violet-900'} number={'900'} hex={'#4c1d95'} />
                <ColorBlock color={'bg-violet-950'} number={'950'} hex={'#2e1065'} />
            </section>
        </div>
    )
}

export default Violet