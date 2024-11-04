<script setup lang="ts">
import TableGenre from '@src/components/table/table-cell/table-cell-genre.vue'
import { useGames } from '@src/composables/use-games.ts'
import { useVideos } from '@src/composables/use-videos.ts'
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
      style="padding-top: 10px"
    >
      <NGridItem v-for="(item, index) in gamesQueue" :key="index">
        <NCard
          style="background-color: #1f1f1f"
          :title="item.title" size="huge" hoverable :segmented="{
            footer: 'soft',
          }"
        >
          <template #footer>
            <div style="display: flex; justify-content: space-between ">
              <div style="display: flex; justify-content: flex-end">
                {{ item.person.name }}
              </div>
            </div>
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
      style="padding-top: 10px"
    >
      <NGridItem v-for="(item, index) in videosQueue" :key="index">
        <NCard
          style="background-color: #1f1f1f"
          :title="item.title" size="huge" hoverable :segmented="{
            footer: 'soft',
          }"
        >
          <template #header-extra />

          <template #footer>
            <div style="display: flex; justify-content: space-between ">
              <div style="display: flex; justify-content: flex-end">
                {{ item.person.name }}
              </div>
              <div>
                <TableGenre style="justify-content: flex-start" :genre="item.genre" />
              </div>
            </div>
          </template>
        </NCard>
      </NGridItem>
    </NGrid>
  </NCard>
</template>
