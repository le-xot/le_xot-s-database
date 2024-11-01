<script setup lang="ts">
import { NTag } from 'naive-ui'

import { GradeEnum } from './api.ts'

defineProps<{ grade?: GradeEnum }>()

const gradeLabels: Record<
  GradeEnum,
  {
    name: string
    variant: 'default' | 'error' | 'primary' | 'info' | 'success' | 'warning'
  }
> = {
  [GradeEnum.DISLIKE]: { name: '👎', variant: 'error' },
  [GradeEnum.BEER]: { name: '🍺', variant: 'warning' },
  [GradeEnum.LIKE]: { name: '👍', variant: 'success' },
  [GradeEnum.RECOMMEND]: { name: '🔥', variant: 'info' },
}
</script>

<template>
  <div class="table-grade">
    <NTag
      v-if="grade"
      class="table-grade-tag"
      :type="gradeLabels[grade].variant"
      round
      :bordered="false"
    >
      {{ gradeLabels[grade!].name }}
    </NTag>
  </div>
</template>

<style scoped>
.table-grade {
  display: flex;
  justify-content: center;
  align-items: center;
}

.table-grade-tag {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 125px;
}
</style>
