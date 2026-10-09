import Steps from './Steps'

const steps = [
    {
        title: 'Create your project',
        text: 'Start by creating a new Next.js project with TypeScript, the App Router and a src directory. Tailwind CSS is installed in the next steps so it uses version 3. If you already have a Next.js project you can skip this step.',
        name: 'Terminal',
        language: 'bash',
        code: 'npx create-next-app@latest my-project --typescript --eslint --app --src-dir --no-tailwind --import-alias "@/*"\ncd my-project',
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
        text: 'Add the paths to all of your template files in your tailwind.config.js file and enable the class strategy for dark mode.',
        name: 'tailwind.config.js',
        language: 'javascript',
        code: '/** @type {import("tailwindcss").Config} */\nmodule.exports = {\n  darkMode: "class",\n  content: [\n    "./src/**/*.{js,ts,jsx,tsx,mdx}",\n  ],\n  theme: {\n    extend: {},\n  },\n  plugins: [],\n}',
    },
    {
        title: 'Add the Tailwind directives to your CSS',
        text: 'Replace the content of src/app/globals.css with the @tailwind directives for each of Tailwind\'s layers.',
        name: 'src/app/globals.css',
        language: 'css',
        code: '@tailwind base;\n@tailwind components;\n@tailwind utilities;',
    },
    {
        title: 'Copy a component',
        text: 'Open any component page, copy the file shown in its Component section and save it in your project, for example as src/components/ui/Button.tsx. Components that handle events or use hooks need "use client" at the top of the page that uses them, because Server Components cannot receive event handlers.',
        name: 'src/app/page.tsx',
        language: 'tsx',
        code: "'use client'\n\nimport { Button } from '@/components/ui/Button'\n\nexport default function Home() {\n  return (\n    <Button color=\"default\" onClick={() => alert('Hello Blossom UI!')}>\n      Hello Blossom UI\n    </Button>\n  )\n}",
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
