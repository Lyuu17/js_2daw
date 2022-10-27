const app = Vue.createApp({
    data() {
        return {
            contador: 0,
            lista_multiplos: []
        }
    },
    methods:{
        añadir(v) {
            if (v % 3 == 0 && v > 0 
                && !this.lista_multiplos.includes(v))
                this.lista_multiplos.push(v);
        },

        incrementar(){
            this.añadir(++this.contador);
        },

        decrementar(){
            this.añadir(--this.contador);
        },
    },
});
app.mount('#app');