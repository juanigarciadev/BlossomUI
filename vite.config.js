import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import seoPlugin from './vite.seo.js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), seoPlugin()],
  resolve: {
    alias: {
      '@icons': path.resolve(__dirname, 'src/assets/Icons/Icons'),
      '@codeBlock': path.resolve(__dirname, 'src/components/CodeBlock/CodeBlock'),
      '@editInGithub': path.resolve(__dirname, 'src/components/EditInGithub/EditInGithub')
    },
  }
})
