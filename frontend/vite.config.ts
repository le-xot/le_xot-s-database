import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { generateApi } from 'swagger-typescript-api';
import { fileURLToPath } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig(async () => {
  await generateApi({
    name: 'api.ts',
    url: 'http://localhost:3000/api-json',
    output: fileURLToPath(new URL(`./src/types`, import.meta.url)),
    generateClient: true,
    httpClientType: 'fetch',
    singleHttpClient: true,
    extractEnums: true,
  });

  return {
    plugins: [vue()],
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:3000',
          changeOrigin: true,
          rewrite: (path: string) => path.replace(/^\/api/, ''),
        },
      },
    },
  };
});
