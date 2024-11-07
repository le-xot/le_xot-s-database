import TableColGrade from '@src/components/table/table-col/table-col-grade.vue'
import TableColPerson from '@src/components/table/table-col/table-col-person.vue'
import TableColStatus from '@src/components/table/table-col/table-col-status.vue'
import TableColTitle from '@src/components/table/table-col/table-col-title.vue'
import TableHeaderGrade from '@src/components/table/table-header/table-header-grade.vue'

import TableHeaderStatus from '@src/components/table/table-header/table-header-status.vue'
import { useUser } from '@src/composables/use-user'
import { GameEntity } from '@src/libs/api'
import { CirclePlus, Eraser } from 'lucide-vue-next'
import { DataTableColumns } from 'naive-ui'
import { acceptHMRUpdate, defineStore, storeToRefs } from 'pinia'
import { computed, h } from 'vue'
import { useGames } from './use-games'

export const useGamesTable = defineStore('games/use-games-table', () => {
  const { isAdmin } = storeToRefs(useUser())
  const gamesStore = useGames()

  const tableColumns = computed(() => {
    const columns: DataTableColumns<GameEntity> = [
      {
        title: 'Название',
        key: 'title',
        align: 'center',
        render(row) {
          return h(TableColTitle, {
            title: row.title,
            onUpdate: (title: string) => gamesStore.updateGame({
              id: row.id,
              data: { title },
            }),
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
            onUpdate: (personId: number) => gamesStore.updateGame({
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
              gamesStore.updateGame({
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
              gamesStore.updateGame({
                id: row.id,
                data: { grade: value },
              })
            },
          })
        },
      },
    ]

    if (isAdmin.value) {
      columns.unshift(
        {
          title() {
            return h(CirclePlus, {
              style: 'width: 15px; height: 15px',
              onClick: () => gamesStore.createGame(),
            })
          },
          key: 'id',
          align: 'center',
          width: 50,
          render(row) {
            return h(Eraser, {
              style: 'width: 15px; height: 15px',
              onClick: () => gamesStore.deleteGame(row.id),
            })
          },
        },
      )
    }

    return columns
  })

  return {
    tableColumns,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGamesTable, import.meta.hot))
}
