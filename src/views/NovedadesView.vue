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
                    <div class="text-center">{{ item.text }}</div>
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
    { image: '/inbody.webp', text: 'Texto 1' },
    { image: '/prote2.png', text: 'Texto 2' },
    { image: '/arsenal.png', text: 'Texto 3' },
    { image: '/arsenals.png', text: 'Texto 4' },
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
    max-width: 80%; 
  }
  .text-center {
    text-align: center;
  }
  .fondo {
    background-color: rgb(3, 0, 207);
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
  