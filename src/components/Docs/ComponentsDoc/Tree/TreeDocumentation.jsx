import { useState } from 'react'
import { File, Folder, FolderOpen } from 'lucide-react'
import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/Tree/Tree.tsx?raw'
import { Tree } from '../../../UI/Tree/Tree'

const file = 'src/components/UI/Tree/Tree.tsx'

const folder = <Folder size={16} className='text-neutral-400' />
const doc = <File size={16} className='text-neutral-400' />

const files = [
    {
        id: 'src',
        label: 'src',
        icon: folder,
        children: [
            {
                id: 'components',
                label: 'components',
                icon: folder,
                children: [
                    { id: 'button', label: 'Button.tsx', icon: doc },
                    { id: 'modal', label: 'Modal.tsx', icon: doc },
                    { id: 'tabs', label: 'Tabs.tsx', icon: doc },
                ],
            },
            { id: 'app', label: 'App.tsx', icon: doc },
            { id: 'main', label: 'main.tsx', icon: doc },
        ],
    },
    { id: 'public', label: 'public', icon: folder, children: [{ id: 'favicon', label: 'favicon.ico', icon: doc }] },
    { id: 'package', label: 'package.json', icon: doc },
    { id: 'readme', label: 'README.md', icon: doc, disabled: true },
]

const categories = [
    { id: 'clothing', label: 'Clothing', children: [{ id: 'shirts', label: 'Shirts' }, { id: 'pants', label: 'Pants' }, { id: 'shoes', label: 'Shoes', children: [{ id: 'sneakers', label: 'Sneakers' }, { id: 'boots', label: 'Boots' }] }] },
    { id: 'home', label: 'Home', children: [{ id: 'kitchen', label: 'Kitchen' }, { id: 'garden', label: 'Garden' }] },
    { id: 'books', label: 'Books' },
]

const wide = 'flex w-full [&>*]:max-w-xs'

const ControlledDemo = () => {
    const [selected, setSelected] = useState('modal')
    const [expanded, setExpanded] = useState(['src', 'components'])
    return (
        <div className='flex w-full max-w-xs flex-col gap-3'>
            <Tree label='Project files' nodes={files} selected={selected} onSelect={setSelected} expanded={expanded} onExpandedChange={setExpanded} />
            <p className='text-sm text-neutral-500'>Selected: {selected} · {expanded.length} open</p>
        </div>
    )
}

const controlledCode = `const [selected, setSelected] = useState('modal')
const [expanded, setExpanded] = useState(['src', 'components'])

<Tree
  label="Project files"
  nodes={files}
  selected={selected}
  onSelect={setSelected}
  expanded={expanded}
  onExpandedChange={setExpanded}
/>`

const TreeDocumentation = () => {
    return (
        <DocPage title='Tree' description='A hierarchy that opens and closes, for files, categories or an organization. It follows the keyboard model of a native tree: arrows to move, open and close, Home and End, Enter to select.'>
            <ComponentSource source={source} file={file} />

            <Variant title='Default' description='Click a node, or use the arrow keys: Right opens or goes into a node, Left closes or goes to the parent, `*` opens every node on the level.' file={file} previewClassName={wide}>
                <Tree label='Project files' nodes={files} defaultExpanded={['src']} defaultSelected='app' />
            </Variant>

            <Variant title='Categories' description='Nodes can be nested as deep as you need. Without `icon` the tree is just text and chevrons.' file={file} previewClassName={wide}>
                <Tree label='Categories' nodes={categories} defaultExpanded={['clothing', 'shoes']} />
            </Variant>

            <Variant title='Controlled' description='`selected`, `onSelect`, `expanded` and `onExpandedChange` keep both states in your own code.' file={file} code={controlledCode}>
                <ControlledDemo />
            </Variant>

            <Variant title='Icons that change' description='A node icon is an element, so you can give a different one to the nodes you want, for example an open folder.' file={file} previewClassName={wide}>
                <Tree label='Folders' defaultExpanded={['a']} nodes={[
                    { id: 'a', label: 'Open folder', icon: <FolderOpen size={16} className='text-neutral-400' />, children: [{ id: 'a1', label: 'Notes.md', icon: doc }] },
                    { id: 'b', label: 'Closed folder', icon: folder, children: [{ id: 'b1', label: 'Hidden.md', icon: doc }] },
                ]} />
            </Variant>

            <Variant title='Custom color' description='Use `color` for the selected node and the focus ring. Any CSS color works. Without it the component uses the brand color `--blossom-accent`, which is pink by default (see Brand color in Customization).' file={file} previewClassName={wide}>
                <Tree label='Categories' nodes={categories} defaultExpanded={['home']} defaultSelected='garden' color='#0f766e' />
            </Variant>
        </DocPage>
    )
}

export default TreeDocumentation
