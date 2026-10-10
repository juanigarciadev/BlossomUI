export type SpinnerSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl'
export type SpinnerColor = 'default' | 'red' | 'green' | 'yellow' | 'purple' | 'pink'

export interface SpinnerProps {
    size?: SpinnerSize
    /** A preset or any CSS color. */
    color?: SpinnerColor | (string & {})
    /** Hide the track so only the moving part is visible. */
    transparent?: boolean
    /** Text read by screen readers. */
    label?: string
}

const sizes: Record<SpinnerSize, string> = {
    sm: 'h-4 w-4 border-2',
    md: 'h-8 w-8 border-4',
    lg: 'h-10 w-10 border-4',
    xl: 'h-12 w-12 border-4',
    '2xl': 'h-16 w-16 border-8',
}

const colors: Record<SpinnerColor, string> = {
    default: 'border-l-blue-700 dark:border-l-blue-700',
    red: 'border-l-red-700 dark:border-l-red-700',
    green: 'border-l-green-700 dark:border-l-green-700',
    yellow: 'border-l-yellow-400 dark:border-l-yellow-400',
    purple: 'border-l-purple-600 dark:border-l-purple-600',
    pink: 'border-l-pink-700 dark:border-l-pink-700',
}

const isPreset = (color: string): color is SpinnerColor => color in colors

export const Spinner = ({ size = 'md', color = 'default', transparent = false, label = 'Loading...' }: SpinnerProps) => (
    <div role='status' className='inline-flex'>
        <div
            className={`animate-spin rounded-full ${sizes[size]} ${isPreset(color) ? colors[color] : ''} ${transparent ? 'border-transparent' : 'border-neutral-200 dark:border-neutral-700'}`}
            style={isPreset(color) ? undefined : { borderLeftColor: color }}
        />
        <span className='sr-only'>{label}</span>
    </div>
)
