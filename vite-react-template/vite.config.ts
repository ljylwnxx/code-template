import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const { resolve }  = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      }
    ]
  },
  css: {
    modules: {
      generateScopedName: 'vite_demo_[folder]_[local]_[hash:base64:5]'
    }
  }
})
