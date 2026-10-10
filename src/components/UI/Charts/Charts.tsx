import { useId, useState, type PointerEvent, type ReactNode } from 'react'
import { Tooltip } from '../Tooltip/Tooltip'

/** Colors used when a datum does not set its own. They follow the palette of the library. */
const palette = ['#f472b6', '#a78bfa', '#60a5fa', '#34d399', '#fbbf24', '#f87171']

const colorAt = (index: number) => palette[index % palette.length]

export interface ChartDatum {
    label: string
    value: number
    /** Any CSS color. Defaults to the palette. */
    color?: string
}

const format = (value: number) => new Intl.NumberFormat('en-US', { maximumFractionDigits: 1 }).format(value)

const summary = (data: ChartDatum[]) => data.map((datum) => `${datum.label}: ${format(datum.value)}`).join(', ')

/* -------------------------------------------------------------------------- */
/*  Sparkline                                                                 */
/* -------------------------------------------------------------------------- */

export interface SparklineProps {
    data: number[]
    color?: string
    /** Fill the area under the line. */
    filled?: boolean
    /** Height in pixels. The width fills the container. */
    height?: number
    label?: string
}

/** A tiny line without axes, ideal inside cards and tables. */
export const Sparkline = ({ data, color = '#f472b6', filled = true, height = 40, label }: SparklineProps) => {
    const id = useId()
    if (data.length < 2) return null

    const min = Math.min(...data)
    const max = Math.max(...data)
    const range = max - min || 1
    const points = data.map((value, index) => [(index / (data.length - 1)) * 100, 100 - ((value - min) / range) * 84 - 8])
    const line = points.map(([x, y], index) => `${index === 0 ? 'M' : 'L'}${x.toFixed(2)},${y.toFixed(2)}`).join(' ')

    return (
        <svg
            viewBox='0 0 100 100'
            preserveAspectRatio='none'
            role='img'
            aria-label={label ?? `Trend: ${data.join(', ')}`}
            className='w-full overflow-visible'
            style={{ height }}
        >
            {filled && (
                <>
                    <defs>
                        <linearGradient id={id} x1='0' x2='0' y1='0' y2='1'>
                            <stop offset='0%' stopColor={color} stopOpacity='0.35' />
                            <stop offset='100%' stopColor={color} stopOpacity='0' />
                        </linearGradient>
                    </defs>
                    <path d={`${line} L100,100 L0,100 Z`} fill={`url(#${id})`} />
                </>
            )}
            <path d={line} fill='none' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' vectorEffect='non-scaling-stroke' />
        </svg>
    )
}

/* -------------------------------------------------------------------------- */
/*  Bar chart                                                                 */
/* -------------------------------------------------------------------------- */

export interface BarChartProps {
    data: ChartDatum[]
    /** Height of the chart in pixels when it is vertical. */
    height?: number
    horizontal?: boolean
    /** Show the value of each bar. */
    showValues?: boolean
    /** Name of what is measured, used for screen readers. */
    label?: string
}

