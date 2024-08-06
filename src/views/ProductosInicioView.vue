<script setup>
import { onMounted } from 'vue';
import barraNav from '@/components/barraNav.vue';
import { useProductosStore } from '@/stores/productos';

const store = useProductosStore();

onMounted(() => {
  store.fetchProductos();
});
</script>

<template>
  <v-layout class="rounded rounded-md" style="background-color: #f0f0f0; min-height: 100vh;">
    <barraNav></barraNav>
    <v-main>
      <v-container>
        <div v-for="producto in store.productos" :key="producto.ID_PRODUCTO" class="producto-card">
          <h3>{{ producto.NOMBRE }}</h3>
          <p>{{ producto.DESCRIPCION }}</p>
          <p>{{ producto.PRECIO }} MX</p>
          <p>Categoría: {{ producto.CATEGORIA }}</p>
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