<template>
  <barraNav></barraNav>
  <v-container>
    <v-row class="py-10" justify="center">
      <v-col cols="12" md="10">
        <v-card class="pa-6" elevation="2">
          <v-card-title class="text-h5 font-weight-bold">Tu carrito de compras</v-card-title>
          <v-divider></v-divider>
          <v-row v-if="carritoStore.productos.length === 0" class="text-center">
            <v-col cols="12">
              <v-icon size="100" color="blue">mdi-cart-outline</v-icon>
              <p class="text-h6">Tu carrito está vacío</p>
            </v-col>
          </v-row>
          <v-row v-else>
            <v-col v-for="(producto) in carritoStore.productos" :key="producto.ID_PRODUCTO" cols="12" md="4">
              <v-card class="mb-4" outlined>
                <v-img :src="producto.imagen || 'https://via.placeholder.com/150'" alt="Imagen del producto" aspect-ratio="1.1" class="rounded-top"></v-img>
                <v-card-title class="text-h6">{{ producto.NOMBRE }}</v-card-title>
                <v-card-subtitle class="text-subtitle-2">{{ producto.CATEGORIA }}</v-card-subtitle>
                <v-card-text>
                  <p>{{ producto.DESCRIPCION }}</p>
                  <p class="text-h6 font-weight-bold">{{ producto.PRECIO }} MX</p>
                  <v-row align="center" justify="space-between">
                    <v-col class="d-flex align-center">
                      <v-btn icon small @click="decreaseQuantity(producto.ID_PRODUCTO)">
                        <v-icon small>mdi-minus-circle-outline</v-icon>
                      </v-btn>
                      <p class="mx-2">{{ producto.cantidad }}</p>
                      <v-btn icon small @click="increaseQuantity(producto.ID_PRODUCTO)">
                        <v-icon small>mdi-plus-circle-outline</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                  <v-chip v-if="producto.STOCK !== null" color="green lighten-4" text-color="green darken-2">
                    Stock: {{ producto.STOCK }}
                  </v-chip>
                </v-card-text>
                <v-card-actions class="justify-end">
                  <v-btn text color="red darken-2" @click="removeFromCart(producto.ID_PRODUCTO)">Eliminar</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>

          <!-- Total y Botón de Pago -->
          <v-divider class="my-4"></v-divider>
          <v-row>
            <v-col cols="12" class="d-flex justify-end">
              <v-card-subtitle class="text-h6 font-weight-bold">Total: {{ totalCarrito }} MX</v-card-subtitle>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="d-flex justify-end">
              <v-btn color="blue" @click="proceedToPayment">Proceder al pago</v-btn>
              <v-btn color="blue" :href="paymentLink" target="_blank" rel="noopener noreferrer">Pagar</v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <h2 class="mt-10">Productos recomendados</h2>
    <v-row>
      <v-col v-for="producto in recommendedProductos" :key="producto.ID_PRODUCTO" cols="12" md="4">
        <v-card class="mx-auto my-4" max-width="344" elevation="2">
          <v-img :src="producto.imagen || 'https://via.placeholder.com/150'" alt="Imagen del producto" aspect-ratio="1.5" class="rounded-top"></v-img>
          <v-card-title>{{ producto.NOMBRE }}</v-card-title>
          <v-card-subtitle>{{ producto.CATEGORIA }}</v-card-subtitle>
          <v-card-text>
            <p>{{ producto.DESCRIPCION }}</p>
            <p class="text-h6 font-weight-bold">{{ producto.PRECIO }} MX</p>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="addToCart(producto)">Agregar al carrito</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { computed } from 'vue';
import { useCarritoStore } from '@/stores/carrito';
import { useProductosStore } from '@/stores/productos';
import barraNav from '@/components/barraNav.vue';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_live_51PmMIhC8RB5JM6EJHOootuUuCTwNCgif5cfANSBEX6N5Ntt55dkSBcgC5CxcECRGMWtVJhdch5eRuy3RiPqvDLDU004k1T5VUs'); // Reemplaza con tu clave pública

const carritoStore = useCarritoStore();
const productosStore = useProductosStore();

const proceedToPayment = async () => {
  const stripe = await stripePromise;

  try {
    // Envía la solicitud a tu backend para crear una sesión de pago
    const response = await fetch('http://mipagina.com/pago', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: carritoStore.productos.map(producto => ({
          name: producto.NOMBRE,
          price: producto.PRECIO,
          quantity: producto.cantidad,
        })),
      }),
    });

    if (!response.ok) {
      throw new Error('Error al crear la sesión de pago');
    }

    const { id } = await response.json();

    // Redirige a Stripe Checkout
    const { error } = await stripe.redirectToCheckout({ sessionId: id });

    if (error) {
      console.error('Error durante la redirección a Stripe Checkout:', error);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

const removeFromCart = (ID_PRODUCTO) => {
  carritoStore.removeProducto(ID_PRODUCTO);
};

const addToCart = (producto) => {
  carritoStore.addProducto(producto);
};

// Increment the quantity of a product in the cart
const increaseQuantity = (ID_PRODUCTO) => {
  carritoStore.addCantidad(ID_PRODUCTO);
};

// Decrement the quantity of a product in the cart
const decreaseQuantity = (ID_PRODUCTO) => {
  const producto = carritoStore.productos.find(p => p.ID_PRODUCTO === ID_PRODUCTO);
  if (producto && producto.cantidad > 1) {
    producto.cantidad -= 1;
  } else {
    carritoStore.removeProducto(ID_PRODUCTO);
  }
};

// Computed property to get recommended products
const recommendedProductos = computed(() => {
  const allProductos = productosStore.productos;
  const carritoIDs = carritoStore.productos.map(p => p.ID_PRODUCTO);

  // Filter out products already in the cart
  const filteredProductos = allProductos.filter(producto => !carritoIDs.includes(producto.ID_PRODUCTO));

  // Get a random selection of up to 3 products
  return filteredProductos.sort(() => 0.5 - Math.random()).slice(0, 3);
});

// Computed property to calculate the total amount of the cart
const totalCarrito = computed(() => {
  return carritoStore.productos.reduce((total, producto) => total + (producto.PRECIO * producto.cantidad), 0).toFixed(2);
});


  

</script>