<template>
    <v-app>
      <!-- Barra de navegación lateral -->
      <v-navigation-drawer v-model="drawer" app>
        <v-img
          src="@/assets/Arsenal.jpg"
          class="mb-5"
          style="cursor: pointer"
          @click="toggleDrawer"
        ></v-img>
        <v-list dense>
          <v-list-item v-for="(item, index) in items" :key="index" @click="">
            <v-list-item-content>
              <v-list-item-title>{{ item }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
  
      <!-- Contenido principal -->
      <v-main>
        <v-container>
          <v-row>
            <v-col>
              <v-card>
                <v-card-title>
                  ¡Bienvenido Jonathan!
                </v-card-title>
                <v-card-subtitle>
                  ¡Hoy es un buen día para sobre pasar tus límites!
                </v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-btn color="primary" class="mb-2">
                ¡Conoce nuestra nueva maquina!
              </v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-btn color="primary" class="mb-2">
                ¡InBody ha mitad de precio!
              </v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-btn color="primary" class="mb-2">
                Prueba nuestros smoothies de proteina
              </v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-card>
                <v-card-title>
                  <v-avatar size="64" class="mr-4">
                    <v-img src="path_to_profile_image.jpg"></v-img>
                  </v-avatar>
                  ID: 3312
                </v-card-title>
                <v-card-subtitle>
                  Peso: 50 kg<br>
                  Estatura: 1.70 mts<br>
                  Edad: 30
                </v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-btn color="error" class="mt-5">
                cerrar sesion
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Controlador del estado del drawer
  const drawer = ref(false);
  
  // Elementos de la lista en la barra lateral
  const items = ['InBody', 'RUTINAS', 'NOVEDADES', 'MEMBRESIA', 'CLASES', 'HISTORIAL'];
  
  // Función para alternar el estado del drawer
  const toggleDrawer = () => {
    drawer.value = !drawer.value;
  };
  </script>
  
  <style scoped>
  /* Estilos para la imagen del logotipo */
  .v-img {
    cursor: pointer;
  }
  
  /* Estilos para el contenido principal */
  .v-main {
    padding: 20px;
  }
  
  .v-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  </style>
  