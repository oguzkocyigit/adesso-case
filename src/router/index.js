import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/components/Home/Home'),
    },
    {
      path: '/units',
      name: 'Units',
      component: () => import('@/components/Units/Units'),
    },
    {
      path: '/unitDetail/:id',
      name: 'UnitDetail',
      component: () => import('@/components/Units/UnitDetail'),
      props: true,
    }
  ]
})