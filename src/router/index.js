import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/01/:id',
    name: 'test-01',
    component: () => import('../views/test-01.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
