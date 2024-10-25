<script setup lang="ts">
import { DataTableColumns, NDataTable } from 'naive-ui';
import { h } from 'vue';
import TableGrade from './props/TableGrade.vue';
import { useVideos } from '../../composables/useVideos.ts';
import TableStatus from './props/TableStatus.vue';
import { VideoEntity } from '../../types/api.ts';
import TableGenre from './props/TableGenre.vue';

const { videos } = useVideos();

const tableColumns: DataTableColumns<VideoEntity> = [
  {
    title: 'Name',
    key: 'title',
    align: 'center',
  },
  {
    title: 'Person',
    key: 'person.name',
    align: 'center',
  },
  {
    render(row) {
      return h(TableGenre, { genre: row.genre });
    },
    title: 'Genre',
    key: 'genre',
    align: 'center',
  },
  {
    render(row) {
      return h(h(TableStatus, { status: row.status }));
    },
    title: 'Status',
    key: 'status',
    align: 'center',
  },
  {
    render(row) {
      return h(TableGrade, { grade: row.grade });
    },
    title: 'Grade',
    key: 'grade',
    align: 'center',
  },
];
</script>

<template>
  <n-data-table
    :columns="tableColumns"
    :data="videos"
    :single-line="false"
    v-if="videos.length > 0"
  ></n-data-table>
</template>
