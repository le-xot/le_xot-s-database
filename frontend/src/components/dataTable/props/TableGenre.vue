<script setup lang="ts">
import { GenresEnum } from '../../../types/api.ts';

defineProps<{ genre: GenresEnum }>();

const genreLabels: Record<GenresEnum, string> = {
  [GenresEnum.MOVIE]: 'Фильм',
  [GenresEnum.SERIES]: 'Сериал',
  [GenresEnum.ANIME]: 'Аниме',
  [GenresEnum.CARTOON]: 'Мультфильм',
};
</script>

<template>
  <div v-if="genre" :class="[genre.toLowerCase(), 'genre']">
    {{ genreLabels[genre] ?? 'ERROR' }}
  </div>
</template>

<style scoped>
.genre {
  text-align: center;
}

.anime {
  background-color: var(--color-red);
}

.movie {
  background-color: var(--color-green);
}

.cartoon {
  background-color: var(--color-yellow);
}

.series {
  background-color: var(--color-blue);
}
</style>
