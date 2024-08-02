<template>
    <v-app-bar color="black" app style="height: 70px; font-size: 24px; display: flex; align-items: center; position: fixed;">
      <router-link to="/"><v-img src="/arsenal.png" alt="Logo" class="imagen-izquierda" @click="scrollToTop"></v-img></router-link>
      <v-spacer></v-spacer>
      <div class="nav-buttons"> 
        <router-link to="/"><v-btn class="boton-bar">PRODUCTOS</v-btn></router-link>
       
      </div>
      <v-spacer></v-spacer>
      <router-link to="/Login">
        <v-btn icon class="boton-bar boton-iniciar-sesion">
          <v-icon>mdi-account</v-icon>
        </v-btn> 
      </router-link>
      <router-link to="/Compras">
        <v-btn icon class="boton-bar boton-compras">
          <v-icon>mdi-cart</v-icon>
        </v-btn>
      </router-link>
    </v-app-bar>
  </template> 
  
  <style scoped>
  
  
  
  .imagen-izquierda {
    width: 150px; /* Ajusta el ancho según sea necesario */
    height: 80px; /* Mantiene la proporción de la imagen */
    cursor: pointer; /* Cambia el cursor al pasar sobre la imagen si es clickeable */
    margin-left: 90px; /* Espaciado a la izquierda */
    margin-top: 10px;
  }
   
  .nav-buttons {
    display: flex;
    gap: 16px; 
    justify-content: center;
    align-items: center;
  
  }
  
  .boton-bar {
    color: white;
    font-size: 20px;
    min-width: 120px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; 
    text-align: center;
    margin-right: -140px;
  }
  
  
  .boton-iniciar-sesion, .boton-compras {
    margin-right: 40px;
    color: white;
  }
  </style>
  
  <script>
  export default {
    methods: {
      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    }
  };
  </script>