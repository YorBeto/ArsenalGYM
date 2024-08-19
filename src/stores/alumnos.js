import { defineStore } from 'pinia';

export const useAlumnosStore = defineStore('alumnos', {
  state: () => ({
    alumnos: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchAlumnos(idClase) {
      this.loading = true;
      try {
        const response = await fetch(`http://3.149.253.171/clases/alumnos?idClase=${idClase}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        this.alumnos = data.data; // Ajusta según la estructura de tu respuesta
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    }
  }
});