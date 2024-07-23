<template>
  <v-layout class="rounded rounded-md" style="background-color: #f0f0f0; min-height: 100vh; position: relative; justify-content: center; align-items: center;">
    <barraNav></barraNav>
    <v-app>
      <v-container class="container-margin">
        <v-row justify="center">
          <v-col cols="12" md="6">
            <v-card>
              <v-card-title class="headline">Citas InBody</v-card-title>
              <v-card-text>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-row>
                    <v-col cols="12">
                      <v-select
                        :items="appointmentSlots"
                        label="Selecciona tu cita"
                        v-model="selectedAppointment"
                        :rules="[v => !!v || 'Seleccione una cita']"
                      ></v-select>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        label="Correo Electrónico"
                        v-model="email"
                        type="email"
                        :rules="[v => !!v || 'Correo electrónico requerido', v => /.+@.+/.test(v) || 'Correo electrónico inválido']"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row justify="center" class="mt-3">
          <v-col cols="12" md="6" class="text-center">
            <v-btn color="red" class="white--text" @click="confirmAppointment">Confirmar</v-btn>
          </v-col>
        </v-row>
      </v-container>
      <img src="/INB270.png" alt="InBody" class="inbody-image">
    </v-app>
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline">Confirmación</v-card-title>
        <v-card-text>
          <div class="text-center">
            <v-icon color="green" large>mdi-check-circle</v-icon>
            <p>Cita agendada con éxito</p>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      appointmentSlots: this.generateAppointmentSlots(),
      selectedAppointment: null,
      email: '',
      valid: false,
      dialog: false
    };
  },
  methods: {
    generateAppointmentSlots() {
      const slots = [];
      const startHour = 9; // 9 AM
      const endHour = 17; // 5 PM
      const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
      const currentDate = new Date();
      const endDate = new Date(currentDate.getFullYear(), 11, 31); // End of current year

      while (currentDate <= endDate) {
        if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) { // Exclude weekends
          for (let hour = startHour; hour < endHour; hour++) {
            slots.push(`${daysOfWeek[currentDate.getDay() - 1]} ${currentDate.toLocaleDateString()} ${hour}:00`);
            slots.push(`${daysOfWeek[currentDate.getDay() - 1]} ${currentDate.toLocaleDateString()} ${hour}:30`);
          }
        }
        currentDate.setDate(currentDate.getDate() + 1);
      }

      return slots;
    },
    confirmAppointment() {
      if (this.$refs.form.validate()) {
        console.log('Cita confirmada:', this.selectedAppointment, this.email);
        this.dialog = true;
      }
    }
  }
};
</script>

<style>
.v-application {
  background-color: #f5f5f5;
}
.container-margin {
  margin-top: 110px; /* Ajusta este valor según sea necesario */
}
.inbody-image {
  position: absolute;
  top: 100px; /* Ajusta este valor según sea necesario */
  right: 10px; /* Ajusta este valor según sea necesario */
  max-width: 1000px;
  height: 500px;
}
</style>

<script setup>
import barraNav from '@/components/barraNav.vue';
</script>
