<template>
    <v-container>
      <h1>Bienvenido al carrito</h1>
      <div v-if="carritoStore.productos.length === 0">
        <p>Tu carrito está vacío</p>
      </div>
      <v-row v-else>
        <v-col v-for="producto in carritoStore.productos" :key="producto.ID_PRODUCTO" cols="12" md="6" lg="4">
          <v-card class="mx-auto my-4" max-width="344">
            <v-card-title>{{ producto.NOMBRE }}</v-card-title>
            <v-card-subtitle>{{ producto.CATEGORIA }}</v-card-subtitle>
            <v-card-text>
              <p>{{ producto.DESCRIPCION }}</p>
              <p>{{ producto.PRECIO }} MX</p>
              <p>Cantidad: {{ producto.cantidad }}</p>
              <p v-if="producto.STOCK !== null">Stock: {{ producto.STOCK }}</p>
            </v-card-text>
            <v-card-actions>
              <v-btn color="error" @click="removeFromCart(producto.ID_PRODUCTO)">Eliminar</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { useCarritoStore } from '@/stores/carrito';
  
  const carritoStore = useCarritoStore();
  
  const removeFromCart = (ID_PRODUCTO) => {
    carritoStore.removeProducto(ID_PRODUCTO);
  };
  </script>