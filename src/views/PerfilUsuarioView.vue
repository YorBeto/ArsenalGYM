<template>
  <v-app>
    <barraNav></barraNav>
    <BarraLatCliente></BarraLatCliente>
    <div class="main-container">
      <BarraLatCliente class="sidebar"></BarraLatCliente>
      <div class="container">
        <v-card>
          <v-card-title>Perfil de Usuario</v-card-title>
          <v-card-text>
            <p><strong>Nombre:</strong> {{ usuario?.nombre }}</p>
            <p><strong>Correo:</strong> {{ usuario?.correo }}</p>
            <p><strong>Fecha de Registro:</strong> {{ usuario?.fecha_registro }}</p>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </v-app>
</template>

<script setup>
import { computed } from 'vue';
import { useUserStore } from '@/stores/userStore';
import barraNav from '@/components/barraNav.vue';
import BarraLatCliente from '@/components/BarraLatCliente.vue';

const userStore = useUserStore();
const usuario = computed(() => userStore.usuario);
</script>

<style scoped>
.main-container {
  display: flex;
  height: 100vh; /* Asegura que la altura ocupe toda la pantalla */
}

.sidebar {
  width: 200px; /* Ajusta el ancho según sea necesario */
}

.container {
  flex-grow: 1; /* Permite que el contenedor ocupe el espacio restante */
  padding-left: 180px;
  padding-top: 80px;
}

v-card {
  width: 100px; /* Ajusta el tamaño del card según sea necesario */

}
</style>