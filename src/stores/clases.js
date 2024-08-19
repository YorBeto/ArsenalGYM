import { defineStore } from 'pinia';

export const useClasesStore = defineStore('clases', {
  state: () => ({
    clases: [],
    alumnos: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchClases() {
      this.loading = true;
      try {
        const response = await fetch('http://18.218.156.54/clases');
        const data = await response.json();
        this.clases = data.data;
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
    async fetchAlumnosPorClase(idClase) {
      try {
        const response = await fetch(`http://3.149.253.171/clases/alumnos/${idClase}`);
        const data = await response.json();
        if (data.success) {
          this.alumnos = [...this.alumnos, ...data.data];
        } else {
          throw new Error(data.message);
        }
      } catch (error) {
        this.error = error.message;
        throw error;
      }
    },
    async editarClase(clase) {
      try {
        const response = await fetch('http://18.218.156.54/editarclase', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(clase),
        });
        const data = await response.json();
        if (data.success) {
          this.fetchClases();
        } else {
          this.error = data.message;
        }
      } catch (error) {
        this.error = error.message;
      }
    },
    async inscribirSocioEnClase(idSocio, idClase) {
      try {
        const response = await fetch('http://18.218.156.54/inscribir', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ id_socio: idSocio, id_clase: idClase })
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        if (!data.success) {
          throw new Error(data.message);
        }
      } catch (error) {
        this.error = error.message;
        throw error;
      }
    },

  },
});