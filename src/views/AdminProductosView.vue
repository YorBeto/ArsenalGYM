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
        <div class="acciones">
          <v-btn color="primary" class="agregar-btn">
            <router-link to="/agregarproductos" class="router-link">
              Agregar Producto
            </router-link>
          </v-btn>
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
const headers = [
  { text: 'Nombre', value: 'NOMBRE' },
  { text: 'Descripción', value: 'DESCRIPCION' },
  { text: 'Precio', value: 'PRECIO' },
  { text: 'Stock', value: 'STOCK' },
  { text: 'Categoría', value: 'CATEGORIA' }
];

const mostrarproductos = () => {
  fetch('http://mipagina.com/productos')
    .then(response => response.json())
    .then(json => {
      if (json.status === 200) {
        productos.value = json.data;
      } else {
        console.error('Error fetching products:', json.message);
      }
    })
    .catch(error => {
      console.error('Network error:', error);
    });
};

onMounted(() => {
  mostrarproductos();
});
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
}

.barra-busqueda {
  margin-bottom: 1rem;
}

.v-data-table {
  flex: 1;
}

.acciones {
  display: flex;
  justify-content: flex-start;
  margin-top: 1rem;
}

.agregar-btn {
  margin-right: 1rem;
}

.router-link {
  text-decoration: none;
  color: inherit;
}
</style>
