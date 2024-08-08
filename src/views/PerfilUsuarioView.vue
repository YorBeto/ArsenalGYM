<template>
  <v-card>
    <v-card-title>Perfil de Usuario</v-card-title>
    <v-card-text>
      <p><strong>Nombre:</strong> {{ usuario?.nombre }}</p>
      <p><strong>Correo:</strong> {{ usuario?.correo }}</p>
      <p><strong>Fecha de Registro:</strong> {{ usuario?.fecha_registro }}</p>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { computed } from 'vue';
import { useUserStore } from '@/stores/userStore';

const userStore = useUserStore();
const usuario = computed(() => userStore.usuario);
</script>

<style scoped>
/* Estilos opcionales */
</style>
