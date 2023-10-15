import React from 'react'
import ColorBlock from '../../../../ColorBlock/ColorBlock'

const Emerald = () => {
    return (
        <div className='flex flex-col'>
            <span className='font-medium pb-2'>Emerald</span>
            <section className='flex gap-2 lg:flex-col'>
                <ColorBlock color={'bg-emerald-50'} number={'50'} hex={'#ecfdf5'} />
                <ColorBlock color={'bg-emerald-100'} number={'100'} hex={'#d1fae5'} />
                <ColorBlock color={'bg-emerald-200'} number={'200'} hex={'#a7f3d0'} />
                <ColorBlock color={'bg-emerald-300'} number={'300'} hex={'#6ee7b7'} />
                <ColorBlock color={'bg-emerald-400'} number={'400'} hex={'#34d399'} />
                <ColorBlock color={'bg-emerald-500'} number={'500'} hex={'#10b981'} />
                <ColorBlock color={'bg-emerald-600'} number={'600'} hex={'#059669'} />
                <ColorBlock color={'bg-emerald-700'} number={'700'} hex={'#047857'} />
                <ColorBlock color={'bg-emerald-800'} number={'800'} hex={'#065f46'} />
                <ColorBlock color={'bg-emerald-900'} number={'900'} hex={'#064e3b'} />
                <ColorBlock color={'bg-emerald-950'} number={'950'} hex={'#022c22'} />
            </section>
        </div>
    )
}

export default Emerald