import { TableBaseColumn } from 'naive-ui/es/data-table/src/interface'
import { h } from 'vue'
import TableHeaderGrade from '../table-header/table-header-grade.vue'
import TableHeaderStatus from '../table-header/table-header-status.vue'
import { genreTags, gradeTags, statusTags } from './use-select'

const gradeFilters: TableBaseColumn<{ grade: string }> = {
  key: 'grade',
  filterOptions: Object.entries(gradeTags).map(([key, value]) => ({
    label: `${value.name} ${value.label}`,
    value: key,
  })),
  filter: 'default',
  align: 'center',
  title() {
    return h(TableHeaderGrade)
  },
}

const statusFilters: TableBaseColumn<{ status: string }> = {
  key: 'status',
  filterOptions: Object.entries(statusTags).map(([key, value]) => ({
    label: value.name,
    value: key,
  })),
  filter: 'default',
  align: 'center',
  title() {
    return h(TableHeaderStatus)
  },
}

const genreFilters: TableBaseColumn<{ genre: string }> = {
  key: 'genre',
  title: 'Жанр',
  filterOptions: Object.entries(genreTags).map(([key, value]) => ({
    label: value.name,
    value: key,
  })),
  filter: 'default',
  align: 'center',
}

export function useTableFilters() {
  return {
    gradeFilters,
    statusFilters,
    genreFilters,
  }
}
