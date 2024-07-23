<template>
  <v-layout class="rounded rounded-md" style="background-color: #f4f4f4; min-height: 100vh;">
    <barra-Nav></barra-Nav>

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
            <h2 class="mb-4">Bienvenido a Arsenal Gym</h2>
            <p>En Arsenal Gym, nos dedicamos a promover el bienestar integral de nuestros socios mientras los ayudamos a superar sus límites y alcanzar nuevas metas. Nuestro gimnasio está equipado con una amplia variedad de equipos de última generación, y contamos con un equipo de instructores altamente calificados que están comprometidos con tu éxito.</p>
            <br>
            <p>En Arsenal Gym, no solo encontrarás un lugar para entrenar, sino una comunidad que te apoyará en cada paso de tu viaje hacia una vida más saludable y en forma.</p>
          </div>
        </div>

        <!-- Sección de Membresías -->
        <div class="membresias-section mb-5">
          <h2 class="mb-4">MEMBRESÍAS</h2>
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
          <h2 class="mb-4">VISÍTANOS</h2>
          <div class="visitanos-content">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.8266233107443!2d-103.43089429999999!3d25.5441515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x868fdb933efabea1%3A0x4ff88cb25a0f6b13!2sGimnasio%20Arsenal%20Bosque!5e0!3m2!1ses!2smx!4v1721764484976!5m2!1ses!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <v-img src="/gymfuera.png" alt="Arsenal Gym" class="imagen-arsenal-gym"></v-img>
          </div>
        </div>
      </div>
    </v-main>
  </v-layout>
</template>

<style scoped>
.imagen-gym {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.contenido-abajo {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  max-width: 1200px;
}

.inbody-section, .gym-section {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 100%;
  background-color: #ffffff;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.inbody-section {
  background-color: #f9f9f9;
}

.gym-section {
  background-color: #e0f7fa;
}

.imagen-inbody, .imagen-arsenal {
  width: 20%;
  height: auto;
  border-radius: 10px;
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

.membresias-section {
  width: 100%;
  background-color: #ffe0b2;
  padding: 20px;
  margin-bottom: 20px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.membresias-table table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.membresias-table th, .membresias-table td {
  border: 1px solid #ddd;
  padding: 10px;
}

.membresias-table th {
  background-color: #444;
  color: white;
}

.membresias-table td {
  background-color: white;
  color: black;
}

.visitanos-section {
  width: 100%;
  background-color: #e8eaf6;
  padding: 20px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.visitanos-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

.imagen-arsenal-gym {
  width: 45%;
  height: auto;
  border-radius: 10px;
}

@media (max-width: 768px) {
  .inbody-section, .gym-section, .visitanos-content {
    flex-direction: column;
    text-align: center;
  }

  .imagen-inbody, .imagen-arsenal {
    width: 80%;
  }

  .inbody-text, .gym-text {
    width: 100%;
    padding: 10px;
  }

  .imagen-arsenal-gym {
    width: 100%;
  }

  .visitanos-content iframe {
    width: 100%;
  }
}
</style>

<script setup>
import barraNav from '@/components/barraNav.vue';
</script>
