# Blossom UI

React components written in TypeScript and styled with Tailwind CSS, with dark mode.

[Documentation and live examples](https://blossomui.vercel.app/components)

You can use them in three ways. All of them need React 18 or newer and Tailwind CSS 3.3 or newer.

## 1. Install the library

```bash
npm install @blossomui/react
```

Tailwind has to see the classes of the package. With **Tailwind 3**, in `tailwind.config.js`:

```js
export default {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@blossomui/react/dist/**/*.js',
  ],
}
```

With **Tailwind 4**, in your CSS (the path is relative to the CSS file):

```css
@import 'tailwindcss';
@source '../node_modules/@blossomui/react/dist';
@custom-variant dark (&:is(.dark *));
```

Then import what you need:

```tsx
import { Button, Modal } from '@blossomui/react'
```

Your bundler removes what you do not use. Every component also has its own entry:

```tsx
import { Button } from '@blossomui/react/button'
import { Input, Select } from '@blossomui/react/forms'
```

The package is ES modules only. Components that use hooks or events already have `'use client'` for the Next.js App Router.

## 2. Add single components to your project

This copies the source of a component, and the files it imports, into your project. The package is not added to your dependencies and the code is yours to change.

```bash
npx @blossomui/react add button modal
npx @blossomui/react list
```

The files go to `src/components/ui` (`--dir` changes it). Existing files are kept unless you pass `--overwrite`.

## 3. Copy and paste, nothing to install

Open the page of a component in the [documentation](https://blossomui.vercel.app/components) and copy its file.

## Your brand color

```css
:root { --blossom-accent: #0f766e; --blossom-accent-contrast: #ffffff; }
.dark { --blossom-accent: #5eead4; --blossom-accent-contrast: #042f2e; }
```

## License

[Mozilla Public License 2.0](LICENSE). You can use the components in closed source projects. Changes to the library's own files stay under the MPL.
