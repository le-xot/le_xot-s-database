<script setup lang="ts">
import LayoutBody from '@/layout/db/layout-body.vue'
import LayoutHeader from '@/layout/db/layout-header.vue'
import { darkTheme, NConfigProvider, NMessageProvider } from 'naive-ui'
</script>

<template>
  <NConfigProvider :theme="darkTheme" class="layout-database">
    <NMessageProvider>
      <LayoutHeader />
      <LayoutBody />
    </NMessageProvider>
  </NConfigProvider>
</template>

<style scoped>
.layout-database {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100dvh;
  overflow: auto;
  scrollbar-width: none;
}
</style>
