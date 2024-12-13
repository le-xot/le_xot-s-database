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
  persons.updatePerson(id, data)
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
        size="small"
        placement="right"
        :modes="['hex']"
        :show-alpha="false"
        :value="currentPerson?.color"
        :swatches="['#603B2C', '#854C1D', '#89632A', '#2B593F', '#28456C', '#492F64', '#69314C', '#8f332a']"
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
        style="background-color: #18181C"
        :options="persons.personOptions"
        @update:value="updateValue"
        @keydown.enter="handleChange"
      />
    </div>
    <template v-else>
      <NTag
        v-if="currentPerson?.name"
        :bordered="false"
        size="medium"
        round
        :color="{ color: currentPerson?.color }"
        class="tag"
      >
        {{ currentPerson?.name }}
      </NTag>
    </template>
  </TableCol>
</template>

<style scoped>
.tag {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
}
</style>
