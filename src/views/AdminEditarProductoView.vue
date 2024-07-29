<template>
  <div id="admin-inicio">
    <nav class="navbar">
      <img src="/public/arsenal.png" class="logo" />
    </nav>
    <div class="contenedor">
      <BarralateralAdmin></BarralateralAdmin>
      <div class="main-content">
        <h2>Buscar Producto</h2>
        <v-form @submit.prevent="buscarProducto">
          <v-text-field v-model="form.id_producto" label="ID Producto" required></v-text-field>
          <v-btn type="submit" color="primary">Buscar Producto</v-btn>
        </v-form>
        <div v-if="producto">
          <h2>Editar Producto</h2>
          <v-form @submit.prevent="actualizarProducto">
            <v-text-field v-model="form.nombre" label="Nombre" required></v-text-field>
            <v-text-field v-model="form.descripcion" label="Descripción" required></v-text-field>
            <v-text-field v-model="form.precio" label="Precio" required></v-text-field>
            <v-text-field v-model="form.stock" label="Stock"></v-text-field>
            <v-text-field v-model="form.id_categoria" label="ID Categoría" required></v-text-field>
            <v-btn type="submit" color="secondary">Actualizar Producto</v-btn>
            <v-btn @click="eliminarProducto" color="red">Eliminar Producto</v-btn>
          </v-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import BarralateralAdmin from '@/components/BarralateralAdmin.vue';

const form = ref({
  id_producto: '',
  nombre: '',
  descripcion: '',
  precio: '',
  stock: '',
  id_categoria: ''
});

const producto = ref(null);

const buscarProducto = () => {
  fetch(`http://mipagina.com/producto/buscar?id_producto=${form.value.id_producto}`)
    .then(response => response.json())
    .then(json => {
      if (json.status === 200) {
        producto.value = json.data;
        Object.assign(form.value, {
          id_producto: json.data.ID_PRODUCTO,
          nombre: json.data.NOMBRE,
          descripcion: json.data.DESCRIPCION,
          precio: json.data.PRECIO,
          stock: json.data.STOCK,
          id_categoria: json.data.ID_CATEGORIA
        });
      } else {
        alert(json.message);
        producto.value = null;
      }
    });
};

const actualizarProducto = () => {
  fetch('http://mipagina.com/producto/actualizar', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id_producto: form.value.id_producto,
      nombre: form.value.nombre,
      descripcion: form.value.descripcion,
      precio: form.value.precio,
      stock: form.value.stock,
      id_categoria: form.value.id_categoria
    })
  })
    .then(response => response.json())
    .then(json => {
      alert(json.message);
      if (json.status === 200) {
        producto.value = null;
      }
    });
};

const eliminarProducto = () => {
  fetch('http://mipagina.com/producto/eliminar', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id_producto: form.value.id_producto })
  })
    .then(response => response.json())
    .then(json => {
      alert(json.message);
      if (json.status === 200) {
        producto.value = null;
      }
    });
};
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
</style>
