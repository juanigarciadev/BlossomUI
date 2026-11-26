#!/usr/bin/env node
/* eslint-env node */
// Copies the source of single components into a project: `npx @blossomui/react add button`.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const read = (file) => JSON.parse(fs.readFileSync(path.join(root, file), 'utf8'))
const registry = read('registry.json')
const { name: packageName } = read('package.json')
const components = Object.keys(registry).filter((name) => !registry[name].internal)

const help = `Usage:
  npx ${packageName} list
  npx ${packageName} add <component...> [--dir <folder>] [--overwrite]
  npx ${packageName} add --all

Options:
  --dir <folder>  Where to copy the files. Default: src/components/ui (components/ui without src/)
  --overwrite     Replace files that already exist
  --all           Add every component`

const fail = (message) => {
    console.error(message)
    process.exit(1)
}

const [command, ...args] = process.argv.slice(2)

if (!command || command === 'help' || command === '--help' || command === '-h') {
    console.log(help)
    process.exit(0)
}
if (command === 'list') {
    console.log(components.join('\n'))
    process.exit(0)
}
if (command !== 'add') fail(`Unknown command "${command}".\n\n${help}`)

let dir = fs.existsSync('src') ? 'src/components/ui' : 'components/ui'
let overwrite = false
const wanted = []

for (let i = 0; i < args.length; i++) {
    const arg = args[i]
    if (arg === '--overwrite') overwrite = true
    else if (arg === '--all') wanted.push(...components)
    else if (arg === '--dir') {
        dir = args[++i]
        if (!dir || dir.startsWith('-')) fail('--dir needs a folder.')
    } else if (arg.startsWith('-')) fail(`Unknown option "${arg}".\n\n${help}`)
    else wanted.push(arg.toLowerCase())
}

if (!wanted.length) fail(`Name the components to add.\n\n${help}`)

const unknown = wanted.filter((name) => !components.includes(name))
if (unknown.length) fail(`Unknown component: ${unknown.join(', ')}. Run "npx ${packageName} list" to see them all.`)

// The components asked for and every file they import.
const selected = new Set()
const select = (name) => {
    if (selected.has(name)) return
    selected.add(name)
    registry[name].requires.forEach(select)
}
wanted.forEach(select)

fs.mkdirSync(dir, { recursive: true })
let skipped = 0

for (const name of selected) {
    const { file } = registry[name]
    const target = path.join(dir, path.basename(file))
    if (!overwrite && fs.existsSync(target)) {
        console.log(`skipped  ${target} (already exists)`)
        skipped++
        continue
    }
    // All the files go to one folder, so the imports between them are siblings.
    const code = fs.readFileSync(path.join(root, 'source', file), 'utf8').replace(/from '\.\.?\/(?:[A-Za-z]+\/)?([A-Za-z]+)'/g, "from './$1'")
    fs.writeFileSync(target, code)
    console.log(`added    ${target}`)
}

if (skipped) console.log('\nUse --overwrite to replace the existing files.')
console.log('\nThe components need React and Tailwind CSS with darkMode: "class". Setup: https://blossomui.vercel.app/docs/getting-started/installation')
