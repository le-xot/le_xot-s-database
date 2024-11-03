<script setup lang="ts">
import { Info } from 'lucide-vue-next'
import { NPopover } from 'naive-ui'

import MainGrades from './table-header-grades-tooltip.vue'
</script>

<template>
  <div class="grade">
    Оценка
    <NPopover raw trigger="hover">
      <template #trigger>
        <Info style="width: 1rem; height: 1rem" />
      </template>
      <MainGrades />
    </NPopover>
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