export const BarChart = ({ data, height = 220, horizontal = false, showValues = true, label = 'Bar chart' }: BarChartProps) => {
    const max = Math.max(...data.map((datum) => datum.value), 1)

    if (horizontal) {
        return (
            <div role='img' aria-label={`${label}. ${summary(data)}`} className='flex w-full flex-col gap-3'>
                {data.map((datum, index) => (
                    <div key={datum.label} className='flex items-center gap-3 text-sm'>
                        <span className='w-20 shrink-0 truncate text-neutral-600 dark:text-neutral-300'>{datum.label}</span>
                        <div className='h-6 flex-1 rounded-lg bg-neutral-200 dark:bg-neutral-800'>
                            <div
                                className='h-full rounded-lg transition-[width] duration-500'
                                style={{ width: `${(datum.value / max) * 100}%`, backgroundColor: datum.color ?? colorAt(index) }}
                            />
                        </div>
                        {showValues && <span className='w-12 shrink-0 text-right font-medium text-neutral-900 dark:text-white'>{format(datum.value)}</span>}
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div role='img' aria-label={`${label}. ${summary(data)}`} className='flex w-full items-end gap-3' style={{ height }}>
            {data.map((datum, index) => (
                <div key={datum.label} className='flex h-full min-w-0 flex-1 flex-col items-center justify-end gap-2'>
                    {showValues && <span className='text-xs font-medium text-neutral-900 dark:text-white'>{format(datum.value)}</span>}
                    <div className='flex w-full flex-1 items-end justify-center'>
                        <div
                            className='w-full max-w-[3rem]'
                            style={{ height: `${(datum.value / max) * 100}%`, minHeight: 2 }}
                        >
                            <Tooltip content={`${datum.label}: ${format(datum.value)}`} arrow className='block h-full w-full'>
                                <div className='h-full w-full rounded-t-lg transition-opacity hover:opacity-80' style={{ backgroundColor: datum.color ?? colorAt(index) }} />
                            </Tooltip>
                        </div>
                    </div>
                    <span className='w-full truncate text-center text-xs text-neutral-500'>{datum.label}</span>
                </div>
            ))}
        </div>
    )
}

/* -------------------------------------------------------------------------- */
/*  Line chart                                                                */
/* -------------------------------------------------------------------------- */

export interface LineChartProps {
    data: ChartDatum[]
    height?: number
    color?: string
    /** Fill the area under the line. */
    filled?: boolean
    label?: string
}

export const LineChart = ({ data, height = 220, color = '#f472b6', filled = true, label = 'Line chart' }: LineChartProps) => {
    const id = useId()
    if (data.length < 2) return null

    const max = Math.max(...data.map((datum) => datum.value))
    const min = Math.min(0, ...data.map((datum) => datum.value))
    const range = max - min || 1
    const points = data.map((datum, index) => ({
        x: (index / (data.length - 1)) * 100,
        y: 100 - ((datum.value - min) / range) * 90 - 5,
    }))
    const line = points.map(({ x, y }, index) => `${index === 0 ? 'M' : 'L'}${x.toFixed(2)},${y.toFixed(2)}`).join(' ')
    const grid = [0, 25, 50, 75, 100]

    return (
        <figure role='img' aria-label={`${label}. ${summary(data)}`} className='w-full'>
            <div className='relative w-full' style={{ height }}>
                <svg viewBox='0 0 100 100' preserveAspectRatio='none' className='absolute inset-0 h-full w-full overflow-visible'>
                    {grid.map((y) => (
                        <line key={y} x1='0' x2='100' y1={y} y2={y} className='stroke-neutral-200 dark:stroke-neutral-700' strokeWidth='1' vectorEffect='non-scaling-stroke' />
                    ))}
                    {filled && (
                        <>
                            <defs>
                                <linearGradient id={id} x1='0' x2='0' y1='0' y2='1'>
                                    <stop offset='0%' stopColor={color} stopOpacity='0.3' />
                                    <stop offset='100%' stopColor={color} stopOpacity='0' />
                                </linearGradient>
                            </defs>
                            <path d={`${line} L100,100 L0,100 Z`} fill={`url(#${id})`} />
                        </>
                    )}
                    <path d={line} fill='none' stroke={color} strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round' vectorEffect='non-scaling-stroke' />
                </svg>
                {points.map(({ x, y }, index) => (
                    <div key={data[index].label} className='absolute -translate-x-1/2 -translate-y-1/2' style={{ left: `${x}%`, top: `${y}%` }}>
                        <Tooltip content={`${data[index].label}: ${format(data[index].value)}`} arrow>
                            <span tabIndex={0} className='block h-3.5 w-3.5 rounded-full border-2 bg-white outline-none focus-visible:ring-2 focus-visible:ring-pink-400 dark:bg-neutral-900' style={{ borderColor: color }} />
                        </Tooltip>
                    </div>
                ))}
            </div>
            <div className='mt-2 flex justify-between text-xs text-neutral-500'>
                {data.map((datum) => <span key={datum.label}>{datum.label}</span>)}
            </div>
        </figure>
    )
}

/* -------------------------------------------------------------------------- */
/*  Donut and pie                                                             */
/* -------------------------------------------------------------------------- */

export interface DonutChartProps {
    data: ChartDatum[]
    /** Diameter in pixels. */
    size?: number
    /** Use a full circle without the hole. */
    pie?: boolean
    /** Text in the center of the donut, for example the total. */
    center?: ReactNode
    /** Show the list of values next to the chart. Hovering a slice always shows its value, so you can turn the list off. */
    legend?: boolean
    label?: string
}

export const DonutChart = ({ data, size = 180, pie = false, center, legend = true, label = 'Donut chart' }: DonutChartProps) => {
    const total = data.reduce((sum, datum) => sum + datum.value, 0) || 1
    const half = size / 2
    const radius = pie ? half - 2 : half - 14
    const circumference = 2 * Math.PI * radius
    let offset = 0
    let angle = -Math.PI / 2

    // Slice under the pointer and where the pointer is, relative to the chart.
    const [hover, setHover] = useState<{ index: number; x: number; y: number } | null>(null)
    const track = (index: number) => (event: PointerEvent<SVGElement>) => {
        const box = event.currentTarget.ownerSVGElement?.getBoundingClientRect()
        if (box) setHover({ index, x: event.clientX - box.left, y: event.clientY - box.top })
    }
    const dim = (index: number) => (hover && hover.index !== index ? 0.45 : 1)
    const active = hover ? data[hover.index] : null

    // Pie: one wedge per datum, starting at the top and going clockwise.
    const wedges = data.map((datum, index) => {
        const sweep = (datum.value / total) * Math.PI * 2
        const start = angle
        angle += sweep
        const [x0, y0] = [half + radius * Math.cos(start), half + radius * Math.sin(start)]
        const [x1, y1] = [half + radius * Math.cos(angle), half + radius * Math.sin(angle)]
        return {
            key: datum.label,
            fill: datum.color ?? colorAt(index),
            d: `M${half},${half} L${x0.toFixed(2)},${y0.toFixed(2)} A${radius},${radius} 0 ${sweep > Math.PI ? 1 : 0} 1 ${x1.toFixed(2)},${y1.toFixed(2)} Z`,
            whole: datum.value / total > 0.9999,
        }
    })

    return (
        <div role='img' aria-label={`${label}. ${summary(data)}`} className='flex flex-wrap items-center gap-6'>
            <div className='relative shrink-0' style={{ width: size, height: size }}>
                {pie ? (
                    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                        {wedges.map((wedge, index) =>
                            wedge.whole ? (
                                <circle key={wedge.key} cx={half} cy={half} r={radius} fill={wedge.fill} onPointerMove={track(index)} onPointerLeave={() => setHover(null)} />
                            ) : (
                                <path
                                    key={wedge.key}
                                    d={wedge.d}
                                    fill={wedge.fill}
                                    opacity={dim(index)}
                                    strokeWidth={2}
                                    strokeLinejoin='round'
                                    onPointerMove={track(index)}
                                    onPointerLeave={() => setHover(null)}
                                    className='stroke-white transition-opacity dark:stroke-neutral-900'
                                />
                            )
                        )}
                    </svg>
                ) : (
                    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className='-rotate-90'>
                        <circle cx={half} cy={half} r={radius} fill='none' strokeWidth={28} className='stroke-neutral-200 dark:stroke-neutral-800' />
                        {data.map((datum, index) => {
                            const length = (datum.value / total) * circumference
                            const circle = (
                                <circle
                                    key={datum.label}
                                    cx={half}
                                    cy={half}
                                    r={radius}
                                    fill='none'
                                    strokeWidth={28}
                                    stroke={datum.color ?? colorAt(index)}
                                    strokeDasharray={`${Math.max(length - (data.length > 1 ? 3 : 0), 0)} ${circumference}`}
                                    strokeDashoffset={-offset}
                                    opacity={dim(index)}
                                    onPointerMove={track(index)}
                                    onPointerLeave={() => setHover(null)}
                                    className='transition-opacity'
                                />
                            )
                            offset += length
                            return circle
                        })}
                    </svg>
                )}
                {!pie && center && (
                    <div className='pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center text-neutral-900 dark:text-white'>{center}</div>
                )}
                {hover && active && (
                    <div
                        role='tooltip'
                        className='pointer-events-none absolute z-10 whitespace-nowrap rounded-lg bg-neutral-900 px-3 py-1.5 text-xs font-medium text-white shadow-lg dark:bg-white dark:text-neutral-900'
                        style={{ left: hover.x, top: hover.y - 14, transform: 'translate(-50%, -100%)' }}
                    >
                        {active.label}: {format(active.value)} ({Math.round((active.value / total) * 100)}%)
                        <span aria-hidden='true' className='absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-neutral-900 dark:bg-white' />
                    </div>
                )}
            </div>
            {legend && (
                <ul className='flex flex-col gap-2 text-sm'>
                    {data.map((datum, index) => (
                        <li key={datum.label} className='flex items-center gap-2'>
                            <span className='h-3 w-3 rounded-full' style={{ backgroundColor: datum.color ?? colorAt(index) }} />
                            <span className='text-neutral-600 dark:text-neutral-300'>{datum.label}</span>
                            <span className='font-medium text-neutral-900 dark:text-white'>{Math.round((datum.value / total) * 100)}%</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
