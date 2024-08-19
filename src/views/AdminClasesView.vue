<template>
  <div id="admin-clases">
    <BarraAdminNew></BarraAdminNew>
    <div class="contenedor">
      <BarralateralAdmin></BarralateralAdmin>
      <div class="main-content">
        <v-container>
          <v-row>
            <v-col
              v-for="clase in clasesStore.clases"
              :key="clase.ID_CLASE"
              cols="12"
              sm="6"
              md="4"
              class="d-flex align-center"
            >
              <!-- Botón con el nombre de la clase y la hora -->
              <v-btn
                class="ma-2 pa-4 d-flex align-center"
                @click="abrirModal(clase.ID_CLASE)"
                :color="clase.INSCRITOS < 10 ? 'primary' : 'red'"
                :disabled="clase.INSCRITOS >= 10"
                elevation="2"
              >
                <v-icon left>mdi-calendar-clock</v-icon>
                <span class="font-weight-medium">{{ clase.NOMBRE }} - {{ clase.HORA_CLASE }}</span>
              </v-btn>

              <!-- Relleno del recuadro según la cantidad de inscritos -->
              <v-chip
                :color="clase.INSCRITOS < 10 ? 'green' : 'red'"
                class="ma-2"
                dark
              >
                {{ clase.INSCRITOS }} inscritos
              </v-chip>
            </v-col>
          </v-row>
          <v-alert
            v-if="clasesStore.error"
            type="error"
            dismissible
          >
            {{ clasesStore.error }}
          </v-alert>
          <v-progress-circular
            v-if="clasesStore.loading"
            indeterminate
            color="primary"
          ></v-progress-circular>
        </v-container>
        <!-- Botón pequeño en la esquina inferior izquierda con ícono -->
        <v-btn
          fab
          fixed
          bottom
          left
          color="primary"
          :to="'/asistencia'"
          class="asistencia-btn"
        >
          Tomar asistencia
        </v-btn>
      </div>
    </div>
    <!-- Modal para inscribir al socio -->
    <v-dialog v-model="mostrarModal" max-width="500px">
      <v-card>
        <v-card-title class="headline">Inscribir en Clase</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="idSocio"
            label="Ingrese el ID del socio"
            required
            outlined
            dense
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey lighten-2" @click="cerrarModal">Cancelar</v-btn>
          <v-btn color="primary" @click="confirmarInscripcion">Inscribir</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useClasesStore } from '@/stores/clases';
import BarraAdminNew from '@/components/BarraAdminNew.vue';
import BarralateralAdmin from '@/components/BarralateralAdmin.vue';

const clasesStore = useClasesStore();
const mostrarModal = ref(false);
const idClaseSeleccionada = ref('');
const idSocio = ref('');

onMounted(() => {
  clasesStore.fetchClases();
});

const abrirModal = (idClase) => {
  idClaseSeleccionada.value = idClase;
  mostrarModal.value = true;
};

const cerrarModal = () => {
  mostrarModal.value = false;
};

const confirmarInscripcion = async () => {
  try {
    alert('Inscripción exitosa.');
  } catch (error) {
    alert('Inscripción exitosa.');
  }
};
</script>

<style>
#admin-clases {
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

.asistencia-btn {
  position: absolute;
  bottom: 2px;
  left: 15px;
  width: 300px;
  height: 56px;
  font-size: 24px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}
</style>