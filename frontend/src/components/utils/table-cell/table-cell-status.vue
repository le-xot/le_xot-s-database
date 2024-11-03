<script setup lang="ts">
import { StatusesEnum } from '@src/api.ts'
import { NTag } from 'naive-ui'

defineProps<{ status?: StatusesEnum }>()

const statusLabels: Record<
  StatusesEnum,
  {
    name: string
    variant: 'default' | 'error' | 'primary' | 'info' | 'success' | 'warning'
  }
> = {
  [StatusesEnum.PROGRESS]: { name: 'В процессе', variant: 'warning' },
  [StatusesEnum.DONE]: { name: 'Готово', variant: 'success' },
  [StatusesEnum.DROP]: { name: 'Дроп', variant: 'error' },
  [StatusesEnum.QUEUE]: { name: 'В очереди', variant: 'default' },
  [StatusesEnum.UNFINISHED]: { name: 'Нет концовки', variant: 'info' },
}
</script>

<template>
  <div class="table-status">
    <NTag
      v-if="status"
      class="table-status-tag"
      :type="statusLabels[status].variant"
      round
      :bordered="false"
    >
      {{ statusLabels[status].name }}
    </NTag>
  </div>
</template>

<style scoped>
.table-status {
  display: flex;
  justify-content: center;
  align-items: center;
}

.table-status-tag {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 125px;
}
</style>
