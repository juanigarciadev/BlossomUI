import { motion, useReducedMotion } from 'framer-motion'

/**
 * Appear animation used across the site (same idea as the FadeIn of the portfolio):
 * the content fades in and slides up a little the first time it enters the viewport.
 * It does nothing for people that asked for reduced motion.
 */
export const FadeIn = ({ children, className, y = 16, delay = 0, duration = 0.3, amount = 0.1, once = true, as = 'div', ...props }) => {
    const reduce = useReducedMotion()
    const Tag = motion[as]

    if (reduce) return <Tag className={className} {...props}>{children}</Tag>

    return (
        <Tag
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration, delay, ease: 'easeOut' }}
            viewport={{ once, amount }}
            className={className}
            {...props}
        >
            {children}
        </Tag>
    )
}

/** Appears as soon as it is rendered, with an optional delay. For the first screen of a page. */
export const Appear = ({ children, className, y = 16, delay = 0, duration = 0.3, as = 'div', ...props }) => {
    const reduce = useReducedMotion()
    const Tag = motion[as]

    if (reduce) return <Tag className={className} {...props}>{children}</Tag>

    return (
        <Tag
            initial={{ opacity: 0, y }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration, delay, ease: 'easeOut' }}
            className={className}
            {...props}
        >
            {children}
        </Tag>
    )
}

const container = (stagger, delay) => ({
    hidden: {},
    visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
})

const item = (y) => ({
    hidden: { opacity: 0, y },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
})

/** Wrap a list or grid in `Stagger` and each child in `StaggerItem` so they appear one after another. */
export const Stagger = ({ children, className, stagger = 0.03, delay = 0, amount = 0.1, as = 'div', ...props }) => {
    const reduce = useReducedMotion()
    const Tag = motion[as]

    if (reduce) return <Tag className={className} {...props}>{children}</Tag>

    return (
        <Tag
            variants={container(stagger, delay)}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount }}
            className={className}
            {...props}
        >
            {children}
        </Tag>
    )
}

export const StaggerItem = ({ children, className, y = 16, as = 'div', ...props }) => {
    const reduce = useReducedMotion()
    const Tag = motion[as]

    if (reduce) return <Tag className={className} {...props}>{children}</Tag>

    return (
        <Tag variants={item(y)} className={className} {...props}>
            {children}
        </Tag>
    )
}
