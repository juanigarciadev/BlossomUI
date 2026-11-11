import { useState } from 'react'
import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/TimePicker/TimePicker.tsx?raw'
import { TimePicker } from '../../../UI/TimePicker/TimePicker'
import { DatePicker } from '../../../UI/DatePicker/DatePicker'

const file = 'src/components/UI/TimePicker/TimePicker.tsx'

const wide = 'flex w-full [&>*]:max-w-xs'

const ControlledDemo = () => {
    const [time, setTime] = useState('09:30')
    return (
        <div className='flex w-full max-w-xs flex-col gap-3'>
            <TimePicker label='Alarm' value={time} onChange={setTime} />
            <p className='text-sm text-neutral-500'>Value: {time || 'empty'}</p>
        </div>
    )
}

const controlledCode = `const [time, setTime] = useState('09:30')

<TimePicker label="Alarm" value={time} onChange={setTime} />`

const TimePickerDocumentation = () => {
    return (
        <DocPage title='Time picker' description='A field that opens a list of hours and minutes. The value is always a "HH:mm" string in 24 hours, so it is easy to store, even when the user sees AM and PM.'>
            <ComponentSource source={source} file={file} />

            <Variant title='Default' description='Choose the hour and the minute. Arrow Up and Arrow Down change the column you are in, Arrow Left and Arrow Right switch column.' file={file} previewClassName={wide}>
                <TimePicker label='Start time' />
            </Variant>

            <Variant title='12 hours' description='`hour12` shows 1 to 12 with AM and PM. `onChange` still receives the time in 24 hours.' file={file} previewClassName={wide}>
                <TimePicker label='Start time' hour12 defaultValue='14:30' />
            </Variant>

            <Variant title='Minute step' description='`minuteStep` sets the gap between the minutes in the list.' file={file} previewClassName={`${wide} flex-col gap-6`}>
                <TimePicker label='Every 15 minutes' minuteStep={15} defaultValue='10:15' />
                <TimePicker label='Every 30 minutes' minuteStep={30} />
            </Variant>

            <Variant title='Limits' description='`min` and `max` block the times outside of them, for example the opening hours of a shop.' file={file} previewClassName={wide}>
                <TimePicker label='Pick-up time' min='09:00' max='18:00' minuteStep={15} defaultValue='10:00' hint='Open from 9:00 to 18:00.' />
            </Variant>

            <Variant title='Controlled' description='`value` and `onChange` keep the time in your own state.' file={file} code={controlledCode}>
                <ControlledDemo />
            </Variant>

            <Variant title='With a date' description='Combine it with the DatePicker to choose a moment.' file={file} previewClassName='grid w-full max-w-xl grid-cols-2 gap-4 sm:grid-cols-1'>
                <DatePicker label='Date' />
                <TimePicker label='Time' defaultValue='18:00' />
            </Variant>

            <Variant title='Hint and error' description='Messages show under the field.' file={file} previewClassName={`${wide} flex-col gap-6`}>
                <TimePicker label='Reminder' hint='We will remind you at this time.' />
                <TimePicker label='Reminder' error='Choose a time.' />
            </Variant>

            <Variant title='Disabled' description='A disabled field is dimmed and cannot be opened.' file={file} previewClassName={wide}>
                <TimePicker label='Reminder' defaultValue='08:00' disabled />
            </Variant>

            <Variant title='Custom color' description='Use `color` for the chosen time and the focus ring. Any CSS color works. Without it the component uses the brand color `--blossom-accent`, which is pink by default (see Brand color in Customization).' file={file} previewClassName={wide}>
                <TimePicker label='Reminder' defaultValue='08:00' color='#0f766e' />
            </Variant>
        </DocPage>
    )
}

export default TimePickerDocumentation
