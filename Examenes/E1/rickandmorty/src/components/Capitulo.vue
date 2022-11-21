<template>
  <div class="text-center border w-1/4 m-auto mt-5">
    <h1 class="text-2xl">Título</h1>
    <p>{{ capitulo.name }}</p>

    <h1 class="text-2xl">Fecha de Emisión</h1>
    <p>{{ capitulo.air_date }}</p>

    <h1 class="text-2xl">Nº de personajes</h1>
    <p>{{ capitulo.characters.length }}</p>
  </div>
</template>

<script>
export default {
  props: {
    capitulo: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>