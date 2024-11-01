<script setup lang="ts">
import { DataTableColumns, NDataTable } from 'naive-ui'
import { h } from 'vue'
import { VideoEntity } from './api.ts'
import TableGenre from './table-genre.vue'
import TableGrade from './table-grade.vue'
import TableHeadGrade from './table-head-grade.vue'
import TableHeadStatus from './table-head-status.vue'
import TableStatus from './table-status.vue'
import { useVideos } from './useVideos.ts'

const { videos } = useVideos()

const tableColumns: DataTableColumns<VideoEntity> = [
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
      return h(TableGenre, { genre: row.genre })
    },
    title: 'Жанр',
    key: 'genre',
    align: 'center',
    width: 200,
  },
  {
    render(row) {
      return h(TableStatus, { status: row.status })
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
      return h(TableGrade, { grade: row.grade })
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
    v-if="videos.length > 0"
    :bordered="false"
    :bottom-bordered="false"
    :columns="tableColumns"
    :data="videos"
    :single-line="false"
  />
</template>
