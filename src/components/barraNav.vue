<template>
  <v-app-bar color="black" app dense>
    <v-container fluid>
      <v-row align="center" justify="space-between">
        <v-col cols="auto" class="d-flex align-center">
          <v-img 
            src="/arsenal.png"
            alt="Logo"
            contain
            class="imagen-izquierda"
            @click="scrollToTop"
          ></v-img>
        </v-col>

        <v-col class="d-none d-md-flex" cols="auto">
          <v-row no-gutters>
            <v-col cols="auto">
              <router-link to="/">
                <v-btn class="boton-bar">INICIO</v-btn>
              </router-link>
            </v-col>
            <v-col cols="auto">
              <router-link to="/Producto">
                <v-btn class="boton-bar">PRODUCTOS</v-btn>
              </router-link>
            </v-col>
            <v-col cols="auto">
              <router-link to="/Inbody">
                <v-btn class="boton-bar">INBODY</v-btn>
              </router-link>
            </v-col>
          </v-row>
        </v-col>

        <v-col class="d-flex d-md-none" cols="auto">
          <v-btn icon @click="toggleMenu">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </v-col>

        <v-col cols="auto" class="d-flex justify-end align-center">
          <v-row no-gutters>
            <v-col cols="auto">
              <router-link to="/Login">
                <v-btn icon class="boton-bar boton-iniciar-sesion">
                  <v-icon>mdi-account</v-icon>
                </v-btn>
              </router-link>
            </v-col>
            <v-col cols="auto" class="cart-container d-flex align-center">
              <router-link to="/carrito">
                <v-btn icon class="boton-bar boton-compras" :class="{ 'cart-updated': isCartUpdated }">
                  <v-icon>mdi-cart</v-icon>
                </v-btn>
              </router-link>
              <v-badge
                v-if="carritoCount > 0"
                color="red"
                :content="carritoCount"
                overlap
                class="cart-badge"
              ></v-badge>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <v-menu
      v-model="menuVisible"
      offset-y
      absolute
      top
      transition="slide-x-reverse-transition"
    >
      <v-list>
        <v-list-item link :to="{ path: '/' }">
          <v-list-item-title>INICIO</v-list-item-title>
        </v-list-item>
        <v-list-item link :to="{ path: '/Producto' }">
          <v-list-item-title>PRODUCTOS</v-list-item-title>
        </v-list-item>
        <v-list-item link :to="{ path: '/Inbody' }">
          <v-list-item-title>INBODY</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<style scoped>
.imagen-izquierda {
  width: 50px; /* Ajusta el ancho según sea necesario */
  height: auto; /* Mantiene la proporción de la imagen */
  cursor: pointer; /* Cambia el cursor al pasar sobre la imagen si es clickeable */
}

.boton-bar {
  color: white;
  font-size: 16px;
  min-width: 100px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  text-align: center;
}

.boton-iniciar-sesion,
.boton-compras {
  margin-left: 5px;
}

.v-menu__content {
  min-width: 200px;
}

.d-md-flex {
  display: flex;
}

.d-none {
  display: none;
}

@media (max-width: 960px) {
  .d-md-flex {
    display: none;
  }
  .d-none {
    display: flex;
  }
  .imagen-izquierda {
    width: 40px; /* Ajusta el ancho para pantallas más pequeñas */
  }
  .boton-bar {
    font-size: 14px;
    min-width: 80px;
  }
}

.cart-container {
  position: relative;
  display: flex;
  align-items: center;
}

.cart-badge {
  position: absolute;
  top: -8px;
  right: -8px;
  font-size: 12px;
  min-width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border-radius: 50%;
  background-color: black;
  color: black;
}

.cart-updated {
  animation: shake 0.5s;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}
</style>

<script>
export default {
  props: {
    carritoCount: {
      type: Number,
      default: 0
    },
    isCartUpdated: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      menuVisible: false
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    }
  }
};
</script>
