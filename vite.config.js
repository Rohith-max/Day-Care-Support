import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    // Force a local, empty PostCSS config to avoid inheriting parent configs (e.g., Tailwind on D:\)
    postcss: {
      plugins: [],
    },
  },
  server: {
    host: true,
    port: 5173,
    open: true,
    hmr: { overlay: true },
  },
  resolve: {
    alias: {
      '@': '/src',
      '@svg_comps': '/src/svg_comps',
    },
  },
})
