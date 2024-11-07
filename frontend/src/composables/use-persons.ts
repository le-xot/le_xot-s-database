import { useApi } from '@src/composables/use-api.ts'
import { PersonEntity } from '@src/libs/api.ts'
import { createGlobalState } from '@vueuse/core'
import { onMounted, ref } from 'vue'

export const usePersons = createGlobalState(() => {
  const api = useApi()
  const persons = ref<PersonEntity[]>([])

  async function fetchPersons() {
    try {
      const { data } = await api.persons.personControllerGetAllPersons()
      persons.value = data
    } catch {
      console.log('ERROR')
    }
  }

  async function create(personName: string) {
    const person = await api.persons.personControllerCreatePerson({ name: personName })
    await fetchPersons()
    return person
  }

  onMounted(async () => {
    if (persons.value.length)
      return
    await fetchPersons()
  })

  async function update(id: number, name: string) {
    await api.persons.personControllerPatchPerson(id, { name })
    await fetchPersons()
  }

  return {
    create,
    persons,
    update,
  }
})
