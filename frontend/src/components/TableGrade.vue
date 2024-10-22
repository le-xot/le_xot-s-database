<script setup lang="ts">
import { Grades } from '../utils/enums.ts';
import { computed } from 'vue';

const props = defineProps<{ grade?: Grades }>();

const computedGrade = computed(() => {
  switch (props.grade) {
    case Grades.DISLIKE:
      return '👎';
    case Grades.BEER:
      return '🍺';
    case Grades.LIKE:
      return '👍';
    case Grades.RECOMMEND:
      return '🔥';
  }
});
</script>

<template>
  {{ computedGrade }}
</template>
