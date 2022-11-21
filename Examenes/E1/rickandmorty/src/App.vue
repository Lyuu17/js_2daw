<template>
  <div>
    <EntradaCapitulo @entradaCallback="entradaCallback"/>
    <Capitulo :capitulo="episodioDatos"/>
  </div>
</template>

<script>
import axios from 'axios';
import EntradaCapitulo from './components/EntradaCapitulo.vue'
import Capitulo from './components/Capitulo.vue';

class RickNMortyAPI {
  constructor() {
    this.base = "https://rickandmortyapi.com/api";
  }
  async obtenerEpisodios(id) {
    let url = "/episode";
    if (id !== undefined)
      url = `${url}/${id}`;

    return this.obtener(url);
  }
  async obtener(args) {
    try {
      return await(await axios.get(`${this.base}${args}`)).data;
    }
    catch(e) {
      console.log(Error(e));
    }
  }
};

export default {
  name: "App",
  components: {
    EntradaCapitulo,
    Capitulo
  },
  emits: ["entradaCallback"],
  data() {
    return {
      api: new RickNMortyAPI(),
      episodioDatos: {}
    }
  },
  created() {
    this.resetearEpisodioDatos();
  },
  methods: {
    resetearEpisodioDatos() {
      this.episodioDatos = {
        name: "Sin datos",
        air_date: "Sin datos",
        characters: []
      };
    },
    async entradaCallback(texto) {
      const datos = await this.api.obtenerEpisodios(parseInt(texto));
      datos != undefined ? this.episodioDatos = datos : this.resetearEpisodioDatos();
    }
  }
}
</script>

<style scoped>

</style>