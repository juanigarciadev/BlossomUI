import React, { useState } from 'react'
import StandardNuxt from './NuxtVersions/StandardNuxt';
import ModulesNuxt from './NuxtVersions/ModulesNuxt';

const NuxtInstallation = () => {
  const [content, setContent] = useState("Standard")
  return (
    <div>
      <div className='flex gap-6 pb-2'>
        <section className='group flex gap-2 cursor-pointer font-medium' onClick={() => setContent("Standard")}>
          <div className='group h-full w-[3px] group-hover:bg-corporative bg-neutral-200 dark:bg-neutral-800 duration-200'></div>
          <span>
            Standard installation
          </span>
        </section>
        <section className='group flex gap-2 cursor-pointer font-medium' onClick={() => setContent("Modules")}>
          <div className='group h-full w-[3px] group-hover:bg-corporative bg-neutral-200 dark:bg-neutral-800 duration-200'></div>
          <span>
            Using Nuxt Modules
          </span>
        </section>
      </div>
      <hr className='pb-2' />
      {content === "Standard" ? <StandardNuxt /> : null}
      {content === "Modules" ? <ModulesNuxt /> : null}
    </div>
  )
}

export default NuxtInstallation