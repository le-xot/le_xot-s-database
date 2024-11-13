<script setup lang="ts">
import Table from '@src/components/table/table.vue'
import TableSearch from '@src/components/table/table-search.vue'
import { storeToRefs } from 'pinia'
import { useGames } from '../composables/use-games'
import { useGamesTable } from '../composables/use-games-table'

const { isLoading, games } = storeToRefs(useGames())
const table = useGamesTable()
</script>

<template>
  <TableSearch
    v-model:value="table.search.searchValue"
  />

  <Table
    :columns="table.tableColumns"
    :data="games"
    :is-loading="isLoading"
  />
</template>
