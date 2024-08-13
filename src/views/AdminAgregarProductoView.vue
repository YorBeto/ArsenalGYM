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

          <div class="categoria-container">
            <label>Categoría</label>
            <div class="categoria-buttons">
              <v-btn
                v-for="cat in categorias"
                :key="cat.value"
                :color="categoria === cat.value ? 'primary' : 'default'"
                @click="categoria = cat.value"
              >
                {{ cat.text }}
              </v-btn>
            </div>
          </div>

          <v-file-input
            v-model="imagen"
            label="Imagen"
            accept="image/*"
            @change="onImageChange"
          ></v-file-input>

          <v-img
            v-if="previewImage"
            :src="previewImage"
            class="preview-image"
          ></v-img>

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
const imagen = ref(null);
const previewImage = ref('');
const valid = ref(false);

const categorias = [
  { text: 'Proteína', value: 'CAT01' },
  { text: 'Creatinas', value: 'CAT02' },
  { text: 'Multivitamínicos', value: 'CAT03' },
  { text: 'Pre-entreno', value: 'CAT04' },
  { text: 'Membresía', value: 'CAT05' },
];

const rules = {
  required: value => !!value || 'Campo requerido',
};

const resetForm = () => {
  nombre.value = '';
  descripcion.value = '';
  precio.value = '';
  stock.value = '';
  categoria.value = '';
  imagen.value = null;
  previewImage.value = '';
};

const submitForm = () => {
  if (!nombre.value || !descripcion.value || !precio.value || !stock.value || !categoria.value || !imagen.value) {
    alert('Por favor, complete todos los campos.');
    return;
  }

  const formData = new FormData();
  formData.append('nombre', nombre.value);
  formData.append('descripcion', descripcion.value);
  formData.append('precio', parseFloat(precio.value));
  formData.append('stock', parseInt(stock.value));
  formData.append('categoria', categoria.value);
  formData.append('imagen', imagen.value);

  fetch('http://mipagina.com/insertarproducto', {
    method: 'POST',
    body: formData,
  })
    .then(response => response.text()) // Obtén la respuesta como texto
    .then(text => {
      console.log('Respuesta del servidor:', text); // Imprime la respuesta para depuración
      try {
        const json = JSON.parse(text); // Intenta convertir la respuesta a JSON
        if (json.success) {
          alert('Producto registrado exitosamente');
          resetForm();
        } else {
          alert('Error al registrar Producto: ' + json.message);
        }
      } catch (e) {
        console.error('Error al analizar JSON:', e);
        alert('Error al registrar Producto. La respuesta del servidor no es válida.');
      }
    })
    .catch(error => {
      console.error('Error durante el registro del producto:', error);
      alert('Error al registrar Producto. Por favor, inténtelo de nuevo más tarde.');
    });
};

const onImageChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      previewImage.value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
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

.categoria-container {
  margin-top: 1rem;
}

.categoria-buttons {
  display: flex;
  gap: 10px;
}

.preview-image {
  margin-top: 1rem;
  max-width: 300px;
  max-height: 300px;
}
</style>
