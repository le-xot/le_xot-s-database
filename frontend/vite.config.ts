import { fileURLToPath } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { generateApi } from 'swagger-typescript-api'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(async () => {
  await generateApi({
    name: 'api.ts',
    url: 'http://localhost:3000/docs-json',
    output: fileURLToPath(new URL(`./src/libs`, import.meta.url)),
    generateClient: true,
    httpClientType: 'fetch',
    singleHttpClient: true,
    extractEnums: true,
  })

  return {
    base: './',
    resolve: {
      alias: {
        '@src': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    plugins: [vue()],
    server: {
      host: true,
      proxy: {
        '/api': {
          target: 'http://localhost:3000',
          changeOrigin: true,
        },
      },
    },
  }
})
