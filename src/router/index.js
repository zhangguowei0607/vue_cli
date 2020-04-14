import Vue from 'vue'
import VueRouter from 'vue-router'
import Footer from '@/components/footer.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    components: {
      default: () => import('@/views/home/index'),
      footer: Footer
    }
  },
  {
    path: '/kind',
    name: 'kind',
    components: {
      default: () => import('@/views/kind/index'),
      footer: Footer
    }
  },
  {
    path: '/cart',
    name: 'cart',
    components: {
      default: () => import('@/views/cart/index'),
      footer: Footer
    }
  },
  {
    path: '/user',
    name: 'user',
    components: {
      default: () => import('@/views/user/index'),
      footer: Footer
    }
  },
  {
    path: '/login',
    name: 'login',
    components: {
      default: () => import('@/views/login/index')
    }
  },
  {
    path: '*',
    name: 'notfound',
    component: () => import('@/views/notfound/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
