import { useMutation, useQuery } from '@pinia/colada'
import { useApi } from '@src/composables/use-api'
import { SelectBaseOption } from 'naive-ui/es/select/src/interface'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { computed } from 'vue'

export const PERSONS_QUERY_KEY = 'persons'

export const useTablePersons = defineStore('use-table-persons', () => {
  const api = useApi()
  const {
    isLoading,
    data: persons,
    refetch: refetchPersons,
  } = useQuery({
    key: [PERSONS_QUERY_KEY],
    placeholderData: (prev) => prev ?? [],
    query: async () => {
      const { data } = await api.persons.personControllerGetAllPersons()
      return data
    },
  })

  const { mutateAsync: createPerson } = useMutation({
    key: [PERSONS_QUERY_KEY, 'create'],
    mutation: async (opts: { name: string, color?: string }) => {
      return await api.persons.personControllerCreatePerson(opts)
    },
    onSettled: () => refetchPersons(),
  })

  const { mutateAsync: patchPerson } = useMutation({
    key: [PERSONS_QUERY_KEY, 'patch'],
    mutation: async (opts: { id: number, data: { name?: string, color?: string } }) => {
      return await api.persons.personControllerPatchPerson(opts.id, opts.data)
    },
  })

  const personOptions = computed<SelectBaseOption[]>(() => {
    if (!persons.value) return []
    return persons.value.map((item) => {
      return {
        value: item.id,
        label: item.name,
        style: { color: '#ffffff', backgroundColor: item.color },
      }
    })
  })

  async function updateSelectOrCreatePerson(
    person: string | number | undefined,
  ) {
    if (!person) return
    const personId = person

    // Это костыль для NaiveUI. Идёт несовпадение в NSelect типа string и number
    if (typeof personId === 'string') {
      const { data } = await createPerson({ name: personId })
      return data.id
    } else {
      return personId
    }
  }

  return {
    isLoading,
    persons,
    personOptions,
    createPerson,
    patchPerson,
    updateSelectOrCreatePerson,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTablePersons, import.meta.hot))
}
