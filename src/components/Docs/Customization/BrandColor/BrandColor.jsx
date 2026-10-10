import { useState } from 'react'
import { Link } from 'react-router-dom'
import CodeBlock from '@codeBlock'
import DocPage from '../../DocPage'
import CompVersionTitle from '../../../CompVersionTitle/CompVersionTitle'
import InlineCode from '../../InlineCode'
import { Tabs } from '../../../UI/Tabs/Tabs'
import { Pagination } from '../../../UI/Pagination/Pagination'
import { Stepper } from '../../../UI/Stepper/Stepper'
import { Slider } from '../../../UI/Slider/Slider'
import { Checkbox, Input, Switch } from '../../../UI/Forms/Forms'
import { Rating } from '../../../UI/Rating/Rating'

const swatches = ['#f472b6', '#0f766e', '#7c3aed', '#2563eb', '#ea580c', '#e11d48']

const globalCode = `/* index.css */
:root {
  --blossom-accent: #0f766e;
  --blossom-accent-contrast: #ffffff; /* text on top of the accent, white by default */
}`

const sectionCode = `<section style={{ '--blossom-accent': '#7c3aed' } as React.CSSProperties}>
  <Tabs tabs={tabs} />
  <Pagination page={page} total={8} onChange={setPage} />
</section>`

const propCode = `<Tabs tabs={tabs} color="#0f766e" />
<Pagination page={page} total={8} onChange={setPage} color="rgb(15 118 110)" />
<Checkbox label="Remember me" color="#0f766e" />`

const tabs = [
    { id: 'one', label: 'Overview', content: 'The selected tab follows the accent.' },
    { id: 'two', label: 'Activity', content: 'So do the focus rings and the checked controls.' },
    { id: 'three', label: 'Settings', content: 'Change the color above and see it here.' },
]

const steps = [{ title: 'Account' }, { title: 'Details' }, { title: 'Done' }]

const Playground = () => {
    const [accent, setAccent] = useState('#0f766e')
    const [page, setPage] = useState(2)

    return (
        <div className='overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-700'>
            <div className='flex flex-wrap items-center gap-3 border-b border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-700 dark:bg-neutral-900'>
                <label htmlFor='brand-accent' className='text-sm font-medium'>Accent</label>
                <input
                    id='brand-accent'
                    type='color'
                    value={accent}
                    onChange={(event) => setAccent(event.target.value)}
                    className='h-9 w-14 cursor-pointer rounded-lg border border-neutral-300 bg-transparent p-1 dark:border-neutral-600'
                />
                <code className='rounded-md border border-neutral-200 bg-neutral-100 px-1.5 py-0.5 font-mono text-xs dark:border-neutral-700 dark:bg-neutral-800'>{accent}</code>
                <div className='flex gap-2'>
                    {swatches.map((swatch) => (
                        <button
                            key={swatch}
                            type='button'
                            aria-label={`Use ${swatch}`}
                            onClick={() => setAccent(swatch)}
                            className={`h-6 w-6 rounded-full border border-black/10 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${accent === swatch ? 'ring-2 ring-offset-2 dark:ring-offset-neutral-900' : ''}`}
                            style={{ backgroundColor: swatch, '--tw-ring-color': swatch }}
                        />
                    ))}
                </div>
            </div>
            <div
                className='flex flex-col gap-8 p-6 bg-white dark:bg-[#222222]'
                style={{ '--blossom-accent': accent }}
            >
                <Tabs tabs={tabs} />
                <Stepper steps={steps} current={1} />
                <div className='flex flex-wrap items-center gap-8'>
                    <Pagination page={page} total={6} onChange={setPage} />
                    <Rating value={4} showValue />
                </div>
                <div className='grid grid-cols-2 gap-6 md:grid-cols-1'>
                    <Input label='Email' placeholder='you@example.com' />
                    <Slider label='Volume' defaultValue={60} showValue unit='%' />
                    <Checkbox label='Remember me' defaultChecked />
                    <Switch label='Notifications' defaultChecked />
                </div>
            </div>
        </div>
    )
}

