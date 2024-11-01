<script setup lang="ts">
import { DataTableColumns, NDataTable } from 'naive-ui'
import { h } from 'vue'
import { GameEntity } from './api.ts'
import TableGrade from './table-grade.vue'
import TableHeadGrade from './table-head-grade.vue'
import TableHeadStatus from './table-head-status.vue'
import TableStatus from './table-status.vue'
import { useGames } from './useGames.ts'

const { games } = useGames()

const tableColumns: DataTableColumns<GameEntity> = [
  {
    title: 'Название',
    key: 'title',
    align: 'center',
  },
  {
    title: 'Заказчик',
    key: 'person.name',
    align: 'center',
  },
  {
    render(row) {
      return h(TableStatus, {
        status: row.status,
      })
    },
    title() {
      return h(TableHeadStatus)
    },
    key: 'status',
    align: 'center',
    width: 200,
  },
  {
    render(row) {
      return h(TableGrade, {
        grade: row.grade,
      })
    },
    title() {
      return h(TableHeadGrade)
    },
    key: 'grade',
    align: 'center',
    width: 200,
  },
]
</script>

<template>
  <NDataTable
    v-if="games.length > 0"
    :bordered="false"
    :bottom-bordered="false"
    :columns="tableColumns"
    :data="games"
    :single-line="false"
  />
</template>
