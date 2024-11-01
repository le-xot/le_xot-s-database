<script setup lang="ts">
import { GenresEnum } from '../../../types/api.ts';
import { NTag } from 'naive-ui';

defineProps<{ genre: GenresEnum }>();

const genreLabels: Record<
  GenresEnum,
  {
    name: string;
    variant: 'default' | 'error' | 'primary' | 'info' | 'success' | 'warning';
  }
> = {
  [GenresEnum.MOVIE]: { name: 'Фильм', variant: 'success' },
  [GenresEnum.SERIES]: { name: 'Сериал', variant: 'info' },
  [GenresEnum.ANIME]: { name: 'Аниме', variant: 'error' },
  [GenresEnum.CARTOON]: { name: 'Мультфильм', variant: 'warning' },
};
</script>

<template>
  <n-tag
    style="
      display: flex;
      align-items: center;
      justify-content: center;
      width: 125px;
    "
    :type="genreLabels[genre].variant"
    v-if="genre"
    round
    :bordered="false"
  >
    {{ genreLabels[genre].name }}
  </n-tag>
</template>
