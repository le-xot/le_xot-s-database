<script setup lang="ts">
import { DataTableColumns, NDataTable } from 'naive-ui';
import { h } from 'vue';
import TableGrade from './props/table-grade.vue';
import { useVideos } from '../../composables/useVideos.ts';
import TableStatus from './props/table-status.vue';
import { VideoEntity } from '../../types/api.ts';
import TableGenre from './props/table-genre.vue';
import TableHeadStatus from './head/table-head-status.vue';
import TableHeadGrade from './head/table-head-grade.vue';

const { videos } = useVideos();

const tableColumns: DataTableColumns<VideoEntity> = [
  {
    title: 'Название',
    key: 'title',
    align: 'center',
  },
  {
    title: 'Заказчик',
    key: 'person.name',
    align: 'center',
  },
  {
    render(row) {
      return h(TableGenre, { genre: row.genre });
    },
    title: 'Жанр',
    key: 'genre',
    align: 'center',
    width: 200,
  },
  {
    render(row) {
      return h(TableStatus, { status: row.status });
    },
    title() {
      return h(TableHeadStatus);
    },
    key: 'status',
    align: 'center',
    width: 200,
  },
  {
    render(row) {
      return h(TableGrade, { grade: row.grade });
    },
    title() {
      return h(TableHeadGrade);
    },
    key: 'grade',
    align: 'center',
    width: 200,
  },
];
</script>

<template>
  <n-data-table
    :bordered="false"
    :bottom-bordered="false"
    :columns="tableColumns"
    :data="videos"
    :single-line="false"
    v-if="videos.length > 0"
  ></n-data-table>
</template>
