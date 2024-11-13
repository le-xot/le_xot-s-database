<template>
  <div class="search-bar">
    <NInput
      v-model:value="searchValue"
      class="search-input"
      type="text"
      :placeholder="placeholder"
      clearable
    />

    <NSelect
      v-model:value="searchType"
      class="search-select-type"
      :options="options"
    />
  </div>
</template>

<script setup lang="ts">
import { SEARCH_TYPES, SearchType } from '@src/composables/use-search-bar'
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

<style scoped lang="scss">
.search {
  &-input {
    width: 100%;
  }

  &-select-type {
    width: 200px;
  }

  &-bar {
    display: flex;
    gap: 1rem;
    margin: 0 1rem;
  }
}
</style>
