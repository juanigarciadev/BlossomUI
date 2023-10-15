import React from 'react'
import ColorBlock from '../../../../ColorBlock/ColorBlock'

const Sky = () => {
    return (
        <div className='flex flex-col'>
            <span className='font-medium pb-2'>Sky</span>
            <section className='flex flex-wrap gap-2 lg:flex-col'>
                <ColorBlock color={'bg-sky-50'} number={'50'} hex={'#f0f9ff'} />
                <ColorBlock color={'bg-sky-100'} number={'100'} hex={'#e0f2fe'} />
                <ColorBlock color={'bg-sky-200'} number={'200'} hex={'#bae6fd'} />
                <ColorBlock color={'bg-sky-300'} number={'300'} hex={'#7dd3fc'} />
                <ColorBlock color={'bg-sky-400'} number={'400'} hex={'#38bdf8'} />
                <ColorBlock color={'bg-sky-500'} number={'500'} hex={'#0ea5e9'} />
                <ColorBlock color={'bg-sky-600'} number={'600'} hex={'#0284c7'} />
                <ColorBlock color={'bg-sky-700'} number={'700'} hex={'#0369a1'} />
                <ColorBlock color={'bg-sky-800'} number={'800'} hex={'#075985'} />
                <ColorBlock color={'bg-sky-900'} number={'900'} hex={'#0c4a6e'} />
                <ColorBlock color={'bg-sky-950'} number={'950'} hex={'#082f49'} />
            </section>
        </div>
    )
}

export default Sky