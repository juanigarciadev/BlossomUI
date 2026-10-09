import CodeBlock from '@codeBlock'
import { Stepper } from '../../UI/Stepper/Stepper'

/** Installation steps shown with the vertical Stepper: a title, an explanation and a code block each. */
const Steps = ({ title, steps }) => (
    <div>
        <h3 className='pb-6 text-4xl font-bold text-neutral-800 dark:text-white'>{title}</h3>
        <div className='pb-8'>
            <Stepper
                orientation='vertical'
                numbered
                current={0}
                steps={steps.map((step) => ({
                    title: step.title,
                    description: step.text,
                    content: <CodeBlock name={step.name} code={step.code} language={step.language} />,
                }))}
            />
        </div>
    </div>
)

export default Steps
