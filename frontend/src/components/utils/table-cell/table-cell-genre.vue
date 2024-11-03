<script setup lang="ts">
import { GenresEnum } from '@src/api.ts'
import { NTag } from 'naive-ui'

defineProps<{ genre: GenresEnum }>()

const genreLabels: Record<
  GenresEnum,
  {
    name: string
    variant: 'default' | 'error' | 'primary' | 'info' | 'success' | 'warning'
  }
> = {
  [GenresEnum.MOVIE]: { name: 'Фильм', variant: 'success' },
  [GenresEnum.SERIES]: { name: 'Сериал', variant: 'info' },
  [GenresEnum.ANIME]: { name: 'Аниме', variant: 'error' },
  [GenresEnum.CARTOON]: { name: 'Мультфильм', variant: 'warning' },
}
</script>

<template>
  <div class="table-genre">
    <NTag
      v-if="genre"
      class="table-genre-tag"
      :type="genreLabels[genre].variant"
      round
      :bordered="false"
    >
      {{ genreLabels[genre].name }}
    </NTag>
  </div>
</template>

<style scoped>
.table-genre {
  display: flex;
  justify-content: center;
  align-items: center;
}

.table-genre-tag {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 125px;
}
</style>
