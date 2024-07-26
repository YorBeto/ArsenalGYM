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
import { ref, onMounted } from 'vue';
import barraNav from '@/components/barraNav.vue';

// Categorías de productos
const categories = ref([
  'PRE-ENTRENOS',
  'PROTEÍNAS',
  'CREATINAS',
  'MULTIVITAMÍNICOS',
  'MEMBRESÍAS'
]);

// Productos
const products = ref([]);

// Función para obtener productos del backend
const mostrarproductos = () => {
  fetch('http://mipagina.com/productos')
     .then(response => response.json())
    .then(json => {
      if (json.status === 200) {
        products.value = json.data;
      }
    })
    .catch(error => {
      console.error('Error fetching products:', error);
    });
};

onMounted(() => {
  mostrarproductos();
});

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