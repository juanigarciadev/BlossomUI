import { useEffect, useState } from 'react'
import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/Skeleton/Skeleton.tsx?raw'
import { Skeleton, SkeletonText, SkeletonImage } from '../../../UI/Skeleton/Skeleton'

const file = 'src/components/UI/Skeleton/Skeleton.tsx'

const LoadingDemo = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!loading) return
        const id = setTimeout(() => setLoading(false), 2000)
        return () => clearTimeout(id)
    }, [loading])

    return (
        <div className='flex flex-col gap-4'>
            {loading ? (
                <SkeletonText lines={3} />
            ) : (
                <div className='flex max-w-xs flex-col gap-2 dark:text-white'>
                    <h3 className='font-bold'>Blossom UI</h3>
                    <p className='text-sm text-neutral-600 dark:text-neutral-300'>Free and open source components made with React and Tailwind CSS.</p>
                </div>
            )}
            <button type='button' onClick={() => setLoading(true)} className='w-fit rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-200 dark:border-neutral-600 dark:text-white dark:hover:bg-neutral-800'>
                Reload
            </button>
        </div>
    )
}

const loadingCode = `const [loading, setLoading] = useState(true)

useEffect(() => {
  const id = setTimeout(() => setLoading(false), 2000)
  return () => clearTimeout(id)
}, [])

{loading ? <SkeletonText lines={3} /> : <Article />}`

const SkeletonDocumentation = () => {
    return (
        <DocPage title='Skeleton' description='Placeholders that keep the layout while the content is loading.'>
            <ComponentSource source={source} file={file} />

            <Variant title='Default' description='A skeleton for a title and some lines of text.' file={file}>
                <SkeletonText />
            </Variant>

            <Variant title='Image' description='A skeleton for an image with text next to it.' file={file}>
                <SkeletonImage />
            </Variant>

            <Variant title='Custom' description='Build your own shapes with the Skeleton block and Tailwind sizes.' file={file}>
                <div className='flex items-center gap-4'>
                    <Skeleton className='h-12 w-12' />
                    <div className='flex flex-col gap-2'>
                        <Skeleton className='h-3 w-32' />
                        <Skeleton className='h-3 w-20' />
                    </div>
                </div>
            </Variant>

            <Variant title='Loading state' description='Swap the skeleton for the real content when the data arrives.' file={file} code={loadingCode}>
                <LoadingDemo />
            </Variant>
        </DocPage>
    )
}

export default SkeletonDocumentation
