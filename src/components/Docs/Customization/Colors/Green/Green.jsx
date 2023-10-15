import React from 'react'
import ColorBlock from '../../../../ColorBlock/ColorBlock'

const Green = () => {
    return (
        <div className='flex flex-col'>
            <span className='font-medium pb-2'>Green</span>
            <section className='flex flex-wrap gap-2 lg:flex-col'>
                <ColorBlock color={'bg-green-50'} number={'50'} hex={'#f0fdf4'} />
                <ColorBlock color={'bg-green-100'} number={'100'} hex={'#dcfce7'} />
                <ColorBlock color={'bg-green-200'} number={'200'} hex={'#bbf7d0'} />
                <ColorBlock color={'bg-green-300'} number={'300'} hex={'#86efac'} />
                <ColorBlock color={'bg-green-400'} number={'400'} hex={'#4ade80'} />
                <ColorBlock color={'bg-green-500'} number={'500'} hex={'#22c55e'} />
                <ColorBlock color={'bg-green-600'} number={'600'} hex={'#16a34a'} />
                <ColorBlock color={'bg-green-700'} number={'700'} hex={'#15803d'} />
                <ColorBlock color={'bg-green-800'} number={'800'} hex={'#166534'} />
                <ColorBlock color={'bg-green-900'} number={'900'} hex={'#14532d'} />
                <ColorBlock color={'bg-green-950'} number={'950'} hex={'#052e16'} />
            </section>
        </div>
    )
}

export default Green