<script setup lang="ts">
import { Genres, Grades, Statuses, Types } from '../utils/enums.ts';
import { DataTableColumns, NDataTable } from 'naive-ui';
import { h, onMounted, ref } from 'vue';
import TableGrade from './TableGrade.vue';

const videos = ref([]);

onMounted(async () => {
  try {
    const response = await fetch('http://localhost:3000/videos');
    if (!response.ok) {
      console.log('ERROR');
      return;
    }
    videos.value = await response.json();
  } catch {
    console.log('ERROR');
  }
});

interface Video {
  id: number;
  title: string;
  personId: number;
  type: Types;
  status: Statuses;
  genre: Genres;
  grade: Grades;
}

const tableColumns: DataTableColumns<Video> = [
  {
    title: 'ID',
    key: 'id',
    align: 'center',
  },
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
    title: 'Status',
    key: 'status',
    align: 'center',
  },
  {
    title: 'Genre',
    key: 'genre',
    align: 'center',
  },
  {
    render(row) {
      return h(
        'div',
        {
          class: `grade-cell ${row.grade?.toLowerCase()}`,
        },
        [h(TableGrade, { grade: row.grade })],
      );
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

<style>
.grade-cell {
  text-align: center;
}

.grade-cell.dislike {
  background-color: rgb(110, 54, 48);
}

.grade-cell.beer {
  background-color: rgb(137, 99, 42);
}

.grade-cell.like {
  background-color: rgb(43, 89, 63);
}

.grade-cell.recommend {
  background-color: rgb(40, 69, 108);
}

.grade-cell.default {
  background-color: gray;
}
</style>
