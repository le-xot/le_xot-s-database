<script setup lang="ts">
import TableGrade from '@src/components/table/table-cell/table-cell-grade.vue'
import TableStatus from '@src/components/table/table-cell/table-cell-status.vue'
import TableColTitle from '@src/components/table/table-col/table-col-title.vue'
import TableHeadGrade from '@src/components/table/table-header/table-header-grade.vue'
import TableHeadStatus from '@src/components/table/table-header/table-header-status.vue'
import { useGames } from '@src/composables/use-games.ts'
import { GameEntity } from '@src/libs/api.ts'
import { DataTableColumns, NDataTable, useMessage } from 'naive-ui'
import { h } from 'vue'

const { games, update } = useGames()
const message = useMessage()

const tableColumns: DataTableColumns<GameEntity> = [
  {
    title: 'Название',
    key: 'title',
    align: 'center',
    render(row) {
      return h(TableColTitle, {
        title: row.title,
        onTitleUpdate: (title: string) => update(row.id, { title }),
      })
    },
  },
  {
    title: 'Заказчик',
    key: 'person.name',
    align: 'center',
    render(row) {
      return h(
        'div',
        {
          style: 'cursor: pointer;',
          onClick: () => {
            message.info(`Клик по ячейке "Заказчик" для игры с id ${row.id}`)
          },
        },
        row.person.name,
      )
    },
  },
  {
    title() {
      return h(TableHeadStatus)
    },
    key: 'status',
    align: 'center',
    width: 200,
    render(row) {
      return h(
        'div',
        {
          style: 'cursor: pointer;',
          onClick: () => {
            message.info(`Клик по статусу для игры с id ${row.id}`)
          },
        },
        h(TableStatus, {
          status: row.status,
        }),
      )
    },
  },
  {
    title() {
      return h(TableHeadGrade)
    },
    key: 'grade',
    align: 'center',
    width: 200,
    render(row) {
      return h(
        'div',
        {
          style: 'cursor: pointer;',
          onClick: () => {
            message.info(`Клик по оценке для игры с id ${row.id}`)
          },
        },
        h(TableGrade, {
          grade: row.grade,
        }),
      )
    },
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
