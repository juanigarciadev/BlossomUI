import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Bold, Italic, Underline, TrendingUp } from 'lucide-react'
import { AvatarGroup } from '../UI/Avatar/Avatar'
import { Calendar } from '../UI/Calendar/Calendar'
import { Checkbox, Switch } from '../UI/Forms/Forms'
import { Combobox } from '../UI/Combobox/Combobox'
import { ColorPicker } from '../UI/ColorPicker/ColorPicker'
import { CopyButton } from '../UI/CopyButton/CopyButton'
import { AreaChart, Gauge, Heatmap, RadarChart, Sparkline } from '../UI/Charts/Charts'
import { NumberInput } from '../UI/NumberInput/NumberInput'
import { Rating } from '../UI/Rating/Rating'
import { SegmentedControl, ToggleGroup } from '../UI/SegmentedControl/SegmentedControl'
import { SimplePagination } from '../UI/Pagination/Pagination'
import { Slider } from '../UI/Slider/Slider'
import { StepperProgress } from '../UI/Stepper/Stepper'
import { TimePicker } from '../UI/TimePicker/TimePicker'
import { TimerButton } from '../UI/TimerButton/TimerButton'
import { accentStyle } from '../UI/accent'
import { Appear } from '../Motion/Motion'

const photos = [
    'https://res.cloudinary.com/diruiumfk/image/upload/v1698155370/person-image-1_mqb6ut.jpg',
    'https://res.cloudinary.com/diruiumfk/image/upload/v1698155371/person-image-4_usvfxg.jpg',
    'https://res.cloudinary.com/diruiumfk/image/upload/v1698155370/person-image-3_fstmzw.jpg',
    'https://res.cloudinary.com/diruiumfk/image/upload/v1698155370/person-image-2_sjyoj5.jpg',
]

const PAGES = 3

/** Milliseconds each page stays before the timer button moves to the next one. */
const AUTOPLAY = 7000

/** True on the layouts where the pieces are stacked instead of placed on top of each other. */
const useStacked = () => {
    const query = '(max-width: 1023px)'
    const [stacked, setStacked] = useState(() => window.matchMedia?.(query).matches ?? false)
    useEffect(() => {
        const media = window.matchMedia(query)
        const update = () => setStacked(media.matches)
        media.addEventListener('change', update)
        return () => media.removeEventListener('change', update)
    }, [])
    return stacked
}

/** True when the stage has room for more pieces: on a big screen the middle of a page would be empty otherwise. */
const useWide = (ref) => {
    const [wide, setWide] = useState(false)
    useEffect(() => {
        const element = ref.current
        if (!element || typeof ResizeObserver === 'undefined') return
        const observer = new ResizeObserver(([entry]) => setWide(entry.contentRect.width >= 560))
        observer.observe(element)
        return () => observer.disconnect()
    }, [ref])
    return wide
}

/* -------------------------------------------------------------------------- */
/*  Flying pieces                                                             */
/* -------------------------------------------------------------------------- */

// Each page is a group of pieces. They arrive from the side the user is going to and leave towards the other one,
// one after another, as if they were thrown.
const scene = {
    initial: {},
    animate: { transition: { staggerChildren: 0.07 } },
    exit: { transition: { staggerChildren: 0.04 } },
}

// Which way the user is going: 1 for the next page, -1 for the previous one. The pieces that leave are frozen with the
// props they had, so the direction is read from here at the moment they fly.
const heading = { dir: 1 }

const flight = (calm) => ({
    initial: () => (calm ? { opacity: 0 } : { opacity: 0, x: heading.dir * 170, y: 70, rotate: heading.dir * 14, scale: 0.85 }),
    animate: { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1, transition: { type: 'spring', stiffness: 150, damping: 17 } },
    exit: () => (calm ? { opacity: 0, transition: { duration: 0.15 } } : { opacity: 0, x: heading.dir * -190, y: -80, rotate: heading.dir * -16, scale: 0.85, transition: { duration: 0.36, ease: 'easeIn' } }),
})

/** Moves a piece in and out. The float animation lives on the card inside, because a CSS animation would cancel this one. */
const Piece = ({ className = '', children }) => {
    const calm = useReducedMotion()
    return (
        <motion.div variants={flight(calm)} className={`${className} lg:static lg:w-full`}>
            {children}
        </motion.div>
    )
}

/** A card. */
const Panel = ({ className = '', children }) => (
    <div className={`relative flex flex-col gap-4 border border-neutral-200 bg-white/70 p-5 shadow-xl shadow-neutral-200/50 backdrop-blur-md dark:border-neutral-700 dark:bg-neutral-800/60 dark:shadow-none ${className}`}>
        {children}
    </div>
)

