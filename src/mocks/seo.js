// Single source of truth for the SEO and GEO data of the site.
// It is plain JavaScript on purpose: the build plugin (vite.seo.js) imports it from Node.

import { introduction, customization, components } from './docs.js'

export const SITE = {
    url: 'https://blossomui.vercel.app',
    name: 'Blossom UI',
    tagline: 'React components made with Tailwind CSS',
    description:
        'Blossom UI is a free and open source library of React components written in TypeScript and styled with Tailwind CSS. Copy a single file into your project: buttons, forms, modals, selects, toasts, pagination and more, all with dark mode and typed props.',
    image: 'https://res.cloudinary.com/diruiumfk/image/upload/v1724003620/blossomui_wcxsqc.png',
    github: 'https://github.com/juanigarciadev/BlossomUI',
    author: { name: 'Juan Ignacio García', url: 'https://github.com/juanigarciadev' },
    keywords: [
        'react components',
        'tailwind css components',
        'typescript',
        'ui library',
        'copy and paste components',
        'open source',
        'dark mode',
        'react hooks',
    ],
}

const componentSummaries = {
    Alerts: 'Alert component with info, success, error, warning and dark colors, outlined and accent variants, icons, lists, actions and a dismiss button.',
    Avatar: 'Avatar, avatar group and avatar with information. Sizes, status dot or ring, initials and a placeholder fallback when the image fails.',
    Badges: 'Badge component in seven colors, filled or outlined, rounded, with icons and an optional dismiss button for tags.',
    Banner: 'Dismissible announcement banner with an icon and a message, ready to place at the top of a page.',
    Buttons: 'Button component with colors, rounded corners, a loading state and social sign in buttons for Facebook, X, Github, Google and Apple.',
    Cards: 'Card component with icon, title, description and footer, plus a product card with a favorite toggle and add to cart button.',
    Footer: 'Footer component with a simple row of links, grouped columns with social icons, or a centered layout.',
    Forms: 'Form controls: input, textarea, custom select, multi select with chips, checkbox, radio group and switch, with validation messages.',
    Jumbotron: 'Hero section component with eyebrow, title, description, actions and media. Plain, card, gradient and background image styles.',
    KBD: 'Keyboard key component with relief and an active state, plus a shortcut helper such as Ctrl + K.',
    Modal: 'Accessible modal dialog for React. Closes with Escape or a click outside, locks scroll and restores focus.',
    Pagination: 'Pagination component with ellipses for long lists, rounded and simple variants, controlled by a page state.',
    Pricing: 'Pricing table component with plans, feature lists, a highlighted plan and a monthly or yearly billing toggle.',
    Progress: 'Progress bar component with five sizes, colors, label, percentage and animated transitions.',
    Rating: 'Star rating component with decimal values, review count, interactive mode and a review card.',
    Skeleton: 'Skeleton loading placeholders for text, images and custom shapes that keep the layout while content loads.',
    Spinners: 'Spinner component with five sizes, six colors and a transparent track, accessible for screen readers.',
    Stepper: 'Stepper component, horizontal, vertical or segmented, to guide users through multi step processes.',
    Survey: 'Emoji rating survey component that reports the chosen value and lets the user change or close it.',
    Timeline: 'Timeline component with dots, icons or cards to show events in chronological order.',
    Toasts: 'Toast notifications in five colors with actions, plus the useToasts hook and Toaster to manage a stack of messages.',
}

/** Every indexable page of the site. `type` decides the structured data used for it. */
export const pages = [
    {
        url: '/',
        title: `${SITE.name} - ${SITE.tagline}`,
        description: SITE.description,
        type: 'home',
        priority: 1,
    },
    {
        url: '/components',
        title: `All components | ${SITE.name}`,
        description: 'Browse every Blossom UI component: alerts, avatars, buttons, cards, forms, modals, pagination, toasts and more. React, TypeScript and Tailwind CSS.',
        type: 'article',
        priority: 0.9,
    },
    {
        url: '/docs/getting-started/introduction',
        title: `Introduction | ${SITE.name}`,
        description: 'Learn what Blossom UI is: free React components written in TypeScript and styled with Tailwind CSS that you copy into your project.',
        type: 'article',
        priority: 0.8,
    },
    {
        url: '/docs/getting-started/installation',
        title: `Installation | ${SITE.name}`,
        description: 'How to use Blossom UI in a Next.js or Vite project with React, TypeScript and Tailwind CSS 3. Configure Tailwind and copy your first component.',
        type: 'article',
        priority: 0.8,
    },
    {
        url: '/docs/getting-started/changelog',
        title: `Changelog | ${SITE.name}`,
        description: 'Every notable change to the Blossom UI component library, newest first.',
        type: 'article',
        priority: 0.4,
    },
    {
        url: '/docs/customization/colors',
        title: `Tailwind CSS colors | ${SITE.name}`,
        description: 'The full Tailwind CSS color palette with its hex values, to customize your Blossom UI components.',
        type: 'article',
        priority: 0.5,
    },
    ...components.map((component) => ({
        url: component.url,
        title: `React ${component.name} component with Tailwind CSS | ${SITE.name}`,
        description: componentSummaries[component.name] ?? `${component.name} component for React and Tailwind CSS.`,
        type: 'component',
        name: component.name,
        priority: 0.7,
    })),
]

