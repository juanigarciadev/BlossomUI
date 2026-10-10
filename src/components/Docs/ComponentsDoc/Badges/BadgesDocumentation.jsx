import { useState } from 'react'
import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/Badges/Badge.tsx?raw'
import { Badge } from '../../../UI/Badges/Badge'

const file = 'src/components/UI/Badges/Badge.tsx'

const colors = ['default', 'dark', 'red', 'green', 'yellow', 'purple', 'pink']

const TagIcon = () => (
    <svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24'>
        <path fill='currentColor' d='M21.41 11.58l-9-9A2 2 0 0 0 11 2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 .59 1.42l9 9A2 2 0 0 0 13 22a2 2 0 0 0 1.41-.59l7-7A2 2 0 0 0 22 13a2 2 0 0 0-.59-1.42ZM5.5 7A1.5 1.5 0 1 1 7 5.5A1.5 1.5 0 0 1 5.5 7Z' />
    </svg>
)

const ClockIcon = () => (
    <svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24'>
        <path fill='currentColor' d='M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2m4.2 14.2L11 13V7h1.5v5.2l4.5 2.7Z' />
    </svg>
)

const TagsDemo = () => {
    const [tags, setTags] = useState(['React', 'Tailwind', 'TypeScript'])
    return (
        <>
            {tags.map((tag) => (
                <Badge key={tag} color='pink' onDismiss={() => setTags((prev) => prev.filter((t) => t !== tag))}>{tag}</Badge>
            ))}
            {tags.length === 0 && <button type='button' className='text-sm text-pink-500 hover:underline' onClick={() => setTags(['React', 'Tailwind', 'TypeScript'])}>Reset</button>}
        </>
    )
}

const tagsCode = `const [tags, setTags] = useState(['React', 'Tailwind', 'TypeScript'])

{tags.map((tag) => (
  <Badge
    key={tag}
    color="pink"
    onDismiss={() => setTags((prev) => prev.filter((t) => t !== tag))}
  >
    {tag}
  </Badge>
))}`

const Badges = () => {
    return (
        <DocPage title='Badges' description='Highlight an important characteristic of an element or set of elements.'>
            <ComponentSource source={source} file={file} />

            <Variant title='Default' description='Soft filled badges in every color.' file={file}>
                {colors.map((color) => <Badge key={color} color={color}>{color}</Badge>)}
            </Variant>

            <Variant title='Outlined' description='Use `outlined` for a bordered version.' file={file}>
                {colors.map((color) => <Badge key={color} color={color} outlined>{color}</Badge>)}
            </Variant>

            <Variant title='Rounded' description='Fully rounded corners, filled or outlined.' file={file}>
                {colors.map((color) => <Badge key={color} color={color} rounded>{color}</Badge>)}
                {colors.map((color) => <Badge key={`o-${color}`} color={color} rounded outlined>{color}</Badge>)}
            </Variant>

            <Variant title='With icons' description='Pass any element to the `icon` prop.' file={file}>
                <Badge icon={<TagIcon />}>20% off</Badge>
                <Badge color='dark' icon={<ClockIcon />}>3 minutes ago</Badge>
                <Badge color='green' rounded icon={<TagIcon />}>In stock</Badge>
            </Variant>

            <Variant title='Icons only' description='Without children the badge becomes a compact round icon.' file={file}>
                <Badge icon={<TagIcon />} />
                <Badge color='dark' icon={<ClockIcon />} />
                <Badge color='pink' icon={<TagIcon />} />
            </Variant>

            <Variant title='Dismissible' description='Provide `onDismiss` to show a close button. Remove tags to try it.' file={file} code={tagsCode}>
                <TagsDemo />
            </Variant>
            <Variant title='Brand accent' description='`accent` uses the brand color of the site, `--blossom-accent`.' file={file}>
                <Badge color='accent'>New</Badge>
                <Badge color='accent' outlined rounded>Limited</Badge>
            </Variant>

            <Variant title='Custom colors' description='Any CSS color works, not only the presets: hex, rgb(), hsl() or a CSS variable. The badge uses it for the text and a soft tint for the background.' file={file}>
                <Badge color='#7c3aed'>Violet</Badge>
                <Badge color='#0ea5e9' outlined>Sky</Badge>
                <Badge color='#f97316' rounded>Orange</Badge>
                <Badge color='#10b981' rounded outlined>Emerald</Badge>
            </Variant>

        </DocPage>
    )
}

export default Badges
