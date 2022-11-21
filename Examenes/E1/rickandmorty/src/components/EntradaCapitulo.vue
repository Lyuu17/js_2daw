<template>
  <div class="flex col justify-center justify-items-center m-auto w-1/6 mt-5">
    <label for="id_capitulo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ID del capítulo</label>
    <input 
      type="text" 
      id="id_capitulo" 
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
      placeholder="Introducir ID del capítulo" 
      @keydown.enter="entradaCallback"
      v-model="this.entrada"
      required>
  </div>
</template>

<script>
export default {
  data() {
    return {
      entrada: ""
    }
  },
  methods: {
    entradaCallback() {
      this.$emit("entradaCallback", this.entrada);
    }
  }
}
</script>

<style scoped>

</style>