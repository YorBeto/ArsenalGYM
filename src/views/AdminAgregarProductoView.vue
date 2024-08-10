<template>
  <div id="admin-registro">
    <BarraAdminNew></BarraAdminNew>
    <div class="contenedor">
      <BarralateralAdmin></BarralateralAdmin>
      <div class="main-content">
        <h1>Registrar Producto</h1>
        <v-form v-model="valid" @submit.prevent="submitForm">
          <v-text-field
            v-model="nombre"
            label="Nombre"
            :rules="[rules.required]"
            required
          ></v-text-field>

          <v-textarea
            v-model="descripcion"
            label="Descripción"
            :rules="[rules.required]"
            required
          ></v-textarea>

          <v-text-field
            v-model="precio"
            label="Precio"
            type="number"
            :rules="[rules.required]"
            required
          ></v-text-field>

          <v-text-field
            v-model="stock"
            label="Stock"
            type="number"
            :rules="[rules.required]"
            required
          ></v-text-field>

          <v-text-field
            v-model="categoria"
            label="Categoría"
            :rules="[rules.required]"
            required
          ></v-text-field>

          <v-btn type="submit" color="primary" :disabled="!valid">Agregar Producto</v-btn>
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
const valid = ref(false);

const rules = {
  required: value => !!value || 'Campo requerido',
};

const resetForm = () => {
  nombre.value = '';
  descripcion.value = '';
  precio.value = '';
  stock.value = '';
  categoria.value = '';
};

const submitForm = () => {
  const formData = {
    nombre: nombre.value,
    descripcion: descripcion.value,
    precio: precio.value,
    stock: stock.value,
    categoria: categoria.value,
  };

  fetch('http://mipagina.com/insertarproducto', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData),
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
