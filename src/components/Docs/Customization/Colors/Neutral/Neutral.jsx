import React from 'react'
import ColorBlock from '../../../../ColorBlock/ColorBlock'

const Neutral = () => {
    return (
        <div className='flex flex-col'>
            <span className='font-medium pb-2'>Neutral</span>
            <section className='flex gap-2 lg:flex-col'>
                <ColorBlock color={'bg-neutral-50'} number={'50'} hex={'#fafafa'} />
                <ColorBlock color={'bg-neutral-100'} number={'100'} hex={'#f5f5f5'} />
                <ColorBlock color={'bg-neutral-200'} number={'200'} hex={'#e5e5e5'} />
                <ColorBlock color={'bg-neutral-300'} number={'300'} hex={'#d4d4d4'} />
                <ColorBlock color={'bg-neutral-400'} number={'400'} hex={'#a3a3a3'} />
                <ColorBlock color={'bg-neutral-500'} number={'500'} hex={'#737373'} />
                <ColorBlock color={'bg-neutral-600'} number={'600'} hex={'#525252'} />
                <ColorBlock color={'bg-neutral-700'} number={'700'} hex={'#404040'} />
                <ColorBlock color={'bg-neutral-800'} number={'800'} hex={'#262626'} />
                <ColorBlock color={'bg-neutral-900'} number={'900'} hex={'#171717'} />
                <ColorBlock color={'bg-neutral-950'} number={'950'} hex={'#0a0a0a'} />
            </section>
        </div>
    )
}

export default Neutral