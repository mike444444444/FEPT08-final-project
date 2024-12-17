<template>
  <div class="p-48">
      <!-- Component.vue -->
    <h2>Total Clics: {{ store.totalClicks }}</h2>

    <div class="card">
      <button type="button" @click="store.increment('a')">
      Option A clicked {{ store.options['a'] }} times
      </button>

      <button type="button" @click="store.delayedIncrement('b')">
      Option B clicked {{ store.options['b'] }} times
      </button>

      <button type="button" @click="store.increment('c')">
      Option C clicked {{ store.options['c'] }} times
      </button>
    </div>
  
  </div>
</template>



<!-- Component.vue -->
<script>
import { createPinia } from 'pinia'
import { useCounterStore } from '../stores/counter';
// const store = useCounterStore();




export default {
  name:"Carrito",
    data() {
      return {
      }
    }, 
    computed: {
      store(){
        return useCounterStore()
      }
    }  
}
</script>

<style>

</style>