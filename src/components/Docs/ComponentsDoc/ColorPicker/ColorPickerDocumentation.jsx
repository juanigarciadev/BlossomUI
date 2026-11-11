import { useState } from 'react'
import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/ColorPicker/ColorPicker.tsx?raw'
import { ColorPicker } from '../../../UI/ColorPicker/ColorPicker'
import { Button } from '../../../UI/Buttons/Button'

const file = 'src/components/UI/ColorPicker/ColorPicker.tsx'

const wide = 'flex w-full [&>*]:max-w-xs'

const BrandDemo = () => {
    const [color, setColor] = useState('#7c3aed')
    return (
        <div className='flex w-full max-w-xs flex-col gap-4'>
            <ColorPicker label='Brand color' value={color} onChange={setColor} />
            <Button color={color}>Your button</Button>
            <p className='font-mono text-sm uppercase text-neutral-500'>{color}</p>
        </div>
    )
}

const brandCode = `const [color, setColor] = useState('#7c3aed')

<ColorPicker label="Brand color" value={color} onChange={setColor} />

<Button color={color}>Your button</Button>`

const ColorPickerDocumentation = () => {
    return (
        <DocPage title='Color picker' description='Choose a color with an area for saturation and brightness, a hue bar, a hex field and ready-made colors. The value is always a `#rrggbb` string.'>
            <ComponentSource source={source} file={file} />

            <Variant title='Default' description='A field that opens the panel. Drag in the area, use the arrow keys in it (Shift moves faster) or type a hex code.' file={file} previewClassName={wide}>
                <ColorPicker label='Color' />
            </Variant>

            <Variant title='Live preview' description='`value` and `onChange` keep the color in your own state, for example to try a brand color.' file={file} code={brandCode}>
                <BrandDemo />
            </Variant>

            <Variant title='Inline' description='`inline` shows the panel in the page instead of in a popover.' file={file}>
                <ColorPicker inline label='Pick a color' defaultValue='#34d399' />
            </Variant>

            <Variant title='Presets' description='`presets` is the list of colors under the picker. Use an empty list to hide them.' file={file} previewClassName='flex flex-wrap gap-8'>
                <ColorPicker inline label='Own presets' presets={['#0f766e', '#115e59', '#134e4a', '#14b8a6', '#5eead4']} defaultValue='#14b8a6' />
                <ColorPicker inline label='No presets' presets={[]} defaultValue='#60a5fa' />
            </Variant>

            <Variant title='Hint, error and disabled' description='The field accepts `hint` and `error`, and can be disabled.' file={file} previewClassName={`${wide} flex-col gap-6`}>
                <ColorPicker label='Accent' hint='Used for buttons and links.' />
                <ColorPicker label='Accent' error='Choose a darker color.' defaultValue='#fde68a' />
                <ColorPicker label='Accent' disabled />
            </Variant>
        </DocPage>
    )
}

export default ColorPickerDocumentation
