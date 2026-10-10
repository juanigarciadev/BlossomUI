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
                    'Select options accept an image, for example a flag.',
                ],
            },
            {
                title: 'Changed',
                items: [
                    'Every component uses rounded-xl, and small elements such as close buttons use rounded-lg.',
                    'Text typed in inputs and the selected value of the Select are now readable in dark mode.',
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
