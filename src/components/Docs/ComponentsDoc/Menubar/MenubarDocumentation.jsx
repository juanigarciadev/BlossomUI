import { useState } from 'react'
import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/Menubar/Menubar.tsx?raw'
import { Menubar } from '../../../UI/Menubar/Menubar'

const file = 'src/components/UI/Menubar/Menubar.tsx'

const base = [
    {
        id: 'file',
        label: 'File',
        items: [
            { id: 'new', label: 'New file', shortcut: 'Ctrl+N' },
            { id: 'open', label: 'Open…', shortcut: 'Ctrl+O' },
            { id: 'save', label: 'Save', shortcut: 'Ctrl+S', separator: true },
            { id: 'export', label: 'Export as PDF', disabled: true },
            { id: 'quit', label: 'Quit', danger: true, separator: true },
        ],
    },
    {
        id: 'edit',
        label: 'Edit',
        items: [
            { id: 'undo', label: 'Undo', shortcut: 'Ctrl+Z' },
            { id: 'redo', label: 'Redo', shortcut: 'Ctrl+Y' },
            { id: 'copy', label: 'Copy', shortcut: 'Ctrl+C', separator: true },
            { id: 'paste', label: 'Paste', shortcut: 'Ctrl+V' },
        ],
    },
    {
        id: 'help',
        label: 'Help',
        items: [{ id: 'docs', label: 'Documentation' }, { id: 'about', label: 'About' }],
    },
]

const ViewDemo = () => {
    const [grid, setGrid] = useState(true)
    const [rulers, setRulers] = useState(false)
    const [last, setLast] = useState('Nothing yet')
    const menus = [
        {
            id: 'view',
            label: 'View',
            items: [
                { id: 'grid', label: 'Show grid', checked: grid, onSelect: () => { setGrid(!grid); setLast('Show grid') } },
                { id: 'rulers', label: 'Show rulers', checked: rulers, onSelect: () => { setRulers(!rulers); setLast('Show rulers') } },
                { id: 'zoom', label: 'Zoom in', shortcut: 'Ctrl++', separator: true, onSelect: () => setLast('Zoom in') },
            ],
        },
        { id: 'file', label: 'File', items: [{ id: 'save', label: 'Save', shortcut: 'Ctrl+S', onSelect: () => setLast('Save') }] },
    ]
    return (
        <div className='flex flex-col gap-3'>
            <Menubar menus={menus} />
            <p className='text-sm text-neutral-500'>Grid: {grid ? 'on' : 'off'} · Rulers: {rulers ? 'on' : 'off'} · Last action: {last}</p>
        </div>
    )
}

const viewCode = `const [grid, setGrid] = useState(true)

<Menubar
  menus={[
    {
      id: 'view',
      label: 'View',
      items: [
        { id: 'grid', label: 'Show grid', checked: grid, onSelect: () => setGrid(!grid) },
        { id: 'zoom', label: 'Zoom in', shortcut: 'Ctrl++', separator: true },
      ],
    },
  ]}
/>`

const MenubarDocumentation = () => {
    return (
        <DocPage title='Menubar' description='A row of menus like the top of a desktop app: File, Edit, View. Once one is open, hovering or pressing the arrows switches to the next one.'>
            <ComponentSource source={source} file={file} />

            <Variant title='Default' description='Arrow Left and Right move between menus, Arrow Down opens one, Enter chooses and Escape closes it.' file={file}>
                <Menubar menus={base} />
            </Variant>

            <Variant title='Checked items' description='An item with `checked` becomes a checkbox of the menu, for options that are on or off.' file={file} code={viewCode}>
                <ViewDemo />
            </Variant>

            <Variant title='Custom color' description='Use `color` for the focus rings. Any CSS color works. Without it the component uses the brand color `--blossom-accent`, which is pink by default (see Brand color in Customization).' file={file}>
                <Menubar color='#0f766e' menus={base.slice(0, 2)} />
            </Variant>
        </DocPage>
    )
}

export default MenubarDocumentation
