import { useState, useContext, useRef, useEffect } from "react";
// The light build only ships the languages that are registered below, which keeps the bundle small.
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/light";
import typescript from "react-syntax-highlighter/dist/esm/languages/hljs/typescript";
import javascript from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import xml from "react-syntax-highlighter/dist/esm/languages/hljs/xml";
import bash from "react-syntax-highlighter/dist/esm/languages/hljs/bash";
import css from "react-syntax-highlighter/dist/esm/languages/hljs/css";
import atomOneDark from "react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark";
import atomOneLight from "react-syntax-highlighter/dist/esm/styles/hljs/atom-one-light";
import { ThemeContext } from "../../context/ThemeContext";
import { Check, Copy, ChevronDown, ChevronUp } from "lucide-react";

SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("javascript", javascript);
SyntaxHighlighter.registerLanguage("xml", xml);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("css", css);

const COLLAPSE_AFTER_LINES = 18
const MONO = "ui-monospace, SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace"

const LANGUAGE_LABELS = { javascript: 'JSX', jsx: 'JSX', tsx: 'TSX', typescript: 'TS', bash: 'Shell', css: 'CSS', html: 'HTML' }

const toolButton = 'flex items-center gap-1 px-3 py-2 text-white text-sm select-none hover:bg-[#a8416f] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white'

const CodeBlock = ({ name, code, language }) => {
    const { theme } = useContext(ThemeContext)
    const [copy, setCopy] = useState(false)
    const [expanded, setExpanded] = useState(false)
    const timeout = useRef()

    useEffect(() => () => clearTimeout(timeout.current), [])

    const lineCount = code.split('\n').length
    const collapsible = lineCount > COLLAPSE_AFTER_LINES
    const collapsed = collapsible && !expanded
    const showNumbers = language !== 'bash' && lineCount > 3
    // highlight.js parses a leading '<' as a comparison in JS and skips the first tag, so markup snippets use the XML grammar
    const highlightLanguage = language === 'tsx' ? 'typescript' : (language === 'javascript' || language === 'jsx') && code.trimStart().startsWith('<') ? 'xml' : language

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code)
            setCopy(true)
            clearTimeout(timeout.current)
            timeout.current = setTimeout(() => setCopy(false), 1800)
        } catch {
            // Clipboard unavailable (insecure context or denied permission)
        }
    }

    return (
        <section className='codeblock-transition mt-3 w-full min-w-0 max-w-full overflow-hidden rounded-xl border border-neutral-200 shadow-md dark:border-neutral-700'>
            <header className='flex items-stretch justify-between bg-corporative'>
                <div className='flex items-center gap-2 bg-[#bd4c86] px-4 py-2'>
                    <span className='text-white text-sm cursor-default'>{name}</span>
                    <span className='rounded-xl bg-white/20 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-white'>
                        {LANGUAGE_LABELS[language] ?? language}
                    </span>
                </div>
                <div className='flex items-stretch bg-[#bd4c86]'>
                    <button
                        type='button'
                        onClick={handleCopy}
                        aria-label='Copy code to clipboard'
                        className={`${toolButton} min-w-[92px] justify-center`}
                    >
                        {copy ? (
                            <>
                                <Check size={16} />
                                <span>Copied!</span>
                            </>
                        ) : (
                            <>
                                <Copy size={16} />
                                <span>Copy</span>
                            </>
                        )}
                    </button>
                </div>
            </header>

            <div className='relative'>
                <div className={`code-scroll overflow-x-auto ${collapsed ? 'max-h-96 overflow-y-hidden' : ''}`}>
                    <SyntaxHighlighter
                        language={highlightLanguage}
                        style={theme === "dark" ? atomOneDark : atomOneLight}
                        showLineNumbers={showNumbers}
                        lineNumberStyle={{ minWidth: '2.25em', paddingRight: '1em', opacity: 0.4, userSelect: 'none' }}
                        codeTagProps={{ style: { fontFamily: MONO } }}
                        customStyle={{ margin: 0, padding: '1rem', width: 'max-content', minWidth: '100%', overflow: 'visible', fontSize: '0.85rem', lineHeight: 1.6, borderRadius: 0, background: theme === "dark" ? '#1e1f24' : '#fafafa' }}
                    >
                        {code}
                    </SyntaxHighlighter>
                </div>

                {collapsed && (
                    <div className='pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#fafafa] to-transparent dark:from-[#1e1f24]' />
                )}
            </div>

            {collapsible && (
                <button
                    type='button'
                    onClick={() => setExpanded((prev) => !prev)}
                    aria-expanded={expanded}
                    className='flex w-full items-center justify-center gap-1 border-t border-neutral-200 bg-neutral-50 py-2 text-sm text-neutral-600 hover:text-corporative duration-200 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:text-corporative'
                >
                    {expanded ? <><ChevronUp size={18} />Show less</> : <><ChevronDown size={18} />Show all {lineCount} lines</>}
                </button>
            )}
        </section>
    )
}

export default CodeBlock
