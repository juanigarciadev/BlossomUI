import React from 'react'
import ColorBlock from '../../../../ColorBlock/ColorBlock'

const Orange = () => {
    return (
        <div className='flex flex-col'>
            <span className='font-medium pb-2'>Orange</span>
            <section className='flex gap-2 lg:flex-col'>
                <ColorBlock color={'bg-orange-50'} number={'50'} hex={'#fff7ed'} />
                <ColorBlock color={'bg-orange-100'} number={'100'} hex={'#ffedd5'} />
                <ColorBlock color={'bg-orange-200'} number={'200'} hex={'#fed7aa'} />
                <ColorBlock color={'bg-orange-300'} number={'300'} hex={'#fdba74'} />
                <ColorBlock color={'bg-orange-400'} number={'400'} hex={'#fb923c'} />
                <ColorBlock color={'bg-orange-500'} number={'500'} hex={'#f97316'} />
                <ColorBlock color={'bg-orange-600'} number={'600'} hex={'#ea580c'} />
                <ColorBlock color={'bg-orange-700'} number={'700'} hex={'#c2410c'} />
                <ColorBlock color={'bg-orange-800'} number={'800'} hex={'#9a3412'} />
                <ColorBlock color={'bg-orange-900'} number={'900'} hex={'#7c2d12'} />
                <ColorBlock color={'bg-orange-950'} number={'950'} hex={'#431407'} />
            </section>
        </div>
    )
}

export default Orange