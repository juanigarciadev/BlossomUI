import { useContext, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { ThemeContext } from '../../context/ThemeContext'
import reactElementToJSXString from 'react-element-to-jsx-string'
import CodeBlock from '@codeBlock'
import EditInGithub from '@editInGithub'
import { HideCodeIcon, ShowCodeIcon } from '@icons'
import CompVersionTitle from '../CompVersionTitle/CompVersionTitle'
import { FadeIn } from '../Motion/Motion'

const GITHUB_BASE = 'https://github.com/juanigarciadev/BlossomUI/blob/main/'

// Usage example generated from the elements that are rendered in the preview,
// so the code shown is always the code that produced what the user sees.
const toUsage = (children) =>
    [].concat(children)
        .flat()
        .filter(Boolean)
        .map((child) =>
            typeof child === 'object'
                ? reactElementToJSXString(child, {
                    useBooleanShorthand: true,
                    maxInlineAttributesLineLength: 90,
                    filterProps: (value, key) => key !== 'key',
                    functionValue: () => '() => {}',
                })
                : String(child)
        )
        .join('\n')

/**
 * One documented variant of a component: title, live preview and its usage code.
 *
 * The code is generated from `children`. Use `code` to override it, for example
 * when the example needs state that cannot be printed from the elements.
 */
const Variant = ({
    title,
    description,
    children,
    code,
    file,
    codeName,
    previewClassName = 'flex flex-wrap gap-4',
}) => {
    const [showCode, setShowCode] = useState(false)
    // Theme of this preview only: null follows the page.
    const { theme: pageTheme } = useContext(ThemeContext) ?? {}
    const [override, setOverride] = useState(null)
    const effective = override ?? (pageTheme === 'dark' ? 'dark' : 'light')

    const snippet = showCode ? (code ?? toUsage(children)) : ''

    return (
        <FadeIn as='article'>
            <CompVersionTitle title={title} paragraph={description} />
            <div className='rounded-xl border border-neutral-200 overflow-hidden dark:border-neutral-700'>
                <section className={`${override ?? ''} p-6 bg-white text-neutral-900 dark:text-white w-full overflow-x-auto bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[#222222] dark:bg-[radial-gradient(#333_1px,transparent_1px)] ${previewClassName}`}>
                    {children}
                </section>
                <div className='flex items-center justify-between gap-2 px-3 py-2 border-t border-neutral-200 bg-neutral-50 select-none dark:bg-neutral-900 dark:border-neutral-700 sm:flex-col sm:items-stretch'>
                    <button
                        type='button'
                        aria-expanded={showCode}
                        className='flex items-center justify-center gap-1 text-sm px-3 py-2 rounded-xl hover:bg-neutral-200 duration-200 dark:text-white dark:hover:bg-neutral-800'
                        onClick={() => setShowCode((prev) => !prev)}
                    >
                        {showCode ? <HideCodeIcon /> : <ShowCodeIcon />}
                        {showCode ? 'Hide code' : 'Show code'}
                    </button>
                    <div className='flex items-center gap-2 sm:flex-col sm:items-stretch'>
                        <button
                            type='button'
                            aria-pressed={override !== null}
                            aria-label={`Preview in ${effective === 'dark' ? 'light' : 'dark'} mode`}
                            title={override ? 'Click again to follow the page theme' : undefined}
                            className={`flex items-center justify-center gap-1 text-sm px-3 py-2 rounded-xl hover:bg-neutral-200 duration-200 dark:text-white dark:hover:bg-neutral-800 ${override ? 'bg-neutral-200 dark:bg-neutral-800' : ''}`}
                            onClick={() => setOverride(override === null ? (effective === 'dark' ? 'light' : 'dark') : null)}
                        >
                            {effective === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                            {override ? `${override === 'dark' ? 'Dark' : 'Light'} preview` : effective === 'dark' ? 'Light preview' : 'Dark preview'}
                        </button>
                        {file && <EditInGithub url={GITHUB_BASE + file} />}
                    </div>
                </div>
            </div>
            {showCode && <CodeBlock name={codeName ?? title} code={snippet} language='jsx' />}
        </FadeIn>
    )
}

export default Variant