/** A piece with a solid background, so it reads on top of whatever is behind it. */
const Sticker = ({ className = '', children }) => (
    <div className={`relative rounded-2xl border border-neutral-200 bg-white p-3 shadow-2xl shadow-neutral-300/60 dark:border-neutral-600 dark:bg-neutral-800 dark:shadow-black/40 lg:shadow-lg ${className}`}>
        {children}
    </div>
)

/** A small label that leaves the card it belongs to. */
const Pill = ({ className = '', children }) => (
    <Sticker className={`flex items-center gap-3 rounded-full py-2 pl-3 pr-5 ${className}`}>{children}</Sticker>
)

/* -------------------------------------------------------------------------- */
/*  Page 1: a dashboard                                                       */
/* -------------------------------------------------------------------------- */

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

/** The number, the trend, a range switch and a stacked chart that answers to the pointer. */
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
            <AreaChart labels={data.labels} series={data.series} stacked height={100} legend={false} label='Revenue' />
        </>
    )
}

const PageDashboard = () => (
    <>
        <Piece className='absolute left-0 top-0 w-[94%]'>
            <Panel className='float-slow rounded-[2.25rem] [rotate:-1.5deg] lg:[rotate:0deg]'>
                <RevenueDemo />
            </Panel>
        </Piece>
        <Piece className='absolute bottom-0 left-3 w-[88%]'>
            <Panel className='float-slower gap-3 rounded-[1rem_2.5rem_1rem_2.5rem] lg:rounded-3xl'>
                <div className='max-w-[12rem]'>
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
                </div>
                <div className='flex flex-wrap items-center gap-4'>
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
                        <CopyButton variant='icon' size='sm' text='npm install blossom-ui' label='Copy the install command' />
                    </div>
                </div>
            </Panel>
        </Piece>
        <Piece className='absolute -left-10 top-[226px] z-20 w-fit lg:hidden'>
            <Sticker className='float-slower rounded-full px-5 pb-3 pt-4 [rotate:-8deg]'>
                <Gauge value={72} unit='%' caption='Score' size={96} label='Score' />
            </Sticker>
        </Piece>
        <Piece className='absolute -bottom-10 -right-10 z-20 w-fit lg:hidden'>
            <Pill className='float-slow [rotate:5deg]'>
                <AvatarGroup avatars={photos.map((src) => ({ src }))} max={3} />
                <div className='flex flex-col gap-0.5'>
                    <Rating value={5} size={14} />
                    <span className='text-xs text-neutral-500'>Loved by 2k devs</span>
                </div>
            </Pill>
        </Piece>
    </>
)

/* -------------------------------------------------------------------------- */
/*  Page 2: a booking                                                         */
/* -------------------------------------------------------------------------- */

const today = new Date()
const stay = { start: new Date(today.getFullYear(), today.getMonth(), 8), end: new Date(today.getFullYear(), today.getMonth(), 14) }

const PageBooking = ({ wide }) => (
    <>
        <Piece className='absolute left-1 top-0 w-72'>
            {/* A smaller calendar, so the brand color picker does not cover its last column */}
            <div className='origin-top-left scale-[0.86] lg:scale-100'>
                <div className='float-slow [rotate:-2deg] lg:[rotate:0deg]'>
                    <Calendar mode='range' defaultValue={stay} defaultMonth={stay.start} className='shadow-xl shadow-neutral-200/50 dark:shadow-none' />
                </div>
            </div>
        </Piece>
        <Piece className='absolute -right-10 top-0 z-20 w-[13.5rem]'>
            <Sticker className='float-slower flex flex-col gap-3 [rotate:4deg] lg:[rotate:0deg]'>
                <NumberInput label='Guests' defaultValue={2} min={1} max={10} />
                <TimePicker label='Check-in' defaultValue='15:30' hour12 />
            </Sticker>
        </Piece>
        {wide && (
            <>
                <Piece className='absolute left-[40%] top-[84px] z-10 w-fit'>
                    <Sticker className='float-slow flex flex-col gap-1 rounded-2xl px-4 py-3 [rotate:-4deg]'>
                        <Rating value={4.5} size={14} />
                        <span className='whitespace-nowrap text-xs text-neutral-500'>Superhost · 128 reviews</span>
                    </Sticker>
                </Piece>
                <Piece className='absolute left-[44%] top-[178px] z-10 w-fit'>
                    <Sticker className='float-slower flex items-center gap-3 rounded-full px-4 py-2.5 [rotate:3deg]'>
                        <span className='relative flex h-2.5 w-2.5'>
                            <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60' />
                            <span className='relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500' />
                        </span>
                        <span className='whitespace-nowrap text-sm font-medium text-neutral-800 dark:text-white'>3 rooms left</span>
                    </Sticker>
                </Piece>
            </>
        )}
        <Piece className='absolute bottom-0 left-0 w-[80%]'>
            <Panel className='float-slow gap-4 rounded-[2.5rem_1rem_2.5rem_1rem] px-7 py-5 [rotate:1deg] lg:rounded-3xl lg:[rotate:0deg]'>
                <Slider label='Budget' defaultValue={60} showValue unit=' $/night' min={20} max={200} step={5} />
                <Switch label='Free cancellation' defaultChecked />
            </Panel>
        </Piece>
    </>
)

