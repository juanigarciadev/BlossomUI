import React, { useState } from 'react'
import Explanation from './Explanation'

const ExplanationContainer = () => {
    const [copy, setCopy] = useState(false)

    const codeString = '<a className="flex justify-center items-center bg-black text-white w-fit h-fit text-sm gap-2 px-4 py-3 rounded-lg cursor-pointer font-medium select-none hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200">Example button</a>'

    return (
        <Explanation copy={copy} setCopy={setCopy} codeString={codeString} />
    )
}

export default ExplanationContainer