import type { ReactNode } from 'react'

export interface StatProps {
    label: string
    value: string | number
    /** Change since the previous period, for example "+12%". */
    change?: string
    /** Colors the change: `up` is green, `down` is red and `neutral` is gray. */
    trend?: 'up' | 'down' | 'neutral'
    icon?: ReactNode
    /** Recent values, drawn as a small line under the number. */
    trendData?: number[]
}

const lineColors = { up: '#16a34a', down: '#dc2626', neutral: '#a3a3a3' }

/** Tiny line chart used inside a stat. */
const Spark = ({ data, color }: { data: number[]; color: string }) => {
    const min = Math.min(...data)
    const range = Math.max(...data) - min || 1
    const path = data
        .map((value, index) => `${index === 0 ? 'M' : 'L'}${((index / (data.length - 1)) * 100).toFixed(2)},${(100 - ((value - min) / range) * 84 - 8).toFixed(2)}`)
        .join(' ')
    return (
        <svg viewBox='0 0 100 100' preserveAspectRatio='none' role='img' aria-label={`Trend: ${data.join(', ')}`} className='h-10 w-full overflow-visible'>
            <path d={path} fill='none' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' vectorEffect='non-scaling-stroke' />
        </svg>
    )
}

const trends = {
    up: 'text-green-600 dark:text-green-400',
    down: 'text-red-600 dark:text-red-400',
    neutral: 'text-neutral-500',
}

const arrows = {
    up: 'm5 15 7-7 7 7',
    down: 'm19 9-7 7-7-7',
    neutral: 'M5 12h14',
}

export const Stat = ({ label, value, change, trend = 'neutral', icon, trendData }: StatProps) => (
    <div className='flex flex-col gap-2 rounded-xl border border-neutral-200 bg-neutral-50 p-5 dark:border-neutral-700 dark:bg-neutral-800'>
        <div className='flex items-center justify-between text-sm text-neutral-500 dark:text-neutral-400'>
            <span>{label}</span>
            {icon}
        </div>
        <span className='text-3xl font-bold tracking-tight text-neutral-900 dark:text-white'>{value}</span>
        {change && (
            <span className={`flex items-center gap-1 text-sm font-medium ${trends[trend]}`}>
                <svg className='h-4 w-4' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2.5'><path strokeLinecap='round' strokeLinejoin='round' d={arrows[trend]} /></svg>
                {change}
            </span>
        )}
        {trendData && trendData.length > 1 && <Spark data={trendData} color={lineColors[trend]} />}
    </div>
)

export interface StatsProps {
    items: StatProps[]
}

/** A responsive row of stats. */
export const Stats = ({ items }: StatsProps) => (
    <div className='grid w-full grid-cols-[repeat(auto-fit,minmax(11rem,1fr))] gap-4'>
        {items.map((item) => <Stat key={item.label} {...item} />)}
    </div>
)
