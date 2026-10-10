import { Fragment } from 'react'

export interface BreadcrumbItem {
    label: string
    /** Items without `href` are rendered as plain text. The last one is always the current page. */
    href?: string
}

export interface BreadcrumbProps {
    items: BreadcrumbItem[]
    separator?: 'chevron' | 'slash'
}

export const Breadcrumb = ({ items, separator = 'chevron' }: BreadcrumbProps) => (
    <nav aria-label='Breadcrumb'>
        <ol className='flex flex-wrap items-center gap-2 text-sm'>
            {items.map((item, index) => {
                const last = index === items.length - 1
                return (
                    <Fragment key={`${item.label}-${index}`}>
                        <li className='flex items-center'>
                            {item.href && !last ? (
                                <a href={item.href} className='rounded-md text-neutral-500 outline-none transition-colors hover:text-[color-mix(in_srgb,var(--blossom-accent,#f472b6)_85%,black)] focus-visible:ring-2 focus-visible:ring-[var(--blossom-accent,#f472b6)] dark:text-neutral-400'>
                                    {item.label}
                                </a>
                            ) : (
                                <span aria-current={last ? 'page' : undefined} className={last ? 'font-medium text-neutral-900 dark:text-white' : 'text-neutral-500 dark:text-neutral-400'}>
                                    {item.label}
                                </span>
                            )}
                        </li>
                        {!last && (
                            <li aria-hidden='true' className='text-neutral-400'>
                                {separator === 'slash' ? '/' : (
                                    <svg className='h-4 w-4' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'><path strokeLinecap='round' strokeLinejoin='round' d='m9 6 6 6-6 6' /></svg>
                                )}
                            </li>
                        )}
                    </Fragment>
                )
            })}
        </ol>
    </nav>
)
