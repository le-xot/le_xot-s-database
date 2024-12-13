<script setup lang="ts">
import { computed } from 'vue'
import { Input } from '../ui/input'

const searchValue = defineModel<string>('value', { required: true })
const placeholder = computed(() => 'Искать по названию или заказчику')
</script>

<template>
  <div class="table-search">
    <Input
      v-model:model-value="searchValue"
      :placeholder="placeholder"
    />
  </div>
</template>

<style scoped lang="scss">
.table-search {
  display: flex;
  flex-grow: 1;
}

.input {
  width: 100%;
}
</style>
