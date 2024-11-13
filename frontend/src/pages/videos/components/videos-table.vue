<script setup lang="ts">
import Table from '@src/components/table/table.vue'
import TableSearchBar from '@src/components/table/table-search-bar.vue'
import { storeToRefs } from 'pinia'
import { useVideos } from '../composables/use-videos'
import { useVideosFilters } from '../composables/use-videos-filters'
import { useVideosTable } from '../composables/use-videos-table'

const { isLoading, videos } = storeToRefs(useVideos())
const table = useVideosTable()
const filters = useVideosFilters()
</script>

<template>
  <TableSearchBar
    v-model:value="filters.searchValue"
    v-model:type="filters.searchType"
    :options="filters.searchTypeOptions"
  />

  <Table
    :columns="table.tableColumns"
    :data="videos"
    :is-loading="isLoading"
  />
</template>
