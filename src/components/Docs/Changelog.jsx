import DocPage from './DocPage'

const releases = [
    {
        version: 'v2.1.0',
        date: 'October 10th, 2026',
        summary: 'Eighteen new components.',
        sections: [
            {
                title: 'New',
                items: [
                    'Navigation: Tabs, Breadcrumb, Navbar and Command palette.',
                    'Overlays: Dropdown, Popover, Tooltip and Drawer.',
                    'Data and content: Table with sorting and selection, Accordion, Carousel, Stats with an optional trend line, Empty state and Charts (bar, line, donut, pie and sparkline).',
                    'Inputs: Date picker with a range mode, File upload with drag and drop, Slider and Chip input.',
                    'IconButton: a button that only shows the icon you pass, from any icon library or your own SVG.',
                    'Product card: brand, description, reviews, discount with the percentage calculated, color and size options, out of stock state, horizontal layout, and a photo that expands into a gallery.',
                    'Select options accept an image, for example a flag.',
                    'Avatar stacked groups show the name of each person in a tooltip, and the counter lists who is hidden.',
                    'Tooltip has an optional arrow that points to the element.',
                    'Kbd and KbdShortcut have colors, and a pressed key is filled with its color.',
                    'Texts: Pagination, Stepper, Rating, Product card, Pricing, Survey, Date pickers, Carousel, Table, Navbar, Footer and the close and dismiss buttons can be translated with a labels prop, and prices can be formatted with formatPrice.',
                    'color="accent" in Button, IconButton, Badge, Alert, Toast, ProgressBar, Spinner and Kbd uses the brand color, so you set it once. DatePicker, Checkbox and Slider have error and hint, Skeleton has a rounded prop and the product card fills the height of its cell.',
                    'Brand color: every accent reads the --blossom-accent CSS variable, pink by default, so one line sets your brand everywhere. Tabs, Navbar, Pagination, Stepper, Timeline, Slider, Carousel, Table, Card, Product card, Empty state, Survey, Pricing, Jumbotron, Date pickers, Command palette, Rating and the form controls also have a color prop.',
                    'Custom colors: Button, IconButton, Badge, Alert, Toast, ProgressBar, Spinner and Kbd accept any CSS color in their color prop, not only the presets.',
                ],
            },
            {
                title: 'Changed',
                items: [
                    'Every component uses rounded-xl, and small elements such as close buttons use rounded-lg.',
                    'Text typed in inputs and the selected value of the Select are now readable in dark mode.',
                    'The track of the Slider is visible before the value is moved.',
                    'Components that use the icon prop do not include an icon library: pass the icons you prefer. The installation guide explains it.',
                    'Escape closes a Select, MultiSelect or date picker first, not the Modal or Drawer behind it.',
                    'Modal, Drawer, Command palette and the photo viewer keep the focus inside with Tab, close one at a time with Escape and release the page scroll only when the last one closes.',
                    'Typing a name with spaces in a Select no longer chooses the highlighted option.',
                    'Textarea, Select, MultiSelect and RadioGroup link their hint and error message with aria-describedby.',
                    'Yellow buttons, alerts and toasts use dark text for a better contrast, and toasts appear above dialogs.',
                    'Tabs can keep the panels mounted, the Navbar menu closes when a link is pressed, Popover accepts its own trigger classes and the product card colors can have a name.',
                    'The date pickers start on the closest allowed day when min or max leave today out, and Escape closes them first. Toaster has a position and a dismissLabel, the plan button of Pricing uses the accent, and the product card has buttonColor.',
                    'Banner has a color: presets, accent or any CSS color. Navbar has alwaysVisibleActions to keep the cart in the bar on a phone, a breakpoint, and renders its links and actions only once.',
                    'Table has pagination, fields have a required asterisk, the product card can have a price for each size or weight, and Banner is not dismissible unless you set dismissible (it was the other way around).',
                    'The product card has requireSize and preselectSize for the sizes, and the page counter of the Table can be translated with labels.page.',
                    'Kbd and KbdShortcut have a size (sm and md) and a className.',
                    'Button has a size prop, Card and Product card accept their own width, and Tabs without content do not draw an empty panel.',
                    'Tailwind CSS 3.3 or newer is needed (the product card uses line-clamp). The documentation is built with Tailwind CSS 3.4.',
                ],
            },
            {
                title: 'Documentation',
                items: [
                    'Every component page starts with the source collapsed, so the examples come first.',
                    'Every example can be previewed in light or dark mode, independently of the theme of the page.',
                    'Props, attributes and values mentioned in the descriptions are shown as code.',
                ],
            },
        ],
    },
    {
        version: 'v2.0.0',
        date: 'October 9th, 2026',
        summary: 'Blossom UI is now a React library written in TypeScript.',
        sections: [
            {
                title: 'New',
                items: [
                    'Every component is a single .tsx file with typed props. Components that manage state use React hooks.',
                    'New components: Modal, Forms (Input, Textarea, Select, MultiSelect, Checkbox, Radio, RadioGroup and Switch), Footer, Pagination, Stepper and Timeline.',
                    'Interactive components: dismissible Alert, Banner and Badge, a Rating you can click, Toasts with the useToasts hook, a Pricing billing toggle and loading buttons.',
                    'Custom Select, MultiSelect, Checkbox and Radio. No native form controls are used.',
                    'Every component page explains how to copy the file, how to import it and lists its props, generated from the TypeScript types.',
                    'Usage code is generated from the live examples, so the code you copy is the code you see.',
                    'Search with Ctrl + K, a theme that is remembered, animations when the content appears and a better code block.',
                    'llms.txt, llms-full.txt, a sitemap and structured data to help search engines and AI assistants.',
                ],
            },
            {
                title: 'Breaking changes',
                items: [
                    'Blossom UI is now only for React. The guides for Angular, Nuxt, SvelteKit and Astro were removed, and the installation guide starts with Next.js.',
                    'Components are no longer separate exports per variant. Use one component with props, for example <Button color="red" rounded /> instead of RedButtonRounded.',
                    'Components require React 18 and Tailwind CSS 3 with darkMode set to "class".',
                ],
            },
        ],
    },
    {
        version: 'v1.0.0',
        date: 'October 9th, 2023',
        summary: 'First release.',
        sections: [{ title: 'New', items: ['Blossom UI now available, completely free and open source.'] }],
    },
]

const Changelog = () => {
    return (
        <DocPage title='Changelog' description='Every notable change to the library, newest first.'>
            <ol className='flex flex-col gap-10 border-l border-neutral-200 pl-6 dark:border-neutral-700'>
                {releases.map((release) => (
                    <li key={release.version} className='relative'>
                        <span className='absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-corporative' />
                        <h2 className='text-lg font-medium'>{release.version}</h2>
                        <span className='text-sm text-neutral-600 dark:text-neutral-500'>Released on {release.date}.</span>
                        <p className='pt-2 text-neutral-700 dark:text-neutral-300'>{release.summary}</p>
                        {release.sections.map((section) => (
                            <div key={section.title} className='pt-4'>
                                <h3 className='text-sm font-medium uppercase tracking-wide text-neutral-500'>{section.title}</h3>
                                <ul className='list-disc pl-5 pt-2'>
                                    {section.items.map((item) => (
                                        <li key={item} className='pt-1 text-neutral-600 dark:text-neutral-400'>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </li>
                ))}
            </ol>
        </DocPage>
    )
}

export default Changelog
