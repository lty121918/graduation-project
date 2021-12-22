// router/index.js
import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '@/views/Index/index.vue'
import Login from '@/views/Login/index.vue'
const router = createRouter({
  history: createWebHashHistory(), // hash 模式
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      name:Login,
      path: '/login',
      component: Login
    }
  ]
})

export default router