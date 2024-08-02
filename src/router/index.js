import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Loginview from '@/views/loginview.vue'
import ProductosInicio from '@/views/ProductosInicioView.vue'
import InbodyView from '@/views/InbodyView.vue'
import AdminInicioView from '@/views/AdminInicioView.vue'
import RegistroView from '@/views/RegistroView.vue'
import AdminsociosView from '@/views/AdminsociosView.vue'
import AdminCitasView from '@/views/AdminCitasView.vue'
import PostcompraView from '@/views/PostcompraView.vue'
import AdminClientesView from '@/views/AdminClientesView.vue'
import PerfilUsuarioView from '@/views/PerfilUsuarioView.vue'
import AdminAgregarProductoView from '@/views/AdminAgregarProductoView.vue'
import AdminEditarProductoView from '@/views/AdminEditarProductoView.vue'
import PerfilSocioView from '@/views/PerfilSocioView.vue'
import AdminProductosView from '@/views/AdminProductosView.vue'
import BicepsView from '@/views/BicepsView.vue'
import TricepView from '@/views/TricepView.vue'
import EspaldaView from '@/views/EspaldaView.vue'
import HombroView from '@/views/HombroView.vue'
import PechoView from '@/views/PechoView.vue'
import PernaView from '@/views/PernaView.vue'



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
      path: '/perfilsocio',
      name: 'perfilsocio',
      component: PerfilSocioView
    }, 
    {
      path: '/bicep',
      name: 'bicep',
      component: BicepsView,
    },
    {
      path: '/tricep',
      name: 'tricep',
      component: TricepView,
    },
    {
      path: '/espalda',
      name: 'espalda',
      component: EspaldaView,
    },
    {
      path: '/hombro',
      name: 'hombro',
      component: HombroView,
    },
    {
      path: '/pecho',
      name: 'pecho',
      component: PechoView,
    },
    {
      path: '/pierna',
      name: 'pierna',
      component: PernaView,
    },
  ]
})

export default router