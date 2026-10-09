/* eslint-env node */
// Build plugin for SEO and GEO (generative engine optimization).
//
// The site is a single page app, so crawlers that do not run JavaScript would only see
// an empty index.html. At build time this plugin writes:
//   - one static html file per route, with its own title, description, canonical url,
//     social tags, structured data and a text version of the page content
//   - sitemap.xml and robots.txt
//   - llms.txt and llms-full.txt, plus one markdown file per component, for language models
// In development the same files are served on the fly.

import fs from 'fs'
import path from 'path'
import { SITE, pages, groups, faq, structuredData } from './src/mocks/seo.js'
import { getExports, getInterfaces } from './src/utils/parseComponent.js'

const root = process.cwd()

// Folder and file of every component, relative to src/components/UI
const componentFiles = {
    Alerts: 'Alerts/Alert.tsx',
    Avatar: 'Avatar/Avatar.tsx',
    Badges: 'Badges/Badge.tsx',
    Banner: 'Banner/Banner.tsx',
    Buttons: 'Buttons/Button.tsx',
    Cards: 'Card/Card.tsx',
    Footer: 'Footer/Footer.tsx',
    Forms: 'Forms/Forms.tsx',
    Jumbotron: 'Jumbotron/Jumbotron.tsx',
    KBD: 'KBD/Kbd.tsx',
    Modal: 'Modal/Modal.tsx',
    Pagination: 'Pagination/Pagination.tsx',
    Pricing: 'Pricing/Pricing.tsx',
    Progress: 'Progress/ProgressBar.tsx',
    Rating: 'Rating/Rating.tsx',
    Skeleton: 'Skeleton/Skeleton.tsx',
    Spinners: 'Spinners/Spinner.tsx',
    Stepper: 'Stepper/Stepper.tsx',
    Survey: 'Survey/Survey.tsx',
    Timeline: 'Timeline/Timeline.tsx',
    Toasts: 'Toasts/Toast.tsx',
}

const escapeHtml = (text) => String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
const absolute = (url) => SITE.url + (url === '/' ? '' : url)
const today = () => new Date().toISOString().slice(0, 10)

const readComponent = (page) => {
    const file = componentFiles[page.name]
    if (!file) return null
    const full = path.join(root, 'src/components/UI', file)
    if (!fs.existsSync(full)) return null
    const source = fs.readFileSync(full, 'utf8').split('\r\n').join('\n')
    const baseName = path.basename(file, '.tsx')
    return {
        file: `src/components/UI/${file}`,
        source,
        exports: getExports(source),
        interfaces: getInterfaces(source),
        importLine: `import { ${getExports(source).join(', ')} } from './components/ui/${baseName}'`,
    }
}

const propsTableMarkdown = (interfaces) =>
    interfaces
        .map((entry) => {
            const rows = entry.props.map((prop) => `| \`${prop.name}${prop.optional ? '?' : ''}\` | \`${prop.type.replace(/\|/g, '\\|')}\` | ${prop.description || ''} |`)
            return [
                `#### ${entry.name}`,
                entry.extendsFrom ? `Also accepts every prop of \`${entry.extendsFrom}\`.\n` : '',
                rows.length ? ['| Prop | Type | Description |', '| --- | --- | --- |', ...rows].join('\n') : '',
            ].filter(Boolean).join('\n')
        })
        .join('\n\n')

/** Markdown version of a component page, written for language models and developers. */
const componentMarkdown = (page, component) =>
    [
        `# ${page.name} component`,
        '',
        `> ${page.description}`,
        '',
        `Page: ${absolute(page.url)}`,
        `Source: ${SITE.github}/blob/main/${component.file}`,
        '',
        '## How to use it',
        '',
        `Blossom UI is not an npm package. Copy the file \`${component.file}\` into your React project (for example as \`src/components/ui/${path.basename(component.file)}\`). It needs React 18 and Tailwind CSS 3.`,
        '',
        '```tsx',
        component.importLine,
        '```',
        '',
        '## Props',
        '',
        propsTableMarkdown(component.interfaces) || 'This component has no props.',
        '',
        '## Full source',
        '',
        '```tsx',
        component.source.trim(),
        '```',
        '',
    ].join('\n')

