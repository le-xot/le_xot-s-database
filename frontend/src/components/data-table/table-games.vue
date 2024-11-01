<script setup lang="ts">
import { NDataTable } from 'naive-ui'
import { h } from 'vue'
import { useGames } from '../../composables/useGames.ts'
import TableHeadGrade from './head/table-head-grade.vue'
import TableHeadStatus from './head/table-head-status.vue'
import TableGrade from './props/table-grade.vue'
import TableStatus from './props/table-status.vue'
import type { DataTableColumns } from 'naive-ui'
import type { GameEntity } from '../../types/api.ts'

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
