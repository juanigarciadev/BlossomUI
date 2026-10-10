import { useEffect, useState } from 'react'
import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/Progress/ProgressBar.tsx?raw'
import { ProgressBar } from '../../../UI/Progress/ProgressBar'

const file = 'src/components/UI/Progress/ProgressBar.tsx'

const sizes = ['sm', 'md', 'lg', 'xl', '2xl']
const colors = ['default', 'red', 'green', 'yellow', 'purple', 'pink']

const UploadDemo = () => {
    const [value, setValue] = useState(0)
    const [running, setRunning] = useState(false)

    useEffect(() => {
        if (!running) return
        const id = setInterval(() => {
            setValue((prev) => {
                if (prev >= 100) {
                    setRunning(false)
                    return 100
                }
                return prev + 5
            })
        }, 150)
        return () => clearInterval(id)
    }, [running])

    const start = () => {
        setValue(0)
        setRunning(true)
    }

    return (
        <div className='flex w-full flex-col gap-4'>
            <ProgressBar value={value} label='Uploading file' showValue color='green' />
            <button type='button' disabled={running} onClick={start} className='w-fit rounded-xl bg-black px-4 py-3 text-sm font-medium text-white hover:bg-neutral-800 disabled:opacity-60 dark:bg-white dark:text-black dark:hover:bg-neutral-200'>
                {running ? 'Uploading...' : 'Start upload'}
            </button>
        </div>
    )
}

const uploadCode = `const [value, setValue] = useState(0)

useEffect(() => {
  const id = setInterval(() => setValue((prev) => Math.min(prev + 5, 100)), 150)
  return () => clearInterval(id)
}, [])

<ProgressBar value={value} label="Uploading file" showValue color="green" />`

const ProgressDocumentation = () => {
    return (
        <DocPage title='Progress' description='Show how far along a task or process is.'>
            <ComponentSource source={source} file={file} />

            <Variant title='Default' description='A bar with the current value.' file={file} previewClassName='flex flex-col gap-4'>
                <ProgressBar value={75} />
            </Variant>

            <Variant title='Sizes' description='Try the five sizes.' file={file} previewClassName='flex flex-col gap-4'>
                {sizes.map((size) => <ProgressBar key={size} value={75} size={size} />)}
            </Variant>

            <Variant title='Colors' description='Use the `color` prop to match the context.' file={file} previewClassName='flex flex-col gap-4'>
                {colors.map((color, i) => <ProgressBar key={color} value={30 + i * 12} color={color} />)}
            </Variant>

            <Variant title='With label and percentage' description='Show information and the percentage above the bar.' file={file} previewClassName='flex flex-col gap-4'>
                <ProgressBar value={45} label='Flowbite' showValue />
                <ProgressBar value={80} label='Tailwind CSS' showValue color='pink' />
            </Variant>

            <Variant title='Percentage inside' description='Show the percentage inside the bar with the big sizes.' file={file} previewClassName='flex flex-col gap-4'>
                <ProgressBar value={45} size='xl' showValueInside />
                <ProgressBar value={80} size='2xl' showValueInside color='purple' />
            </Variant>

            <Variant title='Live' description='The bar animates as the value changes. Start the upload to try it.' file={file} code={uploadCode}>
                <UploadDemo />
            </Variant>
        </DocPage>
    )
}

export default ProgressDocumentation
