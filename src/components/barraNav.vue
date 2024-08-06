<template>
  <v-app-bar color="black" app style="height: 70px; font-size: 24px; display: flex; align-items: center; position: fixed;">
    <v-container fluid>
      <v-row class="but" >
        <v-col cols="auto">
          <v-img src="/arsenal.png" alt="Logo" contain class="imagen-izquierda" @click="scrollToTop"></v-img>
        </v-col>

        <v-col cols="auto" >
          <v-row no-gutters class="nav-buttons">
            <v-col cols="auto">
              <router-link to="/"><v-btn class="boton-bar">INICIO</v-btn></router-link>
            </v-col>
            <v-col>
              <router-link to="/Producto"><v-btn class="boton-bar">PRODUCTOS</v-btn></router-link>
            </v-col>
            <v-col>
              <router-link to="Inbody"><v-btn class="boton-bar">INBODY</v-btn></router-link>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="auto">
          <v-row no-gutters>
            <v-col cols="auto">
              <router-link to="/Login">
                <v-btn icon class="boton-bar boton-iniciar-sesion">
                  <v-icon>mdi-account</v-icon>
                </v-btn>
              </router-link>
            </v-col>
            <v-col cols="auto">
              <router-link to="/carrito">
                <v-btn icon class="boton-bar boton-compras">
                  <v-icon>mdi-cart</v-icon>
                </v-btn>
              </router-link>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<style scoped>
.but{
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.imagen-izquierda {
  width: 70px; /* Ajusta el ancho según sea necesario */
  height: auto; /* Mantiene la proporción de la imagen */
  cursor: pointer; /* Cambia el cursor al pasar sobre la imagen si es clickeable */
  margin-left: 210px; /* Espaciado a la izquierda */
}

.boton-bar {
  color: white;
  font-size: 20px;
  min-width: 120px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; 
  text-align: center;
  margin-left: 5px; /* Espaciado a la izquierda */
}


.boton-iniciar-sesion, .boton-compras {
  margin-right: 4px;
  gap: 4px;
  color: white;
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