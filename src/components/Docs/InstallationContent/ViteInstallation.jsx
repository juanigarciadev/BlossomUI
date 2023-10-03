import React, { useState } from 'react'
import { useContext } from 'react';
import { BsClipboard2, BsCheck2Circle } from 'react-icons/bs'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ThemeContext } from '../../../context/ThemeContext';
import { arta, lightfair } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import UsingReact from './ViteVersions/UsingReact';
import UsingVue from './ViteVersions/UsingVue';
import UsingSvelte from './ViteVersions/UsingSvelte';

const ViteInstallation = () => {
    const [content, setContent] = useState("React")
    return (
        <div>
            <div className='flex gap-6 pb-4'>
                <section className='cursor-pointer font-medium' onClick={() => setContent("React")}>Using React</section>
                <section className='cursor-pointer font-medium' onClick={() => setContent("Vue")}>Using Vue</section>
                <section className='cursor-pointer font-medium' onClick={() => setContent("Svelte")}>Using Svelte</section>
            </div>
            {content === "React" ? <UsingReact /> : null}
            {content === "Vue" ? <UsingVue /> : null}
            {content === "Svelte" ? <UsingSvelte /> : null}
        </div>
    )
}

export default ViteInstallation