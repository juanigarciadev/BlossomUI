import { useState } from 'react'
import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/Forms/Forms.tsx?raw'
import { Input, Textarea, Select, MultiSelect, Checkbox, Radio, RadioGroup, Switch } from '../../../UI/Forms/Forms'
import { Button } from '../../../UI/Buttons/Button'

const file = 'src/components/UI/Forms/Forms.tsx'

const SearchIcon = () => (
    <svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round'>
        <circle cx='11' cy='11' r='7' /><path d='m20 20-3.5-3.5' />
    </svg>
)

const countries = [
    { value: 'ar', label: 'Argentina' },
    { value: 'es', label: 'Spain' },
    { value: 'mx', label: 'Mexico' },
    { value: 'co', label: 'Colombia' },
    { value: 'xx', label: 'Atlantis (unavailable)', disabled: true },
]

const LoginDemo = () => {
    const [values, setValues] = useState({ email: '', password: '' })
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)

    const change = (field) => (event) => setValues((prev) => ({ ...prev, [field]: event.target.value }))

    const submit = (event) => {
        event.preventDefault()
        const next = {}
        if (!/^\S+@\S+\.\S+$/.test(values.email)) next.email = 'Enter a valid email address.'
        if (values.password.length < 8) next.password = 'Use at least 8 characters.'
        setErrors(next)
        setSubmitted(Object.keys(next).length === 0)
    }

    return (
        <form onSubmit={submit} noValidate className='flex w-full max-w-sm flex-col gap-4 rounded-xl border border-neutral-300 bg-neutral-200 bg-opacity-40 p-6 dark:border-neutral-700 dark:bg-neutral-800'>
            <div>
                <h3 className='text-xl font-bold text-neutral-800 dark:text-white'>Welcome back</h3>
                <p className='text-sm text-neutral-600 dark:text-neutral-300'>Sign in to your account.</p>
            </div>
            <Input label='Email' type='email' placeholder='you@example.com' value={values.email} onChange={change('email')} error={errors.email} />
            <Input label='Password' type='password' placeholder='••••••••' value={values.password} onChange={change('password')} error={errors.password} />
            <Checkbox label='Remember me' />
            <Button type='submit' color='default' className='w-full'>Sign in</Button>
            {submitted && <span className='text-sm text-green-700 dark:text-green-400'>Everything is valid, you are in!</span>}
        </form>
    )
}

const loginCode = `const [values, setValues] = useState({ email: '', password: '' })
const [errors, setErrors] = useState<{ email?: string; password?: string }>({})

const submit = (event: FormEvent) => {
  event.preventDefault()
  const next: typeof errors = {}
  if (!/^\\S+@\\S+\\.\\S+$/.test(values.email)) next.email = 'Enter a valid email address.'
  if (values.password.length < 8) next.password = 'Use at least 8 characters.'
  setErrors(next)
}

<form onSubmit={submit} noValidate>
  <Input label="Email" type="email" value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })} error={errors.email} />
  <Input label="Password" type="password" value={values.password} onChange={(e) => setValues({ ...values, password: e.target.value })} error={errors.password} />
  <Button type="submit" color="default">Sign in</Button>
</form>`

const flag = (code) => `https://flagcdn.com/w40/${code}.png`

const languages = [
    { value: 'en', label: 'English', image: flag('us') },
    { value: 'es', label: 'Español', image: flag('ar') },
    { value: 'pt', label: 'Português', image: flag('br') },
    { value: 'fr', label: 'Français', image: flag('fr') },
    { value: 'de', label: 'Deutsch', image: flag('de') },
]

const imagesCode = `const languages = [
    { value: 'en', label: 'English', image: 'https://flagcdn.com/w40/us.png' },
    { value: 'es', label: 'Español', image: 'https://flagcdn.com/w40/ar.png' },
    { value: 'pt', label: 'Português', image: 'https://flagcdn.com/w40/br.png' },
]

<Select label="Language" options={languages} defaultValue="en" />`

