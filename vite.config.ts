import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { crx, defineManifest } from "@crxjs/vite-plugin";


const manifest = defineManifest({
  manifest_version: 3,
  name: "Open Bookmarks",
  version: "1.0.0",
  permissions: ["tabs"],
  action: {
    default_popup: "index.html",
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), crx({ manifest })]
})
