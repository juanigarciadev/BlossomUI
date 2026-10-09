// Skeleton-style illustrations used as previews of each component in the home grid.
const bar = 'rounded-full bg-neutral-300 dark:bg-neutral-700'
const block = 'rounded-lg bg-neutral-300 dark:bg-neutral-700'
const accent = 'bg-corporative'
const soft = 'bg-corporative bg-opacity-30'

const Lines = ({ widths, className = '' }) => (
    <div className={`flex flex-col gap-2 ${className}`}>
        {widths.map((w, i) => <div key={i} className={`h-2 ${bar}`} style={{ width: w }} />)}
    </div>
)

const skeletons = {
    Alerts: () => (
        <div className='flex flex-col gap-2 w-full'>
            {['bg-blue-200 dark:bg-blue-900', 'bg-green-200 dark:bg-green-900', 'bg-red-200 dark:bg-red-900'].map((c, i) => (
                <div key={i} className={`flex items-center gap-2 px-3 py-2 rounded-lg ${c}`}>
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
            <div className={`flex items-center justify-between px-3 py-2 rounded-lg ${soft}`}>
                <Lines widths={['110px']} />
                <div className={`h-5 w-12 rounded-md ${accent}`} />
            </div>
            <Lines widths={['90%', '70%', '80%']} />
        </div>
    ),
    Buttons: () => (
        <div className='flex flex-col items-center gap-3'>
            <div className='flex gap-2'>
                <div className={`h-9 w-24 rounded-lg ${accent}`} />
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
                <div key={i} className='flex flex-col flex-1 gap-2 p-2 rounded-lg border border-neutral-300 dark:border-neutral-700'>
                    <div className={`h-14 ${block}`} />
                    <Lines widths={['80%', '55%']} />
                    <div className={`h-5 w-14 rounded-md ${i ? soft : accent}`} />
                </div>
            ))}
        </div>
    ),
    Jumbotron: () => (
        <div className='flex flex-col items-center gap-3 w-full'>
            <div className={`h-3 w-3/4 ${bar}`} />
            <div className={`h-3 w-1/2 ${bar}`} />
            <Lines widths={['85%', '70%']} className='items-center w-full' />
            <div className={`h-8 w-24 rounded-lg ${accent}`} />
        </div>
    ),
    KBD: () => (
        <div className='flex items-center gap-2'>
            {['w-12', 'w-9', 'w-9'].map((w, i) => (
                <div key={i} className='flex items-center gap-2'>
                    <div className={`h-9 ${w} rounded-md border-b-4 border-neutral-400 bg-neutral-200 dark:bg-neutral-700 dark:border-neutral-500`} />
                    {i < 2 && <span className='text-neutral-400'>+</span>}
                </div>
            ))}
        </div>
    ),
    Pricing: () => (
        <div className='flex gap-3'>
            {[false, true, false].map((hot, i) => (
                <div key={i} className={`flex flex-col items-center gap-2 p-3 rounded-lg border ${hot ? 'border-corporative' : 'border-neutral-300 dark:border-neutral-700'}`} style={{ width: 72 }}>
                    <div className={`h-2 w-8 ${bar}`} />
                    <div className={`h-4 w-10 rounded ${hot ? accent : bar}`} />
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
                <div key={i} className='flex items-center gap-3 p-3 rounded-lg bg-white shadow-md dark:bg-neutral-800'>
                    <div className={`w-8 h-8 rounded-lg ${c}`} />
                    <Lines widths={['70%', '45%']} className='flex-1' />
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
