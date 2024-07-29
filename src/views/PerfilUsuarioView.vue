<template>
  <v-layout class="rounded rounded-md" style="background-color: #f0f0f0; min-height: 100vh;">
    <barraNav></barraNav>
    <v-main style="background-color: #f0f0f0; display: flex; justify-content: center; align-items: center;">
      <v-container>
        <v-card class="pa-5" max-width="500">
          <v-card-title class="titulo-formulario">
            Perfil de Usuario
          </v-card-title>
          <v-card-text>
            <p><strong>Nombre:</strong> {{ usuario.nombre }}</p>
            <p><strong>Correo:</strong> {{ usuario.correo }}</p>
            <p><strong>Fecha de Registro:</strong> {{ usuario.fecha_registro }}</p>
            <!-- Otros detalles del usuario -->
          </v-card-text>
        </v-card>
      </v-container>
    </v-main>
  </v-layout>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useUserStore } from '@/stores/userStore';

const userStore = useUserStore();
const usuario = ref(userStore.usuario);

onMounted(() => {
  // Verifica si el usuario está guardado en el store
  if (!userStore.usuario) {
    // Redirige al login si no hay información del usuario
    window.location.href = '/';
  }
});
</script>

<style scoped>
.titulo-formulario {
  text-align: center;
  margin-bottom: 20px;
  color: black;
  font-size: 24px;
  font-weight: bold;
}
</style>