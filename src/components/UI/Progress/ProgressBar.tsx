export type ProgressSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl'
export type ProgressColor = 'default' | 'red' | 'green' | 'yellow' | 'purple' | 'pink'

export interface ProgressBarProps {
    /** Current progress from 0 to 100. */
    value: number
    size?: ProgressSize
    color?: ProgressColor
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
                    className={`flex h-full items-center justify-center rounded-full text-xs font-medium text-white transition-[width] duration-500 ${colors[color]}`}
                    style={{ width: `${percentage}%` }}
                >
                    {showValueInside && percentage > 8 && `${percentage}%`}
                </div>
            </div>
        </div>
    )
}
