import React, { useState } from 'react'
import UsingReact from './ViteVersions/UsingReact';
import UsingVue from './ViteVersions/UsingVue';
import UsingSvelte from './ViteVersions/UsingSvelte';

const ViteInstallation = () => {
    const [content, setContent] = useState("React")
    return (
        <div>
            <div className='flex gap-6 pb-2'>
                <section className='group flex gap-2 cursor-pointer font-medium' onClick={() => setContent("React")}>
                    <div className='group h-full w-[3px] group-hover:bg-corporative bg-neutral-200 dark:bg-neutral-800 duration-200'></div>
                    <span>
                        Using React
                    </span>
                </section>
                <section className='group flex gap-2 cursor-pointer font-medium' onClick={() => setContent("Vue")}>
                    <div className='group h-full w-[3px] group-hover:bg-corporative bg-neutral-200 dark:bg-neutral-800 duration-200'></div>
                    <span>
                        Using Vue
                    </span>
                </section>
                <section className='group flex gap-2 cursor-pointer font-medium' onClick={() => setContent("Svelte")}>
                    <div className='group h-full w-[3px] group-hover:bg-corporative bg-neutral-200 dark:bg-neutral-800 duration-200'></div>
                    <span>
                        Using Svelte
                    </span>
                </section>
            </div>
            <hr className='pb-2' />
            {content === "React" ? <UsingReact /> : null}
            {content === "Vue" ? <UsingVue /> : null}
            {content === "Svelte" ? <UsingSvelte /> : null}
        </div>
    )
}

export default ViteInstallation