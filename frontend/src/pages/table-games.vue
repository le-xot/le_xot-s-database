<script setup lang="ts">
import TableColGrade from '@src/components/table/table-col/table-col-grade.vue'
import TableColPerson from '@src/components/table/table-col/table-col-person.vue'
import TableColStatus from '@src/components/table/table-col/table-col-status.vue'
import TableColTitle from '@src/components/table/table-col/table-col-title.vue'
import TableHeaderGrade from '@src/components/table/table-header/table-header-grade.vue'
import TableHeaderStatus from '@src/components/table/table-header/table-header-status.vue'
import { useGames } from '@src/composables/use-games.ts'
import { useUser } from '@src/composables/use-user.ts'
import { GameEntity, RolesEnum } from '@src/libs/api.ts'
import { CirclePlus, Eraser } from 'lucide-vue-next'
import { DataTableColumns, NDataTable } from 'naive-ui'
import { computed, h } from 'vue'

const { user } = useUser()
const { games, update, createGame, deleteGame } = useGames()

const tableColumns = computed(() => {
  const data: DataTableColumns<GameEntity> = [
    {
      title: 'Название',
      key: 'title',
      align: 'center',
      render(row) {
        return h(TableColTitle, {
          title: row.title,
          onUpdate: (title: string) => update(row.id, { title }),
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
        return h(TableHeaderStatus)
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
        return h(TableHeaderGrade)
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
            onClick: () => createGame(),
          })
        },
        key: 'id',
        align: 'center',
        width: 50,
        render(row) {
          return h(Eraser, {
            style: 'width: 15px; height: 15px',
            onClick: () => deleteGame(row.id),
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
    :data="games"
    :single-line="false"
  />
</template>
