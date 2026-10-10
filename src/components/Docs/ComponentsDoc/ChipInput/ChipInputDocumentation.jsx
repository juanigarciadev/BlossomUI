import { useState } from 'react'
import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/ChipInput/ChipInput.tsx?raw'
import { ChipInput } from '../../../UI/ChipInput/ChipInput'

const file = 'src/components/UI/ChipInput/ChipInput.tsx'

const email = (chip) => (/^\S+@\S+\.\S+$/.test(chip) ? undefined : 'Enter a valid email')

const ControlledDemo = () => {
    const [tags, setTags] = useState(['react', 'tailwind'])
    return (
        <div className='flex w-full max-w-md flex-col gap-3'>
            <ChipInput label='Tags' value={tags} onChange={setTags} />
            <p className='text-sm text-neutral-500'>{tags.length} tags: {tags.join(', ') || 'none'}</p>
        </div>
    )
}

const ChipInputDocumentation = () => {
    return (
        <DocPage title='Chip input' description='Type a value and press Enter or a comma to turn it into a chip. Backspace removes the last one and pasted lists are split automatically.'>
            <ComponentSource source={source} file={file} />

            <Variant title='Default' description='Duplicates are rejected with a message.' file={file} previewClassName='flex w-full [&>*]:max-w-md'>
                <ChipInput label='Tags' defaultValue={['react', 'tailwind']} hint='Press Enter to add' />
            </Variant>

            <Variant title='Validation' description='`validate` returns an error message to reject a chip.' file={file} previewClassName='flex w-full [&>*]:max-w-md' code={`const email = (chip: string) => (/^\\S+@\\S+\\.\\S+$/.test(chip) ? undefined : 'Enter a valid email')

<ChipInput label='Invite people' placeholder='name@company.com' validate={email} />`}>
                <ChipInput label='Invite people' placeholder='name@company.com' validate={email} />
            </Variant>

            <Variant title='Limit' description='`max` stops accepting chips and shows the counter.' file={file} previewClassName='flex w-full [&>*]:max-w-md'>
                <ChipInput label='Top skills' max={3} defaultValue={['design']} />
            </Variant>

            <Variant
                title='Controlled'
                description='Use `value` and `onChange` to keep the list in your state.'
                file={file}
                code={`const [tags, setTags] = useState(['react', 'tailwind'])

<ChipInput label='Tags' value={tags} onChange={setTags} />`}
            >
                <ControlledDemo />
            </Variant>
        </DocPage>
    )
}

export default ChipInputDocumentation
