<script setup lang="ts">
import Table from '@/components/table/table.vue'
import { storeToRefs } from 'pinia'
import { useVideos } from '../composables/use-videos'
import { useVideosTable } from '../composables/use-videos-table'

const { isLoading, videos } = storeToRefs(useVideos())
const table = useVideosTable()
</script>

<template>
  <Table
    :columns="table.tableColumns"
    :data="videos"
    :is-loading="isLoading"
  />
</template>

<style scoped>
.table-manage {
  display: flex;
  justify-content: flex-start;
  margin: 0 1rem;
}

.search-and-button {
  display: flex;
  align-items: center;
  flex-grow: 1;
}

.column-button {
  width: 120px;
  margin-left: 1rem;
}

.column-checkboxes {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
