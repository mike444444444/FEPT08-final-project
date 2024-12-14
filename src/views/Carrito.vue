<template>
    <div class="p-32">
        CARRITO
    </div>
    {{ getlistaArticulos }} 
    <button @click="$event => addItem()">add</button>


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