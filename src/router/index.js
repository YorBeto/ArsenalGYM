import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Loginview from '@/views/loginview.vue'
import ProductosInicio from '@/views/ProductosInicioView.vue'
import InbodyView from '@/views/InbodyView.vue'
import AdminInicioView from '@/views/AdminInicioView.vue'
import RegistroView from '@/views/RegistroView.vue'
import AdminsociosView from '@/views/AdminsociosView.vue'
import AdminCitasView from '@/views/AdminCitasView.vue'
import AdminProductosView from '@/views/AdminProductosView.vue'
import PostcompraView from '@/views/PostcompraView.vue'
import AdminClientesView from '@/views/AdminClientesView.vue'
import PerfilUsuarioView from '@/views/PerfilUsuarioView.vue'
import AdminAgregarProductoView from '@/views/AdminAgregarProductoView.vue'



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
    },
    {
      path: '/Registro',
      name: 'Registro',
      component: RegistroView
    },
    {
      path: '/socios',
      name: 'socios',
      component: AdminsociosView
    },
    {
      path: '/citas',
      name: 'citas',
      component: AdminCitasView
    },
    {
      path: '/adminproductos',
      name: 'adminproductos',
      component: AdminProductosView
    },
    {
      path: '/agregarproductos',
      name: 'agregarproductos',
      component: AdminAgregarProductoView
    },
    {
      path: '/editarproductos',
      name: 'editarproductos',
      component: AdminEditarProductoView
    },
    {

      path: '/clientes',
      name: 'clientes',
      component: AdminClientesView
    },
    {
      path: '/postcompra',
      name: 'postcompra',
      component: PostcompraView
    },
    {
      path: '/perfil',
      name: 'perfilcliente',
      component: PerfilUsuarioView
    },
    {
      path: '/clienteInicio',
      name: 'clienteinicio',
      component: InicioClienteView
    },
    {
      path: '/PerfilSocio',
      name: 'perfilsocios',
      component: PerfilSocioView
    }
  ]
})

export default router