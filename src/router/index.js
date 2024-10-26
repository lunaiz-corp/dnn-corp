import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about/ci',
      name: 'CI',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/about/ci.vue')
    },
    {
      path: '/about/director',
      name: 'Director',
      component: () => import('../views/about/director.vue')
    },
    {
      path: '/media/notice',
      name: 'Notice',
      component: () => import('../views/media/notice.vue')
    },
    {
      path: '/media/pr',
      name: 'Press Release',
      component: () => import('../views/media/pr.vue')
    },
    {
      path: '/partner',
      name: 'Partner',
      component: () => import('../views/partner.vue')
    },
    {
      path: '/media/notices/:id',
      name: 'NoticeDetail',
      component: () => import('../views/media/noticeView.vue')
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
