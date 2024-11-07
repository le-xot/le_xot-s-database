import { useMutation, useQuery } from '@pinia/colada'
import { useApi } from '@src/composables/use-api'
import { PatchVideoDTO, StatusesEnum } from '@src/libs/api'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { computed } from 'vue'

export const VIDEOS_QUERY_KEY = 'videos'

export const useVideos = defineStore('videos/use-videos', () => {
  const api = useApi()

  const {
    isLoading,
    data: videos,
    refetch: refetchVideos,
  } = useQuery({
    key: [VIDEOS_QUERY_KEY],
    query: async () => {
      const { data } = await api.videos.videoControllerGetAllVideos()
      return data
    },
  })

  const videosQueue = computed(() => {
    if (!videos.value) return []
    return videos.value.filter((video) => {
      return video.status === StatusesEnum.QUEUE
        || video.status === StatusesEnum.PROGRESS
    })
  })

  const { mutateAsync: updateVideo } = useMutation({
    key: [VIDEOS_QUERY_KEY, 'update'],
    mutation: ({ id, data }: { id: number, data: PatchVideoDTO }) => {
      return api.videos.videoControllerPatchVideo(id, data)
    },
    onSuccess: () => refetchVideos(),
  })

  const { mutateAsync: deleteVideo } = useMutation({
    key: [VIDEOS_QUERY_KEY, 'delete'],
    mutation: (id: number) => {
      return api.videos.videoControllerDeleteVideo(id)
    },
    onSuccess: () => refetchVideos(),
  })

  const { mutateAsync: createVideo } = useMutation({
    key: [VIDEOS_QUERY_KEY, 'create'],
    mutation: async () => {
      return await api.videos.videoControllerCreateVideo({})
    },
    onSuccess: () => refetchVideos(),
  })

  return {
    isLoading,
    videos,
    videosQueue,
    refetchVideos,
    updateVideo,
    deleteVideo,
    createVideo,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useVideos, import.meta.hot))
}
