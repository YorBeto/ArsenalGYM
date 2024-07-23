<template>
  <v-layout class="rounded rounded-md" style="background-color: #f0f0f0; min-height: 100vh;">
    <barraNav></barraNav>
    <v-space></v-space>
  <v-app>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title class="headline">Citas InBody</v-card-title>
            <v-card-text>
              <v-form>
                <v-row>
                  <v-col cols="12" md="4">
                    <v-select
                      :items="days"
                      label="Día"
                      v-model="selectedDay"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-select
                      :items="months"
                      label="Mes"
                      v-model="selectedMonth"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-text-field
                      label="Año"
                      v-model="selectedYear"
                      readonly
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-select
                      :items="times"
                      label="Selecciona la hora de tu cita"
                      v-model="selectedTime"
                    ></v-select>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="Correo Electrónico"
                      v-model="email"
                      type="email"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" class="text-center">
                    <img src="/INB270.png" alt="InBody" class="inbody-image">
                  </v-col>
                </v-row>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="confirmAppointment">Confirmar</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</v-layout>
</template>

<script>
export default {
  data() {
    return {
      days: Array.from({ length: 31 }, (v, k) => k + 1),
      months: [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
      ],
      times: Array.from({ length: 24 * 4 }, (v, k) => {
        const hour = Math.floor(k / 4).toString().padStart(2, '0');
        const minute = (k % 4 * 15).toString().padStart(2, '0');
        return `${hour}:${minute}`;
      }),
      selectedDay: null,
      selectedMonth: null,
      selectedYear: new Date().getFullYear(),
      selectedTime: null,
      email: ''
    };
  },
  methods: {
    confirmAppointment() {
      // Lógica para confirmar la cita
      console.log('Cita confirmada:', this.selectedDay, this.selectedMonth, this.selectedYear, this.selectedTime, this.email);
    }
  }
};
</script>

<style>
.v-application {
  background-color: #f5f5f5;
}
.inbody-image {
  max-width: 100%;
  height: auto;
}
</style>

<script setup>
import barraNav from '@/components/barraNav.vue';
</script>