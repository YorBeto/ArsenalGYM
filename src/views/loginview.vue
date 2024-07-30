<template>
 
  <v-layout class="rounded rounded-md" style="background-color: #f0f0f0; min-height: 100vh;">
    <barraNav></barraNav>

    <v-main style="background-color: #f0f0f0; display: flex; justify-content: center; align-items: center;">
      <v-container>
        <v-row>
          <!-- Formulario para clientes -->
          <v-col cols="12" md="6">
            <v-card class="pa-5" max-width="500">
              <v-card-title class="titulo-formulario">
                Iniciar Sesión
              </v-card-title>
              <v-card-text>
                <v-form ref="form1">
                  <v-text-field
                    v-model="correo"
                    label="Correo electrónico"
                    type="email"
                    :rules="[v => !!v || 'Correo es requerido', v => /.+@.+/.test(v) || 'Correo debe ser válido']"
                  ></v-text-field>
                  <v-text-field
                    v-model="contrasena1"
                    label="Contraseña"
                    type="password"
                    :rules="[v => !!v || 'Contraseña es requerida']"
                  ></v-text-field>
                  <v-btn class="boton-ingresar" @click="ingresarFormulario1">Ingresar</v-btn>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text class="link" @click="olvidarContrasena">¿Has olvidado tu contraseña?</v-btn>
                <router-link to="/Registro" class="link">¿No estás registrado?</router-link>
              </v-card-actions>
            </v-card>
          </v-col>

          <!-- Formulario para socios -->
          <v-col cols="12" md="6">
            <v-card class="pa-5 card-gradiente" max-width="500">
              <v-card-title class="titulo-formulario2">
                Team Arsenal
              </v-card-title>
              <v-card-text>
                <v-form ref="form2">
                  <v-text-field
                    v-model="usuario"
                    label="Usuario"
                    :rules="[v => !!v || 'Usuario es requerido']"
                    class="campo-input-derecha"
                  ></v-text-field>
                  <v-text-field
                    v-model="contrasena2"
                    label="Contraseña"
                    type="password"
                    :rules="[v => !!v || 'Contraseña es requerida']"
                    class="campo-input-derecha"
                  ></v-text-field>
                  <v-btn class="boton-ingresar" @click="ingresarFormulario2">Ingresar</v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-layout>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/userStore';
import barraNav from '@/components/barraNav.vue';

const correo = ref('');
const contrasena1 = ref('');
const usuario = ref('');
const contrasena2 = ref('');
const router = useRouter();
const userStore = useUserStore();

const ingresarFormulario1 = async () => {
  try {
    const response = await fetch('http://mipagina.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        correo: correo.value,
        contrasena: contrasena1.value
      })
    });

    // Leer la respuesta en formato JSON
    const result = await response.json();

    if (result.success) {
      userStore.setUsuario(result.user);
      router.push({ name: 'perfilcliente' });
    } else {
      alert(result.message);
    }
  } catch (error) {
    console.error('Error en la solicitud:', error);
  }
};

const ingresarFormulario2 =  async () => {
  if (usuario.value === 'Peniche1234' && contrasena2.value === '123456') {
    router.push({ name: 'AdminInicio' });
  } 
  else {
    try {
    const response = await fetch('http://mipagina.com/loginSocios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        usuario: usuario.value,
        contrasena: contrasena2.value
      })
    });

    // Leer la respuesta en formato JSON
    const result = await response.json();

    if (result.success) {
      userStore.setUsuario(result.user);
      router.push({ name: 'perfilSocios' });
    } else {
      alert(result.message);
    }
  } catch (error) {
    console.error('Error en la solicitud:', error);
  }
  }
};
</script>

<style scoped>
.v-main {
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.titulo-formulario {
  text-align: center;
  margin-bottom: 20px;
  color: black;
  font-size: 24px;
  font-weight: bold;
}
.titulo-formulario2 {
  text-align: center;
  margin-bottom: 20px;
  color: white;
  font-size: 24px;
  font-weight: bold;
}

.card-gradiente {
  background: linear-gradient(to right, black, red);
  color: white;
}

.boton-ingresar {
  background: linear-gradient(to right, black, red);
  color: white;
  margin-top: 20px;
  width: 100%;
}

.link {
  display: block;
  margin-top: 10px;
  color: black;
  text-align: center;
  text-decoration: underline;
  cursor: pointer;
}

.link:hover {
  color: red;
}
</style>