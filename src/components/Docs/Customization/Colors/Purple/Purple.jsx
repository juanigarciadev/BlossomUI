import React from 'react'
import ColorBlock from '../../../../ColorBlock/ColorBlock'

const Purple = () => {
    return (
        <div className='flex flex-col'>
            <span className='font-medium pb-2'>Purple</span>
            <section className='flex flex-wrap gap-2 lg:flex-col'>
                <ColorBlock color={'bg-purple-50'} number={'50'} hex={'#faf5ff'} />
                <ColorBlock color={'bg-purple-100'} number={'100'} hex={'#f3e8ff'} />
                <ColorBlock color={'bg-purple-200'} number={'200'} hex={'#e9d5ff'} />
                <ColorBlock color={'bg-purple-300'} number={'300'} hex={'#d8b4fe'} />
                <ColorBlock color={'bg-purple-400'} number={'400'} hex={'#c084fc'} />
                <ColorBlock color={'bg-purple-500'} number={'500'} hex={'#a855f7'} />
                <ColorBlock color={'bg-purple-600'} number={'600'} hex={'#9333ea'} />
                <ColorBlock color={'bg-purple-700'} number={'700'} hex={'#7e22ce'} />
                <ColorBlock color={'bg-purple-800'} number={'800'} hex={'#6b21a8'} />
                <ColorBlock color={'bg-purple-900'} number={'900'} hex={'#581c87'} />
                <ColorBlock color={'bg-purple-950'} number={'950'} hex={'#3b0764'} />
            </section>
        </div>
    )
}

export default Purple