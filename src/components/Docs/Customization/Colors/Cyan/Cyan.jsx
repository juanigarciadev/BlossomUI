import React from 'react'
import ColorBlock from '../../../../ColorBlock/ColorBlock'

const Cyan = () => {
    return (
        <div className='flex flex-col'>
            <span className='font-medium pb-2'>Cyan</span>
            <section className='flex gap-2 lg:flex-col'>
                <ColorBlock color={'bg-cyan-50'} number={'50'} hex={'#ecfeff'} />
                <ColorBlock color={'bg-cyan-100'} number={'100'} hex={'#cffafe'} />
                <ColorBlock color={'bg-cyan-200'} number={'200'} hex={'#a5f3fc'} />
                <ColorBlock color={'bg-cyan-300'} number={'300'} hex={'#67e8f9'} />
                <ColorBlock color={'bg-cyan-400'} number={'400'} hex={'#22d3ee'} />
                <ColorBlock color={'bg-cyan-500'} number={'500'} hex={'#06b6d4'} />
                <ColorBlock color={'bg-cyan-600'} number={'600'} hex={'#0891b2'} />
                <ColorBlock color={'bg-cyan-700'} number={'700'} hex={'#0e7490'} />
                <ColorBlock color={'bg-cyan-800'} number={'800'} hex={'#155e75'} />
                <ColorBlock color={'bg-cyan-900'} number={'900'} hex={'#164e63'} />
                <ColorBlock color={'bg-cyan-950'} number={'950'} hex={'#083344'} />
            </section>
        </div>
    )
}

export default Cyan