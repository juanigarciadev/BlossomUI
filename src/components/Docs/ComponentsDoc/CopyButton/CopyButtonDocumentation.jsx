import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/CopyButton/CopyButton.tsx?raw'
import { CopyButton } from '../../../UI/CopyButton/CopyButton'

const file = 'src/components/UI/CopyButton/CopyButton.tsx'

const CopyButtonDocumentation = () => {
    return (
        <DocPage title='Copy button' description='A button that copies a text to the clipboard and confirms it. The confirmation is announced to screen readers and it works on pages that are not secure too.'>
            <ComponentSource source={source} file={file} />

            <Variant title='Default' description='Press it and paste somewhere to check. After `timeout` milliseconds it goes back.' file={file}>
                <CopyButton text='npm install blossom-ui' />
            </Variant>

            <Variant title='Icon only' description='`variant="icon"` shows only the icon. `label` is its accessible name.' file={file}>
                <CopyButton variant='icon' text='npm install blossom-ui' label='Copy command' />
            </Variant>

            <Variant title='Sizes' description='`sm`, `md` and `lg`.' file={file}>
                <CopyButton size='sm' text='Small' />
                <CopyButton size='md' text='Medium' />
                <CopyButton size='lg' text='Large' />
            </Variant>

            <Variant title='Texts' description='`label` and `copiedLabel` change the texts, for example to translate them.' file={file}>
                <CopyButton text='https://blossomui.vercel.app' label='Copiar enlace' copiedLabel='Enlace copiado' />
            </Variant>

            <Variant title='Next to a value' description='A common use: a command or a key with a button beside it.' file={file} previewClassName='flex w-full [&>*]:max-w-md'>
                <div className='flex w-full items-center justify-between gap-3 rounded-xl border border-neutral-300 bg-neutral-100 py-2 pl-4 pr-2 dark:border-neutral-700 dark:bg-neutral-800'>
                    <code className='truncate text-sm text-neutral-800 dark:text-neutral-200'>sk_live_51Nx0b4Example</code>
                    <CopyButton variant='icon' size='sm' text='sk_live_51Nx0b4Example' label='Copy key' />
                </div>
            </Variant>

            <Variant title='Custom color' description='Use `color` for the copied state. Any CSS color works. Without it the component uses the brand color `--blossom-accent`, which is pink by default (see Brand color in Customization).' file={file}>
                <CopyButton text='teal' color='#0f766e' />
            </Variant>
        </DocPage>
    )
}

export default CopyButtonDocumentation
