<script setup lang="ts">
import { darkTheme, NConfigProvider } from 'naive-ui'
</script>

<template>
  <NConfigProvider :theme="darkTheme" style="height: 100%;">
    <RouterView />
  </NConfigProvider>
</template>
