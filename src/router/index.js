import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Loginview from '@/views/loginview.vue'
import ProductosInicio from '@/views/ProductosInicioView.vue'
import InbodyView from '@/views/InbodyView.vue'
import AdminInicioView from '@/views/AdminInicioView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
   
    {
      path: '/Login',
      name: 'Login',
      component: Loginview
    },

    {
      path: '/Producto',
      name: 'Producto',
      component: ProductosInicio
    },
    {
      path: '/Inbody',
      name: 'Inbody',
      component: InbodyView
    },
    {
      path: '/AdminInicio',
      name: 'AdminInicio',
      component: AdminInicioView
    }

   
  ]
})

export default router
