import { useMemo, useState } from 'react'
import CodeBlock from '@codeBlock'
import EditInGithub from '@editInGithub'
import { HideCodeIcon, ShowCodeIcon } from '@icons'
import CompVersionTitle from '../CompVersionTitle/CompVersionTitle'
import { extractSource } from '../../utils/extractSource'

const GITHUB_BASE = 'https://github.com/juanigarciadev/BlossomUI/blob/main/'

/**
 * One documented variant of a component: title, live preview and the code.
 *
 * The code can be passed explicitly (`code`) or derived from the component's
 * own source (`source` imported with `?raw` + the `exports` to show), which
 * keeps the docs in sync with what is rendered.
 */
const Variant = ({
    title,
    description,
    children,
    source,
    exports: exportNames,
    code,
    file,
    codeName,
    previewClassName = 'flex flex-wrap gap-4',
}) => {
    const [showCode, setShowCode] = useState(false)

    const snippet = useMemo(
        () => code ?? (source && exportNames ? extractSource(source, exportNames) : ''),
        [code, source, exportNames]
    )

    return (
        <article>
            <CompVersionTitle title={title} paragraph={description} />
            <div className='rounded-xl border border-neutral-200 overflow-hidden dark:border-neutral-700'>
                <section className={`p-6 bg-white w-full overflow-x-auto bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[#222222] dark:bg-[radial-gradient(#333_1px,transparent_1px)] ${previewClassName}`}>
                    {children}
                </section>
                <div className='flex items-center justify-between gap-2 px-3 py-2 border-t border-neutral-200 bg-neutral-50 select-none dark:bg-neutral-900 dark:border-neutral-700 sm:flex-col sm:items-stretch'>
                    <button
                        type='button'
                        aria-expanded={showCode}
                        className='flex items-center justify-center gap-1 text-sm px-3 py-2 rounded-lg hover:bg-neutral-200 duration-200 dark:text-white dark:hover:bg-neutral-800'
                        onClick={() => setShowCode((prev) => !prev)}
                    >
                        {showCode ? <HideCodeIcon /> : <ShowCodeIcon />}
                        {showCode ? 'Hide code' : 'Show code'}
                    </button>
                    {file && <EditInGithub url={GITHUB_BASE + file} />}
                </div>
            </div>
            {showCode && <CodeBlock name={codeName ?? title} code={snippet} language='jsx' />}
        </article>
    )
}

export default Variant
