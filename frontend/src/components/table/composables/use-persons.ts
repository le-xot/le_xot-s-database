import { useMutation, useQuery } from '@pinia/colada'
import { useApi } from '@src/composables/use-api'
import { GameEntity } from '@src/libs/api'
import { useGames } from '@src/pages/games/composables/use-games'
import { SelectBaseOption } from 'naive-ui/es/select/src/interface'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { computed } from 'vue'

export const PERSONS_QUERY_KEY = 'persons'

export const usePersons = defineStore('table/use-persons', () => {
  const api = useApi()
  const { updateGame } = useGames()

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
    mutation: async (name: string) => {
      return await api.persons.personControllerCreatePerson({ name })
    },
    onSettled: () => refetchPersons(),
  })

  const { mutateAsync: patchPerson } = useMutation({
    key: [PERSONS_QUERY_KEY, 'patch'],
    mutation: async ({ id, name }: { id: number, name: string }) => {
      return await api.persons.personControllerPatchPerson(id, { name })
    },
  })

  const personOptions = computed<SelectBaseOption[]>(() => {
    if (!persons.value) return []
    return persons.value.map((item) => ({
      value: item.id,
      label: item.name,
    }))
  })

  async function updateOrCreatePerson(
    row: GameEntity,
    person: string | number | undefined,
  ) {
    if (!person) return

    let personId = person
    if (typeof personId === 'string') {
      const { data } = await createPerson(personId)
      personId = data.id
    }

    updateGame({ id: row.id, data: { personId } })
  }

  return {
    isLoading,
    persons,
    personOptions,
    createPerson,
    patchPerson,
    updateOrCreatePerson,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePersons, import.meta.hot))
}
