import React from 'react'

const Home = () => {
  return (
    <div className='grid grid-cols-2 pt-64'>
      <section className='flex flex-col gap-6'>
        <h1 className='text-6xl font-bold text-neutral-800'>Create faster your next project with <span className='text-pink-400'>Blossom UI.</span></h1>
        <h3 className='text-lg text-neutral-700'>Customizable, reusable and beautiful components made with Tailwind.</h3>
        <section className='flex gap-4'>
          <a className='bg-black text-white flex justify-center gap-2 px-4 py-3 rounded-lg cursor-pointer font-medium hover:bg-neutral-800'>Browse components</a>
          <a className='border border-neutral-300 bg-transparent px-4 py-3 rounded-lg cursor-pointer font-medium hover:bg-neutral-200 hover:bg-opacity-40 hover:backdrop-blur-md'>View source code</a>
        </section>
      </section>
    </div>
  )
}

export default Home