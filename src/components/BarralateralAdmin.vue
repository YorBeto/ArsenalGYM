<template>
    <div>
        <aside class="sidebar">
        <v-btn class="botones">Mi espacio</v-btn>
        <v-btn class="botones">Clientes</v-btn>
        <v-btn class="botones">Socios</v-btn>
        <v-btn class="botones">Citas</v-btn>
        <v-btn class="botones">Productos</v-btn>
        <v-btn class="botones">Avisos</v-btn>
        <v-btn class="botonSalir" color="red">Salir</v-btn>
      </aside>
        
    </div>
</template>


<script setup>
</script>

<style scoped>
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

</style>