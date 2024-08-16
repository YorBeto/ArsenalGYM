<template>
  <v-container fluid>
    <v-row justify="center" align="center" class="fill-height">
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
                  label="Correo Electrónico"
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
                    v => v.length === 10 || 'El número de teléfono debe tener 10 dígitos'
                  ]"
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
                  label="Nombre del Titular de Tarjeta"
                  placeholder="Nombre completo"
                  outlined
                  dense
                  required
                ></v-text-field>
              </v-col>
            </v-row>

            <!-- Postal Code -->
            <v-row>
              <v-col cols="12" class="mt-n5 mb-0">
                <v-text-field
                  v-model="postalCode"
                  label="Código Postal"
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

            <v-row>
              <v-col cols="12" class="d-flex justify-end">
                <v-card-subtitle class="text-h6 font-weight-bold">Total: {{ totalCarrito }} MX</v-card-subtitle>
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
                  Tu pago es seguro con Arsenal.
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
      postalCode: '',
      totalCarrito: 0, // Asegúrate de que esta variable esté correctamente actualizada
    };
  },
  methods: {
    async subscribe() {
      // Validar datos antes de enviar la solicitud
      if (!this.validateForm()) {
        alert("Por favor, complete todos los campos correctamente.");
        return;
      }

      // Preparar los datos para enviar
      const data = {
        email: this.email,
        productos: this.getProductData(), // Método que obtendrá los datos de los productos en tu carrito
        formaPago: 'TARJETA', // O 'EFECTIVO' según tu lógica
        phone: this.phone,
        cardNumber: this.cardNumber.replace(/\s+/g, ''), // Eliminar espacios en blanco
        expiry: this.expiry,
        cvc: this.cvc,
        cardHolder: this.cardHolder,
        postalCode: this.postalCode,
      };

      try {
        // Enviar datos al servidor
        const response = await fetch('http://mipagina.com/generarVentaYPago.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });

        // Manejar la respuesta
        const result = await response.json();
        if (result.success) {
          alert("Pago realizado con éxito");
          // Opcionalmente, podrías redirigir al usuario a otra página
          // this.$router.push('/thank-you'); // Si usas Vue Router
        } else {
          alert("Error en el proceso de pago: " + result.message);
        }
      } catch (error) {
        // Manejar el error
        alert("Error en el proceso de pago: " + error.message);
      }
    },
    validateForm() {
      // Validar todos los campos necesarios antes de enviar
      return this.email && this.phone && this.cardNumber && this.expiry && this.cvc && this.cardHolder && this.postalCode;
    },
    getProductData() {
      // Reemplaza esto con la lógica para obtener los datos reales del carrito
      return [
        { ID_PRODUCTO: '123', CANTIDAD: 1 },
        { ID_PRODUCTO: '456', CANTIDAD: 2 }
      ];
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
.telefono {
  gap: 25px;
}
.arsepago {
  height: 190px;
}
.fill-height {
  min-height: 100vh;
}
</style>
