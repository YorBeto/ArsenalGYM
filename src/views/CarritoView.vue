<template>
  <barraNav></barraNav>
  <v-container>
    <br>
    <br>
    <br>
    <h1>Bienvenido a tu carrito</h1>
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
    <h2>Otros...</h2>
    <v-row>
      <v-col v-for="producto in recommendedProductos" :key="producto.ID_PRODUCTO" cols="12" md="6" lg="4">
        <v-card class="mx-auto my-4" max-width="344">
          <v-card-title>{{ producto.NOMBRE }}</v-card-title>
          <v-card-subtitle>{{ producto.CATEGORIA }}</v-card-subtitle>
          <v-card-text>
            <p>{{ producto.DESCRIPCION }}</p>
            <p>{{ producto.PRECIO }} MX</p>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="addToCart(producto)">Agregar al carrito</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { computed } from 'vue';
import { useCarritoStore } from '@/stores/carrito';
import { useProductosStore } from '@/stores/productos';
import barraNav from '@/components/barraNav.vue';

const carritoStore = useCarritoStore();
const productosStore = useProductosStore();

const removeFromCart = (ID_PRODUCTO) => {
  carritoStore.removeProducto(ID_PRODUCTO);
};

const addToCart = (producto) => {
  carritoStore.addProducto(producto);
};

// Computed property to get recommended products
const recommendedProductos = computed(() => {
  const allProductos = productosStore.productos;
  const carritoIDs = carritoStore.productos.map(p => p.ID_PRODUCTO);
  
  // Filter out products already in the cart
  const filteredProductos = allProductos.filter(producto => !carritoIDs.includes(producto.ID_PRODUCTO));

  // Get a random selection of up to 3 products
  return filteredProductos.sort(() => 0.5 - Math.random()).slice(0, 3);
});
</script>
