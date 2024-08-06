<script setup>
import barraNav from '@/components/barraNav.vue';
import { ref } from 'vue';

const items = ref([
  { src: '/p1.jpg', alt: 'Image 1' },
  { src: '/p2.jpg', alt: 'Image 2' },
  { src: '/p3.jpg', alt: 'Image 3' }, 
  { src: '/p4.jpg', alt: 'Image 4' }, 
  { src: '/p5.jpg', alt: 'Image 5' },
]);
</script>

<template>
  <v-layout class="rounded rounded-md" style="background-color: #f4f4f4; min-height: 100vh;">
    <barraNav></barraNav>

    <v-main style="background: linear-gradient(to right, black, red); display: flex; flex-direction: column; align-items: center; padding: 20px;">
      <v-container fluid>
        <!-- Carousel -->
        <v-row class="mb-5">
          <v-col cols="12">
            <v-carousel class="carousel" cycle interval="5000" hide-delimiter-background>
              <v-carousel-item v-for="(item, i) in items" :key="i">
                <v-img :src="item.src" :alt="item.alt" class="carousel-image"></v-img>
              </v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>

        <v-row class="mb-5">
          <v-col cols="12">
            <v-card class="cartainfo d-flex flex-row">
              <!-- Texto -->
              <v-card-text class="d-flex align-center flex-grow-1">
                <div class="gym-text2">
                  <p>
                  En Arsenal tenemos todo lo que necesitas y mucho más para cada entrenamiento.
                  Tenemos nuevas áereas con mejores y aparatos más especializados para ayudarte a obtener los resultados que buscas.
                  </p>
                </div>
                 <!-- Imagen -->
              <v-img
                src="/inicioluz.jpeg"
                alt="inicio-image"
                class="imagen-inicio"
              ></v-img>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row> 
           
        <v-row class="mb-5">
          <v-col cols="12">
            <v-card class="cartainfo d-flex flex-row">
              <!-- Imagen -->
              <v-img
                src="/Avina.jpg"
                alt="Arsenal Image"
                class="imagen-avina"
              ></v-img>
              <!-- Texto -->
              <v-card-text class="d-flex align-center flex-grow-1">
                <div class="gym-text">
                  <p>
                    En Arsenal somos un gimnasio que busca el bienestar de nuestros socios como también superar sus límites. Ofrecemos variedad de equipo, instructores y también contamos con clases de crossfit.
                  </p>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- Visítanos Section -->
        <v-row class="mb-5">
          <v-col cols="12">
            <div class="visitanos-section">
              <h2>VISÍTANOS</h2>
              <div class="visitanos-content">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.8266233107443!2d-103.43089429999999!3d25.5441515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x868fdb933efabea1%3A0x4ff88cb25a0f6b13!2sGimnasio%20Arsenal%20Bosque!5e0!3m2!1ses!2smx!4v1721764484976!5m2!1ses!2smx" class="mapa-arsenal-gym" style="width: 100%; height: 450px; border: 0;" allowfullscreen="" loading="lazy"></iframe>
                <v-img src="/gymfuera.png" alt="Arsenal Gym" class="imagen-arsenal-gym"></v-img>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-layout>
</template>

<style scoped>

.cartainfo, .cartainfo2 {
  width: 100%;
  display: flex;
  flex-direction: row; 
  padding: 16px; 
}

.imagen-avina{
  flex: 1 1 40%; /* Permite que la imagen ocupe el 50% del ancho del card */
  margin-left: 95px;
}

.imagen-inicio{
  flex: 1 1 40%; /* Permite que la imagen ocupe el 50% del ancho del card */
  height: 490px;
  margin-left: 115px;
}

.gym-text {
  flex: 1 1 50%; /* Permite que el texto ocupe el 50% restante del card */
  padding: 16px; /* Espaciado alrededor del texto */
  box-sizing: border-box; /* Incluye el padding en el ancho total */
}

.gym-text2 {
  flex: 1 1 50%; /* Permite que el texto ocupe el 50% restante del card */
  padding: 16px; /* Espaciado alrededor del texto */
  box-sizing: border-box; /* Incluye el padding en el ancho total */
  margin-left: 100px
}

.carousel {
  width: 100%;
  height: 500px;
}

.carousel-image {
  object-fit: cover;
  width: 100%;
  height: 500px;
}

.imagen-gym {
  width: 100%;
  height: auto;
}

.inbody-section, .gym-section {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 100%;
  background-color: white;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
}

.imagen-inbody, .imagen-arsenal {
  width: 30%;
  height: 400px;
}

.boton-agendar {
  margin-top: 10px;
  background-color: #d32f2f;
  color: white;
}

.membresias-section {
  width: 100%;
  background-color: white;
  padding: 20px;
  margin-bottom: 20px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 10px;
}

.membresias-table table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  color: black;
}

.membresias-table th, .membresias-table td {
  border: 1px solid black;
  padding: 10px;
  color: white;
}

.membresias-table th {
  background: black;
}

.membresias-table td {
  background-color: white;
  color: black;
}

.visitanos-section {
  width: 100%;
  background-color: white;
  padding: 20px;
  text-align: center;
  border: 1px solid black;
  border-radius: 10px;
}

.visitanos-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

.mapa-arsenal-gym, .imagen-arsenal-gym {
  width: 58%;
  height: 450px;
}

</style>
