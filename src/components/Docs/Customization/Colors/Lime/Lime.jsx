import React from 'react'
import ColorBlock from '../../../../ColorBlock/ColorBlock'

const Lime = () => {
    return (
        <div className='flex flex-col'>
            <span className='font-medium pb-2'>Lime</span>
            <section className='flex flex-wrap gap-2 lg:flex-col'>
                <ColorBlock color={'bg-lime-50'} number={'50'} hex={'#f7fee7'} />
                <ColorBlock color={'bg-lime-100'} number={'100'} hex={'#ecfccb'} />
                <ColorBlock color={'bg-lime-200'} number={'200'} hex={'#d9f99d'} />
                <ColorBlock color={'bg-lime-300'} number={'300'} hex={'#bef264'} />
                <ColorBlock color={'bg-lime-400'} number={'400'} hex={'#a3e635'} />
                <ColorBlock color={'bg-lime-500'} number={'500'} hex={'#84cc16'} />
                <ColorBlock color={'bg-lime-600'} number={'600'} hex={'#65a30d'} />
                <ColorBlock color={'bg-lime-700'} number={'700'} hex={'#4d7c0f'} />
                <ColorBlock color={'bg-lime-800'} number={'800'} hex={'#3f6212'} />
                <ColorBlock color={'bg-lime-900'} number={'900'} hex={'#365314'} />
                <ColorBlock color={'bg-lime-950'} number={'950'} hex={'#1a2e05'} />
            </section>
        </div>
    )
}

export default Lime