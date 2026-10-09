import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { SITE, pagesByUrl, structuredData } from '../../mocks/seo'

const upsert = (selector, create) => {
    let node = document.head.querySelector(selector)
    if (!node) {
        node = create()
        document.head.appendChild(node)
    }
    return node
}

const setMeta = (attribute, name, content) => {
    const node = upsert(`meta[${attribute}="${name}"]`, () => {
        const meta = document.createElement('meta')
        meta.setAttribute(attribute, name)
        return meta
    })
    node.setAttribute('content', content)
}

/**
 * Keeps the title, description, canonical url, social tags and structured data
 * in sync with the current route. Search engines that run JavaScript read these
 * values; the build also writes them into one static html file per route.
 */
const RouteSeo = () => {
    const { pathname } = useLocation()

    useEffect(() => {
        const path = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname
        const page = pagesByUrl[path]
        const title = page?.title ?? `Page not found | ${SITE.name}`
        const description = page?.description ?? SITE.description
        const url = SITE.url + (path === '/' ? '' : path)

        document.title = title
        setMeta('name', 'description', description)
        setMeta('name', 'robots', page ? 'index, follow, max-image-preview:large, max-snippet:-1' : 'noindex, follow')

        upsert('link[rel="canonical"]', () => {
            const link = document.createElement('link')
            link.rel = 'canonical'
            return link
        }).href = url

        setMeta('property', 'og:title', title)
        setMeta('property', 'og:description', description)
        setMeta('property', 'og:url', url)
        setMeta('name', 'twitter:title', title)
        setMeta('name', 'twitter:description', description)

        document.head.querySelectorAll('script[data-route-ld]').forEach((node) => node.remove())
        if (page) {
            const script = document.createElement('script')
            script.type = 'application/ld+json'
            script.dataset.routeLd = 'true'
            script.textContent = JSON.stringify(structuredData(page))
            document.head.appendChild(script)
        }
    }, [pathname])

    return null
}

export default RouteSeo
