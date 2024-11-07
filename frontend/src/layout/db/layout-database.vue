<script setup lang="ts">
import LayoutBody from '@src/layout/db/layout-body.vue'
import LayoutHeader from '@src/layout/db/layout-header.vue'
import { darkTheme, NConfigProvider, NMessageProvider } from 'naive-ui'
</script>

<template>
  <NConfigProvider :theme="darkTheme" style="height: 100%;">
    <NMessageProvider>
      <LayoutHeader />
      <LayoutBody />
    </NMessageProvider>
  </NConfigProvider>
</template>
