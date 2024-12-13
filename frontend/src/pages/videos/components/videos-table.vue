<script setup lang="ts">
import Table from '@/components/table/table.vue'
import TableSearch from '@/components/table/table-search.vue'
import { useUser } from '@/composables/use-user.ts'
import { NButton, NCheckbox, NPopover } from 'naive-ui'
import { storeToRefs } from 'pinia'
import { h } from 'vue'
import { useVideos } from '../composables/use-videos'
import { useVideosTable } from '../composables/use-videos-table'

const { isLoading, videos } = storeToRefs(useVideos())
const table = useVideosTable()
const { isAdmin } = storeToRefs(useUser())

const columnOptions = [
  { label: 'ID', key: 'id', isVisibleForAdmin: true },
  { label: 'Название', key: 'title' },
  { label: 'Заказчик', key: 'person' },
  { label: 'Жанр', key: 'genre' },
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
        <div class="column-checkboxes">
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
    :data="videos"
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

.column-checkboxes {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
