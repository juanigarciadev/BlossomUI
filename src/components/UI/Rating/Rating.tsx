import { useState } from 'react'
import type { CSSProperties } from 'react'

export interface RatingLabels {
    /** Accessible name of the stars, for example "3.5 out of 5 stars". */
    stars: (value: number, max: number) => string
    /** Accessible name of the button of one star. */
    star: (star: number) => string
    /** Text shown with `showValue`. */
    outOf: (value: number, max: number) => string
    /** Text shown after the stars with `reviews`. */
    reviews: (count: number) => string
}

const defaultLabels: RatingLabels = {
    stars: (value, max) => `${value} out of ${max} stars`,
    star: (star) => `${star} star${star > 1 ? 's' : ''}`,
    outOf: (value, max) => `${value} out of ${max}`,
    reviews: (count) => `${count.toLocaleString()} reviews`,
}

export interface RatingProps {
    /** Texts of the component. Pass only the ones you want to change, for example to translate it. */
    labels?: Partial<RatingLabels>
    /** Color of the filled stars: any CSS color. Gold by default. */
    color?: string
    /** Current rating, decimals are supported (3.67). */
    value: number
    max?: number
    /** Star size in pixels. */
    size?: number
    /** Makes the stars clickable and called with the chosen value. */
    onChange?: (value: number) => void
    /** Show "3.67 out of 5". */
    showValue?: boolean
    /** Number of reviews, shown after the stars. */
    reviews?: number
}

const STAR = 'm12 17.27 6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z'

const Star = ({ fill, size }: { fill: number; size: number }) => (
    <span className='relative inline-block' style={{ width: size, height: size }}>
        <svg className='absolute inset-0 text-neutral-200 dark:text-neutral-600' width={size} height={size} viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'>
            <path d={STAR} />
        </svg>
        <span className='absolute inset-0 overflow-hidden' style={{ width: `${fill * 100}%` }}>
            <svg className='text-[var(--blossom-star,#ffaf39)]' width={size} height={size} viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'>
                <path d={STAR} />
            </svg>
        </span>
    </span>
)

export const Rating = ({ labels, color, value, max = 5, size = 20, onChange, showValue = false, reviews }: RatingProps) => {
    const [hover, setHover] = useState<number | null>(null)
    const shown = hover ?? value
    const stars = Array.from({ length: max }, (_, index) => index + 1)
    const text = { ...defaultLabels, ...labels }

    return (
        <div className='inline-flex items-center gap-2' style={color ? ({ '--blossom-star': color } as CSSProperties) : undefined}>
            <div className='inline-flex gap-0.5' role={onChange ? 'radiogroup' : 'img'} aria-label={text.stars(value, max)} onMouseLeave={() => setHover(null)}>
                {stars.map((star) =>
                    onChange ? (
                        <button
                            key={star}
                            type='button'
                            role='radio'
                            aria-checked={Math.round(value) === star}
                            aria-label={text.star(star)}
                            onMouseEnter={() => setHover(star)}
                            onClick={() => onChange(star)}
                            className='rounded-lg transition-transform hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--blossom-accent,#f472b6)]'
                        >
                            <Star size={size} fill={Math.min(1, Math.max(0, shown - (star - 1)))} />
                        </button>
                    ) : (
                        <Star key={star} size={size} fill={Math.min(1, Math.max(0, value - (star - 1)))} />
                    )
                )}
            </div>
            {showValue && <span className='text-sm text-neutral-700 dark:text-neutral-300'>{text.outOf(value, max)}</span>}
            {reviews !== undefined && <span className='text-sm text-neutral-700 underline dark:text-neutral-300'>{text.reviews(reviews)}</span>}
        </div>
    )
}

export interface ReviewProps {
    author: string
    rating: number
    date: string
    children: string
}

export const Review = ({ author, rating, date, children }: ReviewProps) => (
    <article className='flex w-full max-w-md flex-col gap-2 rounded-xl border border-neutral-300 bg-neutral-200 bg-opacity-40 p-4 dark:border-neutral-600 dark:bg-neutral-800'>
        <div className='flex items-center justify-between'>
            <span className='font-medium text-neutral-900 dark:text-white'>{author}</span>
            <span className='text-sm text-neutral-500'>{date}</span>
        </div>
        <Rating value={rating} size={16} />
        <p className='text-sm text-neutral-700 dark:text-neutral-300'>{children}</p>
    </article>
)
