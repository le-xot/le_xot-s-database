<script setup lang="ts">
import { darkTheme, NConfigProvider } from 'naive-ui'
</script>

<template>
  <NConfigProvider :theme="darkTheme" preflight-style-disabled>
    <RouterView />
  </NConfigProvider>
</template>
