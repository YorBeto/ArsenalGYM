<template>
  <v-card>
    <v-card-title>Perfil de Usuario</v-card-title>
    <v-card-text>
      <p><strong>Nombre:</strong> {{ usuario.nombre }}</p>
      <p><strong>Correo:</strong> {{ usuario.correo }}</p>
      <p><strong>Fecha de Registro:</strong> {{ usuario.fecha_registro }}</p>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useUserStore } from '@/stores/userStore';

const userStore = useUserStore();
const usuario = ref(userStore.usuario);

onMounted(async () => {
  // Verifica si ya hay datos en el store
  if (!userStore.usuario) {
    // Suponiendo que tienes una función para obtener los datos del usuario
    try {
      const response = await fetch('/api/usuario'); // Cambia esta URL según tu API
      const userData = await response.json();
      userStore.setUsuario(userData);
    } catch (error) {
      console.error('Error al obtener los datos del usuario:', error);
    }
  }
});
</script>

<style scoped>
/* Estilos opcionales */
</style>
