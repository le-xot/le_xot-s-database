import { UserEntity } from '@src/libs/api.ts'
import { createGlobalState } from '@vueuse/core'
import { onMounted, ref } from 'vue'
import { useApi } from './use-api.ts'

export const useUser = createGlobalState(() => {
  const api = useApi()
  const user = ref<UserEntity>()

  async function login(username: string, password: string) {
    const req = await api.auth.authControllerLogin({ username, password })
    if (!req.ok) {
      throw new Error(await req.text())
    }
    user.value = undefined
    await fetchProfile()
  }

  async function logout() {
    const req = await api.auth.authControllerLogout()
    if (!req.ok) {
      throw new Error(await req.text())
    }
    user.value = undefined
  }

  async function fetchProfile() {
    if (user.value)
      return

    try {
      const { data } = await api.users.userControllerGetInfo()
      user.value = data
    } catch {
      user.value = undefined
    }
  }

  onMounted(async () => {
    await fetchProfile()
  })
  return { user, login, logout, fetchProfile }
})
