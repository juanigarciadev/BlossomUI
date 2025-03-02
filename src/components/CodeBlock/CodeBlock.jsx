import { useState, useContext } from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { arta, lightfair } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ThemeContext } from "../../context/ThemeContext";
import { BiCheckCircle, BiCopyAlt } from "react-icons/bi";

const CodeBlock = ({ name, code, language }) => {
    const { theme } = useContext(ThemeContext)
    const [copy, setCopy] = useState(false)
    return (
        <section className='shadow-md pt-2 codeblock-transition'>
            <article className='flex justify-between items-center w-full min-h-0 bg-corporative rounded-t-lg'>
                <div className='relative flex items-center bg-[#bd4c86] rounded-tl-lg min-h-0 px-4 py-2'>
                    <span className='cursor-default text-white'>{name}</span>
                    <div className='absolute bg-black h-[2px] w-full bottom-0 left-0 dark:bg-white'></div>
                </div>
                <div className='text-sm pr-4 cursor-pointer'>
                    {copy ? (
                        <div className='flex items-center gap-1 select-none'>
                            <BiCheckCircle className="text-lg" />
                            <span>Copied!</span>
                        </div>
                    ) :
                        (
                            <div className='flex items-center gap-1' onClick={() => {
                                navigator.clipboard.writeText(code);
                                setCopy(true)
                                setTimeout(() => {
                                    setCopy(false)
                                }, 1500)
                            }}>
                                <BiCopyAlt title="Copy to clipboard" className="select-none text-lg" />
                            </div>
                        )}
                </div>
            </article>

            <SyntaxHighlighter language={language} style={theme === "dark" ? arta : lightfair}>
                {code}
            </SyntaxHighlighter>
        </section >
    )
}

export default CodeBlock