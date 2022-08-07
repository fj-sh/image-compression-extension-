import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { crx, defineManifest } from '@crxjs/vite-plugin'

const manifest = defineManifest({
  manifest_version: 3,
  name: 'Drag and Drop Webp Converter',
  description:
    'This is a Chrome extension that converts JPG and PNG image files to WebP format by simply dragging and dropping them.',
  version: '1.0.3',
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
