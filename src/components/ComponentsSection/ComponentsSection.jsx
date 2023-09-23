import React from 'react'
import componentsCard from '../../mocks/componentsCard'
import { BiLinkExternal } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const ComponentsSection = () => {
    return (
        <div className='grid grid-cols-3 gap-4 pt-32 md:flex lg:grid-cols-2 md:flex-col'>
            {
                componentsCard.map((card) => {
                    return (
                        <Link to={card.url} className='flex flex-col border border-neutral-300 w-full h-auto rounded-lg shadow-sm hover:shadow-md duration-300' key={card.name}>
                            <div className='flex items-center justify-between py-2 px-4 bg-neutral-300'>
                                <h3 className='font-bold'>{card.name}</h3>
                                <BiLinkExternal />
                            </div>
                            <hr />
                            <img src={card.img} className='rounded-xl' alt={card.name} />
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default ComponentsSection