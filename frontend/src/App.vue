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
import MainGrades from './components/MainGrades.vue';
import MainStatuses from './components/MainStatuses.vue';
</script>

<template>
  <n-config-provider :theme="darkTheme">
    <n-layout style="height: 100%">
      <n-layout-header style="height: 15dvh">
        <AppHeader />
      </n-layout-header>
      <n-layout-content style="height: 85dvh">
        <n-scrollbar>
          <n-tabs
            style="background-color: rgb(24, 24, 28)"
            type="segment"
            animated
            default-value="queue"
          >
            <n-tab-pane name="info" tab="Инфо" display-directive="show">
              <MainStatuses />
              <MainGrades />
            </n-tab-pane>
            <n-tab-pane name="queue" tab="Очередь" display-directive="show">
              <TableQueue />
            </n-tab-pane>
            <n-tab-pane name="videos" tab="Кино" display-directive="show">
              <TableVideos />
            </n-tab-pane>
            <n-tab-pane name="games" tab="Игры" display-directive="show">
              <TableGames />
            </n-tab-pane>
          </n-tabs>
        </n-scrollbar>
      </n-layout-content>
    </n-layout>
  </n-config-provider>
</template>
