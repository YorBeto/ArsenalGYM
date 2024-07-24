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
          <router-link to="/"><v-btn color="primary" :disabled="!formCompleto" @click="registrar">
            Registrarse
          </v-btn> </router-link>
        </v-card-actions>
      </v-card>
    </v-main>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      nombre: '',
      apellidos: '',
      fechaNacimiento: '',
      sexo: '',
      correo: '',
      telefono: '',
      contrasena: '',
      confirmarContrasena: '',
    };
  },
  computed: {
    datosBasicosCompletos() {
      return (
        this.nombre &&
        this.apellidos &&
        this.fechaNacimiento &&
        this.sexo &&
        this.correo &&
        /.+@.+/.test(this.correo) &&
        this.telefono &&
        /^[0-9]{10}$/.test(this.telefono)
      );
    },
    formCompleto() {
      return (
        this.datosBasicosCompletos &&
        this.contrasena &&
        this.confirmarContrasena &&
        this.contrasena === this.confirmarContrasena
      );
    },
  },
  methods: {
    registrar() {
      if (this.$refs.form.validate()) {
        // Lógica para registrar al usuario
        console.log('Usuario registrado:', {
          nombre: this.nombre,
          apellidos: this.apellidos,
          fechaNacimiento: this.fechaNacimiento,
          sexo: this.sexo,
          correo: this.correo,
          telefono: this.telefono,
          contrasena: this.contrasena,
        });

        // Navegar a HomeView después de registrar
        this.$router.push({ name: 'home' });
      }
    },
  },
};
</script>

<script setup>
import barraNav from '@/components/barraNav.vue';
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
