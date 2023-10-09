import React, { useState } from 'react'
import StandardNuxt from './NuxtVersions/StandardNuxt';
import ModulesNuxt from './NuxtVersions/ModulesNuxt';

const NuxtInstallation = () => {
  const [content, setContent] = useState("Standard")
  return (
    <div>
      <div className='flex flex-wrap gap-1'>
        <section className='group flex flex-col cursor-pointer font-medium' onClick={() => setContent("Standard")}>
          <span className='px-4'>
            Standard installation
          </span>
          <div className='group h-[3px] w-full group-hover:bg-corporative bg-neutral-200 dark:bg-neutral-800 duration-200'></div>
        </section>
        <section className='group flex flex-col cursor-pointer font-medium' onClick={() => setContent("Modules")}>
          <span className='px-4'>
            Using Nuxt Modules
          </span>
          <div className='group h-[3px] w-full group-hover:bg-corporative bg-neutral-200 dark:bg-neutral-800 duration-200'></div>
        </section>
      </div>
      <hr className='pb-2' />
      {content === "Standard" ? <StandardNuxt /> : null}
      {content === "Modules" ? <ModulesNuxt /> : null}
    </div>
  )
}

export default NuxtInstallation