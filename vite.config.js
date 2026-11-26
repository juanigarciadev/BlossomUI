import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import seoPlugin from './vite.seo.js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), seoPlugin()],
  build: {
    rollupOptions: {
      // The components carry 'use client' for Next.js. It means nothing in this app.
      onwarn(warning, warn) {
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE' || (warning.code === 'SOURCEMAP_ERROR' && warning.loc?.line === 1)) return
        warn(warning)
      },
    },
  },
  resolve: {
    alias: {
      '@icons': path.resolve(__dirname, 'src/assets/Icons/Icons'),
      '@codeBlock': path.resolve(__dirname, 'src/components/CodeBlock/CodeBlock'),
      '@editInGithub': path.resolve(__dirname, 'src/components/EditInGithub/EditInGithub')
    },
  }
})
