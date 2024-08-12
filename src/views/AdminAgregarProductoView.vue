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
          <v-select
            v-model="id_categoria"
            :items="categorias"
            item-value="ID_CATEGORIA"
            item-text="NOMBRE"
            label="Categoría"
            required
          ></v-select>
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
import { ref, onMounted } from 'vue';

const nombre = ref('');
const descripcion = ref('');
const precio = ref('');
const stock = ref('');
const id_categoria = ref(null); // Inicializa con null o un valor válido
const imagen = ref(null);
const categorias = ref([]);

// Función para cargar categorías usando fetch
const loadCategorias = async () => {
  try {
    const response = await fetch('http://mipagina.com/categorias');
    const result = await response.json();
    console.log('Categorías:', result); // Verifica la respuesta aquí
    
    if (result.status === 200) {
      categorias.value = result.data; // Ajusta según la estructura de tu respuesta
    } else {
      console.error('Error al obtener categorías:', result.msg);
    }
  } catch (error) {
    console.error('Error al cargar categorías:', error);
  }
};

// Cargar categorías al montar el componente
onMounted(() => {
  loadCategorias();
});

const submitForm = () => {
  // Lógica para enviar el formulario
};
</script>

<style>
/* Estilos */
</style>
