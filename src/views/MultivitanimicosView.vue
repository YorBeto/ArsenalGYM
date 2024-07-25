<template>
    <v-layout class="rounded rounded-md" style="background-color: white; min-height: 100vh;">
      <v-app-bar color="black" style="height: 70px; display: flex; align-items: center;">
        <v-container fluid>
          <v-row no-gutters>
            <v-col cols="auto" class="d-flex align-center">
              <v-img src="/arsenal.png" alt="Logo" contain class="imagen-barra-izquierda"></v-img>
            </v-col>
            <v-col class="d-flex justify-center align-center"> 
              <p style="font-size: 50px; color: white; margin: 0;">MULTIVITAMINICOS</p>
            </v-col>
            <v-col cols="auto" class="d-flex align-center barra-derecha">
              <v-img src="/carro3.png" alt="Carrito" contain class="imagen-barra-derecha"></v-img>
              <v-btn class="boton-barra-derecha">INICIAR SESIÓN</v-btn>
            </v-col>
          </v-row>
        </v-container> 
      </v-app-bar>
  
      <v-main style="background: linear-gradient(to right, black, red); display: flex; justify-content: center; align-items: center;">
        <v-container>
          <v-carousel hide-delimiters>
            <v-carousel-item v-for="(grupo, index) in gruposDeProductos" :key="index">
              <v-row>
                <v-col v-for="producto in grupo" :key="producto.id" cols="12" sm="6" md="4">
                  <v-card>
                    <v-img :src="producto.imagen" :alt="producto.nombre" contain></v-img>
                    <v-card-title class="text-center">{{ producto.nombre }}</v-card-title>
                    <v-card-subtitle class="text-center">{{ producto.precio }}</v-card-subtitle>
                    <v-card-text class="text-center">{{ producto.descripcion }}</v-card-text>
                    <v-card-actions class="d-flex justify-center">
                      <v-btn @click="decrementarCantidad(producto)">-</v-btn>
                      <span>{{ producto.cantidad }}</span>
                      <v-btn @click="incrementarCantidad(producto)">+</v-btn> 
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-carousel-item>
          </v-carousel>
        </v-container>
      </v-main>
    </v-layout>
  </template>
  
  <script>
  export default {
    data() {
      return {
        productos: [
          { id: 1, nombre: 'INOSINITOL', precio: '$420.00', imagen: '/multivitaminicos/m1.jpg', cantidad: 0, descripcion: 'SUPLEMENTO-RED GOLD' },
          { id: 2, nombre: 'HMB', precio: '$450.00', imagen: '/multivitaminicos/m2.jpg', cantidad: 0, descripcion: 'SUPLEMENTO-OPTIMUM NUTRITION' },
          { id: 3, nombre: 'HMB1000', precio: '$480.00', imagen: '/multivitaminicos/m3.jpg', cantidad: 0, descripcion: 'SUPLEMENTO-BLACK' },
          { id: 4, nombre: 'CAFFEIN', precio: '$520.00', imagen: '/multivitaminicos/m4.jpg', cantidad: 0, descripcion: 'SUPLEMENTO-ALLMAX' },
          { id: 5, nombre: 'CUTS POWER', precio: '$445.00', imagen: '/multivitaminicos/m5.jpg', cantidad: 0, descripcion: 'SUPLEMENTO-POWDER BLUE ICE' },
          { id: 6, nombre: 'NITE BURN', precio: '$380.00', imagen: '/multivitaminicos/m6.jpg', cantidad: 0, descripcion: 'SUPLEMENTO-BPI SPORTS' },
          { id: 7, nombre: 'HYDROXYCUT', precio: '$480.00', imagen: '/multivitaminicos/m7.jpg', cantidad: 0, descripcion: 'SUPLEMENTO-EXTREME ENERGY' },
          { id: 8, nombre: 'L-ARGININE', precio: '$425.00', imagen: '/multivitaminicos/m8.jpg', cantidad: 0, descripcion: 'SUPLEMENTO-GAT SPORTS' },
          { id: 9, nombre: 'ARGININA', precio: '$550.00', imagen: '/multivitaminicos/m9.jpg', cantidad: 0, descripcion: 'SUPLEMENTO-ALIMENTICIO' },
          { id: 10, nombre: 'BCAA´S', precio: '$650.00', imagen: '/multivitaminicos/m10.jpg', cantidad: 0, descripcion: 'SUPLEMENTO-INSTANTIZED' },
          { id: 11, nombre: 'GLUCOSAMINE', precio: '$780.00', imagen: '/multivitaminicos/m11.jpg', cantidad: 0, descripcion: 'SUPLEMENTO-GLUCOMEX' },
          { id: 12, nombre: 'CHEWABLE C500', precio: '$420.00', imagen: '/multivitaminicos/m12.jpg', cantidad: 0, descripcion: 'SUPLEMENTO-WINDMILL' },
          { id: 13, nombre: 'OPTIMEN', precio: '$520.00', imagen: '/multivitaminicos/m13.jpg', cantidad: 0, descripcion: 'SUPLEMENTO-OPTIMUM NUTRITION' },
        ]
      };
    },
    computed: {
      gruposDeProductos() {
        const grupos = [];
        for (let i = 0; i < this.productos.length; i += 3) {
          grupos.push(this.productos.slice(i, i + 3));
        }
        return grupos;
      }
    },
    methods: {
      incrementarCantidad(producto) {
        producto.cantidad++;
      },
      decrementarCantidad(producto) {
        if (producto.cantidad > 0) {
          producto.cantidad--;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .imagen-barra-izquierda {
    height: 70px;
    width: 70px;
    margin-left: 130px;
  }
  
  .imagen-barra-derecha {
    height: 50px;
    width: 50px;
  }
  
  .barra-derecha {
    display: flex;
    align-items: center;
  }
  
  .boton-barra-derecha {
    margin-left: 10px;
    color: white;
  }
  
  .v-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px;
  }
  
  .v-card-title,.v-card-subtitle,.v-card-text {
    text-align: center;
    margin: 8px 0;
    word-wrap: break-word;
  }
  
  .v-card-title, .v-card-subtitle, .v-card-text {
    font-size: 16px; 
  }
  
  .v-card-actions {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .v-card * {
    white-space: normal;
  }
  </style>
  