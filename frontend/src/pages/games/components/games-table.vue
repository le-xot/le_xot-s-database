<script setup lang="ts">
import Table from '@/components/table/table.vue'
import { storeToRefs } from 'pinia'
import { useGames } from '../composables/use-games'
import { useGamesTable } from '../composables/use-games-table'

const { isLoading, games } = storeToRefs(useGames())
const table = useGamesTable()
</script>

<template>
  <Table
    :columns="table.tableColumns"
    :data="games"
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
