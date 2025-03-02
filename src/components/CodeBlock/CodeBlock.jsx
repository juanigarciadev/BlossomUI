import { useState, useContext } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { arta, lightfair } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ThemeContext } from "../../context/ThemeContext";
import { BiCheckCircle, BiCopyAlt } from "react-icons/bi";

const CodeBlock = ({ name, code, language }) => {
    const { theme } = useContext(ThemeContext)
    const [copy, setCopy] = useState(false)
    return (
        <section className='shadow-md pt-2 codeblock-transition'>
            <article className='flex justify-between items-center bg-corporative rounded-t-lg w-full min-h-0'>
                <div className='flex items-center bg-[#bd4c86] px-4 py-2 rounded-tl-lg min-h-0'>
                    <span className='text-white text-sm cursor-default'>{name}</span>
                </div>
                <div className='bg-[#bd4c86] px-4 py-2 rounded-tr-lg text-white text-sm cursor-pointer min-h-[36px]'>
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
                                <BiCopyAlt title="Copy to clipboard" className="text-lg select-none" />
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