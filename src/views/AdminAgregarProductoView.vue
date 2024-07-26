<template>
    <div id="admin-inicio">
        <nav class="navbar">
            <img src="/public/arsenal.png" class="logo" />
        </nav>
        <div class="contenedor">
            <BarralateralAdmin></BarralateralAdmin>
            <div class="main-content">
                <div class="barra-busqueda">
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
                    :items="productos"
                    :search="search"
                ></v-data-table>
                <div class="button-group">
                    <v-btn @click="agregarProducto" color="primary">Agregar</v-btn>
                    <v-btn @click="editarProducto" color="secondary">Editar</v-btn>
                </div>
            </div>
        </div>
        <!-- Formulario para agregar productos -->
        <v-dialog v-model="dialog" max-width="500px">
            <v-card>
                <v-card-title>
                    <span class="headline">Agregar Producto</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field v-model="form.id_producto" label="ID Producto" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field v-model="form.nombre" label="Nombre" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field v-model="form.descripcion" label="Descripción" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field v-model="form.precio" label="Precio" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field v-model="form.stock" label="Stock"></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field v-model="form.id_categoria" label="ID Categoría" required></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="closeDialog">Cancelar</v-btn>
                    <v-btn color="blue darken-1" text @click="submitForm">Guardar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script setup>
import BarralateralAdmin from '@/components/BarralateralAdmin.vue';
import { ref, onMounted } from 'vue';

const search = ref('');
const productos = ref([]);
const dialog = ref(false);
const form = ref({
    id_producto: '',
    nombre: '',
    descripcion: '',
    precio: '',
    stock: '',
    id_categoria: ''
});

const mostrarproductos = () => {
    fetch('http://mipagina.com/productos')
        .then(response => response.json())
        .then(json => {
            if (json.status == 200) {
                productos.value = json.data;
            }
        });
};

const agregarProducto = () => {
    dialog.value = true;
};

const closeDialog = () => {
    dialog.value = false;
};

const submitForm = () => {
    fetch('http://mipagina.com/insertarproducto', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(form.value)
    })
        .then(response => response.json())
        .then(json => {
            if (json.status == 200) {
                mostrarproductos();
                closeDialog();
            } else {
                alert(json.message);
            }
        });
};

onMounted(() => {
    mostrarproductos();
});
</script>

<style>
#admin-inicio {
    display: flex;
    flex-direction: column;
    height: 100vh;
}

.navbar {
    background-color: #333;
    padding: 1rem;
}

.logo {
    max-height: 50px;
}

.contenedor {
    display: flex;
    flex: 1;
    overflow: hidden;
}

.main-content {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 1rem;
    overflow-y: scroll;
}

.barra-busqueda {
    margin-bottom: 1rem;
}

.v-data-table {
    flex: 1;
}

.button-group {
    display: flex;
    justify-content: flex-start;
    gap: 1rem;
    margin-top: 1rem;
}
</style>
