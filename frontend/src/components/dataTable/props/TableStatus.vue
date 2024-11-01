<script setup lang="ts">
import { StatusesEnum } from '../../../types/api.ts';
import { NTag } from 'naive-ui';

defineProps<{ status?: StatusesEnum }>();

const statusLabels: Record<
  StatusesEnum,
  {
    name: string;
    variant: 'default' | 'error' | 'primary' | 'info' | 'success' | 'warning';
  }
> = {
  [StatusesEnum.PROGRESS]: { name: 'В процессе', variant: 'warning' },
  [StatusesEnum.DONE]: { name: 'Готово', variant: 'success' },
  [StatusesEnum.DROP]: { name: 'Дроп', variant: 'error' },
  [StatusesEnum.QUEUE]: { name: 'В очереди', variant: 'default' },
  [StatusesEnum.UNFINISHED]: { name: 'Нет концовки', variant: 'info' },
};
</script>
<template>
  <n-tag
    style="
      display: flex;
      align-items: center;
      justify-content: center;
      width: 125px;
    "
    :type="statusLabels[status].variant"
    v-if="status"
    round
    :bordered="false"
  >
    {{ statusLabels[status].name }}
  </n-tag>
</template>
