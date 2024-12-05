<script setup lang="ts">
import { NColorPicker, NSelect, NTag } from 'naive-ui'
import { computed, toRef } from 'vue'
import { useTableCol } from '../composables/use-table-col'
import { useTablePersons } from '../composables/use-table-persons'
import TableCol from './table-col.vue'

type PersonValue = number | undefined

const props = defineProps<{ personId: PersonValue }>()
const emits = defineEmits<{ update: [PersonValue] }>()
const personId = toRef(props, 'personId')

const persons = useTablePersons()

const {
  isEdit,
  inputRef,
  inputValue,
  updateValue,
  handleChange,
  handleOpen,
} = useTableCol(personId, emits)

const currentPerson = computed(() => {
  return persons.persons?.find((p) => p.id === personId.value)
})

async function updatePerson(id: number, data: { name?: string, color?: string }) {
  await persons.patchPerson({ id, data })
}

async function handleColorChange(newColor: string) {
  if (currentPerson.value) {
    await updatePerson(currentPerson.value.id, { color: newColor })
  }
}
</script>

<template>
  <TableCol @click="handleOpen">
    <div v-if="isEdit">
      <NColorPicker
        :show-preview="true"
        :actions="['confirm']"
        size="small"
        placement="right"
        :modes="['hex']"
        :show-alpha="false"
        :value="currentPerson?.color"
        :swatches="['#731212', '#0e5c32', '#0e3360', '#5a400e']"
        @update:value="handleColorChange"
      />
      <NSelect
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
    </div>
    <template v-else>
      <NTag
        :bordered="false"
        size="medium"
        round
        :color="{ color: currentPerson?.color }"
      >
        {{ currentPerson?.name }}
      </NTag>
    </template>
  </TableCol>
</template>
