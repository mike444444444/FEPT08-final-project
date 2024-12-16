<template>
    <div class="p-40">
      <h1 class="text-center text-black">Tu carrito con los productos seleccionados</h1> 
    </div>
    {{ getlistaArticulos }} 
    <!-- <button @click="$event => addItem()">add</button> -->
     <!-- <button v-on:click="removeItemFromCart"></button> -->


</template>


<script>
import { useArticulosStore } from '../stores/ArticulosStore';
import { mapState } from 'pinia';
export default {
    name:"Carrito",
  data() {
    return {
    }
  },
    computed: {
    ...mapState(useArticulosStore,['listaArticulos'])
  },
}
</script>
<style>
    
</style>