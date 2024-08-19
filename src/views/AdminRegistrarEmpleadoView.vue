<template>
  <div id="admin-registro-empleados">
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
        <div class="form-container">
          <h1>Registrar Empleado</h1>
          <v-form v-model="valid" @submit.prevent="submitForm">
            <div class="form-row">
              <v-text-field
                v-model="nombre"
                label="Nombre"
                :rules="[rules.required]"
                required
                outlined
                dense
                class="input-field"
              ></v-text-field>

              <v-text-field
                v-model="apellidos"
                label="Apellidos"
                :rules="[rules.required]"
                required
                outlined
                dense
                class="input-field"
              ></v-text-field>
            </div>

            <div class="form-row">
              <v-text-field
                v-model="fechaNacimiento"
                label="Fecha de Nacimiento"
                type="date"
                :rules="[rules.required]"
                required
                outlined
                dense
                class="input-field"
              ></v-text-field>

              <v-select
                v-model="sexo"
                :items="sexos"
                label="Sexo"
                :rules="[rules.required]"
                required
                outlined
                dense
                class="input-field"
              ></v-select>
            </div>

            <div class="form-row">
              <v-text-field
                v-model="correo"
                label="Correo Electrónico"
                type="email"
                :rules="[rules.required, rules.email]"
                required
                outlined
                dense
                class="input-field"
              ></v-text-field>

              <v-text-field
                v-model="telefono"
                label="Teléfono"
                :rules="[rules.required, rules.telefono]"
                required
                outlined
                dense
                class="input-field"
              ></v-text-field>
            </div>

            <div class="form-row">
              <v-text-field
                v-model="contrasena"
                label="Contraseña"
                type="password"
                :rules="[rules.required, rules.password]"
                required
                outlined
                dense
                class="input-field"
              ></v-text-field>

              <v-textarea
                v-model="direccion"
                label="Dirección"
                :rules="[rules.required]"
                required
                outlined
                dense
                class="input-field"
              ></v-textarea>
            </div>

            <div class="form-row">
              <v-text-field
                v-model="curp"
                label="CURP"
                :rules="[rules.required, rules.curp]"
                required
                outlined
                dense
                class="input-field"
              ></v-text-field>

              <v-text-field
                v-model="rfc"
                label="RFC"
                :rules="[rules.required, rules.rfc]"
                required
                outlined
                dense
                class="input-field"
              ></v-text-field>
            </div>

            <div class="submit-container">
              <v-btn type="submit" color="primary" :disabled="!valid">Registrar Empleado</v-btn>
            </div>
          </v-form>
        </div>
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
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const nombre = ref('');
const apellidos = ref('');
const fechaNacimiento = ref('');
const sexo = ref('');
const correo = ref('');
const telefono = ref('');
const contrasena = ref('');
const direccion = ref('');
const curp = ref('');
const rfc = ref('');
const valid = ref(false);

const sexos = [
  'Masculino',
  'Femenino',
  'Otro'
];

const rules = {
  required: value => !!value || 'Campo requerido',
  email: value => /.+@.+\..+/.test(value) || 'Correo electrónico inválido',
  telefono: value => /^\d{10}$/.test(value) || 'Teléfono inválido',
  password: value => value.length >= 6 || 'Contraseña debe tener al menos 6 caracteres',
  curp: value => /^[A-Z]{4}\d{6}[A-Z]{6}[A-Z0-9]{1}$/.test(value) || 'CURP inválido',
  rfc: value => /^[A-Z]{3}\d{6}[A-Z0-9]{3}$/.test(value) || 'RFC inválido',
};

const snackbar = ref({
  show: false,
  message: '',
  color: 'success'
});

const submitForm = async () => {
  if (!nombre.value || !apellidos.value || !fechaNacimiento.value || !sexo.value || !correo.value || !telefono.value || !contrasena.value || !direccion.value || !curp.value || !rfc.value) {
    snackbar.value = {
      show: true,
      message: 'Por favor, complete todos los campos.',
      color: 'error'
    };
    return;
  }

  const empleadoData = {
    nombre: nombre.value,
    apellidos: apellidos.value,
    fechaNacimiento: fechaNacimiento.value,
    sexo: sexo.value,
    correo: correo.value,
    telefono: telefono.value,
    contrasena: contrasena.value,
    direccion: direccion.value,
    curp: curp.value,
    rfc: rfc.value
  };

  try {
    const response = await fetch('http://3.149.253.171/registrarempleado', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(empleadoData),
    });

    const json = await response.json();
    console.log('Respuesta del servidor:', json);

    snackbar.value = {
      show: true,
      message: 'Empleado registrado exitosamente',
      color: 'success'
    };

    // Agregar un pequeño retraso antes de redirigir
    setTimeout(() => {
      router.push('adminempleados');
    }, 1500);

  } catch (error) {
    console.error('Error durante el registro del empleado:', error);
    snackbar.value = {
      show: true,
      message: 'Error al registrar el empleado',
      color: 'error'
    };
  }
};

const goBack = () => {
  router.back();
};
</script>

<style>
#admin-registro-empleados {
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

.form-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 1rem;
}

.input-field {
  width: 100%;
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
