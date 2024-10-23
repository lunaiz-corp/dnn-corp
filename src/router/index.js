import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/info/ci',
      name: 'CI',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ci.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: "/404"
    },
    {
      path: '/404',
      name: '404 Not Found',
      component: () => import('../views/404.vue')
    }
  ]
})

export default router
