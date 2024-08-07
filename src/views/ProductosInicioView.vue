<script setup>
import { ref, computed, onMounted } from 'vue';
import barraNav from '@/components/barraNav.vue';
import { useProductosStore } from '@/stores/productos';
import { useCarritoStore } from '@/stores/carrito';

const store = useProductosStore();
const carritoStore = useCarritoStore();
const selectedCategory = ref('');
const carritoCount = computed(() => {
  return carritoStore.productos.reduce((total, producto) => total + producto.cantidad, 0);
});
const isCartUpdated = ref(false);

onMounted(() => {
  store.fetchProductos();
});

const categories = computed(() => {
  const allCategories = store.productos.map(producto => producto.CATEGORIA);
  return [...new Set(allCategories)];
});

const filteredProductos = computed(() => {
  return store.productos.filter(producto => producto.CATEGORIA === selectedCategory.value || selectedCategory.value === '');
});

const addToCart = (producto) => {
  carritoStore.addProducto(producto);
  isCartUpdated.value = true;
  setTimeout(() => {
    isCartUpdated.value = false;
  }, 1000);
};
</script>

<template>
  <v-layout class="rounded rounded-md" style="background-color: #f0f0f0; min-height: 100vh;">
    <barraNav :carrito-count="carritoCount" :is-cart-updated="isCartUpdated"></barraNav>
    <v-main>
      <v-container>
        <v-tabs v-model="selectedCategory" background-color="primary" dark>
          <v-tab v-for="category in categories" :key="category" :value="category">
            {{ category }}
          </v-tab>
          <v-tab value="">Todas</v-tab>
        </v-tabs>

        <v-row>
          <v-col v-for="producto in filteredProductos" :key="producto.ID_PRODUCTO" cols="12" md="6" lg="4">
            <v-card class="producto-card mx-auto my-4" max-width="344">
              <v-card-title>{{ producto.NOMBRE }}</v-card-title>
              <v-card-subtitle>{{ producto.CATEGORIA }}</v-card-subtitle>
              <v-card-text>
                <p>{{ producto.DESCRIPCION }}</p>
                <p>{{ producto.PRECIO }} MX</p>
                <p v-if="producto.STOCK !== null">Stock: {{ producto.STOCK }}</p>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" @click="addToCart(producto)">Agregar al carrito</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-layout>
</template>


<style scoped>
.producto-card {
  background-color: white;
  border: 1px solid white;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 8px;
}
</style>
