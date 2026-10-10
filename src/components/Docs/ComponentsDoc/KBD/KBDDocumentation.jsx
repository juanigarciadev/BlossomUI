import { useEffect, useState } from 'react'
import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/KBD/Kbd.tsx?raw'
import { Kbd, KbdShortcut } from '../../../UI/KBD/Kbd'

const file = 'src/components/UI/KBD/Kbd.tsx'

const keys = ['Ctrl', 'Alt', 'Shift', 'Spacebar']
const colors = ['default', 'dark', 'pink', 'purple', 'blue', 'green', 'yellow', 'red']

const PressDemo = () => {
    const [pressed, setPressed] = useState([])

    useEffect(() => {
        const down = (e) => setPressed((prev) => (prev.includes(e.key) ? prev : [...prev, e.key]))
        const up = (e) => setPressed((prev) => prev.filter((k) => k !== e.key))
        window.addEventListener('keydown', down)
        window.addEventListener('keyup', up)
        return () => {
            window.removeEventListener('keydown', down)
            window.removeEventListener('keyup', up)
        }
    }, [])

    const names = { Control: 'Ctrl', Alt: 'Alt', Shift: 'Shift', ' ': 'Spacebar' }
    const isActive = (label) => pressed.some((k) => names[k] === label)

    return (
        <>
            {keys.map((key) => <Kbd key={key} relief active={isActive(key)}>{key}</Kbd>)}
            <span className='w-full text-sm text-neutral-500'>Press Ctrl, Alt, Shift or Space on your keyboard.</span>
        </>
    )
}

const pressCode = `const [pressed, setPressed] = useState<string[]>([])

useEffect(() => {
  const down = (e: KeyboardEvent) => setPressed((prev) => (prev.includes(e.key) ? prev : [...prev, e.key]))
  const up = (e: KeyboardEvent) => setPressed((prev) => prev.filter((k) => k !== e.key))
  window.addEventListener('keydown', down)
  window.addEventListener('keyup', up)
  return () => {
    window.removeEventListener('keydown', down)
    window.removeEventListener('keyup', up)
  }
}, [])

<Kbd relief active={pressed.includes('Control')}>Ctrl</Kbd>`

const KBDDocumentation = () => {
    return (
        <DocPage title='KBD' description='Display keys and keyboard shortcuts.'>
            <ComponentSource source={source} file={file} />

            <Variant title='Colors' description='Choose the color with the `color` prop. `active` fills the key with that color.' file={file}>
                {colors.map((color) => <Kbd key={color} color={color}>{color}</Kbd>)}
            </Variant>

            <Variant title='Colored shortcuts' description='`KbdShortcut` also takes `color` and `relief`.' file={file}>
                <KbdShortcut keys={['Ctrl', 'K']} color='purple' relief />
                <KbdShortcut keys={['Shift', 'Alt', 'F']} color='green' relief />
                <KbdShortcut keys={['Cmd', 'S']} color='dark' relief />
            </Variant>

            <Variant title='Default' description='Special keys with a border.' file={file}>
                {keys.map((key) => <Kbd key={key}>{key}</Kbd>)}
            </Variant>

            <Variant title='With relief' description='A thicker bottom border makes the key look pressable.' file={file}>
                {keys.map((key) => <Kbd key={key} relief>{key}</Kbd>)}
            </Variant>

            <Variant title='Shortcuts' description='Combine several keys with `KbdShortcut`.' file={file} previewClassName='flex flex-col gap-4'>
                <KbdShortcut keys={['Ctrl', 'K']} />
                <KbdShortcut keys={['Ctrl', 'Shift', 'P']} relief />
            </Variant>

            <Variant title='Active' description='Use `active` to highlight a key while it is pressed. Try it with your keyboard.' file={file} code={pressCode}>
                <PressDemo />
            </Variant>
            <Variant title='Custom colors' description='Any CSS color works, not only the presets: hex, rgb(), hsl() or a CSS variable. Pressed keys are filled with it.' file={file}>
                <Kbd color='#7c3aed' relief>Ctrl</Kbd>
                <Kbd color='#0ea5e9' relief>Alt</Kbd>
                <Kbd color='#f97316' relief active>Shift</Kbd>
                <KbdShortcut keys={['Cmd', 'K']} color='#10b981' relief />
            </Variant>

        </DocPage>
    )
}

export default KBDDocumentation
