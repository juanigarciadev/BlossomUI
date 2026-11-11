import { useState } from 'react'
import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/TransferList/TransferList.tsx?raw'
import { TransferList } from '../../../UI/TransferList/TransferList'

const file = 'src/components/UI/TransferList/TransferList.tsx'

const permissions = [
    { id: 'read', label: 'Read projects' },
    { id: 'write', label: 'Edit projects' },
    { id: 'delete', label: 'Delete projects' },
    { id: 'invite', label: 'Invite members' },
    { id: 'billing', label: 'See billing' },
    { id: 'export', label: 'Export data' },
    { id: 'admin', label: 'Administrator', disabled: true },
]

const countries = ['Argentina', 'Bolivia', 'Brasil', 'Chile', 'Colombia', 'Ecuador', 'México', 'Paraguay', 'Perú', 'Uruguay', 'Venezuela'].map((name) => ({ id: name.toLowerCase(), label: name }))

const ControlledDemo = () => {
    const [value, setValue] = useState(['read', 'write'])
    return (
        <div className='flex w-full flex-col gap-3'>
            <TransferList items={permissions} value={value} onChange={setValue} />
            <p className='text-sm text-neutral-500'>This role can: {value.length ? value.join(', ') : 'nothing'}</p>
        </div>
    )
}

const controlledCode = `const [value, setValue] = useState(['read', 'write'])

<TransferList items={permissions} value={value} onChange={setValue} />`

const TransferListDocumentation = () => {
    return (
        <DocPage title='Transfer list' description='Two lists to move items between, for example to choose which permissions or columns a role has. Check the items and use the arrows.'>
            <ComponentSource source={source} file={file} />

            <Variant title='Default' description='Check items in a list and press the arrow to move them. The double arrows move everything. Inside a list use the arrow keys, Space to check and Ctrl + A to check all.' file={file}>
                <TransferList items={permissions} defaultValue={['read']} />
            </Variant>

            <Variant title='Searchable' description='`searchable` adds a search field over each list. Checking all in a filtered list only checks what you see.' file={file}>
                <TransferList items={countries} searchable defaultValue={['argentina', 'chile']} />
            </Variant>

            <Variant title='Controlled' description='`value` is the list of ids that are in the right list. `onChange` receives it every time it changes.' file={file} code={controlledCode}>
                <ControlledDemo />
            </Variant>

            <Variant title='Texts' description='`labels` changes every text, for example to translate it.' file={file}>
                <TransferList
                    items={permissions.slice(0, 4)}
                    labels={{ available: 'Disponibles', selected: 'Asignados', empty: 'Sin elementos', count: (checked, total) => `${checked} de ${total} marcados`, moveRight: 'Asignar', moveLeft: 'Quitar', moveAllRight: 'Asignar todos', moveAllLeft: 'Quitar todos' }}
                />
            </Variant>

            <Variant title='Custom color' description='Use `color` for the checks and the focus rings. Any CSS color works. Without it the component uses the brand color `--blossom-accent`, which is pink by default (see Brand color in Customization).' file={file}>
                <TransferList items={permissions.slice(0, 4)} defaultValue={['write']} color='#0f766e' height={160} />
            </Variant>
        </DocPage>
    )
}

export default TransferListDocumentation
