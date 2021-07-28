import Vue from 'vue'
import VueRouter from 'vue-router'
import AdvancedSearch from "../views/AdvancedSearch.vue";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import VistaCart from "../views/VistaCart.vue";




Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/AdvancedSearch",
    name: "AdvancedSearch",
    component: AdvancedSearch
  },
  {
    path:"/Login",
    name: "Login",
    component: Login
  },
  {
    path:"/VistaCart",
    name: "VistaCart",
    component: VistaCart
  }
 
]

const router = new VueRouter({
  routes
})

export default router
