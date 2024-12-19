<script setup lang="ts" generic="T extends StatusesEnum | GradeEnum | GenresEnum">
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tag } from '@/components/ui/tag'
import { GenresEnum, GradeEnum, StatusesEnum } from '@/lib/api.ts'
import { computed, toRef } from 'vue'
import { useTableCol } from '../composables/use-table-col'
import { BadgeOptions, SelectKind, useTableSelect } from '../composables/use-table-select'
import TableCol from './table-col.vue'

type ValueSelect = T | undefined

const props = defineProps<{
  kind: SelectKind
  value: ValueSelect
}>()
const emits = defineEmits<{ update: [ValueSelect] }>()
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
  const tag = select[`${props.kind}Tags`]?.[selectValue.value] as BadgeOptions
  return {
    tag: tag || null,
    options: select.options[props.kind],
  }
})
</script>

<template>
  <TableCol @click="handleOpen">
    <Select
      v-if="isEdit"
      @keydown.enter="handleChange"
      @click.stop="handleClose"
    >
      <SelectTrigger class="w-[180px]">
        <SelectValue :placeholder="data.tag.name" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem
          v-for="option in data.options"
          ref="inputValue"
          :key="option.value"
          :value="option.value"
        >
          <Tag>
            {{ option.label }}
          </Tag>
        </SelectItem>
      </SelectContent>
    </Select>
    <Tag v-else-if="data.tag" :class="data.tag.class">
      {{ data.tag.name }}
    </Tag>
  </TableCol>
</template>
