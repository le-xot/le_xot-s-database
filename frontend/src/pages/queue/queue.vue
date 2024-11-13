<script setup lang="ts">
import TableColSelect from '@src/components/table/table-col/table-col-select.vue'
import { NResult, NSpin } from 'naive-ui'
import { computed } from 'vue'
import { useGames } from '../games/composables/use-games'
import { useVideos } from '../videos/composables/use-videos'
import QueueCard from './components/queue-card.vue'

const games = useGames()
const videos = useVideos()
const isLoading = computed(() => games.isLoading || videos.isLoading)
</script>

<template>
  <div class="queue">
    <div v-if="isLoading" class="loader">
      <NSpin size="large" />
    </div>
    <template v-else>
      <QueueCard v-if="games.gamesQueue.length > 0" kind="game" :items="games.gamesQueue">
        <template #title>
          Поиграть: {{ games.gamesQueue.length }}
        </template>
      </QueueCard>

      <QueueCard v-if="videos.videosQueue.length > 0" kind="video" :items="videos.videosQueue">
        <template #title>
          Посмотреть: {{ videos.videosQueue.length }}
        </template>
        <template #footer="{ item }">
          <TableColSelect
            :value="item.genre"
            kind="genre"
            style="justify-content: flex-start"
          />
        </template>
      </QueueCard>

      <NResult
        v-if="videos.videosQueue.length === 0 && games.gamesQueue.length === 0"
        class="empty"
        status="info"
        title="Пока в очереди ничего нет :C"
      />
    </template>
  </div>
</template>

<style scoped>
.queue {
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.empty {
  width: 100%;
  height: 100dvh;
  display: flex;
  font-size: 100px;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: column;
}

.loader {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
