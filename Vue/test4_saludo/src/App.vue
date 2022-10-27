<script>
import saludo from "./components/saludo.vue";
import amigos from "./components/amigos.vue";

export default {
    name: "App",
    components: {
        saludo,
        amigos
    },
    data() {
        return {
            lista_amigos: ['Lucia', 'Juan', 'Ivan'],
            filtro: ""
        }
    },
    computed: {
        personas_filtradas() {
            return this.lista_amigos.filter((e) => e == this.filtro);
        }
    }
}

</script>

<template>
  <header>
  </header>

  <main>
    <saludo nombre="NoMbRe" apellidos="ApElliDos"></saludo>

    <amigos :lista="lista_amigos"></amigos>

    <input type="text" v-model="filtro">
    <p>{{ this.personas_filtradas[0] }}</p>
  </main>
</template>

<style scoped></style>
