import { useSearchBar } from '@src/composables/use-search-bar'
import { acceptHMRUpdate, defineStore } from 'pinia'

export const useVideosFilters = defineStore('', () => {
  return useSearchBar()
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useVideosFilters, import.meta.hot))
}
