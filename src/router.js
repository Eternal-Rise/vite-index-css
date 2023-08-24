import { createRouter } from 'vue-router';

export const router = createRouter({
  routes: [
    {
      name: 'index',
      path: '/',
      component: () => import('./views/Home.vue'),
    },
    {
      name: 'login',
      path: '/login',
      component: () => import('./views/Login.vue'),
    },
  ],
});
