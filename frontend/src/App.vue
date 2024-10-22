<script setup lang="ts">
import Body from './components/Body.vue';
import { darkTheme, NConfigProvider } from 'naive-ui';
</script>

<template>
  <n-config-provider :theme="darkTheme">
    <Body></Body>
  </n-config-provider>
</template>
