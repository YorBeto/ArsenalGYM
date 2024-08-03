<template>
    <v-app>
      <BarraNavSocio></BarraNavSocio>
      
      <BarraLatSocio></BarraLatSocio>
        <v-container class="d-flex flex-column justify-space-between fill-height">
          <v-btn class="close-button" @click="cerrarSesion">Cerrar sesión</v-btn>
      </v-container>
    </v-app>
  </template>
  
  <script setup>
  

import BarraLatSocio from '@/components/BarraLatSocio.vue';
import BarraNavSocio from '@/components/BarraNavSocio.vue';
  
  const cerrarSesion = () => {
    alert('Cerrar sesión');
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
  