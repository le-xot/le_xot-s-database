<script setup lang="ts">
import { NDataTable } from 'naive-ui'
import type { TableColumns } from 'naive-ui/es/data-table/src/interface'

defineProps<{
  isLoading: boolean
  columns: TableColumns<any>
  data?: any[]
}>()
</script>

<template>
  <div class="table">
    <NDataTable
      :bordered="false"
      :bottom-bordered="false"
      :columns="columns"
      :data="data"
      :loading="isLoading"
      max-height="100%"
      scroll-x="1200px"
      size="small"
    />
  </div>
</template>

<style>
.table {
  overflow-x: auto;
  height: 100%;
  white-space: nowrap;
  margin: 0 1rem;
}

.n-data-table-base-table-header {
  position: sticky;
  inset-block-start: 0px;
}
</style>
