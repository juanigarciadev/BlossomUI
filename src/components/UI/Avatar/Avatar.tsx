import { useState, type ReactNode } from 'react'

export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl'
export type AvatarStatus = 'online' | 'away' | 'busy' | 'offline'

export interface AvatarProps {
    /** Image url. When it is missing or fails to load the initials (or a placeholder) are shown. */
    src?: string
    alt?: string
    /** Shown when there is no image, e.g. "KH". */
    initials?: string
    size?: AvatarSize
    /** Rounded corners instead of a circle. */
    square?: boolean
    status?: AvatarStatus
    /** `dot` is a small circle in a corner, `ring` outlines the avatar. */
    statusStyle?: 'dot' | 'ring'
    statusPosition?: 'top' | 'bottom'
}

const sizes: Record<AvatarSize, { box: string; dot: string; text: string }> = {
    sm: { box: 'h-8 w-8', dot: 'h-2.5 w-2.5', text: 'text-xs' },
    md: { box: 'h-10 w-10', dot: 'h-3.5 w-3.5', text: 'text-sm' },
    lg: { box: 'h-14 w-14', dot: 'h-4 w-4', text: 'text-lg' },
    xl: { box: 'h-20 w-20', dot: 'h-5 w-5', text: 'text-2xl' },
}

const statusColors: Record<AvatarStatus, { bg: string; ring: string }> = {
    online: { bg: 'bg-green-600', ring: 'ring-green-600' },
    away: { bg: 'bg-yellow-500', ring: 'ring-yellow-500' },
    busy: { bg: 'bg-red-600', ring: 'ring-red-600' },
    offline: { bg: 'bg-neutral-400', ring: 'ring-neutral-400' },
}

export const Avatar = ({ src, alt = '', initials, size = 'md', square = false, status, statusStyle = 'dot', statusPosition = 'top' }: AvatarProps) => {
    const [failed, setFailed] = useState(false)
    const { box, dot, text } = sizes[size]
    const shape = square ? 'rounded-lg' : 'rounded-full'
    const ring = status && statusStyle === 'ring' ? `ring-2 ring-offset-1 dark:ring-offset-neutral-900 ${statusColors[status].ring}` : ''

    return (
        <div className='relative w-fit' title={status}>
            {src && !failed ? (
                <img className={`${box} ${shape} ${ring} bg-neutral-200 object-cover dark:bg-neutral-800`} src={src} alt={alt} onError={() => setFailed(true)} />
            ) : (
                <div className={`relative flex items-center justify-center overflow-hidden bg-neutral-200 dark:bg-neutral-600 ${box} ${shape} ${ring}`} role='img' aria-label={alt || initials}>
                    {initials ? (
                        <span className={`font-medium text-neutral-600 dark:text-neutral-300 ${text}`}>{initials}</span>
                    ) : (
                        <svg className='absolute -bottom-1 h-[90%] w-[90%] text-neutral-400' fill='currentColor' viewBox='0 0 20 20' aria-hidden='true'>
                            <path fillRule='evenodd' d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z' clipRule='evenodd' />
                        </svg>
                    )}
                </div>
            )}
            {status && statusStyle === 'dot' && (
                <span className={`absolute -right-1 rounded-full border-2 border-white dark:border-neutral-700 ${dot} ${statusColors[status].bg} ${statusPosition === 'top' ? 'top-0' : 'bottom-0'}`} />
            )}
        </div>
    )
}

export interface AvatarGroupProps {
    avatars: Pick<AvatarProps, 'src' | 'alt' | 'initials'>[]
    /** Maximum number of avatars before collapsing the rest into a +N counter. */
    max?: number
    size?: AvatarSize
    onMoreClick?: () => void
}

export const AvatarGroup = ({ avatars, max = 4, size = 'md', onMoreClick }: AvatarGroupProps) => {
    const visible = avatars.slice(0, max)
    const rest = avatars.length - visible.length
    return (
        <div className='flex -space-x-4'>
            {visible.map((avatar, index) => (
                <div key={index} className='rounded-full border-2 border-white dark:border-neutral-700'>
                    <Avatar {...avatar} size={size} />
                </div>
            ))}
            {rest > 0 && (
                <button
                    type='button'
                    onClick={onMoreClick}
                    className={`flex select-none items-center justify-center rounded-full border-2 border-white bg-neutral-200 text-sm font-medium hover:bg-neutral-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-600 ${sizes[size].box}`}
                >
                    +{rest}
                </button>
            )}
        </div>
    )
}

export interface AvatarInfoProps extends AvatarProps {
    name: string
    description?: ReactNode
}

export const AvatarInfo = ({ name, description, ...avatar }: AvatarInfoProps) => (
    <div className='flex items-center gap-3'>
        <Avatar {...avatar} alt={avatar.alt ?? name} />
        <div className='flex flex-col'>
            <p className='font-medium dark:text-white'>{name}</p>
            {description && <span className='text-sm text-neutral-700 dark:text-neutral-300'>{description}</span>}
        </div>
    </div>
)
