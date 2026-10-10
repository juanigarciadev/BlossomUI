import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/Popover/Popover.tsx?raw'
import { Popover } from '../../../UI/Popover/Popover'
import { Input } from '../../../UI/Forms/Forms'
import { Button } from '../../../UI/Buttons/Button'

const file = 'src/components/UI/Popover/Popover.tsx'

const PopoverDocumentation = () => {
    return (
        <DocPage title='Popover' description='Floating content anchored to a button. It closes with Escape, with a click outside, or when the page scrolls.'>
            <ComponentSource source={source} file={file} />

            <Variant title='Default' description='Any content, with an optional title.' file={file}>
                <Popover trigger='More info' title='About this plan'>
                    Includes unlimited projects, dark mode and community support.
                </Popover>
            </Variant>

            <Variant title='With a form' description='Place inputs and buttons inside.' file={file}>
                <Popover trigger='Invite' title='Invite a teammate' width='w-80'>
                    <div className='flex flex-col gap-3'>
                        <Input placeholder='name@company.com' />
                        <Button>Send invite</Button>
                    </div>
                </Popover>
            </Variant>

            <Variant title='Top and end' description='Change `placement` and `align` to keep it inside the screen.' file={file}>
                <Popover trigger='Opens on top' placement='top' align='end'>
                    It appears above the button, aligned to its right edge.
                </Popover>
            </Variant>
        </DocPage>
    )
}

export default PopoverDocumentation
