<template>
  <v-layout class="rounded rounded-md" style="background-color: #f0f0f0; min-height: 100vh;">

    <barraNav></barraNav>

    <v-main>
      <v-container>
        
        <v-tabs>
          <v-tab>PRE-ENTRENOS</v-tab>
          <v-tab>PROTEÍNAS</v-tab>
          <v-tab>CREATINAS</v-tab>
          <v-tab>MULTIVITAMÍNICOS</v-tab>
          <v-tab>MEMBRESÍAS</v-tab>
        </v-tabs>

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
      </v-container>
    </v-main>

</v-layout>

</template>

<script setup>
import barraNav from '@/components/barraNav.vue';


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