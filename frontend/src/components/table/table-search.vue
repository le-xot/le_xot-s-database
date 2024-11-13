<script setup lang="ts">
import { NInput } from 'naive-ui'
import { computed } from 'vue'

const searchValue = defineModel<string>('value', { required: true })

const placeholder = computed(() => `Искать по названию или заказчику`)
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
}
</style>
