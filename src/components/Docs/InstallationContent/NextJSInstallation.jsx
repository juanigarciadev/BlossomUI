import Steps from './Steps'
import { SITE } from '../../../mocks/seo'
import { INSTALL_COMMAND } from '../../InstallCommand/InstallCommand'

const steps = [
    {
        title: 'Create your project',
        text: 'Start by creating a new Next.js project with TypeScript, the App Router and a src directory. Tailwind CSS is installed in the next steps so it uses version 3. If you already have a Next.js project you can skip this step.',
        name: 'Terminal',
        language: 'bash',
        code: 'npx create-next-app@latest my-project --typescript --eslint --app --src-dir --no-tailwind --import-alias "@/*"\ncd my-project',
    },
    {
        title: 'Install Blossom UI',
        text: 'Add the library to your project.',
        name: 'Terminal',
        language: 'bash',
        code: INSTALL_COMMAND,
    },
    {
        title: 'Install Tailwind CSS',
        text: 'Install tailwindcss 3 and its peer dependencies, then generate your tailwind.config.js and postcss.config.js files.',
        name: 'Terminal',
        language: 'bash',
        code: 'npm install -D tailwindcss@3 postcss autoprefixer\nnpx tailwindcss init -p',
    },
    {
        title: 'Configure your template paths',
        text: 'In tailwind.config.js add your files and the files of Blossom UI, so Tailwind generates their classes. The components use the dark: variant, so enable the class strategy.',
        name: 'tailwind.config.js',
        language: 'javascript',
        code: '/** @type {import("tailwindcss").Config} */\nmodule.exports = {\n  darkMode: "class",\n  content: [\n    "./src/**/*.{js,ts,jsx,tsx,mdx}",\n' + `    "./node_modules/${SITE.package}/dist/**/*.js",\n` + '  ],\n  theme: {\n    extend: {},\n  },\n  plugins: [],\n}',
    },
    {
        title: 'Add the Tailwind directives to your CSS',
        text: 'Replace the content of src/app/globals.css with the @tailwind directives for each of Tailwind\'s layers.',
        name: 'src/app/globals.css',
        language: 'css',
        code: '@tailwind base;\n@tailwind components;\n@tailwind utilities;',
    },
    {
        title: 'Use a component',
        text: 'Import it from the package. A page that passes event handlers needs "use client", because Server Components cannot send functions to the client.',
        name: 'src/app/page.tsx',
        language: 'tsx',
        code: `'use client'\n\nimport { Button } from '${SITE.package}'\n\nexport default function Home() {\n  return (\n    <Button color="default" onClick={() => alert('Hello Blossom UI!')}>\n      Hello Blossom UI\n    </Button>\n  )\n}`,
    },
    {
        title: 'Dark mode (optional)',
        text: 'Every component has dark: variants. They are applied when the html element has the dark class. Add it by hand or toggle it with a library such as next-themes.',
        name: 'src/app/layout.tsx',
        language: 'tsx',
        code: '<html lang="en" className="dark">\n  <body>{children}</body>\n</html>',
    },
    {
        title: 'Start your build process',
        text: 'Run your build process with npm run dev.',
        name: 'Terminal',
        language: 'bash',
        code: 'npm run dev',
    },
]

const NextJSInstallation = () => <Steps title='With Next.js' steps={steps} />

export default NextJSInstallation
