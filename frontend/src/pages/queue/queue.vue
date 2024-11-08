<script setup lang="ts">
import TableColGenre from '@src/components/table/table-col/table-col-genre.vue'
import { NSpin } from 'naive-ui'
import { useGames } from '../games/composables/use-games'
import { useVideos } from '../videos/composables/use-videos'
import QueueCard from './components/queue-card.vue'

const games = useGames()
const videos = useVideos()
</script>

<template>
  <div v-if="games.isLoading || videos.isLoading" class="loader">
    <NSpin size="large" />
  </div>
  <template v-else>
    <QueueCard kind="game" :items="games.gamesQueue">
      <template #title>
        <div style="padding-bottom: 1.5rem">
          Поиграть: {{ games.gamesQueue.length }}
        </div>
      </template>
    </QueueCard>

    <QueueCard kind="video" :items="videos.videosQueue">
      <template #title>
        <div style="padding-bottom: 1.5rem">
          Посмотреть: {{ videos.videosQueue.length }}
        </div>
      </template>
      <template #footer="{ item }">
        <TableColGenre :genre="item.genre" style="justify-content: flex-start" />
      </template>
    </QueueCard>
  </template>
</template>

<style scoped>
.loader {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
