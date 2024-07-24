<template>
    <div>
        <aside class="sidebar">
        <v-btn class="botones" @mouseover="activarColorGris()" @mouseleave="restaurarColorboton()" :color="coloresBotones1">Clientes</v-btn>
        <v-btn class="botones" @mouseover="activarColorGris()" @mouseleave="restaurarColorboton()" :color="coloresBotones1">Socios</v-btn>
        <v-btn class="botones" @mouseover="activarColorGris()" @mouseleave="restaurarColorboton()" :color="coloresBotones1">Citas</v-btn>
        <v-btn class="botones" @mouseover="activarColorGris()" @mouseleave="restaurarColorboton()" :color="coloresBotones1">Productos</v-btn>
        <v-btn class="botones" @mouseover="activarColorGris()" @mouseleave="restaurarColorboton()" :color="coloresBotones1">Avisos</v-btn>
        <v-btn class="botones" @mousever="activarRojo()" @mouseleave="restaurarRojo()" :color="colorSalir">Salir</v-btn>
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

const colorSalir = ref('white'); // rojo

function activarRojo() {
  colorSalir.value = 'red';
}

function restaurarRojo() {
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
  background-color: white;
  border-color: white;
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

.botones:hover {
  background-color: grey !important;
  color: white !important;
}
</style>