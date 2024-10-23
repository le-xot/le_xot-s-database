import { createGlobalState } from '@vueuse/core';
import { computed, onMounted, ref } from 'vue';
import { Grades, Statuses, Types } from '../utils/enums.ts';

export const useGames = createGlobalState(() => {
  const games = ref<Game[]>([]);

  onMounted(async () => {
    if (games.value.length) return;
    try {
      const response = await fetch('http://localhost:3000/games');
      if (!response.ok) {
        console.log('ERROR');
        return;
      }
      games.value = await response.json();
    } catch {
      console.log('ERROR');
    }
  });

  const gamesQueue = computed(() => {
    return games.value.filter(
      (games) =>
        games.status === Statuses.QUEUE || games.status === Statuses.PROGRESS,
    );
  });

  return { games, gamesQueue };
});

export interface Game {
  id: number;
  title: string;
  person: { name: string };
  personId: number;
  type: Types;
  status: Statuses;
  grade: Grades;
}
