import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: () => import('../views/Home.vue') },
		{ path: '/:pathMatch(.*)*', component: () => import('../views/PageError.vue') }
  ],
});

export default router;
