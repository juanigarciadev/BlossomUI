import React from 'react'
import ColorBlock from '../../../../ColorBlock/ColorBlock'

const Teal = () => {
    return (
        <div className='flex flex-col'>
            <span className='font-medium pb-2'>Teal</span>
            <section className='flex flex-wrap gap-2 lg:flex-col'>
                <ColorBlock color={'bg-teal-50'} number={'50'} hex={'#f0fdfa'} />
                <ColorBlock color={'bg-teal-100'} number={'100'} hex={'#ccfbf1'} />
                <ColorBlock color={'bg-teal-200'} number={'200'} hex={'#99f6e4'} />
                <ColorBlock color={'bg-teal-300'} number={'300'} hex={'#5eead4'} />
                <ColorBlock color={'bg-teal-400'} number={'400'} hex={'#2dd4bf'} />
                <ColorBlock color={'bg-teal-500'} number={'500'} hex={'#14b8a6'} />
                <ColorBlock color={'bg-teal-600'} number={'600'} hex={'#0d9488'} />
                <ColorBlock color={'bg-teal-700'} number={'700'} hex={'#0f766e'} />
                <ColorBlock color={'bg-teal-800'} number={'800'} hex={'#115e59'} />
                <ColorBlock color={'bg-teal-900'} number={'900'} hex={'#134e4a'} />
                <ColorBlock color={'bg-teal-950'} number={'950'} hex={'#042f2e'} />
            </section>
        </div>
    )
}

export default Teal