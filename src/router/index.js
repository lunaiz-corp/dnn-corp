import { createRouter, createWebHistory } from "vue-router";
import { useHead } from '@vueuse/head';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
      meta: {
        title: 'DNN',
        ogTitle: 'lunaiz',
        ogDescription: 'our light illuminates your night.',
        ogImage: 'https://cdn.lunaiz.com/lunaiz_logo/lunaiz_logo.png',
      }
    },
    {
      path: "/about/company",
      name: "CIㅣDNN",
      component: () => import("../views/about/ci.vue"),
      meta: {
        title: 'CI | lunaiz.',
        ogTitle: 'CI | lunaiz',
        ogDescription: 'introducing our ci.',
        ogImage: 'https://cdn.lunaiz.com/lunaiz_logo/lunaiz_logo.png',
      }
    },
    {
      path: "/about/company",
      name: "기업 소개ㅣDNN",
      component: () => import("../views/about/company.vue"),
      meta: {
        title: '임원 | lunaiz.',
        ogTitle: '임원 | lunaiz',
        ogDescription: 'our leaders.',
        ogImage: 'https://cdn.lunaiz.com/lunaiz_logo/lunaiz_logo.png',
      }
    },
    {
      path: "/media/notice",
      name: "Notice",
      component: () => import("../views/media/notice.vue"),
      meta: {
        title: 'notice | lunaiz.',
        ogTitle: 'notice | lunaiz',
        ogDescription: 'check out our notice.',
        ogImage: 'https://cdn.lunaiz.com/lunaiz_logo/lunaiz_logo.png',
      }
    },
    {
      path: "/media/pr",
      name: "Press Release",
      component: () => import("../views/media/pr.vue"),
      meta: {
        title: 'press release | lunaiz.',
        ogTitle: 'press release | lunaiz',
        ogDescription: 'check out our press release.',
        ogImage: 'https://cdn.lunaiz.com/lunaiz_logo/lunaiz_logo.png',
      }
    },
    {
      path: "/announce",
      name: "공고ㅣDNN",
      component: () => import("../views/announce.vue"),
      meta: {
        title: 'partner | lunaiz.',
        ogTitle: 'partner | lunaiz',
        ogDescription: 'introducing our partners.',
      }
    },
    {
      path: "/media/notices/:id",
      name: "NoticeDetail",
      component: () => import("../views/media/noticeView.vue"),
    },
    {
      path: "/media/prs/:id",
      name: "PRDetail",
      component: () => import("../views/media/prView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/404",
    },
    {
      path: "/404",
      name: "404 Not Found",
      component: () => import("../views/404.vue"),
      meta: {
        title: '404 | lunaiz.',
        ogTitle: '404 | lunaiz',
        ogDescription: '404 Page Not Found.',
      }
    },
  ],
});

router.afterEach((to) => {
  const metaTags = to.meta;

  useHead({
      title: metaTags.title || 'lunaiz.',
      meta: [
          { property: 'og:title', content: metaTags.ogTitle || 'lunaiz.' },
          { property: 'og:description', content: metaTags.ogDescription || 'our light illunminates your night.' },
          { property: 'og:image', content: metaTags.ogImage || 'https://cdn.lunaiz.com/lunaiz_logo/lunaiz_logo.png' },
          { property: 'og:url', content: window.location.href }
      ]
  });
});

export default router;