/* -------------------------------------------------------------------------- */
/*  Page 3: data                                                              */
/* -------------------------------------------------------------------------- */

const heat = [
    [1, 3, 5, 8, 6, 2, 1],
    [2, 4, 9, 12, 10, 5, 2],
    [3, 6, 11, 15, 13, 7, 3],
    [1, 2, 6, 9, 7, 3, 1],
]

const PageData = ({ wide }) => (
    <>
        <Piece className='absolute left-0 top-0 w-[15rem]'>
            <Panel className='float-slow gap-2 rounded-[2rem_2rem_0.75rem_2rem] p-4 [rotate:-2deg] lg:rounded-3xl lg:[rotate:0deg]'>
                <span className='text-xs font-medium uppercase tracking-wide text-neutral-500'>Visits by day and hour</span>
                <Heatmap data={heat} rows={['9h', '12h', '15h', '18h']} columns={['M', 'T', 'W', 'T', 'F', 'S', 'S']} cell={20} label='Visits by day and hour' />
            </Panel>
        </Piece>
        <Piece className='absolute left-[40%] top-[56px] z-20 w-fit'>
            <Sticker className='float-slower rounded-[2rem] px-5 pb-3 pt-5 [rotate:6deg] lg:[rotate:0deg]'>
                <Gauge value={86} unit='%' caption='Satisfaction' size={124} label='Satisfaction' thresholds={[{ from: 0, color: '#f87171' }, { from: 50, color: '#fbbf24' }, { from: 75, color: '#34d399' }]} />
            </Sticker>
        </Piece>
        <Piece className='absolute bottom-0 left-4 w-[15rem]'>
            <Panel className='float-slower items-center gap-1 rounded-[0.75rem_2.25rem_2.25rem_2.25rem] p-4 [rotate:1.5deg] lg:rounded-3xl lg:[rotate:0deg]'>
                <span className='self-start text-xs font-medium uppercase tracking-wide text-neutral-500'>Skills</span>
                <RadarChart
                    axes={['Design', 'Code', 'Writing', 'Speed', 'Testing', 'Support']}
                    max={10}
                    size={190}
                    legend={false}
                    label='Skills'
                    series={[
                        { name: 'Ana', values: [9, 6, 7, 5, 8, 6] },
                        { name: 'Luis', values: [5, 9, 4, 8, 6, 7], color: '#60a5fa' },
                    ]}
                />
            </Panel>
        </Piece>
        {wide && (
            <>
                {/* The middle of the page: a conversion card between the radar and the brand color */}
                <Piece className='absolute left-[40%] top-[236px] z-10 w-[11rem]'>
                    <Panel className='float-slow gap-1 rounded-[1.75rem] p-4 [rotate:-3deg]'>
                        <span className='text-xs font-medium uppercase tracking-wide text-neutral-500'>Conversion</span>
                        <div className='flex items-baseline gap-2'>
                            <span className='text-2xl font-bold text-neutral-900 dark:text-white'>4.8%</span>
                            <span className='text-xs font-semibold text-green-600 dark:text-green-400'>+0.6</span>
                        </div>
                        <Sparkline data={[3, 4, 3.6, 4.2, 4.1, 4.8, 5.2]} height={36} label='Conversion trend' />
                    </Panel>
                </Piece>
                <Piece className='absolute -right-6 bottom-3 z-10 w-fit'>
                    <Pill className='float-slower [rotate:4deg]'>
                        <span className='relative flex h-2.5 w-2.5'>
                            <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60' />
                            <span className='relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500' />
                        </span>
                        <span className='whitespace-nowrap text-sm font-medium text-neutral-800 dark:text-white'>Live · 1,284 online</span>
                    </Pill>
                </Piece>
            </>
        )}
        <Piece className={`absolute z-20 w-fit lg:hidden ${wide ? 'right-24 top-[110px]' : '-right-6 bottom-3'}`}>
            <Pill className='float-slow [rotate:5deg]'>
                <span className='grid h-8 w-8 place-items-center rounded-full bg-[color-mix(in_srgb,var(--blossom-accent,#f472b6)_20%,transparent)] text-[var(--blossom-accent,#f472b6)]'>
                    <TrendingUp size={16} />
                </span>
                <div className='flex flex-col'>
                    <span className='text-sm font-bold leading-none text-neutral-900 dark:text-white'>+24%</span>
                    <span className='text-xs text-neutral-500'>this week</span>
                </div>
            </Pill>
        </Piece>
    </>
)

