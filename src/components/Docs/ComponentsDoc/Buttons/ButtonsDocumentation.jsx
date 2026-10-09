import { useState } from 'react'
import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/Buttons/Button.tsx?raw'
import { Button, SocialButton } from '../../../UI/Buttons/Button'

const file = 'src/components/UI/Buttons/Button.tsx'

const colors = ['primary', 'secondary', 'default', 'red', 'green', 'yellow', 'purple', 'pink']
const providers = ['facebook', 'x', 'github', 'google', 'apple']

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

            <Variant title='Colors' description='Choose the style with the color prop.' file={file}>
                {colors.map((color) => <Button key={color} color={color}>{label(color)}</Button>)}
            </Variant>

            <Variant title='Rounded' description='Use rounded for fully rounded corners.' file={file}>
                {colors.map((color) => <Button key={color} color={color} rounded>{label(color)}</Button>)}
            </Variant>

            <Variant title='Loading' description='The loading prop shows a spinner and disables the button. Click it to try.' file={file} code={saveCode}>
                <SaveButton />
                {colors.map((color) => <Button key={color} color={color} loading>{label(color)}</Button>)}
            </Variant>

            <Variant title='Social' description='Sign in buttons for the most common providers. They use the bg-[#hex] class, which needs Tailwind CSS v3.' file={file}>
                {providers.map((provider) => <SocialButton key={provider} provider={provider} />)}
            </Variant>

            <Variant title='Rounded social' description='The same buttons with rounded corners.' file={file}>
                {providers.map((provider) => <SocialButton key={provider} provider={provider} rounded />)}
            </Variant>

            <Variant title='Social icons only' description='Use iconOnly for compact buttons.' file={file}>
                {providers.map((provider) => <SocialButton key={provider} provider={provider} iconOnly />)}
            </Variant>

            <Variant title='Rounded social icons only' description='Icon buttons with rounded corners.' file={file}>
                {providers.map((provider) => <SocialButton key={provider} provider={provider} iconOnly rounded />)}
            </Variant>
        </DocPage>
    )
}

export default Buttons
