<template>
  <div>
    <aside class="sidebar">
      <v-btn 
        class="botones" 
        @mouseover="activarColorGris('inbody')" 
        @mouseleave="restaurarColorboton('inbody')" 
        :color="coloresBotones1.inbody"
        @click="navegar('inbody')"
      >InBody</v-btn>
      <v-btn 
        class="botones" 
        @mouseover="activarColorGris('rutinas')" 
        @mouseleave="restaurarColorboton('rutinas')" 
        :color="coloresBotones1.rutinas"
        @click="navegar('rutinas')"
      >Rutinas</v-btn>
      <v-btn 
        class="botones" 
        @mouseover="activarColorGris('novedades')" 
        @mouseleave="restaurarColorboton('novedades')" 
        :color="coloresBotones1.novedades"
        @click="navegar('novedades')"
      >Novedades</v-btn>
      <v-btn 
        class="botones" 
        @mouseover="activarColorGris('membresia')" 
        @mouseleave="restaurarColorboton('membresia')" 
        :color="coloresBotones1.membresia"
        @click="navegar('membresia')"
      >Membresía</v-btn>
      <v-btn 
        class="botones" 
        @mouseover="activarColorGris('clases')" 
        @mouseleave="restaurarColorboton('clases')" 
        :color="coloresBotones1.clases"
        @click="navegar('clases')"
      >Clases</v-btn>
      <v-btn 
        class="botones" 
        @mouseover="activarColorGris('historial')" 
        @mouseleave="restaurarColorboton('historial')" 
        :color="coloresBotones1.historial"
        @click="navegar('historial')"
      >Historial</v-btn>
      
      <div class="spacer"></div>
      
      <v-btn class="botones cerrar-sesion" @click="cerrarSesion">Cerrar sesión</v-btn>
    </aside>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const coloresBotones1 = ref({
  clientes: 'white',
  inbody: 'white',
  rutinas: 'white',
  novedades: 'white',
  membresia: 'white',
  clases: 'white',
  historial: 'white',
});

function activarColorGris(boton) {
  coloresBotones1.value[boton] = 'grey';
}

function restaurarColorboton(boton) {
  coloresBotones1.value[boton] = 'white';
}

function navegar(ruta) {
  router.push(`/${ruta}`);
}

function cerrarSesion() {
  // Lógica para cerrar sesión
}
</script>

<style scoped>
.sidebar {
  width: 200px;
  height: 100vh;
  padding: 20px;
  background: linear-gradient(to right, black, red);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.botones {
  height: 40px;
  width: 180px;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 10px;
  text-align: left;
  padding-left: 10px;
  text-transform: capitalize;
  background-color: white;
  border-color: white;
  color: black;
}

.botones:hover {
  background-color: grey !important;
  color: white !important;
}

.spacer {
  flex-grow: 1;
}

.cerrar-sesion {
  margin-top: auto;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}
</style>
