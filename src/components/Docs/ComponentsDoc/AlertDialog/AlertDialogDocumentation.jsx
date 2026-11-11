import { useState } from 'react'
import { Trash2 } from 'lucide-react'
import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/AlertDialog/AlertDialog.tsx?raw'
import { AlertDialog } from '../../../UI/AlertDialog/AlertDialog'
import { Button } from '../../../UI/Buttons/Button'

const file = 'src/components/UI/AlertDialog/AlertDialog.tsx'

const DeleteDemo = () => {
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [deleted, setDeleted] = useState(false)

    const confirm = () => {
        setLoading(true)
        // Pretends to wait for a server.
        setTimeout(() => {
            setLoading(false)
            setOpen(false)
            setDeleted(true)
        }, 1200)
    }

    return (
        <div className='flex flex-col gap-3'>
            <Button color='red' onClick={() => { setDeleted(false); setOpen(true) }}>Delete project</Button>
            {deleted && <p className='text-sm text-green-700 dark:text-green-400'>The project was deleted.</p>}
            <AlertDialog open={open} onClose={() => setOpen(false)} onConfirm={confirm} loading={loading} tone='danger' title='Delete this project?' confirmLabel='Delete'>
                This will permanently delete the project and all of its files. This action cannot be undone.
            </AlertDialog>
        </div>
    )
}

const deleteCode = `const [open, setOpen] = useState(false)
const [loading, setLoading] = useState(false)

const confirm = async () => {
  setLoading(true)
  await deleteProject()
  setLoading(false)
  setOpen(false)
}

<Button color="red" onClick={() => setOpen(true)}>Delete project</Button>

<AlertDialog
  open={open}
  onClose={() => setOpen(false)}
  onConfirm={confirm}
  loading={loading}
  tone="danger"
  title="Delete this project?"
  confirmLabel="Delete"
>
  This will permanently delete the project and all of its files. This action cannot be undone.
</AlertDialog>`

const Simple = ({ button, tone, title, text, confirmLabel, cancelLabel, color, icon, children }) => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Button color={color} onClick={() => setOpen(true)}>{button}</Button>
            <AlertDialog open={open} onClose={() => setOpen(false)} onConfirm={() => setOpen(false)} tone={tone} title={title} confirmLabel={confirmLabel} cancelLabel={cancelLabel} icon={icon}>
                {text}
                {children}
            </AlertDialog>
        </>
    )
}

const AlertDialogDocumentation = () => {
    return (
        <DocPage title='Alert dialog' description='A dialog that asks the user to confirm something that matters. Unlike Modal it has no close button and does not close when you click outside: the user has to answer. The cancel button gets the focus, so Enter never confirms by mistake.'>
            <ComponentSource source={source} file={file} />

            <Variant title='Destructive action' description='`onConfirm` does the work and you close the dialog yourself. `loading` shows a spinner and blocks the dialog while you wait. Try it.' file={file} code={deleteCode}>
                <DeleteDemo />
            </Variant>

            <Variant title='Tones' description='`tone` changes the icon and the color of the confirm button: `default`, `danger`, `warning` and `success`.' file={file}>
                <Simple button='Default' color='primary' tone='default' title='Sign out?' text='You will need to sign in again to see your projects.' confirmLabel='Sign out' />
                <Simple button='Warning' color='yellow' tone='warning' title='Unsaved changes' text='If you leave now your changes will be lost.' confirmLabel='Leave' cancelLabel='Keep editing' />
                <Simple button='Success' color='green' tone='success' title='Publish the site?' text='It will be visible to everyone with the link.' confirmLabel='Publish' />
            </Variant>

            <Variant title='Custom icon and texts' description='Pass your own `icon` and change the texts of the buttons with `confirmLabel` and `cancelLabel`, for example to translate them.' file={file}>
                <Simple button='Empty trash' color='secondary' tone='danger' icon={<Trash2 size={20} />} title='Vaciar la papelera' text='Se borrarán 24 archivos para siempre.' confirmLabel='Vaciar' cancelLabel='Cancelar' />
            </Variant>

            <Variant title='Content' description='The dialog can hold anything under the title: a list, a link or an extra detail.' file={file}>
                <Simple button='Remove member' color='secondary' tone='danger' title='Remove Ana Martínez?' confirmLabel='Remove'>
                    <ul className='mt-2 list-disc pl-5'>
                        <li>She will lose access to 4 projects.</li>
                        <li>Her open tasks will become unassigned.</li>
                    </ul>
                </Simple>
            </Variant>
        </DocPage>
    )
}

export default AlertDialogDocumentation
