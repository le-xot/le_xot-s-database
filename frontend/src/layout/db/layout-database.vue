<script setup lang="ts">
import LayoutBody from '@src/layout/db/layout-body.vue'
import LayoutHeader from '@src/layout/db/layout-header.vue'
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
  max-height: 100vh;
  overflow: auto;
  scrollbar-width: none;
}
</style>