const BrandColor = () => (
    <DocPage
        title='Brand color'
        description='Blossom UI is pink out of the box, but every accent reads one CSS variable, so you can use your own brand color once and everywhere.'
    >
        <section>
            <CompVersionTitle title='Try it' paragraph='Pick a color and watch the components below follow it. This is exactly what the CSS variable does in your project.' />
            <Playground />
        </section>

        <section>
            <CompVersionTitle title='For the whole site' paragraph='Set `--blossom-accent` once in your global CSS. It accepts any CSS color.' />
            <CodeBlock name='index.css' code={globalCode} language='css' />
            <p className='pt-3 text-sm text-neutral-600 dark:text-neutral-300'>
                <InlineCode text='`--blossom-accent-contrast`' /> is the color of the text on top of the accent, for example in the selected page or the filled steps. It is white when you do not set it, so use a dark value if your brand color is light.
            </p>
        </section>

        <section>
            <CompVersionTitle title='For a section' paragraph='Set the variable on any element and everything inside it changes, for example to theme one area of the page.' />
            <CodeBlock name='Section.tsx' code={sectionCode} language='tsx' />
        </section>

        <section>
            <CompVersionTitle title='For one component' paragraph='The components that use the accent have a `color` prop. It sets the variable for you and picks black or white text automatically.' />
            <CodeBlock name='Component.tsx' code={propCode} language='tsx' />
        </section>

        <section>
            <CompVersionTitle title='Buttons, badges and the rest' paragraph='Use the `accent` value of `color` and they take the brand color too, so you do not repeat it in every component.' />
            <CodeBlock
                name='Brand.tsx'
                code={`<Button color="accent">Buy now</Button>
<Badge color="accent">New</Badge>
<ProgressBar value={70} color="accent" />
<Alert color="accent">Free shipping from $40.</Alert>`}
                language='tsx'
            />
            <p className='pt-3 text-sm text-neutral-600 dark:text-neutral-300'>
                It works in Button, IconButton, Badge, Alert, Toast, ProgressBar, Spinner and Kbd. The text on top is white, or the color of <InlineCode text='`--blossom-accent-contrast`' />.
            </p>
        </section>

        <section>
            <CompVersionTitle title='Another color in dark mode' paragraph='Redefine the variable inside the dark class if your brand color needs to be lighter on a dark background.' />
            <CodeBlock
                name='index.css'
                code={`:root { --blossom-accent: #0f766e; }
.dark { --blossom-accent: #5eead4; --blossom-accent-contrast: #042f2e; }`}
                language='css'
            />
        </section>

        <section>
            <CompVersionTitle title='What follows the accent' paragraph='The selected state, the focus rings and the highlights of the interactive components.' />
            <ul className='flex list-disc flex-col gap-1 pl-6 text-neutral-700 dark:text-neutral-300'>
                <li>Navigation: Tabs, Navbar, Pagination, Stepper, Breadcrumb hover and Command palette.</li>
                <li>Forms: focus borders, Checkbox, Radio, Switch, Select and MultiSelect options, Slider and Date pickers.</li>
                <li>Content: Table selection, Timeline markers, Carousel dots, Card and Empty state icons, Product card options and Survey.</li>
                <li>Focus rings of every button and control.</li>
            </ul>
            <p className='pt-3 text-sm text-neutral-600 dark:text-neutral-300'>
                Buttons, Badges, Alerts, Toasts, Progress bars, Spinners and Kbd keep their own <Link to='/docs/components/buttons' className='text-corporative hover:text-corporativeHover'>color presets</Link>, and all of them also accept any CSS color in their <InlineCode text='`color`' /> prop. Stars use <InlineCode text='`--blossom-star`' />, gold by default.
            </p>
        </section>
    </DocPage>
)

export default BrandColor
