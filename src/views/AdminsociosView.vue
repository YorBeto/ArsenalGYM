<template>
  <div id="admin-inicio">
    <nav class="navbar">
      <img src="/public/arsenal.png" class="logo" />
    </nav>
    <div class="content">
      <BarralateralAdmin></BarralateralAdmin>
      <div class="search-container">
        <v-text-field
          v-model="search"
          label="Search"
          prepend-inner-icon="mdi-magnify"
          variant="outlined"
          hide-details
          single-line
        ></v-text-field>
      </div>
      <v-data-table
        :headers="headers"
        :items="socios"
        :search="search"
      ></v-data-table>
    </div>
  </div>
</template>


<script setup>
import BarraAdmin from '@/components/BarraAdmin.vue';
import BarralateralAdmin from '@/components/BarralateralAdmin.vue';
import {ref,onMounted} from 'vue';
const search = ref('')

const socios= ref([]);

  const mostrarsocios = () =>{
      fetch('http://mipagina.com/socios')
      .then(response=> response.json())
      .then(json => {
        if(json.status=200){
          socios.value=json.data
        }
      })
  }

  onMounted(()=>{
    mostrarsocios();
  })

</script>


