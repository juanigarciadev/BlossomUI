import type { ReactNode } from 'react'

export interface JumbotronProps {
    title: string
    description?: string
    /** Small text or badge shown above the title. */
    eyebrow?: ReactNode
    /** Buttons or links shown under the text. */
    actions?: ReactNode
    /** Extra content such as an image or a mockup. With `align="left"` it is shown beside the text. */
    media?: ReactNode
    align?: 'center' | 'left'
    /**
     * `plain` has no background, `card` adds a border, `gradient` a soft color
     * and `image` uses `backgroundImage` behind the text.
     */
    variant?: 'plain' | 'card' | 'gradient' | 'image'
    /** Url of the image used by the `image` variant. */
    backgroundImage?: string
}

const surfaces = {
    plain: '',
    card: 'rounded-lg border border-neutral-300 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800',
    gradient: 'rounded-lg bg-gradient-to-br from-blue-100 via-white to-purple-100 dark:from-blue-950 dark:via-neutral-900 dark:to-purple-950',
    image: 'relative overflow-hidden rounded-lg bg-neutral-700 bg-cover bg-center',
}

export const Jumbotron = ({ title, description, eyebrow, actions, media, align = 'center', variant = 'plain', backgroundImage }: JumbotronProps) => {
    const centered = align === 'center'
    const onImage = variant === 'image'
    const padded = variant !== 'plain'

    return (
        <section
            className={`w-full ${surfaces[variant]} ${padded ? 'px-8 py-16' : 'py-24'}`}
            style={onImage && backgroundImage ? { backgroundImage: `url('${backgroundImage}')` } : undefined}
        >
            {onImage && <div aria-hidden='true' className='absolute inset-0 bg-black/55' />}
            <div className={`relative flex flex-wrap items-center gap-10 ${centered ? 'justify-center text-center' : 'justify-between'}`}>
                <div className={`flex flex-1 basis-80 flex-col gap-6 ${centered ? 'items-center' : 'items-start'}`}>
                    {eyebrow && (
                        <span className={`w-fit rounded-full px-4 py-1.5 text-sm font-medium ${onImage ? 'bg-white/20 text-white' : 'bg-pink-100 text-pink-900 dark:bg-pink-950 dark:text-pink-300'}`}>
                            {eyebrow}
                        </span>
                    )}
                    <h1 className={`text-[clamp(2.25rem,6vw,3.75rem)] font-bold leading-[1.1] tracking-tight ${onImage ? 'text-white' : 'text-neutral-900 dark:text-white'}`}>{title}</h1>
                    {description && (
                        <p className={`max-w-2xl text-lg ${onImage ? 'text-neutral-200' : 'text-neutral-700 dark:text-neutral-300'}`}>{description}</p>
                    )}
                    {actions && <div className={`flex flex-wrap gap-3 ${centered ? 'justify-center' : ''}`}>{actions}</div>}
                </div>
                {media && <div className={`flex basis-80 justify-center ${centered ? 'w-full basis-full' : 'flex-1'}`}>{media}</div>}
            </div>
        </section>
    )
}
