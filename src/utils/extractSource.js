// Extracts the JSX returned by one or more exported components from a raw
// source file (imported with Vite's `?raw` suffix), so the documentation
// always shows exactly what is rendered in the preview.

const dedent = (text) => {
    const lines = text.split('\n')
    const indents = lines.filter((l) => l.trim()).map((l) => l.match(/^\s*/)[0].length)
    const min = indents.length ? Math.min(...indents) : 0
    return lines.map((l) => l.slice(min)).join('\n').trim()
}

const extractOne = (raw, name) => {
    const source = raw.split('\r\n').join('\n')
    const start = source.search(new RegExp(`export\\s+const\\s+${name}\\s*=`))
    if (start === -1) return `// "${name}" not found`

    const rest = source.slice(start + 1)
    const next = rest.search(/\nexport\s/)
    const block = next === -1 ? rest : rest.slice(0, next)

    const ret = block.search(/return\s*\(/)
    if (ret === -1) return dedent(block)

    const open = block.indexOf('(', ret)
    const close = block.lastIndexOf(')')
    return dedent(block.slice(open + 1, close))
}

export const extractSource = (source, names) =>
    (Array.isArray(names) ? names : [names]).map((n) => extractOne(source, n)).join('\n\n')

export default extractSource
