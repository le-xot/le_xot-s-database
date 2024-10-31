import { createGlobalState } from '@vueuse/core';
import { UserEntity } from '../types/api.ts';
import { onMounted, ref } from 'vue';
import { useApi } from './useApi.ts';

export const useUser = createGlobalState(() => {
  const api = useApi();
  const user = ref<UserEntity>();

  async function login(username: string, password: string) {
    const req = await api.auth.authControllerLogin({ username, password });
    if (!req.ok) {
      throw new Error(await req.text());
    }
    user.value = undefined;
    await fetchProfile();
  }

  async function fetchProfile() {
    if (user.value) return;

    try {
      const { data } = await api.users.userControllerGetInfo();
      user.value = data;
    } catch {
      console.log('ERROR');
    }
  }

  onMounted(async () => {
    await fetchProfile();
  });
  return { user, login, fetchProfile };
});
