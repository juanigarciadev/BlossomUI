import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/Toasts/Toast.tsx?raw'
import { Toast, Toaster, useToasts } from '../../../UI/Toasts/Toast'

const file = 'src/components/UI/Toasts/Toast.tsx'

const buttonClass = 'rounded-xl border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-200 dark:border-neutral-600 dark:text-white dark:hover:bg-neutral-800'

const StackDemo = () => {
    const { toasts, toast, dismiss } = useToasts()

    return (
        <div className='flex w-full flex-col items-start gap-4'>
            <div className='flex flex-wrap gap-2'>
                <button type='button' className={buttonClass} onClick={() => toast('Product added to cart.', { color: 'green' })}>Success</button>
                <button type='button' className={buttonClass} onClick={() => toast('Something went wrong.', { color: 'red', actionLabel: 'Retry' })}>Error</button>
                <button type='button' className={buttonClass} onClick={() => toast('An update is available.', { actionLabel: 'Update', duration: 0 })}>Sticky</button>
            </div>
            <Toaster toasts={toasts} onDismiss={dismiss} className='flex min-h-[60px] flex-col items-start gap-2' />
        </div>
    )
}

const stackCode = `const { toasts, toast, dismiss } = useToasts()

<button onClick={() => toast('Product added to cart.', { color: 'green' })}>
  Add to cart
</button>

<Toaster toasts={toasts} onDismiss={dismiss} />`

const ToastsDocumentation = () => {
    return (
        <DocPage title='Toasts' description='Short messages that confirm an action. Manage a stack of them with the `useToasts` hook.'>
            <ComponentSource source={source} file={file} />

            <Variant title='Default' description='Toasts in every color. Add `onDismiss` to show the close button.' file={file} previewClassName='flex flex-col items-start gap-4'>
                <Toast color='green' onDismiss={() => {}}>Product added to cart.</Toast>
                <Toast color='red' onDismiss={() => {}}>Product removed from cart.</Toast>
                <Toast onDismiss={() => {}}>Your profile was updated.</Toast>
                <Toast color='yellow' onDismiss={() => {}}>Your trial ends soon.</Toast>
                <Toast color='dark' onDismiss={() => {}}>New message received.</Toast>
            </Variant>

            <Variant title='With actions' description='Add a button with `actionLabel` and `onAction`.' file={file} previewClassName='flex flex-col items-start gap-4'>
                <Toast color='green' actionLabel='View' onAction={() => {}} onDismiss={() => {}}>Email successfully sent</Toast>
                <Toast color='red' actionLabel='Show' onAction={() => {}} onDismiss={() => {}}>2 errors found</Toast>
                <Toast actionLabel='Update' onAction={() => {}} onDismiss={() => {}}>An update is available</Toast>
            </Variant>

            <Variant title='Stack' description='`useToasts` keeps the list and closes each toast by itself after a few seconds. Press the buttons to try it.' file={file} code={stackCode}>
                <StackDemo />
            </Variant>
        </DocPage>
    )
}

export default ToastsDocumentation
