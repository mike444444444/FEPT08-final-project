<template>
  <div class="navContainer z-10">
    <div class="flex flex-row justify-between p-4 gap-8 text-white">
      <h1 class="text-6xl text-left font-black text-white ml-4">{{ title }}</h1>  
      
      <nav class="flex flex-row gap-6 p-7 ml-10">       
          <router-link to="/">Inicio</router-link>
          <router-link to="/quienesSomos">Quienes somos</router-link>
          <router-link to="/quesosOveja">Quesos de oveja</router-link>
          <router-link to="/quesosCabra">Quesos de cabra</router-link>
          <router-link to="/tienda">Tienda</router-link>
          <router-link to="/valoresNutricionales">Valores nutricionales</router-link>
          <router-link to="/carrito"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
         <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg></router-link>      
      
      </nav>
      
    </div>
  </div>
    <router-view></router-view>

</template>

<script>
// import { routerView,routerLink} from 'vue-router';

export default {
  name: "App",
  data(){
    return{
      title: "El pastoret",
     
    }
  }  
}
</script>
<style>
  
</style>