const ControlledSelect = () => {
    const [country, setCountry] = useState('ar')
    return (
        <div className='flex w-full flex-col gap-2 [&>*]:max-w-sm'>
            <Select label='Country' options={countries} value={country} onChange={setCountry} />
            <span className='text-sm text-neutral-600 dark:text-neutral-300'>Selected value: {country}</span>
        </div>
    )
}

const selectCode = `const [country, setCountry] = useState('ar')

<Select label="Country" options={countries} value={country} onChange={setCountry} />`

const skills = [
    { value: 'react', label: 'React' },
    { value: 'ts', label: 'TypeScript' },
    { value: 'tailwind', label: 'Tailwind CSS' },
    { value: 'node', label: 'Node.js' },
    { value: 'next', label: 'Next.js' },
    { value: 'vite', label: 'Vite' },
    { value: 'cobol', label: 'COBOL', disabled: true },
]

const ControlledMultiSelect = () => {
    const [selected, setSelected] = useState(['react', 'tailwind'])
    return (
        <div className='flex w-full flex-col gap-2 [&>*]:max-w-md'>
            <MultiSelect label='Skills' options={skills} value={selected} onChange={setSelected} />
            <span className='text-sm text-neutral-600 dark:text-neutral-300'>Selected: {selected.join(', ') || 'nothing'}</span>
        </div>
    )
}

const multiCode = `const [selected, setSelected] = useState(['react', 'tailwind'])

<MultiSelect label="Skills" options={skills} value={selected} onChange={setSelected} />`

const CheckboxGroupDemo = () => {
    const items = ['Email', 'SMS', 'Push']
    const [checked, setChecked] = useState(['Email'])
    const all = checked.length === items.length

    return (
        <div className='flex flex-col gap-3'>
            <Checkbox
                label='All notifications'
                checked={all}
                indeterminate={!all && checked.length > 0}
                onChange={() => setChecked(all ? [] : items)}
            />
            <div className='ml-8 flex flex-col gap-3'>
                {items.map((item) => (
                    <Checkbox
                        key={item}
                        label={item}
                        checked={checked.includes(item)}
                        onChange={() => setChecked((prev) => (prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]))}
                    />
                ))}
            </div>
        </div>
    )
}

const groupCode = `const items = ['Email', 'SMS', 'Push']
const [checked, setChecked] = useState(['Email'])
const all = checked.length === items.length

<Checkbox
  label="All notifications"
  checked={all}
  indeterminate={!all && checked.length > 0}
  onChange={() => setChecked(all ? [] : items)}
/>

{items.map((item) => (
  <Checkbox
    key={item}
    label={item}
    checked={checked.includes(item)}
    onChange={() => setChecked((prev) => prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item])}
  />
))}`

const ControlledRadioGroup = () => {
    const [plan, setPlan] = useState('pro')
    return (
        <div className='flex flex-col gap-3'>
            <RadioGroup
                name='plan-group'
                label='Choose your plan'
                value={plan}
                onChange={setPlan}
                options={[
                    { value: 'free', label: 'Free', description: 'For personal projects' },
                    { value: 'pro', label: 'Pro', description: 'For teams that ship fast' },
                    { value: 'enterprise', label: 'Enterprise', description: 'Talk to us', disabled: true },
                ]}
            />
            <span className='text-sm text-neutral-600 dark:text-neutral-300'>Selected plan: {plan}</span>
        </div>
    )
}

const radioCode = `const [plan, setPlan] = useState('pro')

<RadioGroup
  name="plan"
  label="Choose your plan"
  value={plan}
  onChange={setPlan}
  options={[
    { value: 'free', label: 'Free', description: 'For personal projects' },
    { value: 'pro', label: 'Pro', description: 'For teams that ship fast' },
    { value: 'enterprise', label: 'Enterprise', disabled: true },
  ]}
/>`

const ControlledSwitch = () => {
    const [on, setOn] = useState(true)
    return <Switch label={on ? 'Notifications on' : 'Notifications off'} checked={on} onChange={(e) => setOn(e.target.checked)} />
}

const switchCode = `const [on, setOn] = useState(true)

<Switch label={on ? 'Notifications on' : 'Notifications off'} checked={on} onChange={(e) => setOn(e.target.checked)} />`

