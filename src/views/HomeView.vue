<script setup>
import barraNav from '@/components/barraNav.vue';
import { ref } from 'vue';

const items = ref([
  { src: '/p1.jpg', alt: 'Image 1' },
  { src: '/p2.jpg', alt: 'Image 2' },
  { src: '/p3.jpg', alt: 'Image 3' }, 
  { src: '/p4.jpg', alt: 'Image 4' }, 
  { src: '/p5.jpg', alt: 'Image 5' },
]);
</script>

<template>
  <v-layout class="rounded rounded-md" style="background-color: #f4f4f4; min-height: 100vh;">
    <barraNav></barraNav>

    <v-main style="background: linear-gradient(to right, black, red); display: flex; flex-direction: column; align-items: center; padding: 20px;">
      <v-carousel class="carousel mb-5" cycle interval="5000" hide-delimiter-background height="50/0px">
        <v-carousel-item v-for="(item, i) in items" :key="i">
          <v-img :src="item.src" :alt="item.alt" class="carousel-image"></v-img>
        </v-carousel-item>
      </v-carousel>

      <div class="inbody-section mb-5">
        <v-img src="/INB270.png" alt="InBody Image" class="imagen-inbody"></v-img>
        <div class="inbody-text">
          <h2 class="mb-4">EN ARSENAL NOS INTERESA TU SALUD</h2>
          <p>
            InBody es líder mundial en tecnología de análisis de composición corporal. A través de nuestros innovadores dispositivos, proporcionamos una evaluación precisa y detallada de los componentes del cuerpo humano, incluyendo masa muscular, grasa corporal, agua corporal total y mucho más. Nuestros equipos son utilizados por profesionales de la salud, entrenadores personales y centros de fitness para ayudar a individuos a comprender mejor su cuerpo y mejorar su bienestar.
          </p>
          <br>
          <p>Conoce tu cuerpo con nuestro InBody, una máquina capaz de medir las características de tu cuerpo. Agenda tu cita para descubrir tus límites.</p>
          <router-link to="Inbody">
            <v-btn class="boton-agendar mt-4">AGENDAR</v-btn>
          </router-link>
        </div>
      </div>

      <div class="gym-section mb-5">
        <v-img src="/Avina.jpg" alt="Arsenal Image" class="imagen-arsenal"></v-img>
        <div class="gym-text">
          <p>En Arsenal somos un gimnasio que busca el bienestar de nuestros socios como también superar sus límites. 
            Ofrecemos variedad de equipo, instructores y también contamos con clases de crossfit. 
            Arsenal es un lugar especialmente diseñado y equipado para que acudas a realizar una actividad física en diversas intensidades. 
            El propósito es estimular tus músculos a través de ejercicios adecuados a tus necesidades y condiciones.
            Nuestro proposito es que logres obtener los cambios que desees en tu cuerpo, que te sientas más seguro y así poder seguir buscando mejorar cada día más.
          Aquí podrás quemar grasa y redicir tu beso, hasta llegar a tu peso ideal.</p>
        </div>
      </div>
      
     
      <div class="membresias-section mb-5">
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

 
      <div class="visitanos-section">
        <h2>VISÍTANOS</h2>
        <div class="visitanos-content">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.8266233107443!2d-103.43089429999999!3d25.5441515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x868fdb933efabea1%3A0x4ff88cb25a0f6b13!2sGimnasio%20Arsenal%20Bosque!5e0!3m2!1ses!2smx!4v1721764484976!5m2!1ses!2smx" class="mapa-arsenal-gym"></iframe>
          <v-img src="/gymfuera.png" alt="Arsenal Gym" class="imagen-arsenal-gym"></v-img>
        </div>
      </div>
    </v-main>
  </v-layout>
</template>

<style scoped>

.cartainfo, .cartainfo2 {
  width: 100%;
  display: flex;
  flex-direction: row; 
  padding: 16px; 
}

.cartainfo {
  display: flex;
  flex-direction: row; /* Alinea los elementos en una fila */
  align-items: flex-start; /* Alinea el contenido en la parte superior del contenedor */
  padding: 16px; /* Espaciado alrededor del contenido */
}

.gym-text-container {
  flex: 15; /* Permite que el texto ocupe el espacio disponible */
  padding-right: 6px; /* Espaciado entre el texto y la imagen */
}

.gym-text2 {
  flex: 1 1 50%; 
  margin-top: 190px;
  padding-left: 90px;
}

