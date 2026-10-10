import { useState } from 'react'
import { Home, Settings, User } from 'lucide-react'
import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/Tabs/Tabs.tsx?raw'
import { Tabs } from '../../../UI/Tabs/Tabs'

const file = 'src/components/UI/Tabs/Tabs.tsx'

const tabs = [
    { id: 'profile', label: 'Profile', content: 'Your public profile, with your name and avatar.' },
    { id: 'security', label: 'Security', content: 'Change your password and manage active sessions.' },
    { id: 'billing', label: 'Billing', content: 'Plans, invoices and payment methods.' },
    { id: 'api', label: 'API', content: 'Not available on your plan.', disabled: true },
]

const withIcons = [
    { id: 'home', label: 'Home', icon: <Home size={16} />, content: 'The start page of your account.' },
    { id: 'users', label: 'Users', icon: <User size={16} />, content: 'People that can access this workspace.' },
    { id: 'settings', label: 'Settings', icon: <Settings size={16} />, content: 'Workspace preferences.' },
]

const ControlledDemo = () => {
    const [value, setValue] = useState('security')
    return (
        <div className='flex w-full flex-col gap-3'>
            <Tabs tabs={tabs} value={value} onChange={setValue} variant='pills' />
            <p className='text-sm text-neutral-500'>Selected tab: <b className='text-neutral-900 dark:text-white'>{value}</b></p>
        </div>
    )
}

const TabsDocumentation = () => {
    return (
        <DocPage title='Tabs' description='Organize content in panels and show one at a time. Use the arrow keys, Home and End to move between tabs.'>
            <ComponentSource source={source} file={file} />

            <Variant title='Underline' description='A line marks the active tab. Disabled tabs are skipped by the keyboard.' file={file} previewClassName='flex w-full'>
                <Tabs tabs={tabs} />
            </Variant>

            <Variant title='Pills' description='The active tab is filled with the accent color.' file={file} previewClassName='flex w-full'>
                <Tabs tabs={tabs} variant='pills' />
            </Variant>

            <Variant title='Boxed' description='Tabs inside a container, like a segmented control.' file={file} previewClassName='flex w-full'>
                <Tabs tabs={tabs} variant='boxed' />
            </Variant>

            <Variant title='With icons' description='Pass an icon in each tab and use `fullWidth` to share the space.' file={file} previewClassName='flex w-full'>
                <Tabs tabs={withIcons} fullWidth />
            </Variant>

            <Variant
                title='Controlled'
                description='Use `value` and `onChange` when you need to know or set the selected tab.'
                file={file}
                previewClassName='flex w-full'
                code={`const [value, setValue] = useState('security')

<Tabs tabs={tabs} value={value} onChange={setValue} variant='pills' />`}
            >
                <ControlledDemo />
            </Variant>
            <Variant
                title='Keep mounted'
                description='By default only the panel of the selected tab exists. With `keepMounted` the others stay in the page, hidden, so what the user typed is still there when they come back.'
                file={file}
                previewClassName='flex w-full'
            >
                <Tabs
                    keepMounted
                    tabs={[
                        { id: 'draft', label: 'Draft', content: <textarea className='w-full rounded-xl border border-neutral-300 bg-transparent p-3 text-sm dark:border-neutral-700' placeholder='Write something, switch tab and come back' /> },
                        { id: 'preview', label: 'Preview', content: 'Your text is still in the draft.' },
                    ]}
                />
            </Variant>

            <Variant title='Custom color' description='Use `color` for one instance. Any CSS color works. Without it the component uses the brand color `--blossom-accent`, which is pink by default (see Brand color in Customization).' file={file} previewClassName='flex w-full flex-col gap-6'>
                <Tabs tabs={tabs} color='#0f766e' />
                <Tabs tabs={tabs} variant='pills' color='#7c3aed' />
            </Variant>

        </DocPage>
    )
}

export default TabsDocumentation
