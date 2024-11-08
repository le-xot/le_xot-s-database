<script setup lang="ts">
import { NInput } from 'naive-ui'
import { toRef } from 'vue'
import { useTableCol } from '../composables/use-table-col'
import TableCol from './table-col.vue'

type TitleType = string | undefined

const props = defineProps<{ title: TitleType }>()
const emits = defineEmits<{ update: [TitleType] }>()
const title = toRef(props, 'title')

const {
  isEdit,
  inputRef,
  inputValue,
  updateValue,
  handleChange,
  handleOpen,
} = useTableCol<TitleType>(title, emits)
</script>

<template>
  <TableCol @click="handleOpen">
    <NInput
      v-if="isEdit"
      ref="inputRef"
      v-model:value="inputValue"
      class="input"
      size="medium"
      @update-value="updateValue"
      @blur="handleChange"
      @keydown.enter="handleChange"
    />
    <template v-else>
      {{ inputValue }}
    </template>
  </TableCol>
</template>
