import React from 'react'
import ColorBlock from '../../../../ColorBlock/ColorBlock'

const Red = () => {
    return (
        <div className='flex flex-col'>
            <span className='font-medium pb-2'>Red</span>
            <section className='flex flex-wrap gap-2 lg:flex-col'>
                <ColorBlock color={'bg-red-50'} number={'50'} hex={'#fef2f2'} />
                <ColorBlock color={'bg-red-100'} number={'100'} hex={'#fee2e2'} />
                <ColorBlock color={'bg-red-200'} number={'200'} hex={'#fecaca'} />
                <ColorBlock color={'bg-red-300'} number={'300'} hex={'#fca5a5'} />
                <ColorBlock color={'bg-red-400'} number={'400'} hex={'#f87171'} />
                <ColorBlock color={'bg-red-500'} number={'500'} hex={'#ef4444'} />
                <ColorBlock color={'bg-red-600'} number={'600'} hex={'#dc2626'} />
                <ColorBlock color={'bg-red-700'} number={'700'} hex={'#b91c1c'} />
                <ColorBlock color={'bg-red-800'} number={'800'} hex={'#991b1b'} />
                <ColorBlock color={'bg-red-900'} number={'900'} hex={'#7f1d1d'} />
                <ColorBlock color={'bg-red-950'} number={'950'} hex={'#450a0a'} />
            </section>
        </div>
    )
}

export default Red