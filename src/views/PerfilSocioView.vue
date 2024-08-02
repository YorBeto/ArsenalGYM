<template>
  <v-app>
    <div class="page-container">
      <barra-nav></barra-nav>
      <barra-lat-socio></barra-lat-socio>
      <v-container class="d-flex flex-column justify-space-between fill-height">
        <v-btn class="close-button" @click="cerrarSesion">Cerrar sesión</v-btn>
        <v-btn class="back-button" @click="regresar">Regresar</v-btn>
      </v-container>
    </div>
  </v-app>
</template>

<script setup>
import BarraNav from '@/components/barraNav.vue';
import BarraLatSocio from '@/components/BarraLatSocio.vue';

const cerrarSesion = () => {
  alert('Cerrar sesión');
};

const regresar = () => {
  alert('Regresar');
};
</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.close-button, .back-button {
  width: 200px; /* Ancho de los botones */
  margin: 10px auto; /* Centra los botones horizontalmente */
}

.close-button {
  position: fixed;
  top: 10px;
  right: 10px;
  background-color: #ffffff; 
  color: black; 
}

.back-button {
  position: fixed;
  bottom: 10px;
  right: 10px;
  background-color: #0931b4;
  color: white;
}

.fill-height {
  height: 100%; 
}

.v-container {
  padding: 0; 
}
</style>
