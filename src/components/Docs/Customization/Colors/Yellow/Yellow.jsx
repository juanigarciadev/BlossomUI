import React from 'react'
import ColorBlock from '../../../../ColorBlock/ColorBlock'

const Yellow = () => {
    return (
        <div className='flex flex-col'>
            <span className='font-medium pb-2'>Yellow</span>
            <section className='flex flex-wrap gap-2 lg:flex-col'>
                <ColorBlock color={'bg-yellow-50'} number={'50'} hex={'#fefce8'} />
                <ColorBlock color={'bg-yellow-100'} number={'100'} hex={'#fef9c3'} />
                <ColorBlock color={'bg-yellow-200'} number={'200'} hex={'#fef08a'} />
                <ColorBlock color={'bg-yellow-300'} number={'300'} hex={'#fde047'} />
                <ColorBlock color={'bg-yellow-400'} number={'400'} hex={'#facc15'} />
                <ColorBlock color={'bg-yellow-500'} number={'500'} hex={'#eab308'} />
                <ColorBlock color={'bg-yellow-600'} number={'600'} hex={'#ca8a04'} />
                <ColorBlock color={'bg-yellow-700'} number={'700'} hex={'#a16207'} />
                <ColorBlock color={'bg-yellow-800'} number={'800'} hex={'#854d0e'} />
                <ColorBlock color={'bg-yellow-900'} number={'900'} hex={'#713f12'} />
                <ColorBlock color={'bg-yellow-950'} number={'950'} hex={'#422006'} />
            </section>
        </div>
    )
}

export default Yellow