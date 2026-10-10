import { Copy, Pencil, Share2, Trash2 } from 'lucide-react'
import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/Dropdown/Dropdown.tsx?raw'
import { Dropdown } from '../../../UI/Dropdown/Dropdown'

const file = 'src/components/UI/Dropdown/Dropdown.tsx'

const items = [
    { id: 'edit', label: 'Edit' },
    { id: 'duplicate', label: 'Duplicate' },
    { id: 'archive', label: 'Archive', disabled: true },
    { id: 'delete', label: 'Delete', danger: true, separator: true },
]

const withIcons = [
    { id: 'edit', label: 'Edit', icon: <Pencil size={16} /> },
    { id: 'copy', label: 'Copy link', icon: <Copy size={16} /> },
    { id: 'share', label: 'Share', icon: <Share2 size={16} /> },
    { id: 'delete', label: 'Delete', icon: <Trash2 size={16} />, danger: true, separator: true },
]

const DropdownDocumentation = () => {
    return (
        <DocPage title='Dropdown' description='A button that opens a menu of actions. Open it with the mouse or with the arrow keys; Escape closes it and returns the focus.'>
            <ComponentSource source={source} file={file} />

            <Variant title='Default' description='Items can be disabled, red or separated from the rest.' file={file}>
                <Dropdown label='Options' items={items} />
            </Variant>

            <Variant title='With icons' description='Add an icon to each item.' file={file}>
                <Dropdown label='Actions' items={withIcons} />
            </Variant>

            <Variant title='Aligned to the end' description='Use `align="end"` when the button is close to the right edge.' file={file}>
                <Dropdown label='Account' items={items} align='end' />
            </Variant>
        </DocPage>
    )
}

export default DropdownDocumentation
