import { useState } from 'react'

export interface SurveyOption {
    value: number
    emoji: string
    label: string
}

export const defaultOptions: SurveyOption[] = [
    { value: 1, emoji: '😞', label: 'Very unhappy' },
    { value: 2, emoji: '🙁', label: 'Unhappy' },
    { value: 3, emoji: '😐', label: 'Neutral' },
    { value: 4, emoji: '🙂', label: 'Happy' },
    { value: 5, emoji: '😄', label: 'Very happy' },
]

export interface SurveyProps {
    question: string
    options?: SurveyOption[]
    /** Called with the chosen value when the user answers. */
    onSubmit?: (value: number) => void
    /** Message shown after answering. */
    thanks?: string
}

export const Survey = ({ question, options = defaultOptions, onSubmit, thanks = 'Thanks for your feedback!' }: SurveyProps) => {
    const [selected, setSelected] = useState<SurveyOption | null>(null)
    const [closed, setClosed] = useState(false)

    if (closed) return null

    const choose = (option: SurveyOption) => {
        setSelected(option)
        onSubmit?.(option.value)
    }

    return (
        <article className='flex h-fit w-full flex-col gap-3 rounded-xl bg-blue-100 px-4 py-4 dark:bg-blue-900'>
            <div className='flex items-start justify-between gap-4'>
                <span className='text-blue-900 dark:text-blue-300'>{selected ? thanks : question}</span>
                <button type='button' aria-label='Close survey' onClick={() => setClosed(true)} className='-m-1 shrink-0 rounded-lg p-1 text-blue-900 hover:bg-blue-200 dark:text-blue-300 dark:hover:bg-blue-800'>
                    <svg width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.5' strokeLinecap='round'><path d='M6 6l12 12M18 6 6 18' /></svg>
                </button>
            </div>
            {selected ? (
                <div className='flex items-center gap-2 text-blue-900 dark:text-blue-300'>
                    <span className='text-3xl'>{selected.emoji}</span>
                    <span className='text-sm'>You answered: {selected.label}</span>
                    <button type='button' onClick={() => setSelected(null)} className='ml-auto text-sm underline hover:no-underline'>Change</button>
                </div>
            ) : (
                <div className='flex flex-col gap-1'>
                    <div className='flex justify-between' role='radiogroup' aria-label={question}>
                        {options.map((option) => (
                            <button
                                key={option.value}
                                type='button'
                                role='radio'
                                aria-checked={false}
                                aria-label={option.label}
                                title={option.label}
                                onClick={() => choose(option)}
                                className='rounded-lg p-1 text-3xl transition-transform hover:scale-125 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-700'
                            >
                                {option.emoji}
                            </button>
                        ))}
                    </div>
                    <div className='flex justify-between text-xs text-blue-900 dark:text-blue-300'>
                        <span>{options[0].label}</span>
                        <span>{options[options.length - 1].label}</span>
                    </div>
                </div>
            )}
        </article>
    )
}
