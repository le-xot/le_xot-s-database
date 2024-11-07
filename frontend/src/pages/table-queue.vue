<script setup lang="ts">
import TableColGenre from '@src/components/table/table-col/table-col-genre.vue'
import CardContent from '@src/components/card/card-list.vue'
import Card from '@src/components/card/card.vue'
import { useGames } from '@src/composables/use-games.ts'
import { useVideos } from '@src/composables/use-videos.ts'
import { NCard, NGrid, NGridItem } from 'naive-ui'

const { gamesQueue } = useGames()
const { videosQueue } = useVideos()
</script>

<template>
  <CardContent v-if="gamesQueue.length > 0" :title="'Поиграть: ' + gamesQueue.length">
      <Card v-for="(item, index) in gamesQueue" 
            :key="index" 
            :title="item.title"
            :customer="item.person.name"
            :genre="item.genre"
      />
  </CardContent>
  <CardContent v-if="videosQueue.length > 0" :title="'Посмотреть: ' + videosQueue.length">
      <Card v-for="(item, index) in videosQueue" 
            :key="index" 
            :title="item.title"
            :customer="item.person.name"
            :genre="item.genre"
      />
  </CardContent>

</template>
