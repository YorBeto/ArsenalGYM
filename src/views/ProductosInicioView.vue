<template>
  <v-app>
    <v-app-bar color="black" app style="height: 70px; font-size: 24px; display: flex; align-items: center;">
      <v-img src="/public/arsenal.png" alt="Logo" contain class="imagen-izquierda"></v-img>
      <v-spacer></v-spacer>
      <div class="nav-buttons">
        <router-link to="/"><v-btn class="boton-bar">INICIO</v-btn></router-link>
        <v-btn class="boton-bar">INBODY</v-btn>
        <router-link to="Producto"><v-btn class="boton-bar">PRODUCTOS</v-btn></router-link>
      </div>
      <v-spacer></v-spacer>
      <router-link to="Login"><v-btn class="boton-bar boton-iniciar-sesion">Iniciar Sesion</v-btn></router-link>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-card class="my-4">
          <v-card-title>DESCRIPCIÓN DEL PRODUCTO</v-card-title>
          <v-card-text>
            Utiliza aislado de suero de leche triple de frío de última generación que se somete
            a una nanofiltración sensible para preservar la calidad de su
            aislado de suero ultrapuro. Este proceso innovador permite un mayor
            contenido de glicomacropéptido que el procesamiento de intercambio iónico.
            Este péptido tiene un alto contenido de aminoácidos de cadena ramificada y
            tiene muchos beneficios para alcanzar los objetivos de composición corporal deseados.
          </v-card-text>
        </v-card>

        <v-tabs>
          <v-tab>PRE-ENTRENOS</v-tab>
          <v-tab>PROTEÍNAS</v-tab>
          <v-tab>CREATINAS</v-tab>
          <v-tab>MULTIVITAMÍNICOS</v-tab>
          <v-tab>MEMBRESÍAS</v-tab>
        </v-tabs>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
.imagen-izquierda {
  height: 50px;
  width: 100px;
  margin-left: 20px;
}

.nav-buttons {
  display: flex;
  justify-content: center;
  width: 50%;
}

.boton-bar {
  color: white;
  font-size: 20px;
}

.boton-iniciar-sesion {
  margin-right: 40px; /* Ajusta este valor para mover el botón a la izquierda */
}
</style>