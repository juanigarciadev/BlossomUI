import { useState } from 'react'
import { Copy, Download, Pencil, Share2, Trash2 } from 'lucide-react'
import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/ContextMenu/ContextMenu.tsx?raw'
import { ContextMenu } from '../../../UI/ContextMenu/ContextMenu'

const file = 'src/components/UI/ContextMenu/ContextMenu.tsx'

const area = 'grid h-40 w-full max-w-md place-items-center rounded-xl border border-dashed border-neutral-300 px-4 text-center text-sm text-neutral-500 dark:border-neutral-600'

const FileDemo = () => {
    const [last, setLast] = useState('Nothing yet')
    const items = [
        { id: 'rename', label: 'Rename', icon: <Pencil size={16} />, shortcut: 'F2', onSelect: () => setLast('Rename') },
        { id: 'copy', label: 'Copy link', icon: <Copy size={16} />, shortcut: 'Ctrl+C', onSelect: () => setLast('Copy link') },
        { id: 'share', label: 'Share', icon: <Share2 size={16} />, onSelect: () => setLast('Share') },
        { id: 'download', label: 'Download', icon: <Download size={16} />, disabled: true },
        { id: 'delete', label: 'Delete', icon: <Trash2 size={16} />, danger: true, separator: true, onSelect: () => setLast('Delete') },
    ]
    return (
        <div className='flex w-full max-w-md flex-col gap-3'>
            <ContextMenu label='File actions' items={items}>
                <div className={area}>Right click here (or long press on a phone)</div>
            </ContextMenu>
            <p className='text-sm text-neutral-500'>Last action: {last}</p>
        </div>
    )
}

const fileCode = `<ContextMenu
  label="File actions"
  items={[
    { id: 'rename', label: 'Rename', icon: <Pencil size={16} />, shortcut: 'F2', onSelect: rename },
    { id: 'copy', label: 'Copy link', icon: <Copy size={16} />, shortcut: 'Ctrl+C', onSelect: copy },
    { id: 'share', label: 'Share', icon: <Share2 size={16} />, onSelect: share },
    { id: 'download', label: 'Download', icon: <Download size={16} />, disabled: true },
    { id: 'delete', label: 'Delete', icon: <Trash2 size={16} />, danger: true, separator: true, onSelect: remove },
  ]}
>
  <div className="h-40 ...">Right click here</div>
</ContextMenu>`

const ContextMenuDocumentation = () => {
    return (
        <DocPage title='Context menu' description='A menu that opens at the pointer with a right click. On a phone a long press opens it, and from the keyboard the context menu key or Shift + F10 do.'>
            <ComponentSource source={source} file={file} />

            <Variant title='Default' description='Wrap any content. Items can have an icon, a shortcut hint, be disabled or dangerous. Use the arrow keys, Enter and Escape in the menu.' file={file} code={fileCode}>
                <FileDemo />
            </Variant>

            <Variant title='Around a card' description='The area keeps its own layout, so it can wrap any element: a card, a table row or an image.' file={file}>
                <ContextMenu
                    label='Photo actions'
                    items={[
                        { id: 'open', label: 'Open in new tab' },
                        { id: 'copy', label: 'Copy image' },
                        { id: 'save', label: 'Save as…', separator: true },
                    ]}
                >
                    <div className='flex w-64 flex-col gap-2 rounded-xl border border-neutral-300 bg-neutral-200 bg-opacity-40 p-4 dark:border-neutral-600 dark:bg-neutral-800'>
                        <div className='h-24 rounded-lg bg-gradient-to-br from-pink-300 to-purple-400' />
                        <span className='text-sm font-medium text-neutral-900 dark:text-white'>Spring.jpg</span>
                        <span className='text-xs text-neutral-500'>Right click to see the options</span>
                    </div>
                </ContextMenu>
            </Variant>

            <Variant title='Disabled' description='`disabled` leaves the browser menu as it is.' file={file}>
                <ContextMenu disabled items={[{ id: 'a', label: 'Never shown' }]}>
                    <div className={area}>The browser menu opens here</div>
                </ContextMenu>
            </Variant>

            <Variant title='Custom color' description='Use `color` for the focus ring of the area. Any CSS color works. Without it the component uses the brand color `--blossom-accent`, which is pink by default (see Brand color in Customization).' file={file}>
                <ContextMenu color='#0f766e' items={[{ id: 'a', label: 'Copy' }, { id: 'b', label: 'Paste' }]}>
                    <div className={area}>Focus me with Tab, then press Shift + F10</div>
                </ContextMenu>
            </Variant>
        </DocPage>
    )
}

export default ContextMenuDocumentation
