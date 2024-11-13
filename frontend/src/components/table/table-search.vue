<script setup lang="ts">
import { SEARCH_TYPES, SearchType } from '@src/components/table/composables/use-table-search'
import { NInput, NSelect } from 'naive-ui'
import { SelectMixedOption } from 'naive-ui/es/select/src/interface'
import { computed } from 'vue'

defineProps<{
  options: SelectMixedOption[]
}>()

const searchValue = defineModel<string>('value', { required: true })
const searchType = defineModel<SearchType>('type', { required: true })

const placeholder = computed(() => `Искать по ${SEARCH_TYPES[searchType.value]}`)
</script>

<template>
  <div class="table-search">
    <NInput
      v-model:value="searchValue"
      class="input"
      type="text"
      :placeholder="placeholder"
      clearable
    />

    <NSelect
      v-model:value="searchType"
      class="select-type"
      :options="options"
    />
  </div>
</template>

<style scoped lang="scss">
.table-search {
  display: flex;
  gap: 1rem;
  margin: 0 1rem;

  .input {
    width: 100%;
  }

  .select-type {
    width: 200px;
  }
}
</style>
