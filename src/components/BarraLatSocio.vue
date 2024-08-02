<template>
  <div>
    <aside class="sidebar">
      <v-btn
        class="botones"
        @mouseover="activarColorGris()" @mouseleave="restaurarColorboton()"
        :color="coloresBotones1"
      >Inbody</v-btn>
      <v-btn
        class="botones"
        @mouseover="activarColorGris()" @mouseleave="restaurarColorboton()"
        :color="coloresBotones1"
        @click="toggleRutinas"
      >Rutinas</v-btn>

      <!-- botones de rutina -->
      <div v-if="showRutinas" class="rutinas">
        <v-btn
          class="botonesR"
          @mouseover="activarColorR" @mouseleave="restaurarColorR"
        >Bicep</v-btn>
        <v-btn
          class="botonesR"
          @mouseover="activarColorR()" @mouseleave="restaurarColorR()"
          :color="coloresBotonesR"
        >
          Tricep
        </v-btn>
        <v-btn
          class="botonesR"
          @mouseover="activarColorR()" @mouseleave="restaurarColorR()"
          :color="coloresBotonesR"
        >
          Espalda
        </v-btn>
        <v-btn
          class="botonesR"
          @mouseover="activarColorR()" @mouseleave="restaurarColorR()"
          :color="coloresBotonesR"
        >
          Hombro
        </v-btn>
        <v-btn
          class="botonesR"
          @mouseover="activarColorR()" @mouseleave="restaurarColorR()"
          :color="coloresBotonesR"
        >
          Pecho
        </v-btn>
        <v-btn
          class="botonesR"
          @mouseover="activarColorR()" @mouseleave="restaurarColorR()"
          :color="coloresBotonesR"
        >
          Pierna
        </v-btn>
      </div>
      <v-btn
        class="botones"
        @mouseover="activarColorGris()"
        @mouseleave="restaurarColorboton()"
        :color="coloresBotones1"
      >
        Novedades
      </v-btn>
      <v-btn
        class="botones"
        @mouseover="activarColorGris()"
        @mouseleave="restaurarColorboton()"
        :color="coloresBotones1"
      >
        Membresia
      </v-btn>
      <v-btn
        class="botones"
        @mouseover="activarColorGris()"
        @mouseleave="restaurarColorboton()"
        :color="coloresBotones1"
      >
        Clases
      </v-btn>
      <v-btn
        class="botones"
        @mouseover="activarColorGris()"
        @mouseleave="restaurarColorboton()"
        :color="coloresBotones1"
      >
        Historial
      </v-btn>
      <v-btn
        class="botonSalir"
        @mouseover="activarRojo()"
        @mouseleave="restaurarRojo()"
        :color="colorSalir"
      >
        Cerrar Sesión
      </v-btn>
    </aside>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const colorBoton = ref('white');
const colorBotonR = ref('white');
const colorSalir = ref('white');

// Estado de visibilidad para los botones de rutinas
const showRutinas = ref(false);

function toggleRutinas() {
  showRutinas.value = !showRutinas.value;
}

function activarColorGris() {
  colorBoton.value = 'grey';
}

function restaurarColorboton() {
  colorBoton.value = 'white';
}

function activarColorR() {
  colorBotonR.value = 'grey';
}

function restaurarColorR() {
  colorBotonR.value = 'white';
}

function activarRojo() {
  colorSalir.value = 'red';
}

function restaurarRojo() {
  colorSalir.value = 'white';
}
</script>


<style scoped>
.sidebar {
  width: 200px;
  height: 100vh;
  padding: 20px;
  background: linear-gradient(to bottom, black, red);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 65px;
}

.botones {
  height: 40px;
  width: 180px;
  font-size: 22px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: left;
  padding-left: 10px;
  text-transform: capitalize;
  background-color: var(--color-boton, white);
  border-color: var(--color-boton, white);
  letter-spacing: 1px;
  transition: background-color 0.3s, color 0.3s;
}

.botonSalir {
  height: 40px;
  width: 180px;
  font-size: 22px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: left;
  padding-left: 10px;
  background-color: var(--color-salir, red);
  border-color: var(--color-salir, red);
  color: grey;
  text-transform: capitalize;
  letter-spacing: 1px;
  font-weight: normal;
  transition: background-color 0.3s, color 0.3s;
}

.botones:hover {
  --color-boton: grey;
  color: white;
}

.rutinas {
  display: flex;
  flex-direction: column;
  align-items: center; 
}

.botonesR {
  height: 100px;
  width: 135px;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: left;
  padding-left: 10px;
  text-transform: capitalize;
  background-color: var(--color-botonR, white);
  border-color: var(--color-botonR, white);
  letter-spacing: 1px;
  margin-bottom: 6px;
  
}

.botonesR:hover {
  --color-botonR: grey;
  color: white;
}
</style>

