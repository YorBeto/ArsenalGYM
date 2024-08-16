<template>
    <v-app>
      <barraNav></barraNav>
      <v-main class="main-content">
        <v-container class="conocenos">
          <v-row justify="center">
            <v-col cols="12" md="8">
              <v-card class="conoce">
                <v-row no-gutters>
                  <v-col cols="12" md="6">
                    <v-card-title>
                      CONOCE ARSENAL
                    </v-card-title>
                    <v-card-text>
                      Arsenal es un gimnasio donde lo que buscamos es que logres tus metas. Nos gustaría que formaras parte de este gran equipo. 
                      Únete a nosotros; ven y supérate cada día en lo que te propongas. 
                      Buscamos que te conviertas en lo que siempre has querido, además de tu bienestar y que mejores cada día.
                      El gimnasio cuenta con muchas maquinas para tu disposición, también con entrenadores para las clases de Crossfit.
                    </v-card-text>
                  </v-col>
                  
                  <v-col cols="12" md="6">
                    <v-img src="/public/fondo.jpg" alt="Imagen descriptiva" class="imagen-derecha"></v-img>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
  
  
  
        <v-container class="crossfit">
          <v-row justify="center">
            <v-col cols="12" md="8">
              <v-card>
                <v-row no-gutters>
                  <v-col cols="12" md="12">
                    <v-card-title>
                      CLASES DE CROSSFIT
                    </v-card-title>
                    <v-card-text>
                      De lunes a viernes, se impartirán clases a las 7:00, 8:00, 9:00 y 10:00 horas; 
                      y por las tardes, a las 17:00, 18:00, 19:00, 20:00 y 21:00 horas, cerrando el gimnasio, 
                      al interior de la Unidad Deportiva, ubicado a un costado de la pista de atletismo, a las 22:00 horas.
                    </v-card-text>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script setup>
  import barraNav from '@/components/barraNav.vue';
  </script>
  
  <style scoped>
    .conocenos{
        width: 100%;
        height: 450px;
    }

  .main-content {
    background: linear-gradient(to right, black, red);
    padding: 20px;
  }
  
  .conocenos {
    margin-top: 64px;
    margin-bottom: 0px;
  }
  
  .crossfit {
    margin-top: 16px;
  }
  
  .imagen-derecha {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .informacion-lugar {
    margin-top: 32px;
  }
  
  .v-footer {
    width: 100%;
    padding: 0px;
  }
  
  .footer-content {
    background: linear-gradient(to right, #111, #333);
    color: #fff;
    padding: 20px;
    border-top: 1px solid #444;
    margin: 0;
    width: 100%;
  }
  
  .v-footer .v-icon-social {
    color: #4e4949;
    cursor: pointer;
    transition: color 0.3s ease;
  }
  
  .v-footer .v-icon-social:hover {
    color: #ff0000;
  }
  </style>