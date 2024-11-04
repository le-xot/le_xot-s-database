<script setup lang="ts">
import TableGenre from '@src/components/table/table-cell/table-cell-genre.vue'
import TableGrade from '@src/components/table/table-cell/table-cell-grade.vue'
import TableStatus from '@src/components/table/table-cell/table-cell-status.vue'
import TableColName from '@src/components/table/table-col/table-col-title.vue'
import TableHeadGrade from '@src/components/table/table-header/table-header-grade.vue'
import TableHeadStatus from '@src/components/table/table-header/table-header-status.vue'
import { useVideos } from '@src/composables/use-videos.ts'
import { VideoEntity } from '@src/libs/api.ts'
import { DataTableColumns, NDataTable, useMessage } from 'naive-ui'
import { h } from 'vue'

const { videos } = useVideos()
const message = useMessage()

const tableColumns: DataTableColumns<VideoEntity> = [
  {
    title: 'Название',
    key: 'title',
    align: 'center',
    render(row) {
      return h(
        'div',
        {
          style: 'cursor: pointer;',
          onClick: () => {
            message.info(`Клик по ячейке "Название" для игры с id ${row.id}`)
          },
        },
        row.title,
      )
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
    title: 'Жанр',
    key: 'genre',
    align: 'center',
    width: 200,
    render(row) {
      return h(
        'div',
        {
          style: 'cursor: pointer;',
          onClick: () => {
            message.info(`Клик по жанру для видео с id ${row.id}`)
          },
        },
        h(TableGenre, { genre: row.genre }),
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
            message.info(`Клик по статусу для видео с id ${row.id}`)
          },
        },
        h(TableStatus, { status: row.status }),
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
            message.info(`Клик по оценке для видео с id ${row.id}`)
          },
        },
        h(TableGrade, { grade: row.grade }),
      )
    },
  },
]
</script>

<template>
  <NDataTable
    v-if="videos.length > 0"
    :bordered="false"
    :bottom-bordered="false"
    :columns="tableColumns"
    :data="videos"
    :single-line="false"
  />
</template>
