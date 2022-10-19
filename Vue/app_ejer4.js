const app = Vue.createApp({
    data() {
        return {
            newElemento:'',
            listaElementos: [],
        }
    },
    methods:{
        addElemento(){
            this.listaElementos.push( this.newElemento );
            this.newElemento = '';
        },
        eliminaElemento(elemento){
            this.listaElementos = this.listaElementos.filter(el => el != elemento);
        }
    },
});
app.mount('#miApp');