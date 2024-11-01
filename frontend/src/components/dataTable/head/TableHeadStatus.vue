<script setup lang="ts">
import { NPopover } from 'naive-ui';
import { Info } from 'lucide-vue-next';
import MainStatuses from '../../info/MainStatuses.vue';
</script>

<template>
  <div class="head-status">
    Статус
    <n-popover raw trigger="hover">
      <template #trigger>
        <Info style="width: 1rem; height: 1rem" />
      </template>
      <MainStatuses />
    </n-popover>
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
