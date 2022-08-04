import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { crx, defineManifest } from '@crxjs/vite-plugin'

const manifest = defineManifest({
  manifest_version: 3,
  name: 'Webp Converter',
  version: '1.0.0',
  icons: {
    '16': 'compress.png',
    '48': 'compress.png',
    '128': 'compress.png',
  },
  action: {
    default_popup: 'index.html',
  },
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), crx({ manifest })],
})
