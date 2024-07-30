<template>
    <v-app id="inspire">
      <v-navigation-drawer app v-model="drawer" dark permanent class="navigation-drawer-gradient">
        <div class="sidebar-header">
          <v-img 
            src="/arsenal.png" 
            alt="Logo"
            class="sidebar-logo"
          ></v-img>
        </div>
        <v-list dense>
          <v-list-item v-for="(item, index) in menuItems" :key="index">
            <v-btn block class="menu-btn">{{ item }}</v-btn>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
  
      <v-app-bar app color="black" dark>
        <v-app-bar-nav-icon @click="drawer = !drawer">
          <v-img src="/arsenal.png" alt="Logo" class="app-bar-logo" contain></v-img>
        </v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-btn text class="text" color="white">INICIO</v-btn>
        <v-btn text class="text" color="white">INBODY</v-btn>
        <v-btn text class="text" color="white">PRODUCTOS</v-btn>
        <v-spacer></v-spacer>
      </v-app-bar>
  
      <v-main>
        <v-container fluid class="background-color">
          <v-row justify="center" class="text-center">
            <v-col cols="12" sm="6" md="4" v-for="(exercise, index) in exercises" :key="index" class="d-flex justify-center">
              <v-card class="exercise-card">
                <v-responsive aspect-ratio="16/9" class="video-container">
                  <iframe
                    v-if="exercise.video"
                    :src="exercise.video"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  <v-img v-else :src="exercise.image" :alt="exercise.title" height="200px"></v-img>
                </v-responsive>
                <v-card-title>{{ exercise.title }}</v-card-title>
                <v-card-subtitle>{{ exercise.description }}</v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
          <v-row class="text-center mt-4">
            <v-col cols="12">
              <p>
                Para más dudas puede consultar en
                <a href="https://www.instagram.com/arsenaltrc?igshid=MWhmamJyM2p2eXl4OQ==" target="_blank">ARSENAL INSTAGRAM</a>
                sobre los ejercicios
              </p>
              <v-btn color="red darken-4" class="white--text">REGRESAR</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const drawer = ref(false)
  const menuItems = ref(['Pecho', 'Hombro', 'Triceps', 'Biceps', 'Espalda', 'Pierna'])
  const exercises = ref([
    { title: 'Curl de Bíceps con Barra', video: 'https://www.youtube.com/embed/kwG2ip8W1Jk', description: 'Ejercicio fundamental para trabajar los bíceps.' },
    { title: 'Curl de Bíceps con Mancuerna', video: 'https://www.youtube.com/embed/kwG2ip8W1Jk', description: 'Variante del curl con barra, enfocada en el trabajo individual de los bíceps.' },
    { title: 'Curl Martillo', video: 'https://www.youtube.com/embed/8SOQd5p7n1w', description: 'Ejercicio para trabajar la parte externa de los bíceps y el antebrazo.' },
    { title: 'Curl Concentrado', video: 'https://www.youtube.com/embed/b1a4JmP6h70', description: 'Ejercicio de aislamiento para los bíceps.' }
  ])
  </script>
  
  <style scoped> 
  .navigation-drawer-gradient {
    background: linear-gradient(to right, red, black);
  }
  
  .sidebar-header {
    display: flex;
    justify-content: center;
    padding: 16px;
  }
  
  .sidebar-logo {
    width: 100%; 
    max-width: 150px; 
    margin-bottom: 20px; 
  }
  
  .app-bar-logo {
    max-height: 100px;
    max-width: 100px;
  }
  
  .menu-btn {
    background-color: pink;
    color: black;
    margin-bottom: 8px;
  }
  
  .v-toolbar {
    background-color: black;
    color: black;
  }
  
  .v-btn {
    color: black;
  }
  
  .background-color {
    background: linear-gradient(to right, red, black);
    min-height: 100vh;
    padding-top: 20px;
  }
  
  .text-center {
    text-align: center;
  }
  
  .video-container {
    position: relative;
    width: 100%;
    padding-top: 56.25%; 
  }
  
  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  .v-card {
    background-color: white;
    padding: 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .v-card-title {
    text-align: center;
    font-weight: bold;
  }
  
  .v-card-subtitle {
    text-align: center;
  }
  
  .v-img {
    width: 100%;
    height: auto; 
  }
  
  .exercise-card {
    border: 1px solid black;
    max-width: 400px;
    margin-bottom: 20px; 
  }
  </style>
  