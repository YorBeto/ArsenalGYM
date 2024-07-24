<template>
    <v-layout class="rounded rounded-md" style="background-color: white; min-height: 100vh;">
      <v-app-bar color="black" style="height: 70px; display: flex; align-items: center;">
        <v-container fluid>
          <v-row no-gutters>
            <v-col cols="auto" class="d-flex align-center">
              <v-img src="/arsenal.png" alt="Logo" contain class="imagen-barra-izquierda"></v-img>
            </v-col>
            <v-col class="d-flex justify-center align-center"> 
              <p style="font-size: 50px; color: white; margin: 0;">PRE-ENTRENOS</p>
            </v-col>
            <v-col cols="auto" class="d-flex align-center barra-derecha">
              <v-img src="/carro3.png" alt="Carrito" contain class="imagen-barra-derecha"></v-img>
              <v-btn class="boton-barra-derecha">INICIAR SESIÓN</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-app-bar> 
  
      <v-main style=" background: linear-gradient(to right, black, red); display: flex; justify-content: center; align-items: center;">
        <v-container>
          <v-carousel hide-delimiters>
            <v-carousel-item v-for="(grupo, index) in gruposDeProductos" :key="index">
              <v-row>
                <v-col v-for="producto in grupo" :key="producto.id" cols="12" sm="6" md="4">
                  <v-card>
                    <v-img :src="producto.imagen" :alt="producto.nombre" contain></v-img>
                    <v-card-title>{{ producto.nombre }}</v-card-title>
                    <v-card-subtitle>{{ producto.precio }}</v-card-subtitle>
                    <v-card-text>{{ producto.descripcion }}</v-card-text>
                    <v-card-actions>
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
          { id: 1, nombre: 'C4', precio: '$849.00',  imagen: 'p1/public/productos/c4.jpg', cantidad: 0, descripcion: 'PRE-WORKOUT,WATERMELON.' },
          { id: 2, nombre: 'PSYCHOTIC.', precio: '$500.99', imagen: '@/assets/producto2.jpg', cantidad: 0, descripcion: 'PRE-WORKOUT,BLUEBERRY.' },
          { id: 3, nombre: 'RYSE', precio: '$690.49', imagen: '@/assets/producto3.jpg', cantidad: 0, descripcion: 'PRE-WORKOUT,ORANGE.' },
          { id: 4, nombre: 'RYSE-RING-POOP', precio: '$739.49', imagen: '@/assets/producto4.jpg', cantidad: 0, descripcion: 'PRE-WORKOUT,CHERRY-RING-POP.' },
          { id: 5, nombre: 'VENOM', precio: '$849.99', imagen: '@/assets/producto5.jpg', cantidad: 0, descripcion: 'PRE-WORKOUT,EXTREME-POTENCY.' },
        ]
      };
    },
    computed: {
      gruposDeProductos() {
        const grupos = [];
        for (let i = 0; i < this.productos.length; i += 2) {
          grupos.push(this.productos.slice(i, i + 2));
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
    height: 50px;
    width: 50px;
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
  }
  
  .v-card-title {
    text-align: center;
  }
  
  .v-card-subtitle {
    text-align: center;
    color: black;
  }
  
  .v-card-text {
    text-align: center;
    color: black;
    font-size: 14px;
  }
  
  .v-card-actions {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .v-card * {
    white-space:center;
  }
  </style>
  