export const pagesByUrl = Object.fromEntries(pages.map((page) => [page.url, page]))

/** Frequently asked questions. Shown in the introduction page and published as FAQPage structured data. */
export const faq = [
    {
        question: 'What is Blossom UI?',
        answer: 'Blossom UI is a free and open source library of React components written in TypeScript and styled with Tailwind CSS. Each component is a single file that you copy into your project.',
    },
    {
        question: 'Is Blossom UI an npm package?',
        answer: 'No. There is nothing to install except React and Tailwind CSS. You copy the file of the component you need, so you own the code and can change it freely.',
    },
    {
        question: 'Does Blossom UI work with Next.js and Vite?',
        answer: 'Yes. It works in any React 18 project, including Vite and Next.js. In Next.js, components that use hooks need the "use client" directive when they are imported from a Server Component.',
    },
    {
        question: 'Does Blossom UI support dark mode?',
        answer: 'Yes. Every component includes dark: variants and works with the class strategy of Tailwind CSS (darkMode: "class").',
    },
    {
        question: 'Which Tailwind CSS version do I need?',
        answer: 'Tailwind CSS 3. The components use standard utilities and arbitrary values, with no custom plugin or configuration beyond enabling dark mode.',
    },
    {
        question: 'Which components include React hooks?',
        answer: 'Components that manage their own state do: Modal, Select, MultiSelect, Toast (useToasts), Pagination, Stepper, Rating, Survey, the Pricing billing toggle and the dismissible Alert, Banner and Badge.',
    },
]

export const groups = [
    { title: 'Getting started', items: introduction },
    { title: 'Customization', items: customization },
    { title: 'Components', items: components },
]

/** Structured data (JSON-LD) for a page. Used by the app at runtime and by the build plugin. */
export const structuredData = (page) => {
    const url = SITE.url + (page.url === '/' ? '' : page.url)
    const publisher = { '@type': 'Person', name: SITE.author.name, url: SITE.author.url }

    if (page.type === 'home') {
        return [
            {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                name: SITE.name,
                url: SITE.url,
                description: SITE.description,
                inLanguage: 'en',
                publisher,
            },
            {
                '@context': 'https://schema.org',
                '@type': 'SoftwareSourceCode',
                name: SITE.name,
                description: SITE.description,
                codeRepository: SITE.github,
                programmingLanguage: ['TypeScript', 'TSX'],
                runtimePlatform: 'React',
                author: publisher,
                keywords: SITE.keywords.join(', '),
            },
        ]
    }

    const faqData = page.url === '/docs/getting-started/introduction'
        ? [{
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faq.map((entry) => ({ '@type': 'Question', name: entry.question, acceptedAnswer: { '@type': 'Answer', text: entry.answer } })),
        }]
        : []

    const crumbs = [{ name: 'Home', item: SITE.url }]
    if (page.url.startsWith('/docs/components/') || page.url === '/components') crumbs.push({ name: 'Components', item: `${SITE.url}/components` })
    crumbs.push({ name: page.name ?? page.title.split(' | ')[0], item: url })

    return [
        ...faqData,
        {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: crumbs.map((crumb, index) => ({ '@type': 'ListItem', position: index + 1, name: crumb.name, item: crumb.item })),
        },
        {
            '@context': 'https://schema.org',
            '@type': page.type === 'component' ? 'TechArticle' : 'Article',
            headline: page.title,
            description: page.description,
            url,
            inLanguage: 'en',
            image: SITE.image,
            author: publisher,
            publisher,
            about: page.type === 'component' ? { '@type': 'SoftwareSourceCode', name: `${page.name} component`, programmingLanguage: 'TypeScript', runtimePlatform: 'React' } : undefined,
        },
    ]
}
