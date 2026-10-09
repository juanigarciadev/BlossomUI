import Steps from './Steps'

const steps = [
    {
        title: 'Create your project',
        text: 'Start with a Vite project that uses the React and TypeScript template. If you already have a React project you can skip this step.',
        name: 'Terminal',
        language: 'bash',
        code: 'npm create vite@latest my-project -- --template react-ts\ncd my-project\nnpm install',
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
        text: 'Add the paths to all of your template files in your tailwind.config.js file. The components also use the dark: variant, so enable the class strategy.',
        name: 'tailwind.config.js',
        language: 'javascript',
        code: "/** @type {import('tailwindcss').Config} */\nexport default {\n  darkMode: 'class',\n  content: [\n    './index.html',\n    './src/**/*.{js,ts,jsx,tsx}',\n  ],\n  theme: {\n    extend: {},\n  },\n  plugins: [],\n}",
    },
    {
        title: 'Add the Tailwind directives to your CSS',
        text: 'Add the @tailwind directives for each of Tailwind\'s layers to your src/index.css file.',
        name: 'src/index.css',
        language: 'css',
        code: '@tailwind base;\n@tailwind components;\n@tailwind utilities;',
    },
    {
        title: 'Copy a component',
        text: 'Open any component page, copy the file shown in its Component section and save it in your project, for example as src/components/ui/Button.tsx. Components only need React 18 and Tailwind CSS, there is nothing else to install.',
        name: 'src/App.tsx',
        language: 'tsx',
        code: "import { Button } from './components/ui/Button'\n\nexport default function App() {\n  return (\n    <Button color=\"default\" onClick={() => alert('Hello Blossom UI!')}>\n      Hello Blossom UI\n    </Button>\n  )\n}",
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
