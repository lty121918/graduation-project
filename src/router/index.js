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
            import('../views/stock/index.vue')
    },
    {
        path: '/article/:id',
        name: 'Article',
        component: () =>
            import('../views/article/index.vue')
    },
    {
        path: '/userarticle/:id',
        name: 'Userarticle',
        component: () =>
            import('../views/userarticle/index.vue')
    },
    {
        path: '/create',
        name: 'Create',
        component: () =>
            import('../views/createArtcle/index.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router





let obj = {
    name: 'zs',
    age: 18,
    arr: {
        name: 'zs'
    }
}

