<script setup lang="ts">
import TableColGenre from '@src/components/table/table-col/table-col-genre.vue'
import TableColGrade from '@src/components/table/table-col/table-col-grade.vue'
import TableColPerson from '@src/components/table/table-col/table-col-person.vue'
import TableColStatus from '@src/components/table/table-col/table-col-status.vue'
import TableColTitle from '@src/components/table/table-col/table-col-title.vue'
import TableHeadGrade from '@src/components/table/table-header/table-header-grade.vue'
import TableHeadStatus from '@src/components/table/table-header/table-header-status.vue'
import { useUser } from '@src/composables/use-user.ts'
import { useVideos } from '@src/composables/use-videos.ts'
import { RolesEnum, VideoEntity } from '@src/libs/api.ts'
import { useTitle } from '@vueuse/core'
import { CirclePlus, Eraser } from 'lucide-vue-next'
import { DataTableColumns, NDataTable } from 'naive-ui'
import { computed, h } from 'vue'

useTitle('Список кинолент')

const { user } = useUser()
const { videos, update, createVideo, deleteVideo } = useVideos()

const tableColumns = computed(() => {
  const data: DataTableColumns<VideoEntity> = [
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

  if (user.value?.role === RolesEnum.ADMIN) {
    data.unshift(
      {
        title() {
          return h(CirclePlus, {
            style: 'width: 15px; height: 15px',
            onClick: () => createVideo(),
          })
        },
        key: 'id',
        align: 'center',
        width: 50,
        render(row) {
          return h(Eraser, {
            style: 'width: 15px; height: 15px',
            onClick: () => deleteVideo(row.id),
          })
        },
      },
    )
  }

  return data
})
</script>

<template>
  <NDataTable
    :bordered="false"
    :bottom-bordered="false"
    :columns="tableColumns"
    :data="videos"
    :single-line="false"
  />
</template>
