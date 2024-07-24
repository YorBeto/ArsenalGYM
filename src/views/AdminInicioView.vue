<template>
  <div id="admin-inicio">
    <BarraAdmin></BarraAdmin>
    <div class="content">
      <BarralateralAdmin></BarralateralAdmin>
      <div class="main-content">
        <div class="welcome-message">
          <div><img src="/public/peniche.png" class="user-photo" /></div>
          <h1 class="mensaje">¡Bienvenido Peniche!</h1>
          <p>Último inicio: 23/07/2024</p>
          <p>Hora: 13:20 p.m</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminInicioView'
}
</script>

<script setup>
import BarraAdmin from '@/components/BarraAdmin.vue';
import BarralateralAdmin from '@/components/BarralateralAdmin.vue';
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.botones {
  height: 40px;
  width: 180px;
  font-size: 25px;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 5px;
  text-align: left;
  padding-left: 10px;
}

.botonSalir {
  height: 40px;
  width: 180px;
  font-size: 25px;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 5px;
  text-align: left;
  padding-left: 10px;
  background-color: red;
  border-color: red;
  color: white;
}

#admin-inicio {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.mensaje {
  margin-bottom: 15px;
}

.navbar {
  background-color: #333;
  color: white;
  padding: 0.5rem 1rem; /* Ajustado el padding de la barra de navegación */
  display: flex;
  align-items: center;
}

.logo {
  height: 100px;
  height: 100px;
}

.content {
  display: flex;
  flex: 1;
}

.sidebar {
  background-color: #555;
  padding: 1rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.sidebar-btn-logout {
  background-color: #e74c3c;
}

.main-content {
  background-color: white;
  padding: 2rem;
  flex: 1;
}

.welcome-message {
  text-align: center;
}

.user-photo {
  width: 565px;
  height: 300px;
  max-width: 100%; /* Ajustar el tamaño máximo de la imagen */
  max-height: 100%; /* Ajustar el tamaño máximo de la imagen */
  margin-top: 30px;
  padding-right: 60px;
}
</style>
