import React from 'react'
import CodeBlock from '@codeBlock'

const SvelteKitInstallation = () => {
    const createSvelteKit = 'npm create svelte@latest my-project\ncd my-project'
    const installTailwind = 'npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p'
    const postCss = "import adapter from '@sveltejs/adapter-auto';\nimport { vitePreprocess } from '@sveltejs/kit/vite';\n/** @type {import('@sveltejs/kit').Config} *\nconst config = {\n  kit: {\n    adapter: adapter()\n  },\n  preprocess: vitePreprocess()\n};\nexport default config;"
    const templatePaths = "/** @type {import('tailwindcss').Config} */\nexport default {\n  content: ['./src/**/*.{html,js,svelte,ts}'],\n  theme: {\n    extend: {}\n  },\n  plugins: []\n};"
    const directives = '@tailwind base;\n@tailwind components;\n@tailwind utilities;'
    const importCss = '<script>\n  import "../app.css";\n</script>\n\n<slot />'
    const build = 'npm run dev'
    const start = '<h1 class="text-3xl font-bold underline">\n  Hello world!\n</h1>\n\n<style lang="postcss">\n  :global(html) {\n    background-color: theme(colors.gray.100);\n  }\n</style>\n'
    return (
        <div>
            <h3 className='text-4xl font-bold pb-4 text-neutral-800 dark:text-white'>With SvelteKit</h3>
            <ol className='flex flex-col gap-8 pb-8'>
                <li className='grid grid-cols-2 xl:flex xl:flex-col'>
                    <section className='flex gap-2'>
                        <div>
                            <div className='flex gap-2'>
                                <p className='flex items-center justify-center w-6 h-6 bg-neutral-200 dark:bg-neutral-800 rounded-md text-sm'>1</p>
                                <h3 className='font-medium pb-2'>Create your project</h3>
                            </div>
                            <p className='dark:text-neutral-300 pb-4'>Start by creating a new SvelteKit project if you don't have one set up already. The most common aproach is outlined in the <a href="https://kit.svelte.dev/docs/introduction#introduction-getting-started" target='_blank' className='text-corporative hover:text-corporativeHover'>Getting Started with SvelteKit</a> introduction.</p>
                        </div>
                    </section>
                    <CodeBlock name={"Terminal"} code={createSvelteKit} language={"bash"} />
                </li>

                <li className='grid grid-cols-2 xl:flex xl:flex-col'>
                    <section className='flex gap-2'>
                        <div>
                            <div className='flex gap-2'>
                                <p className='flex items-center justify-center w-6 h-6 bg-neutral-200 dark:bg-neutral-800 rounded-md text-sm'>2</p>
                                <h3 className='font-medium pb-2'>Install Tailwind CSS</h3>
                            </div>
                            <p className='dark:text-neutral-300 pb-4'>Install `tailwindcss` and its peer dependencies, then generate your `tailwind.config.js` and `postcss.config.js` files.</p>
                        </div>
                    </section>
                    <CodeBlock name={"Terminal"} code={installTailwind} language={"bash"} />
                </li>

                <li className='grid grid-cols-2 xl:flex xl:flex-col'>
                    <section className='flex gap-2'>
                        <div>
                            <div className='flex gap-2'>
                                <p className='flex items-center justify-center w-6 h-6 bg-neutral-200 dark:bg-neutral-800 rounded-md text-sm'>3</p>
                                <h3 className='font-medium pb-2'>Enable use of PostCSS in {"<sytle>"} blocks</h3>
                            </div>
                            <p className='dark:text-neutral-300 pb-4'>In your `svelte.config.js` file, import `vitePreprocess` to enable processing `{"<style>"}` blocks as PostCSS.</p>
                        </div>
                    </section>
                    <CodeBlock name={"svelte.config.js"} code={postCss} language={"javascript"} />

                </li>

                <li className='grid grid-cols-2 xl:flex xl:flex-col'>
                    <section className='flex gap-2'>
                        <div>
                            <div className='flex gap-2'>
                                <p className='flex items-center justify-center w-6 h-6 bg-neutral-200 dark:bg-neutral-800 rounded-md text-sm'>4</p>
                                <h3 className='font-medium pb-2'>Configure your template paths</h3>
                            </div>
                            <p className='dark:text-neutral-300 pb-4'>Add the paths to all of your template files in your `tailwind.config.js` file.</p>
                        </div>
                    </section>
                    <CodeBlock name={"tailwind.config.js"} code={templatePaths} language={"javascript"} />
                </li>

                <li className='grid grid-cols-2 xl:flex xl:flex-col'>
                    <section className='flex gap-2'>
                        <div>
                            <div className='flex gap-2'>
                                <p className='flex items-center justify-center w-6 h-6 bg-neutral-200 dark:bg-neutral-800 rounded-md text-sm'>5</p>
                                <h3 className='font-medium pb-2'>Add the Tailwind directives to your CSS</h3>
                            </div>
                            <p className='dark:text-neutral-300 pb-4'>Create an `./src/app.css` file and add tge `@tailwind` directives for each of Tailwind's layers.</p>
                        </div>
                    </section>
                    <CodeBlock name={"app.css"} code={directives} language={"css"} />
                </li>

                <li className='grid grid-cols-2 xl:flex xl:flex-col'>
                    <section className='flex gap-2'>
                        <div>
                            <div className='flex gap-2'>
                                <p className='flex items-center justify-center w-6 h-6 bg-neutral-200 dark:bg-neutral-800 rounded-md text-sm'>6</p>
                                <h3 className='font-medium pb-2'>Import the CSS file</h3>
                            </div>
                            <p className='dark:text-neutral-300 pb-4'>Create a `./src/routes/+layout.svelte` file and import the newly-created `app.css` file.</p>
                        </div>
                    </section>
                    <CodeBlock name={"+layout.svelte"} code={importCss} language={"javascript"} />
                </li>

                <li className='grid grid-cols-2 xl:flex xl:flex-col'>
                    <section className='flex gap-2'>
                        <div>
                            <div className='flex gap-2'>
                                <p className='flex items-center justify-center w-6 h-6 bg-neutral-200 dark:bg-neutral-800 rounded-md text-sm'>7</p>
                                <h3 className='font-medium pb-2'>Start your build process</h3>
                            </div>
                            <p className='dark:text-neutral-300 pb-4'>Run your build process with `npm run dev`</p>
                        </div>
                    </section>
                    <CodeBlock name={"Terminal"} code={build} language={"bash"} />
                </li>

                <li className='grid grid-cols-2 xl:flex xl:flex-col'>
                    <section className='flex gap-2'>
                        <div>
                            <div className='flex gap-2'>
                                <p className='flex items-center justify-center w-6 h-6 bg-neutral-200 dark:bg-neutral-800 rounded-md text-sm'>8</p>
                                <h3 className='font-medium pb-2'>Start using Tailwind in your project</h3>
                            </div>
                            <p className='dark:text-neutral-300 pb-4'>Start using Tailwind's utility classes to style your content, making sure to set `lang="postcss"` for any `{"<style>"}` blocks that need to be processed by Tailwind.</p>
                        </div>
                    </section>
                    <CodeBlock name={"+page.svelte"} code={start} language={"javascript"} />
                </li>
            </ol>
        </div>
    )
}

export default SvelteKitInstallation