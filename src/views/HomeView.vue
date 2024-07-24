<template>
  <v-layout class="rounded rounded-md" style="background-color: #f4f4f4; min-height: 100vh;">
    <barraNav></barraNav>

    <v-main style="background-color: #f4f4f4; display: flex; flex-direction: column; align-items: center; padding: 20px;">
      <v-img src="/public/fondo.jpg" alt="Gym Image" class="imagen-gym mb-5"></v-img>

      <div class="contenido-abajo">
        <div class="inbody-section mb-5">
          <v-img src="/public/INB270.png" alt="InBody Image" class="imagen-inbody"></v-img>
          <div class="inbody-text">
            <h2 class="mb-4">EN ARSENAL NOS INTERESA TU SALUD</h2>
            <p>
              InBody es líder mundial en tecnología de análisis de composición corporal. A través de nuestros innovadores dispositivos, proporcionamos una evaluación precisa y detallada de los componentes del cuerpo humano, incluyendo masa muscular, grasa corporal, agua corporal total y mucho más. Nuestros equipos son utilizados por profesionales de la salud, entrenadores personales y centros de fitness para ayudar a individuos a comprender mejor su cuerpo y mejorar su bienestar.
            </p>
            <br>
            <p>Conoce tu cuerpo con nuestro InBody, una máquina capaz de medir las características de tu cuerpo. Agenda tu cita para descubrir tus límites.</p>
            <router-link to="Inbody"><v-btn class="boton-agendar mt-4">AGENDAR</v-btn></router-link>
          </div>
        </div>

        <div class="gym-section mb-5">
          <v-img src="/public/Avina.jpg" alt="Arsenal Image" class="imagen-arsenal"></v-img>
          <div class="gym-text">
            <p>En Arsenal somos un gimnasio que busca el bienestar de nuestros socios como también superar sus límites. Ofrecemos variedad de equipo, instructores y también contamos con clases de crossfit.</p>
          </div>
        </div>
        
        <!-- Sección de Membresías -->
        <div class="membresias-section">
          <h2>MEMBRESÍAS</h2>
          <div class="membresias-table">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>MENSUAL</th>
                  <th>SEMESTRAL</th>
                  <th>ANUAL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>GYM</td>
                  <td>$700</td>
                  <td>$1,800</td>
                  <td>$7,460</td>
                </tr>
                <tr>
                  <td>CROSSFIT</td>
                  <td>$720</td>
                  <td>$1,920</td>
                  <td>$7,550</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Sección de Visítanos -->
        <div class="visitanos-section">
          <h2>VISÍTANOS</h2>
          <div class="visitanos-content">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.8266233107443!2d-103.43089429999999!3d25.5441515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x868fdb933efabea1%3A0x4ff88cb25a0f6b13!2sGimnasio%20Arsenal%20Bosque!5e0!3m2!1ses!2smx!4v1721764484976!5m2!1ses!2smx" width="415" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <v-img src="/gymfuera.png" alt="Arsenal Gym" class="imagen-arsenal-gym"></v-img>
          </div>
        </div>
      </div>
    </v-main>
  </v-layout>
</template>

<style scoped>
.imagen-izquierda {
  height: 50px;
  width: 100px;
  margin-left: 20px;
}

.nav-buttons {
  display: flex;
  justify-content: center;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  width: 50%;
}

.boton-bar {
  color: white;
  font-size: 20px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.boton-iniciar-sesion {
  margin-right: 40px; /* Ajusta este valor para mover el botón a la izquierda */
}

.imagen-gym {
  width: 100%;
  height: auto;
}

.contenido-abajo {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  max-width: 1200px; /* Ajusta el ancho máximo según sea necesario */
}

.inbody-section, .gym-section {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 100%;
  background-color: white;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
}

.imagen-inbody, .imagen-arsenal {
  width: 30%;
  height: 400px;
}

.inbody-text, .gym-text {
  width: 65%;
  padding: 20px;
}

.boton-agendar {
  margin-top: 10px;
  background-color: #d32f2f;
  color: white;
}

/* Estilos para la sección de Membresías */
.membresias-section {
  width: 100%;
  background-color: white;
  padding: 20px;
  margin-bottom: 20px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 10px;
}

.membresias-table table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  color: black;
}

.membresias-table th, .membresias-table td {
  border: 1px solid black;
  padding: 10px;
  color: white;
}

.membresias-table th {
  background-color: black;
}

.membresias-table td {
  background-color: white;
  color: black;
}

/* Estilos para la sección de Visítanos */
.visitanos-section {
  width: 100%;
  background-color: white;
  padding: 20px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 10px;
}

.visitanos-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

.imagen-mapa, .imagen-arsenal-gym {
  width: 50%;
  height: auto;
}
</style>

<script setup>
import barraNav from '@/components/barraNav.vue';
</script>
