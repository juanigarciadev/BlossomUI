import { useState } from 'react'
import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/Buttons/Button.tsx?raw'
import { Bell, Heart, Settings, Share2, Trash2 } from 'lucide-react'
import { Button, IconButton, SocialButton } from '../../../UI/Buttons/Button'

const file = 'src/components/UI/Buttons/Button.tsx'

const colors = ['primary', 'secondary', 'default', 'red', 'green', 'yellow', 'purple', 'pink']
const providers = ['facebook', 'x', 'github', 'google', 'apple']

const BoltIcon = () => (
    <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
        <path d='M13 2 3 14h9l-1 8 10-12h-9l1-8z' />
    </svg>
)

const label = (text) => text.charAt(0).toUpperCase() + text.slice(1)

const SaveButton = () => {
    const [loading, setLoading] = useState(false)

    const save = () => {
        setLoading(true)
        setTimeout(() => setLoading(false), 2000)
    }

    return <Button loading={loading} onClick={save}>{loading ? 'Saving...' : 'Click to save'}</Button>
}

const saveCode = `const [loading, setLoading] = useState(false)

const save = () => {
  setLoading(true)
  setTimeout(() => setLoading(false), 2000)
}

<Button loading={loading} onClick={save}>
  {loading ? 'Saving...' : 'Click to save'}
</Button>`

const Buttons = () => {
    return (
        <DocPage title='Buttons' description='Buttons with colors, rounded corners, loading state and social providers.'>
            <ComponentSource source={source} file={file} />

            <Variant title='Colors' description='Choose the style with the `color` prop.' file={file}>
                {colors.map((color) => <Button key={color} color={color}>{label(color)}</Button>)}
            </Variant>

            <Variant title='Rounded' description='Use `rounded` for fully rounded corners.' file={file}>
                {colors.map((color) => <Button key={color} color={color} rounded>{label(color)}</Button>)}
            </Variant>

            <Variant title='Loading' description='The `loading` prop shows a spinner and disables the button. Click it to try.' file={file} code={saveCode}>
                <SaveButton />
                {colors.map((color) => <Button key={color} color={color} loading>{label(color)}</Button>)}
            </Variant>

            <Variant title='Icon button' description='A button with only an icon. Pass any element in `icon`, from the library you prefer or your own SVG. `label` is required: it names the button for screen readers and shows as the native tooltip.' file={file}>
                <IconButton icon={<Settings size={18} />} label='Settings' />
                <IconButton icon={<Bell size={18} />} label='Notifications' color='primary' />
                <IconButton icon={<Heart size={18} />} label='Like' color='pink' />
                <IconButton icon={<Trash2 size={18} />} label='Delete' color='red' />
                <IconButton icon={<BoltIcon />} label='Boost' color='yellow' />
            </Variant>

            <Variant title='Icon button sizes' description='Use `size`: sm, md and lg. Scale the icon yourself to match.' file={file} previewClassName='flex flex-wrap items-center gap-4'>
                <IconButton icon={<Share2 size={14} />} label='Share' size='sm' />
                <IconButton icon={<Share2 size={18} />} label='Share' size='md' />
                <IconButton icon={<Share2 size={22} />} label='Share' size='lg' />
            </Variant>

            <Variant title='Rounded icon button' description='Use `rounded` for a circle. `loading` shows a spinner in place of the icon.' file={file}>
                <IconButton icon={<Heart size={18} />} label='Like' rounded />
                <IconButton icon={<Bell size={18} />} label='Notifications' color='purple' rounded />
                <IconButton icon={<Settings size={18} />} label='Settings' color='green' rounded loading />
            </Variant>

            <Variant title='Social' description='Sign in buttons for the most common providers. They use the bg-[#hex] class, which needs Tailwind CSS v3.' file={file}>
                {providers.map((provider) => <SocialButton key={provider} provider={provider} />)}
            </Variant>

            <Variant title='Rounded social' description='The same buttons with `rounded` corners.' file={file}>
                {providers.map((provider) => <SocialButton key={provider} provider={provider} rounded />)}
            </Variant>

            <Variant title='Social icons only' description='Use `iconOnly` for compact buttons.' file={file}>
                {providers.map((provider) => <SocialButton key={provider} provider={provider} iconOnly />)}
            </Variant>

            <Variant title='Rounded social icons only' description='Icon buttons with `rounded` corners.' file={file}>
                {providers.map((provider) => <SocialButton key={provider} provider={provider} iconOnly rounded />)}
            </Variant>
        </DocPage>
    )
}

export default Buttons
