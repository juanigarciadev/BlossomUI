import { useState } from 'react'
import { accentStyle } from '../accent'

export interface PricingFeature {
    label: string
    included: boolean
}

export interface PricingPlan {
    name: string
    /** Price per month. */
    price: number
    features: PricingFeature[]
    /** Marks the recommended plan. */
    highlighted?: boolean
    cta?: string
}

export interface PricingLabels {
    billingPeriod: string
    monthly: string
    yearly: string
    /** Text after the price when it is monthly, for example "month" for "/month". */
    perMonth: string
    perYear: string
    subscribe: string
}

export interface PricingProps {
    /** Texts of the component. Pass only the ones you want to change, for example to translate it. */
    /** Formats the price of a plan, for example with `Intl.NumberFormat` to show another currency. */
    formatPrice?: (price: number) => string
    labels?: Partial<PricingLabels>
    /** Accent color of this component: any CSS color. Without it the component uses `--blossom-accent`, which is pink by default. */
    color?: string
    plans: PricingPlan[]
    /** `border` outlines the highlighted plan, `size` makes it bigger. */
    variant?: 'default' | 'border' | 'size'
    /** Shows a monthly / yearly switch. Yearly prices are calculated with `yearlyMonths` months. */
    billingToggle?: boolean
    yearlyMonths?: number
    onSelect?: (plan: PricingPlan, billing: 'monthly' | 'yearly') => void
}

const check = 'm10 15.586l-3.293-3.293l-1.414 1.414L10 18.414l9.707-9.707l-1.414-1.414z'
const cross = 'm16.192 6.344l-4.243 4.242l-4.242-4.242l-1.414 1.414L10.535 12l-4.242 4.242l1.414 1.414l4.242-4.242l4.243 4.242l1.414-1.414L13.364 12l4.242-4.242z'

export const Pricing = ({ labels, formatPrice, color, plans, variant = 'default', billingToggle = false, yearlyMonths = 10, onSelect }: PricingProps) => {
    const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly')
    const text: PricingLabels = { billingPeriod: 'Billing period', monthly: 'Monthly', yearly: 'Yearly', perMonth: 'month', perYear: 'year', subscribe: 'Subscribe', ...labels }

    return (
        <div className='flex w-full flex-col items-center gap-6 rounded-xl bg-neutral-200 p-4 py-6 dark:bg-neutral-900' style={accentStyle(color)}>
            {billingToggle && (
                <div role='group' aria-label={text.billingPeriod} className='inline-flex rounded-full bg-white p-1 text-sm font-medium shadow-sm dark:bg-neutral-800'>
                    {(['monthly', 'yearly'] as const).map((option) => (
                        <button
                            key={option}
                            type='button'
                            aria-pressed={billing === option}
                            onClick={() => setBilling(option)}
                            className={`rounded-full px-4 py-1.5 capitalize transition-colors ${billing === option ? 'bg-[var(--blossom-accent,#f472b6)] text-[var(--blossom-accent-contrast,#fff)]' : 'text-neutral-600 hover:text-black dark:text-neutral-300 dark:hover:text-white'}`}
                        >
                            {option === 'yearly' ? text.yearly : text.monthly}
                            {option === 'yearly' && <span className='ml-1 text-xs opacity-80'>-{Math.round((1 - yearlyMonths / 12) * 100)}%</span>}
                        </button>
                    ))}
                </div>
            )}
            <div className='flex w-full items-center justify-center flex-wrap gap-4'>
                {plans.map((plan) => {
                    const amount = billing === 'yearly' ? plan.price * yearlyMonths : plan.price
                    const accent = plan.highlighted && variant === 'border' ? 'border-2 border-[var(--blossom-accent,#f472b6)]' : 'border-2 border-transparent'
                    const size = plan.highlighted && variant === 'size' ? 'scale-105 py-10' : ''
                    return (
                        <article key={plan.name} className={`flex h-auto w-64 flex-col items-center gap-6 rounded-xl bg-white py-6 shadow-md dark:bg-neutral-800 ${accent} ${size}`}>
                            <div className='flex w-full flex-col items-center gap-2 border-b border-neutral-300 pb-6 dark:border-neutral-700'>
                                <span className='text-sm font-medium uppercase text-neutral-600 dark:text-neutral-400'>{plan.name}</span>
                                <div className='inline-flex items-end dark:text-white'>
                                    <h3 className='text-5xl font-bold'>{formatPrice ? formatPrice(amount) : `$${amount}`}</h3>
                                    <span className='text-xs font-medium'>/{billing === 'yearly' ? text.perYear : text.perMonth}</span>
                                </div>
                            </div>
                            <ul className='flex w-full flex-col gap-2 px-6 dark:text-white'>
                                {plan.features.map((feature) => (
                                    <li key={feature.label} className={`flex gap-1 text-sm ${feature.included ? '' : 'text-neutral-500 line-through dark:text-neutral-500'}`}>
                                        <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' className='shrink-0' aria-hidden='true'>
                                            <path fill='currentColor' d={feature.included ? check : cross} />
                                        </svg>
                                        <span>{feature.label}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className='w-full px-4'>
                                <button
                                    type='button'
                                    onClick={() => onSelect?.(plan, billing)}
                                    className='flex h-fit w-full select-none items-center justify-center rounded-full bg-[var(--blossom-accent,#f472b6)] px-4 py-3 text-sm font-medium text-[var(--blossom-accent-contrast,#fff)] hover:brightness-90'
                                >
                                    {plan.cta ?? text.subscribe}
                                </button>
                            </div>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}