/* -------------------------------------------------------------------------- */
/*  The hero                                                                  */
/* -------------------------------------------------------------------------- */

const HeroComponents = () => {
    // The brand color of the whole stack: the hue bar changes every accent inside it, on every page.
    const [brand, setBrand] = useState('#f472b6')
    // The hint stays, on every page, until the user tries the picker
    const [tried, setTried] = useState(false)
    const [page, setPage] = useState(1)
    const stacked = useStacked()
    const calm = useReducedMotion()
    const stage = useRef(null)
    const wide = useWide(stage)

    const go = (next) => {
        heading.dir = next > page ? 1 : -1
        setPage(next)
    }

    return (
        <Appear
            as='section'
            delay={0.1}
            y={24}
            style={accentStyle(brand)}
            // Every color in the stack follows the brand color with a short transition, so the change is felt but not slow
            className='relative flex w-full flex-col gap-5 lg:items-start [&_*]:transition-[background-color,border-color,color,fill,stroke,box-shadow,left,width,stroke-dasharray] [&_*]:duration-200'
        >
            {/* Soft shape behind the stack, bigger than the cards */}
            <div aria-hidden className='pointer-events-none absolute -right-16 top-1/3 h-72 w-72 -translate-y-1/2 rounded-full bg-[var(--blossom-accent,#f472b6)] opacity-20 blur-3xl lg:hidden' />

            <div ref={stage} className='relative h-[460px] w-full lg:flex lg:h-auto lg:flex-col lg:gap-5'>
                {/* The pieces of the open page. When it changes they fly out and the next ones fly in. */}
                <AnimatePresence initial={false} mode={stacked ? 'wait' : 'sync'}>
                    <motion.div
                        key={page}
                        variants={scene}
                        initial='initial'
                        animate='animate'
                        exit='exit'
                        className='absolute inset-0 lg:static lg:flex lg:flex-col lg:items-start lg:gap-5'
                    >
                        {page === 1 ? <PageDashboard /> : page === 2 ? <PageBooking wide={wide} /> : <PageData wide={wide} />}
                    </motion.div>
                </AnimatePresence>

                {/* The brand color stays on every page, so every component can be tried with it */}
                <div className='absolute -right-14 top-[206px] z-30 w-72 lg:relative lg:right-auto lg:top-auto lg:w-fit'>
                    <AnimatePresence>
                        {!tried && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ delay: 0.4, type: 'spring', stiffness: 200, damping: 16 }}
                                aria-hidden='true'
                                className='pointer-events-none absolute left-full top-0 ml-2 flex flex-col items-start text-[var(--blossom-accent,#f472b6)] [rotate:6deg] xl:hidden'
                            >
                                <span className='whitespace-nowrap text-lg font-bold italic tracking-tight'>Try me!</span>
                                {/* The arrow leaves the text, goes down and ends pointing left at the picker */}
                                <svg width='64' height='46' viewBox='0 0 64 46' fill='none' stroke='currentColor' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round'>
                                    <path d='M50 4C54 24 36 38 8 36' />
                                    <path d='M17 28 8 36 18 42' />
                                </svg>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <Sticker className='float-slower [rotate:3deg] lg:[rotate:0deg]'>
                        <ColorPicker
                            inline
                            area={false}
                            label='Brand color'
                            value={brand}
                            onChange={(color) => {
                                setBrand(color)
                                setTried(true)
                            }}
                            presets={['#f472b6', '#a78bfa', '#60a5fa', '#34d399', '#fbbf24', '#f87171']}
                        />
                    </Sticker>
                </div>
            </div>

            <Panel className='float-slow z-10 ml-2 gap-3 rounded-[2.25rem] py-4 lg:ml-0 lg:rounded-3xl'>
                <StepperProgress total={PAGES} current={page - 1} />
                <div className='flex items-center justify-between gap-3'>
                    {/* Moves to the next page by itself. Pressing it pauses it, and going to another page by hand starts the bar again. */}
                    <TimerButton size='sm' duration={AUTOPLAY} defaultRunning={!calm} resetKey={page} onComplete={() => go(page % PAGES + 1)} labels={{ pause: 'Pause the automatic change of page', play: 'Change the page automatically' }}>
                        Auto
                    </TimerButton>
                    <SimplePagination page={page} total={PAGES} onChange={go} />
                </div>
            </Panel>
        </Appear>
    )
}

export default HeroComponents
