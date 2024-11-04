<script setup lang="ts">
import TableGrade from '@src/components/table/table-cell-grade.vue'
import TableStatus from '@src/components/table/table-cell-status.vue'
import TableHeadGrade from '@src/components/table/table-col-grade.vue'
import TableHeadStatus from '@src/components/table/table-col-status.vue'
import { useGames } from '@src/composables/use-games.ts'
import { GameEntity } from '@src/libs/api.ts'
import { DataTableColumns, NDataTable, useMessage } from 'naive-ui'
import { h } from 'vue'

const { games } = useGames()
const message = useMessage()

function rowProps(games: GameEntity) {
  return {
    style: 'cursor: pointer;',
    onClick: () => {
      message.info(`Игра с id ${games.id}`)
    },
  }
}

const tableColumns: DataTableColumns<GameEntity> = [
  {
    title: 'Id',
    key: 'id',
    align: 'center',
    width: 50,
  },
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
    :row-props="rowProps"
  />
</template>
