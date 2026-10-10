import { useEffect, useState } from 'react'
import { FileText, Moon, Settings } from 'lucide-react'
import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/CommandPalette/CommandPalette.tsx?raw'
import { CommandPalette } from '../../../UI/CommandPalette/CommandPalette'
import { Button } from '../../../UI/Buttons/Button'
import { KbdShortcut } from '../../../UI/KBD/Kbd'

const file = 'src/components/UI/CommandPalette/CommandPalette.tsx'

const icon = (Icon) => <Icon size={16} className='text-neutral-400' />

const CommandPaletteDemo = () => {
    const [open, setOpen] = useState(false)
    const [last, setLast] = useState('')

    // Ctrl + K or Cmd + K opens the palette from anywhere in this page.
    useEffect(() => {
        const onKey = (event) => {
            if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
                event.preventDefault()
                setOpen((current) => !current)
            }
        }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [])

    const commands = [
        { id: 'new', label: 'New document', group: 'Actions', icon: icon(FileText), hint: 'N', onSelect: () => setLast('New document') },
        { id: 'theme', label: 'Toggle dark mode', group: 'Actions', icon: icon(Moon), keywords: ['theme', 'light'], onSelect: () => setLast('Toggle dark mode') },
        { id: 'settings', label: 'Open settings', group: 'Go to', icon: icon(Settings), hint: ',', onSelect: () => setLast('Open settings') },
        { id: 'docs', label: 'Read the docs', group: 'Go to', icon: icon(FileText), onSelect: () => setLast('Read the docs') },
    ]

    return (
        <div className='flex w-full flex-col items-start gap-3'>
            <div className='flex items-center gap-3'>
                <Button onClick={() => setOpen(true)}>Open palette</Button>
                <KbdShortcut keys={['Ctrl', 'K']} relief />
            </div>
            {last && <p className='text-sm text-neutral-500'>Last command: <b className='text-neutral-900 dark:text-white'>{last}</b></p>}
            <CommandPalette open={open} onClose={() => setOpen(false)} commands={commands} />
        </div>
    )
}

const CommandPaletteDocumentation = () => {
    return (
        <DocPage title='Command palette' description='A searchable list of commands. Filter by typing, move with the arrow keys, run with Enter and close with Escape.'>
            <ComponentSource source={source} file={file} />

            <Variant
                title='Default'
                description='Commands can be grouped, have icons, hints and extra keywords for the search. The shortcut that opens it is up to you.'
                file={file}
                previewClassName='flex w-full'
                code={`const [open, setOpen] = useState(false)

const commands = [
    { id: 'new', label: 'New document', group: 'Actions', hint: 'N', onSelect: () => {} },
    { id: 'settings', label: 'Open settings', group: 'Go to', onSelect: () => {} },
]

<CommandPalette open={open} onClose={() => setOpen(false)} commands={commands} />`}
            >
                <CommandPaletteDemo />
            </Variant>
        </DocPage>
    )
}

export default CommandPaletteDocumentation
