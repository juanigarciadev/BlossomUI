import React from 'react'
import componentsCard from '../../mocks/componentsCard'
import { Link } from 'react-router-dom'
import { BiRightArrowAlt } from 'react-icons/bi'

const ComponentsSection = () => {
    return (
            <div className='grid grid-cols-3 gap-4 pt-20 md:flex lg:grid-cols-2 md:flex-col'>
                {
                    componentsCard.map((card) => {
                        return (
                            <article className='flex flex-col gap-2 border border-neutral-300 w-full h-auto rounded-lg shadow-sm hover:shadow-md duration-300' key={card.name}>
                                <div className="bg-[url(`${card.name}`)]"></div>
                                <img src={card.img} alt={card.name} />
                                <hr />
                                <h3 className='font-bold pl-4'>{card.name}</h3>
                                <Link to={card.url} className='flex justify-center max-h-[50px] items-center bg-black text-white gap-2 py-3 rounded-lg cursor-pointer font-medium select-none hover:bg-neutral-800 m-4'>More information <BiRightArrowAlt className='text-2xl'/></Link>
                            </article>
                        )
                    })
                }
            </div>
    )
}

export default ComponentsSection