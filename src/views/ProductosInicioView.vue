<template>
  <v-layout class="rounded rounded-md" style="background-color: #f0f0f0; min-height: 100vh;">
    <barraNav></barraNav>

    <v-main>
      <v-container>
        <v-tabs>
          <v-tab v-for="category in categories" :key="category">{{ category }}</v-tab>
        </v-tabs>

        <v-tabs-items>
          <v-tab-item v-for="category in categories" :key="category">
            <v-row>
              <v-col v-for="product in getProductsByCategory(category)" :key="product.id" cols="12" md="4">
                <v-card class="my-4">
                  <v-img :src="product.image" class="white--text" height="200px"></v-img>
                  <v-card-title>{{ product.name }}</v-card-title>
                  <v-card-text>{{ product.description }}</v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-tab-item>
        </v-tabs-items>
      </v-container>
    </v-main>
  </v-layout>
</template>

<script setup>
import barraNav from '@/components/barraNav.vue';
import { ref } from 'vue';

// Categorías de productos
const categories = ref([
  'PRE-ENTRENOS',
  'PROTEÍNAS',
  'CREATINAS',
  'MULTIVITAMÍNICOS',
  'MEMBRESÍAS'
]);

// Productos (Ejemplo)
const products = ref([
  {
    id: 1,
    name: 'Producto 1',
    description: 'Descripción del Producto 1',
    image: 'ruta/a/la/imagen1.jpg',
    category: 'PRE-ENTRENOS'
  },
  {
    id: 2,
    name: 'Producto 2',
    description: 'Descripción del Producto 2',
    image: 'ruta/a/la/imagen2.jpg',
    category: 'PROTEÍNAS'
  },
  // Agrega más productos aquí...
]);

// Función para obtener productos por categoría
function getProductsByCategory(category) {
  return products.value.filter(product => product.category === category);
}
</script>

<style scoped>
.imagen-izquierda {
  height: 50px;
  width: 100px;
  margin-left: 20px;
}

.nav-buttons {
  display: flex;
  justify-content: center;
  width: 50%;
}

.boton-bar {
  color: white;
  font-size: 20px;
}

.boton-iniciar-sesion {
  margin-right: 40px; /* Ajusta este valor para mover el botón a la izquierda */
}
</style>