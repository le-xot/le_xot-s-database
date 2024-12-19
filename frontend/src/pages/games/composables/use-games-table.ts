import { useDialog } from '@/components/dialog/composables/use-dialog'
import DialogButton from '@/components/dialog/dialog-button.vue'
import TableColPerson from '@/components/table/table-col/table-col-person.vue'
import TableColSelect from '@/components/table/table-col/table-col-select.vue'
import TableColTitle from '@/components/table/table-col/table-col-title.vue'
import { useUser } from '@/composables/use-user'
import { GameEntity } from '@/lib/api.ts'
import { ColumnDef } from '@tanstack/vue-table'
import { CirclePlus, Eraser } from 'lucide-vue-next'
import { acceptHMRUpdate, defineStore, storeToRefs } from 'pinia'
import { computed, h } from 'vue'
import { useGames } from './use-games'

export const useGamesTable = defineStore('games/use-games-table', () => {
  const { isAdmin } = storeToRefs(useUser())
  const games = useGames()
  const dialog = useDialog()
  const tableColumns = computed(() => {
    const columns: ColumnDef<GameEntity>[] = [
      {
        accessorKey: 'title',
        header: 'Название',
        cell: ({ row }) => {
          return h(TableColTitle, {
            key: `title-${row.original.id}`,
            title: row.original.title,
            onUpdate: (title) => games.updateGame({
              id: row.original.id,
              data: { title },
            }),
          })
        },
      },
      {
        accessorKey: 'person',
        header: 'Заказчик',
        cell: ({ row }) => {
          return h(TableColPerson, {
            key: `person-${row.original.id}`,
            personId: row.original.person?.id,
            onUpdate: (personId) => games.updateGame({
              id: row.original.id,
              data: { personId },
            }),
          })
        },
      },
      {
        accessorKey: 'status',
        header: 'Статус',
        cell: ({ row }) => {
          return h(TableColSelect, {
            key: `status-${row.original.id}`,
            value: row.original.status,
            kind: 'status',
            onUpdate: (value) => {
              games.updateGame({
                id: row.original.id,
                data: { status: value },
              })
            },
          })
        },
      },
      {
        accessorKey: 'grade',
        header: 'Оценка',
        cell: ({ row }) => {
          return h(TableColSelect, {
            key: `grade-${row.original.id}`,
            value: row.original.grade,
            kind: 'grade',
            onUpdate: (value) => {
              games.updateGame({
                id: row.original.id,
                data: { grade: value },
              })
            },
          })
        },
      },
    ]
    if (isAdmin.value) {
      columns.unshift({
        accessorKey: 'id',
        header: () => {
          return h(DialogButton, {
            icon: CirclePlus,
            onClick: () => dialog.openDialog({
              title: `Создать игру?`,
              description: '',
              onSubmit: () => games.createGame(),
            }),
          })
        },
        cell: ({ row }) => {
          return h(DialogButton, {
            key: `id-${row.original.id}`,
            icon: Eraser,
            onClick: () => dialog.openDialog({
              title: `Удалить игру?`,
              description: `Вы уверены, что хотите удалить "${row.original.title}"?`,
              onSubmit: () => games.deleteGame(row.original.id),
            }),
          })
        },
      })
    }
    return columns
  })
  return {
    tableColumns,
    search: games.search,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGamesTable, import.meta.hot))
}
