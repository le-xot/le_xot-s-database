<script setup lang="ts">
import { NButton } from 'naive-ui'

defineProps<{
  icon: any
}>()
</script>

<template>
  <NButton quaternary circle>
    <template #icon>
      <component :is="icon" class="icon" />
    </template>
  </NButton>
</template>

<style scoped>
.icon {
  width: 16px;
  height: 16px
}
</style>
