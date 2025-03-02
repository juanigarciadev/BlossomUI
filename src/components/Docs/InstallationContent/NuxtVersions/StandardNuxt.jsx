import React from 'react'
import CodeBlock from '@codeBlock'

const StandardNuxt = () => {
    const createNuxt = 'npx nuxi init my-project\ncd my-project'
    const installTailwind = 'npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init'
    const postCss = "// https://nuxt.com/docs/api/configuration/nuxt-config\nexport default defineNuxtConfig({\n  devtools: { enabled: true },\n  postcss: {\n    plugins: {\n      tailwindcss: {},\n      autoprefixer: {},\n    },\n  },\n})"
    const templatePaths = "/** @type {import('tailwindcss').Config} */\nmodule.exports = {\n  content: [\n    './components/**/*.{js,vue,ts}',\n    './layouts/**/*.vue',\n    './pages/**/*.vue',\n    './plugins/**/*.{js,ts}',\n    './app.vue',\n  ],\n  theme: {\n    extend: {},\n  },\n  plugins: [],\n}"
    const directives = '@tailwind base;\n@tailwind components;\n@tailwind utilities;'
    const cssGlobally = "// https://nuxt.com/docs/api/configuration/nuxt-config\nexport default defineNuxtConfig({\n  devtools: { enabled: true },\n  css: ['~/assets/css/main.css'],  postcss: {\n    plugins: {\n      tailwindcss: {},\n      autoprefixer: {},\n    },\n  },\n})"
    const build = 'npm run dev'
    const start = '<template>\n  <h1 class="text-3xl font-bold underline">\n    Hello world!\n  </h1>\n</template>'
    return (
        <div>
            <h3 className='text-4xl font-bold pb-4 text-neutral-800 dark:text-white'>With Nuxt</h3>
            <ol className='flex flex-col gap-8 pb-8'>
                <li className='grid grid-cols-2 xl:flex xl:flex-col'>
                    <section className='flex gap-2'>
                        <div>
                            <div className='flex gap-2'>
                                <p className='flex items-center justify-center w-6 h-6 bg-neutral-200 dark:bg-neutral-800 rounded-md text-sm'>1</p>
                                <h3 className='font-medium pb-2'>Create your project</h3>
                            </div>
                            <p className='dark:text-neutral-300 pb-4'>Start by creating a new Angular project if you don't have one set up already. The most common aproach is to use <a href="https://nuxt.com/docs/getting-started/installation" target='_blank' className='text-corporative hover:text-corporativeHover'>Nuxt Command Line Interface</a>.</p>
                        </div>
                    </section>
                    <CodeBlock name={"Terminal"} code={createNuxt} language={"bash"} />
                </li>

                <li className='grid grid-cols-2 xl:flex xl:flex-col'>
                    <section className='flex gap-2'>
                        <div>
                            <div className='flex gap-2'>
                                <p className='flex items-center justify-center w-6 h-6 bg-neutral-200 dark:bg-neutral-800 rounded-md text-sm'>2</p>
                                <h3 className='font-medium pb-2'>Install Tailwind CSS</h3>
                            </div>
                            <p className='dark:text-neutral-300 pb-4'>Install `tailwindcss` and its peer dependencies via npm, and then run the init command to generate a `tailwind.config.js` file.</p>
                        </div>
                    </section>
                    <CodeBlock name={"Terminal"} code={installTailwind} language={"bash"} />
                </li>

                <li className='grid grid-cols-2 xl:flex xl:flex-col'>
                    <section className='flex gap-2'>
                        <div>
                            <div className='flex gap-2'>
                                <p className='flex items-center justify-center w-6 h-6 bg-neutral-200 dark:bg-neutral-800 rounded-md text-sm'>3</p>
                                <h3 className='font-medium pb-2'>Add Tailwind to your PostCSS configuration</h3>
                            </div>
                            <p className='dark:text-neutral-300 pb-4'>Add `tailwind.css` and `autoprefixer` to the `postcss.plugins` object in your `nuxt.config.js` file.</p>
                        </div>
                    </section>
                    <CodeBlock name={"nuxt.config.js"} code={postCss} language={"javascript"} />

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
                            <p className='dark:text-neutral-300 pb-4'>Create an `./assets/css/main.css` file and add the `@tailwind` directives for each of Tailwind's layers.</p>
                        </div>
                    </section>
                    <CodeBlock name={"main.css"} code={directives} language={"css"} />
                </li>

                <li className='grid grid-cols-2 xl:flex xl:flex-col'>
                    <section className='flex gap-2'>
                        <div>
                            <div className='flex gap-2'>
                                <p className='flex items-center justify-center w-6 h-6 bg-neutral-200 dark:bg-neutral-800 rounded-md text-sm'>6</p>
                                <h3 className='font-medium pb-2'>Add the CSS file globally</h3>
                            </div>
                            <p className='dark:text-neutral-300 pb-4'>Add you newly-created `./assets/css/main.css` to the `css` array in your `nuxt.config.js` file.</p>
                        </div>
                    </section>
                    <CodeBlock name={"nuxt.config.js"} code={cssGlobally} language={"javascript"} />
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
                            <p className='dark:text-neutral-300 pb-4'>Start using Tailwind’s utility classes to style your content.</p>
                        </div>
                    </section>
                    <CodeBlock name={"app.vue"} code={start} language={"javascript"} />
                </li>
            </ol>
        </div>
    )
}

export default StandardNuxt