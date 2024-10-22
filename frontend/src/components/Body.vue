<script setup lang="ts">
import {
  NLayout,
  NLayoutContent,
  NLayoutFooter,
  NLayoutHeader,
} from 'naive-ui';
import Videos from './Videos.vue';
</script>

<template>
  <n-layout style="height: 100%">
    <n-layout-header style="height: 5vh">Header</n-layout-header>
    <n-layout-content style="height: 90vh">
      <Videos></Videos>
    </n-layout-content>
    <n-layout-footer style="height: 5vh">Footer</n-layout-footer>
  </n-layout>
</template>
