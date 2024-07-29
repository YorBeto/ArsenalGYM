<template>
  <v-app class="fondo">
    <BarraNav></BarraNav>
    <v-main class="fondo">
      <v-container class="fill-height d-flex flex-column justify-center align-center">
        <div class="text-center mb-4">
          <h1>Conoce nuestras novedades</h1>
        </div>
        <v-card class="carousel-card">
          <v-carousel class="carousel-container" hide-delimiter-background>
            <v-carousel-item v-for="(item, i) in items" :key="i">
              <v-row class="d-flex justify-center align-center fill-height">
                <v-col cols="5">       
                  <v-img :src="item.image" alt="Imagen"></v-img>
                </v-col>
                <v-col cols="5" class="d-flex align-center">
                  <div class="text-center"><h1>{{item.titulo}}</h1>
                    <br>
                    {{ item.text }}</div>
                </v-col>
              </v-row>
            </v-carousel-item>
          </v-carousel>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';
import BarraNav from './components/BarraNav.vue';

const items = ref([
  { image: '/inbody.webp',text: 'Conoce nuestra maquina diseñada para evaluar tus estándares, para guiarte y demostrar tu seguimiento.', titulo: 'InBody' },
  { image: '/arsenals.png', text: 'Nos enfocamos en fomentar un ambiente sano, donde nadie se sienta excluido y supere sus limites.', titulo: 'Nuestro Equipo'},
  { image: '/arsenal.png', text: 'Suplementos dietéticos que pueden ser utilizados para apoyar la salud muscular, mejorar el rednimiento deportivo o complementar la dieta.', titulo: 'Suplementos' },
  { image: '/equipo.png', text: 'Todo el equipamiento necesario para tus rutinas, lo tienes en Arsenal' , titulo: 'Maquinas Exclusivas'},
]);

</script>

<style>
.my-logo {
  max-width: 50px;
  margin-right: 10px;
}
.fill-height {
  height: 100%;
}
.carousel-container {
  max-width: 80%; /* Ajusta el ancho máximo del carrusel */
}
.text-center {
  text-align: center;
}
.fondo {
  background-color: rgb(243, 243, 250);
}
.carousel-card {
  width: 80%;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.mb-4 {
  margin-bottom: 1.5rem;
}
</style>
