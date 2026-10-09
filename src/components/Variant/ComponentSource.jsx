import { useMemo, useState } from 'react'
import CodeBlock from '@codeBlock'
import EditInGithub from '@editInGithub'
import CompVersionTitle from '../CompVersionTitle/CompVersionTitle'
import { FadeIn } from '../Motion/Motion'
import { Stepper } from '../UI/Stepper/Stepper'
import { getExports, getInterfaces } from '../../utils/parseComponent'

const GITHUB_BASE = 'https://github.com/juanigarciadev/BlossomUI/blob/main/'

const tabClass = (active) =>
    `px-4 py-2 text-sm font-medium border-b-2 -mb-px duration-150 ${active ? 'border-pink-400 text-pink-500' : 'border-transparent text-neutral-500 hover:text-neutral-800 dark:hover:text-white'}`

/**
 * "Get the component" section: explains how to copy the file, shows how to
 * import it, and lets the user switch between its code and its props.
 */
const ComponentSource = ({ source, file }) => {
    const [tab, setTab] = useState('code')

    const fileName = file.split('/').pop()
    const baseName = fileName.replace(/\.tsx?$/, '')
    const names = useMemo(() => getExports(source), [source])
    const interfaces = useMemo(() => getInterfaces(source), [source])
    const importLine = `import { ${names.join(', ')} } from './components/ui/${baseName}'`
    const usesHooks = /from 'react'/.test(source) && /\buse[A-Z]\w*\(/.test(source)

    return (
        <FadeIn as='article'>
            <CompVersionTitle
                title='Get the component'
                paragraph='Blossom UI is not an npm package. Every component is a single file that you copy into your project and own.'
            />

            <div className='pb-6'>
                <Stepper
                    orientation='vertical'
                    numbered
                    current={0}
                    steps={[
                        {
                            title: 'Copy the file',
                            description: (
                                <>
                                    Save the code below as <code className='rounded bg-neutral-200 px-1.5 py-0.5 text-xs dark:bg-neutral-800'>src/components/ui/{fileName}</code>.
                                    {usesHooks && ' It uses React hooks, so in Next.js add "use client" at the top of the file.'}
                                </>
                            ),
                        },
                        {
                            title: 'Import it',
                            description: 'Import the components you need wherever you use them.',
                            content: <CodeBlock name='Import' code={importLine} language='tsx' />,
                        },
                        {
                            title: 'Use it',
                            description: (
                                <>
                                    Every example on this page shows its own usage under <b className='font-medium'>Show code</b>. Props are typed, so your editor will suggest them.
                                </>
                            ),
                        },
                    ]}
                />
            </div>

            <div className='flex flex-wrap items-center justify-between gap-2 border-b border-neutral-200 dark:border-neutral-700'>
                <div role='tablist' className='flex'>
                    <button type='button' role='tab' aria-selected={tab === 'code'} onClick={() => setTab('code')} className={tabClass(tab === 'code')}>Code</button>
                    <button type='button' role='tab' aria-selected={tab === 'props'} onClick={() => setTab('props')} className={tabClass(tab === 'props')}>Props</button>
                </div>
                <div className='pb-2'>
                    <EditInGithub url={GITHUB_BASE + file} />
                </div>
            </div>

            {tab === 'code' ? (
                <CodeBlock name={fileName} code={source} language='tsx' />
            ) : (
                <div className='flex flex-col gap-8 pt-4'>
                    {interfaces.length === 0 && <p className='text-sm text-neutral-500'>This component has no props.</p>}
                    {interfaces.map((entry) => (
                        <section key={entry.name}>
                            <h4 className='font-mono text-sm font-medium text-pink-500'>{entry.name}</h4>
                            {entry.extendsFrom && (
                                <p className='pb-2 text-xs text-neutral-500'>Also accepts every prop of <code>{entry.extendsFrom}</code>.</p>
                            )}
                            {entry.props.length > 0 && (
                                <div className='overflow-x-auto rounded-lg border border-neutral-200 dark:border-neutral-700'>
                                    <table className='w-full min-w-[32rem] text-left text-sm'>
                                        <thead className='bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300'>
                                            <tr>
                                                <th className='px-4 py-2 font-medium'>Prop</th>
                                                <th className='px-4 py-2 font-medium'>Type</th>
                                                <th className='px-4 py-2 font-medium'>Description</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {entry.props.map((prop) => (
                                                <tr key={prop.name} className='border-t border-neutral-200 align-top dark:border-neutral-700'>
                                                    <td className='whitespace-nowrap px-4 py-2 font-mono text-xs'>
                                                        {prop.name}
                                                        {!prop.optional && <span title='Required' className='ml-0.5 text-red-500'>*</span>}
                                                    </td>
                                                    <td className='px-4 py-2 font-mono text-xs text-neutral-600 dark:text-neutral-400'>{prop.type}</td>
                                                    <td className='px-4 py-2 text-neutral-600 dark:text-neutral-300'>{prop.description || '—'}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </section>
                    ))}
                </div>
            )}
        </FadeIn>
    )
}

export default ComponentSource
