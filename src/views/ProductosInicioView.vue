<script setup>
import { ref } from 'vue';
import barraNav from '@/components/barraNav.vue';
import PreEntrenos from '@/views/Pre-entrenosView.vue';
import Proteinas from '@/views/ProteinasView.vue';
import Creatinas from '@/views/CreatinaView.vue';
import Multivitaminicos from '@/views/MultivitanimicosView.vue';
import Membresias from '@/views/membresiasView.vue';
const categories = ref([ 
  'PRE-ENTRENOS',
  'PROTEÍNAS',
  'CREATINAS',
  'MULTIVITAMÍNICOS',
  'MEMBRESÍAS' 
]);
const tab = ref(0); 
</script>

<template>
  <v-layout class="rounded rounded-md" style="background-color: #f0f0f0; min-height: 100vh;">
    <barraNav></barraNav>
    <v-main>
      <v-container>
        <v-tabs v-model="tab" class="centered-tabs" background-color="black" slider-color="red">
          <v-tab v-for="category in categories" :key="category">{{ category }}</v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item v-if="tab === 0"> 
            <pre-entrenos />
          </v-tab-item>
          <v-tab-item v-if="tab === 1">
            <proteinas />
          </v-tab-item>
          <v-tab-item v-if="tab === 2">
            <creatinas />
          </v-tab-item>
          <v-tab-item v-if="tab === 3">
            <multivitaminicos />
          </v-tab-item>
          <v-tab-item v-if="tab === 4">
            <membresias />
          </v-tab-item>
        </v-tabs-items>
      </v-container>
    </v-main>
  </v-layout>
</template>

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
