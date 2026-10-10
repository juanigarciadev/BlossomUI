import { useState } from 'react'
import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/Table/Table.tsx?raw'
import { Table } from '../../../UI/Table/Table'
import { Badge } from '../../../UI/Badges/Badge'

const file = 'src/components/UI/Table/Table.tsx'

const rows = [
    { id: '1', name: 'Katherine Hoffman', role: 'Designer', status: 'Active', projects: 12 },
    { id: '2', name: 'Samuel Torres', role: 'Developer', status: 'Away', projects: 8 },
    { id: '3', name: 'Lucia Fernandez', role: 'Product', status: 'Active', projects: 21 },
    { id: '4', name: 'Martin Pereyra', role: 'Developer', status: 'Offline', projects: 3 },
]

const colors = { Active: 'green', Away: 'yellow', Offline: 'default' }

const columns = [
    { key: 'name', header: 'Name', sortable: true },
    { key: 'role', header: 'Role', sortable: true },
    { key: 'status', header: 'Status', render: (row) => <Badge color={colors[row.status]} rounded>{row.status}</Badge> },
    { key: 'projects', header: 'Projects', sortable: true, align: 'right' },
]

const rowKey = (row) => row.id

const SelectableDemo = () => {
    const [selected, setSelected] = useState([])
    return (
        <div className='flex w-full flex-col gap-3'>
            <Table columns={columns} rows={rows} rowKey={rowKey} selectable onSelectionChange={setSelected} />
            <p className='text-sm text-neutral-500'>{selected.length} selected</p>
        </div>
    )
}

const TableDocumentation = () => {
    return (
        <DocPage title='Table' description='Display data in rows and columns. It is generic, so the columns and the cell renderers are typed from your rows.'>
            <ComponentSource source={source} file={file} />

            <Variant title='Default' description='Sortable columns show an arrow and use `aria-sort`. Press a header again to reverse or clear the order.' file={file} previewClassName='flex w-full' code={`const columns = [
    { key: 'name', header: 'Name', sortable: true },
    { key: 'role', header: 'Role', sortable: true },
    { key: 'projects', header: 'Projects', sortable: true, align: 'right' },
]

<Table columns={columns} rows={rows} rowKey={(row) => row.id} />`}>
                <Table columns={columns} rows={rows} rowKey={rowKey} caption='Team members' />
            </Variant>

            <Variant title='Striped' description='Alternate the background of the rows.' file={file} previewClassName='flex w-full'>
                <Table columns={columns} rows={rows} rowKey={rowKey} striped />
            </Variant>

            <Variant title='Selectable' description='Add checkboxes and listen to the selection with `onSelectionChange`.' file={file} previewClassName='flex w-full' code={`const [selected, setSelected] = useState([])

<Table columns={columns} rows={rows} rowKey={(row) => row.id} selectable onSelectionChange={setSelected} />`}>
                <SelectableDemo />
            </Variant>

            <Variant title='Empty' description='Pass any node in `empty` for the case without rows.' file={file} previewClassName='flex w-full'>
                <Table columns={columns} rows={[]} rowKey={rowKey} empty='No members yet' />
            </Variant>
        </DocPage>
    )
}

export default TableDocumentation
