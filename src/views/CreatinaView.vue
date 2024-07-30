<template>
  <v-layout class="rounded rounded-md main-app">
    <v-app-bar color="black" class="app-bar">
      <v-container fluid>
        <v-row no-gutters>
          <v-col cols="auto" class="d-flex align-center">
            <v-img src="/arsenal.png" alt="Logo" contain class="imagen-barra-izquierda"></v-img>
          </v-col>
          <v-col class="d-flex justify-center align-center">
            <p class="title-text">CREATINAS</p>
          </v-col>
          <v-col cols="auto" class="d-flex align-center barra-derecha">
            <v-img src="/carro3.png" alt="Carrito" contain class="imagen-barra-derecha"></v-img>
            <v-btn class="boton-barra-derecha">INICIAR SESIÓN</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main class="main-container">
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="4" v-for="producto in productos" :key="producto.id">
            <v-card>
              <v-img
  :src="producto.imagen"
  :alt="producto.nombre"
  contain
  height="200px"
  class="imagen-producto"
></v-img>

              <v-card-title class="text-center">{{ producto.nombre }}</v-card-title>
              <v-card-subtitle class="text-center">{{ producto.precio }}</v-card-subtitle>
              <v-card-text class="text-center">{{ producto.descripcion }}</v-card-text>
              <v-card-actions class="d-flex justify-center">
                <v-btn @click="decrementarCantidad(producto)">-</v-btn>
                <span>{{ producto.cantidad }}</span>
                <v-btn @click="incrementarCantidad(producto)">+</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      productos: [
      { id: 1, nombre: 'CREATINA MONOHIDRATADA', precio: '$800.00', imagen: '/creatinas/creatina1.jpg', cantidad: 0, descripcion: 'CREATINA-BIRMAN' },
        { id: 2, nombre: 'TESTRO', precio: '$650.00', imagen: '/creatinas/creatina2.jpg', cantidad: 0, descripcion: 'CREATINA-BHP' },
        { id: 3, nombre: 'CREATINA MONOHIDRATADA', precio: '$450.00', imagen: '/creatinas/creatina3.jpg', cantidad: 0, descripcion: 'CREATINA-DYMATIZE' },
        { id: 4, nombre: 'CREATINA MONOHIDRATADA', precio: '$430.00', imagen: '/creatinas/creatina4.jpg', cantidad: 0, descripcion: 'CREATINA-PHOSPHAGEN' },
        { id: 5, nombre: 'CREATINA HIGH POWDER', precio: '$615.00', imagen: '/creatinas/creatina5.jpg', cantidad: 0, descripcion: 'CREATINA-GAT SPORT' },
        { id: 6, nombre: 'CREATINE MONOHIDRATADA POWDER', precio: '$799.99', imagen: '/creatinas/creatina6.jpg', cantidad: 0, descripcion: 'CREATINA-EVOGEN' },
      ]
    };
  },
  computed: {
    gruposDeProductos() {
      const grupos = [];
      for (let i = 0; i < this.productos.length; i += 3) {
        grupos.push(this.productos.slice(i, i + 3));
      }
      return grupos;
    }
  },
  methods: {
    incrementarCantidad(producto) {
      producto.cantidad++;
    },
    decrementarCantidad(producto) {
      if (producto.cantidad > 0) {
        producto.cantidad--;
      }
    }
  }
};
</script>

<style scoped>
.imagen-producto {
  width: 100%;
}

.main-app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-bar {
  height: 70px;
  display: flex;
  align-items: center;
}

.imagen-barra-izquierda {
  height: 50px;
  width: 50px;
  margin-left: 130px;
}

.imagen-barra-derecha {
  height: 50px;
  width: 50px;
}

.barra-derecha {
  display: flex;
  align-items: center;
}

.boton-barra-derecha {
  margin-left: 10px;
  color: white;
}

.title-text {
  font-size: 50px;
  color: white;
  margin: 0;
}

.main-container {
  background: linear-gradient(to right, black, red);
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.v-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

.v-card-title,
.v-card-subtitle,
.v-card-text {
  text-align: center;
  margin: 8px 0;
  word-wrap: break-word;
}

.v-card-actions {
  display: flex;
  justify-content: center;
  align-items: center;
}

.v-card * {
  white-space: normal;
}
</style>
