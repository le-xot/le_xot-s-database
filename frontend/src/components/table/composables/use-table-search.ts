import { refDebounced } from '@vueuse/core'
import { ref } from 'vue'
import type { GameEntity, VideoEntity } from '@src/libs/api'

export function useTableSearch() {
  const searchValue = ref('')
  const debouncedSearchValue = refDebounced(searchValue, 200)

  function filterData<T extends GameEntity | VideoEntity>(data: T[]): T[] {
    if (!debouncedSearchValue.value) return data

    const searchTerm = debouncedSearchValue.value.toLowerCase()

    return data.filter((item) => {
      const titleMatch = typeof item.title === 'string' && item.title.toLowerCase().includes(searchTerm)
      const personMatch = item.person && typeof item.person.name === 'string' && item.person.name.toLowerCase().includes(searchTerm)

      return titleMatch || personMatch
    })
  }

  return {
    searchValue,
    filterData,
  }
}
