import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/db',
      component: () => import('./queue.vue'),
    },
    {
      path: '/db/queue',
      component: () => import('./queue.vue'),
    },
    {
      path: '/db/videos',
      component: () => import('./videos.vue'),
    },
    {
      path: '/db/games',
      component: () => import('./games.vue'),
    },
  ],
})
