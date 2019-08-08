import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@views/home/home.vue'),
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('@views/detail/detail.vue')
    }
  ]
})
