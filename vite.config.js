import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || '/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 8000,
  },
  worker: {
    format: 'es',
  },
  build: {
  rollupOptions: {
    external: [
      /satellite\.js\/wasm-build\/pthreads-release/,
    ],
    output: {
      manualChunks(id) {
        if (id.includes('node_modules')) {
          if (id.includes('three') || id.includes('@react-three')) return 'three-vendor';
          if (id.includes('gsap'))                                  return 'gsap-vendor';
          if (id.includes('react-globe'))                           return 'globe-vendor';
          if (id.includes('react-dom') || id.includes('/react/'))   return 'react-vendor';
        }
      },
    },
  },
},
})
