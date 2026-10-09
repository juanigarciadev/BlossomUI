import { useState } from 'react'
import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/Stepper/Stepper.tsx?raw'
import { Stepper, StepperProgress } from '../../../UI/Stepper/Stepper'
import { Button } from '../../../UI/Buttons/Button'

const file = 'src/components/UI/Stepper/Stepper.tsx'

const steps = [{ title: 'Account' }, { title: 'Details' }, { title: 'Confirm' }]

const detailed = [
    { title: 'Create your account', description: 'Sign up with your email address.' },
    { title: 'Fill in your profile', description: 'Tell us a little bit about yourself.' },
    { title: 'Start building', description: 'Copy your first component.' },
]

const Controls = ({ current, setCurrent, total }) => (
    <div className='flex gap-2'>
        <Button color='secondary' disabled={current === 0} onClick={() => setCurrent((prev) => prev - 1)}>Back</Button>
        <Button color='default' disabled={current === total} onClick={() => setCurrent((prev) => prev + 1)}>{current >= total - 1 ? 'Finish' : 'Next'}</Button>
    </div>
)

const HorizontalDemo = () => {
    const [current, setCurrent] = useState(1)
    return (
        <div className='flex w-full flex-col gap-6'>
            <Stepper steps={steps} current={current} onStepClick={setCurrent} />
            <Controls current={current} setCurrent={setCurrent} total={steps.length} />
        </div>
    )
}

const VerticalDemo = () => {
    const [current, setCurrent] = useState(1)
    return (
        <div className='flex w-full flex-col gap-6'>
            <Stepper steps={detailed} current={current} orientation='vertical' onStepClick={setCurrent} />
            <Controls current={current} setCurrent={setCurrent} total={detailed.length} />
        </div>
    )
}

const ProgressDemo = () => {
    const [current, setCurrent] = useState(1)
    return (
        <div className='flex w-full flex-col gap-6'>
            <StepperProgress total={4} current={current} label='Shipping details' />
            <div className='flex gap-2'>
                <Button color='secondary' disabled={current === 0} onClick={() => setCurrent((prev) => prev - 1)}>Back</Button>
                <Button color='default' disabled={current === 3} onClick={() => setCurrent((prev) => prev + 1)}>Next</Button>
            </div>
        </div>
    )
}

const horizontalCode = `const steps = [{ title: 'Account' }, { title: 'Details' }, { title: 'Confirm' }]
const [current, setCurrent] = useState(1)

<Stepper steps={steps} current={current} onStepClick={setCurrent} />

<button onClick={() => setCurrent((prev) => prev - 1)}>Back</button>
<button onClick={() => setCurrent((prev) => prev + 1)}>Next</button>`

const verticalCode = `const steps = [
  { title: 'Create your account', description: 'Sign up with your email address.' },
  { title: 'Fill in your profile', description: 'Tell us a little bit about yourself.' },
  { title: 'Start building', description: 'Copy your first component.' },
]

<Stepper steps={steps} current={current} orientation="vertical" onStepClick={setCurrent} />`

const numberedCode = `<Stepper
  orientation="vertical"
  numbered
  current={0}
  steps={[
    { title: 'Install the dependency', description: 'Run the command in your project.', content: <code>npm install react</code> },
    { title: 'Copy the component', description: 'Save it in src/components/ui.' },
    { title: 'Use it', description: 'Import it and pass your props.' },
  ]}
/>`

const progressCode = `<StepperProgress total={4} current={current} label="Shipping details" />`

const StepperDocumentation = () => {
    return (
        <DocPage title='Stepper' description='Guide users through a process that happens in several steps. You control the current step.'>
            <ComponentSource source={source} file={file} />

            <Variant title='Horizontal' description='Completed, current and pending steps. Completed steps are clickable with onStepClick.' file={file} code={horizontalCode}>
                <HorizontalDemo />
            </Variant>

            <Variant title='Vertical' description='Steps with a title and a description, ideal for onboarding.' file={file} code={verticalCode}>
                <VerticalDemo />
            </Variant>

            <Variant
                title='Numbered instructions'
                description='Use numbered to show every step highlighted without tracking progress. Each step can have its own content, like a code block.'
                file={file}
                code={numberedCode}
            >
                <Stepper
                    orientation='vertical'
                    numbered
                    current={0}
                    steps={[
                        { title: 'Install the dependency', description: 'Run the command in your project.', content: <code className='rounded-lg bg-neutral-200 px-2 py-1 text-xs dark:bg-neutral-800'>npm install react</code> },
                        { title: 'Copy the component', description: 'Save it in src/components/ui.' },
                        { title: 'Use it', description: 'Import it and pass your props.' },
                    ]}
                />
            </Variant>

            <Variant title='Progress' description='A compact stepper made of segments.' file={file} code={progressCode}>
                <ProgressDemo />
            </Variant>
        </DocPage>
    )
}

export default StepperDocumentation
