<template>
    <span class="flex gap-4  h-6 ml-8 align-middle">
        <button @click="decrementar" class="bg-indigo-300 w-6">-                        
        </button>
        <span>{{ count }}</span>
        <button @click="incrementar" class="bg-indigo-300 w-6">+                           
        </button>      
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
                if (this.count>0) {
                this.count--;
                }              
            },      
   
            incrementar(){
                if (this.count<20){ 
                this.count++;
                }
            },
    
        },

    }   

</script>

<style></style> 
