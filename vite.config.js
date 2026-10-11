import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      ignored: [
        '**/AppData/**',
        '**/NTUSER.*',
        '**/Cookies',
        '**/node_modules/**',
      ],
    },
  },
})