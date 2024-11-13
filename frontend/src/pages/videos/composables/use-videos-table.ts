import { useTableFilters } from '@src/components/table/composables/use-table-filters'
import TableColPerson from '@src/components/table/table-col/table-col-person.vue'
import TableColSelect from '@src/components/table/table-col/table-col-select.vue'
import TableColTitle from '@src/components/table/table-col/table-col-title.vue'
import TableHeaderButton from '@src/components/table/table-header/table-header-button.vue'
import TableHeaderButtonConfirm from '@src/components/table/table-header/table-header-button-confirm.vue'
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
  const filters = useTableFilters()

  const tableColumns = computed(() => {
    const columns: DataTableColumns<VideoEntity> = [
      {
        title: 'Название',
        key: 'title',
        align: 'center',
        render(row) {
          return h(TableColTitle, {
            key: `title-${row.id}`,
            title: row.title,
            onUpdate: (title) => videosStore.updateVideo({
              id: row.id,
              data: { title },
            }),
          })
        },
      },
      {
        ...filters.genreFilters,
        width: 200,
        render(row) {
          return h(TableColSelect, {
            key: `genre-${row.id}`,
            value: row.genre,
            kind: 'genre',
            onUpdate: (value) => {
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
        key: 'person',
        align: 'center',
        width: 300,
        render(row) {
          return h(TableColPerson, {
            key: `person-${row.id}`,
            personId: row.person?.id,
            onUpdate: (personId) => videosStore.updateVideo({
              id: row.id,
              data: { personId },
            }),
          })
        },
      },
      {
        ...filters.statusFilters,
        width: 200,
        render(row) {
          return h(TableColSelect, {
            key: `status-${row.id}`,
            value: row.status,
            kind: 'status',
            onUpdate: (value) => {
              videosStore.updateVideo({
                id: row.id,
                data: { status: value },
              })
            },
          })
        },
      },

      {
        ...filters.gradeFilters,
        width: 200,
        render(row) {
          return h(TableColSelect, {
            key: `grade-${row.id}`,
            value: row.grade,
            kind: 'grade',
            onUpdate: (value) => {
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
        key: 'id',
        align: 'center',
        width: 50,
        title() {
          return h(TableHeaderButton, {
            icon: CirclePlus,
            onClick: () => videosStore.createVideo(),
          })
        },
        render(row) {
          return h(TableHeaderButtonConfirm, {
            key: `id-${row.id}`,
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
