<template>
  <div id="admin-inicio">
      <BarraAdminNew></BarraAdminNew>
    <div class="contenedor">
      <BarralateralAdmin></BarralateralAdmin>
      <div class="main-content">
        <div class="barra-busqueda">
          <v-text-field
            v-model="search"
            label="Search"
            prepend-inner-icon="mdi-magnify"
            variant="outlined"
            hide-details
            single-line
          ></v-text-field>
        </div>
        <v-data-table
          :headers="headers"
          :items="productos"
          :search="search"
        ></v-data-table>
        <div class="button-group">
          <router-link to="agregarproductos"><v-btn @click="agregarProducto" color="primary">Agregar</v-btn></router-link>
          <router-link to="editarproductos"><v-btn @click="editarProducto" color="secondary">Editar</v-btn></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BarraAdminNew from '@/components/BarraAdminNew.vue';
import BarralateralAdmin from '@/components/BarralateralAdmin.vue';
import { ref, onMounted } from 'vue';

const search = ref('');
const productos = ref([]);

const mostrarproductos = () => {
  fetch('http://mipagina.com/productos_servicios')
    .then(response => response.json())
    .then(json => {
      if (json.status == 200) {
        productos.value = json.data;
      }
    });
};

const agregarProducto = () => {
  // Implement the function to add a product
  console.log('Agregar producto');
};

const editarProducto = () => {
  // Implement the function to edit a product
  console.log('Editar producto');
};

  onMounted(()=>{
    mostrarproductos();
  })

</script>

<style>
#admin-inicio {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.navbar {
  background-color: #333;
  padding: 1rem;
}

.logo {
  max-height: 50px;
}

.contenedor {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.main-content {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1rem;
  overflow-y: scroll;
}

.barra-busqueda {
  margin-bottom: 1rem;
}

.v-data-table {
  flex: 1;
}

.button-group {
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  margin-top: 1rem;
}
</style>
