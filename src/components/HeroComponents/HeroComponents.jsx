import { useState } from 'react'
import { Bold, Italic, Underline, TrendingUp } from 'lucide-react'
import { AvatarGroup } from '../UI/Avatar/Avatar'
import { Checkbox } from '../UI/Forms/Forms'
import { Combobox } from '../UI/Combobox/Combobox'
import { ColorPicker } from '../UI/ColorPicker/ColorPicker'
import { CopyButton } from '../UI/CopyButton/CopyButton'
import { AreaChart, Gauge } from '../UI/Charts/Charts'
import { OtpInput } from '../UI/OtpInput/OtpInput'
import { Rating } from '../UI/Rating/Rating'
import { SegmentedControl, ToggleGroup } from '../UI/SegmentedControl/SegmentedControl'
import { Separator } from '../UI/Separator/Separator'
import { SimplePagination } from '../UI/Pagination/Pagination'
import { StepperProgress } from '../UI/Stepper/Stepper'
import { accentStyle } from '../UI/accent'
import { Appear } from '../Motion/Motion'

const photos = [
    'https://res.cloudinary.com/diruiumfk/image/upload/v1698155370/person-image-1_mqb6ut.jpg',
    'https://res.cloudinary.com/diruiumfk/image/upload/v1698155371/person-image-4_usvfxg.jpg',
    'https://res.cloudinary.com/diruiumfk/image/upload/v1698155370/person-image-3_fstmzw.jpg',
    'https://res.cloudinary.com/diruiumfk/image/upload/v1698155370/person-image-2_sjyoj5.jpg',
]

/** The progress bar and the pagination share the same page, so both always say the same thing. */
const StepsDemo = () => {
    const [page, setPage] = useState(3)
    return (
        <>
            <StepperProgress total={4} current={page - 1} />
            <div className='flex justify-end'>
                <SimplePagination page={page} total={4} onChange={setPage} />
            </div>
        </>
    )
}

/** A card. `shape` gives each one its own corners so the stack does not look like a grid of boxes. */
const ranges = {
    week: {
        total: '$12.8k',
        change: '+8.1%',
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        series: [
            { name: 'Subscriptions', data: [14, 18, 16, 24, 28, 22, 30] },
            { name: 'Services', data: [6, 8, 9, 7, 12, 10, 14] },
        ],
    },
    month: {
        total: '$48.2k',
        change: '+12.4%',
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        series: [
            { name: 'Subscriptions', data: [42, 48, 55, 61, 70, 82, 96] },
            { name: 'Services', data: [18, 22, 20, 28, 31, 35, 44] },
        ],
    },
}

/** A small dashboard: the number, the trend, a range switch and a stacked chart that answers to the pointer. */
const RevenueDemo = () => {
    const [range, setRange] = useState('month')
    const data = ranges[range]
    return (
        <>
            <div className='flex items-start justify-between gap-4'>
                <div className='flex flex-col gap-1'>
                    <span className='text-xs font-medium uppercase tracking-wide text-neutral-500'>Revenue</span>
                    <div className='flex items-center gap-2'>
                        <span className='text-3xl font-bold leading-none text-neutral-900 dark:text-white'>{data.total}</span>
                        <span className='flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700 dark:bg-green-900/40 dark:text-green-400'>
                            <TrendingUp size={12} />
                            {data.change}
                        </span>
                    </div>
                </div>
                <SegmentedControl size='sm' label='Range' value={range} onChange={setRange} options={[{ value: 'week', label: 'Week' }, { value: 'month', label: 'Month' }]} />
            </div>
            <AreaChart labels={data.labels} series={data.series} stacked height={110} legend={false} label='Revenue' />
        </>
    )
}

const Panel = ({ className = '', children }) => (
    <div className={`relative flex flex-col gap-4 border border-neutral-200 bg-white/70 p-5 shadow-xl shadow-neutral-200/50 backdrop-blur-md dark:border-neutral-700 dark:bg-neutral-800/60 dark:shadow-none ${className}`}>
        {children}
    </div>
)

