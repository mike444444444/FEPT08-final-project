import { defineStore } from "pinia";

export const useArticulosStore = defineStore('articulosStore', {
    state: () => ({
        listaArticulos:[1,2,3,4]
    }),
    getters: {
        getListaArticulos (state){
            return state.listaArticulos
        }
    },
    actions:{
        addItem () {
            this.listaArticulos.push('A')
        }
    }

})