<script setup lang="ts" generic="T extends GameEntity | VideoEntity">
import { GameEntity, VideoEntity } from '@src/libs/api'
import { NCard } from 'naive-ui'

defineProps<{ items: T[] }>()
</script>

<template>
  <NCard
    v-if="items.length > 0"
    :bordered="false"
    style="background-color: rgb(24, 24, 28)"
  >
    <span style="font-size: 25px">
      <slot name="title" />
    </span>
    <div class="grid">
      <NCard
        v-for="(item, index) in items" :key="index"
        class="card"
        :title="item.title"
        size="huge"
        hoverable
        :segmented="{ footer: 'soft' }"
      >
        <template #header-extra />

        <template #footer>
          <div style="display: flex; justify-content: space-between">
            <div v-if="item.person" style="display: flex; justify-content: flex-end">
              {{ item.person.name }}
            </div>
            <slot name="footer" :item="item" />
          </div>
        </template>
      </NCard>
    </div>
  </NCard>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
}

.card {
  background-color: #1f1f1f;
  height: 100% ;
  justify-content: space-between;
}
</style>
