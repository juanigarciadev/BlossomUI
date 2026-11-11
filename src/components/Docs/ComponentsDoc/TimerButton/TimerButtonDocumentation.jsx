import { useState } from 'react'
import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/TimerButton/TimerButton.tsx?raw'
import { TimerButton } from '../../../UI/TimerButton/TimerButton'
import { Button } from '../../../UI/Buttons/Button'

const file = 'src/components/UI/TimerButton/TimerButton.tsx'

const slides = [
    { title: 'Copy', text: 'Every component is a single file that you copy into your project.', color: 'from-pink-300 to-rose-400' },
    { title: 'Paste', text: 'Change the classes, the props or the whole file. It is yours.', color: 'from-purple-300 to-indigo-400' },
    { title: 'Ship', text: 'Typed, accessible and with dark mode from the first line.', color: 'from-sky-300 to-emerald-400' },
]

const SlidesDemo = () => {
    const [slide, setSlide] = useState(0)
    const item = slides[slide]
    return (
        <div className='flex w-full max-w-md flex-col gap-4'>
            <div className={`flex min-h-[8.5rem] flex-col justify-end gap-1 rounded-2xl bg-gradient-to-br p-5 text-neutral-900 transition-colors ${item.color}`}>
                <span className='text-2xl font-bold'>{item.title}</span>
                <span className='text-sm opacity-80'>{item.text}</span>
            </div>
            <div className='flex items-center justify-between gap-3'>
                <TimerButton duration={4000} defaultRunning resetKey={slide} onComplete={() => setSlide((current) => (current + 1) % slides.length)}>Auto</TimerButton>
                <div className='flex gap-2'>
                    {slides.map((entry, index) => (
                        <button key={entry.title} type='button' aria-label={`Show ${entry.title}`} aria-current={index === slide} onClick={() => setSlide(index)} className={`h-2.5 rounded-full outline-none transition-all focus-visible:ring-2 focus-visible:ring-corporative ${index === slide ? 'w-6 bg-corporative' : 'w-2.5 bg-neutral-300 dark:bg-neutral-600'}`} />
                    ))}
                </div>
            </div>
        </div>
    )
}

const slidesCode = `const [slide, setSlide] = useState(0)

<TimerButton
  duration={4000}
  defaultRunning
  resetKey={slide}
  onComplete={() => setSlide((current) => (current + 1) % slides.length)}
>
  Auto
</TimerButton>`

const OnceDemo = () => {
    const [done, setDone] = useState(false)
    return (
        <div className='flex flex-col items-start gap-3'>
            <TimerButton duration={3000} loop={false} onComplete={() => setDone(true)} onRunningChange={(value) => value && setDone(false)}>Undo</TimerButton>
            <p className='text-sm text-neutral-500'>{done ? 'The time is over: it was done.' : 'Press the button. If you do not press it again in 3 seconds the action is done.'}</p>
        </div>
    )
}

const ControlledDemo = () => {
    const [running, setRunning] = useState(false)
    const [count, setCount] = useState(0)
    return (
        <div className='flex flex-col items-start gap-3'>
            <TimerButton running={running} onRunningChange={setRunning} duration={2000} onComplete={() => setCount((value) => value + 1)}>Ticks</TimerButton>
            <div className='flex items-center gap-3'>
                <Button size='sm' color='secondary' onClick={() => setRunning(!running)}>{running ? 'Stop from outside' : 'Start from outside'}</Button>
                <span className='text-sm text-neutral-500'>{count} completed</span>
            </div>
        </div>
    )
}

const controlledCode = `const [running, setRunning] = useState(false)

<TimerButton running={running} onRunningChange={setRunning} duration={2000} onComplete={tick}>
  Ticks
</TimerButton>

<Button onClick={() => setRunning(!running)}>Toggle from outside</Button>`

const TimerButtonDocumentation = () => {
    return (
        <DocPage title='Timer button' description='A button with a bar that fills while time passes. When it is full it calls `onComplete`, so it can move a carousel, a tour or a step by itself. Pressing it pauses it.'>
            <ComponentSource source={source} file={file} />

            <Variant title='Default' description='Press it to start and press it again to pause. The bar fills in `duration` milliseconds and starts again, calling `onComplete` every time.' file={file}>
                <TimerButton>Timer</TimerButton>
            </Variant>

            <Variant title='Autoplay' description='The classic use: `defaultRunning` starts it, `onComplete` goes to the next slide and `resetKey` starts the bar again when the user changes slide by hand.' file={file} code={slidesCode}>
                <SlidesDemo />
            </Variant>

            <Variant title='Only once' description='With `loop={false}` it stops after the first time, for example to give the user a moment to undo something.' file={file}>
                <OnceDemo />
            </Variant>

            <Variant title='Controlled' description='`running` and `onRunningChange` let your own code start and stop it.' file={file} code={controlledCode}>
                <ControlledDemo />
            </Variant>

            <Variant title='Sizes and options' description='`size` can be `sm`, `md` or `lg`, and `showTime={false}` hides the seconds. Without text it is an icon button: `labels` gives it an accessible name.' file={file}>
                <TimerButton size='sm' duration={6000}>Small</TimerButton>
                <TimerButton size='lg' duration={6000} showTime={false}>Large</TimerButton>
                <TimerButton duration={6000} />
            </Variant>

            <Variant title='Custom color' description='Use `color` for the bar and the focus ring. Any CSS color works. Without it the component uses the brand color `--blossom-accent`, which is pink by default (see Brand color in Customization).' file={file}>
                <TimerButton defaultRunning color='#0f766e' duration={5000}>Teal</TimerButton>
            </Variant>
        </DocPage>
    )
}

export default TimerButtonDocumentation
