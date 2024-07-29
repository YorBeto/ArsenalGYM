<template>
    <v-app>
      <barraNav></barraNav>
      
        <Barralateralcliente></Barralateralcliente>
        <v-container class="d-flex flex-column justify-space-between fill-height">
          <v-btn class="close-button" @click="cerrarSesion">Cerrar sesión</v-btn>
          <v-btn class="back-button" @click="regresar">Regresar</v-btn>
      </v-container>
    </v-app>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import barraNav from './components/barraNav.vue';
  import Barralateralcliente from './components/Barralateralcliente.vue';
  
  const cerrarSesion = () => {
    alert('Cerrar sesión');
  };
  
  const regresar = () => {
    alert('Regresar');
  };
  </script>
  
  <style scoped>
  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #ffffff; 
    color: white; 
  }
  
  .back-button {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background-color: #0931b4;
    color: white;
  }
  
  .fill-height {
    height: 100vh; 
  }
  
  .v-container {
    padding: 0; 
  }
  </style>
  