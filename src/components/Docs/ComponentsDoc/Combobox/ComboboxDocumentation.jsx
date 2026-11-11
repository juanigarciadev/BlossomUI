import { useEffect, useState } from 'react'
import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/Combobox/Combobox.tsx?raw'
import { Combobox } from '../../../UI/Combobox/Combobox'
import { Avatar } from '../../../UI/Avatar/Avatar'

const file = 'src/components/UI/Combobox/Combobox.tsx'

const frameworks = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'angular', label: 'Angular' },
    { value: 'solid', label: 'Solid' },
    { value: 'astro', label: 'Astro', disabled: true },
    { value: 'next', label: 'Next.js' },
    { value: 'nuxt', label: 'Nuxt' },
]

const countries = [
    { value: 'ar', label: 'Argentina' },
    { value: 'br', label: 'Brasil' },
    { value: 'cl', label: 'Chile' },
    { value: 'co', label: 'Colombia' },
    { value: 'mx', label: 'México' },
    { value: 'pe', label: 'Perú' },
    { value: 'uy', label: 'Uruguay' },
]

const people = [
    { value: 'ana', label: 'Ana Martínez', description: 'ana@company.com', icon: <Avatar name='Ana Martínez' size='sm' /> },
    { value: 'luis', label: 'Luis Gómez', description: 'luis@company.com', icon: <Avatar name='Luis Gómez' size='sm' /> },
    { value: 'sofia', label: 'Sofía Ruiz', description: 'sofia@company.com', icon: <Avatar name='Sofía Ruiz' size='sm' /> },
    { value: 'diego', label: 'Diego Castro', description: 'diego@company.com', icon: <Avatar name='Diego Castro' size='sm' /> },
]

const cities = ['Buenos Aires', 'Bogotá', 'Santiago', 'Lima', 'Montevideo', 'Quito', 'Caracas', 'La Paz', 'Asunción', 'San José']

// Pretends to ask a server: the answer arrives after a short delay.
const ServerDemo = () => {
    const [text, setText] = useState('')
    const [results, setResults] = useState([])
    const [value, setValue] = useState('')

    useEffect(() => {
        const timer = setTimeout(() => {
            setResults(cities.filter((city) => city.toLowerCase().includes(text.toLowerCase())).map((city) => ({ value: city, label: city })))
        }, 250)
        return () => clearTimeout(timer)
    }, [text])

    return <Combobox label='City' options={results} filter={false} value={value} onChange={setValue} onInputChange={setText} labels={{ empty: 'Searching…' }} />
}

const serverCode = `const [text, setText] = useState('')
const [results, setResults] = useState([])

useEffect(() => {
  const timer = setTimeout(() => searchCities(text).then(setResults), 250)
  return () => clearTimeout(timer)
}, [text])

<Combobox label="City" options={results} filter={false} onInputChange={setText} />`

const wide = 'flex w-full [&>*]:max-w-sm'

const ComboboxDocumentation = () => {
    return (
        <DocPage title='Combobox' description='A text field with a list of suggestions that narrows while you type. Use it instead of a Select when the list is long.'>
            <ComponentSource source={source} file={file} />

            <Variant title='Default' description='Type to filter, move with the arrow keys, press Enter to choose and Escape to close. Accents and capital letters are ignored.' file={file} previewClassName={wide}>
                <Combobox label='Framework' options={frameworks} placeholder='Search a framework…' />
            </Variant>

            <Variant title='With description and icon' description='An option can have a `description` under the label and an `icon` before it. The text you type also searches the description.' file={file} previewClassName={wide}>
                <Combobox label='Assign to' options={people} placeholder='Search a person…' />
            </Variant>

            <Variant title='Clearable' description='`clearable` shows a button that empties the field.' file={file} previewClassName={wide}>
                <Combobox label='Country' options={countries} defaultValue='ar' clearable />
            </Variant>

            <Variant title='Custom values' description='With `allowCustom` the user can keep a text that is not in the list. It is offered as the last option.' file={file} previewClassName={wide}>
                <Combobox label='Role' options={[{ value: 'designer', label: 'Designer' }, { value: 'developer', label: 'Developer' }, { value: 'manager', label: 'Manager' }]} allowCustom hint='Pick one or write your own.' />
            </Variant>

            <Variant title='Search on a server' description='Pass `filter={false}` to show every option you give, and use `onInputChange` to ask your API. Write a letter to try it.' file={file} previewClassName={wide} code={serverCode}>
                <ServerDemo />
            </Variant>

            <Variant title='Hint, error and success' description='Messages show under the field and color it.' file={file} previewClassName={`${wide} flex-col gap-6`}>
                <Combobox label='Framework' options={frameworks} hint='Used for the starter project.' />
                <Combobox label='Framework' options={frameworks} error='Choose a framework.' />
                <Combobox label='Framework' options={frameworks} defaultValue='react' success='Great choice.' />
            </Variant>

            <Variant title='Disabled' description='A disabled field is dimmed and cannot be opened.' file={file} previewClassName={wide}>
                <Combobox label='Framework' options={frameworks} defaultValue='vue' disabled />
            </Variant>

            <Variant title='Custom color' description='Use `color` for the focus ring and the chosen option. Any CSS color works. Without it the component uses the brand color `--blossom-accent`, which is pink by default (see Brand color in Customization).' file={file} previewClassName={wide}>
                <Combobox label='Framework' options={frameworks} defaultValue='react' color='#0f766e' />
            </Variant>
        </DocPage>
    )
}

export default ComboboxDocumentation
