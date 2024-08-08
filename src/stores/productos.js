import { defineStore } from 'pinia';

export const useProductosStore = defineStore('productos', {
  state: () => ({
    productos: [],
  }),
  actions: {
    async fetchProductos() {
      try {
        const response = await fetch('http://mipagina.com/productos');
        if (!response.ok) {
          throw new Error('Error fetching productos');
        }
        const data = await response.json();
        console.log('Datos de productos:', data); // Verifica la estructura de los datos
        this.productos = data.data; // Asegúrate de que esta propiedad es correcta
      } catch (error) {
        console.error('Error fetching productos:', error);
      }
    },
  },
});
