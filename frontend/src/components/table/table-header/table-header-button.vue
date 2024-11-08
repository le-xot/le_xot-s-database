<script setup lang="ts">
import { NButton, NPopconfirm } from 'naive-ui'

defineProps<{
  icon: any
}>()
</script>

<template>
  <NPopconfirm>
    <template #activator>
      <NButton quaternary circle>
        <template #icon>
          <component :is="icon" class="icon" />
        </template>
      </NButton>
    </template>
    Are you sure?
  </NPopconfirm>
</template>

<style scoped>
.icon {
  width: 16px;
  height: 16px
}
</style>
