import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/Charts/Charts.tsx?raw'
import { AreaChart, BarChart, DonutChart, Gauge, Heatmap, LineChart, RadarChart, Sparkline } from '../../../UI/Charts/Charts'

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

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']

const revenue = [
    { name: 'Subscriptions', data: [42, 48, 55, 61, 70, 82] },
    { name: 'Services', data: [18, 22, 20, 28, 31, 35] },
    { name: 'Templates', data: [6, 9, 11, 10, 15, 19] },
]

const skills = ['Design', 'Code', 'Writing', 'Speed', 'Testing', 'Support']

const heat = [
    [1, 3, 5, 8, 6, 2, 1],
    [2, 4, 9, 12, 10, 5, 2],
    [3, 6, 11, 15, 13, 7, 3],
    [1, 2, 6, 9, 7, 3, 1],
]

const traffic = [{ from: 0, color: '#34d399' }, { from: 60, color: '#fbbf24' }, { from: 85, color: '#f87171' }]

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

            <Variant title='Area chart' description='One or more series over the same labels. Hover the chart to read every value of a point.' file={file} previewClassName='flex w-full [&>*]:max-w-xl'>
                <AreaChart labels={months} series={revenue.slice(0, 2)} label='Revenue by month' />
            </Variant>

            <Variant title='Stacked area' description='`stacked` piles the series on top of each other, so the top line is the total.' file={file} previewClassName='flex w-full [&>*]:max-w-xl'>
                <AreaChart labels={months} series={revenue} stacked label='Revenue by source' />
            </Variant>

            <Variant title='Radar chart' description='Compare several things over the same axes, from the top and clockwise. `max` fixes the value at the border.' file={file}>
                <RadarChart
                    axes={skills}
                    max={10}
                    label='Skills'
                    series={[
                        { name: 'Ana', values: [9, 6, 7, 5, 8, 6] },
                        { name: 'Luis', values: [5, 9, 4, 8, 6, 7], color: '#60a5fa' },
                    ]}
                />
            </Variant>

            <Variant title='Gauge' description='A half circle that shows how full something is. `thresholds` change the color as the value grows.' file={file} previewClassName='flex flex-wrap items-end gap-10'>
                <Gauge value={42} unit='%' caption='CPU' label='CPU load' thresholds={traffic} />
                <Gauge value={92} unit='%' caption='Memory' label='Memory use' thresholds={traffic} />
                <Gauge value={7.4} max={10} caption='Satisfaction' label='Satisfaction' size={180} />
            </Variant>

            <Variant title='Heatmap' description='The color of each cell shows its value, for example activity by day and hour. `showValues` writes the number in the cell.' file={file} previewClassName='flex w-full flex-col gap-6'>
                <Heatmap data={heat} rows={['9h', '12h', '15h', '18h']} columns={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']} label='Visits by day and hour' />
                <Heatmap data={heat} rows={['9h', '12h', '15h', '18h']} columns={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']} showValues color='#a78bfa' label='Visits by day and hour' />
            </Variant>

            <Variant title='Sparkline' description='A tiny line without axes for cards and tables. It also works inside the Stats component, with its `trendData` prop.' file={file} previewClassName='flex w-full [&>*]:max-w-xs'>
                <Sparkline data={[4, 7, 5, 9, 8, 12, 11, 15]} />
            </Variant>
        </DocPage>
    )
}

export default ChartsDocumentation
