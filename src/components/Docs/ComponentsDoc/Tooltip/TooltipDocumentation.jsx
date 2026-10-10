import { Info } from 'lucide-react'
import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/Tooltip/Tooltip.tsx?raw'
import { Tooltip } from '../../../UI/Tooltip/Tooltip'
import { Button } from '../../../UI/Buttons/Button'

const file = 'src/components/UI/Tooltip/Tooltip.tsx'

const TooltipDocumentation = () => {
    return (
        <DocPage title='Tooltip' description='A short hint that appears on hover and on keyboard focus. It is linked to its trigger with `aria-describedby`.'>
            <ComponentSource source={source} file={file} />

            <Variant title='Default' description='Wrap any element. The tooltip shows on top, and `arrow` points it to the element.' file={file}>
                <Tooltip arrow content='Save your changes'>
                    <Button>Save</Button>
                </Tooltip>
            </Variant>

            <Variant title='Without arrow' description='The arrow is optional: set `arrow` to show it. Without it the tooltip is a plain label.' file={file}>
                <Tooltip content='No arrow here'>
                    <Button color='secondary'>Plain tooltip</Button>
                </Tooltip>
                <Tooltip content='With an arrow' arrow>
                    <Button color='secondary'>Arrow</Button>
                </Tooltip>
            </Variant>

            <Variant title='Placement' description='Choose where it appears with `placement`.' file={file}>
                <Tooltip arrow content='On the top' placement='top'><Button color='secondary'>Top</Button></Tooltip>
                <Tooltip arrow content='At the bottom' placement='bottom'><Button color='secondary'>Bottom</Button></Tooltip>
                <Tooltip arrow content='On the left' placement='left'><Button color='secondary'>Left</Button></Tooltip>
                <Tooltip arrow content='On the right' placement='right'><Button color='secondary'>Right</Button></Tooltip>
            </Variant>

            <Variant title='With an icon' description='Useful next to labels. Make sure the trigger can receive focus.' file={file}>
                <Tooltip arrow content='Your data is encrypted'>
                    <button type='button' aria-label='More information' className='rounded-full p-1 text-neutral-500 outline-none hover:text-pink-500 focus-visible:ring-2 focus-visible:ring-pink-400'>
                        <Info size={18} />
                    </button>
                </Tooltip>
            </Variant>
        </DocPage>
    )
}

export default TooltipDocumentation
