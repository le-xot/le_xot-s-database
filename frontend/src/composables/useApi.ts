import { createGlobalState } from '@vueuse/core';
import { Api, HttpClient } from '../types/api.ts';

export const useApi = createGlobalState(() => {
  const httpClient = new HttpClient({
    baseUrl: '/api',
  });
  return new Api(httpClient);
});
