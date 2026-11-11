import { useState } from 'react'
import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/NumberInput/NumberInput.tsx?raw'
import { NumberInput } from '../../../UI/NumberInput/NumberInput'

const file = 'src/components/UI/NumberInput/NumberInput.tsx'

const ControlledDemo = () => {
    const [guests, setGuests] = useState(2)
    return (
        <div className='flex w-full max-w-xs flex-col gap-3'>
            <NumberInput label='Guests' value={guests} onChange={setGuests} min={1} max={10} />
            <p className='text-sm text-neutral-500'>{guests === null ? 'Empty' : `${guests} guest${guests === 1 ? '' : 's'}`}</p>
        </div>
    )
}

const controlledCode = `const [guests, setGuests] = useState<number | null>(2)

<NumberInput label="Guests" value={guests} onChange={setGuests} min={1} max={10} />`

const wide = 'flex w-full [&>*]:max-w-xs'

const NumberInputDocumentation = () => {
    return (
        <DocPage title='Number input' description='A field for numbers with plus and minus buttons. Only digits can be typed, the arrow keys change the value and the limits are respected.'>
            <ComponentSource source={source} file={file} />

            <Variant title='Default' description='Use the buttons, the Arrow Up and Arrow Down keys, or type. Shift + arrow moves ten steps.' file={file} previewClassName={wide}>
                <NumberInput label='Quantity' defaultValue={1} />
            </Variant>

            <Variant title='Limits' description='`min` and `max` stop the value, disable the button at the limit and fix what you type when you leave the field.' file={file} previewClassName={wide}>
                <NumberInput label='Guests' defaultValue={2} min={1} max={10} hint='Between 1 and 10 people.' />
            </Variant>

            <Variant title='Step and decimals' description='`step` can be a decimal: the field shows as many decimals as the step has. Use `precision` to choose them.' file={file} previewClassName={`${wide} flex-col gap-6`}>
                <NumberInput label='Rating' defaultValue={4.5} min={0} max={5} step={0.5} />
                <NumberInput label='Amount' defaultValue={20} step={5} min={0} />
            </Variant>

            <Variant title='Prefix, suffix and format' description='`prefix` and `suffix` show a unit. `locale` formats the number with thousands separators when the field loses focus.' file={file} previewClassName={`${wide} flex-col gap-6`}>
                <NumberInput label='Price' prefix='$' defaultValue={1250} step={50} min={0} locale='en-US' />
                <NumberInput label='Weight' suffix='kg' defaultValue={72} min={0} />
            </Variant>

            <Variant title='Controlled' description='`value` and `onChange` keep the number in your own state. The value is `null` when the field is empty.' file={file} code={controlledCode}>
                <ControlledDemo />
            </Variant>

            <Variant title='Hint, error and success' description='Messages show under the field and color it.' file={file} previewClassName={`${wide} flex-col gap-6`}>
                <NumberInput label='Seats' defaultValue={4} hint='How many seats do you need?' />
                <NumberInput label='Seats' defaultValue={0} min={0} error='Choose at least one seat.' />
                <NumberInput label='Seats' defaultValue={4} success='Seats available.' />
            </Variant>

            <Variant title='Disabled and read only' description='A disabled field is dimmed. A read only one shows the value but cannot be changed.' file={file} previewClassName={`${wide} flex-col gap-6`}>
                <NumberInput label='Disabled' defaultValue={3} disabled />
                <NumberInput label='Read only' defaultValue={3} readOnly />
            </Variant>

            <Variant title='Custom color' description='Use `color` for the focus ring and border. Any CSS color works. Without it the component uses the brand color `--blossom-accent`, which is pink by default (see Brand color in Customization).' file={file} previewClassName={wide}>
                <NumberInput label='Quantity' defaultValue={1} color='#0f766e' />
            </Variant>
        </DocPage>
    )
}

export default NumberInputDocumentation
