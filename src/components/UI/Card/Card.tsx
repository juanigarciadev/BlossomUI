import { useState, type ReactNode } from 'react'

const surface = 'rounded-xl border border-neutral-300 bg-neutral-200 bg-opacity-40 dark:border-neutral-600 dark:bg-neutral-800'

export interface CardProps {
    title: string
    description?: ReactNode
    /** Icon shown inside a tinted square. */
    icon?: ReactNode
    /** Extra content, for example buttons or links. */
    footer?: ReactNode
    className?: string
}

export const Card = ({ title, description, icon, footer, className = '' }: CardProps) => (
    <section className={`flex h-auto w-80 flex-col gap-2 rounded-xl border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-700 dark:bg-neutral-800 ${className}`}>
        {icon && <span className='grid h-10 w-10 place-items-center rounded-xl bg-pink-400 bg-opacity-20 text-pink-400'>{icon}</span>}
        <h3 className='text-lg font-medium text-neutral-900 dark:text-white'>{title}</h3>
        {description && <p className='text-sm text-neutral-600 dark:text-neutral-300'>{description}</p>}
        {footer}
    </section>
)

export interface ProductCardProps {
    image: string
    name: string
    price: number
    /** From 0 to 5. */
    rating?: number
    badge?: string
    /** Called with the product name when the user presses "Add to cart". */
    onAddToCart?: (name: string) => void
}

const Star = ({ filled }: { filled: boolean }) => (
    <svg className={filled ? 'text-yellow-400' : 'text-neutral-300 dark:text-neutral-600'} width='16' height='16' viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'>
        <path d='m12 17.27 6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' />
    </svg>
)

export const ProductCard = ({ image, name, price, rating = 0, badge, onAddToCart }: ProductCardProps) => {
    const [favorite, setFavorite] = useState(false)
    const [added, setAdded] = useState(false)

    const add = () => {
        setAdded(true)
        onAddToCart?.(name)
        setTimeout(() => setAdded(false), 1500)
    }

    return (
        <article className={`relative flex h-fit w-64 flex-col gap-4 p-4 shadow-sm ${surface}`}>
            <div className='relative'>
                <img src={image} alt={name} className='h-40 w-full rounded-xl bg-neutral-200 object-cover dark:bg-neutral-700' />
                {badge && <span className='absolute left-2 top-2 rounded-lg bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-900 dark:bg-blue-900 dark:text-blue-300'>{badge}</span>}
                <button
                    type='button'
                    aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
                    aria-pressed={favorite}
                    onClick={() => setFavorite((prev) => !prev)}
                    className='absolute right-2 top-2 rounded-lg bg-white p-1.5 shadow-sm hover:bg-neutral-100 dark:bg-neutral-900 dark:hover:bg-neutral-700'
                >
                    <svg width='20' height='20' viewBox='0 0 24 24' aria-hidden='true' className={favorite ? 'fill-red-600' : 'fill-neutral-400'}>
                        <path d='m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z' />
                    </svg>
                </button>
            </div>
            <div className='flex flex-col gap-1'>
                <h3 className='font-bold text-black dark:text-white'>{name}</h3>
                <div className='flex' role='img' aria-label={`${rating} out of 5 stars`}>
                    {[1, 2, 3, 4, 5].map((n) => <Star key={n} filled={n <= Math.round(rating)} />)}
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <span className='text-xl font-bold text-black dark:text-white'>${price.toFixed(2)}</span>
                <button
                    type='button'
                    onClick={add}
                    className='flex select-none items-center justify-center rounded-xl bg-black px-4 py-3 text-sm font-medium text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200'
                >
                    {added ? 'Added!' : 'Add to cart'}
                </button>
            </div>
        </article>
    )
}