const FormsDocumentation = () => {
    return (
        <DocPage title='Forms' description='Inputs and controls with labels, validation messages and clear focus states. They forward refs and accept every native attribute.'>
            <ComponentSource source={source} file={file} />

            <Variant title='Input' description='A text input with a label and helper text.' file={file} previewClassName='flex flex-col gap-4 [&>*]:max-w-sm'>
                <Input label='Email' type='email' placeholder='you@example.com' hint='We will never share your email.' />
            </Variant>

            <Variant title='Input with icon' description='Pass any element to the `icon` prop.' file={file} previewClassName='flex flex-col gap-4 [&>*]:max-w-sm'>
                <Input label='Search' placeholder='Search components' icon={<SearchIcon />} />
            </Variant>

            <Variant title='Validation' description='Show a success or an error message and the field changes color.' file={file} previewClassName='flex flex-col gap-4 [&>*]:max-w-sm'>
                <Input label='Username' defaultValue='blossom' success='Nice! This username is available.' />
                <Input label='Password' type='password' defaultValue='1234' error='Use at least 8 characters.' />
            </Variant>

            <Variant title='Select' description='A custom select, not the native one: the list is styled, keyboard accessible and never clipped by its container.' file={file} previewClassName='flex flex-col gap-4 [&>*]:max-w-sm'>
                <Select label='Country' placeholder='Choose a country' options={countries} />
            </Variant>

            <Variant title='Select with images' description='Add `image` to each option, for example a flag or an avatar. It shows in the list and in the button.' file={file} code={imagesCode} previewClassName='flex flex-col gap-4 [&>*]:max-w-sm'>
                <Select label='Language' options={languages} defaultValue='en' />
            </Variant>

            <Variant title='Select with state' description='Controlled with `value` and `onChange`, which receives the chosen value. Use arrows, Enter, Escape or type the first letters of an option.' file={file} code={selectCode}>
                <ControlledSelect />
            </Variant>

            <Variant title='Textarea' description='For longer messages.' file={file} previewClassName='flex flex-col gap-4 [&>*]:max-w-sm'>
                <Textarea label='Message' placeholder='Write your message...' />
            </Variant>

            <Variant title='Multi select' description='Pick several options. Selected values become chips, the text field filters the list and Backspace removes the last chip.' file={file} code={multiCode}>
                <ControlledMultiSelect />
            </Variant>

            <Variant title='Multi select with limit' description='Use `max` to limit how many options can be selected.' file={file} previewClassName='flex flex-col gap-4 [&>*]:max-w-sm'>
                <MultiSelect label='Skills' placeholder='Choose up to 3' options={skills} defaultValue={['react']} max={3} hint='Pick the ones you know best.' />
            </Variant>

            <Variant title='Checkbox' description='A custom checkbox: the native input is hidden but keeps focus, keyboard and form behavior.' file={file} previewClassName='flex flex-col gap-4'>
                <Checkbox label='Subscribe to updates' defaultChecked />
                <Checkbox label='Accept terms' description='You need to accept them to continue.' />
                <Checkbox label='Disabled' disabled />
            </Variant>

            <Variant title='Checkbox group' description='Use `indeterminate` for a parent checkbox when only some children are selected.' file={file} code={groupCode}>
                <CheckboxGroupDemo />
            </Variant>

            <Variant title='Radio' description='Custom radios that share a name.' file={file} previewClassName='flex flex-wrap gap-6'>
                <Radio name='plan' label='Monthly' defaultChecked />
                <Radio name='plan' label='Yearly' description='Save 20%' />
                <Radio name='plan' label='Lifetime' disabled />
            </Variant>

            <Variant title='Radio group' description='`RadioGroup` keeps the chosen value and reports it with `onChange`.' file={file} code={radioCode}>
                <ControlledRadioGroup />
            </Variant>

            <Variant title='Switch' description='A toggle that works as a controlled or an uncontrolled input.' file={file} code={switchCode}>
                <ControlledSwitch />
            </Variant>

            <Variant title='Login form' description='A complete form with validation using the components above. Try sending it empty.' file={file} code={loginCode}>
                <LoginDemo />
            </Variant>
        </DocPage>
    )
}

export default FormsDocumentation
