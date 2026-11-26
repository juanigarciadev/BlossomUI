// Builds the npm package from src/components/UI, the same files the documentation uses.
//   dist/          one ES module and one type declaration per source file, plus an index
//   source/        the .ts and .tsx files, for the `add` command
//   registry.json  what every component needs, for the `add` command
//   package.json   the "exports" field is rewritten with one entry per component
import { execFileSync } from 'node:child_process'
import fs from 'node:fs'
import { createRequire } from 'node:module'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const repo = path.resolve(root, '..')
const input = path.join(repo, 'src/components/UI')
const dist = path.join(root, 'dist')
const source = path.join(root, 'source')

const walk = (dir) =>
    fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
        const full = path.join(dir, entry.name)
        return entry.isDirectory() ? walk(full) : [full]
    })
const relative = (from, file) => path.relative(from, file).split(path.sep).join('/')

for (const dir of [dist, source]) fs.rmSync(dir, { recursive: true, force: true })

const files = walk(input).filter((file) => /\.tsx?$/.test(file)).sort()

const tsc = path.join(path.dirname(createRequire(path.join(repo, 'package.json')).resolve('typescript/package.json')), 'bin/tsc')
execFileSync(process.execPath, [
    tsc, ...files,
    '--ignoreConfig', '--rootDir', input, '--outDir', dist,
    '--target', 'ES2020', '--module', 'ESNext', '--moduleResolution', 'bundler',
    '--jsx', 'react-jsx', '--lib', 'ES2020,DOM,DOM.Iterable',
    '--declaration', '--strict', '--skipLibCheck',
], { stdio: 'inherit', cwd: repo })

// Node and strict bundlers need the extension in relative imports.
for (const file of walk(dist)) {
    const code = fs.readFileSync(file, 'utf8')
    fs.writeFileSync(file, code.replace(/(\bfrom\s+|\bimport\(\s*)(['"])(\.\.?\/[^'"]+)\2/g, '$1$2$3.js$2'))
}

// "Buttons/Button.tsx" is imported as "button" and "Progress/ProgressBar.tsx" as "progress-bar".
const slug = (file) => path.basename(file).replace(/\.tsx?$/, '').replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()

const modules = files.map((file) => {
    const code = fs.readFileSync(file, 'utf8')
    const name = relative(input, file)
    return {
        name: slug(file),
        path: name.replace(/\.tsx?$/, ''),
        file: name,
        imports: [...code.matchAll(/from '(\.\.?\/[^']+)'/g)].map((match) => path.posix.join(path.posix.dirname(name), match[1])),
        values: [...code.matchAll(/^export (?:const|function|class) (\w+)/gm)].map((match) => match[1]),
        types: [...code.matchAll(/^export (?:interface|type) (\w+)/gm)].map((match) => match[1]),
    }
})

// The overlay hook is internal: it is part of the build but not of the public API.
const publicModules = modules.filter((module) => module.name !== 'overlay')

// A name exported by two files would be dropped by `export *`. Types can be picked from one of them.
const owners = new Map()
const repeated = []
for (const module of publicModules) {
    for (const name of [...module.values, ...module.types]) {
        if (!owners.has(name)) owners.set(name, module)
        else if (module.values.includes(name)) throw new Error(`"${name}" is exported by ${owners.get(name).file} and ${module.file}`)
        else repeated.push(`export type { ${name} } from './${owners.get(name).path}.js'`)
    }
}
const index = publicModules.map((module) => `export * from './${module.path}.js'`)
fs.writeFileSync(path.join(dist, 'index.js'), index.join('\n') + '\n')
fs.writeFileSync(path.join(dist, 'index.d.ts'), [...index, ...repeated].join('\n') + '\n')

const packageFile = path.join(root, 'package.json')
const manifest = JSON.parse(fs.readFileSync(packageFile, 'utf8'))
const entry = (target) => ({ types: `./dist/${target}.d.ts`, default: `./dist/${target}.js` })
manifest.exports = {
    '.': entry('index'),
    ...Object.fromEntries(publicModules.map((module) => [`./${module.name}`, entry(module.path)])),
    './package.json': './package.json',
}
fs.writeFileSync(packageFile, JSON.stringify(manifest, null, 2) + '\n')

const registry = Object.fromEntries(
    modules.map((module) => [module.name, {
        file: module.file,
        requires: module.imports.map((target) => {
            const found = modules.find((other) => other.path === target)
            if (!found) throw new Error(`${module.file} imports "${target}", which is not part of the library`)
            return found.name
        }),
        internal: module.name === 'accent' || module.name === 'overlay',
    }]),
)
fs.writeFileSync(path.join(root, 'registry.json'), JSON.stringify(registry, null, 2) + '\n')

for (const file of files) {
    const target = path.join(source, relative(input, file))
    fs.mkdirSync(path.dirname(target), { recursive: true })
    fs.copyFileSync(file, target)
}
fs.copyFileSync(path.join(repo, 'LICENSE'), path.join(root, 'LICENSE'))

console.log(`Built ${publicModules.length} modules into ${relative(repo, dist)}`)
