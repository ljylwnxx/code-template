import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const { resolve }  = require('path')
import vitePluginImp from 'vite-plugin-imp'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: (name) => `antd/lib/${name}/style/index.less`,
        },
      ],
    }),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      }
    ]
  },
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript ，不开启 antd 的按需引入 会报错
        javascriptEnabled: true,
      },
    },
    modules: {
      generateScopedName: 'vite_demo_[folder]_[local]_[hash:base64:5]'
    }
  }
})
