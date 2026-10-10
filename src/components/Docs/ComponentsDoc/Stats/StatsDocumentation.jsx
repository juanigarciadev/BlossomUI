import { CreditCard, Users } from 'lucide-react'
import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/Stats/Stats.tsx?raw'
import { Stat, Stats } from '../../../UI/Stats/Stats'

const file = 'src/components/UI/Stats/Stats.tsx'

const items = [
    { label: 'Revenue', value: '$48,200', change: '+12.5%', trend: 'up' },
    { label: 'Active users', value: '2,431', change: '+4.1%', trend: 'up' },
    { label: 'Bounce rate', value: '38%', change: '-2.3%', trend: 'down' },
    { label: 'Tickets', value: 17, change: 'Same as last week', trend: 'neutral' },
]

const StatsDocumentation = () => {
    return (
        <DocPage title='Stats' description='Highlight key numbers with their change over time. The grid fits as many columns as the space allows.'>
            <ComponentSource source={source} file={file} />

            <Variant title='Grid' description='Pass an array of stats to Stats.' file={file} previewClassName='flex w-full'>
                <Stats items={items} />
            </Variant>

            <Variant title='With a trend line' description='Pass `trendData` with the latest values to draw a small line under the number.' file={file} previewClassName='flex w-full flex-wrap gap-4'>
                <div className='w-56'><Stat label='Revenue' value='$48,200' change='+12.5%' trend='up' trendData={[12, 18, 15, 22, 20, 28, 34]} /></div>
                <div className='w-56'><Stat label='Bounce rate' value='38%' change='-2.3%' trend='down' trendData={[52, 48, 50, 44, 41, 40, 38]} /></div>
            </Variant>

            <Variant title='Single stat' description='Use Stat on its own and place it anywhere. Add an icon next to the label.' file={file}>
                <div className='w-56'><Stat label='Customers' value='1,204' change='+8%' trend='up' icon={<Users size={16} />} /></div>
                <div className='w-56'><Stat label='Subscriptions' value='$9,800' change='-1.2%' trend='down' icon={<CreditCard size={16} />} /></div>
            </Variant>
        </DocPage>
    )
}

export default StatsDocumentation
