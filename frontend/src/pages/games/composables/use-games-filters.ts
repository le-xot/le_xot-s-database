import { useSearchBar } from '@src/composables/use-search-bar'
import { acceptHMRUpdate, defineStore } from 'pinia'

export const useGamesFilters = defineStore('use-games-filters', () => {
  return useSearchBar()
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGamesFilters, import.meta.hot))
}
