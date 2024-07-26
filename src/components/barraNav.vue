<template>
  <v-app-bar color="black" app style="height: 70px; font-size: 24px; display: flex; align-items: center;">
    <v-img
      src="/arsenal.png"
      alt="Logo"
      contain
      class="imagen-izquierda"
      @click="scrollToTop"
    ></v-img>
    <v-spacer></v-spacer>
    <div class="nav-buttons">
      <router-link to="/">
        <v-btn class="boton-bar">INICIO</v-btn>
      </router-link>
      <router-link to="/Producto">
        <v-btn class="boton-bar">PRODUCTOS</v-btn>
      </router-link>
      <router-link to="Inbody">
        <v-btn class="boton-bar">INBODY</v-btn>
      </router-link>
    </div>
    <v-spacer></v-spacer>
    <div class="right-buttons">
      <router-link to="/Login">
        <v-btn icon class="boton-bar boton-iniciar-sesion">
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </router-link>
      <router-link to="/Compras">
        <v-btn icon class="boton-bar boton-compras">
          <v-icon>mdi-cart</v-icon>
        </v-btn>
      </router-link>
    </div>
  </v-app-bar>
</template>

<style scoped>
.imagen-izquierda {
  width: 150px; 
  height: auto; 
  cursor: pointer; 
  margin-left: 16px; 
}

.nav-buttons {
  display: flex;
  gap: 10px; 
  justify-content: center;
  align-items: center;
}

.boton-bar {
  color: white;
  background-color: transparent;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif; 
}

.boton-bar:hover {
  background-color: rgba(255, 255, 255, 0.1); 
}

.boton-compras .v-icon,
.boton-iniciar-sesion .v-icon {
  color: white; 
  margin-right: 25px;
}

.boton-compras {
  margin-right: 30px;
}

.v-btn {
  color: white; 
}

.v-btn .v-icon {
  color: white; 
}

.v-btn:focus {
  background-color: transparent; 
}


.right-buttons {
  display: flex;
  gap: 8px; 
}
</style>

<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
};
</script>
