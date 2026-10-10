import { useState } from 'react'
import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/Modal/Modal.tsx?raw'
import { Modal } from '../../../UI/Modal/Modal'
import { Button } from '../../../UI/Buttons/Button'
import { Input } from '../../../UI/Forms/Forms'

const file = 'src/components/UI/Modal/Modal.tsx'

const DefaultDemo = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Button color='default' onClick={() => setOpen(true)}>Open modal</Button>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                title='Terms of service'
                footer={<><Button color='secondary' onClick={() => setOpen(false)}>Decline</Button><Button color='default' onClick={() => setOpen(false)}>I accept</Button></>}
            >
                By using Blossom UI you agree to copy, paste and customize every component as much as you want. Press Escape or click outside to close.
            </Modal>
        </>
    )
}

const defaultCode = `const [open, setOpen] = useState(false)

<Button onClick={() => setOpen(true)}>Open modal</Button>

<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="Terms of service"
  footer={
    <>
      <Button color="secondary" onClick={() => setOpen(false)}>Decline</Button>
      <Button color="default" onClick={() => setOpen(false)}>I accept</Button>
    </>
  }
>
  By using Blossom UI you agree to copy, paste and customize every component.
</Modal>`

const ConfirmDemo = () => {
    const [open, setOpen] = useState(false)
    const [deleted, setDeleted] = useState(false)
    return (
        <div className='flex flex-col items-start gap-3'>
            <Button color='red' disabled={deleted} onClick={() => setOpen(true)}>{deleted ? 'Project deleted' : 'Delete project'}</Button>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                size='sm'
                title='Are you sure?'
                footer={<><Button color='secondary' onClick={() => setOpen(false)}>Cancel</Button><Button color='red' onClick={() => { setDeleted(true); setOpen(false) }}>Delete</Button></>}
            >
                This action cannot be undone. The project will be deleted permanently.
            </Modal>
        </div>
    )
}

const confirmCode = `const [open, setOpen] = useState(false)

<Modal
  open={open}
  onClose={() => setOpen(false)}
  size="sm"
  title="Are you sure?"
  footer={
    <>
      <Button color="secondary" onClick={() => setOpen(false)}>Cancel</Button>
      <Button color="red" onClick={handleDelete}>Delete</Button>
    </>
  }
>
  This action cannot be undone.
</Modal>`

const FormDemo = () => {
    const [open, setOpen] = useState(false)
    const [email, setEmail] = useState('')
    const [sent, setSent] = useState(false)

    const submit = (event) => {
        event.preventDefault()
        setSent(true)
        setOpen(false)
    }

    return (
        <div className='flex flex-col items-start gap-3'>
            <Button onClick={() => { setSent(false); setOpen(true) }}>Subscribe</Button>
            {sent && <span className='text-sm text-green-700 dark:text-green-400'>Subscribed with {email}!</span>}
            <Modal open={open} onClose={() => setOpen(false)} title='Join the newsletter'>
                <form onSubmit={submit} className='flex flex-col gap-4'>
                    <Input label='Email' type='email' required placeholder='you@example.com' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <div className='flex justify-end gap-2'>
                        <Button color='secondary' onClick={() => setOpen(false)}>Cancel</Button>
                        <Button type='submit' color='default'>Subscribe</Button>
                    </div>
                </form>
            </Modal>
        </div>
    )
}

const formCode = `const [open, setOpen] = useState(false)
const [email, setEmail] = useState('')

<Modal open={open} onClose={() => setOpen(false)} title="Join the newsletter">
  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
    <Input label="Email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
    <Button type="submit" color="default">Subscribe</Button>
  </form>
</Modal>`

const ModalDocumentation = () => {
    return (
        <DocPage title='Modal' description='A dialog that closes with Escape or by clicking outside, locks the page scroll and gives the focus back when it closes.'>
            <ComponentSource source={source} file={file} />

            <Variant title='Default' description='A dialog with a title, content and actions.' file={file} code={defaultCode}>
                <DefaultDemo />
            </Variant>

            <Variant title='Confirmation' description='Ask the user to confirm a destructive action.' file={file} code={confirmCode}>
                <ConfirmDemo />
            </Variant>

            <Variant title='With form' description='Collect information without leaving the page.' file={file} code={formCode}>
                <FormDemo />
            </Variant>
        </DocPage>
    )
}

export default ModalDocumentation
