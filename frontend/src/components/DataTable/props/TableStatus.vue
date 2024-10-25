<script setup lang="ts">
import { StatusesEnum } from '../../../types/api.ts';

defineProps<{ status?: StatusesEnum }>();

const statusLabels: Record<StatusesEnum, string> = {
  [StatusesEnum.PROGRESS]: 'В процессе',
  [StatusesEnum.DONE]: 'Готово',
  [StatusesEnum.DROP]: 'Дроп',
  [StatusesEnum.QUEUE]: 'В очереди',
  [StatusesEnum.UNFINISHED]: 'Нет концовки',
};
</script>
<template>
  <div v-if="status" :class="[status.toLowerCase(), 'status']">
    {{ statusLabels[status] ?? '' }}
  </div>
</template>

<style scoped>
.status {
  text-align: center;
}

.drop {
  background-color: var(--color-red);
}

.progress {
  background-color: var(--color-yellow);
}

.done {
  background-color: var(--color-green);
}

.unfinished {
  background-color: var(--color-blue);
}

.queue {
  background-color: var(--color-gray);
}
</style>
