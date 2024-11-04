<script setup lang="ts">
import MainStatuses from '@src/component/tooltips/tooltip-status.vue'
import { Info } from 'lucide-vue-next'
import { NPopover } from 'naive-ui'
</script>

<template>
  <div class="head-status">
    Статус
    <NPopover raw trigger="hover">
      <template #trigger>
        <Info style="width: 1rem; height: 1rem" />
      </template>
      <MainStatuses />
    </NPopover>
  </div>
</template>

<style scoped>
.head-status {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
}
</style>
