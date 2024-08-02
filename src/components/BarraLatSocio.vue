<template>
  <div class="container">
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
          @mouseover="activarColorR" @mouseleave="restaurarColorR()"
          @click="mostrarContenido('Bicep')"
        >Bicep</v-btn>
        <v-btn
          class="botonesR"
          @mouseover="activarColorR()" @mouseleave="restaurarColorR()"
          @click="mostrarContenido('Tricep')"
          :color="coloresBotonesR"
        >
          Tricep
        </v-btn>
        <v-btn
          class="botonesR"
          @mouseover="activarColorR()" @mouseleave="restaurarColorR()"
          @click="mostrarContenido('Espalda')"
          :color="coloresBotonesR"
        >
          Espalda
        </v-btn>
        <v-btn
          class="botonesR"
          @mouseover="activarColorR()" @mouseleave="restaurarColorR()"
          @click="mostrarContenido('Hombro')"
          :color="coloresBotonesR"
        >
          Hombro
        </v-btn>
        <v-btn
          class="botonesR"
          @mouseover="activarColorR()" @mouseleave="restaurarColorR()"
          @click="mostrarContenido('Pecho')"
          :color="coloresBotonesR"
        >
          Pecho
        </v-btn>
        <v-btn
          class="botonesR"
          @mouseover="activarColorR()" @mouseleave="restaurarColorR()"
          @click="mostrarContenido('Pierna')"
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

    <main>
      <!-- Aquí se renderizarán los componentes según la selección -->
      <component :is="currentComponent"></component>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Bicep from '@/views/BicepsView.vue';
import Tricep from '@/views/TricepView.vue';
import Espalda from '@/views/EspaldaView.vue';
import Hombro from '@/views/HombroView.vue';
import Pecho from '@/views/PechoView.vue';
import Pierna from '@/views/PernaView.vue';

// Estados
const colorBoton = ref('white');
const colorBotonR = ref('white');
const colorSalir = ref('white');
const coloresBotones1 = ref('white');
const coloresBotonesR = ref('white');
const showRutinas = ref(false);
const currentComponent = ref(null);

// Funciones
function toggleRutinas() {
  showRutinas.value = !showRutinas.value;
}

function mostrarContenido(componente) {
  const componentes = {
    'Bicep': Bicep,
    'Tricep': Tricep,
    'Espalda': Espalda,
    'Hombro': Hombro,
    'Pecho': Pecho,
    'Pierna': Pierna
  };
  currentComponent.value = componentes[componente] || null;
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
.container {
  display: flex;
}

.sidebar {
  width: 200px;
  height: 100%;
  padding: 20px;
  background: linear-gradient(to bottom, black, red);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky; /* Mantiene el sidebar fijo en su posición durante el scroll */
  top: 0; /* Alinea el sidebar al principio del contenedor */
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
  margin-top: 20px; /* Ajusta el margen superior para bajar los botones */
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
  margin-top: auto; /* Mueve el botón de cerrar sesión al final del sidebar */
}

.botones:hover {
  --color-boton: grey;
  color: white;
}

.rutinas {
  display: flex;
  flex-direction: column;
  align-items: center; 
  margin-top: 5px; /* Ajusta el margen superior para separar los botones de rutina del resto */
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
