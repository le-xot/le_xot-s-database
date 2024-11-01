import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/db',
      component: () => import('../src/pages/queue.vue'),
    },
    {
      path: '/db/queue',
      component: () => import('../src/pages/queue.vue'),
    },
    {
      path: '/db/videos',
      component: () => import('../src/pages/videos.vue'),
    },
    {
      path: '/db/games',
      component: () => import('../src/pages/games.vue'),
    },
  ],
})
