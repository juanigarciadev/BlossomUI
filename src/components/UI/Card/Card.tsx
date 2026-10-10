import { useEffect, useRef, useState, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { accentStyle } from '../accent'

const surface = 'rounded-xl border border-neutral-300 bg-neutral-200 bg-opacity-40 dark:border-neutral-600 dark:bg-neutral-800'

export interface CardProps {
    /** Accent color of this component: any CSS color. Without it the component uses `--blossom-accent`, which is pink by default. */
    color?: string
    title: string
    description?: ReactNode
    /** Icon shown inside a tinted square. */
    icon?: ReactNode
    /** Extra content, for example buttons or links. */
    footer?: ReactNode
    className?: string
}

export const Card = ({ color, title, description, icon, footer, className = '' }: CardProps) => (
    <section className={`flex h-auto flex-col gap-2 rounded-xl border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-700 dark:bg-neutral-800 ${/(^|\s)!?w-/.test(className) ? '' : 'w-80 max-w-full'} ${className}`} style={accentStyle(color)}>
        {icon && <span className='grid h-10 w-10 place-items-center rounded-xl bg-[color-mix(in_srgb,var(--blossom-accent,#f472b6)_20%,transparent)] text-[var(--blossom-accent,#f472b6)]'>{icon}</span>}
        <h3 className='text-lg font-medium text-neutral-900 dark:text-white'>{title}</h3>
        {description && <p className='text-sm text-neutral-600 dark:text-neutral-300'>{description}</p>}
        {footer}
    </section>
)

export interface ProductSelection {
    color?: string
    size?: string
}

export interface ProductCardProps {
    /** Accent color of this component: any CSS color. Without it the component uses `--blossom-accent`, which is pink by default. */
    color?: string
    /** Color of the badge: any CSS color. Without it the badge uses the accent. */
    badgeColor?: string
    image: string
    name: string
    price: number
    /** Short text under the name. It is cut after two lines. */
    description?: string
    /** Small text above the name, for example the brand or the category. */
    brand?: string
    /** From 0 to 5. */
    rating?: number
    /** Number of reviews, shown next to the stars. */
    reviews?: number
    badge?: string
    /** Price before the discount. It is crossed out and the percentage is calculated. */
    originalPrice?: number
    /** Opens the photo in full size when it is pressed. */
    expandable?: boolean
    /** More photos of the product. They are shown after the main image when it is expanded, with arrows and thumbnails. */
    images?: string[]
    /** Symbol shown before the prices. */
    currency?: string
    /** Available colors, any CSS color. The user can choose one. */
    colors?: string[]
    /** Available sizes, for example S, M and L. The user can choose one. */
    sizes?: string[]
    /** Out of stock products cannot be added to the cart. */
    inStock?: boolean
    /** `horizontal` puts the image at the left, useful for lists. */
    layout?: 'vertical' | 'horizontal'
    /** Called with the product name and the chosen color and size when the user presses "Add to cart". */
    onAddToCart?: (name: string, selection: ProductSelection) => void
    /** Called when the user marks or unmarks the product as favorite. */
    onFavoriteChange?: (favorite: boolean) => void
    className?: string
}

const Star = ({ filled }: { filled: boolean }) => (
    <svg className={filled ? 'text-yellow-400' : 'text-neutral-300 dark:text-neutral-600'} width='16' height='16' viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'>
        <path d='m12 17.27 6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' />
    </svg>
)

interface LightboxProps {
    color?: string
    images: string[]
    start: number
    name: string
    onClose: () => void
}

/** Full size view of the product photos, with arrows and thumbnails when there are several. */
const Lightbox = ({ color, images, start, name, onClose }: LightboxProps) => {
    const [index, setIndex] = useState(start)
    const panel = useRef<HTMLDivElement>(null)
    const onCloseRef = useRef(onClose)
    useEffect(() => {
        onCloseRef.current = onClose
    })

    const go = (step: number) => setIndex((current) => (current + step + images.length) % images.length)

    useEffect(() => {
        const previouslyFocused = document.activeElement as HTMLElement | null
        const previousOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        panel.current?.focus()

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && !event.defaultPrevented) onCloseRef.current()
            else if (event.key === 'ArrowRight') setIndex((current) => (current + 1) % images.length)
            else if (event.key === 'ArrowLeft') setIndex((current) => (current - 1 + images.length) % images.length)
        }
        document.addEventListener('keydown', onKeyDown)

        return () => {
            document.removeEventListener('keydown', onKeyDown)
            document.body.style.overflow = previousOverflow
            previouslyFocused?.focus()
        }
    }, [images.length])

    const control = 'grid h-10 w-10 place-items-center rounded-full bg-white/90 text-neutral-900 shadow-md outline-none hover:bg-white focus-visible:ring-2 focus-visible:ring-[var(--blossom-accent,#f472b6)]'

    return createPortal(
        <div
            className='fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm'
            style={accentStyle(color)}
            onMouseDown={(event) => event.target === event.currentTarget && onClose()}
        >
            <div ref={panel} role='dialog' aria-modal='true' aria-label={`${name}, photo ${index + 1} of ${images.length}`} tabIndex={-1} className='flex max-h-full w-fit max-w-full flex-col gap-4 outline-none'>
                <div className='flex justify-end'>
                    <button type='button' aria-label='Close' onClick={onClose} className={control}>
                        <svg className='h-5 w-5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'><path strokeLinecap='round' strokeLinejoin='round' d='M6 6l12 12M18 6 6 18' /></svg>
                    </button>
                </div>
                <div className='flex min-h-0 items-center justify-center gap-3'>
                    {images.length > 1 && (
                        <button type='button' aria-label='Previous photo' onClick={() => go(-1)} className={`${control} shrink-0`}>
                            <svg className='h-5 w-5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2.5'><path strokeLinecap='round' strokeLinejoin='round' d='m15 6-6 6 6 6' /></svg>
                        </button>
                    )}
                    <div className='flex min-w-0 justify-center'>
                        <img src={images[index]} alt={`${name}, photo ${index + 1}`} className='max-h-[70vh] min-h-[12rem] w-auto min-w-[min(16rem,calc(100vw-9rem))] max-w-[min(56rem,calc(100vw-9rem))] rounded-2xl bg-neutral-200 object-contain shadow-2xl' />
                    </div>
                    {images.length > 1 && (
                        <button type='button' aria-label='Next photo' onClick={() => go(1)} className={`${control} shrink-0`}>
                            <svg className='h-5 w-5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2.5'><path strokeLinecap='round' strokeLinejoin='round' d='m9 6 6 6-6 6' /></svg>
                        </button>
                    )}
                </div>
                {images.length > 1 && (
                    <div className='flex max-w-full justify-center gap-2 self-center overflow-x-auto p-1'>
                        {images.map((src, position) => (
                            <button
                                key={`${src}-${position}`}
                                type='button'
                                aria-label={`Show photo ${position + 1}`}
                                aria-current={position === index}
                                onClick={() => setIndex(position)}
                                className={`h-14 w-14 shrink-0 overflow-hidden rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-[var(--blossom-accent,#f472b6)] ${position === index ? 'ring-2 ring-[var(--blossom-accent,#f472b6)]' : 'opacity-60 hover:opacity-100'}`}
                            >
                                <img src={src} alt='' className='h-full w-full object-cover' />
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>,
        document.body
    )
}

export const ProductCard = ({
    color,
    badgeColor,
    image,
    name,
    price,
    description,
    brand,
    rating = 0,
    reviews,
    badge,
    originalPrice,
    currency = '$',
    expandable = false,
    images = [],
    colors,
    sizes,
    inStock = true,
    layout = 'vertical',
    onAddToCart,
    onFavoriteChange,
    className = '',
}: ProductCardProps) => {
    const [favorite, setFavorite] = useState(false)
    const [added, setAdded] = useState(false)
    const [chosenColor, setChosenColor] = useState<string | undefined>(colors?.[0])
    const [size, setSize] = useState<string | undefined>(undefined)
    const [expanded, setExpanded] = useState(false)
    const gallery = [image, ...images]
    const canExpand = expandable || images.length > 0
    const horizontal = layout === 'horizontal'
    const discount = originalPrice && originalPrice > price ? Math.round((1 - price / originalPrice) * 100) : 0

    const addedTimer = useRef(0)
    useEffect(() => () => window.clearTimeout(addedTimer.current), [])

    const add = () => {
        setAdded(true)
        onAddToCart?.(name, { color: chosenColor, size })
        window.clearTimeout(addedTimer.current)
        addedTimer.current = window.setTimeout(() => setAdded(false), 1500)
    }

    const toggleFavorite = () => {
        onFavoriteChange?.(!favorite)
        setFavorite(!favorite)
    }

    return (
        <article className={`relative flex h-fit flex-col gap-4 p-4 shadow-sm ${/(^|\s)!?w-/.test(className) ? '' : horizontal ? 'w-full max-w-xl' : 'w-64'} ${surface} ${className}`} style={accentStyle(color)}>
            <div className={horizontal ? 'flex gap-4 sm:flex-col' : 'contents'}>
                <div className={`relative ${horizontal ? 'w-44 shrink-0 sm:w-full' : ''}`}>
                    {canExpand ? (
                        <button
                            type='button'
                            aria-label={`Expand photo of ${name}`}
                            aria-haspopup='dialog'
                            onClick={() => setExpanded(true)}
                            className={`group block w-full cursor-zoom-in overflow-hidden rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-[var(--blossom-accent,#f472b6)] ${horizontal ? 'h-full' : ''}`}
                        >
                            <img src={image} alt='' className={`w-full bg-neutral-200 object-cover transition-transform duration-300 group-hover:scale-105 dark:bg-neutral-700 ${horizontal ? 'h-full min-h-[10rem]' : 'h-40'} ${inStock ? '' : 'opacity-60'}`} />
                        </button>
                    ) : (
                        <img src={image} alt={name} className={`w-full rounded-xl bg-neutral-200 object-cover dark:bg-neutral-700 ${horizontal ? 'h-full min-h-[10rem]' : 'h-40'} ${inStock ? '' : 'opacity-60'}`} />
                    )}
                    <button
                        type='button'
                        aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
                        aria-pressed={favorite}
                        onClick={toggleFavorite}
                        className='absolute right-2 top-2 rounded-lg bg-white p-1.5 shadow-sm hover:bg-neutral-100 dark:bg-neutral-900 dark:hover:bg-neutral-700'
                    >
                        <svg width='20' height='20' viewBox='0 0 24 24' aria-hidden='true' className={favorite ? 'fill-red-600' : 'fill-neutral-400'}>
                            <path d='m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z' />
                        </svg>
                    </button>
                </div>

                <div className='flex min-w-0 flex-1 flex-col gap-3'>
                    <div className='flex flex-col gap-1'>
                        {(badge || discount > 0 || !inStock) && (
                            <div className='flex flex-wrap items-center gap-1.5 pb-1'>
                                {badge && (
                                    <span
                                        className={`rounded-lg bg-[color-mix(in_srgb,var(--blossom-accent,#f472b6)_18%,transparent)] px-2 py-0.5 text-xs font-medium text-[color-mix(in_srgb,var(--blossom-accent,#f472b6)_45%,black)] dark:bg-[color-mix(in_srgb,var(--blossom-accent,#f472b6)_30%,transparent)] dark:text-[color-mix(in_srgb,var(--blossom-accent,#f472b6)_60%,white)]`}
                                        style={badgeColor ? { color: badgeColor, backgroundColor: `color-mix(in srgb, ${badgeColor} 18%, transparent)` } : undefined}
                                    >{badge}</span>
                                )}
                                {discount > 0 && <span className='rounded-lg bg-red-100 px-2 py-0.5 text-xs font-medium text-red-900 dark:bg-red-900 dark:text-red-200'>-{discount}%</span>}
                                {!inStock && <span className='rounded-lg bg-neutral-200 px-2 py-0.5 text-xs font-medium text-neutral-800 dark:bg-neutral-700 dark:text-neutral-200'>Out of stock</span>}
                            </div>
                        )}
                        {brand && <span className='text-xs font-medium uppercase tracking-wide text-neutral-500'>{brand}</span>}
                        <h3 className='font-bold text-black dark:text-white'>{name}</h3>
                        {description && <p className='line-clamp-2 text-sm text-neutral-600 dark:text-neutral-300'>{description}</p>}
                        {(rating > 0 || reviews !== undefined) && (
                            <div className='flex items-center gap-2'>
                                <div className='flex' role='img' aria-label={`${rating} out of 5 stars`}>
                                    {[1, 2, 3, 4, 5].map((n) => <Star key={n} filled={n <= Math.round(rating)} />)}
                                </div>
                                {reviews !== undefined && <span className='text-xs text-neutral-500'>({reviews})</span>}
                            </div>
                        )}
                    </div>

                    {colors && colors.length > 0 && (
                        <div role='radiogroup' aria-label='Color' className='flex items-center gap-2'>
                            {colors.map((option) => (
                                <button
                                    key={option}
                                    type='button'
                                    role='radio'
                                    aria-checked={option === chosenColor}
                                    aria-label={option}
                                    onClick={() => setChosenColor(option)}
                                    className={`h-6 w-6 rounded-full border border-black/20 outline-none dark:border-white/40 focus-visible:ring-2 focus-visible:ring-[var(--blossom-accent,#f472b6)] ${option === chosenColor ? 'ring-2 ring-[var(--blossom-accent,#f472b6)] ring-offset-2 dark:ring-offset-neutral-800' : ''}`}
                                    style={{ backgroundColor: option }}
                                />
                            ))}
                        </div>
                    )}

                    {sizes && sizes.length > 0 && (
                        <div role='radiogroup' aria-label='Size' className='flex flex-wrap gap-2'>
                            {sizes.map((option) => (
                                <button
                                    key={option}
                                    type='button'
                                    role='radio'
                                    aria-checked={option === size}
                                    onClick={() => setSize(option)}
                                    className={`min-w-[2.25rem] rounded-lg border px-2 py-1 text-xs font-medium outline-none focus-visible:ring-2 focus-visible:ring-[var(--blossom-accent,#f472b6)] ${option === size ? 'border-[var(--blossom-accent,#f472b6)] bg-[color-mix(in_srgb,var(--blossom-accent,#f472b6)_10%,transparent)] text-[color-mix(in_srgb,var(--blossom-accent,#f472b6)_75%,black)] dark:text-[color-mix(in_srgb,var(--blossom-accent,#f472b6)_60%,white)]' : 'border-neutral-300 text-neutral-700 hover:bg-neutral-100 dark:border-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-700'}`}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className='flex items-center justify-between gap-2'>
                <div className='flex flex-col leading-tight'>
                    <span className='text-xl font-bold text-black dark:text-white'>{currency}{price.toFixed(2)}</span>
                    {discount > 0 && originalPrice && <span className='text-xs text-neutral-500 line-through'>{currency}{originalPrice.toFixed(2)}</span>}
                </div>
                <button
                    type='button'
                    onClick={add}
                    disabled={!inStock}
                    className='flex select-none items-center justify-center rounded-xl bg-black px-4 py-3 text-sm font-medium text-white hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white dark:text-black dark:hover:bg-neutral-200'
                >
                    {!inStock ? 'Unavailable' : added ? 'Added!' : 'Add to cart'}
                </button>
            </div>
            {expanded && <Lightbox color={color} images={gallery} start={0} name={name} onClose={() => setExpanded(false)} />}
        </article>
    )
}
