import React from 'react'
import ColorBlock from '../../../../ColorBlock/ColorBlock'

const Rose = () => {
    return (
        <div className='flex flex-col'>
            <span className='font-medium pb-2'>Rose</span>
            <section className='flex gap-2 lg:flex-col'>
                <ColorBlock color={'bg-rose-50'} number={'50'} hex={'#fff1f2'} />
                <ColorBlock color={'bg-rose-100'} number={'100'} hex={'#ffe4e6'} />
                <ColorBlock color={'bg-rose-200'} number={'200'} hex={'#fecdd3'} />
                <ColorBlock color={'bg-rose-300'} number={'300'} hex={'#fda4af'} />
                <ColorBlock color={'bg-rose-400'} number={'400'} hex={'#fb7185'} />
                <ColorBlock color={'bg-rose-500'} number={'500'} hex={'#f43f5e'} />
                <ColorBlock color={'bg-rose-600'} number={'600'} hex={'#e11d48'} />
                <ColorBlock color={'bg-rose-700'} number={'700'} hex={'#be123c'} />
                <ColorBlock color={'bg-rose-800'} number={'800'} hex={'#9f1239'} />
                <ColorBlock color={'bg-rose-900'} number={'900'} hex={'#881337'} />
                <ColorBlock color={'bg-rose-950'} number={'950'} hex={'#4c0519'} />
            </section>
        </div>
    )
}

export default Rose