<script setup lang="ts">
import { useGames } from '../../composables/useGames.ts';
import { useVideos } from '../../composables/useVideos.ts';
import { NCard, NGrid, NGridItem } from 'naive-ui';
import TableGenre from './props/TableGenre.vue';

const { gamesQueue } = useGames();
const { videosQueue } = useVideos();
</script>

<template>
  <n-card
    :bordered="false"
    style="background-color: rgb(16, 16, 20)"
    v-if="gamesQueue.length > 0"
  >
    <span style="font-size: 25px">Поиграть: {{ gamesQueue.length }}</span>
    <n-grid
      cols="1 s:1 m:2 l:3 xl:4"
      responsive="screen"
      :x-gap="10"
      :y-gap="10"
      style="background-color: rgb(16, 16, 20); padding-top: 10px"
    >
      <n-grid-item v-for="(item, index) in gamesQueue" :key="index">
        <n-card :title="item.title" size="huge">
          <template #action>
            {{ item.person.name }}
          </template>
        </n-card>
      </n-grid-item>
    </n-grid>
  </n-card>

  <n-card
    :bordered="false"
    style="background-color: rgb(16, 16, 20)"
    v-if="videosQueue.length > 0"
  >
    <span style="font-size: 25px">Посмотреть: {{ videosQueue.length }}</span>
    <n-grid
      cols="1 s:1 m:2 l:3 xl:4"
      responsive="screen"
      :x-gap="10"
      :y-gap="10"
      style="background-color: rgb(16, 16, 20); padding-top: 10px"
    >
      <n-grid-item v-for="(item, index) in videosQueue" :key="index">
        <n-card :title="item.title" size="huge">
          <template #header-extra>
            <TableGenre :genre="item.genre" />
          </template>
          <template #action>
            {{ item.person.name }}
          </template>
        </n-card>
      </n-grid-item>
    </n-grid>
  </n-card>

  <div></div>
</template>
