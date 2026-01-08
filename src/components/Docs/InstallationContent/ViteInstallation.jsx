import React, { useState } from 'react'
import UsingReact from './ViteVersions/UsingReact';
import UsingVue from './ViteVersions/UsingVue';
import UsingSvelte from './ViteVersions/UsingSvelte';

const ViteInstallation = () => {
    const [content, setContent] = useState("React")
    return (
        <div>
            {/* <div className='flex flex-wrap gap-1'>
                <section className='group flex flex-col cursor-pointer font-medium ' onClick={() => setContent("React")}>
                    <span className='px-4'>
                        Using React
                    </span>
                    <div className='group h-[3px] w-full group-hover:bg-corporative bg-neutral-200 sm:w-32 dark:bg-neutral-800 duration-200'></div>
                </section>
                <section className='group flex flex-col cursor-pointer font-medium ' onClick={() => setContent("Vue")}>
                    <span className='px-4'>
                        Using Vue
                    </span>
                    <div className='group h-[3px] w-full group-hover:bg-corporative bg-neutral-200 sm:w-32 dark:bg-neutral-800 duration-200'></div>
                </section>
                <section className='group flex flex-col cursor-pointer font-medium ' onClick={() => setContent("Svelte")}>
                    <span className='px-4'>
                        Using Svelte
                    </span>
                    <div className='group h-[3px] w-full group-hover:bg-corporative bg-neutral-200 sm:w-32 dark:bg-neutral-800 duration-200'></div>
                </section>
            </div> */}
            <hr className='pb-2' />
            {content === "React" ? <UsingReact /> : null}
            {content === "Vue" ? <UsingVue /> : null}
            {content === "Svelte" ? <UsingSvelte /> : null}
        </div>
    )
}

export default ViteInstallation