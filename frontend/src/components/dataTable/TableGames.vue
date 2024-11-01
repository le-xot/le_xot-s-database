<script setup lang="ts">
import { DataTableColumns, NDataTable } from 'naive-ui';
import { h } from 'vue';
import TableGrade from './props/TableGrade.vue';
import { useGames } from '../../composables/useGames.ts';
import TableStatus from './props/TableStatus.vue';
import { GameEntity } from '../../types/api.ts';
import TableHeadStatus from './head/TableHeadStatus.vue';
import TableHeadGrade from './head/TableHeadGrade.vue';

const { games } = useGames();

const tableColumns: DataTableColumns<GameEntity> = [
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
      return h(TableStatus, {
        status: row.status,
      });
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
      return h(TableGrade, {
        grade: row.grade,
      });
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
    :data="games"
    :single-line="false"
    v-if="games.length > 0"
  ></n-data-table>
</template>
