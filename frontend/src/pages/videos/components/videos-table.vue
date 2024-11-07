<script setup lang="ts">
import Table from '@src/components/table/table.vue'
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
