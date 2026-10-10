export type ProgressSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl'
export type ProgressColor = 'default' | 'red' | 'green' | 'yellow' | 'purple' | 'pink'

export interface ProgressBarProps {
    /** Current progress from 0 to 100. */
    value: number
    size?: ProgressSize
    /** A preset or any CSS color. */
    color?: ProgressColor | (string & {})
    /** Text shown above the bar, next to the percentage. */
    label?: string
    /** Show the percentage above the bar. */
    showValue?: boolean
    /** Show the percentage inside the bar (use with size lg or bigger). */
    showValueInside?: boolean
}

const heights: Record<ProgressSize, string> = {
    sm: 'h-2',
    md: 'h-4',
    lg: 'h-6',
    xl: 'h-8',
    '2xl': 'h-10',
}

const colors: Record<ProgressColor, string> = {
    default: 'bg-blue-700',
    red: 'bg-red-700',
    green: 'bg-green-700',
    yellow: 'bg-yellow-400',
    purple: 'bg-purple-600',
    pink: 'bg-pink-700',
}

/** Black or white, whichever reads better over a hex or rgb() color. Other CSS colors get white. */
const readableOn = (color: string) => {
    const hex = color.trim().replace('#', '')
    const full = hex.length === 3 ? hex.split('').map((char) => char + char).join('') : hex
    const rgb = /^[0-9a-f]{6}$/i.test(full) ? [0, 2, 4].map((index) => parseInt(full.slice(index, index + 2), 16)) : color.match(/\d+/g)?.slice(0, 3).map(Number)
    if (!rgb || rgb.length < 3) return '#ffffff'
    return (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000 > 150 ? '#171717' : '#ffffff'
}

const isPreset = (color: string): color is ProgressColor => color in colors

export const ProgressBar = ({ value, size = 'md', color = 'default', label, showValue = false, showValueInside = false }: ProgressBarProps) => {
    const percentage = Math.min(100, Math.max(0, Math.round(value)))
    return (
        <div className='w-full'>
            {(label || showValue) && (
                <div className='mb-1 flex justify-between text-sm font-medium text-neutral-800 dark:text-white'>
                    <span>{label}</span>
                    {showValue && <span>{percentage}%</span>}
                </div>
            )}
            <div
                role='progressbar'
                aria-valuenow={percentage}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={label}
                className={`w-full overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-700 ${heights[size]}`}
            >
                <div
                    className={`flex h-full items-center justify-center rounded-full text-xs font-medium transition-[width] duration-500 ${isPreset(color) ? `text-white ${colors[color]}` : ''}`}
                    style={isPreset(color) ? { width: `${percentage}%` } : { width: `${percentage}%`, backgroundColor: color, color: readableOn(color) }}
                >
                    {showValueInside && percentage > 8 && `${percentage}%`}
                </div>
            </div>
        </div>
    )
}
