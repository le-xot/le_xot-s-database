import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/db',
      component: () => import('./pages/Queue.vue'),
    },
    {
      path: '/db/queue',
      component: () => import('./pages/Queue.vue'),
    },
    {
      path: '/db/videos',
      component: () => import('./pages/Videos.vue'),
    },
    {
      path: '/db/games',
      component: () => import('./pages/Games.vue'),
    },
  ],
});
