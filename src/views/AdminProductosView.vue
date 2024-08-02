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
            <template v-slot:item.actions="{ item }">
              <v-icon @click="editProduct(item)" class="mr-2">mdi-pencil</v-icon>
              <v-icon @click="confirmDeleteProduct(item.ID_PRODUCTO)" class="red--text">mdi-delete</v-icon>
            </template>
            <template v-slot:no-data>
              <v-alert type="error" border="left" colored-border>
                No se encontraron productos.
              </v-alert>
            </template>
          </v-data-table>
          <!-- Botón para redirigir a Agregar Productos -->
          <v-row class="add-button-container">
            <v-col class="text-right">
              <v-btn color="primary" @click="goToAddProduct">Agregar Producto</v-btn>
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
  { text: 'Nombre del Producto', value: 'NOMBRE' },
  { text: 'Descripción del Producto', value: 'DESCRIPCION' },
  { text: 'Precio del Producto', value: 'PRECIO' },
  { text: 'Cantidad en Stock', value: 'STOCK' },
  { text: 'Categoría del Producto', value: 'CATEGORIA' },
  { text: 'Acciones Disponibles', value: 'actions', sortable: false }
];

const selectedProduct = ref({});
const editDialog = ref(false);
const confirmDialog = ref(false);
const productToDelete = ref(null);
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
      filteredProducts.value = products.value; // Initialize with all products
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

const filterProducts = () => {
  filteredProducts.value = products.value.filter(product =>
    Object.keys(product).some(key =>
      String(product[key]).toLowerCase().includes(search.value.toLowerCase())
    )
  );
};

const editProduct = (product) => {
  selectedProduct.value = { ...product };
  editDialog.value = true;
};

const updateProduct = async () => {
  if (valid.value) {
    try {
      const response = await fetch('http://mipagina.com/producto/actualizar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(selectedProduct.value)
      });
      const data = await response.json();
      if (data.status === 200) {
        await fetchProducts();
        editDialog.value = false;
      } else {
        console.error('Error updating product:', data.message);
      }
    } catch (error) {
      console.error('Error updating product:', error);
    }
  }
};

const confirmDeleteProduct = (id) => {
  productToDelete.value = id;
  confirmDialog.value = true;
};

const deleteProduct = async () => {
  if (productToDelete.value !== null) {
    try {
      const response = await fetch('http://mipagina.com/producto/eliminar', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id_producto: productToDelete.value })
      });
      const data = await response.json();
      if (data.status === 200) {
        await fetchProducts();
        confirmDialog.value = false;
        productToDelete.value = null;
      } else {
        console.error('Error deleting product:', data.message);
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  }
};

const goToAddProduct = () => {
  router.push({ name: 'agregarproductos' });
};

onMounted(() => {
  fetchProducts();
  fetchCategories();
});

watch(search, filterProducts); // Watch search query to filter products
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
  height: 880px;
  padding: 1rem;
  overflow: hidden;
}

.barra-busqueda {
  margin-bottom: 1rem;
}

.data-table-container {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
}

.data-table {
  flex: 1;
  overflow-y: auto; /* Enable vertical scrolling */
}

.add-button-container {
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
}

.category-buttons {
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
}

.v-btn--active {
  background-color: #3f51b5;
  color: white;
}
</style>
