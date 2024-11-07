<script setup lang="ts">
import TableColGenre from '@src/components/table/table-col/table-col-genre.vue'
import TableColGrade from '@src/components/table/table-col/table-col-grade.vue'
import TableColPerson from '@src/components/table/table-col/table-col-person.vue'
import TableColStatus from '@src/components/table/table-col/table-col-status.vue'
import TableColName from '@src/components/table/table-col/table-col-title.vue'
import TableHeadGrade from '@src/components/table/table-header/table-header-grade.vue'
import TableHeadStatus from '@src/components/table/table-header/table-header-status.vue'
import { useVideos } from '@src/composables/use-videos.ts'
import { VideoEntity } from '@src/libs/api.ts'
import { DataTableColumns, NDataTable } from 'naive-ui'
import { h } from 'vue'

const { videos, update } = useVideos()

const tableColumns: DataTableColumns<VideoEntity> = [
  {
    title: 'Название',
    key: 'title',
    align: 'center',
    render(row) {
      return h(TableColName, {
        title: row.title,
        onTitleUpdate: (title: string) => update(row.id, { title }),
      })
    },
  },
  {
    title: 'Жанр',
    key: 'genre',
    align: 'center',
    width: 200,
    render(row) {
      return h(TableColGenre, {
        genre: row.genre,
        onUpdate: (value: string) => {
          update(row.id, { genre: value })
        },
      })
    },
  },
  {
    title: 'Заказчик',
    key: 'person.name',
    align: 'center',
    width: 300,
    render(row) {
      return h(TableColPerson, {
        person: row.person,
        onUpdate: (personId: number) => update(row.id, { personId }),
      })
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
      return h(TableColStatus, {
        status: row.status,
        onUpdate: (value: string) => {
          update(row.id, { status: value })
        },
      })
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
      return h(TableColGrade, {
        grade: row.grade,
        onUpdate: (value: string) => {
          update(row.id, { grade: value })
        },
      })
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
