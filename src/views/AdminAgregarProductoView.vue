<template>
    <div id="admin-inicio">
        <nav class="navbar">
            <img src="/public/arsenal.png" class="logo" />
        </nav>
        <div class="contenedor">
            <BarralateralAdmin></BarralateralAdmin>
            <div class="main-content">
                <!-- Botón para regresar -->
                <v-btn icon @click="regresar" class="mb-4">
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
                <!-- Formulario para agregar productos -->
                <div class="formulario-producto">
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
                                        <div class="category-selection">
                                            <span>Seleccione la categoría:</span>
                                            <div class="button-group">
                                                <v-btn 
                                                    v-for="categoria in categorias" 
                                                    :key="categoria.ID_CATEGORIA"
                                                    :color="form.id_categoria === categoria.ID_CATEGORIA ? 'primary' : ''"
                                                    @click="form.id_categoria = categoria.ID_CATEGORIA"
                                                    outlined
                                                >
                                                    {{ categoria.NOMBRE }}
                                                </v-btn>
                                            </div>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="submitForm">Guardar</v-btn>
                        </v-card-actions>
                    </v-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import BarralateralAdmin from '@/components/BarralateralAdmin.vue';
import { ref, onMounted } from 'vue';

const form = ref({
    id_producto: '',
    nombre: '',
    descripcion: '',
    precio: '',
    stock: '',
    id_categoria: ''
});

const categorias = ref([]);

const fetchCategorias = () => {
    fetch('http://mipagina.com/categorias')
        .then(response => response.json())
        .then(json => {
            if (json.status === 200) {
                categorias.value = json.data;
            } else {
                alert(json.message);
            }
        })
        .catch(error => {
            console.error('Error fetching categories:', error);
        });
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
        if (json.status === 200) {
            alert('Producto agregado exitosamente');
            form.value = {
                id_producto: '',
                nombre: '',
                descripcion: '',
                precio: '',
                stock: '',
                id_categoria: ''
            };
        } else {
            alert(json.message);
        }
    });
};

const regresar = () => {
    window.history.back();
};

onMounted(() => {
    fetchCategorias();
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
}

.main-content {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 1rem;
}

.mb-4 {
    margin-bottom: 1rem;
}

.button-group {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    font-size: 17px;
}

.formulario-producto {
    margin-top: 1rem;
    flex: 1;
}

.category-selection {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 17px;
}
</style>
