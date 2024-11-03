<script setup lang="ts">
import { GameEntity } from '@src/api.ts'
import { useGames } from '@utils/composable/use-games.ts'
import TableGrade from '@utils/table-cell/table-cell-grade.vue'
import TableStatus from '@utils/table-cell/table-cell-status.vue'
import TableHeadGrade from '@utils/table-header/table-header-grades.vue'
import TableHeadStatus from '@utils/table-header/table-header-statuses.vue'
import { DataTableColumns, NDataTable } from 'naive-ui'
import { h } from 'vue'

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
