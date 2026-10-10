import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { accentStyle } from '../accent'

export interface CarouselLabels {
    carousel: string
    previous: string
    next: string
    goTo: (slide: number) => string
    slide: (slide: number, total: number) => string
}

const defaultLabels: CarouselLabels = {
    carousel: 'Carousel',
    previous: 'Previous slide',
    next: 'Next slide',
    goTo: (slide) => `Go to slide ${slide}`,
    slide: (slide, total) => `${slide} of ${total}`,
}

export interface CarouselProps {
    /** Texts of the component. Pass only the ones you want to change, for example to translate it. */
    labels?: Partial<CarouselLabels>
    /** Accent color of this component: any CSS color. Without it the component uses `--blossom-accent`, which is pink by default. */
    color?: string
    /** Each item is one slide. */
    slides: ReactNode[]
    /** Move to the next slide every `interval` milliseconds. Pauses on hover and focus. */
    autoPlay?: boolean
    interval?: number
    /** Go back to the first slide after the last one. */
    loop?: boolean
    /** Show the dots that jump to a slide. */
    dots?: boolean
}

const arrow = 'absolute top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white text-neutral-800 shadow-md outline-none transition-opacity hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-[var(--blossom-accent,#f472b6)] disabled:pointer-events-none disabled:opacity-0 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700'

export const Carousel = ({ labels, color, slides, autoPlay = false, interval = 4000, loop = false, dots = true }: CarouselProps) => {
    const track = useRef<HTMLDivElement>(null)
    const [index, setIndex] = useState(0)
    const text = { ...defaultLabels, ...labels }
    const [paused, setPaused] = useState(false)

    const goTo = useCallback((target: number) => {
        const element = track.current
        if (!element) return
        const next = Math.min(Math.max(target, 0), slides.length - 1)
        element.scrollTo({ left: next * element.clientWidth, behavior: 'smooth' })
    }, [slides.length])

    const move = useCallback((step: number) => {
        const target = index + step
        if (loop && target >= slides.length) goTo(0)
        else if (loop && target < 0) goTo(slides.length - 1)
        else goTo(target)
    }, [index, loop, slides.length, goTo])

    // The scroll position is the source of truth, so swiping and the buttons stay in sync.
    const onScroll = () => {
        const element = track.current
        if (element) setIndex(Math.round(element.scrollLeft / element.clientWidth))
    }

    useEffect(() => {
        if (!autoPlay || paused || slides.length < 2) return
        const timer = window.setInterval(() => {
            setIndex((current) => {
                const target = current + 1 >= slides.length ? 0 : current + 1
                goTo(target)
                return current
            })
        }, interval)
        return () => window.clearInterval(timer)
    }, [autoPlay, paused, interval, slides.length, goTo])

    return (
        <section
            aria-roledescription='carousel'
            aria-label={text.carousel}
            className='relative w-full'
            style={accentStyle(color)}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
        >
            <div
                ref={track}
                onScroll={onScroll}
                className='flex snap-x snap-mandatory overflow-x-auto scroll-smooth rounded-2xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
            >
                {slides.map((slide, position) => (
                    <div
                        key={position}
                        role='group'
                        aria-roledescription='slide'
                        aria-label={text.slide(position + 1, slides.length)}
                        className='w-full shrink-0 snap-center'
                    >
                        {slide}
                    </div>
                ))}
            </div>
            <button type='button' aria-label={text.previous} disabled={!loop && index === 0} onClick={() => move(-1)} className={`${arrow} left-3`}>
                <svg className='h-4 w-4' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2.5'><path strokeLinecap='round' strokeLinejoin='round' d='m15 6-6 6 6 6' /></svg>
            </button>
            <button type='button' aria-label={text.next} disabled={!loop && index === slides.length - 1} onClick={() => move(1)} className={`${arrow} right-3`}>
                <svg className='h-4 w-4' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2.5'><path strokeLinecap='round' strokeLinejoin='round' d='m9 6 6 6-6 6' /></svg>
            </button>
            {dots && (
                <div className='flex justify-center gap-2 pt-3'>
                    {slides.map((_, position) => (
                        <button
                            key={position}
                            type='button'
                            aria-label={text.goTo(position + 1)}
                            aria-current={position === index}
                            onClick={() => goTo(position)}
                            className={`h-2 rounded-full outline-none transition-all focus-visible:ring-2 focus-visible:ring-[var(--blossom-accent,#f472b6)] ${position === index ? 'w-6 bg-[var(--blossom-accent,#f472b6)]' : 'w-2 bg-neutral-300 hover:bg-neutral-400 dark:bg-neutral-700'}`}
                        />
                    ))}
                </div>
            )}
        </section>
    )
}
