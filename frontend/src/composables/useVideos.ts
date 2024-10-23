import { createGlobalState } from '@vueuse/core';
import { computed, onMounted, ref } from 'vue';
import { Genres, Grades, Statuses, Types } from '../utils/enums.ts';

export const useVideos = createGlobalState(() => {
  const videos = ref<Video[]>([]);

  onMounted(async () => {
    if (videos.value.length) return;
    try {
      const response = await fetch('http://localhost:3000/videos');
      if (!response.ok) {
        console.log('ERROR');
        return;
      }
      videos.value = await response.json();
    } catch {
      console.log('ERROR');
    }
  });

  const videosQueue = computed(() => {
    return videos.value.filter(
      (video) =>
        video.status === Statuses.QUEUE || video.status === Statuses.PROGRESS,
    );
  });

  return { videos, videosQueue };
});

export interface Video {
  id: number;
  title: string;
  person: { name: string };
  personId: number;
  type: Types;
  status: Statuses;
  genre: Genres;
  grade: Grades;
}
