import { useState } from 'react'
import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/DatePicker/DatePicker.tsx?raw'
import { DatePicker, DateRangePicker } from '../../../UI/DatePicker/DatePicker'

const file = 'src/components/UI/DatePicker/DatePicker.tsx'

const today = new Date()
const inTwoWeeks = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 14)

const ControlledDemo = () => {
    const [date, setDate] = useState(null)
    return (
        <div className='flex w-full max-w-xs flex-col gap-3'>
            <DatePicker label='Birthday' value={date} onChange={setDate} />
            <p className='text-sm text-neutral-500'>{date ? date.toDateString() : 'No date selected'}</p>
        </div>
    )
}

const ControlledRangeDemo = () => {
    const [range, setRange] = useState({ start: null, end: null })
    const nights = range.start && range.end ? Math.round((range.end - range.start) / 86400000) : 0
    return (
        <div className='flex w-full max-w-xs flex-col gap-3'>
            <DateRangePicker label='Stay' value={range} onChange={setRange} min={today} />
            <p className='text-sm text-neutral-500'>{nights ? `${nights} nights` : 'No range selected'}</p>
        </div>
    )
}

const DatePickerDocumentation = () => {
    return (
        <DocPage title='Date picker' description='Choose a date, or a range of dates, from a calendar. Use the arrow keys to move by day or week, Page Up and Page Down to change the month and Escape to close.'>
            <ComponentSource source={source} file={file} />

            <Variant title='Default' description='The date is shown with the format of the locale.' file={file} previewClassName='flex w-full [&>*]:max-w-xs'>
                <DatePicker label='Date' />
            </Variant>

            <Variant title='Limits' description='Dates outside `min` and `max` cannot be chosen.' file={file} previewClassName='flex w-full [&>*]:max-w-xs' code={`<DatePicker label='Pick up date' min={new Date()} max={inTwoWeeks} />`}>
                <DatePicker label='Pick up date' min={today} max={inTwoWeeks} />
            </Variant>

            <Variant title='Locale' description='Month and day names follow the locale.' file={file} previewClassName='flex w-full [&>*]:max-w-xs'>
                <DatePicker label='Fecha' locale='es-AR' placeholder='Elegí una fecha' />
            </Variant>

            <Variant
                title='Controlled'
                description='Use `value` and `onChange` to own the date.'
                file={file}
                previewClassName='flex w-full'
                code={`const [date, setDate] = useState<Date | null>(null)

<DatePicker label='Birthday' value={date} onChange={setDate} />`}
            >
                <ControlledDemo />
            </Variant>

            <Variant title='Range' description='Click the first and the last day: every day in between is highlighted and the range is previewed while you move the pointer.' file={file} previewClassName='flex w-full [&>*]:max-w-xs'>
                <DateRangePicker label='Trip dates' />
            </Variant>

            <Variant title='Range with limits' description='Choosing the days in reverse order also works, and a third click starts a new range. `min` and `max` apply here too.' file={file} previewClassName='flex w-full [&>*]:max-w-xs' code={`<DateRangePicker label='Booking' min={new Date()} max={inTwoWeeks} />`}>
                <DateRangePicker label='Booking' min={today} max={inTwoWeeks} />
            </Variant>

            <Variant
                title='Range controlled'
                description='`onChange` is called once both days are chosen, with an object that has `start` and `end`.'
                file={file}
                previewClassName='flex w-full'
                code={`const [range, setRange] = useState({ start: null, end: null })

<DateRangePicker label='Stay' value={range} onChange={setRange} min={new Date()} />`}
            >
                <ControlledRangeDemo />
            </Variant>
            <Variant title='Custom color' description='Use `color` in `DatePicker` and `DateRangePicker` for the selected days and the focus rings. Any CSS color works. Without it the component uses the brand color `--blossom-accent`, which is pink by default (see Brand color in Customization).' file={file} previewClassName='flex w-full gap-4 [&>*]:max-w-xs'>
                <DatePicker label='Date' color='#0f766e' />
                <DateRangePicker label='Trip dates' color='#7c3aed' />
            </Variant>

        </DocPage>
    )
}

export default DatePickerDocumentation
