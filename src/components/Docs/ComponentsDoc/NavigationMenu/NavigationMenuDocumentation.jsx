import { BookOpen, Code2, Layers, Palette, Rocket, Sparkles } from 'lucide-react'
import DocPage from '../../DocPage'
import Variant from '../../../Variant/Variant'
import ComponentSource from '../../../Variant/ComponentSource'
import source from '../../../UI/NavigationMenu/NavigationMenu.tsx?raw'
import { NavigationMenu } from '../../../UI/NavigationMenu/NavigationMenu'

const file = 'src/components/UI/NavigationMenu/NavigationMenu.tsx'

const icon = (Icon) => <Icon size={18} />

const items = [
    {
        id: 'product',
        label: 'Product',
        groups: [
            {
                title: 'Build',
                links: [
                    { label: 'Components', description: 'Copy and paste, typed and accessible.', href: '#navigation-menu', icon: icon(Layers) },
                    { label: 'Themes', description: 'One CSS variable sets your brand.', href: '#navigation-menu', icon: icon(Palette) },
                ],
            },
            {
                title: 'Learn',
                links: [
                    { label: 'Documentation', description: 'Every prop, with live examples.', href: '#navigation-menu', icon: icon(BookOpen) },
                    { label: 'Source code', href: '#navigation-menu', icon: icon(Code2) },
                ],
            },
        ],
    },
    {
        id: 'solutions',
        label: 'Solutions',
        groups: [{ links: [{ label: 'Startups', description: 'Ship a first version in days.', href: '#navigation-menu', icon: icon(Rocket) }, { label: 'Agencies', description: 'Reuse one base for every client.', href: '#navigation-menu', icon: icon(Sparkles) }] }],
    },
    { id: 'pricing', label: 'Pricing', href: '#navigation-menu' },
    { id: 'blog', label: 'Blog', href: '#navigation-menu' },
]

const featured = (
    <a href='#navigation-menu' className='flex h-full flex-col justify-end gap-1 rounded-xl bg-gradient-to-br from-pink-300 to-purple-400 p-4 text-neutral-900 outline-none focus-visible:ring-2 focus-visible:ring-corporative'>
        <span className='font-semibold'>New: Sidebar</span>
        <span className='text-xs opacity-80'>Navigation with a collapsed mode.</span>
    </a>
)

const NavigationMenuDocumentation = () => {
    return (
        <DocPage title='Navigation menu' description='The main menu of a site. An item can open a panel with columns of links, a mega menu, on hover, focus or click.'>
            <ComponentSource source={source} file={file} />

            <Variant title='Default' description='Hover or press an item to open its panel. Arrow Left and Right move between items, Arrow Down enters the panel and Escape closes it.' file={file} previewClassName='flex min-h-[22rem] w-full items-start'>
                <NavigationMenu items={items} activeId='pricing' />
            </Variant>

            <Variant title='With a featured block' description='`featured` is any element shown at the start of the panel, for an announcement or a highlighted page.' file={file} previewClassName='flex min-h-[22rem] w-full items-start'>
                <NavigationMenu items={[{ ...items[0], featured }, ...items.slice(2)]} />
            </Variant>

            <Variant title='Custom color' description='Use `color` for the active item and the focus rings. Any CSS color works. Without it the component uses the brand color `--blossom-accent`, which is pink by default (see Brand color in Customization).' file={file}>
                <NavigationMenu color='#0f766e' activeId='blog' items={items.slice(2)} />
            </Variant>
        </DocPage>
    )
}

export default NavigationMenuDocumentation
