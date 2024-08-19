<template>
  <div id="admin-registro">
    <BarraAdminNew />
    <div class="contenedor">
      <BarralateralAdmin />
      <div class="main-content">
        <!-- Botón de retroceso -->
        <v-btn
          icon
          @click="goBack"
          class="back-button"
        >
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
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

          <v-row>
            <v-col cols="6">
              <v-text-field
                v-model="precio"
                label="Precio"
                type="number"
                :rules="[rules.required]"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="stock"
                label="Stock"
                type="number"
                :rules="[rules.required]"
                v-if="categoria !== 'CAT05'"
                required
              ></v-text-field>
            </v-col>
          </v-row>

          <v-file-input
            v-model="imagen"
            label="Imagen"
            accept="image/*"
            required
          ></v-file-input>

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

          <!-- Botón de Agregar Producto separado -->
          <div class="submit-container">
            <v-btn type="submit" color="primary" :disabled="!valid">Agregar Producto</v-btn>
          </div>
        </v-form>
      </div>
    </div>

    <!-- Snackbar para mensajes de éxito o error -->
    <v-snackbar
      v-model="snackbar.show"
      :timeout="3000"
      :color="snackbar.color"
      top
      multi-line
    >
      {{ snackbar.message }}
    </v-snackbar>
  </div>
</template>

<script setup>
import BarraAdminNew from '@/components/BarraAdminNew.vue';
import BarralateralAdmin from '@/components/BarralateralAdmin.vue';
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const nombre = ref('');
const descripcion = ref('');
const precio = ref('');
const stock = ref('');
const categoria = ref('');
const imagen = ref(null);
const valid = ref(false);

const categorias = [
  { text: 'Proteína', value: 'CAT01' },
  { text: 'Creatinas', value: 'CAT02' },
  { text: 'Multi-vitaminicos', value: 'CAT03' },
  { text: 'Pre-entrenos', value: 'CAT04' },
  { text: 'Membresias', value: 'CAT05' },
];

const rules = {
  required: value => !!value || 'Campo requerido',
};

const snackbar = ref({
  show: false,
  message: '',
  color: 'success'
});

watch(categoria, (newValue) => {
  if (newValue === 'CAT05') {
    stock.value = '1';
  }
});

const submitForm = async () => {
  if (!nombre.value || !descripcion.value || !precio.value || !categoria.value || !imagen.value) {
    snackbar.value = {
      show: true,
      message: 'Por favor, complete todos los campos.',
      color: 'error'
    };
    return;
  }

  const formData = new FormData();
  formData.append('nombre', nombre.value);
  formData.append('descripcion', descripcion.value);
  formData.append('precio', parseFloat(precio.value));
  formData.append('stock', categoria.value === 'CAT05' ? '1' : stock.value);
  formData.append('categoria', categoria.value);
  formData.append('imagen', imagen.value);

  try {
    const response = await fetch('http://3.149.253.171/insertarproducto', {
      method: 'POST',
      body: formData,
    });

    const json = await response.json();
    console.log('Respuesta del servidor:', json);

    snackbar.value = {
      show: true,
      message: 'Producto registrado exitosamente',
      color: 'success'
    };

    // Agregar un pequeño retraso antes de redirigir
    setTimeout(() => {
      router.push('adminproductos');
    }, 1500);

  } catch (error) {
    console.error('Error durante el registro del producto:', error);
    snackbar.value = {
      show: true,
      message: 'Error al registrar el producto',
      color: 'error'
    };
  }
};

const goBack = () => {
  router.back();
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
  position: relative;
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
  gap: 20px;
}

.submit-container {
  margin-top: 1rem;
}

.back-button {
  position: absolute;
  top: 1rem;
  left: 1rem;
}
</style>
