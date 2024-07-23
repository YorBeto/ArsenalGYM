<template>
    <v-app>
      <v-app-bar app>
        <v-toolbar-title>PRODUCTOS</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text>INICIAR SESIÓN</v-btn>
      </v-app-bar>
   <v-container>
      <v-card title="DESCRIPCIÓN DEL PRODUCTO" 
          text="Utiliza aislado de suero de leche triple de frío de última generación que se somete
        a una nanofiltración sensible para preservar la calidad de su
        aislado de suero ultrapuro. Este proceso innovador permite un mayor
        contenido de glicomacropéptido que el rpocesamiento de inetrcambio iónico.
        Este péptido tiene un alto contenido de aminoácidos de cadena ramificada y
        tiene muchos beneficios para alcanzar los objetivos de composición corporal deseados."></v-card>
        
        <v-tabs>
          <v-tab>PRE-ENTRENOS</v-tab>
          <v-tab>PROTEINAS</v-tab>
          <v-tab>CREATINAS</v-tab>
          <v-tab>MULTI-VITAMINICOS</v-tab>
          <v-tab>MEMBRESIAS</v-tab>
        </v-tabs>
      </v-container>
    </v-app>
  </template>
  
  <script>
  export default {
    name: 'App'
  }
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }
  </style>