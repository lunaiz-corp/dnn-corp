import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    cors: {
      origin: '*', // 허용할 출처
      methods: ['GET', 'POST'], // 허용할 HTTP 메서드
      allowedHeaders: ['Content-Type'], // 허용할 헤더
      credentials: true, // 자격 증명 허용
    },
  }
})