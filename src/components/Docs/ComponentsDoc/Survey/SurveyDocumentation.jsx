import { useState } from 'react'
import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/Survey/Survey.tsx?raw'
import { Survey } from '../../../UI/Survey/Survey'

const file = 'src/components/UI/Survey/Survey.tsx'

const ScoreDemo = () => {
    const [score, setScore] = useState(null)
    return (
        <div className='flex w-full flex-col gap-3'>
            <Survey question='How was your experience?' onSubmit={setScore} />
            <span className='text-sm text-neutral-600 dark:text-neutral-300'>Last score received: {score ?? 'none yet'}</span>
        </div>
    )
}

const scoreCode = `const [score, setScore] = useState<number | null>(null)

<Survey question="How was your experience?" onSubmit={setScore} />`

const SurveyDocumentation = () => {
    return (
        <DocPage title='Survey' description='Ask the user for quick feedback.'>
            <ComponentSource source={source} file={file} />

            <Variant title='Emoji rating' description='Five emojis to rate something. After answering, the user can change the answer or close the survey.' file={file} previewClassName='flex'>
                <Survey question='How happy are you with this recommendation?' />
            </Variant>

            <Variant title='Receiving the answer' description='`onSubmit` gives you the chosen value from 1 to 5.' file={file} code={scoreCode}>
                <ScoreDemo />
            </Variant>

            <Variant title='Custom options' description='Pass your own options and the message shown after answering.' file={file} previewClassName='flex'>
                <Survey
                    question='Was this article helpful?'
                    thanks='Glad to hear it!'
                    options={[
                        { value: 0, emoji: '👎', label: 'Not helpful' },
                        { value: 1, emoji: '👍', label: 'Helpful' },
                    ]}
                />
            </Variant>
            <Variant title='Custom color' description='Use `color` for the background, the text and the focus ring. Any CSS color works. Without it the component uses the brand color `--blossom-accent`, which is pink by default (see Brand color in Customization).' file={file} previewClassName='flex w-full [&>*]:max-w-md'>
                <Survey question='How was your visit?' color='#0f766e' />
            </Variant>

        </DocPage>
    )
}

export default SurveyDocumentation
