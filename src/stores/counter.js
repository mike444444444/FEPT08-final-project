import { defineStore } from "pinia";

const useCounterStore = defineStore('counter',{
    state: () =>({
        count: 0,
        name: "Jordi",
        title: "avui es 10/12/2024"
    }),

    getters: {
        doubleCount: (state) => {return state.count * 2},
        multiplyFour: (state) => {return state.count * 4},
        halfCount: (state) => {return state.count / 2},
    },

    actions: {
        increment(){
            return this.count++
        }
    } 

})

export default useCounterStore