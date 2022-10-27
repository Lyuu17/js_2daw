<script>
export default {
    name: "Amigos",
    props: {
        lista: {
            type: Array,
            required: true
        }
    }
};
</script>

<template>
    <h1>Lista de amigos</h1>
    <ul>
        <li v-for="elem, k in lista" :key="k">
            {{ elem }}
        </li>
    </ul>
</template>

<style scoped>
</style>