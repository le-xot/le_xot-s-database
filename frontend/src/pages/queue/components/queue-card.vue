<script setup lang="ts" generic="T extends GameEntity | VideoEntity">
import { GameEntity, VideoEntity } from '@src/libs/api'
import { NCard } from 'naive-ui'

defineProps<{ items: T[] }>()

function isShow(item: T) {
  return item.title && item.person
}
</script>

<template>
  <div>
    <p class="title">
      <slot name="title" />
    </p>
    <div class="grid">
      <template v-for="(item, index) in items" :key="index">
        <NCard
          v-if="isShow(item)"
          class="card"
          :title="item.title"
          size="huge"
          hoverable
          :segmented="{ footer: 'soft' }"
        >
          <template #footer>
            <div class="person">
              <div v-if="item.person" class="person-name">
                {{ item.person.name }}
              </div>
              <slot name="footer" :item="item" />
            </div>
          </template>
        </NCard>
      </template>
    </div>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
}

.card {
  background-color: var(--n-action-color);
  height: 100% ;
  justify-content: space-between;
}

.title {
  padding-bottom: 1rem;
  color: #fff;
  font-size: 2rem;
}

.person {
  display: flex;
  justify-content: space-between
}

.person-name {
  display: flex;
  justify-content: flex-end
}
</style>
