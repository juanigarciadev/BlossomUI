import { useState } from 'react'
import { Bold, Italic, Underline, TrendingUp } from 'lucide-react'
import { SocialButton } from '../UI/Buttons/Button'
import { AvatarGroup } from '../UI/Avatar/Avatar'
import { Checkbox } from '../UI/Forms/Forms'
import { Combobox } from '../UI/Combobox/Combobox'
import { ColorPicker } from '../UI/ColorPicker/ColorPicker'
import { CopyButton } from '../UI/CopyButton/CopyButton'
import { Gauge, Sparkline } from '../UI/Charts/Charts'
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

            <Panel className='float-slow rounded-[2rem_2rem_2rem_0.5rem] pb-20 [rotate:-1.5deg] lg:pb-5 lg:[rotate:0deg]'>
                <div className='flex items-center justify-between gap-4'>
                    <AvatarGroup avatars={photos.map((src) => ({ src }))} max={3} />
                    <Rating value={5} />
                </div>
                <div className='flex flex-wrap items-center gap-4'>
                    <div className='flex items-center gap-2'>
                        <SocialButton provider='google' iconOnly rounded />
                        <SocialButton provider='github' iconOnly rounded />
                        <SocialButton provider='apple' iconOnly rounded />
                    </div>
                    <div className='min-w-[11rem] flex-1'>
                        <SegmentedControl
                            fullWidth
                            label='Billing'
                            defaultValue='yearly'
                            options={[{ value: 'monthly', label: 'Monthly' }, { value: 'yearly', label: 'Yearly' }]}
                        />
                    </div>
                </div>
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

            <Panel className='float-slow ml-2 rounded-[0.5rem_2rem_2rem_2rem] lg:ml-0 lg:rounded-3xl'>
                {/* A trend that leaves the card at the top right */}
                <Sticker className='-right-8 -top-8 flex items-center gap-3 rounded-full py-2 pl-4 pr-5 [rotate:5deg] lg:hidden'>
                    <span className='grid h-8 w-8 place-items-center rounded-full bg-[color-mix(in_srgb,var(--blossom-accent,#f472b6)_20%,transparent)] text-[var(--blossom-accent,#f472b6)]'>
                        <TrendingUp size={16} />
                    </span>
                    <div className='flex flex-col'>
                        <span className='text-sm font-bold leading-none text-neutral-900 dark:text-white'>+24%</span>
                        <span className='text-xs text-neutral-500'>this week</span>
                    </div>
                    <div className='w-16'><Sparkline data={[4, 6, 5, 9, 8, 12, 15]} color='var(--blossom-accent,#f472b6)' height={28} label='Trend: up 24% this week' /></div>
                </Sticker>
                <StepsDemo />
            </Panel>
        </Appear>
    )
}

export default HeroComponents
