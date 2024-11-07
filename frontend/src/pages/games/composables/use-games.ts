import { useMutation, useQuery } from '@pinia/colada'
import { useApi } from '@src/composables/use-api'
import { GameEntity, PatchGameDTO, StatusesEnum } from '@src/libs/api'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { computed } from 'vue'

export const GAMES_QUERY_KEY = 'games'

export const useGames = defineStore('games/use-games', () => {
  const api = useApi()

  const {
    isLoading,
    data: games,
    refetch: refetchGames,
  } = useQuery<GameEntity[]>({
    key: [GAMES_QUERY_KEY],
    placeholderData: (prev) => prev ?? [],
    query: async () => {
      const { data } = await api.games.gameControllerGetAllGames()
      return data
    },
  })

  const { mutateAsync: updateGame } = useMutation({
    key: [GAMES_QUERY_KEY, 'update'],
    mutation: ({ id, data }: { id: number, data: PatchGameDTO }) => {
      return api.games.gameControllerPatchGame(id, data)
    },
    onSuccess: () => refetchGames(),
  })

  const { mutateAsync: deleteGame } = useMutation({
    key: [GAMES_QUERY_KEY, 'delete'],
    mutation: (id: number) => {
      return api.games.gameControllerDeleteGame(id)
    },
    onSuccess: () => refetchGames(),
  })

  const { mutateAsync: createGame } = useMutation({
    key: [GAMES_QUERY_KEY, 'create'],
    mutation: async () => {
      return await api.games.gameControllerCreateGame({})
    },
    onSuccess: () => refetchGames(),
  })

  const gamesQueue = computed(() => {
    if (!games.value) return []

    return games.value.filter((games) => {
      return games.status === StatusesEnum.QUEUE
        || games.status === StatusesEnum.PROGRESS
    })
  })

  return {
    isLoading,
    games,
    gamesQueue,
    refetchGames,
    updateGame,
    deleteGame,
    createGame,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGames, import.meta.hot))
}
