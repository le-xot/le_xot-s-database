<script setup lang="ts">
import { VideoEntity } from '@src/api.ts'
import { useVideos } from '@utils/composable/use-videos.ts'
import TableGenre from '@utils/table-cell/table-cell-genre.vue'
import TableGrade from '@utils/table-cell/table-cell-grade.vue'
import TableStatus from '@utils/table-cell/table-cell-status.vue'
import TableHeadGrade from '@utils/table-header/table-header-grades.vue'
import TableHeadStatus from '@utils/table-header/table-header-statuses.vue'
import { DataTableColumns, NDataTable } from 'naive-ui'
import { h } from 'vue'

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
