<script setup lang="ts">
import {
  darkTheme,
  NConfigProvider,
  NLayout,
  NLayoutContent,
  NLayoutFooter,
  NLayoutHeader,
  NScrollbar,
  NTabPane,
  NTabs,
} from 'naive-ui';
import Videos from './components/Videos.vue';
import Header from './components/Header.vue';
import Games from './components/Games.vue';
import Queue from './components/Queue.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <n-config-provider :theme="darkTheme">
    <n-layout style="height: 100%">
      <n-layout-header style="height: 10vh">
        <Header />
      </n-layout-header>
      <n-layout-content style="height: 85vh">
        <n-scrollbar>
          <n-tabs
            style="background-color: rgb(24, 24, 28)"
            type="segment"
            animated
          >
            <n-tab-pane name="queue" tab="Queue" display-directive="show">
              <Queue />
            </n-tab-pane>
            <n-tab-pane name="videos" tab="Videos" display-directive="show">
              <Videos />
            </n-tab-pane>
            <n-tab-pane name="games" tab="Games" display-directive="show">
              <Games />
            </n-tab-pane>
          </n-tabs>
        </n-scrollbar>
      </n-layout-content>
      <n-layout-footer style="height: 5vh">
        <Footer />
      </n-layout-footer>
    </n-layout>
  </n-config-provider>
</template>