/** A piece that sticks out of a card: it has a solid background so it reads on top of whatever is behind. */
const Sticker = ({ className = '', flow = false, children }) => (
    <div className={`z-20 rounded-2xl border border-neutral-200 bg-white p-3 shadow-2xl shadow-neutral-300/60 dark:border-neutral-600 dark:bg-neutral-800 dark:shadow-black/40 ${flow ? 'relative lg:shadow-lg' : 'absolute'} ${className}`}>
        {children}
    </div>
)

const HeroComponents = () => {
    // The brand color of the whole stack: the hue bar changes every accent inside it.
    const [brand, setBrand] = useState('#f472b6')

    return (
        <Appear as='section' delay={0.1} y={24} style={accentStyle(brand)} className='relative flex w-full flex-col gap-4 lg:items-start'>
            {/* Soft shape behind the stack, bigger than the cards */}
            <div aria-hidden className='pointer-events-none absolute -right-16 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[var(--blossom-accent,#f472b6)] opacity-20 blur-3xl lg:hidden' />

            <Panel className='float-slow rounded-[2.25rem] pb-20 [rotate:-1.5deg] lg:pb-5 lg:[rotate:0deg]'>
                <RevenueDemo />
            </Panel>

            {/* The brand color picker hangs off the right edge and over the bottom of the first card */}
            <Sticker flow className='float-slower -mt-14 ml-auto mr-[-4.5rem] w-72 [rotate:3deg] lg:mx-0 lg:mt-0 lg:w-fit lg:[rotate:0deg]'>
                <ColorPicker inline area={false} label='Brand color' value={brand} onChange={setBrand} presets={['#f472b6', '#a78bfa', '#60a5fa', '#34d399', '#fbbf24', '#f87171']} />
            </Sticker>

            <Panel className='float-slower ml-6 rounded-[1rem_2.5rem_1rem_2.5rem] pl-7 lg:ml-0 lg:rounded-3xl lg:pl-5'>
                {/* A gauge on a round tag that leaves the card at the top left */}
                <Sticker className='-left-14 -top-12 rounded-full px-5 pb-3 pt-4 [rotate:-8deg] lg:hidden'>
                    <Gauge value={72} unit='%' caption='Score' size={96} label='Score' />
                </Sticker>
                <Combobox
                    placeholder='Search a framework…'
                    defaultValue='react'
                    options={[
                        { value: 'react', label: 'React' },
                        { value: 'vue', label: 'Vue' },
                        { value: 'svelte', label: 'Svelte' },
                        { value: 'solid', label: 'Solid' },
                        { value: 'astro', label: 'Astro' },
                    ]}
                />
                <div className='flex flex-wrap items-center justify-between gap-4'>
                    <ToggleGroup
                        type='multiple'
                        label='Text format'
                        defaultValue={['bold']}
                        size='sm'
                        items={[
                            { value: 'bold', icon: <Bold size={16} />, ariaLabel: 'Bold' },
                            { value: 'italic', icon: <Italic size={16} />, ariaLabel: 'Italic' },
                            { value: 'underline', icon: <Underline size={16} />, ariaLabel: 'Underline' },
                        ]}
                    />
                    <div className='flex items-center gap-3'>
                        <Checkbox label='Remember me' defaultChecked />
                        <Separator orientation='vertical' decorative className='h-6' />
                        <CopyButton variant='icon' size='sm' text='npm install blossom-ui' label='Copy the install command' />
                    </div>
                </div>
                <Separator>verify</Separator>
                <OtpInput size='sm' length={6} separatorAfter={[3]} defaultValue='482' />
            </Panel>

            <Panel className='float-slow ml-2 rounded-[2.25rem] lg:ml-0 lg:rounded-3xl'>
                {/* Social proof that leaves the card at the top right */}
                <Sticker className='-right-8 -top-9 flex items-center gap-3 rounded-full py-2 pl-3 pr-5 [rotate:5deg] lg:hidden'>
                    <AvatarGroup avatars={photos.map((src) => ({ src }))} max={3} />
                    <div className='flex flex-col gap-0.5'>
                        <Rating value={5} size={14} />
                        <span className='text-xs text-neutral-500'>Loved by 2k devs</span>
                    </div>
                </Sticker>
                <StepsDemo />
            </Panel>
        </Appear>
    )
}

export default HeroComponents
