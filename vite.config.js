import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
 // base: "/react.ecom/",
  test: {
    // 👋 add the line below to add jsdom to vite
    environment: 'jsdom',
  },
  build: {
    outDir: 'docs',
  },
})
