import { useState } from 'react'
import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/Calendar/Calendar.tsx?raw'
import { Calendar } from '../../../UI/Calendar/Calendar'

const file = 'src/components/UI/Calendar/Calendar.tsx'

const format = (date) => new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(date)

const SingleDemo = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div className='flex flex-col gap-3'>
            <Calendar value={date} onChange={setDate} />
            <p className='text-sm text-neutral-500'>{date ? format(date) : 'No date'}</p>
        </div>
    )
}

const singleCode = `const [date, setDate] = useState<Date | null>(new Date())

<Calendar value={date} onChange={setDate} />`

const RangeDemo = () => {
    const [range, setRange] = useState({ start: null, end: null })
    return (
        <div className='flex flex-col gap-3'>
            <Calendar mode='range' value={range} onChange={setRange} />
            <p className='text-sm text-neutral-500'>{range.start && range.end ? `${format(range.start)} → ${format(range.end)}` : range.start ? 'Choose the last day' : 'Choose the first day'}</p>
        </div>
    )
}

const rangeCode = `const [range, setRange] = useState({ start: null, end: null })

<Calendar mode="range" value={range} onChange={setRange} />`

const today = new Date()
const soon = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 5)
const later = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 20)

const CalendarDocumentation = () => {
    return (
        <DocPage title='Calendar' description='A month grid that is always visible, to place in a page or a card. It is the calendar of the date pickers: arrow keys move by day and week, Page Up and Page Down by month.'>
            <ComponentSource source={source} file={file} />

            <Variant title='Default' description='Choose one day. `value` and `onChange` keep it in your own state.' file={file} code={singleCode}>
                <SingleDemo />
            </Variant>

            <Variant title='Range' description='`mode="range"` chooses a first and a last day and highlights every day between them. While you decide the last day the range follows the pointer.' file={file} code={rangeCode}>
                <RangeDemo />
            </Variant>

            <Variant title='Limits' description='`min` and `max` block the days outside of them.' file={file}>
                <Calendar min={soon} max={later} defaultValue={soon} />
            </Variant>

            <Variant title='Disabled days' description='`isDisabled` receives a date and returns `true` for the ones that cannot be chosen, for example weekends.' file={file} code={`<Calendar isDisabled={(date) => date.getDay() === 0 || date.getDay() === 6} />`}>
                <Calendar isDisabled={(date) => date.getDay() === 0 || date.getDay() === 6} />
            </Variant>

            <Variant title='Locale and first day' description='`locale` changes the names of the month and the days, and `weekStartsOn` the first column.' file={file}>
                <Calendar locale='es-AR' weekStartsOn={1} labels={{ previousMonth: 'Mes anterior', nextMonth: 'Mes siguiente' }} />
            </Variant>

            <Variant title='Custom color' description='Use `color` for the selected day, the range and the focus ring. Any CSS color works. Without it the component uses the brand color `--blossom-accent`, which is pink by default (see Brand color in Customization).' file={file}>
                <Calendar color='#0f766e' defaultValue={new Date()} />
            </Variant>
        </DocPage>
    )
}

export default CalendarDocumentation
