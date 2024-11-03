import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/db',
      component: () => import('@src/components/body/queue/queue.vue'),
    },
    {
      path: '/db/queue',
      component: () => import('@src/components/body/queue/queue.vue'),
    },
    {
      path: '/db/videos',
      component: () => import('@src/components/body/videos/videos.vue'),
    },
    {
      path: '/db/games',
      component: () => import('@src/components/body/games/games.vue'),
    },
  ],
})
