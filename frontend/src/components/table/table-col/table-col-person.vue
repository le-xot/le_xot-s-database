<script setup lang="ts">
import { NSelect } from 'naive-ui'
import { computed, toRef } from 'vue'
import { usePersons } from '../composables/use-persons'
import { useTableCol } from '../composables/use-table-col'
import TableCol from './table-col.vue'

type PersonValue = number | undefined

const props = defineProps<{ personId: PersonValue }>()
const emits = defineEmits<{ update: [PersonValue] }>()
const personId = toRef(props, 'personId')

const persons = usePersons()

const {
  isEdit,
  inputRef,
  inputValue,
  updateValue,
  handleChange,
  handleOpen,
} = useTableCol(personId, emits)

const personName = computed(() => {
  if (!persons.persons) return
  const person = persons.persons.find((p) => p.id === personId.value)
  if (!person) return
  return person.name
})
</script>

<template>
  <TableCol @click="handleOpen">
    <NSelect
      v-if="isEdit"
      ref="inputRef"
      v-model:value="inputValue"
      tag
      show
      show-on-focus
      filterable
      size="small"
      :options="persons.personOptions"
      @update:value="updateValue"
      @keydown.enter="handleChange"
    />
    <template v-else>
      {{ personName }}
    </template>
  </TableCol>
</template>
