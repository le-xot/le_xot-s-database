import { GameEntity, PatchGameDTO, StatusesEnum } from '@src/libs/api.ts'
import { createGlobalState } from '@vueuse/core'
import { computed, onMounted, ref } from 'vue'
import { useApi } from './use-api.ts'

export const useGames = createGlobalState(() => {
  const api = useApi()
  const games = ref<GameEntity[]>([])
  const isLoading = ref(true)

  async function fetchGames() {
    isLoading.value = true
    try {
      const { data } = await api.games.gameControllerGetAllGames()
      games.value = data
    } catch {
      console.log('ERROR')
    } finally {
      isLoading.value = false
    }
  }

  onMounted(async () => {
    if (games.value.length)
      return
    await fetchGames()
  })

  const gamesQueue = computed(() => {
    return games.value.filter(
      games =>
        games.status === StatusesEnum.QUEUE
        || games.status === StatusesEnum.PROGRESS,
    )
  })

  async function update(id: number, data: PatchGameDTO) {
    await api.games.gameControllerPatchGame(id, data)
    await fetchGames()
  }

  async function deleteGame(id: number) {
    await api.games.gameControllerDeleteGame(id)
    await fetchGames()
  }

  async function createGame() {
    await api.games.gameControllerCreateGame({})
    await fetchGames()
  }

  return { games, gamesQueue, update, createGame, deleteGame, isLoading }
})
