import { fileURLToPath } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { generateApi } from 'swagger-typescript-api'
import { defineConfig } from 'vite'

export default defineConfig(({ isPreview, mode }) => {
  if (mode !== 'production' && !isPreview) {
    generateSwagger()
  }

  return {
    base: './',
    resolve: {
      alias: {
        '@src': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
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

async function generateSwagger() {
  let tryCount = 0
  while (tryCount < 10) {
    try {
      await generateApi({
        name: 'api.ts',
        url: 'http://localhost:3000/docs-json',
        output: fileURLToPath(new URL(`./src/libs`, import.meta.url)),
        generateClient: true,
        httpClientType: 'fetch',
        singleHttpClient: true,
        extractEnums: true,
      })
      break
    } catch {
      tryCount++
      await new Promise((resolve) => setTimeout(resolve, 1000))
    }
  }
}
