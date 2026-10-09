import { ChevronDown } from 'lucide-react'
import CodeBlock from '@codeBlock'
import { Button } from '../UI/Buttons/Button'
import { FadeIn } from '../Motion/Motion'

const usageCode = `import { Button } from './components/ui/Button'

export default function App() {
  return <Button color="primary">Example button</Button>
}`

const Explanation = () => {
    return (
        <div className='grid grid-cols-2 w-full items-center gap-8 pt-24 pb-24 lg:flex lg:flex-col-reverse lg:items-stretch lg:gap-12 lg:pt-16 lg:pb-0'>
            <FadeIn as='section' className='min-w-0'>
                <CodeBlock name='App.tsx' code={usageCode} language='tsx' />
                <div className='flex w-full justify-center'>
                    <ChevronDown size={30} className='my-4 dark:text-white' />
                </div>
                <div className='flex justify-center'>
                    <Button color='primary'>Example button</Button>
                </div>
            </FadeIn>
            <FadeIn as='section' delay={0.05} className='min-w-0 text-right lg:text-left'>
                <h2 className='text-6xl font-bold text-neutral-800 tracking-tight dark:text-white xs:text-5xl'>Extremely <span className='text-corporative'>easy</span> to use. Just <span className='text-corporative'>copy</span> and <span className='text-corporative'>paste</span>.</h2>
            </FadeIn>
        </div>
    )
}

export default Explanation
