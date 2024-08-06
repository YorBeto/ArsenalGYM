<template>
  <v-layout class="rounded rounded-md" style="background-color: #f0f0f0; min-height: 100vh;">
    <barraNav></barraNav>
    <v-main style="background-color: #f0f0f0; display: flex; justify-content: center; align-items: center;">
      <v-card class="pa-5 card-gradiente" max-width="1000">  
        <v-img src="/public/Arsenal.png" alt="Arsenal Logo" class="imagen-arsenal"></v-img>
        <v-card-title class="titulo-formulario">
          Registro
        </v-card-title>
        <v-card-text>
            <v-form ref="form">
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="nombre"
                  label="Nombre"
                  :rules="[v => !!v || 'Nombre es requerido']"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="apellidos"
                  label="Apellidos"
                  :rules="[v => !!v || 'Apellidos son requeridos']"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="fechaNacimiento"
                  label="Fecha de Nacimiento"
                  type="date"
                  :rules="[v => !!v || 'Fecha de nacimiento es requerida']"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-select
                  v-model="sexo"
                  :items="['Masculino', 'Femenino']"
                  label="Sexo"
                  :rules="[v => !!v || 'Sexo es requerido']"
                ></v-select>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="correo"
                  label="Correo"
                  type="email"
                  :rules="[v => !!v || 'Correo es requerido', v => /.+@.+/.test(v) || 'Correo debe ser válido']"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="telefono"
                  label="Teléfono"
                  type="tel"
                  :rules="[v => !!v || 'Teléfono es requerido', v => /^[0-9]{10}$/.test(v) || 'Teléfono debe ser válido']"
                ></v-text-field>
              </v-col>
              <v-col cols="12" v-if="datosBasicosCompletos">
                <v-text-field
                  v-model="contrasena"
                  label="Contraseña"
                  type="password"
                  :rules="[v => !!v || 'Contraseña es requerida']"
                ></v-text-field>
              </v-col>
              <v-col cols="12" v-if="datosBasicosCompletos">
                <v-text-field
                  v-model="confirmarContrasena"
                  label="Confirmar Contraseña"
                  type="password"
                  :rules="[v => !!v || 'Confirmar contraseña es requerida', v => v === contrasena || 'Las contraseñas deben coincidir']"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <router-link to="Login"><v-btn color="primary" :disabled="!formCompleto" @click="registrar">
            Registrarse
          </v-btn> </router-link>
        </v-card-actions>
      </v-card>
    </v-main>

    <!-- Dialogo para mostrar el mensaje de confirmación -->
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline">Confirmación</v-card-title>
        <v-card-text>
          <div class="text-center">
            <v-icon color="green" large>mdi-check-circle</v-icon>
            <p>Registro exitoso</p>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Dialogo para mostrar el mensaje de error -->
    <v-dialog v-model="errorDialog" max-width="290">
      <v-card>
        <v-card-title class="headline">Error</v-card-title>
        <v-card-text>
          <div class="text-center">
            <v-icon color="red" large>mdi-alert-circle</v-icon>
            <p>{{ errorMessage }}</p>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="errorDialog = false">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/userStore';
import barraNav from '@/components/barraNav.vue';

const nombre = ref('');
const apellidos = ref('');
const fechaNacimiento = ref('');
const sexo = ref('');
const correo = ref('');
const telefono = ref('');
const contrasena = ref('');
const confirmarContrasena = ref('');
const router = useRouter();
const dialog = ref(false);
const errorDialog = ref(false);
const errorMessage = ref('');

const userStore = useUserStore();

const datosBasicosCompletos = computed(() => {
  return (
    nombre.value &&
    apellidos.value &&
    fechaNacimiento.value &&
    sexo.value &&
    correo.value &&
    /.+@.+/.test(correo.value) &&
    telefono.value &&
    /^[0-9]{10}$/.test(telefono.value)
  );
});

const formCompleto = computed(() => {
  return (
    datosBasicosCompletos.value &&
    contrasena.value &&
    confirmarContrasena.value &&
    contrasena.value === confirmarContrasena.value
  );
});

const registrar = async () => {
  if (formCompleto.value) {
    const requestData = {
      nombre: nombre.value,
      apellidos: apellidos.value,
      fechaNacimiento: fechaNacimiento.value,
      sexo: sexo.value === 'Masculino' ? 'M' : 'F',
      correo: correo.value,
      telefono: telefono.value,
      contrasena: contrasena.value
    };

    console.log('Datos a enviar:', requestData); // Agregar consola para depuración

    try {
      const response = await fetch('http://mipagina.com/registro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
      });

      const result = await response.json();

      if (result.success) {
        // Guarda los datos del usuario en el store
        userStore.setUsuario({
          nombre: nombre.value,
          correo: correo.value,
          fecha_registro: new Date().toISOString().split('T')[0], // Formato de fecha YYYY-MM-DD
        });

        dialog.value = true;
        setTimeout(() => {
          router.push({ name: 'perfil' }); // Redirige al perfil después de 3 segundos
        }, 3000);
      } else {
        errorMessage.value = result.message;
        errorDialog.value = true;
        console.error('Error al registrar:', result.message);
      }
    } catch (error) {
      errorMessage.value = 'Error en la solicitud';
      errorDialog.value = true;
      console.error('Error en la solicitud:', error);
    }
  }
};
</script>

<style scoped>
.v-card {
  width: 100%;
  max-width: 600px;
  margin-top: 15px;
  margin-bottom: 25px;
  background: linear-gradient(to bottom, black, red);
  color: white; /* Asegura que el texto sea visible en el fondo oscuro */
}

.v-main {
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.v-btn {
  margin-top: 20px;
}

.imagen-arsenal {
  width: 100%;
  max-width: 150px;
  margin: auto;
  display: block;
}

.titulo-formulario {
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}
</style>
