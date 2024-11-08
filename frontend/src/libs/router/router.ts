import { createRouter, createWebHistory } from 'vue-router'
import { ROUTER_PATHS } from './router-paths'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: ROUTER_PATHS.home,
      component: () => import('@src/layout/home/layout-home.vue'),
      children: [
        {
          path: ROUTER_PATHS.home,
          component: () => import('@src/pages/home/home.vue'),
        },
      ],
    },
    {
      path: ROUTER_PATHS.db,
      component: () => import('@src/layout/db/layout-database.vue'),
      redirect: { path: ROUTER_PATHS.dbQueue },
      children: [
        {
          path: ROUTER_PATHS.dbQueue,
          component: () => import('@src/pages/queue/queue.vue'),
        },
        {
          path: ROUTER_PATHS.dbVideos,
          component: () => import('@src/pages/videos/videos.vue'),
        },
        {
          path: ROUTER_PATHS.dbGames,
          component: () => import('@src/pages/games/games.vue'),
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      redirect: ROUTER_PATHS.home,
    },
  ],
})
