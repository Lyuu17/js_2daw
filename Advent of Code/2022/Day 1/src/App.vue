<template>
  <div class="w-1/4 m-auto text-center">
    <SubirLista @listaTexto="listaTexto"/>
    <p>{{ lista[0] }}</p>
  </div>
</template>

<script setup>
import SubirLista from './components/SubirLista.vue'

import { ref } from 'vue';

const lista = ref([]);

const listaTexto = (texto) => {

  lista.value = 
    texto
      .split("\n\n")
      .map(str => str.includes("\n") ? str.split("\n").map(e => e = parseInt(e)).reduce((acc, v) => acc + v, 0) : parseInt(str))
      .sort((a, b) => b - a);
  
  console.log(lista.value);
}
</script>

<style scoped>

</style>