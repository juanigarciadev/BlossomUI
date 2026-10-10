// Skeleton-style illustrations used as previews of each component in the home grid.
const bar = 'rounded-full bg-neutral-300 dark:bg-neutral-700'
const block = 'rounded-xl bg-neutral-300 dark:bg-neutral-700'
const accent = 'bg-corporative'
const soft = 'bg-corporative bg-opacity-30'

const Lines = ({ widths, className = '' }) => (
    <div className={`flex flex-col gap-2 ${className}`}>
        {widths.map((w, i) => <div key={i} className={`h-2 ${bar}`} style={{ width: w }} />)}
    </div>
)

const skeletons = {
    Accordion: () => (
        <div className='flex flex-col w-full rounded-xl border border-neutral-300 dark:border-neutral-700 divide-y divide-neutral-300 dark:divide-neutral-700'>
            {[true, false, false].map((open, i) => (
                <div key={i} className='flex flex-col gap-2 p-3'>
                    <div className='flex items-center justify-between'>
                        <div className={`h-2 w-24 ${open ? accent : bar} rounded-full`} />
                        <div className={`h-2 w-2 ${bar}`} />
                    </div>
                    {open && <Lines widths={['90%', '60%']} />}
                </div>
            ))}
        </div>
    ),
    Breadcrumb: () => (
        <div className='flex items-center gap-2'>
            <div className={`h-2 w-12 ${bar}`} />
            <span className='text-neutral-400'>›</span>
            <div className={`h-2 w-16 ${bar}`} />
            <span className='text-neutral-400'>›</span>
            <div className={`h-2 w-14 ${accent} rounded-full`} />
        </div>
    ),
    Carousel: () => (
        <div className='flex flex-col items-center gap-3 w-full'>
            <div className='flex w-full gap-2'>
                <div className={`h-20 flex-1 ${block}`} />
                <div className={`h-20 w-10 ${block} opacity-60`} />
            </div>
            <div className='flex gap-1.5'>
                <div className={`h-1.5 w-5 ${accent} rounded-full`} />
                <div className={`h-1.5 w-1.5 ${bar}`} />
                <div className={`h-1.5 w-1.5 ${bar}`} />
            </div>
        </div>
    ),
    Charts: () => (
        <div className='flex items-end gap-2 h-20'>
            {[40, 65, 50, 85, 60, 95].map((h, i) => (
                <div key={i} className={`w-5 rounded-t-lg ${i === 5 ? accent : soft}`} style={{ height: `${h}%` }} />
            ))}
        </div>
    ),
    'Chip input': () => (
        <div className='flex flex-wrap items-center gap-2 w-full p-2 rounded-xl border border-neutral-300 dark:border-neutral-700'>
            {[accent, soft, soft].map((c, i) => <div key={i} className={`h-5 w-12 rounded-lg ${c}`} />)}
            <div className={`h-2 w-10 ${bar}`} />
        </div>
    ),
    'Command palette': () => (
        <div className='flex flex-col w-full rounded-xl border border-neutral-300 dark:border-neutral-700 overflow-hidden'>
            <div className='p-2 border-b border-neutral-300 dark:border-neutral-700'><div className={`h-2 w-1/2 ${bar}`} /></div>
            <div className='flex flex-col gap-2 p-2'>
                {[true, false, false].map((a, i) => (
                    <div key={i} className={`h-5 rounded-lg ${a ? soft : ''} flex items-center px-2`}><div className={`h-2 w-1/2 ${bar}`} /></div>
                ))}
            </div>
        </div>
    ),
    'Date picker': () => (
        <div className='grid grid-cols-7 gap-1.5'>
            {Array.from({ length: 14 }, (_, i) => (
                <div key={i} className={`h-5 w-5 ${i === 9 ? 'rounded-lg bg-corporative' : bar}`} />
            ))}
        </div>
    ),
    Drawer: () => (
        <div className='flex w-full h-24 rounded-xl border border-neutral-300 dark:border-neutral-700 overflow-hidden'>
            <div className='flex-1 bg-neutral-200 dark:bg-neutral-800' />
            <div className='flex w-2/5 flex-col gap-2 p-3 border-l border-neutral-300 dark:border-neutral-700'>
                <div className={`h-2 w-3/4 ${accent} rounded-full`} />
                <Lines widths={['100%', '70%']} />
            </div>
        </div>
    ),
    Dropdown: () => (
        <div className='flex flex-col items-start gap-2'>
            <div className={`h-8 w-24 ${block}`} />
            <div className='flex flex-col gap-2 p-2 w-32 rounded-xl border border-neutral-300 dark:border-neutral-700'>
                <div className={`h-2 w-full ${soft} rounded-full`} />
                <div className={`h-2 w-3/4 ${bar}`} />
                <div className={`h-2 w-1/2 ${bar}`} />
            </div>
        </div>
    ),
    'Empty state': () => (
        <div className='flex flex-col items-center gap-3'>
            <div className={`h-10 w-10 rounded-full ${soft}`} />
            <Lines widths={['100px', '70px']} className='items-center' />
            <div className={`h-6 w-16 rounded-lg ${accent}`} />
        </div>
    ),
    'File upload': () => (
        <div className='flex flex-col items-center gap-2 w-full p-4 rounded-2xl border-2 border-dashed border-neutral-300 dark:border-neutral-700'>
            <div className={`h-6 w-6 ${accent} rounded-lg`} />
            <Lines widths={['80px', '50px']} className='items-center' />
        </div>
    ),
    Navbar: () => (
        <div className='flex items-center justify-between w-full p-2 rounded-xl border border-neutral-300 dark:border-neutral-700'>
            <div className={`h-3 w-10 ${accent} rounded-full`} />
            <div className='flex gap-2'>
                {[0, 1, 2].map((i) => <div key={i} className={`h-2 w-8 ${bar}`} />)}
            </div>
        </div>
    ),
    Popover: () => (
        <div className='flex flex-col items-center gap-2'>
            <div className='flex flex-col gap-2 p-3 w-32 rounded-xl border border-neutral-300 shadow-md dark:border-neutral-700'>
                <div className={`h-2 w-2/3 ${accent} rounded-full`} />
                <Lines widths={['100%', '60%']} />
            </div>
            <div className={`h-7 w-20 ${block}`} />
        </div>
    ),
    Slider: () => (
        <div className='flex flex-col gap-3 w-full'>
            <div className='relative h-2 w-full rounded-full bg-neutral-300 dark:bg-neutral-700'>
                <div className='h-2 w-2/3 rounded-full bg-corporative' />
                <div className='absolute -top-1.5 left-[62%] h-5 w-5 rounded-full border-2 border-corporative bg-white dark:bg-neutral-900' />
            </div>
            <Lines widths={['40%']} />
        </div>
    ),
    Stats: () => (
        <div className='flex gap-3 w-full'>
            {[0, 1].map((i) => (
                <div key={i} className='flex flex-col flex-1 gap-2 p-3 rounded-xl border border-neutral-300 dark:border-neutral-700'>
                    <div className={`h-2 w-10 ${bar}`} />
                    <div className={`h-4 w-14 ${block}`} />
                    <div className={`h-2 w-8 ${i ? 'bg-red-300 dark:bg-red-900' : 'bg-green-300 dark:bg-green-900'} rounded-full`} />
                </div>
            ))}
        </div>
    ),
    Table: () => (
        <div className='flex flex-col w-full rounded-xl border border-neutral-300 dark:border-neutral-700 divide-y divide-neutral-300 dark:divide-neutral-700'>
            {[accent, bar, bar].map((c, i) => (
                <div key={i} className='flex items-center gap-3 p-2'>
                    <div className={`h-2 w-1/4 ${c} rounded-full`} />
                    <div className={`h-2 w-1/3 ${bar}`} />
                    <div className={`h-2 w-1/6 ${bar}`} />
                </div>
            ))}
        </div>
    ),
    Tabs: () => (
        <div className='flex flex-col gap-3 w-full'>
            <div className='flex gap-4 border-b border-neutral-300 dark:border-neutral-700'>
                {[0, 1, 2].map((i) => <div key={i} className={`h-2 w-10 mb-2 rounded-full ${i === 0 ? accent : bar}`} />)}
            </div>
            <Lines widths={['90%', '65%']} />
        </div>
    ),
    Tooltip: () => (
        <div className='flex flex-col items-center gap-1'>
            <div className='h-6 w-20 rounded-lg bg-neutral-800 dark:bg-neutral-200' />
            <div className={`h-8 w-8 ${block}`} />
        </div>
    ),
    Alerts: () => (
        <div className='flex flex-col gap-2 w-full'>
            {['bg-blue-200 dark:bg-blue-900', 'bg-green-200 dark:bg-green-900', 'bg-red-200 dark:bg-red-900'].map((c, i) => (
                <div key={i} className={`flex items-center gap-2 px-3 py-2 rounded-xl ${c}`}>
                    <div className='w-2.5 h-2.5 rounded-full bg-white/70' />
                    <div className='h-2 rounded-full bg-white/70' style={{ width: `${70 - i * 12}%` }} />
                </div>
            ))}
        </div>
    ),
    Avatar: () => (
        <div className='flex flex-col items-center gap-4'>
            <div className='flex -space-x-3'>
                {[0, 1, 2, 3].map((i) => <div key={i} className={`w-11 h-11 rounded-full border-2 border-white dark:border-neutral-900 ${i === 3 ? accent : bar}`} />)}
            </div>
            <div className='flex items-center gap-3'>
                <div className='relative'>
                    <div className={`w-11 h-11 rounded-full ${bar}`} />
                    <span className='absolute top-0 -right-1 w-3.5 h-3.5 rounded-full bg-green-500 border-2 border-white dark:border-neutral-900' />
                </div>
                <Lines widths={['80px', '56px']} />
            </div>
        </div>
    ),
    Badges: () => (
        <div className='flex flex-wrap justify-center gap-2'>
            {[accent, soft, 'bg-blue-300 dark:bg-blue-800', 'bg-green-300 dark:bg-green-800', 'bg-yellow-300 dark:bg-yellow-700', 'bg-red-300 dark:bg-red-800'].map((c, i) => (
                <div key={i} className={`h-6 rounded-full ${c}`} style={{ width: `${48 + (i % 3) * 14}px` }} />
            ))}
        </div>
    ),
    Banner: () => (
        <div className='flex flex-col w-full gap-3'>
            <div className={`flex items-center justify-between px-3 py-2 rounded-xl ${soft}`}>
                <Lines widths={['110px']} />
                <div className={`h-5 w-12 rounded-xl ${accent}`} />
            </div>
            <Lines widths={['90%', '70%', '80%']} />
        </div>
    ),
    Buttons: () => (
        <div className='flex flex-col items-center gap-3'>
            <div className='flex gap-2'>
                <div className={`h-9 w-24 rounded-xl ${accent}`} />
                <div className={`h-9 w-24 ${block}`} />
            </div>
            <div className='flex gap-2'>
                <div className='h-9 w-24 rounded-full border-2 border-corporative' />
                <div className={`h-9 w-9 rounded-full ${bar}`} />
                <div className={`h-9 w-9 ${block}`} />
            </div>
        </div>
    ),
    Cards: () => (
        <div className='flex gap-3 w-full'>
            {[0, 1].map((i) => (
                <div key={i} className='flex flex-col flex-1 gap-2 p-2 rounded-xl border border-neutral-300 dark:border-neutral-700'>
                    <div className={`h-14 ${block}`} />
                    <Lines widths={['80%', '55%']} />
                    <div className={`h-5 w-14 rounded-xl ${i ? soft : accent}`} />
                </div>
            ))}
        </div>
    ),
    Jumbotron: () => (
        <div className='flex flex-col items-center gap-3 w-full'>
            <div className={`h-3 w-3/4 ${bar}`} />
            <div className={`h-3 w-1/2 ${bar}`} />
            <Lines widths={['85%', '70%']} className='items-center w-full' />
            <div className={`h-8 w-24 rounded-xl ${accent}`} />
        </div>
    ),
    KBD: () => (
        <div className='flex items-center gap-2'>
            {['w-12', 'w-9', 'w-9'].map((w, i) => (
                <div key={i} className='flex items-center gap-2'>
                    <div className={`h-9 ${w} rounded-xl border-b-4 border-neutral-400 bg-neutral-200 dark:bg-neutral-700 dark:border-neutral-500`} />
                    {i < 2 && <span className='text-neutral-400'>+</span>}
                </div>
            ))}
        </div>
    ),
    Pricing: () => (
        <div className='flex gap-3'>
            {[false, true, false].map((hot, i) => (
                <div key={i} className={`flex flex-col items-center gap-2 p-3 rounded-xl border ${hot ? 'border-corporative' : 'border-neutral-300 dark:border-neutral-700'}`} style={{ width: 72 }}>
                    <div className={`h-2 w-8 ${bar}`} />
                    <div className={`h-4 w-10 rounded-xl ${hot ? accent : bar}`} />
                    <Lines widths={['100%', '80%', '90%']} className='w-full' />
                </div>
            ))}
        </div>
    ),
    Progress: () => (
        <div className='flex flex-col gap-4 w-full'>
            {[75, 45, 90].map((p, i) => (
                <div key={i} className={`h-3 w-full ${bar}`}>
                    <div className={`h-3 rounded-full ${accent}`} style={{ width: `${p}%` }} />
                </div>
            ))}
        </div>
    ),
    Rating: () => (
        <div className='flex flex-col items-center gap-3'>
            <div className='flex gap-1'>
                {[0, 1, 2, 3, 4].map((i) => (
                    <svg key={i} width='24' height='24' viewBox='0 0 20 20' className={i < 4 ? 'text-corporative' : 'text-neutral-300 dark:text-neutral-700'} fill='currentColor'>
                        <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
                    </svg>
                ))}
            </div>
            <Lines widths={['120px', '80px']} className='items-center' />
        </div>
    ),
    Skeleton: () => (
        <div className='flex items-center gap-3 w-full'>
            <div className={`w-16 h-16 shrink-0 ${block}`} />
            <Lines widths={['100%', '85%', '60%']} className='flex-1' />
        </div>
    ),
    Spinners: () => (
        <div className='flex items-center gap-4'>
            {[24, 36, 24].map((s, i) => (
                <div key={i} className={`rounded-full border-4 border-neutral-300 dark:border-neutral-700 ${i === 1 ? 'border-t-corporative' : 'border-t-neutral-500'}`} style={{ width: s, height: s }} />
            ))}
        </div>
    ),
    Survey: () => (
        <div className='flex flex-col items-center gap-3'>
            <Lines widths={['130px']} />
            <div className='flex gap-2'>
                {[0, 1, 2, 3, 4].map((i) => <div key={i} className={`w-9 h-9 rounded-full ${i === 3 ? accent : bar}`} />)}
            </div>
        </div>
    ),
    Toasts: () => (
        <div className='flex flex-col gap-2 w-full'>
            {[accent, bar].map((c, i) => (
                <div key={i} className='flex items-center gap-3 p-3 rounded-xl bg-white shadow-md dark:bg-neutral-800'>
                    <div className={`w-8 h-8 rounded-xl ${c}`} />
                    <Lines widths={['70%', '45%']} className='flex-1' />
                </div>
            ))}
        </div>
    ),
    Footer: () => (
        <div className='flex flex-col w-full gap-3 p-3 rounded-xl border border-neutral-300 dark:border-neutral-700'>
            <div className='flex justify-between gap-3'>
                <div className={`h-3 w-16 ${bar}`} />
                {[0, 1, 2].map((i) => <Lines key={i} widths={['36px', '28px', '32px']} />)}
            </div>
            <div className='h-px w-full bg-neutral-300 dark:bg-neutral-700' />
            <Lines widths={['90px']} className='items-center self-center' />
        </div>
    ),
    Forms: () => (
        <div className='flex flex-col w-full gap-3'>
            <Lines widths={['48px']} />
            <div className='h-9 w-full rounded-xl border-2 border-corporative' />
            <div className='flex items-center gap-2'>
                <div className={`h-4 w-8 ${accent} rounded-full`} />
                <Lines widths={['70px']} />
            </div>
        </div>
    ),
    Modal: () => (
        <div className='flex flex-col w-4/5 gap-3 p-3 rounded-xl bg-white shadow-lg dark:bg-neutral-800'>
            <div className='flex items-center justify-between'>
                <div className={`h-3 w-20 ${bar}`} />
                <div className={`w-4 h-4 ${bar}`} />
            </div>
            <Lines widths={['100%', '75%']} />
            <div className='flex justify-end gap-2'>
                <div className={`h-6 w-12 rounded-xl ${block}`} />
                <div className={`h-6 w-12 rounded-xl ${accent}`} />
            </div>
        </div>
    ),
    Pagination: () => (
        <div className='flex items-center gap-1'>
            {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} className={`w-8 h-8 rounded-xl ${i === 2 ? accent : block}`} />
            ))}
        </div>
    ),
    Stepper: () => (
        <div className='flex items-center w-full'>
            {[0, 1, 2].map((i) => (
                <div key={i} className={`flex items-center ${i < 2 ? 'flex-1' : ''}`}>
                    <div className={`w-7 h-7 shrink-0 rounded-full ${i === 0 ? accent : i === 1 ? 'border-2 border-corporative' : bar}`} />
                    {i < 2 && <div className={`h-0.5 flex-1 mx-1 ${i === 0 ? accent : bar}`} />}
                </div>
            ))}
        </div>
    ),
    Timeline: () => (
        <div className='flex flex-col gap-4 border-l border-neutral-300 pl-4 dark:border-neutral-700'>
            {[accent, bar, bar].map((c, i) => (
                <div key={i} className='relative'>
                    <div className={`absolute -left-[21px] top-0.5 w-2.5 h-2.5 rounded-full ${c}`} />
                    <Lines widths={['90px', '130px']} />
                </div>
            ))}
        </div>
    ),
}

const ComponentSkeleton = ({ name }) => {
    const Skeleton = skeletons[name]
    return Skeleton ? <Skeleton /> : <div className={`h-16 w-full ${block}`} />
}

export default ComponentSkeleton
