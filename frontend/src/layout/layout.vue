<script setup lang="ts">
import LayoutBody from '@src/layout/layout-body.vue'
import LayoutHeader from '@src/layout/layout-header.vue'
import { darkTheme, NConfigProvider, NMessageProvider } from 'naive-ui'
</script>

<template>
  <NConfigProvider :theme="darkTheme">
    <NMessageProvider>
      <LayoutHeader class="app" />
      <LayoutBody />
    </NMessageProvider>
  </NConfigProvider>
</template>

<style scoped>
.app {
  width: 100%;
  height: 100%;
}
</style>
