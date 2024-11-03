<script setup lang="ts">
import { useGames } from '@utils/composable/use-games.ts'
import { useVideos } from '@utils/composable/use-videos.ts'
import TableGenre from '@utils/table-cell/table-cell-genre.vue'
import { NCard, NGrid, NGridItem } from 'naive-ui'

const { gamesQueue } = useGames()
const { videosQueue } = useVideos()
</script>

<template>
  <NCard
    v-if="gamesQueue.length > 0"
    :bordered="false"
    style="background-color: rgb(24, 24, 28)"
  >
    <span style="font-size: 25px">Поиграть: {{ gamesQueue.length }}</span>
    <NGrid
      cols="1 s:1 m:2 l:3 xl:4"
      responsive="screen"
      :x-gap="10"
      :y-gap="10"
      style="background-color: rgb(24, 24, 28); padding-top: 10px"
    >
      <NGridItem v-for="(item, index) in gamesQueue" :key="index">
        <NCard :title="item.title" size="huge" hoverable>
          <template #action>
            {{ item.person.name }}
          </template>
        </NCard>
      </NGridItem>
    </NGrid>
  </NCard>

  <NCard
    v-if="videosQueue.length > 0"
    :bordered="false"
    style="background-color: rgb(24, 24, 28)"
  >
    <span style="font-size: 25px">Посмотреть: {{ videosQueue.length }}</span>
    <NGrid
      cols="1 s:1 m:2 l:3 xl:4"
      responsive="screen"
      :x-gap="10"
      :y-gap="10"
      style="background-color: rgb(24, 24, 28); padding-top: 10px"
    >
      <NGridItem v-for="(item, index) in videosQueue" :key="index">
        <NCard :title="item.title" size="huge" hoverable>
          <template #header-extra>
            <TableGenre :genre="item.genre" />
          </template>
          <template #action>
            {{ item.person.name }}
          </template>
        </NCard>
      </NGridItem>
    </NGrid>
  </NCard>
</template>
