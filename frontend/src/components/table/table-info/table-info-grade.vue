<script setup lang="ts">
import { NCard, NTag } from 'naive-ui'
import { gradeTags } from '../composables/use-table-select'
</script>

<template>
  <NCard
    title="📜 Оценки"
    size="huge"
    role="dialog"
    aria-modal="true"
    class="table-info-card"
  >
    <div class="card-content">
      <h4>
        Если хотите обсудить оценку - милости прошу. Оценка не является финальной
        и может быть пересмотрена.
      </h4>
      <div v-for="[tag, options] of Object.entries(gradeTags)" :key="tag">
        <NTag :type="options.variant" round :bordered="false">
          {{ options.name }} {{ options.label }}
        </NTag>
        {{ options.description }}
      </div>
    </div>
  </NCard>
</template>
