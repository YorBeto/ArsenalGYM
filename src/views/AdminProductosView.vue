<template>
  <div id="admin-inicio">
    <BarraAdminNew></BarraAdminNew>
    <div class="contenedor">
      <BarralateralAdmin></BarralateralAdmin>
      <div class="main-content">
        <div class="barra-busqueda">
          <v-text-field
            v-model="search"
            label="Buscar productos"
            prepend-inner-icon="mdi-magnify"
            variant="outlined"
            hide-details
            single-line
          ></v-text-field>
        </div>
        <div class="data-table-container">
          <v-data-table
            :headers="headers"
            :items="filteredProducts"
            :search="search"
            class="data-table"
          >
            <template v-slot:no-data>
              <v-alert type="error" border="left" colored-border>
                No se encontraron productos.
              </v-alert>
            </template>
          </v-data-table>
          <!-- Botón para redirigir a Agregar Productos -->
          <v-row class="add-button-container">
            <v-col class="text-right">
              <v-btn color="primary" @click="goToAddProductPage">Agregar Producto</v-btn>
            </v-col>
          </v-row>
        </div>

        <!-- Ventana emergente para editar producto -->
        <v-dialog v-model="editDialog" max-width="800px" max-height="750px">
          <v-card>
            <v-card-title>
              <span class="headline">Editar Producto</span>
            </v-card-title>
            <v-card-subtitle>
              <v-form ref="form" v-model="valid">
                <v-text-field
                  v-model="selectedProduct.NOMBRE"
                  label="Nombre"
                  :rules="[rules.required]"
                  required
                ></v-text-field>
                <v-textarea
                  v-model="selectedProduct.DESCRIPCION"
                  label="Descripción"
                  :rules="[rules.required]"
                  required
                ></v-textarea>
                <v-text-field
                  v-model="selectedProduct.PRECIO"
                  label="Precio"
                  type="number"
                  :rules="[rules.required, rules.number]"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="selectedProduct.STOCK"
                  label="Stock"
                  type="number"
                  :rules="[rules.required, rules.number]"
                  required
                ></v-text-field>
                <div class="category-buttons">
                  <v-btn
                    v-for="category in categories"
                    :key="category.ID_CATEGORIA"
                    :class="{'v-btn--active': selectedProduct.ID_CATEGORIA === category.ID_CATEGORIA}"
                    @click="selectedProduct.ID_CATEGORIA = category.ID_CATEGORIA"
                  >
                    {{ category.NOMBRE }}
                  </v-btn>
                </div>
              </v-form>
            </v-card-subtitle>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text @click="editDialog = false">Cancelar</v-btn>
              <v-btn color="primary" @click="updateProduct">Confirmar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <!-- Ventana emergente para confirmación de eliminación -->
        <v-dialog v-model="confirmDialog" max-width="400px">
          <v-card>
            <v-card-title class="headline">Confirmar Eliminación</v-card-title>
            <v-card-subtitle>
              ¿Estás seguro de que deseas eliminar este producto?
            </v-card-subtitle>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text @click="confirmDialog = false">Cancelar</v-btn>
              <v-btn color="red" @click="deleteProduct">Eliminar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </div>
  </div>
</template>

<script setup>
import BarraAdminNew from '@/components/BarraAdminNew.vue';
import BarralateralAdmin from '@/components/BarralateralAdmin.vue';
import { ref, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';

const search = ref('');
const products = ref([]);
const filteredProducts = ref([]);
const headers = [
  { text: 'ID Producto', value: 'ID_PRODUCTO' },
  { text: 'Nombre', value: 'NOMBRE' },
  { text: 'Descripción', value: 'DESCRIPCION' },
  { text: 'Precio', value: 'PRECIO' },
  { text: 'Stock', value: 'STOCK' },
  { text: 'Categoría', value: 'CATEGORIA' }
];

const selectedProduct = ref({});
const editDialog = ref(false);
const confirmDialog = ref(false);
const categories = ref([]);
const valid = ref(false);
const rules = {
  required: value => !!value || 'Campo requerido',
  number: value => !isNaN(value) || 'Debe ser un número'
};

const router = useRouter();

const fetchProducts = async () => {
  try {
    const response = await fetch('http://mipagina.com/productos');
    const data = await response.json();
    if (data.status === 200) {
      products.value = data.data;
      filteredProducts.value = products.value;
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

const fetchCategories = async () => {
  try {
    const response = await fetch('http://mipagina.com/categorias');
    const data = await response.json();
    if (data.status === 200) {
      categories.value = data.data;
    }
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
};

const goToAddProductPage = () => {
  router.push({ name: 'agregarproductos' });
};

watch(search, (newValue) => {
  filteredProducts.value = products.value.filter(product =>
    product.NOMBRE.toLowerCase().includes(newValue.toLowerCase())
  );
});

onMounted(() => {
  fetchProducts();
  fetchCategories();
});
</script>

<style scoped>
#admin-inicio {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.contenedor {
  display: flex;
  flex: 1;
}

.main-content {
  flex: 1;
  padding: 16px;
  display: flex;
  flex-direction: column;
}

.barra-busqueda {
  margin-bottom: 16px;
}

.data-table-container {
  flex: 1;
}

.data-table {
  margin-bottom: 16px;
}

.add-button-container {
  margin-top: 16px;
}

.category-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
}

.category-buttons .v-btn {
  min-width: 100px;
}

.v-card {
  max-height: 80vh;
  overflow-y: auto;
}

.v-dialog {
  max-width: 800px;
  max-height: 750px;
}

.v-icon {
  cursor: pointer;
}

.v-btn--active {
  background-color: #e0e0e0;
}
</style>