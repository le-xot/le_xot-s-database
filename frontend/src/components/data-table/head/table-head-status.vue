<script setup lang="ts">
import { Info } from 'lucide-vue-next'
import { NPopover } from 'naive-ui'

import MainStatuses from '../../info/main-statuses.vue'
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
