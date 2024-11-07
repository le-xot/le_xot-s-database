import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@src/layout/home/layout-home.vue'),
      children: [
        {
          path: '/',
          component: () => import('@src/pages/home.vue'),
        },
      ],
    },
    {
      path: '/db',
      component: () => import('@src/layout/db/layout-database.vue'),
      children: [
        {
          path: '/db/queue',
          alias: '/db',
          component: () => import('@src/pages/table-queue.vue'),
        },
        {
          path: '/db/videos',
          component: () => import('@src/pages/table-videos.vue'),
        },
        {
          path: '/db/games',
          component: () => import('@src/pages/table-games.vue'),
        },
      ],
    },
  ],
})
