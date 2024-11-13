<script setup lang="ts">
import { NCard, NTag } from 'naive-ui'
import { statusTags } from '../composables/use-table-select'
</script>

<template>
  <NCard
    title="📌 Статусы"
    size="huge"
    role="dialog"
    aria-modal="true"
    class="table-info-card"
  >
    <div class="card-content">
      <div v-for="[tag, options] of Object.entries(statusTags)" :key="tag">
        <NTag :type="options.variant" round :bordered="false">
          {{ options.name }}
        </NTag>
        - {{ options.description }}
      </div>
    </div>
  </NCard>
</template>
