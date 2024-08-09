<template>
    <div id="admin-registro">
      <BarraAdminNew></BarraAdminNew>
      <div class="contenedor">
        <BarralateralAdmin></BarralateralAdmin>
        <div class="main-content">
          <h1>Registrar Producto</h1>
          <v-form @submit.prevent="submitForm">
            <v-text-field v-model="nombre" label="Nombre" required></v-text-field>
            <v-textarea v-model="descripcion" label="Descripción" required></v-textarea>
            <v-text-field v-model="precio" label="Precio" type="number" required></v-text-field>
            <v-text-field v-model="stock" label="Stock" type="number" required></v-text-field>
            <v-text-field v-model="categoria" label="Categoría" required></v-text-field>
  
            <!-- Campo para subir imagen -->
            <v-file-input
              v-model="imagen"
              label="Subir imagen"
              accept="image/*"
              required
            ></v-file-input>
  
            <v-btn type="submit" color="primary">Agregar Producto</v-btn>
          </v-form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import BarraAdminNew from '@/components/BarraAdminNew.vue';
  import BarralateralAdmin from '@/components/BarralateralAdmin.vue';
  import { ref } from 'vue';
  
  const nombre = ref('');
  const descripcion = ref('');
  const precio = ref('');
  const stock = ref('');
  const categoria = ref('');
  const imagen = ref(null);
  
  const submitForm = () => {
    const formData = new FormData();
    formData.append('nombre', nombre.value);
    formData.append('descripcion', descripcion.value);
    formData.append('precio', precio.value);
    formData.append('stock', stock.value);
    formData.append('categoria', categoria.value);
    formData.append('imagen', imagen.value);
  
    fetch('http://mipagina.com/insertarproducto', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(json => {
        if (json.success) {
          alert('Producto registrado exitosamente');
          resetForm();
        } else {
          alert('Error al registrar Producto: ' + json.message);
        }
      });
  };
  
  const resetForm = () => {
    nombre.value = '';
    descripcion.value = '';
    precio.value = '';
    stock.value = '';
    categoria.value = '';
    imagen.value = null;
  };
  </script>
  
  <style>
  #admin-registro {
    display: flex;
    flex-direction: column;
    height: 100vh;
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
  
  h1 {
    margin-bottom: 1rem;
  }
  
  .v-form {
    max-width: 600px;
    margin: 0 auto;
  }
  </style>
  