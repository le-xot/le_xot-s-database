import { useTableFilters } from '@/components/table/composables/use-table-filters'
import TableColPerson from '@/components/table/table-col/table-col-person.vue'
import TableColSelect from '@/components/table/table-col/table-col-select.vue'
import TableColTitle from '@/components/table/table-col/table-col-title.vue'
import TableHeaderButton from '@/components/table/table-header/table-header-button.vue'
import TableHeaderButtonConfirm from '@/components/table/table-header/table-header-button-confirm.vue'
import { useUser } from '@/composables/use-user'
import { GameEntity } from '@/libs/api'
import { CirclePlus, Eraser } from 'lucide-vue-next'
import { DataTableColumns } from 'naive-ui'
import { acceptHMRUpdate, defineStore, storeToRefs } from 'pinia'
import { computed, h, ref } from 'vue'
import { useGames } from './use-games'

export const useGamesTable = defineStore('games/use-games-table', () => {
  const { isAdmin } = storeToRefs(useUser())
  const games = useGames()
  const filters = useTableFilters()

  const visibleColumns = ref(new Set(['id', 'title', 'person', 'status', 'grade']))

  const tableColumns = computed(() => {
    const allColumns: DataTableColumns<GameEntity> = [
      {
        title: 'Название',
        key: 'title',
        align: 'center',
        render(row) {
          return h(TableColTitle, {
            key: `title-${row.id}`,
            title: row.title,
            onUpdate: (title) => games.updateGame({
              id: row.id,
              data: { title },
            }),
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
            onUpdate: (personId) => games.updateGame({ id: row.id, data: { personId } }),
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
              games.updateGame({
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
              games.updateGame({
                id: row.id,
                data: { grade: value },
              })
            },
          })
        },
      },
    ]

    if (isAdmin.value) {
      allColumns.unshift({
        key: 'id',
        align: 'center',
        width: 50,
        title() {
          return h(TableHeaderButton, {
            icon: CirclePlus,
            onClick: () => games.createGame(),
          })
        },
        render(row) {
          return h(TableHeaderButtonConfirm, {
            key: `id-${row.id}`,
            icon: Eraser,
            onClick: () => games.deleteGame(row.id),
          })
        },
      })
    }

    return allColumns.filter((col) => {
      if ('key' in col && col.key) {
        return visibleColumns.value.has(col.key as string)
      }
      return true
    })
  })

  return {
    tableColumns,
    search: games.search,
    visibleColumns,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGamesTable, import.meta.hot))
}
