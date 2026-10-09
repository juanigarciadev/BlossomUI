// Reads the public API of a component file (.tsx). It is plain JavaScript so it can
// run in the browser (docs page) and in Node (build plugin that writes llms.txt).

/** Names exported as values (components, hooks, helpers) from a component file. */
export const getExports = (source) =>
    [...source.matchAll(/^export (?:const|function) (\w+)/gm)].map((match) => match[1])

/** Reads every `export interface XProps` and its documented properties from the file. */
export const getInterfaces = (rawSource) => {
    const source = rawSource.split('\r\n').join('\n')
    const interfaces = []
    const lines = source.split('\n')

    for (let i = 0; i < lines.length; i++) {
        const header = lines[i].match(/^export interface (\w+)(?:<[^>]*>)?(?: extends (.+?))? \{$/)
        if (!header) continue

        const props = []
        let doc = []
        let inDoc = false

        for (i += 1; i < lines.length && lines[i] !== '}'; i++) {
            const line = lines[i].trim()

            if (line.startsWith('/**')) {
                inDoc = !line.endsWith('*/')
                doc = [line.replace(/^\/\*\*\s?/, '').replace(/\s?\*\/$/, '')]
            } else if (inDoc) {
                inDoc = !line.endsWith('*/')
                doc.push(line.replace(/^\*\s?/, '').replace(/\s?\*\/$/, ''))
            } else {
                const prop = line.match(/^(\w+)(\?)?:\s*(.+?)[;,]?$/)
                if (prop) props.push({ name: prop[1], optional: Boolean(prop[2]), type: prop[3], description: doc.join(' ').replace(/\s+/g, ' ').trim() })
                doc = []
            }
        }

        interfaces.push({ name: header[1], extendsFrom: header[2], props })
    }

    return interfaces.filter((entry) => entry.props.length || entry.extendsFrom)
}
