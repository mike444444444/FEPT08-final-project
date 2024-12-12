<template>
    <span class="flex gap-4  h-6 ml-8 align-middle">
        <button @click ="decrementar" class="bg-indigo-300 w-6">-                        
        </button>
        <span>{{ count }}</span>
        <button @click ="incrementar" class="bg-indigo-300 w-6">+                           
        </button>   
        <!-- <v-if= count<0  count=0> -->
    </span>
</template>
<script>
export default {
    name:"Counter",
    data() {
        return {
            count: 0
        
           
        }      
    },
    methods:{
    decrementar(){
        this.count--;
    },
    incrementar(){
        this.count++;
    },
    
},
}


    

</script>
<style>
    
</style>