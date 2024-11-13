import { SelectBaseOption } from 'naive-ui/es/select/src/interface'
import { ref } from 'vue'
import type { GameEntity, VideoEntity } from '@src/libs/api'

export const SEARCH_TYPES = {
  title: 'названию',
  person: 'заказчику',
} as const

export type SearchType = keyof typeof SEARCH_TYPES

export function useTableSearch() {
  const searchValue = ref('')
  const searchType = ref<SearchType>('title')

  const searchTypeOptions: SelectBaseOption[] = Object.entries(SEARCH_TYPES).map(([key, value]) => {
    const label = value.charAt(0).toUpperCase() + value.slice(1)
    return {
      label,
      value: key,
    }
  })

  function filterData<T extends GameEntity | VideoEntity>(data: T[]): T[] {
    if (!searchValue.value) return data

    const searchTerm = searchValue.value.toLowerCase()

    return data.filter((item) => {
      const field = item[searchType.value]
      if (!field) return false
      if (typeof field !== 'string') {
        return field.name.toLowerCase().includes(searchTerm)
      }
      return field.toLowerCase().includes(searchTerm)
    })
  }

  return {
    searchValue,
    searchType,
    searchTypeOptions,
    filterData,
  }
}