const llmsTxt = () => {
    const lines = [
        `# ${SITE.name}`,
        '',
        `> ${SITE.description}`,
        '',
        'Blossom UI is not an npm package: every component is a single TypeScript file that you copy into your React project. Components are styled with Tailwind CSS 3, support dark mode and use React hooks where they manage state (modal, select, toasts, stepper, pagination, rating).',
        '',
    ]
    for (const group of groups) {
        lines.push(`## ${group.title}`, '')
        for (const item of group.items) {
            const page = pages.find((entry) => entry.url === item.url)
            if (!page) continue
            const link = page.type === 'component' ? `${absolute(page.url)}.md` : absolute(page.url)
            lines.push(`- [${item.name}](${link}): ${page.description}`)
        }
        lines.push('')
    }
    lines.push('## Optional', '', `- [Full documentation in one file](${SITE.url}/llms-full.txt): every component with its props and source code`, `- [GitHub repository](${SITE.github}): source code and issues`, '')
    return lines.join('\n')
}

const llmsFullTxt = () => {
    const parts = [`# ${SITE.name} - full documentation`, '', `> ${SITE.description}`, '', '## Frequently asked questions', '', ...faq.flatMap((entry) => [`### ${entry.question}`, entry.answer, '']), '---', '']
    for (const page of pages.filter((entry) => entry.type === 'component')) {
        const component = readComponent(page)
        if (component) parts.push(componentMarkdown(page, component), '---', '')
    }
    return parts.join('\n')
}

const sitemapXml = () => {
    const urls = pages
        .map((page) => `  <url>\n    <loc>${absolute(page.url)}</loc>\n    <lastmod>${today()}</lastmod>\n    <priority>${page.priority}</priority>\n  </url>`)
        .join('\n')
    return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
}

// AI crawlers are allowed on purpose: being cited by answer engines is part of the goal.
const aiCrawlers = ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-User', 'Claude-SearchBot', 'PerplexityBot', 'Google-Extended', 'Applebot-Extended', 'CCBot']

const robotsTxt = () =>
    [
        'User-agent: *',
        'Allow: /',
        '',
        ...aiCrawlers.flatMap((agent) => [`User-agent: ${agent}`, 'Allow: /', '']),
        `Sitemap: ${SITE.url}/sitemap.xml`,
        '',
    ].join('\n')

/** Plain text files and markdown pages that do not depend on the html template. */
const staticFiles = () => {
    const files = {
        'robots.txt': robotsTxt(),
        'sitemap.xml': sitemapXml(),
        'llms.txt': llmsTxt(),
        'llms-full.txt': llmsFullTxt(),
    }
    for (const page of pages.filter((entry) => entry.type === 'component')) {
        const component = readComponent(page)
        if (component) files[`${page.url.slice(1)}.md`] = componentMarkdown(page, component)
    }
    return files
}

// ---- html per route --------------------------------------------------------

const setTag = (html, pattern, replacement) => html.replace(pattern, replacement)

