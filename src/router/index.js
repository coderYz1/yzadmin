import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      component: () => import('@/views/main/index.vue')
    },
    {
      path: '/login',
      component: () => import('@/views/login/index.vue')
    }
  ]
})

router.beforeEach((to, from) => {
  if (!localStorage.getItem('token') && to.path !== '/login') {
    return '/login'
  }
})
export default router
