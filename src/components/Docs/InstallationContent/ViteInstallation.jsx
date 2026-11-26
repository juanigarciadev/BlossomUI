import Steps from './Steps'
import { SITE } from '../../../mocks/seo'
import { INSTALL_COMMAND } from '../../InstallCommand/InstallCommand'

const steps = [
    {
        title: 'Create your project',
        text: 'Start with a Vite project that uses the React and TypeScript template. If you already have a React project you can skip this step.',
        name: 'Terminal',
        language: 'bash',
        code: 'npm create vite@latest my-project -- --template react-ts\ncd my-project\nnpm install',
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
        text: 'Install tailwindcss and its peer dependencies, then generate your tailwind.config.js and postcss.config.js files.',
        name: 'Terminal',
        language: 'bash',
        code: 'npm install -D tailwindcss@3 postcss autoprefixer\nnpx tailwindcss init -p',
    },
    {
        title: 'Configure your template paths',
        text: 'In tailwind.config.js add your files and the files of Blossom UI, so Tailwind generates their classes. The components use the dark: variant, so enable the class strategy.',
        name: 'tailwind.config.js',
        language: 'javascript',
        code: "/** @type {import('tailwindcss').Config} */\nexport default {\n  darkMode: 'class',\n  content: [\n    './index.html',\n    './src/**/*.{js,ts,jsx,tsx}',\n" + `    './node_modules/${SITE.package}/dist/**/*.js',\n` + "  ],\n  theme: {\n    extend: {},\n  },\n  plugins: [],\n}",
    },
    {
        title: 'Add the Tailwind directives to your CSS',
        text: 'Add the @tailwind directives for each of Tailwind\'s layers to your src/index.css file.',
        name: 'src/index.css',
        language: 'css',
        code: '@tailwind base;\n@tailwind components;\n@tailwind utilities;',
    },
    {
        title: 'Use a component',
        text: 'Import it from the package and use it.',
        name: 'src/App.tsx',
        language: 'tsx',
        code: `import { Button } from '${SITE.package}'\n\nexport default function App() {\n  return (\n    <Button color="default" onClick={() => alert('Hello Blossom UI!')}>\n      Hello Blossom UI\n    </Button>\n  )\n}`,
    },
    {
        title: 'Dark mode (optional)',
        text: 'Every component has dark: variants. They are applied when the html element has the dark class. Add it by hand or toggle it from your code.',
        name: 'index.html',
        language: 'javascript',
        code: '<html lang="en" class="dark">',
    },
    {
        title: 'Start your build process',
        text: 'Run your build process with npm run dev.',
        name: 'Terminal',
        language: 'bash',
        code: 'npm run dev',
    },
]

const ViteInstallation = () => <Steps title='With Vite' steps={steps} />

export default ViteInstallation
