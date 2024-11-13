import { TableBaseColumn } from 'naive-ui/es/data-table/src/interface'
import { h } from 'vue'
import TableInfo from '../table-info/table-info.vue'
import TableInfoGrade from '../table-info/table-info-grade.vue'
import TableInfoStatus from '../table-info/table-info-status.vue'
import { genreTags, gradeTags, statusTags } from './use-table-select'

const gradeFilters: TableBaseColumn<{ grade: string }> = {
  key: 'grade',
  filterOptions: Object.entries(gradeTags).map(([key, value]) => ({
    label: `${value.name} ${value.label}`,
    value: key,
  })),
  filter: 'default',
  align: 'center',
  title() {
    return h(TableInfo, { title: 'Оценка' }, { default: () => h(TableInfoGrade) })
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
    return h(TableInfo, { title: 'Статус' }, { default: () => h(TableInfoStatus) })
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
