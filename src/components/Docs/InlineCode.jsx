/**
 * Renders a plain string where the parts between backticks are shown as code,
 * so props, attributes and values stand out from the sentence.
 */
const InlineCode = ({ text }) => {
    if (typeof text !== 'string') return text

    return text.split('`').map((part, index) =>
        index % 2 === 1 ? (
            <code
                key={index}
                className='rounded-md border border-neutral-200 bg-neutral-100 px-1.5 py-0.5 font-mono text-[0.85em] font-medium text-pink-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-pink-300'
            >
                {part}
            </code>
        ) : (
            part
        )
    )
}

export default InlineCode
