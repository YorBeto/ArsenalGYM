<template>
    <div>
      <aside class="sidebar">
        <v-btn
          class="botones"
          @mouseover="activarColorGris()"
          @mouseleave="restaurarColorboton()"
          :color="coloresBotonesCW"
          >Mi informacion</v-btn
        >
        <v-btn
          class="botones"
          @mouseover="activarColorGris()"
          @mouseleave="restaurarColorboton()"
          :color="coloresBotonesCE"
          >Mis compras</v-btn
        >
        <v-btn
          class="botones"
          @mouseover="activarColorGris()"
          @mouseleave="restaurarColorboton()"
          :color="coloresBotonesCE"
          >Inbody</v-btn
        >
        <router-link to="/"><v-btn
          class="botonSalirC"
          @mouseover="activarColorR()"
          @mouseleave="restaurarColorR()"
          :color="colorR"
          >Salir</v-btn
        ></router-link>
      </aside>
    </div>
  </template>
  
<script setup>
import { ref } from 'vue'

const coloresBotonesCE = {
  info: 'grey',
  compras: 'grey',
  inbody: 'grey'
};
  
function activarColorGris() {
  coloresBotonesCE.value = 'grey'
}

function restaurarColorboton() {
  coloresBotonesCE.value = 'white'
}

const colorR = ref('white')

function activarColorR() {
  colorR.value = 'red'
}

function restaurarColorR() {
  colorR.value = 'white'
}
</script>
  
  <style scoped>
  .botones, .botonSalirC {
    height: 40px;
    width: 180px;
    font-size: 22px;
    font-family: Arial, Helvetica, sans-serif;
    color: black;
    margin-bottom: 5px;
    text-transform: capitalize;
    background-color: white;
    border: 1px solid white; /* Adjust border if needed */
    display: flex; /* Use Flexbox for alignment */
    align-items: center; /* Center text vertically */
    justify-content: center; /* Align text to the left */
    padding-left: 10px;
    border-radius: 5px;
    letter-spacing: 1px; 
  }
  
  .botones:hover {
    background-color: grey !important;
    border-color: grey;
    color: white !important;
  }
  
  .botonSalirC:hover {
    background-color: red !important;
    border-color: red;
    color: white !important;
  }
  </style>
  