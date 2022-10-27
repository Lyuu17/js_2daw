<script>

export default {
    name: "Saludo",

    data() {
        return {}
    },
    
    props: {
        nombre: {
            type: String,
            required: true
        },
        apellidos: {
            type: String,
            required: true
        }
    }
};
</script>

<template>
    <p>Saludos: </p>
    <p>{{ nombre }} {{ apellidos }}</p>
</template>

<style scoped></style>