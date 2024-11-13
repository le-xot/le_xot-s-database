<script setup lang="ts" generic="T extends StatusesEnum | GradeEnum | GenresEnum">
import { GenresEnum, GradeEnum, StatusesEnum } from '@src/libs/api.ts'
import { NSelect, NTag } from 'naive-ui'
import { computed, toRef } from 'vue'
import { useTableCol } from '../composables/use-table-col'
import { SelectKind, TagOptions, useTableSelect } from '../composables/use-table-select'
import TableCol from './table-col.vue'

type SelectValue = T | undefined

const props = defineProps<{
  kind: SelectKind
  value: SelectValue
}>()
const emits = defineEmits<{ update: [SelectValue] }>()
const selectValue = toRef(props, 'value')

const {
  isEdit,
  inputValue,
  handleOpen,
  handleChange,
  handleClose,
} = useTableCol<T>(selectValue, emits)

const select = useTableSelect()
const data = computed(() => {
  return {
    tag: select[`${props.kind}Tags`][selectValue.value] as TagOptions,
    options: select.options[props.kind],
  }
})
</script>

<template>
  <TableCol v-if="data" @click="handleOpen">
    <NSelect
      v-if="isEdit"
      v-model:value="inputValue"
      size="small"
      show
      :options="data.options"
      :render-label="(option) => select.renderLabel(option, kind)"
      @update:value="handleChange"
      @keydown.enter="handleChange"
      @click.stop="handleClose"
    />
    <NTag
      v-else-if="data.tag"
      class="tag"
      :type="data.tag.variant"
      :bordered="false"
      round
    >
      {{ data.tag.name }} {{ data.tag.label }}
    </NTag>
  </TableCol>
</template>

<style scoped>
.tag {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
}
</style>
