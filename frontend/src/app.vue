<script setup lang="ts">
import {
  darkTheme,
  NConfigProvider,
  NMessageProvider,
  NScrollbar,
} from 'naive-ui'

import AppHeader from './components/app-header.vue'
</script>

<template>
  <NConfigProvider :theme="darkTheme">
    <NMessageProvider>
      <div class="app">
        <AppHeader />
      </div>
      <div class="content">
        <div class="container">
          <NScrollbar>
            <RouterView />
          </NScrollbar>
        </div>
      </div>
    </NMessageProvider>
  </NConfigProvider>
</template>

<style scoped>
.app {
  width: 100%;
  height: 100%;
}

.content {
  width: 100%;
  height: calc(100dvh - var(--header-height));
  background-color: rgb(24, 24, 28);
}

.container {
  width: 75dvw;
  margin-right: auto;
  margin-left: auto;
  padding-top: 2rem;
  padding-right: 2rem;
  padding-left: 2rem;
}
</style>