.gym-text{
  flex: 1 1 50%; /* Permite que el texto ocupe el 50% restante del card */
  padding: 16px; /* Espaciado alrededor del texto */
  box-sizing: border-box; /* Incluye el padding en el ancho total */
  margin-top: 160px;
}

.imagen-inicio {
  flex: 1 1 40%; /* Ajusta el ancho de la imagen según sea necesario */
  height: auto; /* Mantiene la proporción de la imagen */
}

.imagen-avina{
  flex: 1 1 40%; /* Permite que la imagen ocupe el 50% del ancho del card */
  margin-left: 15px;
}

/* Responsive Styles */
@media (max-width: 600px) {
  .carousel {
    height: 300px; /* Reduce la altura del carrusel para pantallas pequeñas */
  }

  .carousel-image {
    height: 300px; /* Ajusta la altura de las imágenes del carrusel */
  }

  /* Ajustes para el primer card */
  .imagen-inicio {
    width: 100%; /* Ocupa el ancho completo del contenedor */
    height: auto; /* Mantiene la proporción de la imagen */
    margin-left: 0; /* Elimina el margen izquierdo en pantallas pequeñas */
    margin-top: 10px; /* Ajusta el margen superior si es necesario */
    display: flex;
    flex-direction: column;
  }

  .gym-text-container {
    flex: 1 1 100%; /* El texto ocupa el 100% del ancho */
    padding-right: 0; /* Elimina el espaciado derecho en pantallas pequeñas */
    padding-left: 0; /* Elimina el espaciado izquierdo en pantallas pequeñas */
  }

  .gym-text2 {
    margin-top: 10px; /* Ajusta el margen superior para pantallas pequeñas */
    padding-left: 0; /* Elimina el padding izquierdo en pantallas pequeñas */
    text-align: center; /* Centra el texto en pantallas pequeñas */
  }

  /* Ajustes para el segundo card */
  .imagen-avina {
    width: 100%; /* Ocupa el ancho completo del contenedor */
    height: auto; /* Mantiene la proporción de la imagen */
    margin-left: 0; /* Elimina el margen izquierdo en pantallas pequeñas */
    margin-top: 10px; /* Ajusta el margen superior si es necesario */
  }

  .gym-text {
    flex: 1 1 100%; /* El texto ocupa el 100% del ancho del card */
    padding: 6px; /* Añade padding para espaciado alrededor del texto */
    text-align: center; /* Centra el texto en pantallas pequeñas */
  }

  /* Ajustes para la sección 'Visítanos' */
  .visitanos-content {
    flex-direction: column; /* Alinea los elementos verticalmente en pantallas pequeñas */
    align-items: center; /* Centra los elementos horizontalmente */
    margin-top: 20px; /* Ajusta el margen superior si es necesario */
  }

  .mapa-arsenal-gym {
    width: 100%; /* Ocupa el ancho completo del contenedor */
    height: 250px; /* Ajusta la altura del mapa para pantallas pequeñas */
  }

  .imagen-arsenal-gym {
    width: 100%; /* Ocupa el ancho completo del contenedor */
    height: auto; /* Mantiene la proporción de la imagen */
    margin-top: 20px; /* Ajusta el margen superior si es necesario */
  }

  /* Ajustes generales para flex containers */
  .d-flex {
    flex-direction: column; /* Cambia la dirección del flex para pantallas pequeñas */
  }

  .cartainfo {
    flex-direction: column; /* Cambia la dirección del flex para pantallas pequeñas */
    align-items: center; /* Centra los elementos en pantallas pequeñas */
  }

  .cartainfo2 {
    width: 100%;
    padding: 16px;
  }
}

.d-flex {
    flex-direction: column;
  }

.imagen-inicio{
  height: 490px;
  margin-left: 115px;
}

.carousel {
  width: 100%;
  height: 500px;
}

.carousel-image {
  object-fit: cover;
  width: 100%;
  height: 500px;
}

.imagen-gym {
  width: 100%;
  height: auto;
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

.boton-agendar {
  margin-top: 10px;
  background-color: #d32f2f;
  color: white;
}

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
  background: black;
}

.membresias-table td {
  background-color: white;
  color: black;
}

.visitanos-section {
  width: 100%;
  background-color: white;
  padding: 20px;
  text-align: center;
  border: 1px solid black;
  border-radius: 10px;
}

.visitanos-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

.mapa-arsenal-gym, .imagen-arsenal-gym {
  width: 58%;
  height: 450px;
}

</style>

