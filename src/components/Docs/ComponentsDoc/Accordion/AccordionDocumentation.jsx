import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/Accordion/Accordion.tsx?raw'
import { Accordion } from '../../../UI/Accordion/Accordion'

const file = 'src/components/UI/Accordion/Accordion.tsx'

const items = [
    { id: 'copy', title: 'Is it an npm package?', content: 'No. You copy the file of each component into your project and own the code.' },
    { id: 'dark', title: 'Does it support dark mode?', content: 'Yes, every component includes dark: variants for the class strategy of Tailwind.' },
    { id: 'ts', title: 'Is it written in TypeScript?', content: 'Yes, with typed props and exported interfaces.' },
    { id: 'pro', title: 'Is there a paid plan?', content: 'Not available.', disabled: true },
]

const AccordionDocumentation = () => {
    return (
        <DocPage title='Accordion' description='Show and hide sections of content. Headers are buttons, so they work with the keyboard and screen readers.'>
            <ComponentSource source={source} file={file} />

            <Variant title='Bordered' description='Only one item is open at a time by default.' file={file} previewClassName='flex w-full'>
                <Accordion items={items} defaultOpen={['copy']} />
            </Variant>

            <Variant title='Multiple' description='Use `multiple` to let several items stay open.' file={file} previewClassName='flex w-full'>
                <Accordion items={items} multiple defaultOpen={['copy', 'dark']} />
            </Variant>

            <Variant title='Flush' description='Without side borders, ideal inside a card or a page section.' file={file} previewClassName='flex w-full'>
                <Accordion items={items} variant='flush' />
            </Variant>

            <Variant title='Separated' description='Every item is its own card.' file={file} previewClassName='flex w-full'>
                <Accordion items={items} variant='separated' />
            </Variant>
        </DocPage>
    )
}

export default AccordionDocumentation
