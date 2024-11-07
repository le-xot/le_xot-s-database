import { PatchVideoDTO, StatusesEnum, VideoEntity } from '@src/libs/api.ts'
import { createGlobalState } from '@vueuse/core'
import { computed, onMounted, ref } from 'vue'
import { useApi } from './use-api.ts'

export const useVideos = createGlobalState(() => {
  const api = useApi()
  const videos = ref<VideoEntity[]>([])
  const isLoading = ref(true)

  async function fetchVideos() {
    isLoading.value = true

    try {
      const { data } = await api.videos.videoControllerGetAllVideos()
      videos.value = data
    } catch {
      console.log('ERROR')
    } finally {
      isLoading.value = false
    }
  }

  onMounted(async () => {
    if (videos.value.length)
      return
    await fetchVideos()
  })

  const videosQueue = computed(() => {
    return videos.value.filter(
      video =>
        video.status === StatusesEnum.QUEUE
        || video.status === StatusesEnum.PROGRESS,
    )
  })

  async function update(id: number, data: PatchVideoDTO) {
    await api.videos.videoControllerPatchVideo(id, data)
    await fetchVideos()
  }

  return { videos, videosQueue, update, isLoading }
})
