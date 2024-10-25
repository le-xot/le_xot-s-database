import { createGlobalState } from '@vueuse/core';
import { computed, onMounted, ref } from 'vue';
import { useApi } from './useApi.ts';
import { StatusesEnum, VideoEntity } from '../types/api.ts';

export const useVideos = createGlobalState(() => {
  const api = useApi();
  const videos = ref<VideoEntity[]>([]);

  onMounted(async () => {
    if (videos.value.length) return;
    try {
      const { data } = await api.videos.videoControllerGetAllVideos();
      videos.value = data;
    } catch {
      console.log('ERROR');
    }
  });

  const videosQueue = computed(() => {
    return videos.value.filter(
      (video) =>
        video.status === StatusesEnum.QUEUE ||
        video.status === StatusesEnum.PROGRESS,
    );
  });

  return { videos, videosQueue };
});
