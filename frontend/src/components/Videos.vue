<script setup lang="ts">
import { DataTableColumns, NDataTable } from 'naive-ui';
import { h } from 'vue';
import TableGrade from './TableGrade.vue';
import { useVideos, Video } from '../composables/useVideos.ts';
import TableStatus from './TableStatus.vue';

const { videos } = useVideos();

const tableColumns: DataTableColumns<Video> = [
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
      return h(
        'div',
        {
          class: `status ${row.status?.toLowerCase()}`,
        },
        [h(TableStatus, { status: row.status })],
      );
    },
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

.status {
  text-align: center;
}

.status.drop {
  background-color: rgb(110, 54, 48);
}

.status.progress {
  background-color: rgb(137, 99, 42);
}

.status.done {
  background-color: rgb(43, 89, 63);
}

.status.unfinished {
  background-color: rgb(40, 69, 108);
}

.status.queue {
  background-color: gray;
}

.status.default {
  background-color: gray;
}
</style>
