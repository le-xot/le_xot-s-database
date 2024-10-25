<script setup lang="ts">
import { GradeEnum } from '../../../types/api.ts';

defineProps<{ grade?: GradeEnum }>();

const gradeLabels: Record<GradeEnum, string> = {
  [GradeEnum.DISLIKE]: '👎',
  [GradeEnum.BEER]: '🍺',
  [GradeEnum.LIKE]: '👍',
  [GradeEnum.RECOMMEND]: '🔥',
};
</script>

<template>
  <div v-if="grade" :class="[grade.toLowerCase(), 'grade']">
    {{ gradeLabels[grade] ?? 'ERROR' }}
  </div>
</template>

<style scoped>
.grade {
  text-align: center;
}

.dislike {
  background-color: var(--color-red);
}

.beer {
  background-color: var(--color-yellow);
}

.like {
  background-color: var(--color-green);
}

.recommend {
  background-color: var(--color-blue);
}
</style>
