import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index/index.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/stock/:id',
        name: 'Stock',
        component: () =>
            import ('../views/stock/index.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router