<script setup lang="ts">
import { Statuses } from '../utils/enums.ts';
import { computed } from 'vue';

const props = defineProps<{ status?: Statuses }>();

const computedStatus = computed(() => {
  switch (props.status) {
    case Statuses.PROGRESS:
      return 'В процессе';
    case Statuses.DONE:
      return 'Готово';
    case Statuses.DROP:
      return 'Дроп';
    case Statuses.QUEUE:
      return 'В очереди';
    case Statuses.UNFINISHED:
      return 'Нет концовки';
  }
});
</script>

<template>
  {{ computedStatus }}
</template>
