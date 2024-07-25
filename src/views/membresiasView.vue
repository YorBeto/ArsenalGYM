<template>
    <v-app class="main-app">
      <v-container class="main-container">
        <v-row>
          <v-col cols="12">
            <v-toolbar flat>
              <v-img src="/arsenal.png" alt="Left Image" height="100" class="mr-2"></v-img>
              <v-spacer></v-spacer>
              <v-toolbar-title class="text-center">MEMBRESIAS</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-img src="/carro3.png" alt="Right Image" height="50" class="ml-2"></v-img>
            </v-toolbar>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6" md="4" v-for="membresia in membresias" :key="membresia.id">
            <v-card>
              <v-img :src="membresia.image" class="white--text" height="200px"></v-img>
              <v-card-title>{{ membresia.title }}</v-card-title>
              <v-card-subtitle>{{ membresia.price }}</v-card-subtitle>
              <v-card-actions>
                <v-btn block color="primary">Añadir al carrito</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </template>
  
  <script>
  export default {
    data() {
      return {
        membresias: [
          { id: 1, title: 'Membresía Mensual (Gimnasio)', price: '$700.00', image: '/arsenalblanco.png' },
          { id: 2, title: 'Membresía Semestral (Gimnasio)', price: '$1,800.00', image: '/arsenalblanco.png' },
          { id: 3, title: 'Membresía Anual (Gimnasio)', price: '$7,470.00', image: '/arsenalblanco.png' },
          { id: 4, title: 'Membresía Mensual (CrossFit)', price: '$720.00', image: '/arsenalblanco.png' },
          { id: 5, title: 'Membresía Semestral (CrossFit)', price: '$1,920.00', image: '/arsenalblanco.png' },
          { id: 6, title: 'Membresía Anual (CrossFit)', price: '$7,550.00', image: '/arsenalblanco.png' }
        ]
      }
    }
  }
  </script>
  
  <style>
  .v-toolbar {
    background-color: black;
    color: white;
  }
  
  .v-btn {
    color: black;
  }
  
  .text-center {
    flex: 1;
    text-align: center;
  }
  
  .main-app {
    min-height: 100%;
  }
  
  .main-container {
    background: linear-gradient(to right, black, red); 
    min-height: 100vh;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  </style>
  