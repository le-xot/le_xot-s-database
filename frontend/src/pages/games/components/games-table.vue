<script setup lang="ts">
import Table from '@src/components/table/table.vue'
import TableSearchBar from '@src/components/table/table-search-bar.vue'
import { storeToRefs } from 'pinia'
import { useGames } from '../composables/use-games'
import { useGamesFilters } from '../composables/use-games-filters'
import { useGamesTable } from '../composables/use-games-table'

const { isLoading, games } = storeToRefs(useGames())
const table = useGamesTable()
const filters = useGamesFilters()
</script>

<template>
  <TableSearchBar
    v-model:value="filters.searchValue"
    v-model:type="filters.searchType"
    :options="filters.searchTypeOptions"
  />

  <Table
    :columns="table.tableColumns"
    :data="games"
    :is-loading="isLoading"
  />
</template>
