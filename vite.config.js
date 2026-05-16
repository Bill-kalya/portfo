import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/' // assets should be served from site root (e.g. https://portfo-topaz.vercel.app)
})
