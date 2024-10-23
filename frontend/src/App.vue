<script setup lang="ts">
import {
  darkTheme,
  NConfigProvider,
  NLayout,
  NLayoutContent,
  NLayoutFooter,
  NLayoutHeader,
} from 'naive-ui';
import Videos from './components/Videos.vue';
import Header from './components/Header.vue';
</script>

<template>
  <n-config-provider :theme="darkTheme">
    <n-layout style="height: 100%">
      <n-layout-header style="height: 5vh">
        <Header />
      </n-layout-header>
      <n-layout-content style="height: 90vh">
        <Videos />
      </n-layout-content>
      <n-layout-footer style="height: 5vh">Footer</n-layout-footer>
    </n-layout>
  </n-config-provider>
</template>
