<template>
  <div class="mt-5">
    <input ref="entrada" type="file"/>
    <button 
      class="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      @click="procesar"
      >
      Procesar
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const entrada = ref();

const emit = defineEmits(["listaTexto"]);

const procesar = () => {
  const file = entrada.value.files[0];
  const reader = new FileReader();

  reader.readAsText(file, "utf8");
  reader.onload = () => {
    const res = reader.result.trim();

    emit("listaTexto", res);
  };
  reader.onerror = () => {
    console.log(render.error);
  };
}

</script>

<style lang="scss" scoped>

</style>