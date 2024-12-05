<script setup lang="ts">
import Table from '@src/components/table/table.vue'
import TableSearch from '@src/components/table/table-search.vue'
import { useUser } from '@src/composables/use-user.ts'
import { NButton, NCheckbox, NPopover } from 'naive-ui'
import { storeToRefs } from 'pinia'
import { h } from 'vue'
import { useGames } from '../composables/use-games'
import { useGamesTable } from '../composables/use-games-table'

const { isLoading, games } = storeToRefs(useGames())
const table = useGamesTable()
const { isAdmin } = storeToRefs(useUser())

const columnOptions = [
  { label: 'ID', key: 'id', isVisibleForAdmin: true },
  { label: 'Название', key: 'title' },
  { label: 'Заказчик', key: 'person' },
  { label: 'Статус', key: 'status' },
  { label: 'Оценка', key: 'grade' },
]

const filteredColumnOptions = columnOptions.filter(option =>
  !option.isVisibleForAdmin || isAdmin.value,
)

function toggleColumnVisibility(key: string, checked: boolean) {
  const visibleColumns = table.visibleColumns
  if (checked) {
    visibleColumns.add(key)
  } else {
    visibleColumns.delete(key)
  }
}

const options = [{ key: 'checkboxes', type: 'render', render: () => {
  return h(NCheckbox)
} }]
</script>

<template>
  <div class="table-manage">
    <div class="search-and-button">
      <TableSearch v-model:value="table.search.searchValue" />
      <NPopover
        trigger="click"
        placement="bottom-start"
        :show-arrow="true"
        :options="options"
      >
        <template #trigger>
          <NButton class="column-button">
            Столбцы
          </NButton>
        </template>
        <div>
          <NCheckbox
            v-for="column of filteredColumnOptions"
            :key="column.key"
            :checked="table.visibleColumns.has(column.key)"
            @update:checked="toggleColumnVisibility(column.key, $event)"
          >
            {{ column.label }}
          </NCheckbox>
        </div>
      </NPopover>
    </div>
  </div>
  <Table
    :columns="table.tableColumns"
    :data="games"
    :is-loading="isLoading"
  />
</template>

<style scoped>
.table-manage {
  display: flex;
  justify-content: flex-start;
  margin: 0 1rem;
}

.search-and-button {
  display: flex;
  align-items: center;
  flex-grow: 1;
}

.column-button {
  width: 120px;
  margin-left: 1rem;
}
</style>
