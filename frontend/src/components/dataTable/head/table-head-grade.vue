<script setup lang="ts">
import { NPopover } from 'naive-ui';
import { Info } from 'lucide-vue-next';
import MainGrades from '../../info/main-grades.vue';
</script>

<template>
  <div class="grade">
    Оценка
    <n-popover raw trigger="hover">
      <template #trigger>
        <Info style="width: 1rem; height: 1rem" />
      </template>
      <MainGrades />
    </n-popover>
  </div>
</template>

<style scoped>
.grade {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
}
</style>