/** Text content of a page, hidden for people but readable by crawlers that do not run JavaScript. */
const fallbackContent = (page) => {
    const component = page.type === 'component' ? readComponent(page) : null
    const nav = groups
        .map((group) => `<h2>${escapeHtml(group.title)}</h2><ul>${group.items.map((item) => `<li><a href="${item.url}">${escapeHtml(item.name)}</a></li>`).join('')}</ul>`)
        .join('')

    const props = component
        ? component.interfaces
            .map((entry) => `<h3>${escapeHtml(entry.name)}</h3><table><thead><tr><th>Prop</th><th>Type</th><th>Description</th></tr></thead><tbody>${entry.props
                .map((prop) => `<tr><td>${escapeHtml(prop.name)}${prop.optional ? '' : ' (required)'}</td><td>${escapeHtml(prop.type)}</td><td>${escapeHtml(prop.description)}</td></tr>`)
                .join('')}</tbody></table>`)
            .join('')
        : ''

    const questions = page.url === '/docs/getting-started/introduction'
        ? `<h2>Frequently asked questions</h2>${faq.map((entry) => `<h3>${escapeHtml(entry.question)}</h3><p>${escapeHtml(entry.answer)}</p>`).join('')}`
        : ''

    const heading = page.type === 'home' ? SITE.name : page.name ?? page.title.split(' | ')[0]
    const usage = component ? `<h2>How to use it</h2><p>Copy ${escapeHtml(component.file)} into your React project and import it.</p><pre><code>${escapeHtml(component.importLine)}</code></pre>` : ''

    return `<div id="seo-fallback" hidden><header><a href="/">${SITE.name}</a></header><main><h1>${escapeHtml(heading)}</h1><p>${escapeHtml(page.description)}</p>${usage}${props ? `<h2>Props</h2>${props}` : ''}${questions}</main><nav aria-label="Documentation">${nav}</nav></div>`
}

const renderPage = (template, page) => {
    const url = absolute(page.url)
    const title = escapeHtml(page.title)
    const description = escapeHtml(page.description)
    let html = template

    html = setTag(html, /<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
    html = setTag(html, /<meta name="description" content="[^"]*"\s*\/?>/, `<meta name="description" content="${description}" />`)
    html = setTag(html, /<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${url}" />`)
    html = setTag(html, /<meta property="og:title" content="[^"]*"\s*\/?>/, `<meta property="og:title" content="${title}" />`)
    html = setTag(html, /<meta property="og:description" content="[^"]*"\s*\/?>/, `<meta property="og:description" content="${description}" />`)
    html = setTag(html, /<meta property="og:url" content="[^"]*"\s*\/?>/, `<meta property="og:url" content="${url}" />`)
    html = setTag(html, /<meta name="twitter:title" content="[^"]*"\s*\/?>/, `<meta name="twitter:title" content="${title}" />`)
    html = setTag(html, /<meta name="twitter:description" content="[^"]*"\s*\/?>/, `<meta name="twitter:description" content="${description}" />`)

    const ld = `<script type="application/ld+json" data-route-ld="true">${JSON.stringify(structuredData(page)).replace(/</g, '\\u003c')}</script>`
    html = html.replace('</head>', `  ${ld}\n</head>`)
    html = html.replace('<script type="module"', `${fallbackContent(page)}\n  <script type="module"`)
    return html
}

const mime = { '.txt': 'text/plain; charset=utf-8', '.xml': 'application/xml; charset=utf-8', '.md': 'text/markdown; charset=utf-8' }

export { staticFiles, renderPage }

export default function seoPlugin() {
    return {
        name: 'blossomui-seo',
        enforce: 'post',

        configureServer(server) {
            server.middlewares.use((req, res, next) => {
                const name = (req.url ?? '').split('?')[0].replace(/^\//, '')
                const files = name && /\.(txt|xml|md)$/.test(name) ? staticFiles() : null
                if (files && files[name] !== undefined) {
                    res.setHeader('Content-Type', mime[path.extname(name)])
                    res.end(files[name])
                    return
                }
                next()
            })
        },

        generateBundle(_options, bundle) {
            const template = bundle['index.html']?.source
            for (const [fileName, source] of Object.entries(staticFiles())) {
                this.emitFile({ type: 'asset', fileName, source })
            }
            if (typeof template !== 'string') return
            for (const page of pages) {
                if (page.url === '/') {
                    bundle['index.html'].source = renderPage(template, page)
                } else {
                    this.emitFile({ type: 'asset', fileName: `${page.url.slice(1)}/index.html`, source: renderPage(template, page) })
                }
            }
        },
    }
}
