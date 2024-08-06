<script setup>
import { ref, computed, onMounted } from 'vue';
import barraNav from '@/components/barraNav.vue';
import { useProductosStore } from '@/stores/productos';

const store = useProductosStore();
const selectedCategory = ref(''); // Ref para la categoría seleccionada

onMounted(() => {
  store.fetchProductos();
});

const categories = computed(() => {
  // Obtener las categorías únicas de los productos
  const allCategories = store.productos.map(producto => producto.CATEGORIA);
  return [...new Set(allCategories)];
});

const filteredProductos = computed(() => {
  // Filtrar los productos según la categoría seleccionada
  return store.productos.filter(producto => producto.CATEGORIA === selectedCategory.value || selectedCategory.value === '');
});
</script>

<template>
  <v-layout class="rounded rounded-md" style="background-color: #f0f0f0; min-height: 100vh;">
    <barraNav></barraNav>
    <v-main>
      <v-container>
        <!-- v-tabs para las categorías -->
        <v-tabs v-model="selectedCategory" background-color="primary" dark>
          <v-tab v-for="category in categories" :key="category" :value="category">
            {{ category }}
          </v-tab>
          <v-tab value="">Todas</v-tab> <!-- Tab para mostrar todos los productos -->
        </v-tabs>

        <!-- Productos filtrados -->
        <div v-for="producto in filteredProductos" :key="producto.ID_PRODUCTO" class="producto-card">
          <h3>{{ producto.NOMBRE }}</h3>
          <p>{{ producto.DESCRIPCION }}</p>
          <p>{{ producto.PRECIO }} MX</p>
          <p>Categoría: {{ producto.CATEGORIA }}</p>
          <p v-if="producto.STOCK !== null">Stock: {{ producto.STOCK }}</p>
        </div>
      </v-container>
    </v-main>
  </v-layout>
</template>

<style scoped>
.producto-card {
  background-color: white;
  border: 1px solid #ddd;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 8px;
}
</style>