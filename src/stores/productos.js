// src/stores/productos.js
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
        this.productos = data.data;
      } catch (error) {
        console.error('Error fetching productos:', error);
      }
    },
  },
});