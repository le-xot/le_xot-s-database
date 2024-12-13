import { useTableFilters } from '@/components/table/composables/use-table-filters'
import TableColPerson from '@/components/table/table-col/table-col-person.vue'
import TableColSelect from '@/components/table/table-col/table-col-select.vue'
import TableColTitle from '@/components/table/table-col/table-col-title.vue'
import TableHeaderButton from '@/components/table/table-header/table-header-button.vue'
import TableHeaderButtonConfirm from '@/components/table/table-header/table-header-button-confirm.vue'
import { useUser } from '@/composables/use-user'
import { VideoEntity } from '@/libs/api'
import { CirclePlus, Eraser } from 'lucide-vue-next'
import { DataTableColumns } from 'naive-ui'
import { acceptHMRUpdate, defineStore, storeToRefs } from 'pinia'
import { computed, h, ref } from 'vue'
import { useVideos } from './use-videos'

export const useVideosTable = defineStore('videos/use-videos-table', () => {
  const { isAdmin } = storeToRefs(useUser())
  const videos = useVideos()
  const filters = useTableFilters()

  const visibleColumns = ref(new Set(['id', 'title', 'person', 'genre', 'status', 'grade']))

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
            onUpdate: (title) => videos.updateVideo({
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
              videos.updateVideo({
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
            onUpdate: (personId) => videos.updateVideo({
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
              videos.updateVideo({
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
              videos.updateVideo({
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
            onClick: () => videos.createVideo(),
          })
        },
        render(row) {
          return h(TableHeaderButtonConfirm, {
            key: `id-${row.id}`,
            icon: Eraser,
            onClick: () => videos.deleteVideo(row.id),
          })
        },
      })
    }

    return columns.filter((col) => {
      if ('key' in col && col.key) {
        return visibleColumns.value.has(col.key as string)
      }
      return true
    })
  })

  return {
    tableColumns,
    search: videos.search,
    visibleColumns,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useVideosTable, import.meta.hot))
}
