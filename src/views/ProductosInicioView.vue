<template>
  <v-layout class="rounded rounded-md" style="background-color: #f0f0f0; min-height: 100vh;">
    <barraNav></barraNav>

    <v-main>
      <v-container>
        <v-tabs class="centered-tabs" background-color="#ffffff" slider-color="red">
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

const categories = ref([
  'PRE-ENTRENOS',
  'PROTEÍNAS',
  'CREATINAS',
  'MULTIVITAMÍNICOS',
  'MEMBRESÍAS'
]);

const products = ref([]);

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

function getProductsByCategory(category) {
  return products.value.filter(product => product.category === category);
}
</script>

<style scoped>
.centered-tabs {
  display: flex;
  justify-content: center;
  align-items: center;
}

.v-tabs {
  width: 100%;
}

.v-tab {
  margin: 0 10px; 
}

.v-tabs-items {
  margin-top: 20px;
}
</style>
