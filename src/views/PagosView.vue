<template>
  <v-container>
    <v-row justify="end">
      <v-col cols="12" md="6">
        <v-card>
          <v-img src="arsepago.png" alt="Arsenal Image" class="arsepago"></v-img>
          <v-divider class="my-3"></v-divider>

          <!-- Contact Information -->
          <v-card-text>
            <v-row>
              <v-col cols="12" class="mb-1">
                <v-title>Información de Contacto</v-title>
                <v-text-field
                  v-model="email"
                  label="correo electrónico"
                  placeholder="correoelectrónico@ejemplo.com"
                  outlined
                  dense
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="mt-n5 mb-0">
                <v-text-field
                  v-model="phone"
                  label="Teléfono"
                  placeholder="55 2112 1789"
                  outlined
                  dense
                  required
                  :rules="[
                  v => v.length === 10 || 'El número de teléfono debe tener 10 dígitos',
                  v => /^[0-9]+$/.test(v) || 'El número de teléfono debe contener solo números'
                ]"
                @blur="isPhoneTouched = true"
                ></v-text-field>
              </v-col>
            </v-row>

            <!-- Card Information -->
            <v-row>
              <v-col cols="12">
                <v-title>Información de la Tarjeta</v-title>
                <v-text-field
                  v-model="cardNumber"
                  label="Número de Tarjeta"
                  placeholder="1234 1234 1234 1234"
                  outlined
                  dense
                  required
                  :rules="[
                  v => v.length === 16 || 'El número de tarjeta debe tener 16 dígitos',
                  v => /^[0-9]+$/.test(v) || 'El número de tarjeta debe contener solo números'
                ]"
                ></v-text-field>
              </v-col>
              <v-col cols="6" class="mt-n5 mb-0">
                <v-text-field
                  v-model="expiry"
                  placeholder="MM/AA"
                  outlined
                  dense
                  required
                  append-inner-icon="mdi-credit-card"
                  :rules="[
                  v => /^[0-9]{2}\/[0-9]{2}$/.test(v) || 'Formato inválido, debe ser MM/AA',
                  ]"
                  maxlength="5" 
                ></v-text-field>
              </v-col>
              <v-col cols="6" class="mt-n5 mb-0">
                <v-text-field
                  v-model="cvc"
                  placeholder="CVC"
                  outlined
                  dense
                  required
                  :rules="[
                  v => v.length === 3 || 'El CVC debe tener 3 dígitos',
                  v => /^[0-9]+$/.test(v) || 'El CVC debe contener solo números'
                ]"
                ></v-text-field>
              </v-col>
            </v-row>

            <!-- Cardholder Name -->
            <v-row>
              <v-col cols="12" class="mt-n5 mb-0">
                <v-text-field
                  v-model="cardHolder"
                  label="Nombre del titular de tarjeta"
                  placeholder="Nombre completo"
                  outlined
                  dense
                  required
                ></v-text-field>
              </v-col>
            </v-row>

            <!-- Country and Postal Code -->
            <v-row>
              <v-col cols="12" class="mt-n5 mb-0">
                <v-select
                  v-model="country"
                  :items="countries"
                  label="País o región"
                  outlined
                  dense
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" class="mt-n5 mb-0">
                <v-text-field
                  v-model="postalCode"
                  label="Código postal"
                  outlined
                  dense
                  required
                  :rules="[
                  v => !v || v.length === 5 || 'El código postal debe tener 5 dígitos',
                  v => !v || /^[0-9]+$/.test(v) || 'El código postal debe contener solo números'
                ]"
                ></v-text-field>
              </v-col>
            </v-row>

            <!-- Subscribe Button -->
            <v-row>
              <v-col cols="12">
                <v-btn color="primary" block @click="subscribe">
                  Realizar Pago
                </v-btn>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12">
                <p class="text-caption mt-3">
                  Tu pago es seguro es seguro con Arsenal. 
                </p>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  data() {
    return {
      email: '',
      phone: '',
      cardNumber: '',
      expiry: '',
      cvc: '',
      cardHolder: '',
      country: '',
      postalCode: '',
      isPhoneTouched: false,
      countries: ['Estados Unidos', 'México'], // Agrega los países que necesites
    };
  },
  methods: {
    subscribe() {
      // Aquí iría la lógica para procesar la suscripción
      alert("Procesando suscripción...");
    },
    formatCardNumber(value) {
      // Formato para el número de tarjeta: 1234 1234 1234 1234
      this.cardNumber = value
        .replace(/\s/g, '') // Elimina espacios existentes
        .replace(/(\d{4})(?=\d)/g, '$1 '); // Inserta un espacio cada 4 dígitos
    },
    formatExpiry(value) {
      // Formato para la fecha de expiración: MM/AA
      this.expiry = value
        .replace(/\D/g, '') // Elimina caracteres no numéricos
        .replace(/(\d{2})(\d{2})/, '$1/$2'); // Inserta el '/'
    }
  }
};

</script>

<style scoped>
.apple-pay-btn {
  background-color: #000;
  color: #fff;
  font-weight: bold;
}
.text-caption {
  font-size: 12px;
  color: #6c757d;
}

.telefono{
  gap: 25px;
}

.arsepago{
  height: 190px;
}
</style>
