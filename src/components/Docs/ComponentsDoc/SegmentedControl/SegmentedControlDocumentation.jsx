import { useState } from 'react'
import { AlignCenter, AlignLeft, AlignRight, Bold, Italic, LayoutGrid, List, Underline } from 'lucide-react'
import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/SegmentedControl/SegmentedControl.tsx?raw'
import { SegmentedControl, ToggleGroup } from '../../../UI/SegmentedControl/SegmentedControl'

const file = 'src/components/UI/SegmentedControl/SegmentedControl.tsx'

const views = [
    { value: 'list', label: 'List', icon: <List size={16} /> },
    { value: 'grid', label: 'Grid', icon: <LayoutGrid size={16} /> },
]

const ControlledDemo = () => {
    const [period, setPeriod] = useState('month')
    return (
        <div className='flex flex-col gap-3'>
            <SegmentedControl label='Billing' value={period} onChange={setPeriod} options={[{ value: 'month', label: 'Monthly' }, { value: 'year', label: 'Yearly' }]} />
            <p className='text-sm text-neutral-500'>You pay {period === 'month' ? '$12 every month' : '$120 every year'}.</p>
        </div>
    )
}

const controlledCode = `const [period, setPeriod] = useState('month')

<SegmentedControl
  label="Billing"
  value={period}
  onChange={setPeriod}
  options={[
    { value: 'month', label: 'Monthly' },
    { value: 'year', label: 'Yearly' },
  ]}
/>`

const FormatDemo = () => {
    const [format, setFormat] = useState(['bold'])
    return (
        <div className='flex flex-col gap-3'>
            <ToggleGroup
                type='multiple'
                label='Text format'
                value={format}
                onChange={setFormat}
                items={[
                    { value: 'bold', icon: <Bold size={16} />, ariaLabel: 'Bold' },
                    { value: 'italic', icon: <Italic size={16} />, ariaLabel: 'Italic' },
                    { value: 'underline', icon: <Underline size={16} />, ariaLabel: 'Underline' },
                ]}
            />
            <p className={`text-sm text-neutral-600 dark:text-neutral-300 ${format.includes('bold') ? 'font-bold' : ''} ${format.includes('italic') ? 'italic' : ''} ${format.includes('underline') ? 'underline' : ''}`}>The quick brown fox</p>
        </div>
    )
}

const formatCode = `const [format, setFormat] = useState(['bold'])

<ToggleGroup
  type="multiple"
  label="Text format"
  value={format}
  onChange={setFormat}
  items={[
    { value: 'bold', icon: <Bold size={16} />, ariaLabel: 'Bold' },
    { value: 'italic', icon: <Italic size={16} />, ariaLabel: 'Italic' },
    { value: 'underline', icon: <Underline size={16} />, ariaLabel: 'Underline' },
  ]}
/>`

const SegmentedControlDocumentation = () => {
    return (
        <DocPage title='Segmented control' description='Switch between a few exclusive options, such as a view mode or a billing period. The ToggleGroup in the same file is for buttons that can be on and off, or several on at once.'>
            <ComponentSource source={source} file={file} />

            <Variant title='Default' description='The selected option slides. Use the arrow keys, Home and End to move.' file={file}>
                <SegmentedControl label='Period' defaultValue='week' options={[{ value: 'day', label: 'Day' }, { value: 'week', label: 'Week' }, { value: 'month', label: 'Month' }, { value: 'year', label: 'Year' }]} />
            </Variant>

            <Variant title='With icons' description='Each option accepts an `icon`. With only an icon, set `ariaLabel` so screen readers know what it does.' file={file} previewClassName='flex flex-col items-start gap-4'>
                <SegmentedControl label='View' defaultValue='list' options={views} />
                <SegmentedControl label='Align' defaultValue='left' options={[
                    { value: 'left', icon: <AlignLeft size={16} />, ariaLabel: 'Align left' },
                    { value: 'center', icon: <AlignCenter size={16} />, ariaLabel: 'Align center' },
                    { value: 'right', icon: <AlignRight size={16} />, ariaLabel: 'Align right' },
                ]} />
            </Variant>

            <Variant title='Filled' description='`variant="filled"` slides the brand color instead of a white card.' file={file}>
                <SegmentedControl label='Plan' variant='filled' defaultValue='pro' options={[{ value: 'free', label: 'Free' }, { value: 'pro', label: 'Pro' }, { value: 'team', label: 'Team' }]} />
            </Variant>

            <Variant title='Sizes' description='`sm`, `md` and `lg`.' file={file} previewClassName='flex flex-col items-start gap-4'>
                <SegmentedControl size='sm' defaultValue='a' options={[{ value: 'a', label: 'Small' }, { value: 'b', label: 'Control' }]} />
                <SegmentedControl size='md' defaultValue='a' options={[{ value: 'a', label: 'Medium' }, { value: 'b', label: 'Control' }]} />
                <SegmentedControl size='lg' defaultValue='a' options={[{ value: 'a', label: 'Large' }, { value: 'b', label: 'Control' }]} />
            </Variant>

            <Variant title='Full width' description='`fullWidth` gives every option the same share of the available width.' file={file} previewClassName='flex w-full [&>*]:max-w-md'>
                <SegmentedControl fullWidth label='Visibility' defaultValue='private' options={[{ value: 'public', label: 'Public' }, { value: 'team', label: 'Team' }, { value: 'private', label: 'Private' }]} />
            </Variant>

            <Variant title='Controlled' description='`value` and `onChange` keep the choice in your own state.' file={file} code={controlledCode}>
                <ControlledDemo />
            </Variant>

            <Variant title='Disabled' description='An option can be disabled, or the whole control.' file={file} previewClassName='flex flex-col items-start gap-4'>
                <SegmentedControl defaultValue='a' options={[{ value: 'a', label: 'Available' }, { value: 'b', label: 'Soon', disabled: true }, { value: 'c', label: 'Later', disabled: true }]} />
                <SegmentedControl disabled defaultValue='a' options={[{ value: 'a', label: 'Locked' }, { value: 'b', label: 'Control' }]} />
            </Variant>

            <Variant title='Toggle group' description='A row of buttons that can be pressed. With `type="multiple"` any number can be on, like bold and italic.' file={file} code={formatCode}>
                <FormatDemo />
            </Variant>

            <Variant title='Toggle group, single' description='With the default `type="single"` one button is on at most, and pressing it again turns it off. `variant="ghost"` removes the border.' file={file} previewClassName='flex flex-col items-start gap-4'>
                <ToggleGroup label='Layout' defaultValue='grid' items={[{ value: 'list', label: 'List' }, { value: 'grid', label: 'Grid' }, { value: 'board', label: 'Board' }]} />
                <ToggleGroup label='Filter' variant='ghost' defaultValue='all' items={[{ value: 'all', label: 'All' }, { value: 'open', label: 'Open' }, { value: 'closed', label: 'Closed' }]} />
            </Variant>

            <Variant title='Custom color' description='Use `color` for the sliding thumb, the pressed buttons and the focus ring. Any CSS color works. Without it the component uses the brand color `--blossom-accent`, which is pink by default (see Brand color in Customization).' file={file} previewClassName='flex flex-col items-start gap-4'>
                <SegmentedControl variant='filled' color='#0f766e' defaultValue='b' options={[{ value: 'a', label: 'Teal' }, { value: 'b', label: 'Control' }]} />
                <ToggleGroup color='#7c3aed' defaultValue='b' items={[{ value: 'a', label: 'Violet' }, { value: 'b', label: 'Toggle' }]} />
            </Variant>
        </DocPage>
    )
}

export default SegmentedControlDocumentation
