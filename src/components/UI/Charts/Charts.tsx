import { useId, useState, type PointerEvent, type ReactNode } from 'react'
import { Tooltip } from '../Tooltip/Tooltip'

/** Colors used when a datum does not set its own. They follow the palette of the library. */
const palette = ['var(--blossom-accent,#f472b6)', '#a78bfa', '#60a5fa', '#34d399', '#fbbf24', '#f87171']

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
export const Sparkline = ({ data, color = 'var(--blossom-accent,#f472b6)', filled = true, height = 40, label }: SparklineProps) => {
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

export const LineChart = ({ data, height = 220, color = 'var(--blossom-accent,#f472b6)', filled = true, label = 'Line chart' }: LineChartProps) => {
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
                            <span tabIndex={0} className='block h-3.5 w-3.5 rounded-full border-2 bg-white outline-none focus-visible:ring-2 focus-visible:ring-[var(--blossom-accent,#f472b6)] dark:bg-neutral-900' style={{ borderColor: color }} />
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

/* -------------------------------------------------------------------------- */
/*  Area chart                                                                */
/* -------------------------------------------------------------------------- */

export interface Series {
    name: string
    /** One value for each label of the chart. */
    data: number[]
    /** Any CSS color. Defaults to the palette. */
    color?: string
}

export interface AreaChartProps {
    /** Names of the points on the horizontal axis. */
    labels: string[]
    series: Series[]
    /** Pile the series on top of each other, so the top line is the total. */
    stacked?: boolean
    height?: number
    /** Show the name of each series under the chart. */
    legend?: boolean
    label?: string
}

/** One or more series drawn as areas. Hover the chart to read the values of a point. */
export const AreaChart = ({ labels, series, stacked = false, height = 240, legend = true, label = 'Area chart' }: AreaChartProps) => {
    const id = useId()
    const [hover, setHover] = useState<number | null>(null)
    const count = labels.length
    if (count < 2 || series.length === 0) return null

    // Value of every series at every point; when stacked, each one starts where the previous ends.
    const tops = series.map((_, seriesIndex) =>
        labels.map((__, point) => (stacked ? series.slice(0, seriesIndex + 1) : [series[seriesIndex]]).reduce((sum, item) => sum + (item.data[point] ?? 0), 0))
    )
    const max = Math.max(...tops.flat(), 1)
    const magnitude = 10 ** Math.floor(Math.log10(max))
    const nice = Math.ceil(max / magnitude) * magnitude
    const x = (point: number) => (point / (count - 1)) * 100
    const y = (value: number) => 100 - (value / nice) * 92 - 4
    const path = (values: number[]) => values.map((value, point) => `${point === 0 ? 'M' : 'L'}${x(point).toFixed(2)},${y(value).toFixed(2)}`).join(' ')
    const grid = [0, 0.25, 0.5, 0.75, 1]

    const summaryText = series.map((item) => `${item.name}: ${item.data.map(format).join(', ')}`).join('. ')

    const track = (event: PointerEvent<HTMLDivElement>) => {
        const rect = event.currentTarget.getBoundingClientRect()
        setHover(Math.round(Math.min(Math.max((event.clientX - rect.left) / rect.width, 0), 1) * (count - 1)))
    }

    return (
        <figure role='img' aria-label={`${label}. ${labels.join(', ')}. ${summaryText}`} className='w-full'>
            <div className='flex gap-2'>
                <div className='flex flex-col justify-between pb-1 text-right text-xs text-neutral-500' style={{ height }}>
                    {[...grid].reverse().map((step) => <span key={step}>{format(nice * step)}</span>)}
                </div>
                <div className='relative min-w-0 flex-1' style={{ height }} onPointerMove={track} onPointerLeave={() => setHover(null)}>
                    <svg viewBox='0 0 100 100' preserveAspectRatio='none' className='absolute inset-0 h-full w-full overflow-visible'>
                        <defs>
                            {series.map((item, index) => (
                                <linearGradient key={item.name} id={`${id}-${index}`} x1='0' x2='0' y1='0' y2='1'>
                                    <stop offset='0%' stopColor={item.color ?? colorAt(index)} stopOpacity={stacked ? 0.55 : 0.35} />
                                    <stop offset='100%' stopColor={item.color ?? colorAt(index)} stopOpacity={stacked ? 0.2 : 0} />
                                </linearGradient>
                            ))}
                        </defs>
                        {grid.map((step) => (
                            <line key={step} x1='0' x2='100' y1={y(nice * step)} y2={y(nice * step)} className='stroke-neutral-200 dark:stroke-neutral-700' strokeWidth='1' vectorEffect='non-scaling-stroke' />
                        ))}
                        {/* The last series is drawn first so the first one stays in front when they overlap */}
                        {[...series].reverse().map((item, reversed) => {
                            const index = series.length - 1 - reversed
                            const top = tops[index]
                            const below = stacked && index > 0 ? tops[index - 1] : labels.map(() => 0)
                            const area = `${path(top)} ${[...below].reverse().map((value, point) => `L${x(count - 1 - point).toFixed(2)},${y(value).toFixed(2)}`).join(' ')} Z`
                            return (
                                <g key={item.name}>
                                    <path d={area} fill={`url(#${id}-${index})`} />
                                    <path d={path(top)} fill='none' stroke={item.color ?? colorAt(index)} strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round' vectorEffect='non-scaling-stroke' />
                                </g>
                            )
                        })}
                        {hover !== null && <line x1={x(hover)} x2={x(hover)} y1='0' y2='100' className='stroke-neutral-400' strokeWidth='1' strokeDasharray='3 3' vectorEffect='non-scaling-stroke' />}
                    </svg>
                    {hover !== null && tops.map((top, index) => (
                        <span key={series[index].name} aria-hidden='true' className='pointer-events-none absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 bg-white dark:bg-neutral-900' style={{ left: `${x(hover)}%`, top: `${y(top[hover])}%`, borderColor: series[index].color ?? colorAt(index) }} />
                    ))}
                    {hover !== null && (
                        <div
                            role='tooltip'
                            className='pointer-events-none absolute top-0 z-10 min-w-28 rounded-lg bg-neutral-900 px-3 py-2 text-xs text-white shadow-lg dark:bg-white dark:text-neutral-900'
                            style={{ left: `${x(hover)}%`, transform: `translateX(${hover > (count - 1) / 2 ? 'calc(-100% - 12px)' : '12px'})` }}
                        >
                            <div className='pb-1 font-medium'>{labels[hover]}</div>
                            {series.map((item, index) => (
                                <div key={item.name} className='flex items-center gap-2'>
                                    <span className='h-2 w-2 rounded-full' style={{ backgroundColor: item.color ?? colorAt(index) }} />
                                    <span className='flex-1 opacity-80'>{item.name}</span>
                                    <span className='font-medium'>{format(item.data[hover] ?? 0)}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className='mt-2 flex justify-between pl-10 text-xs text-neutral-500'>
                {labels.map((item) => <span key={item}>{item}</span>)}
            </div>
            {legend && series.length > 1 && (
                <ul className='mt-3 flex flex-wrap gap-4 pl-10 text-sm'>
                    {series.map((item, index) => (
                        <li key={item.name} className='flex items-center gap-2 text-neutral-600 dark:text-neutral-300'>
                            <span className='h-3 w-3 rounded-full' style={{ backgroundColor: item.color ?? colorAt(index) }} />
                            {item.name}
                        </li>
                    ))}
                </ul>
            )}
        </figure>
    )
}

/* -------------------------------------------------------------------------- */
/*  Radar chart                                                               */
/* -------------------------------------------------------------------------- */

export interface RadarSeries {
    name: string
    /** One value for each axis. */
    values: number[]
    color?: string
}

export interface RadarChartProps {
    /** Names of the axes, from the top and clockwise. */
    axes: string[]
    series: RadarSeries[]
    /** Value at the border of the chart. By default the biggest value. */
    max?: number
    /** Diameter in pixels, labels included. */
    size?: number
    /** Number of rings. */
    rings?: number
    legend?: boolean
    label?: string
}

/** Compare several things over the same axes, for example the skills of a person or the scores of a product. */
export const RadarChart = ({ axes, series, max, size = 280, rings = 4, legend = true, label = 'Radar chart' }: RadarChartProps) => {
    const [hover, setHover] = useState<number | null>(null)
    if (axes.length < 3 || series.length === 0) return null
    const top = max ?? Math.max(...series.flatMap((item) => item.values), 1)
    const half = size / 2
    const radius = half - 44
    const point = (axis: number, value: number) => {
        const angle = (axis / axes.length) * Math.PI * 2 - Math.PI / 2
        const distance = (Math.min(value, top) / top) * radius
        return [half + distance * Math.cos(angle), half + distance * Math.sin(angle)] as const
    }
    const polygon = (values: number[]) => axes.map((_, axis) => point(axis, values[axis] ?? 0).map((coordinate) => coordinate.toFixed(2)).join(',')).join(' ')

    return (
        <figure role='img' aria-label={`${label}. ${series.map((item) => `${item.name}: ${axes.map((axis, index) => `${axis} ${format(item.values[index] ?? 0)}`).join(', ')}`).join('. ')}`} className='flex flex-wrap items-center gap-6'>
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className='max-w-full shrink-0 overflow-visible'>
                {Array.from({ length: rings }, (_, ring) => {
                    const fraction = (ring + 1) / rings
                    return <polygon key={ring} points={axes.map((_, axis) => point(axis, top * fraction).map((coordinate) => coordinate.toFixed(2)).join(',')).join(' ')} fill='none' className='stroke-neutral-200 dark:stroke-neutral-700' strokeWidth='1' />
                })}
                {axes.map((axis, index) => {
                    const [x, y] = point(index, top)
                    const [lx, ly] = point(index, top * 1.18)
                    return (
                        <g key={axis}>
                            <line x1={half} y1={half} x2={x} y2={y} className='stroke-neutral-200 dark:stroke-neutral-700' strokeWidth='1' />
                            <text x={lx} y={ly} textAnchor={lx < half - 4 ? 'end' : lx > half + 4 ? 'start' : 'middle'} dominantBaseline='middle' className='fill-neutral-600 text-xs dark:fill-neutral-300'>{axis}</text>
                        </g>
                    )
                })}
                {series.map((item, index) => {
                    const color = item.color ?? colorAt(index)
                    return (
                        <g key={item.name} opacity={hover === null || hover === index ? 1 : 0.25} className='transition-opacity'>
                            <polygon points={polygon(item.values)} fill={color} fillOpacity={0.2} stroke={color} strokeWidth='2' strokeLinejoin='round' onPointerEnter={() => setHover(index)} onPointerLeave={() => setHover(null)} />
                            {axes.map((axis, axisIndex) => {
                                const [x, y] = point(axisIndex, item.values[axisIndex] ?? 0)
                                return (
                                    <circle key={axis} cx={x} cy={y} r='3.5' fill={color} onPointerEnter={() => setHover(index)} onPointerLeave={() => setHover(null)}>
                                        <title>{`${item.name} · ${axis}: ${format(item.values[axisIndex] ?? 0)}`}</title>
                                    </circle>
                                )
                            })}
                        </g>
                    )
                })}
            </svg>
            {legend && (
                <ul className='flex flex-col gap-2 text-sm'>
                    {series.map((item, index) => (
                        <li key={item.name} className='flex items-center gap-2 text-neutral-600 dark:text-neutral-300'>
                            <span className='h-3 w-3 rounded-full' style={{ backgroundColor: item.color ?? colorAt(index) }} />
                            {item.name}
                        </li>
                    ))}
                </ul>
            )}
        </figure>
    )
}

/* -------------------------------------------------------------------------- */
/*  Gauge                                                                     */
/* -------------------------------------------------------------------------- */

export interface GaugeThreshold {
    /** The color applies from this value on. */
    from: number
    color: string
}

export interface GaugeProps {
    value: number
    min?: number
    max?: number
    /** Width in pixels. The height is half of it. */
    size?: number
    /** Text under the number, for example "CPU". */
    caption?: ReactNode
    /** Text added after the number, for example "%". */
    unit?: string
    /** Change the color as the value grows, for example green, yellow and red. Without it the gauge uses the first color of the palette. */
    thresholds?: GaugeThreshold[]
    label?: string
}

/** A half circle that shows how full something is: a score, a load, a goal. */
export const Gauge = ({ value, min = 0, max = 100, size = 220, caption, unit = '', thresholds, label = 'Gauge' }: GaugeProps) => {
    const stroke = Math.max(10, size / 11)
    const radius = (size - stroke) / 2
    const arc = Math.PI * radius
    const ratio = Math.min(Math.max((value - min) / (max - min || 1), 0), 1)
    const color = thresholds?.length ? [...thresholds].sort((a, b) => a.from - b.from).reduce((current, threshold) => (value >= threshold.from ? threshold.color : current), thresholds[0].color) : colorAt(0)
    const d = `M${stroke / 2},${size / 2} A${radius},${radius} 0 0 1 ${size - stroke / 2},${size / 2}`
    const height = size / 2 + stroke / 2

    return (
        <div role='meter' aria-label={label} aria-valuenow={value} aria-valuemin={min} aria-valuemax={max} aria-valuetext={`${format(value)}${unit}`} className='relative max-w-full' style={{ width: size, height }}>
            <svg width={size} height={height} viewBox={`0 0 ${size} ${height}`} className='overflow-visible'>
                <path d={d} fill='none' strokeWidth={stroke} strokeLinecap='round' className='stroke-neutral-200 dark:stroke-neutral-800' />
                <path d={d} fill='none' strokeWidth={stroke} strokeLinecap='round' stroke={color} strokeDasharray={`${arc * ratio} ${arc}`} className='transition-[stroke-dasharray,stroke] duration-300' />
            </svg>
            <div className='absolute inset-x-0 bottom-0 flex flex-col items-center text-center'>
                {/* The text follows the size of the gauge, so a small one does not overflow its arc */}
                <span className='font-bold leading-none text-neutral-900 dark:text-white' style={{ fontSize: Math.round(Math.min(Math.max(size / 7, 14), 36)) }}>{format(value)}<span className='font-medium text-neutral-500' style={{ fontSize: '0.6em' }}>{unit}</span></span>
                {caption && <span className={`pt-1 text-neutral-500 ${size < 140 ? 'text-[10px]' : 'text-sm'}`}>{caption}</span>}
            </div>
        </div>
    )
}

/* -------------------------------------------------------------------------- */
/*  Heatmap                                                                   */
/* -------------------------------------------------------------------------- */

export interface HeatmapProps {
    /** One list of numbers for each row. Every row has one number for each column. */
    data: number[][]
    rows: string[]
    columns: string[]
    /** Color of the biggest value. The smaller ones are lighter. Defaults to the brand color. */
    color?: string
    /** Show the number inside each cell. */
    showValues?: boolean
    /** Size of a cell in pixels. */
    cell?: number
    label?: string
}

/** A grid where the color of each cell shows its value, for example activity by day and hour. */
export const Heatmap = ({ data, rows, columns, color = 'var(--blossom-accent,#f472b6)', showValues = false, cell = 36, label = 'Heatmap' }: HeatmapProps) => {
    const max = Math.max(...data.flat(), 1)
    const min = Math.min(...data.flat(), 0)
    const shade = (value: number) => 10 + ((value - min) / (max - min || 1)) * 90

    return (
        <div role='img' aria-label={`${label}. ${rows.map((row, rowIndex) => `${row}: ${columns.map((column, columnIndex) => `${column} ${format(data[rowIndex]?.[columnIndex] ?? 0)}`).join(', ')}`).join('. ')}`} className='w-full overflow-x-auto pb-1'>
            <div className='inline-grid gap-1' style={{ gridTemplateColumns: `auto repeat(${columns.length}, ${cell}px)` }}>
                <span />
                {columns.map((column) => <span key={column} className='truncate text-center text-xs text-neutral-500'>{column}</span>)}
                {rows.map((row, rowIndex) => (
                    <div key={row} className='contents'>
                        <span className='flex items-center pr-2 text-xs text-neutral-500'>{row}</span>
                        {columns.map((column, columnIndex) => {
                            const value = data[rowIndex]?.[columnIndex] ?? 0
                            const level = shade(value)
                            return (
                                <Tooltip key={column} content={`${row} · ${column}: ${format(value)}`} className='block'>
                                    <span
                                        tabIndex={0}
                                        className={`flex items-center justify-center rounded-md text-[10px] font-medium outline-none transition-transform hover:scale-110 focus-visible:ring-2 focus-visible:ring-[var(--blossom-accent,#f472b6)] ${level > 60 ? 'text-white' : 'text-neutral-700 dark:text-neutral-200'}`}
                                        style={{ height: cell, width: cell, backgroundColor: `color-mix(in srgb, ${color} ${level}%, transparent)` }}
                                    >
                                        {showValues ? format(value) : null}
                                    </span>
                                </Tooltip>
                            )
                        })}
                    </div>
                ))}
            </div>
        </div>
    )
}
