<script setup lang="ts">
import { Info } from 'lucide-vue-next'

import { NButton, NIcon, NModal } from 'naive-ui'
import { ref } from 'vue'

defineProps<{
  title: string
}>()

const isShow = ref(false)
</script>

<template>
  <div class="table-info">
    {{ title }}
    <NButton quaternary circle @click="isShow = true">
      <template #icon>
        <NIcon size="16" color="var(--n-th-icon-color)">
          <Info />
        </NIcon>
      </template>
    </NButton>
    <NModal v-model:show="isShow">
      <slot />
    </NModal>
  </div>
</template>

<style lang="scss">
.table-info {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;

  &-card {
    width: 800px;
  }
}

.card-content {
  font-size: 16px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  b {
    text-decoration-line: underline;
  }
}
</style>
