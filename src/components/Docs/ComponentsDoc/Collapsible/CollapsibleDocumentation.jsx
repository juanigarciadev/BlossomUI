import { useState } from 'react'
import { Settings } from 'lucide-react'
import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/Collapsible/Collapsible.tsx?raw'
import { Collapsible } from '../../../UI/Collapsible/Collapsible'
import { Button } from '../../../UI/Buttons/Button'

const file = 'src/components/UI/Collapsible/Collapsible.tsx'

const wide = 'flex w-full [&>*]:max-w-lg'

const ControlledDemo = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='flex w-full max-w-lg flex-col gap-3'>
            <Collapsible title='Advanced options' open={open} onOpenChange={setOpen}>
                Rebuild the index every night, keep the last 30 snapshots and send an email when a job fails.
            </Collapsible>
            <Button color='secondary' onClick={() => setOpen(!open)}>{open ? 'Close it' : 'Open it'} from outside</Button>
        </div>
    )
}

const controlledCode = `const [open, setOpen] = useState(false)

<Collapsible title="Advanced options" open={open} onOpenChange={setOpen}>
  Rebuild the index every night...
</Collapsible>

<Button onClick={() => setOpen(!open)}>Toggle from outside</Button>`

const CollapsibleDocumentation = () => {
    return (
        <DocPage title='Collapsible' description='One section that opens and closes with a smooth height animation. Use it for a single block of extra details; for several related ones use the Accordion.'>
            <ComponentSource source={source} file={file} />

            <Variant title='Default' description='Press the title to show the content. The content stays out of the tab order while it is closed.' file={file} previewClassName={wide}>
                <Collapsible title='Shipping details' description='Delivery in 3 to 5 days'>
                    Orders over $50 ship for free. You will receive a tracking number by email as soon as the package leaves our warehouse.
                </Collapsible>
            </Variant>

            <Variant title='Open by default' description='`defaultOpen` starts it open.' file={file} previewClassName={wide}>
                <Collapsible title='What is included?' defaultOpen>
                    The source of every component, the types, a dark mode and the documentation. You copy the file, you own it.
                </Collapsible>
            </Variant>

            <Variant title='With an icon' description='`icon` is shown before the title.' file={file} previewClassName={wide}>
                <Collapsible title='Settings' icon={<Settings size={18} />}>
                    Language, theme and notifications.
                </Collapsible>
            </Variant>

            <Variant title='Plain' description='`variant="plain"` removes the frame, to place it inside a card or a page.' file={file} previewClassName={wide}>
                <Collapsible variant='plain' title='Show more'>
                    This variant has no border and no side padding, so it lines up with the text around it.
                </Collapsible>
            </Variant>

            <Variant title='Controlled' description='`open` and `onOpenChange` let you open it from your own code.' file={file} code={controlledCode}>
                <ControlledDemo />
            </Variant>

            <Variant title='Disabled' description='A disabled collapsible cannot be opened.' file={file} previewClassName={wide}>
                <Collapsible title='Locked section' disabled>
                    You cannot see this.
                </Collapsible>
            </Variant>

            <Variant title='Custom color' description='Use `color` for the focus ring. Any CSS color works. Without it the component uses the brand color `--blossom-accent`, which is pink by default (see Brand color in Customization).' file={file} previewClassName={wide}>
                <Collapsible title='Focus me with Tab' color='#0f766e'>
                    The focus ring uses the color you pass.
                </Collapsible>
            </Variant>
        </DocPage>
    )
}

export default CollapsibleDocumentation
