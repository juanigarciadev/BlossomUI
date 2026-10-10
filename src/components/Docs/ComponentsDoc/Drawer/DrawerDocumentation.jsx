import { useState } from 'react'
import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/Drawer/Drawer.tsx?raw'
import { Drawer } from '../../../UI/Drawer/Drawer'
import { Button } from '../../../UI/Buttons/Button'

const file = 'src/components/UI/Drawer/Drawer.tsx'

const DrawerDemo = ({ side, size = 'md', label }) => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Button onClick={() => setOpen(true)}>{label}</Button>
            <Drawer
                open={open}
                onClose={() => setOpen(false)}
                title='Notifications'
                side={side}
                size={size}
                footer={
                    <>
                        <Button color='secondary' onClick={() => setOpen(false)}>Close</Button>
                        <Button onClick={() => setOpen(false)}>Mark all as read</Button>
                    </>
                }
            >
                <ul className='flex flex-col gap-3'>
                    <li>Your invoice is ready to download.</li>
                    <li>Katherine commented on your project.</li>
                    <li>Two new components were added to the library.</li>
                </ul>
            </Drawer>
        </>
    )
}

const code = (side, size) => `const [open, setOpen] = useState(false)

<Button onClick={() => setOpen(true)}>Open</Button>
<Drawer open={open} onClose={() => setOpen(false)} title='Notifications' side='${side}' size='${size}'>
    ...
</Drawer>`

const DrawerDocumentation = () => {
    return (
        <DocPage title='Drawer' description='A panel that slides in from the side. Like the modal, it traps scroll, closes with Escape and restores focus.'>
            <ComponentSource source={source} file={file} />

            <Variant title='Right' description='The default side, good for details and notifications.' file={file} code={code('right', 'md')}>
                <DrawerDemo side='right' label='Open right drawer' />
            </Variant>

            <Variant title='Left' description='Use it for navigation or filters.' file={file} code={code('left', 'sm')}>
                <DrawerDemo side='left' size='sm' label='Open left drawer' />
            </Variant>

            <Variant title='Large' description='Sizes are sm, md and lg.' file={file} code={code('right', 'lg')}>
                <DrawerDemo side='right' size='lg' label='Open large drawer' />
            </Variant>
        </DocPage>
    )
}

export default DrawerDocumentation
