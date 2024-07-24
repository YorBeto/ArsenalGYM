<template>
    <div>
        <aside class="sidebar">
        <v-btn class="botones" @mouseover="activarColorGris()" @mouseleave="restaurarColorboton()" :color="coloresBotones1">Clientes</v-btn>
       <router-link to="socios" > <v-btn class="botones">Socios</v-btn> </router-link>
        <v-btn class="botones">Citas</v-btn>
        <v-btn class="botones">Productos</v-btn>
        <v-btn class="botones">Avisos</v-btn>
        <router-link to="/"><v-btn class="botonSalir" @mouseover="activarColorRojo()" @mouseleave="restaurarColor()" :color="colorSalir">Salir</v-btn> </router-link>
      </aside>
    </div>
</template>


<script setup>
import { ref } from 'vue';

const coloresBotones1 = {
  clientes: 'grey',
  socios: 'grey',
  citas: 'grey',
  productos: 'grey',
  avisos: 'grey'
};

const coloresBoton = ref('grey');

function activarColorGris() {
  coloresBoton.value = 'grey';
}

function restaurarColorboton() {
  coloresBoton.value = 'white';
}

const colorSalir = ref('red');

function activarColorRojo() {
  colorSalir.value = 'red';
}

function restaurarColor() {
  colorSalir.value = 'white';
}
</script>

<style scoped>
.botones {
  height: 40px;
  width: 180px;
  font-size: 25px;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 5px;
  text-align: left;
  padding-left: 10px;
  text-transform: capitalize;
}

.botonSalir {
  height: 40px;
  width: 180px;
  font-size: 25px;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 5px;
  text-align: left;
  padding-left: 10px;
  background-color: red;
  border-color: red;
  color: white;
  text-transform: capitalize;
}

.botonSalir:hover {
  background-color: red !important;
  color: white !important;
}

.botones:hover {
  background-color: grey !important;
  color: white !important;
}
</style>