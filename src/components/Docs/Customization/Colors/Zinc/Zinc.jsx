import React from 'react'
import ColorBlock from '../../../../ColorBlock/ColorBlock'

const Zinc = () => {
    return (
        <div className='flex flex-col'>
            <span className='font-medium pb-2'>Zinc</span>
            <section className='flex gap-2 lg:flex-col'>
                <ColorBlock color={'bg-zinc-50'} number={'50'} hex={'#fafafa'} />
                <ColorBlock color={'bg-zinc-100'} number={'100'} hex={'#f4f4f5'} />
                <ColorBlock color={'bg-zinc-200'} number={'200'} hex={'#e4e4e7'} />
                <ColorBlock color={'bg-zinc-300'} number={'300'} hex={'#d4d4d8'} />
                <ColorBlock color={'bg-zinc-400'} number={'400'} hex={'#a1a1aa'} />
                <ColorBlock color={'bg-zinc-500'} number={'500'} hex={'#71717a'} />
                <ColorBlock color={'bg-zinc-600'} number={'600'} hex={'#52525b'} />
                <ColorBlock color={'bg-zinc-700'} number={'700'} hex={'#3f3f46'} />
                <ColorBlock color={'bg-zinc-800'} number={'800'} hex={'#27272a'} />
                <ColorBlock color={'bg-zinc-900'} number={'900'} hex={'#18181b'} />
                <ColorBlock color={'bg-zinc-950'} number={'950'} hex={'#09090b'} />
            </section>
        </div>
    )
}

export default Zinc