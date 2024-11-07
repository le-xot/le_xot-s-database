import TableColGenre from '@src/components/table/table-col/table-col-genre.vue'
import TableColGrade from '@src/components/table/table-col/table-col-grade.vue'
import TableColPerson from '@src/components/table/table-col/table-col-person.vue'
import TableColStatus from '@src/components/table/table-col/table-col-status.vue'

import TableColTitle from '@src/components/table/table-col/table-col-title.vue'
import TableHeaderButton from '@src/components/table/table-header/table-header-button.vue'
import TableHeaderGrade from '@src/components/table/table-header/table-header-grade.vue'
import TableHeaderStatus from '@src/components/table/table-header/table-header-status.vue'
import { useUser } from '@src/composables/use-user'
import { VideoEntity } from '@src/libs/api'
import { CirclePlus, Eraser } from 'lucide-vue-next'
import { DataTableColumns } from 'naive-ui'
import { acceptHMRUpdate, defineStore, storeToRefs } from 'pinia'
import { computed, h } from 'vue'
import { useVideos } from './use-videos'

export const useVideosTable = defineStore('videos/use-videos-table', () => {
  const { isAdmin } = storeToRefs(useUser())
  const videosStore = useVideos()

  const tableColumns = computed(() => {
    const columns: DataTableColumns<VideoEntity> = [
      {
        title: 'Название',
        key: 'title',
        align: 'center',
        render(row) {
          return h(TableColTitle, {
            title: row.title,
            onTitleUpdate: (title: string) => videosStore.updateVideo({
              id: row.id,
              data: { title },
            }),
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
              videosStore.updateVideo({
                id: row.id,
                data: { genre: value },
              })
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
            onUpdate: (personId: number) => videosStore.updateVideo({
              id: row.id,
              data: { personId },
            }),
          })
        },
      },
      {
        title() {
          return h(TableHeaderStatus)
        },
        key: 'status',
        align: 'center',
        width: 200,
        render(row) {
          return h(TableColStatus, {
            status: row.status,
            onUpdate: (value: string) => {
              videosStore.updateVideo({
                id: row.id,
                data: { status: value },
              })
            },
          })
        },
      },

      {
        title() {
          return h(TableHeaderGrade)
        },
        key: 'grade',
        align: 'center',
        width: 200,
        render(row) {
          return h(TableColGrade, {
            grade: row.grade,
            onUpdate: (value: string) => {
              videosStore.updateVideo({
                id: row.id,
                data: { grade: value },
              })
            },
          })
        },
      },
    ]

    if (isAdmin.value) {
      columns.unshift({
        title() {
          return h(TableHeaderButton, {
            icon: CirclePlus,
            onClick: () => videosStore.createVideo(),
          })
        },
        key: 'id',
        align: 'center',
        width: 50,
        render(row) {
          return h(TableHeaderButton, {
            icon: Eraser,
            onClick: () => videosStore.deleteVideo(row.id),
          })
        },
      })
    }

    return columns
  })

  return {
    tableColumns,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useVideosTable, import.meta.hot))
}
