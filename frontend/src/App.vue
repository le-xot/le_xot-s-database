<script setup lang="ts">
import {
  darkTheme,
  NConfigProvider,
  NMessageProvider,
  NScrollbar,
} from 'naive-ui';
import AppHeader from './components/AppHeader.vue';
</script>

<template>
  <n-config-provider :theme="darkTheme">
    <n-message-provider>
      <div class="app"><AppHeader /></div>

      <div class="content">
        <div class="container">
          <n-scrollbar>
            <RouterView />
          </n-scrollbar>
        </div>
      </div>
    </n-message-provider>
  </n-config-provider>
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
  margin-right: auto;
  margin-left: auto;
  padding-top: 2rem;
  padding-right: 2rem;
  padding-left: 2rem;
}
</style>
