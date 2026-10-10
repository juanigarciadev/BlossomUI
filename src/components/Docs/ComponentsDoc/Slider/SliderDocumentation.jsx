import { useState } from 'react'
import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/Slider/Slider.tsx?raw'
import { Slider } from '../../../UI/Slider/Slider'

const file = 'src/components/UI/Slider/Slider.tsx'

const ControlledDemo = () => {
    const [volume, setVolume] = useState(30)
    return (
        <div className='flex w-full max-w-sm flex-col gap-3'>
            <Slider label='Volume' value={volume} onChange={setVolume} showValue unit='%' />
            <p className='text-sm text-neutral-500'>Volume is {volume}%</p>
        </div>
    )
}

const SliderDocumentation = () => {
    return (
        <DocPage title='Slider' description='Pick a number in a range. It is a native range input, so it works with the keyboard and with touch.'>
            <ComponentSource source={source} file={file} />

            <Variant title='Default' description='Use `label` and `showValue` to display the current number.' file={file} previewClassName='flex w-full [&>*]:max-w-sm'>
                <Slider label='Brightness' defaultValue={60} showValue unit='%' />
            </Variant>

            <Variant title='Steps' description='`step` controls the increment, `min` and `max` the range.' file={file} previewClassName='flex w-full [&>*]:max-w-sm'>
                <Slider label='Price' min={0} max={500} step={50} defaultValue={200} showValue unit=' USD' />
            </Variant>

            <Variant title='Disabled' description='Disabled sliders are dimmed and cannot be changed.' file={file} previewClassName='flex w-full [&>*]:max-w-sm'>
                <Slider label='Locked' defaultValue={40} disabled />
            </Variant>

            <Variant
                title='Controlled'
                description='Use `value` and `onChange` to keep the number in your own state.'
                file={file}
                code={`const [volume, setVolume] = useState(30)

<Slider label='Volume' value={volume} onChange={setVolume} showValue unit='%' />`}
            >
                <ControlledDemo />
            </Variant>
            <Variant title='Custom color' description='Use `color` for the filled track, the handle and the focus ring. Any CSS color works. Without it the component uses the brand color `--blossom-accent`, which is pink by default (see Brand color in Customization).' file={file} previewClassName='flex w-full [&>*]:max-w-sm'>
                <Slider label='Volume' defaultValue={60} showValue color='#0f766e' />
            </Variant>

            <Variant title='Hint and error' description='`hint` and `error` show a message under the slider.' file={file} previewClassName='flex w-full flex-col gap-6 [&>*]:max-w-sm'>
                <Slider label='People' min={1} max={10} defaultValue={4} showValue hint='Up to 10 people per tasting.' />
                <Slider label='People' min={1} max={10} defaultValue={10} showValue error='This tasting is full.' />
            </Variant>

        </DocPage>
    )
}

export default SliderDocumentation
