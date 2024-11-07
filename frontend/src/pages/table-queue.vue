<script setup lang="ts">
import TableColGenre from '@src/components/table/table-col/table-col-genre.vue'
import { useGames } from '@src/composables/use-games.ts'
import { useVideos } from '@src/composables/use-videos.ts'
import { useTitle } from '@vueuse/core'
import { NCard, NSpin } from 'naive-ui'

const { gamesQueue, isLoading: isGamesLoading } = useGames()
const { videosQueue, isLoading: isVideosLoading } = useVideos()

useTitle('Очередь')
</script>

<template>
  <div v-if="isGamesLoading || isVideosLoading" style="display: flex; align-items: center; justify-content: center;">
    <NSpin size="large" />
  </div>

  <template v-else>
    <NCard
      v-if="gamesQueue.length > 0"
      :bordered="false"
      style="background-color: rgb(24, 24, 28)"
    >
      <span style="font-size: 25px">Поиграть: {{ gamesQueue.length }}</span>
      <div
        class="grid"
      >
        <NCard
          v-for="(item, index) in gamesQueue" :key="index"
          class="card"
          :title="item.title" size="huge" hoverable :segmented="{
            footer: 'soft',
          }"
        >
          <template #footer>
            <div style="display: flex; justify-content: space-between ">
              <div style="display: flex; justify-content: flex-end">
                {{ item.person?.name }}
              </div>
            </div>
          </template>
        </NCard>
      </div>
    </NCard>

    <NCard
      v-if="videosQueue.length > 0"
      :bordered="false"
      style="background-color: rgb(24, 24, 28)"
    >
      <span style="font-size: 25px">Посмотреть: {{ videosQueue.length }}</span>
      <div
        class="grid"
      >
        <NCard
          v-for="(item, index) in videosQueue" :key="index"
          class="card"
          :title="item.title" size="huge" hoverable :segmented="{
            footer: 'soft',
          }"
        >
          <template #header-extra />

          <template #footer>
            <div style="display: flex; justify-content: space-between ">
              <div style="display: flex; justify-content: flex-end">
                {{ item.person?.name }}
              </div>
              <div>
                <TableColGenre style="justify-content: flex-start" :genre="item.genre" />
              </div>
            </div>
          </template>
        </NCard>
      </div>
    </NCard>
  </template>
</template>

<style scoped>
.card{
  background-color: #1f1f1f;
  height: 100% ;
  justify-content: space-between;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
}
</style>
