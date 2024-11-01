<script setup lang="ts">
import { GradeEnum } from '../../../types/api.ts';
import { NTag } from 'naive-ui';

defineProps<{ grade?: GradeEnum }>();

const gradeLabels: Record<
  GradeEnum,
  {
    name: string;
    variant: 'default' | 'error' | 'primary' | 'info' | 'success' | 'warning';
  }
> = {
  [GradeEnum.DISLIKE]: { name: '👎', variant: 'error' },
  [GradeEnum.BEER]: { name: '🍺', variant: 'warning' },
  [GradeEnum.LIKE]: { name: '👍', variant: 'success' },
  [GradeEnum.RECOMMEND]: { name: '🔥', variant: 'info' },
};
</script>

<template>
  <div class="table-grade">
    <n-tag
      class="table-grade-tag"
      :type="gradeLabels[grade].variant"
      v-if="grade"
      round
      :bordered="false"
    >
      {{ gradeLabels[grade!].name }}
    </n-tag>
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
