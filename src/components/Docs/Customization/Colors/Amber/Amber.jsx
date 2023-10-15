import React from 'react'
import ColorBlock from '../../../../ColorBlock/ColorBlock'

const Amber = () => {
    return (
        <div className='flex flex-col'>
            <span className='font-medium pb-2'>Amber</span>
            <section className='flex flex-wrap gap-2 lg:flex-col'>
                <ColorBlock color={'bg-amber-50'} number={'50'} hex={'#fffbeb'} />
                <ColorBlock color={'bg-amber-100'} number={'100'} hex={'#fef3c7'} />
                <ColorBlock color={'bg-amber-200'} number={'200'} hex={'#fde68a'} />
                <ColorBlock color={'bg-amber-300'} number={'300'} hex={'#fcd34d'} />
                <ColorBlock color={'bg-amber-400'} number={'400'} hex={'#fbbf24'} />
                <ColorBlock color={'bg-amber-500'} number={'500'} hex={'#f59e0b'} />
                <ColorBlock color={'bg-amber-600'} number={'600'} hex={'#d97706'} />
                <ColorBlock color={'bg-amber-700'} number={'700'} hex={'#b45309'} />
                <ColorBlock color={'bg-amber-800'} number={'800'} hex={'#92400e'} />
                <ColorBlock color={'bg-amber-900'} number={'900'} hex={'#78350f'} />
                <ColorBlock color={'bg-amber-950'} number={'950'} hex={'#451a03'} />
            </section>
        </div>
    )
}

export default Amber