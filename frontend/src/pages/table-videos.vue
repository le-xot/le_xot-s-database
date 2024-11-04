<script setup lang="ts">
import TableGenre from '@src/component/table/table-cell-genre.vue'
import TableGrade from '@src/component/table/table-cell-grade.vue'
import TableStatus from '@src/component/table/table-cell-status.vue'
import TableHeadGrade from '@src/component/table/table-col-grade.vue'
import TableHeadStatus from '@src/component/table/table-col-status.vue'
import { useVideos } from '@src/composables/use-videos.ts'
import { VideoEntity } from '@src/libs/api.ts'
import { DataTableColumns, NDataTable } from 'naive-ui'
import { h } from 'vue'

const { videos } = useVideos()

const tableColumns: DataTableColumns<VideoEntity> = [
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
