<template>
    <div id="admin-registro-empleados">
      <BarraAdminNew></BarraAdminNew>
      <div class="contenedor">
        <BarralateralAdmin></BarralateralAdmin>
        <div class="main-content">
          <h1>Registrar Empleado</h1>
          <v-form v-model="valid" @submit.prevent="submitForm">
            <v-text-field
              v-model="nombre"
              label="Nombre"
              :rules="[rules.required]"
              required
            ></v-text-field>
  
            <v-text-field
              v-model="apellidos"
              label="Apellidos"
              :rules="[rules.required]"
              required
            ></v-text-field>
  
            <v-text-field
              v-model="fechaNacimiento"
              label="Fecha de Nacimiento"
              type="date"
              :rules="[rules.required]"
              required
            ></v-text-field>
  
            <v-select
              v-model="sexo"
              :items="sexos"
              label="Sexo"
              :rules="[rules.required]"
              required
            ></v-select>
  
            <v-text-field
              v-model="correo"
              label="Correo Electrónico"
              type="email"
              :rules="[rules.required, rules.email]"
              required
            ></v-text-field>
  
            <v-text-field
              v-model="telefono"
              label="Teléfono"
              :rules="[rules.required, rules.telefono]"
              required
            ></v-text-field>
  
            <v-text-field
              v-model="contrasena"
              label="Contraseña"
              type="password"
              :rules="[rules.required, rules.password]"
              required
            ></v-text-field>
  
            <v-textarea
              v-model="direccion"
              label="Dirección"
              :rules="[rules.required]"
              required
            ></v-textarea>
  
            <v-text-field
              v-model="curp"
              label="CURP"
              :rules="[rules.required, rules.curp]"
              required
            ></v-text-field>
  
            <v-text-field
              v-model="rfc"
              label="RFC"
              :rules="[rules.required, rules.rfc]"
              required
            ></v-text-field>
  
            <v-text-field
              v-model="numeroSeguro"
              label="Número de Seguro Social"
              :rules="[rules.required, rules.numeroSeguro]"
              required
            ></v-text-field>
  
            <v-btn type="submit" color="primary" :disabled="!valid">Registrar Empleado</v-btn>
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
  const apellidos = ref('');
  const fechaNacimiento = ref('');
  const sexo = ref('');
  const correo = ref('');
  const telefono = ref('');
  const contrasena = ref('');
  const direccion = ref('');
  const curp = ref('');
  const rfc = ref('');
  const numeroSeguro = ref('');
  const valid = ref(false);
  
  const sexos = ['Masculino', 'Femenino'];
  
  const rules = {
    required: value => !!value || 'Campo requerido',
    email: value => /.+@.+\..+/.test(value) || 'Correo electrónico no válido',
    telefono: value => /^[0-9]{10}$/.test(value) || 'Número de teléfono no válido',
    password: value => value.length >= 6 || 'La contraseña debe tener al menos 6 caracteres',
    curp: value => /^([A-Z]{4}[0-9]{6}[H|M][A-Z]{5}[0-9]{2})$/.test(value) || 'CURP no válido',
    rfc: value => /^([A-ZÑ&]{3,4})(\d{6})((\D|\d){3})?$/.test(value) || 'RFC no válido',
    numeroSeguro: value => /^[0-9]{11}$/.test(value) || 'Número de Seguro Social no válido',
  };

  const limpiarFormulario = () => {
    nombre.value = '';
    apellidos.value = '';
    fechaNacimiento.value = '';
    sexo.value = '';
    correo.value = '';
    telefono.value = '';
    contrasena.value = '';
    direccion.value = '';
    curp.value = '';
    rfc.value = '';
    numeroSeguro.value = '';
  };
  
  const submitForm = () => {
    const data = {
      nombre: nombre.value,
      apellidos: apellidos.value,
      fechaNacimiento: fechaNacimiento.value,
      sexo: sexo.value === 'Masculino' ? 'M' : 'F',
      correo: correo.value,
      telefono: telefono.value,
      contrasena: contrasena.value,
      direccion: direccion.value,
      curp: curp.value,
      rfc: rfc.value,
      numeroSeguro: numeroSeguro.value
    };
  
    fetch('http://mipagina.com/registroEmpleados', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(json => {
        if (json.success) {
          alert('Empleado registrado exitosamente');
          limpiarFormulario();
        } else {
          alert('Error al registrar empleado: ' + json.message);
        }
      });
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
  }
  
  h1 {
    margin-bottom: 1rem;
  }
  
  .v-form {
    max-width: 600px;
    margin: 0 auto;
  }
  </style>
  