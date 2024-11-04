import { Api, HttpClient } from '@src/libs/api.ts'
import { createGlobalState } from '@vueuse/core'

export const useApi = createGlobalState(() => {
  const httpClient = new HttpClient({
    baseUrl: '/api',
  })
  return new Api(httpClient)
})
