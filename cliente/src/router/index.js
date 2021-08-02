import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [

  {
    path:"/",
    name: "Home",
    component: () => import('@/layouts/Home.vue')

  },
  {
    path: "/AdvancedSearch",
    name: "AdvancedSearch",
    component: () => import('@/views/AdvancedSearch.vue')
  },
  {
    path:"/Login",
    name: "Login",
    component: () => import('@/views/Login.vue')
  },
  {
    path:"/Cart",
    name: "Cart",
    component: () =>import('@/components/Cart.vue')
  },
  {
    path:"/VistaLetra",
    name: "VistaLetra",
    props: true,
    component: () =>import('@/components/VistaLetra.vue')
  }
 
]

const router = new VueRouter({
  routes
})

export default router
