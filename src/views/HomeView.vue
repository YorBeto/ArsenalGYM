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

    <v-main style="background: linear-gradient(to right, black, red); padding: 20px;">
      <!-- Carousel -->
      <v-carousel class="mb-5" cycle interval="5000" hide-delimiter-background height="500px">
        <v-carousel-item v-for="(item, i) in items" :key="i">
          <v-img :src="item.src" :alt="item.alt" class="carousel-image"></v-img>
        </v-carousel-item>
      </v-carousel>

      <!-- InBody Section -->
      <v-container>
        <v-row class="mb-5" align="center">
          <v-col cols="12" md="6">
            <v-card>
              <v-card-title>EN ARSENAL NOS INTERESA TU SALUD</v-card-title>
              <v-card-subtitle>
                InBody es líder mundial en tecnología de análisis de composición corporal. A través de nuestros innovadores dispositivos, proporcionamos una evaluación precisa y detallada de los componentes del cuerpo humano, incluyendo masa muscular, grasa corporal, agua corporal total y mucho más. Nuestros equipos son utilizados por profesionales de la salud, entrenadores personales y centros de fitness para ayudar a individuos a comprender mejor su cuerpo y mejorar su bienestar.
              </v-card-subtitle>
              <v-card-subtitle>
                Conoce tu cuerpo con nuestro InBody, una máquina capaz de medir las características de tu cuerpo. Agenda tu cita para descubrir tus límites.
              </v-card-subtitle>
              <v-card-actions>
                <v-col cols="12" md="6">
            <v-img src="/INB270.png" alt="InBody Image" class="imagen-inbody"></v-img>
          </v-col>
                <router-link to="Inbody">
                  <v-btn class="boton-agendar">AGENDAR</v-btn>
                </router-link>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <!-- Gym Section -->
      <v-container>
        <v-row class="mb-5" align="center">
          <v-col cols="12" md="6">
            <v-img src="/Avina.jpg" alt="Arsenal Image" class="imagen-arsenal"></v-img>
          </v-col>
          <v-col cols="12" md="6">
            <v-card>
              <v-card-title>
                En Arsenal somos un gimnasio que busca el bienestar de nuestros socios como también superar sus límites.
              </v-card-title>
              <v-card-subtitle>
                Ofrecemos variedad de equipo, instructores y también contamos con clases de crossfit. Arsenal es un lugar especialmente diseñado y equipado para que acudas a realizar una actividad física en diversas intensidades. Nuestro propósito es que logres obtener los cambios que desees en tu cuerpo, que te sientas más seguro y así poder seguir buscando mejorar cada día más.
              </v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <!-- Memberships Section -->
      <v-container>
        <v-row class="mb-5">
          <v-col cols="12">
            <v-card>
              <v-card-title>Membresías</v-card-title>
              <v-card-subtitle>
                <v-simple-table>
                  <thead>
                    <tr>
                      <th></th>
                      <th>MENSUAL</th>
                      <th>SEMESTRAL</th>
                      <th>ANUAL</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>GYM</td>
                      <td>$700</td>
                      <td>$1,800</td>
                      <td>$7,460</td>
                    </tr>
                    <tr>
                      <td>CROSSFIT</td>
                      <td>$720</td>
                      <td>$1,920</td>
                      <td>$7,550</td>
                    </tr>
                  </tbody>
                </v-simple-table>
              </v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <!-- Visit Us Section -->
      <v-container>
        <v-row class="mb-5" align="center">
          <v-col cols="12" md="6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.8266233107443!2d-103.43089429999999!3d25.5441515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x868fdb933efabea1%3A0x4ff88cb25a0f6b13!2sGimnasio%20Arsenal%20Bosque!5e0!3m2!1ses!2smx!4v1721764484976!5m2!1ses!2smx" class="mapa-arsenal-gym"></iframe>
          </v-col>
          <v-col cols="12" md="6">
            <v-img src="/gymfuera.png" alt="Arsenal Gym" class="imagen-arsenal-gym"></v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-layout>
</template>

<style scoped>
.carousel-image {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.imagen-inbody, .imagen-arsenal {
  width: 100%;
  height: auto;
}

.boton-agendar {
  margin-top: 10px;
  background-color: #d32f2f;
  color: white;
}

.membresias-section, .visitanos-section {
  background-color: white;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
}

.membresias-table {
  width: 100%;
}

.membresias-table table {
  width: 100%;
  border-collapse: collapse;
}

.membresias-table th, .membresias-table td {
  border: 1px solid black;
  padding: 10px;
}

.membresias-table th {
  background: black;
  color: white;
}

.membresias-table td {
  background-color: white;
  color: black;
}

.visitanos-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.mapa-arsenal-gym, .imagen-arsenal-gym {
  width: 100%;
  height: auto;
}

@media (max-width: 900px) {
  .imagen-inbody{
    width: 80%; /* Ajusta el tamaño de las imágenes a un 80% del contenedor */
    height: 300px; /* Mantiene la proporción de la imagen */
  }

  }
</style>
