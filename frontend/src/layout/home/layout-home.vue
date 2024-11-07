<script setup lang="ts">
import { darkTheme, NConfigProvider } from 'naive-ui'
</script>

<template>
  <NConfigProvider :theme="darkTheme">
    <RouterView />
  </NConfigProvider>
</template>
