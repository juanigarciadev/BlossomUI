import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/Charts/Charts.tsx?raw'
import { BarChart, DonutChart, LineChart, Sparkline } from '../../../UI/Charts/Charts'

const file = 'src/components/UI/Charts/Charts.tsx'

const sales = [
    { label: 'Jan', value: 12 },
    { label: 'Feb', value: 19 },
    { label: 'Mar', value: 15 },
    { label: 'Apr', value: 27 },
    { label: 'May', value: 22 },
    { label: 'Jun', value: 34 },
]

const channels = [
    { label: 'Direct', value: 45 },
    { label: 'Search', value: 30 },
    { label: 'Social', value: 15 },
    { label: 'Email', value: 10 },
]

const browsers = [
    { label: 'Chrome', value: 62 },
    { label: 'Safari', value: 21 },
    { label: 'Firefox', value: 9 },
    { label: 'Edge', value: 8 },
]

const ChartsDocumentation = () => {
    return (
        <DocPage title='Charts' description='Simple charts drawn with SVG and HTML, with no dependencies. Colors follow the palette, hovering a bar or a point shows its value and screen readers get a summary of the data.'>
            <ComponentSource source={source} file={file} />

            <Variant title='Bar chart' description='Vertical bars. Each datum has a `label`, a `value` and an optional `color`.' file={file} previewClassName='flex w-full [&>*]:max-w-xl'>
                <BarChart data={sales} label='Sales by month' />
            </Variant>

            <Variant title='Horizontal bars' description='Use `horizontal` for long labels or for rankings.' file={file} previewClassName='flex w-full [&>*]:max-w-xl'>
                <BarChart data={browsers} horizontal label='Browser share' />
            </Variant>

            <Variant title='Line chart' description='Shows how a value changes over time. Hover or focus a point to see its value.' file={file} previewClassName='flex w-full [&>*]:max-w-xl'>
                <LineChart data={sales} label='Sales by month' />
            </Variant>

            <Variant title='Donut' description='Parts of a whole. Use `center` to show the total inside.' file={file} code={`<DonutChart
    data={channels}
    center={<><b className='text-2xl'>100</b><span className='text-xs text-neutral-500'>visits</span></>}
/>`}>
                <DonutChart
                    data={channels}
                    label='Traffic by channel'
                    center={
                        <>
                            <b className='text-2xl'>100</b>
                            <span className='text-xs text-neutral-500'>visits</span>
                        </>
                    }
                />
            </Variant>

            <Variant title='Pie' description='The same data without the hole. Hovering a slice shows its value.' file={file}>
                <DonutChart data={channels} pie label='Traffic by channel' />
            </Variant>

            <Variant title='Values on hover' description='Set `legend` to false to remove the list: the label, value and percentage appear when you hover a slice.' file={file}>
                <DonutChart data={channels} pie legend={false} label='Traffic by channel' />
                <DonutChart data={channels} legend={false} label='Traffic by channel' center={<b className='text-2xl'>100</b>} />
            </Variant>

            <Variant title='Sparkline' description='A tiny line without axes for cards and tables. It also works inside the Stats component, with its `trendData` prop.' file={file} previewClassName='flex w-full [&>*]:max-w-xs'>
                <Sparkline data={[4, 7, 5, 9, 8, 12, 11, 15]} />
            </Variant>
        </DocPage>
    )
}

export default ChartsDocumentation
