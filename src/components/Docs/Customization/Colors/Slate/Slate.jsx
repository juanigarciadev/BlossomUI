import React from 'react'
import ColorBlock from '../../../../ColorBlock/ColorBlock'

const Slate = () => {
    return (
        <div className='flex flex-col'>
            <span className='font-medium pb-2'>Slate</span>
            <section className='flex flex-wrap gap-2 lg:flex-col'>
                <ColorBlock color={'bg-slate-50'} number={'50'} hex={'#f8fafc'} />
                <ColorBlock color={'bg-slate-100'} number={'100'} hex={'#f1f5f9'} />
                <ColorBlock color={'bg-slate-200'} number={'200'} hex={'#e2e8f0'} />
                <ColorBlock color={'bg-slate-300'} number={'300'} hex={'#cbd5e1'} />
                <ColorBlock color={'bg-slate-400'} number={'400'} hex={'#94a3b8'} />
                <ColorBlock color={'bg-slate-500'} number={'500'} hex={'#64748b'} />
                <ColorBlock color={'bg-slate-600'} number={'600'} hex={'#475569'} />
                <ColorBlock color={'bg-slate-700'} number={'700'} hex={'#334155'} />
                <ColorBlock color={'bg-slate-800'} number={'800'} hex={'#1e293b'} />
                <ColorBlock color={'bg-slate-900'} number={'900'} hex={'#0f172a'} />
                <ColorBlock color={'bg-slate-950'} number={'950'} hex={'#020617'} />
            </section>
        </div>
    )
}

export default Slate