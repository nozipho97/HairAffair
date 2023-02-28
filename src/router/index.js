import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import ProductsView from '../views/ProductsView.vue'
import LoginView from '../views/LoginView.vue'
import ContactView from '../views/ContactView.vue'





const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Admin',
    name: 'admin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminView.vue')
  },
  {
    path: '/Register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/Products',
    name: 'products',
    component:ProductsView
  },
  {
    path: '/Contact',
    name: 'contact',
    component:ContactView
  },
  {
    path: '/Login',
    name: 'login',
    component:LoginView
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
