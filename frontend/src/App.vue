<script setup lang="ts">
import {
  darkTheme,
  NConfigProvider,
  NLayout,
  NLayoutContent,
  NLayoutHeader,
  NScrollbar,
  NTabPane,
  NTabs,
} from 'naive-ui';
import AppHeader from './components/AppHeader.vue';
import TableQueue from './components/DataTable/TableQueue.vue';
import TableVideos from './components/DataTable/TableVideos.vue';
import TableGames from './components/DataTable/TableGames.vue';
</script>

<template>
  <n-config-provider :theme="darkTheme">
    <n-layout style="height: 100%">
      <n-layout-header style="height: 10vh">
        <AppHeader />
      </n-layout-header>
      <n-layout-content style="height: 90vh">
        <n-scrollbar>
          <n-tabs
            style="background-color: rgb(24, 24, 28)"
            type="segment"
            animated
          >
            <n-tab-pane name="queue" tab="Queue" display-directive="show">
              <TableQueue />
            </n-tab-pane>
            <n-tab-pane name="videos" tab="Videos" display-directive="show">
              <TableVideos />
            </n-tab-pane>
            <n-tab-pane name="games" tab="Games" display-directive="show">
              <TableGames />
            </n-tab-pane>
          </n-tabs>
        </n-scrollbar>
      </n-layout-content>
    </n-layout>
  </n-config-provider>
</template>
