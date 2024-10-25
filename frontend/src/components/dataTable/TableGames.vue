<script setup lang="ts">
import { DataTableColumns, NDataTable } from 'naive-ui';
import { h } from 'vue';
import TableGrade from './props/TableGrade.vue';
import { useGames } from '../../composables/useGames.ts';
import TableStatus from './props/TableStatus.vue';
import { GameEntity } from '../../types/api.ts';

const { games } = useGames();

const tableColumns: DataTableColumns<GameEntity> = [
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
      return h(TableStatus, { status: row.status });
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
    :data="games"
    :single-line="false"
    v-if="games.length > 0"
  ></n-data-table>
</template>
