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
          <v-btn color="red" @click="openDeleteModal">Eliminar Producto</v-btn>
        </div>
      </div>
    </div>

    <!-- Modal para eliminar producto -->
    <v-dialog v-model="deleteDialog" max-width="500px">
      <v-card>
        <v-card-title class="headline">Eliminar Producto</v-card-title>
        <v-card-subtitle>Introduce el ID del producto para eliminar</v-card-subtitle>
        <v-card-text>
          <v-text-field v-model="deleteId" label="ID del Producto" />
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="deleteDialog = false">Cancelar</v-btn>
          <v-btn color="red" @click="deleteProducto">Eliminar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import BarraAdminNew from '@/components/BarraAdminNew.vue';
import BarralateralAdmin from '@/components/BarralateralAdmin.vue';
import { ref, onMounted } from 'vue';

const search = ref('');
const productos = ref([]);
const deleteDialog = ref(false);
const deleteId = ref('');

const mostrarproductos = () => {
  fetch('http://mipagina.com/productos')
    .then(response => response.json())
    .then(json => {
      if (json.status === 200) {
        productos.value = json.data;
      }
    });
};

const openDeleteModal = () => {
  deleteDialog.value = true;
};

const deleteProducto = () => {
  if (!deleteId.value) {
    alert('Por favor, ingresa un ID del producto.');
    return;
  }

  fetch(`http://mipagina.com/producto/eliminar?id=${deleteId.value}`, {
    method: 'DELETE',
  })
    .then(response => {
      return response.json(); // Asegúrate de que la respuesta sea JSON
    })
    .then(json => {
      if (json.success) {
        alert('Producto eliminado con éxito');
        deleteDialog.value = false;
        mostrarproductos(); // Refrescar la lista de productos
      } else {
        alert('Error al eliminar el producto: ' + json.message);
      }
    })
    .catch(error => {
      alert('Error al eliminar el producto: ' + error.message);
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